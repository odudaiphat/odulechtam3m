import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="page-hero">
        <Container>
          <div className="content-card">
            <p className="eyebrow">404</p>
            <h1 className="section-title">Không tìm thấy trang</h1>
            <p className="section-subtitle">Trang bạn đang tìm có thể đã được thay đổi hoặc không còn khả dụng. Hãy quay lại trang chủ để xem sản phẩm, công trình và thông tin liên hệ.</p>
            <Link href="/" className="button button-primary">Về trang chủ</Link>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
