"use client";

import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export function Analytics() {
  return (
    <>
      {gtmId ? (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var firstScript = document.getElementsByTagName('script')[0];
            var script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtm.js?id=${gtmId}';
            firstScript.parentNode.insertBefore(script, firstScript);
          `}
        </Script>
      ) : null}

      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type TrackingParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(action: string, params?: TrackingParams) {
  if (typeof window === "undefined") return;

  const cleanParams = Object.fromEntries(
    Object.entries(params ?? {}).filter(([, value]) => value !== undefined)
  );

  if (typeof window.gtag === "function") {
    window.gtag("event", action, cleanParams);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: action, ...cleanParams });
  }
}
