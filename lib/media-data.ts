export type GalleryImage = {
  type: "image";
  id: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  category: string;
  productSlug?: string;
  projectSlug?: string;
};

export type GalleryVideo = {
  type: "video";
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  category: string;
  productSlug?: string;
  projectSlug?: string;
};

export type MediaGalleryItem = GalleryImage | GalleryVideo;

/*
  HƯỚNG DẪN SỬA ẢNH/VIDEO CHO NGƯỜI KHÔNG BIẾT CODE

  1. Muốn thêm ảnh:
     - Copy 1 object trong productGallery hoặc projectGallery.
     - Đổi id, title, description, src, alt, category.
     - Ảnh nên đặt trong thư mục public/images/.
     - Ví dụ đường dẫn ảnh: /images/ten-anh.webp

  2. Muốn thêm video thường:
     - Copy 1 object mẫu trong videoGallery.
     - Đổi id, title, description, videoUrl, thumbnail, category.
     - Nếu video là file trong website, đặt trong public/videos/ rồi dùng: /videos/ten-video.mp4
     - Nếu video là YouTube, dùng file lib/video-data.ts để dễ quản lý lâu dài.

  3. Liên kết ảnh/video với trang cụ thể:
     - productSlug: dùng khi ảnh/video thuộc một sản phẩm.
     - projectSlug: dùng khi ảnh/video thuộc một công trình.
     - Nếu không chắc slug, chỉ cần để category phù hợp.
*/

export const productGallery: GalleryImage[] = [
  {
    type: "image",
    id: "du-lech-tam-3mx3m-tay-don-bay-01",
    title: "Dù lệch tâm vuông cho quán cafe",
    description: "Mẫu dù lệch tâm vùng che rộng, hợp quán cafe sân vườn và khu bàn ngoài trời.",
    src: "/images/du-lech-tam-quan-cafe.webp",
    alt: "Dù lệch tâm vuông 3x3m cho quán cafe ngoài trời",
    category: "Dù lệch tâm",
    productSlug: "du-lech-tam-3mx3m-tay-don-bay"
  },
  {
    type: "image",
    id: "du-lech-tam-3mx3m-tay-don-bay-02",
    title: "Dù lệch tâm ngoài trời",
    description: "Phù hợp không gian cần che nắng đẹp, thoáng và ít vướng trụ giữa bàn.",
    src: "/images/du-lech-tam-ngoai-troi.webp",
    alt: "Dù lệch tâm ngoài trời cho sân vườn và resort",
    category: "Dù lệch tâm",
    productSlug: "du-lech-tam-3mx3m-tay-don-bay"
  },
  {
    type: "image",
    id: "du-lech-tam-tron-3m-quay-tay-01",
    title: "Dù lệch tâm tròn 3.5m",
    description: "Kiểu dáng mềm, hợp hồ bơi, sân vườn và khu nghỉ dưỡng.",
    src: "/images/du-lech-tam-ngoai-troi.webp",
    alt: "Dù lệch tâm tròn 3.5m cho hồ bơi và sân vườn",
    category: "Dù lệch tâm",
    productSlug: "du-lech-tam-tron-3m-quay-tay"
  },
  {
    type: "image",
    id: "du-lech-tam-2m5x2m5-tay-bay-01",
    title: "Dù cafe vuông nhỏ gọn",
    description: "Mẫu dù vuông dễ bố trí cho quán cafe mặt tiền, ban công và khu bàn nhỏ.",
    src: "/images/du-quan-cafe-mat-pho.webp",
    alt: "Dù cafe vuông 2x2m cho quán cafe mặt phố",
    category: "Dù quán cafe",
    productSlug: "du-lech-tam-2m5x2m5-tay-bay"
  },
  {
    type: "image",
    id: "du-chinh-tam-tron-3m-quay-tay-01",
    title: "Dù cafe tròn 3m",
    description: "Dòng dù cân bằng giữa vùng che, thẩm mỹ và khả năng bố trí linh hoạt.",
    src: "/images/du-quan-cafe-do.webp",
    alt: "Dù cafe tròn 3m cho quán cafe sân vườn",
    category: "Dù quán cafe",
    productSlug: "du-chinh-tam-tron-3m-quay-tay"
  },
  {
    type: "image",
    id: "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap-01",
    title: "Dù sân vườn cao cấp",
    description: "Phù hợp biệt thự, homestay, villa và các không gian thư giãn ngoài trời.",
    src: "/images/du-lech-tam-3mx3m-khung-hop-kim-nhom.webp",
    alt: "Dù sân vườn cao cấp cho biệt thự và homestay",
    category: "Dù sân vườn",
    productSlug: "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap"
  },
  {
    type: "image",
    id: "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap-02",
    title: "Dù hồ bơi resort",
    description: "Gợi ý cho hồ bơi, khu nghỉ dưỡng và không gian cần cảm giác cao cấp.",
    src: "/images/du-resort-ho-boi.webp",
    alt: "Dù hồ bơi resort cho khu nghỉ dưỡng",
    category: "Dù sân vườn",
    productSlug: "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap"
  },
  {
    type: "image",
    id: "du-chinh-tam-chu-nhat-2m5x3m-01",
    title: "Dù che nắng cho nhà hàng",
    description: "Giải pháp che nắng cho khu phục vụ ngoài trời, mặt tiền và sân quán.",
    src: "/images/du-che-nang-mat-pho.webp",
    alt: "Dù che nắng ngoài trời cho nhà hàng và mặt tiền",
    category: "Dù che nắng",
    productSlug: "du-chinh-tam-chu-nhat-2m5x3m"
  },
  {
    type: "image",
    id: "in-logo-du-tron-3m-theo-yeu-cau-01",
    title: "Dù in logo sự kiện",
    description: "Phù hợp thương hiệu cần tăng nhận diện tại điểm bán và sự kiện ngoài trời.",
    src: "/images/du-su-kien-xanh-duong.webp",
    alt: "Dù in logo cho sự kiện và điểm bán ngoài trời",
    category: "Dù in logo",
    productSlug: "in-logo-du-tron-3m-theo-yeu-cau"
  }
];

export const projectGallery: GalleryImage[] = [
  {
    type: "image",
    id: "cong-trinh-cafe-tphcm-01",
    title: "Không gian quán cafe sân vườn",
    description: "Công trình bố trí dù cho khu ngồi ngoài trời tại quán cafe.",
    src: "/images/du-quan-cafe-do.webp",
    alt: "Công trình lắp dù cho quán cafe sân vườn tại TP.HCM",
    category: "Công trình quán cafe",
    projectSlug: "lap-du-quan-cafe-tp-hcm"
  },
  {
    type: "image",
    id: "cong-trinh-nha-hang-danang-01",
    title: "Khu bàn ngoài trời nhà hàng",
    description: "Mẫu dù che nắng giúp khu phục vụ ngoài trời gọn và dễ vận hành hơn.",
    src: "/images/du-che-nang-mat-pho.webp",
    alt: "Công trình dù che nắng ngoài trời cho nhà hàng tại Đà Nẵng",
    category: "Công trình nhà hàng",
    projectSlug: "thi-cong-du-nha-hang-da-nang"
  },
  {
    type: "image",
    id: "cong-trinh-resort-nhatrang-01",
    title: "Dù cho khu nghỉ dưỡng",
    description: "Không gian nghỉ dưỡng cần mẫu dù hài hòa cảnh quan và tạo cảm giác cao cấp.",
    src: "/images/du-resort-ho-boi.webp",
    alt: "Công trình dù che nắng cho resort tại Nha Trang",
    category: "Công trình resort",
    projectSlug: "lap-du-resort-nha-trang"
  },
  {
    type: "image",
    id: "cong-trinh-san-vuon-hanoi-01",
    title: "Dù sân vườn biệt thự",
    description: "Mẫu dù cho khu thư giãn ngoài trời, ưu tiên màu sắc hài hòa với cảnh quan.",
    src: "/images/du-lech-tam-3mx3m-khung-hop-kim-nhom.webp",
    alt: "Công trình dù sân vườn cho biệt thự tại Hà Nội",
    category: "Công trình sân vườn",
    projectSlug: "lap-du-san-vuon-ha-noi"
  },
  {
    type: "image",
    id: "cong-trinh-logo-binhduong-01",
    title: "Dù in logo cho sự kiện",
    description: "Dù in logo giúp điểm hiện diện thương hiệu dễ nhận biết hơn ngoài trời.",
    src: "/images/du-su-kien-xanh-duong.webp",
    alt: "Công trình dù in logo cho activation tại Bình Dương",
    category: "Công trình thương hiệu",
    projectSlug: "du-logo-activation-binh-duong"
  }
];

export const videoGallery: GalleryVideo[] = [
  /*
  {
    type: "video",
    id: "video-du-lech-tam-01",
    title: "Video thực tế dù lệch tâm",
    description: "Video quay thực tế mẫu dù lệch tâm sau khi lắp đặt.",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_HOAC_/videos/ten-video.mp4",
    thumbnail: "/images/du-lech-tam-quan-cafe.webp",
    category: "Dù lệch tâm",
    productSlug: "du-lech-tam-3mx3m-tay-don-bay"
  }
  */
];

