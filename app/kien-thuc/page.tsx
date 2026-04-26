import type { Metadata } from "next";
import { ArticleCard } from "@/components/cards";
import { BaseSchemas } from "@/components/schema";
import { SiteShell } from "@/components/site-shell";
import { Container, SectionTitle } from "@/components/ui";
import { articles, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Kinh nghiệm chọn ô dù ngoài trời | ${siteData.brandName}`,
  description: `Kinh nghiệm chọn ô dù ngoài trời, dù quán cafe, dù sân vườn, dù lệch tâm và dù che nắng phù hợp với nhu cầu thực tế.`,
  alternates: { canonical: "/kien-thuc" }
};

export default function ArticlesPage() {
  return (
    <SiteShell>
      <BaseSchemas />
      <section className="page-hero">
        <Container>
          <SectionTitle
            eyebrow="Kinh nghiệm"
            title="Tư vấn chọn ô dù phù hợp trước khi mua"
            subtitle="Các bài viết ngắn gọn giúp bạn chọn đúng kiểu dù, kích thước, màu sắc và cách sử dụng cho quán cafe, sân vườn, nhà hàng hoặc gia đình."
            align="left"
            as="h1"
          />
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="card-grid three-up">
            {articles.map((item) => <ArticleCard key={item.slug} item={item} />)}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
