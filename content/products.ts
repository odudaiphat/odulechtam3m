import type { Product, ProductCategory } from "@/lib/site-data";

// Dữ liệu sản phẩm. Người không biết code chỉ nên sửa chữ trong dấu ngoặc kép.
// Không đổi slug nếu trang đã lên Google.
// Thay ảnh bằng cách đổi image/heroImage sang đường dẫn trong public/images/.

export const productCategories: ProductCategory[] = [
  {
    slug: "du-quan-cafe",
    name: "Dù quán cafe",
    shortName: "Dù quán cafe",
    intro: "Giải pháp che nắng mưa thẩm mỹ cho quán cafe sân vườn, mặt tiền, rooftop và khu vực ngoài trời cần tạo chỗ ngồi thoải mái cho khách.",
    seoTitle: "Dù quán cafe đẹp, bền | Tư vấn mẫu cho quán ngoài trời",
    seoDescription: "Dù quán cafe cho sân vườn, mặt tiền, rooftop và chuỗi cửa hàng. Tư vấn kích thước, màu sắc, in logo, giao hàng toàn quốc.",
    heroImage: "/images/du-quan-cafe-do.webp",
    benefits: ["Che nắng mưa cho khu bàn ngoài trời", "Dễ phối với bàn ghế và biển hiệu", "Có thể tư vấn theo ảnh mặt bằng"]
  },
  {
    slug: "du-san-vuon",
    name: "Dù sân vườn",
    shortName: "Dù sân vườn",
    intro: "Dòng dù phù hợp sân vườn gia đình, biệt thự, homestay, villa và resort cần che nắng đẹp, dễ bố trí và sử dụng lâu dài.",
    seoTitle: "Dù sân vườn đẹp, bền | Mẫu cho biệt thự, homestay, resort",
    seoDescription: "Dù sân vườn cho gia đình, biệt thự, villa, homestay và resort. Gợi ý kích thước, kiểu dáng, màu sắc và báo giá theo không gian thực tế.",
    heroImage: "/images/du-san-vuon-cao-cap.webp",
    benefits: ["Tăng thẩm mỹ khuôn viên", "Che nắng cho khu thư giãn ngoài trời", "Dễ phối với nhiều phong cách sân vườn"]
  },
  {
    slug: "du-che-nang",
    name: "Dù che nắng",
    shortName: "Dù che nắng",
    intro: "Nhóm sản phẩm che nắng mưa cho quán ăn, nhà hàng, sân trường, khuôn viên và nhiều điểm cần che phủ linh hoạt.",
    seoTitle: "Dù che nắng ngoài trời | Mẫu cho quán ăn, nhà hàng, công trình",
    seoDescription: "Dù che nắng ngoài trời cho quán ăn, nhà hàng, sân vườn, trường học và công trình. Tư vấn mẫu, kích thước, số lượng và giao hàng toàn quốc.",
    heroImage: "/images/du-che-nang-mat-pho.webp",
    benefits: ["Ứng dụng đa dạng", "Dễ chọn theo diện tích cần che", "Phù hợp cả khách lẻ và công trình"]
  },
  {
    slug: "du-lech-tam",
    name: "Dù lệch tâm",
    shortName: "Dù lệch tâm",
    intro: "Dòng dù có trụ đặt lệch một bên, giúp khu vực bên dưới thoáng hơn, không vướng lối đi và phù hợp quán cafe, sân vườn, hồ bơi.",
    seoTitle: "Dù lệch tâm ngoài trời | Mẫu đẹp cho cafe, sân vườn, resort",
    seoDescription: "Dù lệch tâm ngoài trời cho quán cafe, sân vườn, hồ bơi, resort. Tư vấn mẫu vuông, tròn, kích thước, vị trí đặt và báo giá theo nhu cầu.",
    heroImage: "/images/du-lech-tam-quan-cafe.webp",
    benefits: ["Không vướng trụ giữa bàn", "Tạo không gian ngồi thoáng", "Phù hợp mô hình kinh doanh ngoài trời"]
  },
  {
    slug: "du-tron-tam-giua",
    name: "Dù tròn tâm giữa",
    shortName: "Dù tâm giữa",
    intro: "Nhóm dù có trụ ở giữa, dễ bố trí cho quán cafe nhỏ, quán ăn, sân vườn và khu vực cần giải pháp che nắng gọn, ổn định.",
    seoTitle: "Dù tròn tâm giữa | Dễ bố trí cho quán cafe và quán ăn",
    seoDescription: "Dòng dù tròn tâm giữa gọn gàng, dễ bố trí cho quán cafe, quán ăn và khu vực ngoài trời có diện tích vừa và nhỏ.",
    heroImage: "/images/du-san-vuon-beige.webp",
    benefits: ["Trụ giữa ổn định", "Dễ bố trí theo từng cụm bàn", "Chi phí hợp lý"]
  },
  {
    slug: "du-in-logo",
    name: "Dù in logo",
    shortName: "Dù in logo",
    intro: "Nhóm sản phẩm phù hợp thương hiệu cần che nắng và tăng nhận diện tại điểm bán, quán cafe, sự kiện hoặc chuỗi cửa hàng ngoài trời.",
    seoTitle: "Dù in logo ngoài trời | Dù quảng cáo cho quán cafe, sự kiện",
    seoDescription: "Dù in logo, dù quảng cáo ngoài trời cho quán cafe, nhà hàng, sự kiện và chuỗi điểm bán. Tư vấn màu sắc, vị trí in, kích thước và báo giá.",
    heroImage: "/images/du-su-kien-xanh-duong.webp",
    benefits: ["Tăng nhận diện thương hiệu", "Phù hợp điểm bán và sự kiện", "Hỗ trợ tư vấn theo file logo"]
  },
  {
    slug: "nha-bat-di-dong",
    name: "Nhà bạt di động",
    shortName: "Nhà bạt",
    intro: "Nhà bạt di động phù hợp che nắng mưa cho sự kiện, điểm bán, hội chợ và khu vực ngoài trời cần dựng nhanh, gấp gọn.",
    seoTitle: "Nhà bạt di động | Mẫu 3mx3m cho sự kiện, điểm bán",
    seoDescription: "Nhà bạt di động 3mx3m cho sự kiện, điểm bán, sân vườn và khu vực ngoài trời. Khung chắc, dựng nhanh, dễ gấp gọn.",
    heroImage: "/images/nha-bat-di-dong-3mx3m.webp",
    benefits: ["Dựng nhanh, gấp gọn", "Phù hợp sự kiện và điểm bán", "Dễ vận chuyển khi cần di chuyển"]
  }
];

export const products: Product[] = [
  {
    slug: "du-chinh-tam-2m4-quang-cao",
    categorySlug: "du-in-logo",
    name: "Dù chính tâm 2m4 quảng cáo",
    summary: "Dù chính tâm 2m4 quảng cáo có trụ giữa, kích thước gọn, phù hợp quán nước, điểm bán và gian hàng cần che nắng kết hợp in logo thương hiệu.",
    seoTitle: "Dù chính tâm 2m4 quảng cáo | Gọn đẹp, in logo điểm bán",
    seoDescription: "Dù chính tâm 2m4 quảng cáo phù hợp quán nước, điểm bán, gian hàng ngoài trời. Trụ giữa chắc, dễ bố trí, nhận in logo theo yêu cầu.",
    image: "/images/du-chinh-tam-2m4-quang-cao.webp",
    specs: [
      { label: "Kích thước", value: "2m4" },
      { label: "Kiểu dù", value: "Chính tâm, trụ giữa" },
      { label: "Nhóm sản phẩm", value: "Dù quảng cáo, dù in logo" },
      { label: "Ứng dụng", value: "Quán nước, điểm bán, gian hàng" }
    ],
    highlights: ["Kích thước gọn, dễ đặt trước cửa hàng", "Có thể in logo, tên thương hiệu hoặc số điện thoại", "Chi phí hợp lý cho điểm bán nhỏ"],
    applications: ["Quán nước vỉa hè", "Điểm bán lưu động", "Gian hàng quảng cáo", "Cửa hàng mặt tiền"],
    faq: [
      { question: "Dù chính tâm 2m4 quảng cáo phù hợp không gian nào?", answer: "Mẫu này phù hợp quán nước, điểm bán nhỏ, gian hàng và khu vực mặt tiền cần che nắng gọn." },
      { question: "Dù chính tâm 2m4 quảng cáo có in logo được không?", answer: "Có. Mẫu này thường dùng để in logo, tên thương hiệu, số điện thoại hoặc thông điệp quảng cáo." }
    ]
  },
  {
    slug: "du-chinh-tam-3m-du-co",
    categorySlug: "du-tron-tam-giua",
    name: "Dù chính tâm 3m (dù cỏ)",
    summary: "Dù chính tâm 3m (dù cỏ) có trụ giữa, tán tròn, viền rũ đặc trưng, phù hợp che nắng cho quán nước, quán cafe sân vườn và khu vực ngoài trời.",
    seoTitle: "Dù chính tâm 3m (dù cỏ) | Che nắng quán nước, sân vườn",
    seoDescription: "Dù chính tâm 3m (dù cỏ) trụ giữa, tán tròn, dễ sử dụng. Phù hợp quán nước, cafe sân vườn, sân nhà và khu vực ngoài trời.",
    image: "/images/du-chinh-tam-3m-du-co.webp",
    specs: [
      { label: "Kích thước", value: "3m" },
      { label: "Kiểu dù", value: "Chính tâm, trụ giữa" },
      { label: "Dáng mái", value: "Tán tròn, viền rũ kiểu dù cỏ" },
      { label: "Ứng dụng", value: "Quán nước, cafe sân vườn, sân nhà" }
    ],
    highlights: ["Tán tròn 3m che nắng tốt", "Viền rũ dễ nhận diện kiểu dù cỏ", "Dễ bố trí theo từng cụm bàn"],
    applications: ["Quán nước", "Quán cafe sân vườn", "Sân vườn gia đình", "Khu vực bán hàng ngoài trời"],
    faq: [
      { question: "Dù chính tâm 3m (dù cỏ) có phải dù lệch tâm không?", answer: "Không. Đây là dù chính tâm, trụ nằm ở giữa tán dù." },
      { question: "Dù chính tâm 3m (dù cỏ) phù hợp với quán cafe không?", answer: "Có. Mẫu này phù hợp quán cafe sân vườn, quán nước và khu vực cần che nắng cơ bản." }
    ]
  },
  {
    slug: "du-chinh-tam-3-mai",
    categorySlug: "du-tron-tam-giua",
    name: "Dù chính tâm 3 mái 2m7x4m5",
    summary: "Dù chính tâm 3 mái 2m7x4m5 có trụ giữa và tán chữ nhật rộng, gồm 3 cụm mái phía trên, phù hợp che phủ khu bàn dài cho quán cafe, sân vườn và khu ngoài trời.",
    seoTitle: "Dù chính tâm 3 mái 2m7x4m5 | Che phủ rộng cho cafe",
    seoDescription: "Dù chính tâm 3 mái 2m7x4m5 có trụ giữa, tán chữ nhật rộng, che phủ tốt cho quán cafe, quán ăn, sân vườn và khu bàn ngoài trời.",
    image: "/images/du-chinh-tam-3-mai.webp",
    specs: [
      { label: "Kích thước", value: "2m7x4m5" },
      { label: "Kiểu dù", value: "Chính tâm, trụ giữa" },
      { label: "Dáng mái", value: "3 mái, tán chữ nhật rộng" },
      { label: "Ứng dụng", value: "Quán cafe, quán ăn, sân vườn" }
    ],
    highlights: ["Tán rộng che được khu bàn dài", "3 cụm mái tạo độ thoáng và điểm nhấn", "Phù hợp không gian cần che phủ lớn"],
    applications: ["Quán cafe sân vườn", "Khu bàn dài ngoài trời", "Quán ăn mặt tiền", "Sân vườn gia đình"],
    faq: [
      { question: "Dù chính tâm 3 mái 2m7x4m5 là dù tròn hay chữ nhật?", answer: "Đây là mẫu dù chính tâm tán chữ nhật rộng, không phải dù tròn." },
      { question: "Mẫu này phù hợp khi nào?", answer: "Phù hợp khi cần che phủ khu bàn dài, mặt tiền hoặc sân vườn có diện tích rộng hơn dù tròn thông thường." }
    ]
  },
  {
    slug: "du-chinh-tam-tron-3m-quay-tay",
    categorySlug: "du-tron-tam-giua",
    name: "Dù chính tâm tròn 3m quay tay",
    summary: "Dù chính tâm tròn 3m quay tay có trụ giữa, tán tròn và cơ chế quay tay giúp đóng mở nhẹ, phù hợp quán cafe, quán ăn và sân vườn.",
    seoTitle: "Dù chính tâm tròn 3m quay tay | Đóng mở nhẹ, dễ dùng",
    seoDescription: "Dù chính tâm tròn 3m quay tay trụ giữa, tán tròn, đóng mở nhẹ. Phù hợp quán cafe, quán ăn, sân vườn và khu bàn ngoài trời.",
    image: "/images/du-chinh-tam-tron-3m-quay-tay.webp",
    specs: [
      { label: "Kích thước", value: "3m" },
      { label: "Kiểu dù", value: "Chính tâm tròn, trụ giữa" },
      { label: "Cơ chế", value: "Quay tay" },
      { label: "Ứng dụng", value: "Cafe, quán ăn, sân vườn" }
    ],
    highlights: ["Đóng mở nhẹ bằng tay quay", "Tán tròn dễ bố trí theo cụm bàn", "Phù hợp sử dụng hằng ngày"],
    applications: ["Quán cafe ngoài trời", "Quán ăn sân vườn", "Sân hiên gia đình", "Khu vực tiếp khách ngoài trời"],
    faq: [
      { question: "Dù chính tâm tròn 3m quay tay có dễ mở không?", answer: "Có. Cơ chế quay tay giúp thao tác đóng mở nhẹ và dễ dùng hơn so với kéo tay thông thường." },
      { question: "Mẫu này có phải dù lệch tâm không?", answer: "Không. Đây là dù chính tâm, trụ nằm ở giữa tán tròn." }
    ]
  },
  {
    slug: "du-lech-tam-tron-3m-quay-tay",
    categorySlug: "du-lech-tam",
    name: "Dù lệch tâm tròn 3m quay tay",
    summary: "Dù lệch tâm tròn 3m quay tay có trụ đặt một bên, không vướng khu vực ngồi bên dưới, phù hợp quán cafe, sân vườn, hồ bơi và khu thư giãn ngoài trời.",
    seoTitle: "Dù lệch tâm tròn 3m quay tay | Không vướng lối đi",
    seoDescription: "Dù lệch tâm tròn 3m quay tay trụ lệch bên, không vướng bàn ghế, đóng mở nhẹ. Phù hợp cafe, sân vườn, hồ bơi và khu ngoài trời.",
    image: "/images/du-lech-tam-tron-3m-quay-tay.webp",
    specs: [
      { label: "Kích thước", value: "3m" },
      { label: "Kiểu dù", value: "Lệch tâm tròn" },
      { label: "Cơ chế", value: "Quay tay" },
      { label: "Ứng dụng", value: "Cafe, sân vườn, hồ bơi" }
    ],
    highlights: ["Trụ lệch một bên, không vướng lối đi", "Đóng mở nhẹ bằng cơ chế quay tay", "Tán tròn tạo cảm giác mềm mại, dễ phối không gian"],
    applications: ["Quán cafe sân vườn", "Khu hồ bơi", "Sân vườn gia đình", "Khu bàn ngoài trời cần không gian thoáng"],
    faq: [
      { question: "Dù lệch tâm tròn 3m quay tay khác gì dù chính tâm?", answer: "Dù lệch tâm có trụ nằm một bên nên không vướng khu vực ngồi bên dưới, còn dù chính tâm có trụ ở giữa." },
      { question: "Mẫu này có phù hợp quán cafe không?", answer: "Có. Mẫu này rất phù hợp quán cafe cần không gian ngồi thoáng và hình ảnh đẹp." }
    ]
  },
  {
    slug: "du-lech-tam-2m5x2m5-chinh-nghieng",
    categorySlug: "du-lech-tam",
    name: "Dù lệch tâm 2m5x2m5 chỉnh nghiêng",
    summary: "Dù lệch tâm 2m5x2m5 chỉnh nghiêng có trụ lệch bên và khớp chỉnh góc, giúp đổi hướng che theo nắng mưa, phù hợp quán nhỏ, mặt tiền và sân vườn.",
    seoTitle: "Dù lệch tâm 2m5x2m5 chỉnh nghiêng | Che nắng linh hoạt",
    seoDescription: "Dù lệch tâm 2m5x2m5 chỉnh nghiêng theo hướng nắng mưa, trụ lệch bên không vướng lối đi. Phù hợp quán cafe, mặt tiền, sân vườn.",
    image: "/images/du-lech-tam-2m5x2m5-chinh-nghieng.webp",
    specs: [
      { label: "Kích thước", value: "2m5x2m5" },
      { label: "Kiểu dù", value: "Lệch tâm" },
      { label: "Tính năng", value: "Chỉnh nghiêng theo hướng nắng mưa" },
      { label: "Ứng dụng", value: "Cafe, mặt tiền, sân vườn" }
    ],
    highlights: ["Chỉnh nghiêng linh hoạt theo hướng nắng", "Trụ lệch bên, không vướng lối đi", "Kích thước gọn, dễ đặt ở mặt tiền"],
    applications: ["Quán cafe nhỏ", "Quán ăn mặt tiền", "Khu bán hàng ngoài trời", "Sân vườn gia đình"],
    faq: [
      { question: "Dù lệch tâm 2m5x2m5 chỉnh nghiêng dùng để làm gì?", answer: "Mẫu này dùng để che nắng mưa linh hoạt, có thể chỉnh góc tán dù theo hướng nắng hoặc mưa tạt." },
      { question: "Mẫu chỉnh nghiêng có phải tay bẩy không?", answer: "Không. Mẫu chỉnh nghiêng tập trung vào khả năng đổi góc che, còn mẫu tay bẩy dùng cơ chế cần bẩy để đóng mở." }
    ]
  },
  {
    slug: "du-lech-tam-2m5x2m5-tay-bay",
    categorySlug: "du-lech-tam",
    name: "Dù lệch tâm 2m5x2m5 tay bẩy",
    summary: "Dù lệch tâm 2m5x2m5 tay bẩy có trụ lệch bên và cơ chế đóng mở bằng tay đòn bẩy, thao tác nhanh, phù hợp quán cafe, điểm bán và khu vực cần dùng thường xuyên.",
    seoTitle: "Dù lệch tâm 2m5x2m5 tay bẩy | Đóng mở nhanh, gọn",
    seoDescription: "Dù lệch tâm 2m5x2m5 tay bẩy trụ lệch bên, đóng mở nhanh bằng cần bẩy. Có thể in logo theo yêu cầu cho quán cafe, điểm bán.",
    image: "/images/du-lech-tam-2m5x2m5-tay-bay.webp",
    specs: [
      { label: "Kích thước", value: "2m5x2m5" },
      { label: "Kiểu dù", value: "Lệch tâm" },
      { label: "Cơ chế", value: "Tay bẩy, tay đòn bẩy" },
      { label: "Ứng dụng", value: "Cafe, điểm bán, sân vườn" }
    ],
    highlights: ["Đóng mở nhanh bằng tay bẩy", "Trụ lệch bên giúp không gian bên dưới thoáng", "Có thể in logo, chữ, hotline theo yêu cầu"],
    applications: ["Quán cafe", "Quán trà sữa", "Điểm bán ngoài trời", "Khu bàn trước cửa hàng"],
    faq: [
      { question: "Dù lệch tâm 2m5x2m5 tay bẩy có in logo được không?", answer: "Có. Mẫu này có thể in logo, tên quán, hotline hoặc thông điệp theo yêu cầu." },
      { question: "Tay bẩy có lợi ích gì?", answer: "Cơ chế tay bẩy giúp đóng mở nhanh, thao tác nhẹ và phù hợp nơi cần sử dụng hằng ngày." }
    ]
  },
  {
    slug: "du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap",
    categorySlug: "du-lech-tam",
    name: "Dù lệch tâm 3mx3m khung hợp kim nhôm cao cấp",
    summary: "Dù lệch tâm 3mx3m khung hợp kim nhôm cao cấp có vùng che rộng, khung nhẹ, bền và thẩm mỹ, phù hợp quán cafe đẹp, sân vườn, villa và resort.",
    seoTitle: "Dù lệch tâm 3mx3m khung hợp kim nhôm | Đẹp, bền",
    seoDescription: "Dù lệch tâm 3mx3m khung hợp kim nhôm cao cấp, vùng che rộng, không vướng lối đi. Phù hợp cafe, sân vườn, villa, resort.",
    image: "/images/du-lech-tam-3mx3m-khung-hop-kim-nhom.webp",
    specs: [
      { label: "Kích thước", value: "3mx3m" },
      { label: "Kiểu dù", value: "Lệch tâm" },
      { label: "Khung", value: "Hợp kim nhôm cao cấp" },
      { label: "Ứng dụng", value: "Cafe, sân vườn, villa, resort" }
    ],
    highlights: ["Khung hợp kim nhôm nhẹ, bền và đẹp", "Vùng che rộng 3mx3m cho khu bàn lớn", "Phù hợp không gian cần tính thẩm mỹ"],
    applications: ["Quán cafe sân vườn", "Villa", "Resort", "Khu hồ bơi", "Sân vườn gia đình"],
    faq: [
      { question: "Dù lệch tâm 3mx3m khung hợp kim nhôm phù hợp không gian nào?", answer: "Mẫu này phù hợp quán cafe đẹp, sân vườn, villa, resort và khu hồ bơi cần vùng che rộng." },
      { question: "Khung hợp kim nhôm có ưu điểm gì?", answer: "Khung hợp kim nhôm nhẹ hơn, thẩm mỹ hơn và phù hợp các không gian cần hình ảnh đẹp, sang gọn." }
    ]
  },
  {
    slug: "du-lech-tam-2m5x2m5-khung-sat-son-tinh-dien",
    categorySlug: "du-lech-tam",
    name: "Dù lệch tâm 2m5x2m5 khung sắt sơn tĩnh điện",
    summary: "Dù lệch tâm 2m5x2m5 khung sắt sơn tĩnh điện có kết cấu chắc chắn, giá tốt, phù hợp quán cafe, sân vườn và điểm bán cần sử dụng lâu dài.",
    seoTitle: "Dù lệch tâm 2m5x2m5 khung sắt | Chắc chắn, giá tốt",
    seoDescription: "Dù lệch tâm 2m5x2m5 khung sắt sơn tĩnh điện chắc chắn, giá hợp lý, không vướng lối đi. Phù hợp cafe, sân vườn, điểm bán.",
    image: "/images/du-lech-tam-2m5x2m5-khung-sat-son-tinh-dien.webp",
    specs: [
      { label: "Kích thước", value: "2m5x2m5" },
      { label: "Kiểu dù", value: "Lệch tâm" },
      { label: "Khung", value: "Sắt sơn tĩnh điện" },
      { label: "Ứng dụng", value: "Cafe, sân vườn, điểm bán" }
    ],
    highlights: ["Khung sắt sơn tĩnh điện chắc chắn", "Giá hợp lý, dễ đầu tư số lượng", "Trụ lệch bên giúp không gian sử dụng thoáng hơn"],
    applications: ["Quán cafe ngoài trời", "Sân vườn gia đình", "Điểm bán cần che nắng", "Khu bàn trước cửa hàng"],
    faq: [
      { question: "Dù lệch tâm 2m5x2m5 khung sắt sơn tĩnh điện có bền không?", answer: "Có. Khung sắt sơn tĩnh điện chắc chắn, phù hợp nhu cầu sử dụng ngoài trời lâu dài." },
      { question: "Mẫu này có tiết kiệm chi phí hơn khung nhôm không?", answer: "Có. Đây là lựa chọn phù hợp khi cần dù lệch tâm chắc chắn, giá tốt và dễ triển khai." }
    ]
  },
  {
    slug: "du-chinh-tam-chu-nhat-2m5x3m",
    categorySlug: "du-tron-tam-giua",
    name: "Dù chính tâm chữ nhật 2m5x3m",
    summary: "Dù chính tâm chữ nhật 2m5x3m có trụ giữa và tán chữ nhật, che phủ rộng theo chiều dài, phù hợp quán cafe, quán ăn, mặt tiền và khu bàn ngoài trời.",
    seoTitle: "Dù chính tâm chữ nhật 2m5x3m | Che phủ rộng cho quán",
    seoDescription: "Dù chính tâm chữ nhật 2m5x3m trụ giữa, tán chữ nhật che phủ rộng. Phù hợp quán cafe, quán ăn, mặt tiền, sân vườn.",
    image: "/images/du-chinh-tam-chu-nhat-2m5x3m.webp",
    specs: [
      { label: "Kích thước", value: "2m5x3m" },
      { label: "Kiểu dù", value: "Chính tâm chữ nhật, trụ giữa" },
      { label: "Dáng mái", value: "Chữ nhật" },
      { label: "Ứng dụng", value: "Quán cafe, quán ăn, mặt tiền" }
    ],
    highlights: ["Che phủ rộng hơn dù tròn theo chiều dài", "Phù hợp kê sát tường hoặc mặt tiền", "Trụ giữa chắc chắn, dễ sử dụng"],
    applications: ["Quán cafe mặt tiền", "Quán ăn ngoài trời", "Khu bàn chữ nhật", "Sân vườn gia đình"],
    faq: [
      { question: "Dù chính tâm chữ nhật 2m5x3m có phải dù vuông không?", answer: "Không. Đây là dù chính tâm dạng chữ nhật, kích thước 2m5x3m." },
      { question: "Mẫu này phù hợp với bàn kiểu nào?", answer: "Mẫu này phù hợp khu bàn dài, bàn chữ nhật hoặc khu vực cần che phủ theo chiều ngang rộng hơn." }
    ]
  },
  {
    slug: "nha-bat-di-dong-3mx3m",
    categorySlug: "nha-bat-di-dong",
    name: "Nhà bạt di động 3mx3m",
    summary: "Nhà bạt di động 3mx3m có khung xếp gọn, dựng nhanh, che nắng mưa linh hoạt cho sự kiện, bán hàng, hội chợ và khu vực ngoài trời.",
    seoTitle: "Nhà bạt di động 3mx3m | Dựng nhanh, gấp gọn",
    seoDescription: "Nhà bạt di động 3mx3m khung xếp gọn, dựng nhanh, dễ vận chuyển. Phù hợp sự kiện, bán hàng, hội chợ và khu ngoài trời.",
    image: "/images/nha-bat-di-dong-3mx3m.webp",
    specs: [
      { label: "Kích thước", value: "3mx3m" },
      { label: "Loại sản phẩm", value: "Nhà bạt di động" },
      { label: "Cơ chế", value: "Khung xếp, gấp gọn" },
      { label: "Ứng dụng", value: "Sự kiện, bán hàng, hội chợ" }
    ],
    highlights: ["Dựng nhanh, gấp gọn sau khi dùng", "Che nắng mưa cho khu vực 3mx3m", "Dễ vận chuyển và tái sử dụng"],
    applications: ["Sự kiện ngoài trời", "Gian hàng bán hàng", "Hội chợ", "Điểm bán lưu động"],
    faq: [
      { question: "Nhà bạt di động 3mx3m có phải dù không?", answer: "Không. Đây là nhà bạt di động khung xếp 4 chân, không phải dù một trụ." },
      { question: "Nhà bạt di động 3mx3m phù hợp sử dụng ở đâu?", answer: "Phù hợp sự kiện, gian hàng, điểm bán, hội chợ và các khu vực ngoài trời cần dựng nhanh." }
    ]
  },
  {
    slug: "nha-bat-di-dong-3mx3m-khung-day",
    categorySlug: "nha-bat-di-dong",
    name: "Nhà bạt di động 3mx3m khung dày",
    summary: "Nhà bạt di động 3mx3m khung dày chắc chắn hơn, phù hợp sự kiện, điểm bán và khu vực ngoài trời cần sử dụng thường xuyên.",
    seoTitle: "Nhà bạt di động 3mx3m khung dày | Chắc chắn, bền",
    seoDescription: "Nhà bạt di động 3mx3m khung dày, dựng nhanh, gấp gọn, chắc chắn hơn bản thường. Phù hợp sự kiện, điểm bán, bán hàng ngoài trời.",
    image: "/images/nha-bat-di-dong-3mx3m-khung-day.webp",
    specs: [
      { label: "Kích thước", value: "3mx3m" },
      { label: "Loại sản phẩm", value: "Nhà bạt di động" },
      { label: "Khung", value: "Khung dày" },
      { label: "Ứng dụng", value: "Sự kiện, điểm bán, dùng thường xuyên" }
    ],
    highlights: ["Khung dày chắc chắn hơn", "Dựng nhanh, gấp gọn tiện lợi", "Phù hợp nhu cầu dùng thường xuyên"],
    applications: ["Sự kiện ngoài trời", "Gian hàng bán hàng", "Điểm bán lưu động", "Khu che tạm ngoài trời"],
    faq: [
      { question: "Nhà bạt di động 3mx3m khung dày khác bản thường thế nào?", answer: "Bản khung dày chắc chắn hơn, phù hợp nhu cầu sử dụng thường xuyên hoặc cần độ ổn định cao hơn." },
      { question: "Nhà bạt khung dày có dễ gấp gọn không?", answer: "Có. Đây vẫn là nhà bạt di động khung xếp, có thể dựng nhanh và gấp gọn sau khi sử dụng." }
    ]
  },
  {
    slug: "du-lech-tam-3mx3m-tay-don-bay",
    categorySlug: "du-lech-tam",
    name: "Dù lệch tâm 3mx3m tay đòn bẩy",
    summary: "Dù lệch tâm 3mx3m tay đòn bẩy có trụ lệch bên, tán vuông lớn và cơ chế tay bẩy trợ lực, phù hợp quán cafe, sân vườn, hồ bơi và khu vực cần vùng che rộng.",
    seoTitle: "Dù lệch tâm 3mx3m tay đòn bẩy | Che rộng, dễ đóng mở",
    seoDescription: "Dù lệch tâm 3mx3m tay đòn bẩy tán vuông lớn, trụ lệch bên, đóng mở nhẹ. Phù hợp quán cafe, sân vườn, hồ bơi, resort.",
    image: "/images/du-lech-tam-3mx3m-tay-don-bay.webp",
    specs: [
      { label: "Kích thước", value: "3mx3m" },
      { label: "Kiểu dù", value: "Lệch tâm vuông" },
      { label: "Cơ chế", value: "Tay đòn bẩy, tay bẩy trợ lực" },
      { label: "Ứng dụng", value: "Cafe, sân vườn, hồ bơi, resort" }
    ],
    highlights: ["Tán vuông 3mx3m che phủ rộng", "Cơ chế tay đòn bẩy giúp đóng mở nhẹ", "Trụ lệch bên, không vướng khu vực ngồi"],
    applications: ["Quán cafe sân vườn", "Khu hồ bơi", "Sân vườn biệt thự", "Resort và homestay"],
    faq: [
      { question: "Dù lệch tâm 3mx3m tay đòn bẩy khác bản 2m5x2m5 thế nào?", answer: "Bản 3mx3m có vùng che rộng hơn, phù hợp khu bàn lớn, sân vườn rộng hoặc không gian cần hình ảnh nổi bật hơn." },
      { question: "Mẫu 3mx3m tay đòn bẩy có dễ đóng mở không?", answer: "Có. Cơ chế tay đòn bẩy trợ lực giúp thao tác nhẹ hơn và thuận tiện khi sử dụng hằng ngày." }
    ]
  },
  {
    slug: "du-lech-tam-3mx3m-den-led",
    categorySlug: "du-lech-tam",
    name: "Dù lệch tâm 3mx3m khung hợp kim nhôm có đèn LED",
    summary: "Dù lệch tâm 3mx3m khung hợp kim nhôm có đèn LED vừa che nắng ban ngày vừa tạo ánh sáng trang trí ban đêm, phù hợp cafe sân vườn, villa, homestay và khu thư giãn.",
    seoTitle: "Dù lệch tâm 3mx3m có đèn LED | Đẹp cho cafe sân vườn",
    seoDescription: "Dù lệch tâm 3mx3m khung hợp kim nhôm có đèn LED, che nắng ban ngày, tạo không gian đẹp ban đêm. Phù hợp cafe, villa, homestay.",
    image: "/images/du-lech-tam-3mx3m-den-led.webp",
    specs: [
      { label: "Kích thước", value: "3mx3m" },
      { label: "Kiểu dù", value: "Lệch tâm vuông" },
      { label: "Tiện ích", value: "Đèn LED trang trí" },
      { label: "Ứng dụng", value: "Cafe sân vườn, villa, homestay" }
    ],
    highlights: ["Có đèn LED tạo không gian đẹp buổi tối", "Khung hợp kim nhôm thẩm mỹ", "Vùng che rộng, không vướng lối đi"],
    applications: ["Quán cafe sân vườn", "Homestay", "Villa", "Khu thư giãn ngoài trời", "Sân vườn gia đình"],
    faq: [
      { question: "Dù lệch tâm 3mx3m có đèn LED dùng để làm gì?", answer: "Mẫu này vừa che nắng ban ngày vừa tạo ánh sáng trang trí ban đêm, phù hợp không gian cafe, sân vườn và homestay." },
      { question: "Mẫu có đèn LED có nên tách riêng với bản thường không?", answer: "Nên tách riêng vì đây là biến thể có thêm công năng chiếu sáng và trang trí, phù hợp nhóm khách cần không gian đẹp buổi tối." }
    ]
  },
  {
    slug: "in-logo-du-tron-3m-theo-yeu-cau",
    categorySlug: "du-in-logo",
    name: "In logo dù tròn 3m theo yêu cầu",
    summary: "Dịch vụ in logo cho dù tròn 3m, áp dụng cho dù chính tâm tròn 3m quay tay và dù lệch tâm tròn 3m quay tay, giúp thương hiệu nổi bật tại điểm bán.",
    seoTitle: "In logo dù tròn 3m theo yêu cầu | Thiết kế demo nhanh",
    seoDescription: "In logo dù tròn 3m theo yêu cầu cho quán cafe, điểm bán, sự kiện. Hỗ trợ lên demo màu, vị trí logo, hotline trước khi sản xuất.",
    image: "/images/in-logo-du-tron-3m-theo-yeu-cau.webp",
    specs: [
      { label: "Dòng áp dụng", value: "Dù chính tâm tròn 3m, dù lệch tâm tròn 3m" },
      { label: "Kiểu tán", value: "Tròn, 8 múi" },
      { label: "Nội dung in", value: "Logo, tên thương hiệu, hotline" },
      { label: "Ứng dụng", value: "Quán cafe, điểm bán, sự kiện" }
    ],
    highlights: ["Thiết kế demo trước khi in", "Có thể in logo theo từng múi dù", "Tăng nhận diện thương hiệu tại điểm bán"],
    applications: ["Quán cafe", "Chuỗi điểm bán", "Sự kiện ngoài trời", "Gian hàng quảng cáo"],
    faq: [
      { question: "In logo dù tròn 3m cần chuẩn bị gì?", answer: "Khách chỉ cần gửi logo hoặc nội dung muốn in, đội ngũ sẽ tư vấn vị trí in và màu nền phù hợp." },
      { question: "Có thể in logo cho cả dù chính tâm và lệch tâm tròn 3m không?", answer: "Có. Dịch vụ này áp dụng cho cả dù chính tâm tròn 3m quay tay và dù lệch tâm tròn 3m quay tay." }
    ]
  },
  {
    slug: "in-logo-du-lech-tam-2m5x2m5-tay-bay",
    categorySlug: "du-in-logo",
    name: "In logo dù lệch tâm 2m5x2m5 tay bẩy",
    summary: "Dịch vụ in logo cho dù lệch tâm 2m5x2m5 tay bẩy, phù hợp quán cafe, trà sữa, điểm bán và thương hiệu cần đồng bộ màu sắc, logo, hotline.",
    seoTitle: "In logo dù lệch tâm 2m5x2m5 tay bẩy | Cho quán cafe",
    seoDescription: "In logo dù lệch tâm 2m5x2m5 tay bẩy theo yêu cầu. Hỗ trợ thiết kế màu nền, logo, hotline cho quán cafe, điểm bán, sự kiện.",
    image: "/images/in-logo-du-lech-tam-2m5x2m5-tay-bay.webp",
    specs: [
      { label: "Dòng áp dụng", value: "Dù lệch tâm 2m5x2m5 tay bẩy" },
      { label: "Kiểu tán", value: "Vuông 2m5x2m5" },
      { label: "Nội dung in", value: "Logo, slogan, hotline, tên quán" },
      { label: "Ứng dụng", value: "Quán cafe, trà sữa, điểm bán" }
    ],
    highlights: ["Có thể in logo trên tán và viền dù", "Màu vải linh hoạt theo nhận diện thương hiệu", "Phù hợp quán cần hình ảnh chuyên nghiệp trước mặt tiền"],
    applications: ["Quán cafe", "Quán trà sữa", "Điểm bán ngoài trời", "Chuỗi cửa hàng", "Gian hàng sự kiện"],
    faq: [
      { question: "In logo dù lệch tâm 2m5x2m5 tay bẩy có thể in ở đâu?", answer: "Có thể in trên phần tán lớn, viền dù, tên quán, hotline hoặc slogan tùy thiết kế thực tế." },
      { question: "Có được xem mẫu thiết kế trước khi in không?", answer: "Có. Khách có thể gửi logo và nội dung, đội ngũ sẽ tư vấn bố cục trước khi sản xuất." }
    ]
  }
];
