import { siteData } from "@/lib/site-data";

type BreadcrumbItem = { name: string; url: string };
type FAQItem = { question: string; answer: string };
type ProductSchemaItem = { name: string; summary: string; image: string; slug: string; categorySlug?: string };

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteData.domain}${item.url}`
    }))
  }} />;
}

export function ProductJsonLd({ items }: { items: ProductSchemaItem[] }) {
  return <JsonLd data={items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    description: item.summary,
    image: item.image.startsWith("http") ? item.image : `${siteData.domain}${item.image}`,
    url: item.categorySlug ? `${siteData.domain}/san-pham/chi-tiet/${item.slug}` : `${siteData.domain}/san-pham`,
    brand: { "@type": "Brand", name: siteData.brandName },
    category: item.categorySlug || "Ô dù ngoài trời",
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
      url: `${siteData.domain}/bao-gia`
    }
  }))} />;
}

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  }} />;
}

export function BaseSchemas() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteData.brandName,
    url: siteData.domain,
    telephone: siteData.phone,
    email: siteData.email,
    image: `${siteData.domain}${siteData.socialImage}`,
    areaServed: { "@type": "Country", name: "Vietnam" },
    description: siteData.seoDescription,
    sameAs: [siteData.zaloLink, siteData.secondaryDomain],
    contactPoint: [{ "@type": "ContactPoint", telephone: siteData.phone, contactType: "sales", areaServed: "VN", availableLanguage: ["vi"] }]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteData.brandName,
    url: siteData.domain,
    inLanguage: "vi-VN",
    potentialAction: { "@type": "SearchAction", target: `${siteData.domain}/kien-thuc?tu-khoa={search_term_string}`, "query-input": "required name=search_term_string" }
  };

  return <JsonLd data={[organizationSchema, websiteSchema]} />;
}
