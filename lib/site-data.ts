import { mediaContent } from "@/content/media";
import { productCategories, products } from "@/content/products";
import { projects } from "@/content/projects";

export type ProductCategory = {
  slug: string;
  name: string;
  shortName: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  benefits: string[];
};

export type Product = {
  slug: string;
  categorySlug: string;
  name: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  applications: string[];
  faq: { question: string; answer: string }[];
};

export type Project = {
  slug: string;
  title: string;
  locationSlug: string;
  locationName: string;
  type: string;
  summary: string;
  description: string;
  content: string;
  image: string;
  challenge: string;
  solution: string[];
  outcome: string;
  relatedProductSlugs: string[];
};

export type Area = {
  slug: string;
  name: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  shipping: string;
  support: string;
  demand: string[];
  featuredProductSlugs: string[];
  featuredProjectSlugs: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  topic: string;
  content: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  relatedProductSlugs: string[];
};

export type PolicyPage = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const siteData = {
  brandName: "Ô Dù Đại Phát",
  domain: "https://odudaiphat.com",
  phone: "0349596898",
  phoneDisplay: "0349 596 898",
  zaloLink: "https://zalo.me/0349596898",
  email: "odudaiphat@gmail.com",
  primaryKeyword: "ô dù ngoài trời toàn quốc",
  companySummary:
    "Ô Dù Đại Phát chuyên cung cấp ô dù ngoài trời, dù quán cafe, dù sân vườn, dù lệch tâm và dù che nắng cho khách lẻ, quán kinh doanh, villa, resort và khách dự án trên toàn quốc.",
  seoTitle:
    "Ô Dù Đại Phát - Ô dù ngoài trời toàn quốc, dù quán cafe, dù sân vườn, dù che nắng",
  seoDescription:
    "Ô Dù Đại Phát chuyên ô dù ngoài trời, dù quán cafe, dù sân vườn, dù lệch tâm, dù che nắng toàn quốc. Hình ảnh công trình thật, tư vấn nhanh, báo giá rõ ràng.",
  socialImage: mediaContent.ogImage,
  serviceArea: "Toàn quốc",
  secondaryDomain: "https://odungoaitroi.com",
  leadSuccessText: "Yêu cầu đã được gửi. Đội ngũ sẽ phản hồi sớm qua điện thoại, email hoặc Zalo.",
  leadErrorText: "Chưa gửi được yêu cầu. Vui lòng thử lại hoặc gọi trực tiếp để được hỗ trợ nhanh.",
  trustStats: [
    { value: "500+", label: "Công trình thực tế" },
    { value: "Toàn quốc", label: "Hỗ trợ giao hàng" },
    { value: "100%", label: "Ảnh và video thật" },
    { value: "Nhanh", label: "Tư vấn đúng nhu cầu" }
  ],
  benefits: [
    {
      title: "Giao hàng toàn quốc",
      text: "Hỗ trợ vận chuyển nhanh tới các tỉnh thành, phù hợp cả khách lẻ và khách dự án.",
      icon: "🚚"
    },
    {
      title: "Hỗ trợ lắp đặt",
      text: "Có đội kỹ thuật hoặc hướng dẫn chi tiết từ xa để khách hàng yên tâm triển khai.",
      icon: "🛠️"
    },
    {
      title: "Công trình thực tế",
      text: "Hình ảnh công trình thật từ quán cafe, sân vườn, villa, resort giúp khách ở xa dễ đánh giá chất lượng và kiểu dáng phù hợp.",
      icon: "🏗️"
    },
    {
      title: "Tư vấn đúng nhu cầu",
      text: "Đề xuất mẫu phù hợp theo diện tích, vị trí lắp đặt, phong cách công trình và ngân sách thực tế.",
      icon: "💬"
    }
  ],
  process: [
    "Khách gửi ảnh vị trí hoặc nhu cầu sử dụng.",
    "Tư vấn mẫu dù và kích thước phù hợp.",
    "Gửi báo giá nhanh và phương án triển khai.",
    "Chốt đơn, vận chuyển hoặc hẹn lắp đặt.",
    "Bàn giao, hướng dẫn sử dụng và hỗ trợ bảo hành."
  ],
  testimonials: [
    {
      name: "Anh Tuấn",
      region: "TP.HCM",
      text: "Được tư vấn nhanh theo ảnh mặt bằng, mẫu giao đúng như hình và khung dù rất chắc chắn."
    },
    {
      name: "Chị Lan",
      region: "Đà Nẵng",
      text: "Ở xa vẫn chốt được vì có ảnh công trình thật, video thực tế và quy trình hỗ trợ rõ ràng."
    },
    {
      name: "Anh Hùng",
      region: "Hải Phòng",
      text: "Lắp lên quán nhìn gọn đẹp hơn hẳn, được tư vấn đúng nhu cầu và không bị đẩy sang mẫu không cần thiết."
    }
  ],
  faqs: [
    {
      question: "Ô Dù Đại Phát có giao hàng toàn quốc không?",
      answer:
        "Có. Ô Dù Đại Phát hỗ trợ khách hàng trên toàn quốc, phù hợp cả khách lẻ, quán kinh doanh và khách dự án cần giao hoặc lắp đặt theo nhu cầu."
    },
    {
      question: "Khách ở xa có thể nhận tư vấn như thế nào?",
      answer:
        "Khách chỉ cần gửi ảnh vị trí, nhu cầu sử dụng hoặc kích thước dự kiến qua điện thoại hoặc Zalo để được tư vấn đúng mẫu nhanh hơn."
    },
    {
      question: "Có hỗ trợ lắp đặt hoặc hướng dẫn lắp không?",
      answer:
        "Có. Tùy khu vực và loại công trình, đội ngũ sẽ hỗ trợ lắp đặt trực tiếp hoặc hướng dẫn chi tiết từ xa bằng hình ảnh, video và gọi điện."
    },
    {
      question: "Ô Dù Đại Phát có hỗ trợ tư vấn theo từng nhu cầu không?",
      answer:
        "Có. Bạn có thể gửi ảnh vị trí, mục đích sử dụng và khu vực cần giao hàng để được tư vấn mẫu dù, kích thước và phương án phù hợp."
    }
  ]
} as const;

export { productCategories, products, projects };

export const areas: Area[] = [
  {
    slug: "ha-noi",
    name: "Hà Nội",
    intro: "Hà Nội tập trung vào nhu cầu của quán cafe, nhà hàng, sân vườn, villa và khách gia đình cần giải pháp che nắng đẹp, bền và dễ triển khai.",
    seoTitle: "Ô dù ngoài trời Hà Nội | Tư vấn, báo giá, giao hàng và hỗ trợ triển khai",
    seoDescription: "Trang ô dù ngoài trời Hà Nội dành cho quán cafe, nhà hàng, sân vườn và công trình. Có sản phẩm phù hợp, dự án liên quan và quy trình hỗ trợ rõ ràng.",
    shipping: "Hỗ trợ giao hàng nhanh tại Hà Nội và khu vực lân cận.",
    support: "Có thể tư vấn theo ảnh mặt bằng, kích thước và nhu cầu sử dụng thực tế.",
    demand: ["Quán cafe sân vườn", "Nhà hàng", "Sân hiên gia đình"],
    featuredProductSlugs: ["du-chinh-tam-tron-3m-quay-tay", "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap"],
    featuredProjectSlugs: ["lap-du-san-vuon-ha-noi"]
  },
  {
    slug: "tp-hcm",
    name: "TP.HCM",
    intro: "Khu vực TP.HCM có nhu cầu lớn cho quán cafe, nhà hàng sân vườn và nhiều mô hình kinh doanh ngoài trời cần giải pháp che phủ đẹp và linh hoạt.",
    seoTitle: "Ô dù ngoài trời TP.HCM | Giải pháp cho quán cafe, nhà hàng và công trình",
    seoDescription: "TP.HCM cho nhu cầu ô dù ngoài trời, dù quán cafe, dù che nắng. Có sản phẩm phù hợp, dự án thực tế và CTA báo giá nhanh.",
    shipping: "Hỗ trợ giao hàng toàn khu vực TP.HCM và vùng lân cận.",
    support: "Tư vấn nhanh qua ảnh vị trí, video hiện trạng hoặc mô tả mô hình kinh doanh.",
    demand: ["Cafe sân vườn", "Rooftop", "Nhà hàng ngoài trời"],
    featuredProductSlugs: ["du-lech-tam-3mx3m-tay-don-bay", "du-chinh-tam-chu-nhat-2m5x3m"],
    featuredProjectSlugs: ["lap-du-quan-cafe-tp-hcm"]
  },
  {
    slug: "da-nang",
    name: "Đà Nẵng",
    intro: "Đà Nẵng phù hợp với nhiều mô hình nhà hàng, cafe, homestay và resort cần ô dù ngoài trời vừa đẹp vừa bền trong môi trường du lịch.",
    seoTitle: "Ô dù ngoài trời Đà Nẵng | Giải pháp cho cafe, nhà hàng, homestay, resort",
    seoDescription: "Trang ô dù ngoài trời Đà Nẵng với sản phẩm, dự án, quy trình và nội dung hỗ trợ khách hàng địa phương hoặc khách đang triển khai công trình tại đây.",
    shipping: "Hỗ trợ giao hàng tới Đà Nẵng và hướng dẫn triển khai rõ ràng.",
    support: "Phù hợp khách cần phối cảnh đẹp, có thể tư vấn theo hình ảnh thực tế công trình.",
    demand: ["Nhà hàng biển", "Homestay", "Quán cafe ngoài trời"],
    featuredProductSlugs: ["du-chinh-tam-chu-nhat-2m5x3m", "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap"],
    featuredProjectSlugs: ["thi-cong-du-nha-hang-da-nang"]
  },
  {
    slug: "hai-phong",
    name: "Hải Phòng",
    intro: "Hải Phòng có nhu cầu tốt cho quán ăn, quán cafe và các công trình cần che nắng mưa cho khuôn viên sử dụng thực tế.",
    seoTitle: "Ô dù ngoài trời Hải Phòng | Giải pháp cho quán ăn, quán cafe và trường học",
    seoDescription: "Hải Phòng cho nhu cầu ô dù ngoài trời, khuôn viên trường học, quán ăn và quán cafe. Có sản phẩm, dự án và chính sách hỗ trợ rõ ràng.",
    shipping: "Hỗ trợ giao hàng thuận tiện tới Hải Phòng và khu vực lân cận.",
    support: "Có thể tư vấn theo ảnh vị trí, mô tả công năng và số lượng bộ cần triển khai.",
    demand: ["Quán ăn ngoài trời", "Trường học", "Cafe sân vườn"],
    featuredProductSlugs: ["nha-bat-di-dong-3mx3m-khung-day", "du-chinh-tam-tron-3m-quay-tay"],
    featuredProjectSlugs: ["du-che-nang-truong-hoc-hai-phong"]
  },
  {
    slug: "nha-trang",
    name: "Nha Trang",
    intro: "Nha Trang có nhiều nhu cầu liên quan resort, homestay và khu nghỉ dưỡng, phù hợp các mẫu dù sân vườn và dù lệch tâm cao cấp.",
    seoTitle: "Ô dù ngoài trời Nha Trang | Dù sân vườn, resort, homestay",
    seoDescription: "Nha Trang tập trung các giải pháp ô dù ngoài trời cho resort, homestay, sân vườn và khu nghỉ dưỡng ven biển.",
    shipping: "Hỗ trợ vận chuyển đến Nha Trang và lên phương án triển khai từ xa.",
    support: "Ưu tiên tư vấn theo concept nghỉ dưỡng và hình ảnh không gian thực tế.",
    demand: ["Resort", "Homestay", "Khu thư giãn ngoài trời"],
    featuredProductSlugs: ["du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap", "du-lech-tam-3mx3m-tay-don-bay"],
    featuredProjectSlugs: ["lap-du-resort-nha-trang"]
  },
  {
    slug: "binh-duong",
    name: "Bình Dương",
    intro: "Bình Dương có nhiều nhu cầu cho nhà hàng, cafe, sự kiện thương hiệu và các điểm bán cần giải pháp che nắng ngoài trời thực dụng.",
    seoTitle: "Ô dù ngoài trời Bình Dương | Giải pháp cho cafe, sự kiện và điểm bán",
    seoDescription: "Bình Dương tập trung các dòng ô dù ngoài trời phù hợp quán cafe, sự kiện thương hiệu và điểm bán cần tăng nhận diện.",
    shipping: "Hỗ trợ giao hàng nhanh tới Bình Dương và các khu vực sản xuất, thương mại lân cận.",
    support: "Có thể tư vấn theo nhu cầu vận hành điểm bán hoặc activation ngoài trời.",
    demand: ["Điểm bán", "Activation", "Cafe sân vườn"],
    featuredProductSlugs: ["in-logo-du-lech-tam-2m5x2m5-tay-bay", "du-chinh-tam-chu-nhat-2m5x3m"],
    featuredProjectSlugs: ["du-logo-activation-binh-duong"]
  },
  {
    slug: "dong-nai",
    name: "Đồng Nai",
    intro: "Đồng Nai phù hợp nhiều mô hình quán cafe, khuôn viên gia đình và điểm kinh doanh ngoài trời cần giải pháp che nắng bền và dễ triển khai.",
    seoTitle: "Ô dù ngoài trời Đồng Nai | Giải pháp cho cafe và sân vườn",
    seoDescription: "Đồng Nai cho nhu cầu ô dù ngoài trời, dù cafe, dù sân vườn và các mô hình kinh doanh ngoài trời cần tư vấn từ xa.",
    shipping: "Hỗ trợ giao hàng tới Đồng Nai và hướng dẫn triển khai rõ ràng.",
    support: "Tư vấn theo ảnh mặt bằng, số lượng bàn và mục tiêu sử dụng.",
    demand: ["Quán cafe", "Sân vườn gia đình", "Điểm nghỉ chân"],
    featuredProductSlugs: ["du-chinh-tam-tron-3m-quay-tay", "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap"],
    featuredProjectSlugs: ["lap-du-quan-cafe-tp-hcm"]
  },
  {
    slug: "can-tho",
    name: "Cần Thơ",
    intro: "Cần Thơ là khu vực có nhiều quán cafe sân vườn, điểm kinh doanh ngoài trời và nhu cầu che nắng cho không gian tiếp khách.",
    seoTitle: "Ô dù ngoài trời Cần Thơ | Dù cafe sân vườn và giải pháp ngoài trời",
    seoDescription: "Trang ô dù ngoài trời Cần Thơ dành cho cafe sân vườn, nhà hàng và không gian tiếp khách ngoài trời cần giải pháp bền đẹp, dễ vận hành.",
    shipping: "Hỗ trợ giao hàng tới Cần Thơ và các khu vực miền Tây lân cận.",
    support: "Có thể tư vấn theo ảnh hiện trạng và gợi ý nhóm dù phù hợp layout bàn ghế.",
    demand: ["Cafe sân vườn", "Quán ăn", "Khu tiếp khách"],
    featuredProductSlugs: ["du-chinh-tam-tron-3m-quay-tay", "du-lech-tam-3mx3m-tay-don-bay"],
    featuredProjectSlugs: ["du-quan-cafe-can-tho"]
  },
  {
    slug: "phu-quoc",
    name: "Phú Quốc",
    intro: "Phú Quốc phù hợp các dòng dù sân vườn, hồ bơi và nghỉ dưỡng cần tính thẩm mỹ cao và phù hợp concept du lịch lưu trú.",
    seoTitle: "Ô dù ngoài trời Phú Quốc | Giải pháp cho resort, villa và hồ bơi",
    seoDescription: "Phú Quốc tập trung các giải pháp dù ngoài trời cho resort, villa, hồ bơi và khu thư giãn cần trải nghiệm nghỉ dưỡng tốt.",
    shipping: "Hỗ trợ giao hàng theo phương án phù hợp và tư vấn rõ quy trình triển khai từ xa.",
    support: "Ưu tiên tư vấn theo concept nghỉ dưỡng, hình ảnh không gian và nhu cầu check-in, thư giãn.",
    demand: ["Villa nghỉ dưỡng", "Resort", "Khu hồ bơi"],
    featuredProductSlugs: ["du-lech-tam-3mx3m-den-led", "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap"],
    featuredProjectSlugs: ["du-ho-boi-phu-quoc"]
  },
  {
    slug: "quang-ninh",
    name: "Quảng Ninh",
    intro: "Quảng Ninh có nhiều quán cafe, nhà hàng và mô hình du lịch ngoài trời cần các giải pháp che nắng có tính thẩm mỹ tốt và dễ triển khai.",
    seoTitle: "Ô dù ngoài trời Quảng Ninh | Giải pháp cho du lịch, cafe và nhà hàng",
    seoDescription: "Quảng Ninh cho nhu cầu ô dù ngoài trời phù hợp quán cafe, nhà hàng, homestay và các mô hình du lịch cần giải pháp đẹp và bền.",
    shipping: "Hỗ trợ giao hàng tới Quảng Ninh với quy trình rõ ràng cho khách ở xa.",
    support: "Có thể tư vấn theo mặt bằng, vị trí ngoài trời và yêu cầu thẩm mỹ tổng thể.",
    demand: ["Du lịch", "Cafe ven biển", "Nhà hàng"],
    featuredProductSlugs: ["du-lech-tam-tron-3m-quay-tay", "du-chinh-tam-chu-nhat-2m5x3m"],
    featuredProjectSlugs: ["thi-cong-du-nha-hang-da-nang"]
  },
  {
    slug: "bac-ninh",
    name: "Bắc Ninh",
    intro: "Bắc Ninh phù hợp các nhu cầu che nắng cho quán cafe, nhà hàng và khuôn viên kinh doanh cần giải pháp thực dụng, dễ triển khai nhanh.",
    seoTitle: "Ô dù ngoài trời Bắc Ninh | Giải pháp cho cafe, nhà hàng và khuôn viên",
    seoDescription: "Bắc Ninh cho nhu cầu ô dù ngoài trời, quán cafe, nhà hàng và khuôn viên kinh doanh cần tư vấn nhanh và báo giá rõ.",
    shipping: "Hỗ trợ giao hàng thuận tiện tới Bắc Ninh và các khu vực công nghiệp, đô thị lân cận.",
    support: "Tư vấn nhanh qua ảnh hiện trạng và gợi ý theo mức đầu tư phù hợp.",
    demand: ["Cafe", "Nhà hàng", "Khuôn viên kinh doanh"],
    featuredProductSlugs: ["du-chinh-tam-tron-3m-quay-tay", "du-lech-tam-2m5x2m5-tay-bay"],
    featuredProjectSlugs: ["lap-du-san-vuon-ha-noi"]
  },
  {
    slug: "nghe-an",
    name: "Nghệ An",
    intro: "Nghệ An phù hợp các giải pháp dù quán cafe, sân vườn và công trình cần hỗ trợ tư vấn từ xa, giao hàng rõ ràng và dễ vận hành.",
    seoTitle: "Ô dù ngoài trời Nghệ An | Dù cafe, sân vườn và công trình",
    seoDescription: "Trang ô dù ngoài trời Nghệ An hỗ trợ nhu cầu quán cafe, sân vườn và công trình cần giao hàng, lắp đặt hoặc hướng dẫn triển khai rõ ràng.",
    shipping: "Hỗ trợ giao hàng tới Nghệ An với lộ trình và quy trình đóng gói rõ ràng.",
    support: "Phù hợp khách cần tư vấn từ xa qua ảnh mặt bằng, nhu cầu và ngân sách.",
    demand: ["Cafe ngoài trời", "Sân vườn", "Công trình vừa và nhỏ"],
    featuredProductSlugs: ["du-chinh-tam-tron-3m-quay-tay", "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap"],
    featuredProjectSlugs: ["du-quan-cafe-can-tho"]
  }
];

export const articles: Article[] = [
  {
    slug: "gia-o-du-ngoai-troi-bao-nhieu",
    title: "Giá ô dù ngoài trời bao nhiêu? Cách hỏi báo giá sát nhu cầu",
    excerpt: "Giá ô dù ngoài trời phụ thuộc vào kích thước, kiểu dáng, số lượng, chất liệu và khu vực giao hàng. Bài viết giúp bạn chuẩn bị thông tin để nhận báo giá sát hơn.",
    seoTitle: "Giá ô dù ngoài trời bao nhiêu? Cách nhận báo giá sát nhu cầu",
    seoDescription: "Tìm hiểu giá ô dù ngoài trời phụ thuộc vào yếu tố nào, cách chuẩn bị thông tin báo giá và gợi ý chọn mẫu phù hợp cho quán cafe, sân vườn, nhà hàng.",
    topic: "Báo giá ô dù",
    content: [
      { heading: "Vì sao không nên hỏi giá bằng một con số chung?", paragraphs: ["Cùng là ô dù ngoài trời nhưng giá có thể khác nhau rất nhiều theo kích thước, kiểu dù, chất liệu, số lượng và khu vực giao hàng. Một mẫu dù tròn tâm giữa cho quán nhỏ không thể báo giá giống dù lệch tâm cho resort hoặc dù in logo cho chuỗi quán cafe.", "Cách hỏi báo giá hiệu quả hơn là gửi ảnh mặt bằng, số bàn cần che, khu vực giao hàng và mục tiêu sử dụng. Khi có thông tin thực tế, đội ngũ có thể gợi ý mẫu vừa đủ, tránh chọn mẫu quá nhỏ không hiệu quả hoặc quá lớn gây lãng phí. Bạn có thể xem trước các nhóm sản phẩm tại /san-pham."], bullets: ["Kích thước và kiểu tán dù", "Dù tâm giữa, dù lệch tâm, dù sân vườn hay dù in logo", "Số lượng cần triển khai", "Khu vực giao hàng và nhu cầu lắp đặt"] },
      { heading: "Những yếu tố ảnh hưởng trực tiếp tới báo giá", paragraphs: ["Báo giá thường thay đổi theo đường kính hoặc cạnh tán, kết cấu khung, loại vải, chân đế, yêu cầu in logo và số lượng. Dù lệch tâm thường có chi phí cao hơn do kết cấu phức tạp và hình thức cao cấp hơn. Dù in logo có thêm phần xử lý nhận diện thương hiệu, màu sắc và vị trí in.", "Với quán cafe, nhà hàng hoặc sân vườn, chi phí nên được nhìn theo hiệu quả sử dụng. Một phương án đúng giúp tăng khu vực ngồi ngoài trời, giảm nắng gắt và làm mặt tiền nhìn chuyên nghiệp hơn. Vì vậy, không nên chỉ so sánh theo giá thấp nhất." ] },
      { heading: "Gợi ý chọn theo mục đích sử dụng", paragraphs: ["Nếu cần giải pháp gọn cho quán ăn hoặc khu bàn nhỏ, các mẫu dù tâm giữa thường hợp lý. Nếu cần vùng che rộng, hình ảnh cao cấp và ít vướng trụ, hãy xem /san-pham/du-lech-tam. Với sân vườn, homestay, resort, dòng /san-pham/du-san-vuon thường phù hợp hơn vì ưu tiên thẩm mỹ và trải nghiệm thư giãn.", "Nếu quán cafe cần đồng bộ nhận diện, /san-pham/du-in-logo là phương án đáng cân nhắc. Logo nên được bố trí vừa đủ để dễ nhìn nhưng không làm mặt tiền bị rối." ] },
      { heading: "Cách nhận báo giá sát hơn", paragraphs: ["Bạn nên gửi ảnh toàn cảnh vị trí, kích thước ước lượng, số lượng bàn hoặc số cây dù dự kiến, tỉnh/thành cần giao và nhu cầu lắp đặt. Nếu cần in logo, hãy gửi thêm file logo hoặc ảnh nhận diện đang dùng.", "Ô Dù Đại Phát tư vấn nhanh qua Zalo 0349 596 898. Sau khi nắm nhu cầu, đội ngũ sẽ gợi ý mẫu phù hợp và báo giá theo kích thước, mẫu dù, số lượng và phương án giao hàng/lắp đặt." ] }
    ],
    relatedProductSlugs: ["du-lech-tam-3mx3m-tay-don-bay", "du-chinh-tam-tron-3m-quay-tay", "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap", "in-logo-du-tron-3m-theo-yeu-cau"]
  },
  {
    slug: "nen-chon-du-quan-cafe-loai-nao",
    title: "Nên chọn dù quán cafe loại nào để đẹp, bền và dễ vận hành?",
    excerpt: "Hướng dẫn chủ quán cafe chọn dù theo diện tích, phong cách, số lượng bàn, mặt tiền và mục tiêu nhận diện thương hiệu.",
    seoTitle: "Nên chọn dù quán cafe loại nào? Gợi ý theo từng mô hình quán",
    seoDescription: "Tư vấn chọn dù quán cafe cho quán sân vườn, mặt phố, rooftop, vỉa hè và chuỗi cửa hàng. Gợi ý kích thước, kiểu dáng và cách nhận báo giá.",
    topic: "Dù quán cafe",
    content: [
      { heading: "Bắt đầu từ mặt bằng thật của quán", paragraphs: ["Một quán cafe sân vườn rộng, một quán vỉa hè nhỏ và một quán rooftop không nên dùng cùng một kiểu dù. Chủ quán cần xác định khu vực cần che, số bàn phục vụ, hướng nắng, lối đi của nhân viên và phong cách muốn thể hiện.", "Với quán mới mở, dù ngoài trời ảnh hưởng trực tiếp tới cảm nhận đầu tiên của khách. Một cụm dù bố trí gọn, màu sắc hợp bảng hiệu và kích thước vừa đủ sẽ giúp mặt tiền nhìn chỉn chu hơn. Xem thêm /san-pham/du-quan-cafe để đối chiếu với mô hình quán." ] },
      { heading: "Gợi ý theo từng mô hình", paragraphs: ["Quán nhỏ hoặc mặt tiền hẹp thường hợp dù vuông 2x2m hoặc dù tâm giữa 2.5m vì gọn và không chiếm lối đi. Quán sân vườn có nhiều bàn nên cân nhắc dù tròn 3m hoặc phối nhiều bộ đồng màu để tạo cảm giác đồng bộ.", "Quán muốn hình ảnh cao cấp hơn có thể dùng dù lệch tâm, đặc biệt ở khu vực bàn đẹp, góc check-in hoặc khu tiếp khách chính. Rooftop và khu vực trên cao cần cân nhắc kỹ về gió, vị trí chân đế và cách vận hành." ], bullets: ["Quán nhỏ: ưu tiên mẫu gọn", "Cafe sân vườn: ưu tiên vùng che và sự đồng bộ", "Rooftop: trao đổi kỹ điều kiện gió", "Quán cao cấp: cân nhắc dù lệch tâm"] },
      { heading: "Khi nào nên chọn dù in logo?", paragraphs: ["Dù in logo phù hợp khi quán muốn tăng nhận diện tại mặt tiền, khai trương, làm lại hình ảnh hoặc triển khai nhiều điểm bán. Logo cần được đặt vừa đủ, không quá dày để mặt tiền vẫn gọn và chuyên nghiệp.", "Bạn có thể xem thêm /san-pham/du-in-logo nếu cần đồng bộ thương hiệu. Khi gửi yêu cầu, nên kèm logo, màu chủ đạo, ảnh bảng hiệu và ảnh khu vực đặt dù." ] },
      { heading: "Gửi ảnh để được tư vấn đúng hơn", paragraphs: ["Để chọn dù quán cafe nhanh và ít rủi ro, hãy gửi ảnh mặt bằng qua Zalo 0349 596 898. Ô Dù Đại Phát sẽ dựa trên diện tích, số bàn, phong cách quán và ngân sách để gợi ý mẫu phù hợp.", "Nếu quán cần nhiều bộ, đội ngũ cũng có thể gợi ý cách chia cụm dù, chừa lối đi và chọn màu tán sao cho mặt tiền nhìn đồng bộ." ] }
    ],
    relatedProductSlugs: ["du-lech-tam-2m5x2m5-tay-bay", "du-chinh-tam-tron-3m-quay-tay", "du-lech-tam-3mx3m-tay-don-bay", "in-logo-du-tron-3m-theo-yeu-cau"]
  },
  {
    slug: "du-lech-tam-vs-du-tron",
    title: "Dù lệch tâm vs dù tròn tâm giữa: nên chọn loại nào?",
    excerpt: "So sánh dù lệch tâm và dù tròn/tâm giữa theo thẩm mỹ, vùng che, chi phí, bố trí bàn ghế và nhu cầu sử dụng thực tế.",
    seoTitle: "Dù lệch tâm vs dù tròn tâm giữa: So sánh để chọn đúng",
    seoDescription: "So sánh dù lệch tâm và dù tròn tâm giữa cho quán cafe, sân vườn, nhà hàng, resort. Gợi ý trường hợp nên chọn từng loại.",
    topic: "So sánh sản phẩm",
    content: [
      { heading: "Khác biệt lớn nhất nằm ở vị trí trụ", paragraphs: ["Dù lệch tâm có trụ đặt lệch sang một bên, phần tán vươn ra che khu vực sử dụng nên không gian bên dưới thoáng hơn. Dòng này thường được chọn cho quán cafe, resort, hồ bơi hoặc sân vườn cần hình ảnh cao cấp.", "Dù tròn tâm giữa có trụ ở giữa, kết cấu gọn và dễ bố trí cho nhiều mặt bằng phổ thông. Nếu cần hình ảnh đẹp và ít vướng bàn ghế, xem /san-pham/du-lech-tam. Nếu cần nhiều bộ và chi phí hợp lý, dù tâm giữa có thể thực tế hơn." ] },
      { heading: "So sánh theo mục đích sử dụng", paragraphs: ["Với quán cafe sân vườn, cả hai loại đều có thể dùng. Dù lệch tâm phù hợp khu bàn đẹp, góc chụp ảnh hoặc khu cần nâng hình ảnh. Dù tròn tâm giữa phù hợp khu bàn số lượng nhiều, cần bố trí lặp lại và dễ vận hành.", "Với sân vườn gia đình, nếu khu bàn nhỏ thì dù tâm giữa gọn hơn; nếu muốn cảm giác nghỉ dưỡng, dù lệch tâm hoặc dù sân vườn cao cấp sẽ đáng cân nhắc. Xem thêm /san-pham/du-san-vuon." ], bullets: ["Dù lệch tâm: đẹp, thoáng, hợp không gian cao cấp", "Dù tròn/tâm giữa: gọn, dễ nhân rộng, chi phí hợp lý", "Quán nhiều bàn: cần tính lối đi và khoảng mở tán"] },
      { heading: "Chi phí và độ linh hoạt", paragraphs: ["Dù lệch tâm thường có chi phí cao hơn do kết cấu và hình thức. Tuy nhiên, nếu dùng ở vị trí quan trọng, dòng này có thể giúp không gian nhìn sang hơn và tạo cảm giác chuyên nghiệp rõ rệt.", "Dù tròn tâm giữa thường dễ triển khai số lượng lớn hơn, phù hợp quán ăn, quán cafe nhỏ hoặc khu vực cần che nhiều cụm bàn. Có thể phối dù lệch tâm cho khu chính và dùng dù tâm giữa cho khu phụ để cân bằng chi phí." ] },
      { heading: "Kết luận", paragraphs: ["Mẫu phù hợp nhất là mẫu phù hợp với mặt bằng, không phải mẫu đắt nhất. Hãy gửi ảnh khu vực cần che nắng qua Zalo để được tư vấn theo số bàn, hướng nắng, diện tích, phong cách và ngân sách.", "Nếu cần tham khảo thêm kích thước, xem bài /kien-thuc/kich-thuoc-du-ngoai-troi trước khi hỏi báo giá." ] }
    ],
    relatedProductSlugs: ["du-lech-tam-3mx3m-tay-don-bay", "du-lech-tam-tron-3m-quay-tay", "du-chinh-tam-tron-3m-quay-tay", "du-chinh-tam-tron-3m-quay-tay"]
  },
  {
    slug: "kich-thuoc-du-ngoai-troi",
    title: "Kích thước dù ngoài trời: chọn bao nhiêu là phù hợp?",
    excerpt: "Hướng dẫn chọn kích thước dù ngoài trời theo số bàn, diện tích sân vườn, quán cafe, nhà hàng, hồ bơi và nhu cầu che nắng thực tế.",
    seoTitle: "Kích thước dù ngoài trời phổ biến và cách chọn đúng",
    seoDescription: "Bảng gợi ý kích thước dù ngoài trời cho quán cafe, sân vườn, nhà hàng, hồ bơi. Cách đo mặt bằng và tránh chọn sai kích thước.",
    topic: "Kích thước dù",
    content: [
      { heading: "Đừng chỉ nhìn đường kính hoặc cạnh tán dù", paragraphs: ["Kích thước ghi trên sản phẩm chỉ cho biết độ rộng tán dù, chưa đủ để quyết định có phù hợp hay không. Khi lắp vào thực tế, bạn còn phải tính vùng bàn ghế, lối đi, khoảng mở dù, hướng nắng và vị trí chân đế.", "Cách đúng là đo khu vực cần che, chụp ảnh toàn cảnh và xác định số người thường sử dụng. Với quán cafe hoặc nhà hàng, nên tính theo cụm bàn thay vì đo một điểm đơn lẻ." ] },
      { heading: "Gợi ý kích thước phổ biến", paragraphs: ["Dù 2m đến 2.5m thường phù hợp ban công, góc sân nhỏ hoặc quán có diện tích hạn chế. Dù 3m là kích thước cân bằng, được nhiều quán cafe và sân vườn lựa chọn vì che được cụm bàn phổ biến.", "Dù vuông 3x3m hoặc dù lệch tâm 3x3m phù hợp khu cần vùng che rộng và hình ảnh chuyên nghiệp hơn. Với resort, homestay hoặc hồ bơi, nên xem thêm /san-pham/du-san-vuon và /san-pham/du-lech-tam." ], bullets: ["2m-2.5m: ban công, góc sân nhỏ, quán nhỏ", "3m: quán cafe sân vườn, bàn 4-6 ghế", "3x3m: vùng che rộng, khu bàn chính", "Nhiều bộ đồng màu: mặt bằng dài hoặc nhiều cụm bàn"] },
      { heading: "Sai lầm thường gặp", paragraphs: ["Sai lầm phổ biến là chọn dù quá nhỏ vì muốn tiết kiệm. Khi sử dụng, nắng vẫn hắt vào bàn và khu ngoài trời không đạt hiệu quả như kỳ vọng. Ngược lại, chọn dù quá lớn có thể khiến không gian chật, vướng lối đi và khó vận hành.", "Một sai lầm khác là không tính hướng nắng. Nắng buổi trưa và nắng buổi chiều có góc chiếu khác nhau. Khi gửi ảnh/video cho đội tư vấn, nên ghi rõ khung giờ nắng gắt nhất." ] },
      { heading: "Cách gửi thông tin để được tư vấn", paragraphs: ["Bạn nên gửi ảnh toàn cảnh, ảnh khu bàn gần hơn, chiều dài rộng ước lượng và số bàn cần che. Nếu có bản vẽ mặt bằng đơn giản, việc tư vấn sẽ càng nhanh.", "Ô Dù Đại Phát tư vấn qua Zalo 0349 596 898, gợi ý kích thước theo nhu cầu và báo giá theo mẫu, số lượng, khu vực giao hàng." ] }
    ],
    relatedProductSlugs: ["du-chinh-tam-tron-3m-quay-tay", "du-lech-tam-3mx3m-tay-don-bay", "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap", "du-chinh-tam-tron-3m-quay-tay"]
  },
  {
    slug: "du-in-logo-cho-quan-cafe",
    title: "Dù in logo cho quán cafe: khi nào nên làm và làm sao cho đẹp?",
    excerpt: "Phân tích cách dùng dù in logo để tăng nhận diện quán cafe mà vẫn giữ mặt tiền gọn, đẹp và chuyên nghiệp.",
    seoTitle: "Dù in logo cho quán cafe: Tư vấn mẫu, màu sắc và bố cục in",
    seoDescription: "Tư vấn dù in logo cho quán cafe: khi nào nên dùng, cách chọn màu tán, vị trí logo, kích thước và cách gửi file để báo giá.",
    topic: "Dù in logo",
    content: [
      { heading: "Dù in logo không chỉ là vật dụng che nắng", paragraphs: ["Với quán cafe, dù in logo có thể trở thành một phần nhận diện tại mặt tiền. Khi khách đi ngang, màu tán và logo trên dù giúp họ nhận ra quán nhanh hơn, đặc biệt ở những khu có nhiều quán cạnh nhau.", "Tuy nhiên, dù in logo cần được làm vừa phải. Thiết kế quá rối, logo quá lớn hoặc màu sắc quá chói có thể khiến mặt tiền kém sang. Xem thêm /san-pham/du-in-logo để hiểu nhóm sản phẩm này." ] },
      { heading: "Khi nào quán cafe nên làm dù in logo?", paragraphs: ["Dù in logo phù hợp khi quán mới khai trương, đang làm lại nhận diện, có nhiều bộ dù ngoài trời hoặc muốn đồng bộ hình ảnh cho chuỗi điểm bán. Với quán nhỏ, vài bộ dù in logo đúng màu cũng có thể giúp mặt tiền dễ nhớ hơn.", "Nếu quán nằm trong khu phố nhiều biển hiệu, nên chọn cách in tinh tế để không bị lẫn vào đám đông. Có thể in logo ở một vài mặt dễ quan sát nhất thay vì in dày trên toàn bộ tán." ], bullets: ["Quán mới khai trương", "Quán có khu ngồi ngoài trời đông khách", "Chuỗi cửa hàng cần đồng bộ", "Sự kiện hoặc chương trình thương hiệu"] },
      { heading: "Cần chuẩn bị gì trước khi báo giá?", paragraphs: ["Bạn nên gửi file logo rõ nét, màu chủ đạo, số lượng dự kiến, ảnh mặt tiền và kích thước khu vực đặt dù. Nếu chưa có file thiết kế chuẩn, có thể gửi ảnh logo hiện tại để đội ngũ tư vấn hướng xử lý.", "Ngoài logo, nên cân nhắc màu tán dù. Lựa chọn tốt là màu vừa nhận diện thương hiệu vừa phù hợp không gian sử dụng thật." ] },
      { heading: "Liên kết sản phẩm phù hợp", paragraphs: ["Nếu quán cafe cần mẫu gọn, hãy xem thêm /san-pham/du-quan-cafe. Nếu muốn hình ảnh cao cấp hơn cho khu bàn chính, có thể cân nhắc /san-pham/du-lech-tam.", "Trường hợp cần báo giá nhanh, hãy gửi ảnh mặt bằng và logo qua Zalo 0349 596 898 để Ô Dù Đại Phát tư vấn mẫu, kích thước, vị trí in và chi phí phù hợp." ] }
    ],
    relatedProductSlugs: ["in-logo-du-tron-3m-theo-yeu-cau", "du-lech-tam-2m5x2m5-tay-bay", "du-chinh-tam-tron-3m-quay-tay", "du-lech-tam-3mx3m-tay-don-bay"]
  }
];

export const policyPages: PolicyPage[] = [
  {
    slug: "van-chuyen",
    title: "Chính sách vận chuyển",
    seoTitle: "Chính sách vận chuyển ô dù ngoài trời | Ô Dù Đại Phát",
    seoDescription: "Thông tin vận chuyển cho khách hàng đặt ô dù ngoài trời trên toàn quốc, quy trình xác nhận đơn và hình thức hỗ trợ giao hàng.",
    intro: "Trang này giúp khách ở xa yên tâm hơn trước khi đặt hàng vì nhìn thấy quy trình đóng gói, vận chuyển và hỗ trợ rõ ràng.",
    sections: [
      {
        heading: "Phạm vi phục vụ",
        paragraphs: [
          "Ô Dù Đại Phát hỗ trợ khách hàng trên toàn quốc. Tùy khu vực và loại đơn hàng, đội ngũ sẽ tư vấn hình thức giao phù hợp."
        ],
        bullets: ["Khách lẻ", "Khách quán cafe, nhà hàng", "Khách dự án và công trình"]
      },
      {
        heading: "Quy trình vận chuyển",
        paragraphs: [
          "Sau khi thống nhất mẫu phù hợp, đội ngũ sẽ xác nhận đơn, chuẩn bị đóng gói và thông tin phương án giao hàng để khách theo dõi dễ dàng.",
          "Với đơn cần lắp đặt hoặc phối hợp nhiều bộ, quá trình trao đổi sẽ được làm rõ trước khi giao."
        ]
      }
    ]
  },
  {
    slug: "bao-hanh",
    title: "Chính sách bảo hành",
    seoTitle: "Chính sách bảo hành ô dù ngoài trời | Ô Dù Đại Phát",
    seoDescription: "Thông tin bảo hành, hỗ trợ kỹ thuật và nguyên tắc tiếp nhận xử lý sau bán cho sản phẩm ô dù ngoài trời.",
    intro: "Chính sách bảo hành rõ ràng là yếu tố rất quan trọng khi bán hàng toàn quốc, đặc biệt với khách không đến trực tiếp.",
    sections: [
      {
        heading: "Nguyên tắc hỗ trợ",
        paragraphs: [
          "Đội ngũ tiếp nhận phản hồi sau bán để hỗ trợ hướng dẫn sử dụng, kiểm tra tình huống phát sinh và đưa ra phương án xử lý phù hợp."
        ],
        bullets: ["Tiếp nhận qua điện thoại", "Tiếp nhận qua Zalo", "Ưu tiên phản hồi nhanh cho đơn đang vận hành"]
      },
      {
        heading: "Chuẩn bị khi yêu cầu bảo hành",
        paragraphs: [
          "Khách nên chuẩn bị ảnh, video và mô tả ngắn tình trạng để đội ngũ đánh giá nhanh hơn và tư vấn chính xác hơn."
        ]
      }
    ]
  },
  {
    slug: "doi-tra",
    title: "Chính sách đổi trả",
    seoTitle: "Chính sách đổi trả | Ô Dù Đại Phát",
    seoDescription: "Thông tin đổi trả, xác nhận tình trạng đơn hàng và nguyên tắc xử lý khi có phát sinh cần điều chỉnh sau khi nhận hàng.",
    intro: "Chính sách đổi trả cần rõ ràng để khách hàng biết cách xử lý khi đơn hàng có nội dung cần điều chỉnh sau khi nhận. ",
    sections: [
      {
        heading: "Nguyên tắc tiếp nhận",
        paragraphs: [
          "Khách cần liên hệ sớm khi phát hiện vấn đề liên quan đến đơn hàng để đội ngũ hỗ trợ kiểm tra và hướng dẫn cách xử lý phù hợp."
        ]
      },
      {
        heading: "Thông tin nên cung cấp",
        paragraphs: [
          "Nên cung cấp mã đơn, ảnh sản phẩm, mô tả hiện trạng và mong muốn xử lý để quá trình hỗ trợ diễn ra nhanh hơn."
        ]
      }
    ]
  },
  {
    slug: "thanh-toan",
    title: "Chính sách thanh toán",
    seoTitle: "Chính sách thanh toán | Ô Dù Đại Phát",
    seoDescription: "Thông tin quy trình xác nhận thanh toán, các bước chốt đơn và nguyên tắc minh bạch khi triển khai đơn hàng ô dù ngoài trời.",
    intro: "Trang chính sách thanh toán giúp khách hàng hiểu rõ quy trình xác nhận đơn và giảm bớt lo lắng khi đặt hàng từ xa.",
    sections: [
      {
        heading: "Quy trình xác nhận",
        paragraphs: [
          "Mỗi đơn hàng sẽ được thống nhất nội dung tư vấn, số lượng, phương án triển khai và thông tin xác nhận trước khi tiến hành các bước tiếp theo."
        ]
      },
      {
        heading: "Minh bạch thông tin",
        paragraphs: [
          "Khách hàng nên xác nhận lại các nội dung chính của đơn như mẫu, số lượng, khu vực triển khai và đầu mối liên hệ trước khi chốt."
        ]
      }
    ]
  },
  {
    slug: "bao-mat",
    title: "Chính sách bảo mật",
    seoTitle: "Chính sách bảo mật | Ô Dù Đại Phát",
    seoDescription: "Thông tin về việc tiếp nhận và bảo vệ thông tin khách hàng khi gửi yêu cầu tư vấn, báo giá.",
    intro: "Thông tin của khách hàng được dùng để tư vấn, báo giá và hỗ trợ trong quá trình đặt mua ô dù ngoài trời.",
    sections: [
      {
        heading: "Dữ liệu thu thập",
        paragraphs: [
          "Ô Dù Đại Phát chỉ tiếp nhận các thông tin cần thiết cho việc tư vấn như tên, số điện thoại, email, khu vực và mô tả nhu cầu."
        ]
      },
      {
        heading: "Mục đích sử dụng",
        paragraphs: [
          "Thông tin được dùng để phản hồi yêu cầu tư vấn, báo giá và hỗ trợ khách hàng trong quá trình trao đổi về sản phẩm hoặc dự án."
        ]
      }
    ]
  }
];

export function getCategory(slug: string) {
  return productCategories.find((item) => item.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((item) => item.categorySlug === slug);
}

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export function getArea(slug: string) {
  return areas.find((item) => item.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((item) => item.slug === slug);
}

export function getPolicyPage(slug: string) {
  return policyPages.find((item) => item.slug === slug);
}

export function getRelatedProducts(slugs: string[]) {
  return products.filter((item) => slugs.includes(item.slug));
}

export function getRelatedProjects(slugs: string[]) {
  return projects.filter((item) => slugs.includes(item.slug));
}
