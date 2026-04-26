import type { Project } from "@/lib/site-data";

// Dữ liệu công trình/case study.
// Không đổi slug nếu trang đã lên Google.
// Thay ảnh bằng cách đặt file vào public/images/ rồi sửa image.

export const projects: Project[] = [
  {
    slug: "lap-du-quan-cafe-tp-hcm",
    title: "Lắp dù cho quán cafe sân vườn tại TP.HCM",
    locationSlug: "tp-hcm",
    locationName: "TP.HCM",
    type: "Quán cafe",
    summary: "Hình ảnh công trình thực tế cho quán cafe sân vườn với yêu cầu che nắng đẹp, đồng bộ màu sắc và phù hợp vận hành ngoài trời.",
    description: "Công trình lắp dù lệch tâm và dù chính tâm cho quán cafe sân vườn tại TP.HCM, ưu tiên che nắng tốt, bố trí thoáng và đồng bộ màu sắc với không gian quán.",
    content: "Công trình sử dụng nhóm dù ngoài trời phù hợp quán cafe sân vườn, tập trung vào khả năng che nắng cho khu bàn khách và giữ lối đi thông thoáng. Với các khu vực cần không vướng trụ giữa bàn, dù lệch tâm giúp mở rộng không gian ngồi và tạo cảm giác thoải mái hơn. Những vị trí cần bố trí theo từng cụm bàn có thể dùng dù chính tâm tròn 3m quay tay để đóng mở nhẹ, dễ vận hành hằng ngày.",
    image: "/images/du-quan-cafe-do.webp",
    challenge: "Khách cần khu ngồi ngoài trời thoáng, đẹp và che tốt vào giờ nắng mạnh nhưng vẫn giữ được thẩm mỹ tổng thể.",
    solution: ["Đề xuất nhóm dù phù hợp layout bàn ghế", "Ưu tiên mẫu có vùng che rộng và dễ đồng bộ hình ảnh", "Hỗ trợ tư vấn từ xa bằng ảnh và video hiện trạng"],
    outcome: "Không gian ngoài trời đồng bộ hơn, tăng trải nghiệm khách và hỗ trợ vận hành quán vào nhiều khung giờ hơn.",
    relatedProductSlugs: ["du-lech-tam-3mx3m-tay-don-bay", "du-chinh-tam-tron-3m-quay-tay"]
  },
  {
    slug: "thi-cong-du-nha-hang-da-nang",
    title: "Thi công dù ngoài trời cho nhà hàng tại Đà Nẵng",
    locationSlug: "da-nang",
    locationName: "Đà Nẵng",
    type: "Nhà hàng",
    summary: "Giải pháp che phủ cho khu phục vụ ngoài trời của nhà hàng, ưu tiên đẹp mặt tiền, dễ vệ sinh và phù hợp không gian đón khách.",
    description: "Công trình dùng dù chính tâm chữ nhật 2m5x3m cho khu bàn ngoài trời của nhà hàng tại Đà Nẵng, giúp che phủ theo chiều dài và tối ưu mặt tiền phục vụ khách.",
    content: "Dù chính tâm chữ nhật 2m5x3m phù hợp khu bàn ăn dài hoặc khu vực kê sát mặt tiền nhà hàng. Dáng chữ nhật giúp che phủ rộng theo chiều ngang, hạn chế khoảng hở nắng giữa các bàn và vẫn giữ kết cấu trụ giữa chắc chắn. Đây là lựa chọn dễ dùng cho nhà hàng cần tăng chỗ ngồi ngoài trời mà không làm thay đổi layout phục vụ quá nhiều.",
    image: "/images/du-che-nang-mat-pho.webp",
    challenge: "Khu bàn ngoài trời của nhà hàng cần che nắng mưa nhưng vẫn phải giữ cảm giác thoáng và đẹp mắt cho khách.",
    solution: ["Tư vấn mẫu che phủ phù hợp khu bàn ăn", "Làm rõ quy trình vận chuyển và lắp đặt từ xa", "Tối ưu số lượng bộ theo mặt bằng phục vụ"],
    outcome: "Nhà hàng có thêm khu phục vụ ngoài trời ổn định, hỗ trợ tăng chỗ ngồi sử dụng trong nhiều thời điểm.",
    relatedProductSlugs: ["du-chinh-tam-chu-nhat-2m5x3m"]
  },
  {
    slug: "lap-du-resort-nha-trang",
    title: "Lắp dù che nắng cho khu nghỉ dưỡng tại Nha Trang",
    locationSlug: "nha-trang",
    locationName: "Nha Trang",
    type: "Resort",
    summary: "Triển khai dòng dù sân vườn cho không gian nghỉ dưỡng và hồ bơi, ưu tiên sự hài hòa cảnh quan và trải nghiệm thư giãn.",
    description: "Công trình lắp dù lệch tâm 3mx3m cho khu nghỉ dưỡng tại Nha Trang, ưu tiên vùng che rộng, không vướng lối đi và hình ảnh hài hòa với hồ bơi.",
    content: "Dù lệch tâm 3mx3m khung hợp kim nhôm cao cấp phù hợp khu nghỉ dưỡng, hồ bơi và không gian thư giãn ngoài trời. Trụ đặt lệch một bên giúp khu vực bên dưới thoáng, dễ đặt ghế nghỉ hoặc bàn nhỏ mà không bị vướng. Khung hợp kim nhôm tạo cảm giác gọn, đẹp và phù hợp các công trình cần thẩm mỹ tốt.",
    image: "/images/du-resort-ho-boi.webp",
    challenge: "Khách cần giải pháp đẹp, bền và phù hợp tổng thể cảnh quan khu nghỉ dưỡng chứ không chỉ là che nắng đơn thuần.",
    solution: ["Ưu tiên mẫu sân vườn cao cấp", "Tư vấn theo concept không gian", "Định hướng đồng bộ nhiều vị trí sử dụng"],
    outcome: "Khu nghỉ dưỡng tăng độ hoàn thiện cho các khu thư giãn ngoài trời và đồng bộ hình ảnh thương hiệu tốt hơn.",
    relatedProductSlugs: ["du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap", "du-lech-tam-3mx3m-tay-don-bay"]
  },
  {
    slug: "lap-du-san-vuon-ha-noi",
    title: "Lắp dù sân vườn cho biệt thự tại Hà Nội",
    locationSlug: "ha-noi",
    locationName: "Hà Nội",
    type: "Biệt thự sân vườn",
    summary: "Triển khai mẫu dù sân vườn cao cấp cho khu vực thư giãn ngoài trời tại biệt thự, ưu tiên độ bền, màu sắc hài hòa và tính thẩm mỹ.",
    description: "Công trình bố trí dù lệch tâm 3mx3m khung hợp kim nhôm cho sân vườn biệt thự tại Hà Nội, tập trung vào thẩm mỹ và khả năng sử dụng lâu dài.",
    content: "Dù lệch tâm 3mx3m khung hợp kim nhôm cao cấp giúp tạo vùng che rộng cho khu thư giãn sân vườn mà không đặt trụ giữa khu ngồi. Mẫu này hợp với biệt thự, villa và sân vườn gia đình vì vừa che nắng hiệu quả vừa giữ không gian thoáng. Tông màu và vị trí đặt dù có thể chọn theo cảnh quan để tổng thể nhìn hài hòa hơn.",
    image: "/images/du-lech-tam-3mx3m-khung-hop-kim-nhom.webp",
    challenge: "Gia chủ cần khu thư giãn ngoài trời có che nắng nhưng vẫn hài hòa với tổng thể sân vườn và nội thất ngoại thất.",
    solution: ["Khảo sát qua ảnh và video khuôn viên", "Gợi ý mẫu theo phong cách sân vườn hiện có", "Đề xuất vị trí đặt dù tối ưu công năng sử dụng"],
    outcome: "Khu sân vườn có thêm điểm nghỉ đẹp mắt, dễ sử dụng vào nhiều thời điểm trong ngày.",
    relatedProductSlugs: ["du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap"]
  },
  {
    slug: "du-che-nang-truong-hoc-hai-phong",
    title: "Lắp dù che nắng cho khuôn viên trường học tại Hải Phòng",
    locationSlug: "hai-phong",
    locationName: "Hải Phòng",
    type: "Trường học",
    summary: "Giải pháp che nắng cho khu vực chờ và sinh hoạt ngoài trời của trường học, ưu tiên độ bền và triển khai theo cụm.",
    description: "Công trình dùng dù chính tâm 3 mái 2m7x4m5 cho khuôn viên trường học tại Hải Phòng, tạo vùng che rộng cho khu sinh hoạt ngoài trời.",
    content: "Dù chính tâm 3 mái 2m7x4m5 có tán chữ nhật rộng, phù hợp khu vực cần che phủ nhiều người như sân trường, khu chờ hoặc lối sinh hoạt ngoài trời. Kết cấu trụ giữa giúp dễ bố trí theo từng cụm, còn phần 3 mái tạo độ thoáng và điểm nhấn cho không gian. Mẫu này giúp tăng vùng che nắng mà vẫn dễ quan sát và vận hành.",
    image: "/images/du-ho-boi-xanh-re.webp",
    challenge: "Nhà trường cần tăng vùng che cho khuôn viên ngoài trời nhưng phải dễ triển khai và vận hành thực tế.",
    solution: ["Lên phương án theo từng cụm sử dụng", "Tư vấn mẫu phù hợp khu vực đông người", "Đảm bảo dễ bảo trì và dễ hướng dẫn vận hành"],
    outcome: "Tăng vùng che cho khuôn viên, phục vụ tốt hơn các khung giờ cao điểm và sinh hoạt ngoài trời.",
    relatedProductSlugs: ["du-chinh-tam-3-mai"]
  },
  {
    slug: "du-logo-activation-binh-duong",
    title: "Triển khai dù in logo cho activation tại Bình Dương",
    locationSlug: "binh-duong",
    locationName: "Bình Dương",
    type: "Activation thương hiệu",
    summary: "Triển khai nhóm dù in logo cho điểm hiện diện thương hiệu ngoài trời, hỗ trợ nhận diện trực quan tại sự kiện.",
    description: "Công trình triển khai dù in logo cho activation tại Bình Dương, tập trung vào nhận diện thương hiệu, màu sắc nổi bật và khả năng dựng nhanh tại điểm bán.",
    content: "Dù in logo phù hợp các chương trình activation, điểm bán lưu động và sự kiện ngoài trời vì vừa che nắng vừa giúp thương hiệu dễ được nhìn thấy từ xa. Logo, tên thương hiệu, hotline hoặc thông điệp có thể bố trí trên tán dù theo màu nhận diện. Với nhu cầu sự kiện, ưu tiên mẫu dễ vận chuyển, dễ triển khai và đồng bộ nhiều điểm cùng lúc.",
    image: "/images/du-su-kien-xanh-duong.webp",
    challenge: "Khách cần điểm hiện diện ngoài trời nổi bật, nhận diện rõ, dễ đồng bộ bộ nhận diện và triển khai nhanh.",
    solution: ["Tư vấn bố cục hiển thị logo", "Gợi ý màu sắc dễ nhận diện", "Đề xuất số lượng phù hợp theo điểm hiện diện"],
    outcome: "Điểm hiện diện ngoài trời nổi bật hơn, đồng bộ nhận diện và hỗ trợ truyền thông trực tiếp tốt hơn.",
    relatedProductSlugs: ["in-logo-du-tron-3m-theo-yeu-cau"]
  },
  {
    slug: "du-ho-boi-phu-quoc",
    title: "Lắp dù hồ bơi cho villa nghỉ dưỡng tại Phú Quốc",
    locationSlug: "phu-quoc",
    locationName: "Phú Quốc",
    type: "Villa nghỉ dưỡng",
    summary: "Giải pháp che nắng khu hồ bơi cho villa nghỉ dưỡng, ưu tiên cảm giác cao cấp và trải nghiệm thư giãn.",
    description: "Công trình lắp dù lệch tâm 3mx3m khung hợp kim nhôm cho khu hồ bơi villa tại Phú Quốc, ưu tiên che nắng thoáng và giữ cảnh quan nghỉ dưỡng.",
    content: "Dù lệch tâm 3mx3m khung hợp kim nhôm là lựa chọn phù hợp cho hồ bơi và villa nghỉ dưỡng vì trụ lệch bên không cản lối đi, không vướng ghế nằm và tạo vùng che rộng. Thiết kế gọn, đẹp giúp khu hồ bơi giữ được cảm giác thư giãn, đồng thời hỗ trợ khách sử dụng không gian ngoài trời vào nhiều thời điểm trong ngày.",
    image: "/images/du-resort-ho-boi.webp",
    challenge: "Khu hồ bơi cần có điểm che nắng vừa đủ mà vẫn phải giữ cảm giác sang và hợp cảnh quan nghỉ dưỡng.",
    solution: ["Ưu tiên dòng phù hợp hồ bơi", "Tư vấn theo tông màu và concept villa", "Đề xuất vị trí đặt dù tối ưu tầm nhìn và công năng"],
    outcome: "Khu hồ bơi tăng trải nghiệm sử dụng và hình ảnh tổng thể hài hòa hơn cho khách lưu trú.",
    relatedProductSlugs: ["du-lech-tam-3mx3m-khung-hop-kim-nhom-cao-cap"]
  },
  {
    slug: "du-quan-cafe-can-tho",
    title: "Bố trí dù cho quán cafe sân vườn tại Cần Thơ",
    locationSlug: "can-tho",
    locationName: "Cần Thơ",
    type: "Quán cafe",
    summary: "Bố trí nhóm dù cho cafe sân vườn theo hướng tăng vùng ngồi ngoài trời và tối ưu trải nghiệm khách vào giờ nắng.",
    description: "Công trình bố trí dù chính tâm tròn 3m quay tay và dù lệch tâm 3mx3m tay đòn bẩy cho quán cafe sân vườn tại Cần Thơ.",
    content: "Với quán cafe sân vườn, dù chính tâm tròn 3m quay tay phù hợp các cụm bàn nhỏ nhờ tán tròn dễ bố trí và cơ chế đóng mở nhẹ. Ở những khu vực cần không gian ngồi thoáng hơn, dù lệch tâm 3mx3m tay đòn bẩy giúp che rộng, không vướng trụ giữa và thao tác mở dù nhanh. Cách kết hợp này giúp quán tăng chỗ ngồi ngoài trời mà vẫn giữ lối đi phục vụ thuận tiện.",
    image: "/images/du-quan-cafe-mat-pho.webp",
    challenge: "Quán muốn mở rộng vùng ngồi ngoài trời nhưng vẫn giữ cảm giác thoáng và không làm rối tổng thể mặt bằng.",
    solution: ["Đề xuất nhóm dù theo cụm bàn", "Tối ưu lối đi phục vụ", "Ưu tiên mẫu phù hợp trải nghiệm ngồi lâu"],
    outcome: "Tăng khả năng sử dụng không gian ngoài trời và cải thiện trải nghiệm khách hàng trong khung giờ nắng nóng.",
    relatedProductSlugs: ["du-chinh-tam-tron-3m-quay-tay", "du-lech-tam-3mx3m-tay-don-bay"]
  }
];
