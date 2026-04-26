"use client";

import Script from "next/script";
import { type CSSProperties, type FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { siteData } from "@/lib/site-data";
import { getZaloUrl, openZalo } from "@/lib/zalo";
import { trackEvent } from "@/components/analytics";

type FormState = {
  name: string;
  phone: string;
  email: string;
  area: string;
  message: string;
  attachmentUrl: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  area: "",
  message: "",
  attachmentUrl: ""
};

const phoneRegex = /^(?:\+?84|0)(?:3|5|7|8|9)\d{8}$/;
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type TurnstileWidgetId = string;

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement | string, options: {
        sitekey: string;
        callback?: (token: string) => void;
        "expired-callback"?: () => void;
        "error-callback"?: () => void;
      }) => TurnstileWidgetId;
      reset: (widgetId?: TurnstileWidgetId) => void;
      remove?: (widgetId: TurnstileWidgetId) => void;
    };
  }
}

const stepOneQuickOptions = [
  "Quán cafe / trà sữa",
  "Nhà hàng / khách sạn",
  "Sân vườn / biệt thự",
  "Dù lệch tâm",
  "Chưa rõ, cần tư vấn"
];

const stepTwoQuickOptions = [
  "Cần báo giá nhanh",
  "Cần tư vấn loại phù hợp",
  "Có sẵn kích thước",
  "Cần số lượng nhiều",
  "Cần lắp cho quán cafe"
];

const stepCardStyle: CSSProperties = { display: "grid", gap: "1rem" };
const progressRowStyle: CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" };
const progressItemBaseStyle: CSSProperties = { borderRadius: "999px", padding: "0.75rem 1rem", textAlign: "center", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.2 };
const quickOptionsWrapStyle: CSSProperties = { display: "flex", flexWrap: "wrap", gap: "0.5rem" };
const quickOptionStyle: CSSProperties = { border: "1px solid rgba(15, 23, 42, 0.12)", background: "#fff", borderRadius: "999px", padding: "0.75rem 0.875rem", fontWeight: 600, fontSize: "0.92rem", lineHeight: 1.2, cursor: "pointer" };
const helperBoxStyle: CSSProperties = { background: "#fff7ed", border: "1px solid #fdba74", color: "#9a3412", borderRadius: "1rem", padding: "0.875rem 1rem", fontSize: "0.95rem", lineHeight: 1.5 };
const secondaryButtonStyle: CSSProperties = { minHeight: "48px", borderRadius: "999px", border: "1px solid rgba(15, 23, 42, 0.12)", background: "#fff", color: "#0f172a", fontWeight: 700, cursor: "pointer", padding: "0.875rem 1rem" };
const disclosureButtonStyle: CSSProperties = { minHeight: "44px", border: "0", background: "transparent", color: "#0f172a", fontWeight: 700, textAlign: "left", padding: "0.25rem 0", cursor: "pointer" };

function dispatchLeadFormEvent(name: "lead-form-started" | "lead-form-reset") {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(name));
}

export function LeadForm({ source = "website" }: { source?: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [selectedStepOneOption, setSelectedStepOneOption] = useState<string>("");
  const [selectedStepTwoOptions, setSelectedStepTwoOptions] = useState<string[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [showExtraDetails, setShowExtraDetails] = useState(false);
  const [lastLeadText, setLastLeadText] = useState("");
  const [showZaloFallback, setShowZaloFallback] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const companyRef = useRef<HTMLInputElement>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<TurnstileWidgetId | null>(null);
  const lastSubmitAtRef = useRef(0);

  const normalizedPhone = form.phone.replace(/[\s.\-()]/g, "").trim();

  const composedMessage = useMemo(() => {
    const parts = [selectedStepOneOption, selectedStepTwoOptions.length > 0 ? selectedStepTwoOptions.join(", ") : "", form.message.trim()].filter(Boolean);
    return parts.length === 0 ? "Cần tư vấn loại ô dù phù hợp và báo giá." : parts.join(". ");
  }, [selectedStepOneOption, selectedStepTwoOptions, form.message]);

  const isStepOneValid = useMemo(() => phoneRegex.test(normalizedPhone) && selectedStepOneOption.length > 0, [normalizedPhone, selectedStepOneOption]);
  const isStepTwoValid = useMemo(() => form.name.trim().length >= 2 && composedMessage.trim().length >= 10, [form.name, composedMessage]);

  const renderTurnstile = useCallback(() => {
    if (typeof window === "undefined" || !turnstileSiteKey || !turnstileContainerRef.current || !window.turnstile || turnstileWidgetIdRef.current) return;

    turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
      sitekey: turnstileSiteKey,
      callback: (token) => {
        setTurnstileToken(token);
        setTurnstileReady(true);
      },
      "expired-callback": () => {
        setTurnstileToken("");
        setTurnstileReady(false);
      },
      "error-callback": () => {
        setTurnstileToken("");
        setTurnstileReady(false);
      }
    });
  }, [turnstileSiteKey]);

  useEffect(() => {
    renderTurnstile();
    return () => {
      if (typeof window !== "undefined" && turnstileWidgetIdRef.current && window.turnstile?.remove) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, [renderTurnstile]);

  function resetTurnstile() {
    setTurnstileToken("");
    setTurnstileReady(false);
    if (turnstileWidgetIdRef.current && typeof window !== "undefined" && window.turnstile) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  }

  async function submitLead() {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        phone: normalizedPhone,
        message: composedMessage,
        source,
        company: companyRef.current?.value || "",
        turnstileToken: turnstileToken || undefined
      })
    });

    const data = (await response.json().catch(() => null)) as { ok?: boolean; message?: string } | null;
    return { ok: response.ok && Boolean(data?.ok), message: data?.message };
  }

  async function copyLeadText(text: string) {
    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) return false;
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  function markFormStartedOnce() {
    if (hasStarted) return;
    setHasStarted(true);
    dispatchLeadFormEvent("lead-form-started");
    trackEvent("lead_form_start", { source });
  }

  function handleStepOneQuickOptionSelect(option: string) {
    markFormStartedOnce();
    setSelectedStepOneOption(option);
  }

  function handleStepTwoQuickOptionToggle(option: string) {
    markFormStartedOnce();
    setSelectedStepTwoOptions((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]));
  }

  function handleGoToStepTwo() {
    if (!phoneRegex.test(normalizedPhone)) {
      setStatus("error");
      setMessage("Vui lòng nhập số điện thoại Việt Nam hợp lệ để nhận báo giá nhanh.");
      trackEvent("submit_lead_error", { source, error_type: "invalid_phone_step_1" });
      return;
    }

    if (!selectedStepOneOption) {
      setStatus("error");
      setMessage("Vui lòng chọn nhanh nhu cầu để chúng tôi tư vấn mẫu phù hợp hơn.");
      trackEvent("submit_lead_error", { source, error_type: "missing_need_step_1" });
      return;
    }

    markFormStartedOnce();
    setStatus("idle");
    setMessage("");
    setShowZaloFallback(false);
    setStep(2);
    trackEvent("lead_form_step_1_complete", { source, selected_step_1_option: selectedStepOneOption || "none" });
  }

  function handleBackToStepOne() {
    setStatus("idle");
    setMessage("");
    setShowZaloFallback(false);
    setStep(1);
  }

  function setSubmitError(errorMessage: string, errorType: string) {
    setStatus("error");
    setMessage(errorMessage);
    trackEvent("submit_lead_error", { source, error_type: errorType });
  }

  async function handleZaloFallback() {
    if (lastLeadText) await copyLeadText(lastLeadText);
    const opened = openZalo(siteData.phone);
    trackEvent("submit_lead_fallback", { source, channel: "zalo", popup_opened: opened ? "yes" : "no" });
    trackEvent("click_zalo", { source, placement: "lead_form_fallback" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    if (!phoneRegex.test(normalizedPhone)) {
      setStep(1);
      setSubmitError("Vui lòng nhập số điện thoại Việt Nam hợp lệ để chúng tôi liên hệ báo giá nhanh.", "invalid_phone");
      return;
    }
    if (!form.name.trim()) {
      setSubmitError("Vui lòng nhập tên để chúng tôi tiện xưng hô khi tư vấn.", "missing_name");
      return;
    }
    if (form.name.trim().length < 2) {
      setSubmitError("Tên cần rõ hơn một chút để chúng tôi hỗ trợ tốt hơn.", "short_name");
      return;
    }
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setSubmitError("Email chưa đúng định dạng. Bạn có thể bỏ trống nếu muốn nhận báo giá qua điện thoại/Zalo.", "invalid_email");
      return;
    }
    if (composedMessage.trim().length < 10) {
      setSubmitError("Vui lòng chọn nhanh nhu cầu hoặc thêm mô tả ngắn để chúng tôi tư vấn chính xác hơn.", "short_message");
      return;
    }
    if (turnstileSiteKey && !turnstileToken) {
      setSubmitError("Vui lòng hoàn tất bước xác minh bảo mật trước khi gửi yêu cầu.", "captcha_missing");
      return;
    }

    setStatus("submitting");
    setMessage("Đang gửi yêu cầu...");
    setShowZaloFallback(false);

    const text = [
      "Khách cần báo giá ô dù",
      `Tên: ${form.name}`,
      `SĐT: ${normalizedPhone}`,
      `Nhu cầu: ${composedMessage}`,
      form.area ? `Khu vực: ${form.area}` : "",
      form.email ? `Email: ${form.email}` : "",
      form.attachmentUrl ? `Ảnh/video: ${form.attachmentUrl}` : "",
      `Nguồn: ${source}`
    ].filter(Boolean).join("\n");

    setLastLeadText(text);

    try {
      const result = await submitLead();
      if (!result.ok) {
        setStatus("error");
        setMessage(result.message || "Chưa gửi được yêu cầu. Bạn vẫn có thể bấm nút Zalo bên dưới để gửi nhanh.");
        setShowZaloFallback(true);
        trackEvent("submit_lead_error", { source, error_type: "api_error", selected_step_1_option: selectedStepOneOption || "none", selected_step_2_options: selectedStepTwoOptions.join("|") || "none" });
        resetTurnstile();
        return;
      }

      await copyLeadText(text);
      trackEvent("submit_lead_success", { source, selected_step_1_option: selectedStepOneOption || "none", selected_step_2_options: selectedStepTwoOptions.join("|") || "none", expanded_extra_details: showExtraDetails ? "yes" : "no" });

      setStatus("success");
      setMessage("Đã gửi yêu cầu. Chúng tôi sẽ liên hệ sớm qua điện thoại/Zalo.");
      setForm(initialState);
      setSelectedStepOneOption("");
      setSelectedStepTwoOptions([]);
      setShowExtraDetails(false);
      setStep(1);
      setHasStarted(false);
      resetTurnstile();
      dispatchLeadFormEvent("lead-form-reset");

      if (typeof window !== "undefined") window.location.assign(`/cam-on?source=${encodeURIComponent(source)}`);
    } catch {
      setStatus("error");
      setMessage("Kết nối chưa ổn định. Bạn có thể bấm nút Zalo bên dưới để gửi nhanh nội dung đã nhập.");
      setShowZaloFallback(true);
      trackEvent("submit_lead_error", { source, error_type: "network_error" });
      resetTurnstile();
    }
  }

  return (
    <form id="lead-form" className="lead-form" onSubmit={handleSubmit} noValidate>
      {turnstileSiteKey ? (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onLoad={renderTurnstile} />
      ) : null}

      <label className="honeypot" aria-hidden="true">
        Công ty
        <input ref={companyRef} name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <div style={progressRowStyle} aria-label="Tiến trình điền form">
        <div style={{ ...progressItemBaseStyle, background: step === 1 ? "#0f172a" : "#e2e8f0", color: step === 1 ? "#fff" : "#334155" }}>
          Bước 1
          <div style={{ fontSize: "0.82rem", fontWeight: 600, marginTop: "0.2rem" }}>Bắt đầu nhanh</div>
        </div>
        <div style={{ ...progressItemBaseStyle, background: step === 2 ? "#0f172a" : "#e2e8f0", color: step === 2 ? "#fff" : "#334155" }}>
          Bước 2
          <div style={{ fontSize: "0.82rem", fontWeight: 600, marginTop: "0.2rem" }}>Hoàn tất yêu cầu</div>
        </div>
      </div>

      {step === 1 ? (
        <div style={stepCardStyle}>
          <div style={helperBoxStyle}>Nhập số điện thoại và chọn nhanh nhu cầu để nhận mẫu phù hợp.</div>
          <label>
            Số điện thoại
            <input value={form.phone} onChange={(event) => { markFormStartedOnce(); setForm((prev) => ({ ...prev, phone: event.target.value })); }} placeholder="Nhập số điện thoại (nhận báo giá nhanh)" inputMode="tel" required disabled={status === "submitting"} autoComplete="tel" />
          </label>
          <div>
            <p className="form-note" style={{ marginBottom: "0.625rem" }}>Bạn cần báo giá dòng ô dù nào?</p>
            <div style={quickOptionsWrapStyle}>
              {stepOneQuickOptions.map((option) => {
                const isActive = selectedStepOneOption === option;
                return <button key={option} type="button" onClick={() => handleStepOneQuickOptionSelect(option)} style={{ ...quickOptionStyle, background: isActive ? "#0f172a" : "#fff", color: isActive ? "#fff" : "#0f172a", borderColor: isActive ? "#0f172a" : "rgba(15, 23, 42, 0.12)" }}>{option}</button>;
              })}
            </div>
          </div>
          <button type="button" className="submit-button" disabled={!isStepOneValid || status === "submitting"} onClick={handleGoToStepTwo}>Tiếp tục nhận báo giá</button>
          <p className="form-note">✔ Chỉ 2 thông tin ở bước đầu · ✔ Tư vấn đúng mẫu · ✔ Không phát sinh chi phí</p>
        </div>
      ) : (
        <div style={stepCardStyle} data-step="2">
          <div style={helperBoxStyle}>Gần xong rồi. Chỉ cần thêm tên để đội ngũ tư vấn đúng nhu cầu và gửi báo giá rõ ràng.</div>
          <label>
            Tên của bạn
            <input value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} placeholder="Ví dụ: Anh Nam, Chị Lan..." required disabled={status === "submitting"} autoComplete="name" enterKeyHint="done" />
          </label>
          <div>
            <p className="form-note" style={{ marginBottom: "0.625rem" }}>Chọn thêm nếu đúng nhu cầu của bạn:</p>
            <div style={quickOptionsWrapStyle}>
              {stepTwoQuickOptions.map((option) => {
                const isActive = selectedStepTwoOptions.includes(option);
                return <button key={option} type="button" onClick={() => handleStepTwoQuickOptionToggle(option)} style={{ ...quickOptionStyle, background: isActive ? "#0f172a" : "#fff", color: isActive ? "#fff" : "#0f172a", borderColor: isActive ? "#0f172a" : "rgba(15, 23, 42, 0.12)" }}>{option}</button>;
              })}
            </div>
          </div>
          <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "1fr" }}>
            {turnstileSiteKey ? (
              <div className="turnstile-box" aria-label="Xác minh chống spam">
                <div ref={turnstileContainerRef} />
                {!turnstileReady ? <p className="form-note">Vui lòng hoàn tất xác minh bảo mật trước khi gửi.</p> : null}
              </div>
            ) : null}
            <button type="submit" className="submit-button" disabled={!isStepTwoValid || status === "submitting" || Boolean(turnstileSiteKey && !turnstileToken)}>{status === "submitting" ? "Đang gửi yêu cầu..." : "Gửi yêu cầu báo giá"}</button>
            <button type="button" style={disclosureButtonStyle} onClick={() => setShowExtraDetails((prev) => !prev)} aria-expanded={showExtraDetails}>{showExtraDetails ? "Ẩn bớt chi tiết" : "Gửi thêm thông tin (không bắt buộc)"}</button>
            <button type="button" onClick={handleBackToStepOne} style={secondaryButtonStyle} disabled={status === "submitting"}>Quay lại bước 1</button>
          </div>
          {showExtraDetails ? (
            <div style={stepCardStyle}>
              <label>Ghi chú thêm<textarea value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} placeholder="Ví dụ: Cần 2 dù lệch tâm, ưu tiên loại bền, cần tư vấn mẫu phù hợp." disabled={status === "submitting"} rows={4} maxLength={1000} /></label>
              <label>Khu vực<input value={form.area} onChange={(event) => setForm((prev) => ({ ...prev, area: event.target.value }))} placeholder="Ví dụ: TP.HCM, Bình Dương, Đà Nẵng..." disabled={status === "submitting"} autoComplete="address-level1" maxLength={120} /></label>
              <label>Email<input value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} placeholder="Email nếu bạn muốn nhận báo giá qua mail" type="email" disabled={status === "submitting"} autoComplete="email" maxLength={120} /></label>
              <label>Link ảnh hoặc video hiện trạng<input value={form.attachmentUrl} onChange={(event) => setForm((prev) => ({ ...prev, attachmentUrl: event.target.value }))} placeholder="Dán link ảnh/video nếu có để tư vấn chính xác hơn" disabled={status === "submitting"} inputMode="url" autoComplete="off" enterKeyHint="send" maxLength={300} /></label>
            </div>
          ) : null}
          <p className="form-note">Sau khi gửi thành công, bạn sẽ được chuyển sang trang xác nhận. Nếu cần gửi thêm ảnh, hãy dùng nút Zalo dự phòng.</p>
          <p className="form-note">✔ Báo giá nhanh theo nhu cầu thực tế · ✔ Hỗ trợ tư vấn toàn quốc · ✔ Không phát sinh chi phí tư vấn</p>
        </div>
      )}

      {message ? <p className={`form-status ${status === "error" ? "is-error" : "is-success"}`}>{message}</p> : null}
      {showZaloFallback ? (
        <div className="lead-fallback" role="group" aria-label="Gửi yêu cầu qua Zalo">
          <button type="button" className="button button-primary" onClick={handleZaloFallback}>Không mở được Zalo? Bấm vào đây</button>
          <a href={getZaloUrl(siteData.phone)} target="_blank" rel="noreferrer" className="text-link" onClick={() => { trackEvent("submit_lead_fallback", { source, channel: "zalo_direct_link" }); trackEvent("click_zalo", { source, placement: "lead_form_direct_link" }); }}>Mở Zalo bằng liên kết trực tiếp</a>
        </div>
      ) : null}
    </form>
  );
}
