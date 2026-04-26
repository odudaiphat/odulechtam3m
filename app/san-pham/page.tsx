import type { Metadata } from "next";
import { CategoryCard, ProductCard } from "@/components/cards";
import { BaseSchemas, BreadcrumbJsonLd, ProductJsonLd } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Container, SectionTitle } from "@/components/ui";
import { productCategories, products, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Sản phẩm ô dù ngoài trời | ${siteData.brandName}`,
  description: `Xem các dòng ô dù ngoài trời, dù quán cafe, dù sân vườn, dù che nắng, dù lệch tâm và dù quảng cáo. Có tư vấn chọn mẫu và báo giá qua Zalo.`,
  alternates: { canonical: "/san-pham" }
};

export default function ProductsPage() {
  return (
    <SiteShell>
      <BaseSchemas />
      <BreadcrumbJsonLd items={[{ name: "Trang chủ", url: "/" }, { name: "Sản phẩm", url: "/san-pham" }]} />
      <ProductJsonLd items={products} />
      <section className="page-hero">
        <Container>
          <SectionTitle
            eyebrow="Sản phẩm"
            title="Ô dù ngoài trời cho quán cafe, sân vườn, nhà hàng và công trình"
            subtitle="Chọn nhanh nhóm sản phẩm phù hợp với không gian của bạn. Nếu chưa biết nên dùng loại nào, hãy gửi ảnh qua Zalo để được tư vấn mẫu, kích thước và báo giá rõ ràng."
            align="left"
            as="h1"
          />
        </Container>
      </section>
      <section className="section section-soft">
        <Container>
          <SectionTitle eyebrow="Danh mục" title="Các dòng ô dù được khách chọn nhiều" />
          <div className="card-grid four-up">
            {productCategories.map((item) => <CategoryCard key={item.slug} item={item} />)}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="Mẫu tham khảo"
            title="Một số mẫu ô dù ngoài trời phổ biến"
            subtitle="Tham khảo các mẫu thường dùng cho quán cafe, sân vườn, nhà hàng, hồ bơi, homestay và khu vực ngoài trời. Đội ngũ sẽ tư vấn thêm theo ảnh thực tế của bạn."
          />
          <div className="card-grid four-up">
            {products.map((item) => <ProductCard key={item.slug} item={item} />)}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
