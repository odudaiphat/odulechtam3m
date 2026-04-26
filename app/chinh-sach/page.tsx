import type { Metadata } from "next";
import Link from "next/link";
import { BaseSchemas } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Container, SectionTitle } from "@/components/ui";
import { policyPages, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Chính sách mua hàng | ${siteData.brandName}`,
  description: `Thông tin vận chuyển, bảo hành, đổi trả, thanh toán và bảo mật khi đặt mua ô dù ngoài trời tại ${siteData.brandName}.`,
  alternates: { canonical: "/chinh-sach" }
};

export default function PolicyHubPage() {
  return (
    <SiteShell>
      <BaseSchemas />
      <section className="page-hero">
        <Container>
          <SectionTitle
            eyebrow="Chính sách"
            title="Thông tin mua hàng tại Ô Dù Đại Phát"
            subtitle="Xem chính sách vận chuyển, bảo hành, đổi trả và thanh toán để yên tâm hơn khi đặt ô dù ngoài trời, đặc biệt với khách ở xa."
            align="left"
            as="h1"
          />
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="card-grid three-up">
            {policyPages.map((item) => (
              <Link key={item.slug} href={`/chinh-sach/${item.slug}`} className="route-card">
                <strong>{item.title}</strong>
                <span>{item.intro}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
