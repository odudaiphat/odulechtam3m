import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BaseSchemas, BreadcrumbJsonLd, FAQJsonLd, JsonLd } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Breadcrumbs, Button, Container, InfoList, SectionTitle } from "@/components/ui";
import { getCategory, getProduct, products, siteData } from "@/lib/site-data";
import { ImageZoom } from "@/components/image-zoom";
import { MediaGallery } from "@/components/media-gallery";
import { YoutubeGallery } from "@/components/youtube-gallery";
import { productGallery, videoGallery } from "@/lib/media-data";
import { guideVideos } from "@/lib/video-data";

export function generateStaticParams() { return products.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProduct(params.slug); if (!product) return {};
  return { title: product.seoTitle, description: product.seoDescription, alternates: { canonical: `/san-pham/chi-tiet/${product.slug}` }, openGraph: { title: product.seoTitle, description: product.seoDescription, url: `${siteData.domain}/san-pham/chi-tiet/${product.slug}`, images: [{ url: product.image, alt: `${product.name} tại Ô Dù Đại Phát` }] } };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug); if (!product) notFound();
  const category = getCategory(product.categorySlug);
  const galleryItems = [...productGallery, ...videoGallery];
  const productSchema = { "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.seoDescription, image: `${siteData.domain}${product.image}`, brand: { "@type": "Brand", name: siteData.brandName }, category: category?.name ?? "Ô dù ngoài trời", url: `${siteData.domain}/san-pham/chi-tiet/${product.slug}`, additionalProperty: product.specs.map((spec) => ({ "@type": "PropertyValue", name: spec.label, value: spec.value })) };
  return <SiteShell>
    <BaseSchemas />
    <BreadcrumbJsonLd items={[{ name: "Trang chủ", url: "/" }, { name: "Sản phẩm", url: "/san-pham" }, { name: category?.name ?? "Danh mục", url: category ? `/san-pham/${category.slug}` : "/san-pham" }, { name: product.name, url: `/san-pham/chi-tiet/${product.slug}` }]} />
    <JsonLd data={productSchema} />
    <FAQJsonLd items={product.faq} />
    <section className="page-hero"><Container><Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm", href: "/san-pham" }, { label: category?.name ?? "Danh mục", href: category ? `/san-pham/${category.slug}` : "/san-pham" }, { label: product.name }]} /><SectionTitle eyebrow="Chi tiết sản phẩm" title={product.name} subtitle={product.summary} align="left" as="h1" /></Container></section>
    <section className="section"><Container><div className="product-detail-grid"><ImageZoom src={product.image} alt={`${product.name} - ${category?.name ?? "ô dù ngoài trời"} tại Ô Dù Đại Phát`} width={800} height={560} className="detail-image" priority /><div className="content-card"><h2>Điểm nổi bật</h2><InfoList items={product.highlights} /><div className="spec-grid">{product.specs.map((spec) => <div key={spec.label} className="spec-card"><strong>{spec.label}</strong><span>{spec.value}</span></div>)}</div><div className="hero-actions"><Button href="/bao-gia" variant="primary">Nhận báo giá</Button><Button href={siteData.zaloLink} external>Nhắn Zalo</Button></div></div></div></Container></section>
    <MediaGallery title="Hình ảnh sản phẩm thực tế" subtitle="Tham khảo thêm hình ảnh thực tế của mẫu dù trước khi chọn kích thước, màu sắc và số lượng." items={galleryItems} productSlug={product.slug} limit={6} />
    <YoutubeGallery title="Video hướng dẫn liên quan" subtitle="Xem thao tác sử dụng, bảo dưỡng hoặc xử lý tình huống thường gặp trước khi chọn mua." videos={guideVideos} productSlug={product.slug} limit={3} />
    <section className="section section-soft"><Container><div className="content-grid"><article className="content-card"><h2>Ứng dụng phù hợp</h2><InfoList items={product.applications} /></article><article className="content-card"><h2>Câu hỏi về sản phẩm</h2><div className="faq-list compact-faq-list">{product.faq.map((item) => <details key={item.question} className="faq-item"><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></article></div></Container></section>
  </SiteShell>;
}
