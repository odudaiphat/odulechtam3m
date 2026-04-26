import type { Metadata } from "next";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { mediaContent } from "@/content/media";
import { CategoryCard, ProjectCard } from "@/components/cards";
import { LeadForm } from "@/components/lead-form";
import { QuoteCta } from "@/components/quote-cta";
import { BaseSchemas, JsonLd } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Button, Container, SectionTitle } from "@/components/ui";
import { productCategories, projects, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: homeContent.metadata.title,
  description: homeContent.metadata.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: homeContent.metadata.openGraphTitle,
    description: homeContent.metadata.openGraphDescription,
    url: siteData.domain,
    type: "website",
    images: [
      {
        url: siteData.socialImage,
        width: 1200,
        height: 630,
        alt: "Ô dù ngoài trời Ô Dù Đại Phát"
      }
    ]
  }
};

const featuredProductSlugs = [
  "du-lech-tam",
  "du-quan-cafe",
  "du-san-vuon",
  "du-che-nang",
  "du-in-logo"
];

const featuredProducts = productCategories.filter((item) =>
  featuredProductSlugs.includes(item.slug)
);

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeContent.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <SiteShell>
      <BaseSchemas />
      <JsonLd data={faqSchema} />

      <section className="hero-section home-hero-premium">
        <Container>
          <div className="hero-grid">
            <div>
              <span className="pill">{homeContent.hero.eyebrow}</span>
              <h1 className="hero-title">{homeContent.hero.headline}</h1>
              <p className="hero-subheadline">{homeContent.hero.subheadline}</p>
              <p className="hero-description hero-description-compact">
                {homeContent.hero.description}
              </p>
              <div className="hero-actions">
                <QuoteCta source="homepage_hero">{homeContent.hero.primaryCta}</QuoteCta>
                <Button href={siteData.zaloLink} external>
                  {homeContent.hero.zaloCta}
                </Button>
                <Button href={`tel:${siteData.phone}`}>Gọi {siteData.phoneDisplay}</Button>
              </div>
              <p className="hero-cta-note">{homeContent.hero.ctaNote}</p>
              <div className="trust-bar" aria-label="Điểm mạnh của Ô Dù Đại Phát">
                {homeContent.trustItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="hero-card premium-hero-card">
              <Image
                src={mediaContent.heroImage}
                alt={homeContent.hero.imageAlt}
                width={960}
                height={720}
                sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 960px"
                priority
                className="hero-image"
              />
              <div className="hero-mini-grid compact-mini-grid">
                <div>
                  <strong>{homeContent.hero.miniCards[0].title}</strong>
                  <p>{homeContent.hero.miniCards[0].text}</p>
                </div>
                <div>
                  <strong>{homeContent.hero.miniCards[1].title} {siteData.phoneDisplay}</strong>
                  <p>{homeContent.hero.miniCards[1].text}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="conversion-trust-section" aria-label="Cam kết tư vấn và giao hàng của Ô Dù Đại Phát">
        <Container>
          <div className="conversion-trust-grid">
            {homeContent.conversionTrustItems.map((item) => (
              <div key={item} className="conversion-trust-card">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-soft home-section-compact">
        <Container>
          <SectionTitle
            eyebrow={homeContent.consultationSection.eyebrow}
            title={homeContent.consultationSection.title}
            subtitle={homeContent.consultationSection.subtitle}
          />
          <div className="card-grid three-up home-benefit-grid">
            {homeContent.problemSolutions.map((item) => (
              <div key={item.title} className="stat-card">
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section home-section-compact">
        <Container>
          <SectionTitle
            eyebrow={homeContent.productsSection.eyebrow}
            title={homeContent.productsSection.title}
            subtitle={homeContent.productsSection.subtitle}
          />
          <div className="card-grid four-up">
            {featuredProducts.map((item) => (
              <CategoryCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-soft home-section-compact">
        <Container>
          <div className="split-heading">
            <div>
              <p className="eyebrow">{homeContent.projectsSection.eyebrow}</p>
              <h2 className="section-title-inline">{homeContent.projectsSection.title}</h2>
              <p className="section-subtitle">
                {homeContent.projectsSection.subtitle}
              </p>
            </div>
            <Button href="/du-an">{homeContent.projectsSection.cta}</Button>
          </div>
          <div className="card-grid three-up">
            {projects.slice(0, 3).map((item) => (
              <ProjectCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section home-section-compact">
        <Container>
          <SectionTitle
            eyebrow={homeContent.quoteProcessSection.eyebrow}
            title={homeContent.quoteProcessSection.title}
            subtitle={homeContent.quoteProcessSection.subtitle}
          />
          <div className="card-grid four-up home-benefit-grid">
            {homeContent.quoteSteps.map((step, index) => (
              <div key={step.title} className="stat-card">
                <strong>{index + 1}. {step.title}</strong>
                <span>{step.text}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions center-actions">
            <Button href={siteData.zaloLink} external variant="primary">
              {homeContent.hero.zaloCta}
            </Button>
            <Button href={`tel:${siteData.phone}`}>Gọi {siteData.phoneDisplay}</Button>
          </div>
        </Container>
      </section>

      <section className="section section-soft home-section-compact" id="faq">
        <Container>
          <div className="lead-grid">
            <div className="lead-panel">
              <p className="eyebrow eyebrow-on-dark">{homeContent.leadPanel.eyebrow}</p>
              <h2 className="section-title-inline">{homeContent.leadPanel.title}</h2>
              <p>{homeContent.leadPanel.paragraph}</p>
              <ul className="check-list">
                {homeContent.leadPanel.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="hero-actions">
                <QuoteCta source="homepage_lead_panel">{homeContent.leadPanel.cta}</QuoteCta>
                <Button href={siteData.zaloLink} external>
                  {homeContent.leadPanel.zaloCta}
                </Button>
              </div>
            </div>
            <LeadForm />
          </div>

          <section className="final-quote-cta" aria-label="Nhận báo giá ô dù">
            <h2>{homeContent.finalCta.title}</h2>
            <p>{homeContent.finalCta.description}</p>
            <div className="hero-actions center-actions">
              <QuoteCta source="homepage_final_cta">{homeContent.finalCta.cta}</QuoteCta>
              <Button href={`tel:${siteData.phone}`}>Gọi {siteData.phoneDisplay}</Button>
            </div>
          </section>

          <div className="faq-list compact-faq-list">
            {homeContent.faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
