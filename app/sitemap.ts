import type { MetadataRoute } from "next";
import { areas, articles, policyPages, productCategories, products, projects, siteData } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/gioi-thieu",
    "/lien-he",
    "/bao-gia",
    "/san-pham",
    "/du-an",
    "/khu-vuc",
    "/kien-thuc",
    "/chinh-sach",
    "/huong-dan"
  ];

  const categoryRoutes = productCategories.map((item) => `/san-pham/${item.slug}`);
  const productRoutes = products.map((item) => `/san-pham/chi-tiet/${item.slug}`);
  const projectRoutes = projects.map((item) => `/du-an/${item.slug}`);
  const areaRoutes = areas.map((item) => `/khu-vuc/${item.slug}`);
  const articleRoutes = articles.map((item) => `/kien-thuc/${item.slug}`);
  const policyRoutes = policyPages.map((item) => `/chinh-sach/${item.slug}`);

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...projectRoutes, ...areaRoutes, ...articleRoutes, ...policyRoutes].map((path) => ({
    url: `${siteData.domain}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
