import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards";
import { BaseSchemas, BreadcrumbJsonLd, FAQJsonLd, JsonLd } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Breadcrumbs, Button, Container, InfoList, SectionTitle } from "@/components/ui";
import { articles, getCategory, getProductsByCategory, productCategories, siteData } from "@/lib/site-data";
import { categorySeoContent } from "@/lib/seo-content";

export function generateStaticParams() { return productCategories.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = getCategory(params.slug);
  if (!category) return {};
  return { title: category.seoTitle, description: category.seoDescription, alternates: { canonical: `/san-pham/${category.slug}` }, openGraph: { title: category.seoTitle, description: category.seoDescription, url: `${siteData.domain}/san-pham/${category.slug}`, images: [{ url: category.heroImage, alt: `${category.name} tại Ô Dù Đại Phát` }] } };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  const items = getProductsByCategory(category.slug);
  const seo = categorySeoContent[category.slug];
  const relatedCategories = seo?.relatedCategorySlugs.map((slug) => getCategory(slug)).filter(Boolean) ?? [];
  const relatedArticles = seo?.relatedArticleSlugs.map((slug) => articles.find((article) => article.slug === slug)).filter(Boolean) ?? [];
  const collectionSchema = { "@context": "https://schema.org", "@type": "CollectionPage", name: category.name, description: category.seoDescription, url: `${siteData.domain}/san-pham/${category.slug}`, mainEntity: items.map((item) => ({ "@type": "Product", name: item.name, description: item.summary, image: `${siteData.domain}${item.image}`, brand: { "@type": "Brand", name: siteData.brandName }, url: `${siteData.domain}/san-pham/chi-tiet/${item.slug}`, category: category.name })) };

  return <SiteShell>
    <BaseSchemas />
    <BreadcrumbJsonLd items={[{ name: "Trang chủ", url: "/" }, { name: "Sản phẩm", url: "/san-pham" }, { name: category.name, url: `/san-pham/${category.slug}` }]} />
    <JsonLd data={collectionSchema} />
    {seo ? <FAQJsonLd items={seo.faqs} /> : null}
    <section className="page-hero"><Container><Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm", href: "/san-pham" }, { label: category.name }]} /><SectionTitle eyebrow="Danh mục sản phẩm" title={category.name} subtitle={category.intro} align="left" as="h1" /><div className="page-actions"><Button href="/bao-gia" variant="primary">Nhận báo giá nhanh</Button><Button href={siteData.zaloLink} external>Gửi ảnh qua Zalo</Button></div></Container></section>
    <section className="section"><Container><div className="content-grid"><article className="content-card"><h2>Điểm phù hợp của dòng sản phẩm này</h2><InfoList items={category.benefits} /></article><article className="content-card"><h2>Tư vấn theo mặt bằng thực tế</h2><p>Mỗi không gian sẽ cần kiểu dù, kích thước và màu sắc khác nhau. Nếu chưa chắc nên chọn mẫu nào, bạn có thể gửi ảnh vị trí qua Zalo để được tư vấn nhanh hơn.</p></article></div><div className="card-grid four-up">{items.map((item) => <ProductCard key={item.slug} item={item} />)}</div></Container></section>
    {seo ? <section className="section section-soft"><Container><div className="content-grid"><article className="content-card wide-content-card"><h2>{seo.title}</h2><p>{seo.lead}</p><h3>Ứng dụng thực tế</h3><InfoList items={seo.applications} /><h3>Gợi ý chọn theo nhu cầu</h3><InfoList items={seo.choosingTips} /></article><article className="content-card"><h2>Bảng gợi ý kích thước</h2><div className="responsive-table"><table><thead><tr><th>Nhu cầu</th><th>Gợi ý</th><th>Lưu ý</th></tr></thead><tbody>{seo.sizeGuide.map((row) => <tr key={row.need}><td>{row.need}</td><td>{row.suggestion}</td><td>{row.note}</td></tr>)}</tbody></table></div><div className="mini-cta-box"><strong>Cần chọn nhanh?</strong><p>Gửi ảnh mặt bằng qua Zalo để được gợi ý mẫu, kích thước và số lượng phù hợp.</p><Button href={siteData.zaloLink} external variant="primary">Gửi ảnh qua Zalo</Button></div></article></div></Container></section> : null}
    {seo ? <section className="section"><Container><SectionTitle eyebrow="FAQ" title={`Câu hỏi thường gặp về ${category.name.toLowerCase()}`} /><div className="faq-list">{seo.faqs.map((item) => <details key={item.question} className="faq-item"><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></Container></section> : null}
    {seo ? <section className="section section-soft"><Container><SectionTitle eyebrow="Xem thêm" title="Liên kết hữu ích trước khi đặt mua" subtitle="Các trang liên quan giúp bạn so sánh mẫu, xem thêm kinh nghiệm chọn dù và gửi yêu cầu báo giá chính xác hơn." /><div className="route-grid">{relatedCategories.map((item) => item ? <Link key={item.slug} href={`/san-pham/${item.slug}`} className="route-card">{item.name}</Link> : null)}{relatedArticles.map((item) => item ? <Link key={item.slug} href={`/kien-thuc/${item.slug}`} className="route-card">{item.title}</Link> : null)}<Link href="/du-an" className="route-card">Xem công trình thực tế</Link><Link href="/bao-gia" className="route-card">Nhận báo giá nhanh</Link></div></Container></section> : null}
  </SiteShell>;
}
