import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">ĐP</span>
              <span className="brand-copy">
                <strong>{siteData.brandName}</strong>
                <small>Ô dù ngoài trời · Giao hàng toàn quốc</small>
              </span>
            </div>
            <p>
              Ô Dù Đại Phát chuyên ô dù ngoài trời, dù quán cafe, dù sân vườn, dù lệch tâm và dù quảng cáo. Tư vấn nhanh qua Zalo, báo giá rõ ràng, có hình ảnh công trình thật để khách dễ chọn mẫu phù hợp.
            </p>
            <a href={`tel:${siteData.phone}`} className="footer-phone">{siteData.phoneDisplay}</a>
          </div>

          <div>
            <h3>Sản phẩm</h3>
            <ul>
              <li><Link href="/san-pham">Tất cả sản phẩm</Link></li>
              <li><Link href="/san-pham/du-quan-cafe">Dù quán cafe</Link></li>
              <li><Link href="/san-pham/du-san-vuon">Dù sân vườn</Link></li>
              <li><Link href="/san-pham/du-lech-tam">Dù lệch tâm</Link></li>
            </ul>
          </div>

          <div>
            <h3>Hỗ trợ khách hàng</h3>
            <ul>
              <li><Link href="/du-an">Công trình thật</Link></li>
              <li><Link href="/khu-vuc">Khu vực giao hàng</Link></li>
              <li><Link href="/kien-thuc">Kinh nghiệm chọn dù</Link></li>
              <li><Link href="/huong-dan">Hướng dẫn sử dụng</Link></li>
              <li><Link href="/bao-gia">Nhận báo giá</Link></li>
              <li><Link href="/chinh-sach">Chính sách mua hàng</Link></li>
            </ul>
          </div>

          <div>
            <h3>Liên hệ nhanh</h3>
            <ul>
              <li><a href={`tel:${siteData.phone}`}>Gọi tư vấn ngay</a></li>
              <li><a href={siteData.zaloLink} target="_blank" rel="noreferrer">Nhắn Zalo</a></li>
              <li><Link href="/lien-he">Gửi yêu cầu tư vấn</Link></li>
              <li><a href={`mailto:${siteData.email}`}>{siteData.email}</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
