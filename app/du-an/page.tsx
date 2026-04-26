import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards";
import { BaseSchemas } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Container, SectionTitle } from "@/components/ui";
import { projects, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Công trình ô dù ngoài trời | ${siteData.brandName}`,
  description: `Xem hình ảnh công trình ô dù ngoài trời thực tế cho quán cafe, nhà hàng, sân vườn, resort và homestay.`,
  alternates: { canonical: "/du-an" }
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <BaseSchemas />
      <section className="page-hero">
        <Container>
          <SectionTitle
            eyebrow="Công trình thật"
            title="Hình ảnh ô dù đã lắp cho quán cafe, nhà hàng, sân vườn"
            subtitle="Tham khảo các công trình thực tế để dễ chọn kiểu dáng, màu sắc và kích thước phù hợp với không gian của bạn."
            align="left"
            as="h1"
          />
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="card-grid three-up">
            {projects.map((item) => <ProjectCard key={item.slug} item={item} />)}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
