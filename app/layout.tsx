import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteData } from "@/lib/site-data";
import { Analytics } from "@/components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.domain),
  title: {
    default: siteData.seoTitle,
    template: `%s | ${siteData.brandName}`
  },
  description: siteData.seoDescription,
  applicationName: siteData.brandName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteData.seoTitle,
    description: siteData.seoDescription,
    url: siteData.domain,
    siteName: siteData.brandName,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: siteData.socialImage,
        width: 1200,
        height: 630,
        alt: siteData.brandName
      }
    ]
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seoTitle,
    description: siteData.seoDescription,
    images: [{ url: siteData.socialImage, width: 1200, height: 630, alt: siteData.brandName }]
  },
  robots: {
    index: true,
    follow: true
  },
  other: {
    "format-detection": "telephone=no"
  }
};

export const viewport: Viewport = {
  themeColor: "#f97316"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
