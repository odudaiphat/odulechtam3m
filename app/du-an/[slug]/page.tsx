import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BaseSchemas, BreadcrumbJsonLd, JsonLd } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Breadcrumbs, Button, Container, InfoList, SectionTitle } from "@/components/ui";
import { getProject, getRelatedProducts, projects, siteData } from "@/lib/site-data";
import { ProductCard } from "@/components/cards";
import { ImageZoom } from "@/components/image-zoom";
import { MediaGallery } from "@/components/media-gallery";
import { YoutubeGallery } from "@/components/youtube-gallery";
import { projectGallery, videoGallery } from "@/lib/media-data";
import { guideVideos } from "@/lib/video-data";

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Dự án ${siteData.brandName}`,
    description: project.description,
    alternates: { canonical: `/du-an/${project.slug}` }
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const relatedProducts = getRelatedProducts(project.relatedProductSlugs);
  const galleryItems = [...projectGallery, ...videoGallery];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    image: `${siteData.domain}${project.image}`,
    author: { "@type": "Organization", name: siteData.brandName }
  };

  return (
    <SiteShell>
      <BaseSchemas />
      <BreadcrumbJsonLd items={[{ name: "Trang chủ", url: "/" }, { name: "Dự án", url: "/du-an" }, { name: project.title, url: `/du-an/${project.slug}` }]} />
      <JsonLd data={articleSchema} />
      <section className="page-hero">
        <Container>
          <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Dự án", href: "/du-an" }, { label: project.title }]} />
          <SectionTitle eyebrow="Công trình thật" title={project.title} subtitle={project.description} align="left" as="h1" />
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="product-detail-grid">
            <ImageZoom src={project.image} alt={`${project.title} - công trình ô dù ngoài trời thực tế`} width={800} height={560} className="detail-image" priority />
            <div className="content-card">
              <h2>Nội dung công trình</h2>
              <p>{project.content}</p>
              <h2>Nhu cầu ban đầu</h2>
              <p>{project.challenge}</p>
              <h2>Phương án đề xuất</h2>
              <InfoList items={project.solution} />
              <h2>Kết quả</h2>
              <p>{project.outcome}</p>
              <div className="hero-actions">
                <Button href="/bao-gia" variant="primary">Nhận tư vấn công trình tương tự</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <MediaGallery title="Hình ảnh công trình" subtitle="Xem thêm góc ảnh thực tế để tham khảo cách bố trí dù trước khi triển khai công trình tương tự." items={galleryItems} projectSlug={project.slug} limit={6} />
      <YoutubeGallery title="Video công trình thực tế" subtitle="Video thực tế giúp khách dễ hình dung cách bố trí dù ngoài trời trước khi triển khai công trình tương tự." videos={guideVideos} projectSlug={project.slug} limit={3} />
      <section className="section section-soft">
        <Container>
          <SectionTitle eyebrow="Sản phẩm liên quan" title="Các mẫu phù hợp để tham khảo" />
          <div className="card-grid four-up">
            {relatedProducts.map((item) => <ProductCard key={item.slug} item={item} />)}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
