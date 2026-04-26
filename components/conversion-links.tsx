"use client";

import type { ReactNode } from "react";
import { siteData } from "@/lib/site-data";
import { getZaloUrl } from "@/lib/zalo";
import { trackEvent } from "@/components/analytics";

export function PhoneLink({ placement = "cta", className = "button button-secondary", children }: { placement?: string; className?: string; children?: ReactNode }) {
  return (
    <a href={`tel:${siteData.phone}`} className={className} onClick={() => trackEvent("click_phone", { placement })}>
      {children ?? `Gọi ${siteData.phoneDisplay}`}
    </a>
  );
}

export function ZaloLink({ placement = "cta", className = "button button-primary", children }: { placement?: string; className?: string; children?: ReactNode }) {
  return (
    <a href={getZaloUrl(siteData.phone)} target="_blank" rel="noreferrer" className={className} onClick={() => trackEvent("click_zalo", { placement })}>
      {children ?? "Nhắn Zalo"}
    </a>
  );
}
