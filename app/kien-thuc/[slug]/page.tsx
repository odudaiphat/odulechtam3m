import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards";
import { BaseSchemas, BreadcrumbJsonLd, JsonLd } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Breadcrumbs, Button, Container, SectionTitle } from "@/components/ui";
import { articles, getArticle, getRelatedProducts, siteData } from "@/lib/site-data";

export function generateStaticParams() { return articles.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticle(params.slug); if (!article) return {};
  return { title: article.seoTitle, description: article.seoDescription, alternates: { canonical: `/kien-thuc/${article.slug}` }, openGraph: { title: article.seoTitle, description: article.seoDescription, url: `${siteData.domain}/kien-thuc/${article.slug}`, type: "article" } };
}

function renderParagraph(text: string) {
  return text.split(/(\/san-pham\/[a-z0-9-]+|\/san-pham|\/kien-thuc\/[a-z0-9-]+|\/bao-gia|\/du-an)/g).map((part, index) => part.startsWith("/") ? <Link key={`${part}-${index}`} href={part} className="inline-text-link">{part.replace(/^\//, "")}</Link> : part);
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug); if (!article) notFound();
  const relatedProducts = getRelatedProducts(article.relatedProductSlugs);
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.seoDescription, inLanguage: "vi-VN", mainEntityOfPage: `${siteData.domain}/kien-thuc/${article.slug}`, author: { "@type": "Organization", name: siteData.brandName, url: siteData.domain }, publisher: { "@type": "Organization", name: siteData.brandName, logo: { "@type": "ImageObject", url: `${siteData.domain}/favicon.svg` } } };
  return <SiteShell>
    <BaseSchemas />
    <BreadcrumbJsonLd items={[{ name: "Trang chủ", url: "/" }, { name: "Kiến thức", url: "/kien-thuc" }, { name: article.title, url: `/kien-thuc/${article.slug}` }]} />
    <JsonLd data={articleSchema} />
    <section className="page-hero"><Container><Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Kiến thức", href: "/kien-thuc" }, { label: article.title }]} /><SectionTitle eyebrow={article.topic} title={article.title} subtitle={article.excerpt} align="left" as="h1" /><div className="page-actions"><Button href="/bao-gia" variant="primary">Nhận báo giá nhanh</Button><Button href={siteData.zaloLink} external>Gửi ảnh qua Zalo</Button></div></Container></section>
    <section className="section"><Container><article className="article-detail">{article.content.map((block) => <section key={block.heading} className="article-block"><h2>{block.heading}</h2>{block.paragraphs.map((paragraph) => <p key={paragraph}>{renderParagraph(paragraph)}</p>)}{block.bullets ? <ul className="check-list">{block.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}</section>)}<div className="mini-cta-box article-cta-box"><strong>Cần chọn mẫu hoặc hỏi giá?</strong><p>Gửi ảnh mặt bằng, số lượng dự kiến và khu vực giao hàng qua Zalo để Ô Dù Đại Phát tư vấn mẫu ô dù ngoài trời phù hợp.</p><Button href={siteData.zaloLink} external variant="primary">Nhắn Zalo 0349 596 898</Button></div></article></Container></section>
    <section className="section section-soft"><Container><SectionTitle eyebrow="Sản phẩm liên quan" title="Mẫu ô dù liên quan" /><div className="card-grid four-up">{relatedProducts.map((item) => <ProductCard key={item.slug} item={item} />)}</div></Container></section>
  </SiteShell>;
}
