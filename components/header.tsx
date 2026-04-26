"use client";

import { useState } from "react";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { Button, Container } from "@/components/ui";
import { trackEvent } from "@/components/analytics";

const primaryNavItems = [
  ["/san-pham", "Sản phẩm"],
  ["/du-an", "Dự án"],
  ["/khu-vuc", "Khu vực"],
  ["/bao-gia", "Báo giá"],
  ["/lien-he", "Liên hệ"]
] as const;

const secondaryNavItems = [
  ["/kien-thuc", "Kiến thức"],
  ["/huong-dan", "Hướng dẫn sử dụng"],
  ["/chinh-sach", "Chính sách"]
] as const;

const mobileNavItems = [...primaryNavItems, ...secondaryNavItems] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Container>
        <div className="header-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">ĐP</span>
            <span className="brand-copy">
              <strong>{siteData.brandName}</strong>
              <small>Ô dù ngoài trời · Giao hàng toàn quốc</small>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Điều hướng chính">
            {primaryNavItems.map(([href, label]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
            <div className="nav-dropdown">
              <button type="button" aria-haspopup="true">Thêm</button>
              <div className="nav-dropdown-menu">
                {secondaryNavItems.map(([href, label]) => (
                  <Link key={href} href={href}>{label}</Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="header-cta">
            <a href={`tel:${siteData.phone}`} className="button button-secondary" onClick={() => trackEvent("click_phone", { placement: "header" })}>
              Gọi ngay
            </a>
            <Button href="/bao-gia" variant="primary">Nhận báo giá</Button>
          </div>

          <button className="menu-toggle" aria-label="Mở menu" aria-expanded={open} onClick={() => setOpen((prev) => !prev)}>
            <span />
            <span />
            <span />
          </button>
        </div>

        {open ? (
          <div className="mobile-nav">
            {mobileNavItems.map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
            <a href={`tel:${siteData.phone}`} onClick={() => { setOpen(false); trackEvent("click_phone", { placement: "mobile_nav" }); }}>Gọi {siteData.phoneDisplay}</a>
            <a href={siteData.zaloLink} target="_blank" rel="noreferrer" onClick={() => { setOpen(false); trackEvent("click_zalo", { placement: "mobile_nav" }); }}>Nhắn Zalo</a>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
