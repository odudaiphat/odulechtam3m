// File này gom các đường dẫn ảnh/video dễ sửa cho website.
// Thay ảnh bằng cách đặt file vào public/images/ rồi đổi đường dẫn bên dưới.
// Thay video bằng cách đặt file vào public/videos/ hoặc dán link YouTube vào videoEmbedUrl.

export const mediaContent = {
  // Ảnh chính ở hero trang chủ.
  heroImage: "/images/hero-main.webp",

  // Ảnh chia sẻ khi gửi link qua Facebook/Zalo.
  ogImage: "/images/og-odudaiphat.jpg",

  // Có thể dùng cho section video sau này. Để trống nếu chưa có video.
  videoEmbedUrl: "",
  videoFile: "",
  videoThumbnail: "",

  productImages: {
    duQuanCafe: "/images/du-quan-cafe-do.webp",
    duSanVuon: "/images/du-san-vuon-cao-cap.webp",
    duCheNang: "/images/du-che-nang-mat-pho.webp",
    duLechTam: "/images/du-lech-tam-quan-cafe.webp",
    duTamGiua: "/images/du-san-vuon-beige.webp",
    duInLogo: "/images/du-su-kien-xanh-duong.webp"
  },

  projectImages: {
    cafeTpHcm: "/images/du-quan-cafe-mat-pho.webp",
    sanVuonDaNang: "/images/du-san-vuon-cao-cap.webp",
    resortHoBoi: "/images/du-resort-ho-boi.webp"
  }
} as const;
