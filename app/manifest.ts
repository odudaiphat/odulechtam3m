import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteData.brandName,
    short_name: siteData.brandName,
    description: siteData.seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f97316",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
