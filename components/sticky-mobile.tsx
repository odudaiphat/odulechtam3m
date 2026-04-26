"use client";

import { useEffect, useMemo, useState } from "react";
import { siteData } from "@/lib/site-data";
import { getZaloUrl, normalizePhone } from "@/lib/zalo";
import { trackEvent } from "@/components/analytics";

function getPhoneHref(phone: string) {
  return `tel:${normalizePhone(phone)}`;
}

export function StickyMobileBar() {
  const [isNearLeadForm, setIsNearLeadForm] = useState(false);

  const phoneHref = useMemo(() => getPhoneHref(siteData.phone), []);
  const zaloHref = useMemo(() => getZaloUrl(siteData.phone), []);

  useEffect(() => {
    const form = document.getElementById("lead-form");
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearLeadForm(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -20% 0px"
      }
    );

    observer.observe(form);

    return () => {
      observer.disconnect();
    };
  }, []);

  function handleQuoteClick() {
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

    trackEvent("click_quote_cta", { source: "mobile_sticky_cta" });
  }

  function handleCallClick() {
    trackEvent("click_phone", { source: "mobile_sticky_cta" });
  }

  function handleZaloClick() {
    trackEvent("click_zalo", { source: "mobile_sticky_cta" });
  }

  if (isNearLeadForm) {
    return null;
  }

  return (
    <div className="sticky-mobile-bar" aria-label="Thanh hành động nhanh trên điện thoại">
      <a href={phoneHref} className="sticky-mobile-bar__item sticky-mobile-bar__item--call" onClick={handleCallClick}>
        Gọi ngay
      </a>
      <a href={zaloHref} target="_blank" rel="noopener noreferrer" className="sticky-mobile-bar__item sticky-mobile-bar__item--zalo" onClick={handleZaloClick}>
        Zalo
      </a>
      <button type="button" className="sticky-mobile-bar__item sticky-mobile-bar__item--quote" onClick={handleQuoteClick}>
        Báo giá
      </button>
    </div>
  );
}
