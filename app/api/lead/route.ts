import { NextResponse } from "next/server";
import { siteData } from "@/lib/site-data";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  area?: string;
  message?: string;
  attachmentUrl?: string;
  source?: string;
  company?: string;
  turnstileToken?: string;
};

type CleanLeadPayload = Required<Omit<LeadPayload, "company" | "turnstileToken">>;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const noStoreHeaders = { "Cache-Control": "no-store" };
const genericValidationMessage = "Thông tin chưa hợp lệ. Vui lòng kiểm tra lại họ tên, số điện thoại và nội dung cần tư vấn.";
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxRequests = 5;
const rateLimitStore = new Map<string, RateLimitEntry>();
const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL;
const upstashRedisRestToken = process.env.UPSTASH_REDIS_REST_TOKEN;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const vietnamPhoneRegex = /^(?:\+?84|0)(?:3|5|7|8|9)\d{8}$/;
const allowedAttachmentExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".mp4",
  ".mov",
  ".webm"
];

function sanitize(value: unknown, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function normalizePhone(value: string) {
  return value.replace(/[\s.\-()]/g, "");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

function logLeadError(
  event: string,
  error: unknown,
  context?: Record<string, string | number | boolean | undefined>
) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[lead-api] ${event}`, { message, ...context });

  const sentry = (globalThis as typeof globalThis & {
    Sentry?: {
      captureException?: (error: unknown, context?: unknown) => void;
    };
  }).Sentry;

  sentry?.captureException?.(error, {
    tags: { feature: "lead-form", event },
    extra: context
  });
}

function isRateLimitedInMemory(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  // Best-effort cleanup for long-running server processes.
  if (rateLimitStore.size > 1000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetAt <= now) rateLimitStore.delete(key);
    }
  }

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > rateLimitMaxRequests;
}

async function isRateLimitedWithUpstash(ip: string) {
  if (!upstashRedisRestUrl || !upstashRedisRestToken) return null;

  const key = `lead-rate-limit:${ip}`;
  const ttlSeconds = Math.ceil(rateLimitWindowMs / 1000);
  const encodedKey = encodeURIComponent(key);

  const incrResponse = await fetch(`${upstashRedisRestUrl}/incr/${encodedKey}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${upstashRedisRestToken}` },
    cache: "no-store"
  });

  if (!incrResponse.ok) {
    throw new Error(`Upstash INCR failed with status ${incrResponse.status}`);
  }

  const incrData = (await incrResponse.json().catch(() => null)) as { result?: number } | null;
  const count = Number(incrData?.result || 0);

  // Set the fixed-window TTL only when the key is created. Do not refresh TTL on every request.
  if (count === 1) {
    const expireResponse = await fetch(`${upstashRedisRestUrl}/expire/${encodedKey}/${ttlSeconds}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${upstashRedisRestToken}` },
      cache: "no-store"
    });

    if (!expireResponse.ok) {
      throw new Error(`Upstash EXPIRE failed with status ${expireResponse.status}`);
    }
  }

  return count > rateLimitMaxRequests;
}

async function isRateLimited(ip: string) {
  try {
    const upstashResult = await isRateLimitedWithUpstash(ip);
    if (typeof upstashResult === "boolean") return upstashResult;
  } catch (error) {
    logLeadError("rate_limit_upstash_error", error, { ip });
  }

  return isRateLimitedInMemory(ip);
}

function isValidAttachmentUrl(value: string) {
  if (!value) return true;

  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol)) return false;

    const pathname = url.pathname.toLowerCase();
    return allowedAttachmentExtensions.some((extension) => pathname.endsWith(extension));
  } catch {
    return false;
  }
}

function validateLead(body: LeadPayload): CleanLeadPayload | null {
  const payload = {
    name: sanitize(body.name, 80),
    phone: normalizePhone(sanitize(body.phone, 24)),
    email: sanitize(body.email, 120).toLowerCase(),
    area: sanitize(body.area, 120),
    message: sanitize(body.message, 1000),
    attachmentUrl: sanitize(body.attachmentUrl, 300),
    source: sanitize(body.source, 80) || "trang web"
  };

  if (payload.name.length < 2 || payload.name.length > 80) return null;
  if (!vietnamPhoneRegex.test(payload.phone)) return null;
  if (payload.email && !emailRegex.test(payload.email)) return null;
  if (payload.message.length < 10 || payload.message.length > 1000) return null;
  if (!isValidAttachmentUrl(payload.attachmentUrl)) return null;

  return payload;
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ip !== "unknown") formData.append("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData
  });
  const data = (await response.json().catch(() => null)) as { success?: boolean } | null;
  return Boolean(data?.success);
}

async function sendViaResend(payload: CleanLeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL;
  const fromEmail = process.env.LEAD_FROM_EMAIL;

  // Do not use Resend's onboarding sender in production. Configure a verified domain sender instead.
  if (!apiKey || !toEmail || !fromEmail) return false;

  const html = `
    <h2>Yêu cầu báo giá mới</h2>
    <p><strong>Nguồn:</strong> ${escapeHtml(payload.source)}</p>
    <p><strong>Họ tên:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Số điện thoại:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email) || "Không có"}</p>
    <p><strong>Khu vực:</strong> ${escapeHtml(payload.area) || "Không rõ"}</p>
    <p><strong>Nhu cầu:</strong> ${escapeHtml(payload.message)}</p>
    <p><strong>Link ảnh/video:</strong> ${escapeHtml(payload.attachmentUrl) || "Không có"}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `[Lead] ${payload.name} - ${payload.phone}`,
      html
    })
  });

  return response.ok;
}

async function sendViaFormspree(payload: CleanLeadPayload) {
  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) return false;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  return response.ok;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    if (await isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, message: "Bạn gửi quá nhanh. Vui lòng thử lại sau ít phút hoặc gọi trực tiếp để được hỗ trợ." },
        { status: 429, headers: noStoreHeaders }
      );
    }

    const body = (await request.json()) as LeadPayload;

    // Honeypot: return success to bots without sending a notification.
    if (sanitize(body.company, 120)) {
      return NextResponse.json({ ok: true, message: siteData.leadSuccessText }, { headers: noStoreHeaders });
    }

    const isHuman = await verifyTurnstile(sanitize(body.turnstileToken, 2048), ip);

    if (!isHuman) {
      return NextResponse.json({ ok: false, message: genericValidationMessage }, { status: 400, headers: noStoreHeaders });
    }

    const payload = validateLead(body);
    if (!payload) {
      return NextResponse.json({ ok: false, message: genericValidationMessage }, { status: 400, headers: noStoreHeaders });
    }

    const sent = (await sendViaResend(payload)) || (await sendViaFormspree(payload));

    if (!sent) {
      logLeadError("lead_delivery_failed", new Error("No lead delivery provider accepted the message"), {
        source: payload.source
      });

      return NextResponse.json(
        { ok: false, message: siteData.leadErrorText },
        { status: 503, headers: noStoreHeaders }
      );
    }

    return NextResponse.json({ ok: true, message: siteData.leadSuccessText }, { headers: noStoreHeaders });
  } catch (error) {
    logLeadError("lead_post_unhandled_error", error);

    return NextResponse.json({ ok: false, message: siteData.leadErrorText }, { status: 500, headers: noStoreHeaders });
  }
}
