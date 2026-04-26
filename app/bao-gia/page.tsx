import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { BaseSchemas } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Container, SectionTitle } from "@/components/ui";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Báo giá ô dù ngoài trời | ${siteData.brandName}`,
  description: `Nhận báo giá ô dù ngoài trời, dù quán cafe, dù sân vườn, dù lệch tâm và dù quảng cáo. Tư vấn nhanh qua Zalo, báo giá rõ ràng theo nhu cầu thực tế.`,
  alternates: { canonical: "/bao-gia" }
};

export default function QuotePage() {
  return (
    <SiteShell>
      <BaseSchemas />
      <section className="page-hero">
        <Container>
          <SectionTitle
            eyebrow="Báo giá"
            title="Nhận báo giá ô dù ngoài trời nhanh qua Zalo"
            subtitle="Gửi nhu cầu, ảnh vị trí hoặc kích thước khu vực cần che nắng. Ô Dù Đại Phát sẽ tư vấn mẫu phù hợp và báo giá rõ ràng cho quán cafe, nhà hàng, sân vườn, resort hoặc công trình của bạn."
            align="left"
            as="h1"
          />
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="content-grid">
            <article className="content-card">
              <h2>Để báo giá sát hơn, bạn nên gửi gì?</h2>
              <ul className="check-list">
                <li>Ảnh vị trí cần lắp hoặc khu vực cần che phủ</li>
                <li>Nhu cầu sử dụng: quán cafe, sân vườn, nhà hàng, resort hoặc gia đình</li>
                <li>Số lượng bàn, diện tích dự kiến hoặc kích thước mong muốn</li>
                <li>Yêu cầu về màu sắc, kiểu dáng, ngân sách hoặc thời gian cần hàng</li>
              </ul>
            </article>
            <LeadForm />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
