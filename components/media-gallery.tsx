import Image from "next/image";
import { ImageZoom } from "@/components/image-zoom";
import { Container } from "@/components/ui";
import type { MediaGalleryItem } from "@/lib/media-data";

type MediaGalleryProps = {
  title?: string;
  subtitle?: string;
  items: MediaGalleryItem[];
  limit?: number;
  category?: string;
  productSlug?: string;
  projectSlug?: string;
};

function matchesText(value: string | undefined, expected: string | undefined) {
  if (!expected) return true;
  return value?.toLowerCase() === expected.toLowerCase();
}

export function MediaGallery({
  title = "Hình ảnh thực tế",
  subtitle,
  items,
  limit,
  category,
  productSlug,
  projectSlug
}: MediaGalleryProps) {
  const filteredItems = items
    .filter((item) => matchesText(item.category, category))
    .filter((item) => matchesText(item.productSlug, productSlug))
    .filter((item) => matchesText(item.projectSlug, projectSlug))
    .slice(0, limit ?? items.length);

  if (filteredItems.length === 0) return null;

  return (
    <section className="section section-soft media-gallery-section">
      <Container>
        <div className="section-heading section-heading-left media-gallery-heading">
          <p className="eyebrow">Thư viện thực tế</p>
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>

        <div className="media-gallery-grid">
          {filteredItems.map((item) => (
            <article key={item.id} className="media-gallery-card">
              {item.type === "image" ? (
                <ImageZoom
                  src={item.src}
                  alt={item.alt}
                  width={720}
                  height={520}
                  className="media-gallery-image"
                />
              ) : (
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-video-link"
                  aria-label={`Xem video: ${item.title}`}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={720}
                    height={520}
                    sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 720px"
                    className="media-gallery-image"
                  />
                  <span className="media-video-play">Xem video</span>
                </a>
              )}
              <div className="media-gallery-body">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
