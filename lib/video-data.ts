export type GuideVideo = {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  youtubeId?: string;
  category: "su-dung" | "sua-chua" | "bao-duong" | "loi-thuong-gap";
  productSlug?: string;
  featured?: boolean;
};

// CÁCH THÊM VIDEO MỚI:
// 1. Copy một khối video bên dưới.
// 2. Đổi id cho không trùng.
// 3. Dán link YouTube vào youtubeUrl.
// 4. Viết title và description ngắn.
// 5. Chọn category phù hợp: "su-dung", "sua-chua", "bao-duong", "loi-thuong-gap".
// 6. Nếu video thuộc một sản phẩm cụ thể, điền productSlug. Nếu không chắc thì có thể bỏ trống.
// 7. youtubeId có thể bỏ trống vì website sẽ tự tách từ youtubeUrl.
//    Nếu muốn điền tay: youtubeId là đoạn mã trong link YouTube.
//    Ví dụ https://youtu.be/ABC123?si=... thì youtubeId là ABC123.
// 8. Không cần sửa page hoặc component nào khác.

export const guideVideos: GuideVideo[] = [
  {
    id: "huong-dan-do-chan-de-be-tong-o-du-ngoai-troi",
    title: "Hướng dẫn đổ chân đế bê tông cho ô dù ngoài trời",
    description: "Gợi ý cách chuẩn bị chân đế để dù ngoài trời đứng chắc và sử dụng ổn định hơn.",
    youtubeUrl: "https://youtube.com/shorts/nvsOkquKtpY?si=YhaUGEI6QnRhtQjH",
    youtubeId: "nvsOkquKtpY",
    category: "su-dung",
    featured: true
  },
  {
    id: "huong-dan-su-dung-du-lech-tam",
    title: "Hướng dẫn sử dụng dù lệch tâm",
    description: "Video thao tác cơ bản giúp khách dùng dù lệch tâm đúng cách và dễ hơn.",
    youtubeUrl: "https://youtu.be/5SDy-07HjZg?si=SukFk5DiLrQwCm7z",
    youtubeId: "5SDy-07HjZg",
    category: "su-dung",
    productSlug: "du-lech-tam-3mx3m-tay-don-bay",
    featured: true
  },
  {
    id: "huong-dan-mo-gap-du-lech-tam",
    title: "Hướng dẫn mở và gấp dù lệch tâm",
    description: "Hướng dẫn thao tác mở/gấp dù lệch tâm để hạn chế dùng sai trong quá trình sử dụng.",
    youtubeUrl: "https://youtube.com/shorts/9a4lgnE9evM?si=gUyRHBFXgOprco5I",
    youtubeId: "9a4lgnE9evM",
    category: "su-dung",
    productSlug: "du-lech-tam-tron-3m-quay-tay",
    featured: true
  },
  {
    id: "huong-dan-chon-vi-tri-dat-du",
    title: "Hướng dẫn chọn vị trí đặt dù ngoài trời",
    description: "Gợi ý chọn vị trí đặt dù theo mặt bằng, hướng nắng và khu vực cần che.",
    youtubeUrl: "https://youtu.be/fAky6EKJR20?si=VMETBl86bqupxnWp",
    youtubeId: "fAky6EKJR20",
    category: "su-dung",
    featured: false
  },
  {
    id: "huong-dan-bao-quan-du-ngoai-troi",
    title: "Hướng dẫn bảo quản dù ngoài trời",
    description: "Một số lưu ý khi sử dụng và bảo quản dù ngoài trời để sản phẩm bền hơn.",
    youtubeUrl: "https://youtube.com/shorts/GZh28wgKbVs?si=6Dm7f6uqx0c_TCJz",
    youtubeId: "GZh28wgKbVs",
    category: "bao-duong",
    featured: true
  }
];
