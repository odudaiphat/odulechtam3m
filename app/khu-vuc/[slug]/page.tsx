import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard, ProjectCard } from "@/components/cards";
import { BaseSchemas, JsonLd } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Breadcrumbs, Button, Container, InfoList, SectionTitle } from "@/components/ui";
import { areas, getArea, getRelatedProducts, getRelatedProjects, siteData } from "@/lib/site-data";

export function generateStaticParams() {
  return areas.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const area = getArea(params.slug);
  if (!area) return {};
  return {
    title: area.seoTitle,
    description: area.seoDescription,
    alternates: { canonical: `/khu-vuc/${area.slug}` }
  };
}

export default function AreaDetailPage({ params }: { params: { slug: string } }) {
  const area = getArea(params.slug);
  if (!area) notFound();
  const products = getRelatedProducts(area.featuredProductSlugs);
  const projects = getRelatedProjects(area.featuredProjectSlugs);

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Ô dù ngoài trời ${area.name}`,
    description: area.seoDescription,
    url: `${siteData.domain}/khu-vuc/${area.slug}`
  };

  return (
    <SiteShell>
      <BaseSchemas />
      <JsonLd data={localSchema} />
      <section className="page-hero">
        <Container>
          <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Khu vực", href: "/khu-vuc" }, { label: area.name }]} />
          <SectionTitle eyebrow="Khu vực giao hàng" title={`Ô dù ngoài trời ${area.name}`} subtitle={area.intro} align="left" as="h1" />
          <div className="page-actions">
            <Button href="/bao-gia" variant="primary">Nhận báo giá tại {area.name}</Button>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="content-grid">
            <article className="content-card">
              <h2>Nhu cầu phổ biến</h2>
              <InfoList items={area.demand} />
            </article>
            <article className="content-card">
              <h2>Vận chuyển và hỗ trợ</h2>
              <p>{area.shipping}</p>
              <p>{area.support}</p>
            </article>
          </div>
        </Container>
      </section>
      <section className="section section-soft">
        <Container>
          <SectionTitle eyebrow="Sản phẩm phù hợp" title={`Mẫu ô dù phù hợp tại ${area.name}`} />
          <div className="card-grid four-up">
            {products.map((item) => <ProductCard key={item.slug} item={item} />)}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionTitle eyebrow="Công trình liên quan" title={`Công trình tham khảo tại ${area.name}`} />
          <div className="card-grid three-up">
            {projects.map((item) => <ProjectCard key={item.slug} item={item} />)}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
