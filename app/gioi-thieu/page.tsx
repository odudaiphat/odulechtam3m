import { BaseSchemas } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Button, Container, SectionTitle } from "@/components/ui";
import { siteData } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Giới thiệu | ${siteData.brandName}`,
  description: `Giới thiệu về ${siteData.brandName}, đơn vị cung cấp ô dù ngoài trời, dù quán cafe, dù sân vườn và dù lệch tâm cho khách hàng toàn quốc.`,
  alternates: { canonical: "/gioi-thieu" }
};

export default function AboutPage() {
  return (
    <SiteShell>
      <BaseSchemas />
      <section className="page-hero">
        <Container>
          <SectionTitle
            eyebrow="Giới thiệu"
            title={`Về ${siteData.brandName}`}
            subtitle="Ô Dù Đại Phát cung cấp ô dù ngoài trời cho quán cafe, nhà hàng, sân vườn, homestay, resort và công trình. Khách hàng được tư vấn nhanh, xem hình ảnh thực tế và nhận báo giá rõ ràng."
            align="left"
            as="h1"
          />
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="content-grid">
            <article className="content-card">
              <h2>Ô dù ngoài trời cho nhiều không gian</h2>
              <p>{siteData.companySummary}</p>
              <p>Khách hàng có thể gửi ảnh vị trí qua Zalo để được gợi ý mẫu dù, kích thước, màu sắc và phương án giao hàng phù hợp.</p>
            </article>
            <article className="content-card">
              <h2>Vì sao khách hàng chọn Ô Dù Đại Phát?</h2>
              <ul className="check-list">
                <li>Tư vấn theo ảnh mặt bằng hoặc video hiện trạng</li>
                <li>Có hình ảnh công trình thật để tham khảo trước khi đặt</li>
                <li>Giao hàng toàn quốc và hỗ trợ lắp đặt khi cần</li>
              </ul>
            </article>
          </div>
          <div className="cta-banner">
            <div>
              <h2>Cần tư vấn mẫu dù phù hợp?</h2>
              <p>Gửi nhu cầu hoặc ảnh vị trí để được gợi ý sản phẩm và nhận báo giá nhanh.</p>
            </div>
            <Button href="/bao-gia" variant="primary">Nhận báo giá</Button>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
