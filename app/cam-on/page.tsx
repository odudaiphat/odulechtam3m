import type { Metadata } from "next";
import { BaseSchemas, BreadcrumbJsonLd } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { PhoneLink, ZaloLink } from "@/components/conversion-links";
import { Container, SectionTitle } from "@/components/ui";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Cảm ơn bạn đã gửi yêu cầu | ${siteData.brandName}`,
  description: "Ô Dù Đại Phát đã nhận yêu cầu báo giá. Đội ngũ tư vấn sẽ liên hệ sớm qua điện thoại hoặc Zalo.",
  alternates: { canonical: "/cam-on" },
  robots: { index: false, follow: false }
};

export default function ThankYouPage() {
  return (
    <SiteShell>
      <BaseSchemas />
      <BreadcrumbJsonLd items={[{ name: "Trang chủ", url: "/" }, { name: "Cảm ơn", url: "/cam-on" }]} />
      <section className="page-hero thank-you-hero">
        <Container>
          <SectionTitle
            eyebrow="Đã nhận yêu cầu"
            title="Cảm ơn bạn đã gửi thông tin"
            subtitle="Đội ngũ Ô Dù Đại Phát sẽ kiểm tra nhu cầu và liên hệ sớm để tư vấn mẫu, kích thước và báo giá phù hợp. Nếu cần gấp hoặc muốn gửi thêm ảnh hiện trạng, bạn có thể gọi hoặc nhắn Zalo ngay."
            align="left"
            as="h1"
          />
          <div className="page-actions">
            <PhoneLink placement="thank_you">Gọi ngay {siteData.phoneDisplay}</PhoneLink>
            <ZaloLink placement="thank_you">Nhắn Zalo gửi thêm ảnh</ZaloLink>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
