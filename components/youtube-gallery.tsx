import { getYoutubeId, getYoutubeThumbnail } from "@/lib/youtube";

export type YoutubeGalleryVideo = {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  youtubeId?: string;
  category: string;
  productSlug?: string;
  projectSlug?: string;
  featured?: boolean;
};

type YoutubeGalleryProps<T extends YoutubeGalleryVideo> = {
  videos: T[];
  title?: string;
  subtitle?: string;
  category?: T["category"];
  productSlug?: string;
  projectSlug?: string;
  limit?: number;
};

const categoryLabels: Record<string, string> = {
  "su-dung": "Sử dụng",
  "sua-chua": "Sửa chữa",
  "bao-duong": "Bảo dưỡng",
  "loi-thuong-gap": "Lỗi thường gặp",
  "Hướng dẫn lắp đặt": "Hướng dẫn",
  "Dù lệch tâm": "Dù lệch tâm",
  "Tư vấn chọn dù": "Tư vấn",
  "Bảo quản": "Bảo quản",
  "Công trình quán cafe": "Công trình",
  "Review sản phẩm": "Review"
};

function normalize(value?: string) {
  return value?.trim().toLowerCase();
}

function getFilteredVideos<T extends YoutubeGalleryVideo>({
  videos,
  category,
  productSlug,
  projectSlug,
  limit
}: Required<Pick<YoutubeGalleryProps<T>, "videos">> & Pick<YoutubeGalleryProps<T>, "category" | "productSlug" | "projectSlug" | "limit">) {
  return videos
    .filter((video) => (category ? normalize(video.category) === normalize(String(category)) : true))
    .filter((video) => (productSlug ? video.productSlug === productSlug : true))
    .filter((video) => (projectSlug ? video.projectSlug === projectSlug : true))
    .slice(0, limit ?? videos.length);
}

export function YoutubeGallery<T extends YoutubeGalleryVideo>({
  videos,
  title = "Video hướng dẫn & công trình thực tế",
  subtitle = "Xem video hướng dẫn trước khi chọn mua để hiểu rõ cách sử dụng, bảo quản và xử lý tình huống thường gặp.",
  category,
  productSlug,
  projectSlug,
  limit
}: YoutubeGalleryProps<T>) {
  const filteredVideos = getFilteredVideos({ videos, category, productSlug, projectSlug, limit });

  if (filteredVideos.length === 0) return null;

  return (
    <section className="section youtube-gallery-section">
      <div className="container">
        <div className="youtube-gallery-heading">
          <p className="eyebrow">Video hướng dẫn</p>
          <h2 className="section-title-inline">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="youtube-gallery-grid">
          {filteredVideos.map((video) => {
            const youtubeId = getYoutubeId(video.youtubeUrl, video.youtubeId);
            const thumbnail = getYoutubeThumbnail(video.youtubeUrl, video.youtubeId);
            const label = categoryLabels[video.category] ?? video.category;

            return (
              <article className="youtube-card" key={video.id}>
                <a
                  className="youtube-thumb"
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Xem video: ${video.title}`}
                >
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className="youtube-thumb-image"
                      loading="lazy"
                      width={480}
                      height={360}
                    />
                  ) : null}
                  <span className="youtube-play">Xem hướng dẫn</span>
                </a>
                <div className="youtube-card-body">
                  <span>{label}</span>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    Mở trên YouTube
                  </a>
                  {!youtubeId ? <small className="youtube-note">Kiểm tra lại link YouTube trong file dữ liệu.</small> : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
