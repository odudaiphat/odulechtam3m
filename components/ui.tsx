import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as = "h2"
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const TitleTag = as;
  return (
    <div className={`section-heading ${align === "left" ? "section-heading-left" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <TitleTag className="section-title">{title}</TitleTag>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "secondary",
  external = false
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const className = `button ${variant === "primary" ? "button-primary" : "button-secondary"}`;

  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function InfoList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          {index < items.length - 1 ? <span className="breadcrumb-sep">/</span> : null}
        </span>
      ))}
    </nav>
  );
}
