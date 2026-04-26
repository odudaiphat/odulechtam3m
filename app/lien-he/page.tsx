import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { BaseSchemas } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Button, Container, SectionTitle } from "@/components/ui";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Liên hệ | ${siteData.brandName}`,
  description: `Liên hệ ${siteData.brandName} để nhận tư vấn và báo giá ô dù ngoài trời, dù quán cafe, dù sân vườn, dù lệch tâm và dù quảng cáo.`,
  alternates: { canonical: "/lien-he" }
};

export default function ContactPage() {
  return (
    <SiteShell>
      <BaseSchemas />
      <section className="page-hero">
        <Container>
          <SectionTitle
            eyebrow="Liên hệ"
            title="Gọi hoặc nhắn Zalo để được tư vấn ô dù nhanh"
            subtitle="Bạn có thể gửi ảnh vị trí, kích thước khu vực cần che nắng hoặc nhu cầu sử dụng. Ô Dù Đại Phát sẽ tư vấn mẫu phù hợp và báo giá rõ ràng."
            align="left"
            as="h1"
          />
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="lead-grid">
            <div className="lead-panel">
              <p className="eyebrow eyebrow-on-dark">Liên hệ nhanh</p>
              <h2 className="section-title-inline">Tư vấn qua điện thoại và Zalo</h2>
              <ul className="check-list">
                <li>Điện thoại/Zalo: {siteData.phoneDisplay}</li>
                <li>Email: {siteData.email}</li>
                <li>Gửi ảnh vị trí để được gợi ý mẫu và kích thước phù hợp</li>
                <li>Hỗ trợ báo giá cho quán cafe, nhà hàng, sân vườn, resort và công trình</li>
              </ul>
              <div className="hero-actions">
                <Button href={`tel:${siteData.phone}`}>Gọi tư vấn ngay</Button>
                <Button href={siteData.zaloLink} variant="primary" external>Nhắn Zalo</Button>
              </div>
            </div>
            <LeadForm />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
