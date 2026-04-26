"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/components/analytics";

type QuoteCtaProps = {
  children: ReactNode;
  className?: string;
  source?: string;
};

export function QuoteCta({ children, className = "button button-primary", source = "homepage" }: QuoteCtaProps) {
  function handleClick() {
    trackEvent("click_quote_cta", { source });

    const form = document.getElementById("lead-form");
    if (!form) {
      window.location.href = "/bao-gia";
      return;
    }

    form.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      const phoneField = form.querySelector<HTMLInputElement>("input[inputmode='tel']");
      phoneField?.focus();
    }, 350);
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
