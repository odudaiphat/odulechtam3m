import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BaseSchemas, JsonLd } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Breadcrumbs, Container, SectionTitle } from "@/components/ui";
import { getPolicyPage, policyPages, siteData } from "@/lib/site-data";

export function generateStaticParams() {
  return policyPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const policy = getPolicyPage(params.slug);
  if (!policy) return {};
  return {
    title: policy.seoTitle,
    description: policy.seoDescription,
    alternates: { canonical: `/chinh-sach/${policy.slug}` }
  };
}

export default function PolicyDetailPage({ params }: { params: { slug: string } }) {
  const policy = getPolicyPage(params.slug);
  if (!policy) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: policy.title,
    description: policy.seoDescription,
    url: `${siteData.domain}/chinh-sach/${policy.slug}`
  };

  return (
    <SiteShell>
      <BaseSchemas />
      <JsonLd data={schema} />
      <section className="page-hero">
        <Container>
          <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Chính sách", href: "/chinh-sach" }, { label: policy.title }]} />
          <SectionTitle eyebrow="Chính sách" title={policy.title} subtitle={policy.intro} align="left" as="h1" />
        </Container>
      </section>
      <section className="section">
        <Container>
          <article className="article-detail">
            {policy.sections.map((block) => (
              <section key={block.heading} className="article-block">
                <h2>{block.heading}</h2>
                {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {block.bullets ? (
                  <ul className="check-list">
                    {block.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        </Container>
      </section>
    </SiteShell>
  );
}
