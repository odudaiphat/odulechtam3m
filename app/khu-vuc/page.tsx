import type { Metadata } from "next";
import { AreaCard } from "@/components/cards";
import { BaseSchemas } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Container, SectionTitle } from "@/components/ui";
import { areas, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Khu vực giao hàng | ${siteData.brandName}`,
  description: `Ô Dù Đại Phát hỗ trợ giao hàng ô dù ngoài trời toàn quốc cho quán cafe, nhà hàng, sân vườn, resort, homestay và công trình.`,
  alternates: { canonical: "/khu-vuc" }
};

export default function AreasPage() {
  return (
    <SiteShell>
      <BaseSchemas />
      <section className="page-hero">
        <Container>
          <SectionTitle
            eyebrow="Khu vực"
            title="Giao hàng ô dù ngoài trời toàn quốc"
            subtitle="Khách ở xa có thể gửi ảnh vị trí qua Zalo để được tư vấn mẫu phù hợp, báo giá rõ ràng và hỗ trợ vận chuyển tận nơi."
            align="left"
            as="h1"
          />
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="card-grid four-up">
            {areas.map((item) => <AreaCard key={item.slug} item={item} />)}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
