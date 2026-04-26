import Image from "next/image";
import Link from "next/link";
import type { Article, Area, Product, ProductCategory, Project } from "@/lib/site-data";

const cardImageSizes = "(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 25vw";

export function CategoryCard({ item }: { item: ProductCategory }) {
  return (
    <article className="card product-card">
      <Image
        src={item.heroImage}
        alt={`${item.name} - mẫu ô dù ngoài trời tại Ô Dù Đại Phát`}
        width={640}
        height={420}
        sizes={cardImageSizes}
        loading="lazy"
      />
      <div className="card-body">
        <h3>{item.name}</h3>
        <p>{item.intro}</p>
        <Link href={`/san-pham/${item.slug}`} className="text-link">Xem mẫu phù hợp →</Link>
      </div>
    </article>
  );
}

export function ProductCard({ item }: { item: Product }) {
  return (
    <article className="card product-card">
      <Image
        src={item.image}
        alt={`${item.name} - mẫu ô dù ngoài trời tại Ô Dù Đại Phát`}
        width={640}
        height={420}
        sizes={cardImageSizes}
        loading="lazy"
      />
      <div className="card-body">
        <h3>{item.name}</h3>
        <p>{item.summary}</p>
        <Link href={`/san-pham/chi-tiet/${item.slug}`} className="text-link">Xem thông tin mẫu →</Link>
      </div>
    </article>
  );
}

export function ProjectCard({ item }: { item: Project }) {
  return (
    <article className="card project-card">
      <Image
        src={item.image}
        alt={`${item.title} - công trình ô dù ngoài trời thực tế`}
        width={720}
        height={480}
        sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
      />
      <div className="card-body">
        <div className="tag-row">
          <span>{item.locationName}</span>
          <span>{item.type}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <Link href={`/du-an/${item.slug}`} className="text-link">Xem công trình thực tế →</Link>
      </div>
    </article>
  );
}

export function AreaCard({ item }: { item: Area }) {
  return (
    <article className="card testimonial-card">
      <div className="avatar-circle" aria-hidden="true">{item.name.slice(0, 1)}</div>
      <h3>{item.name}</h3>
      <p>{item.intro}</p>
      <Link href={`/khu-vuc/${item.slug}`} className="text-link">Xem hỗ trợ khu vực →</Link>
    </article>
  );
}

export function ArticleCard({ item }: { item: Article }) {
  return (
    <article className="card">
      <div className="article-thumb" role="img" aria-label={`${item.title} - tư vấn ô dù ngoài trời`} />
      <div className="card-body">
        <div className="tag-row"><span>{item.topic}</span></div>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <Link href={`/kien-thuc/${item.slug}`} className="text-link">Xem tư vấn chi tiết →</Link>
      </div>
    </article>
  );
}
