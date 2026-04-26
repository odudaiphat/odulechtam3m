export type CategorySeoBlock = {
  title: string;
  lead: string;
  applications: string[];
  choosingTips: string[];
  sizeGuide: { need: string; suggestion: string; note: string }[];
  faqs: { question: string; answer: string }[];
  relatedCategorySlugs: string[];
  relatedArticleSlugs: string[];
};

const sharedCta = "Gửi ảnh mặt bằng qua Zalo 0349 596 898 để được tư vấn mẫu, kích thước và báo giá sát nhu cầu.";

export const categorySeoContent: Record<string, CategorySeoBlock> = {
  "du-lech-tam": {
    title: "Dù lệch tâm cho không gian ngoài trời cần thẩm mỹ và vùng che rộng",
    lead: `Dù lệch tâm phù hợp các khu vực cần che nắng nhưng vẫn muốn giữ không gian bên dưới thông thoáng, ít vướng trụ giữa bàn. Đây là lựa chọn thường được chủ quán cafe, nhà hàng sân vườn, homestay, resort và sân vườn gia đình quan tâm khi muốn nâng hình ảnh không gian ngoài trời lên chuyên nghiệp hơn. ${sharedCta}`,
    applications: ["Quán cafe sân vườn, rooftop, nhà hàng ngoài trời", "Sân vườn biệt thự, villa, homestay, resort", "Khu hồ bơi, ghế nằm, khu tiếp khách cần hình ảnh cao cấp", "Không gian muốn tối ưu vùng che nhưng hạn chế trụ ở giữa bàn"],
    choosingTips: ["Chọn bản vuông 3x3m khi cần che cụm bàn rõ ràng và mặt bằng có góc cạnh dễ bố trí.", "Chọn bản tròn 3.5m khi không gian thiên về nghỉ dưỡng, hồ bơi hoặc cần cảm giác mềm mại hơn.", "Ưu tiên gửi ảnh mặt bằng, hướng nắng và số bàn dự kiến để được tư vấn vị trí đặt chân đế phù hợp.", "Với khu vực gió mạnh hoặc trên cao, nên trao đổi kỹ điều kiện lắp đặt trước khi chốt mẫu."],
    sizeGuide: [{ need: "1 cụm bàn 4-6 ghế", suggestion: "Dù lệch tâm vuông 3x3m", note: "Dễ che theo cụm, phù hợp quán cafe và sân vườn." }, { need: "Hồ bơi hoặc ghế thư giãn", suggestion: "Dù lệch tâm tròn 3.5m", note: "Tạo cảm giác mềm, hợp không gian nghỉ dưỡng." }, { need: "Mặt bằng dài, nhiều bàn", suggestion: "Nhiều bộ 3x3m bố trí theo tuyến", note: "Cần chừa lối đi phục vụ và khoảng mở dù." }],
    faqs: [{ question: "Dù lệch tâm có phù hợp quán cafe không?", answer: "Có. Dù lệch tâm được nhiều quán cafe chọn vì hình thức đẹp, vùng che rộng và ít vướng trụ giữa khu bàn." }, { question: "Dù lệch tâm khác gì dù tròn tâm giữa?", answer: "Dù lệch tâm có trụ đặt lệch sang một bên nên không gian dưới tán thoáng hơn. Dù tâm giữa thường gọn và tối ưu chi phí hơn cho mặt bằng nhỏ hoặc cần nhiều bộ." }, { question: "Có nên dùng dù lệch tâm cho rooftop không?", answer: "Có thể dùng, nhưng cần trao đổi kỹ về gió, vị trí đặt chân đế và cách vận hành." }, { question: "Báo giá dù lệch tâm tính theo yếu tố nào?", answer: "Báo giá phụ thuộc kích thước, mẫu dù, số lượng, khu vực giao hàng và nhu cầu lắp đặt." }],
    relatedCategorySlugs: ["du-quan-cafe", "du-san-vuon", "du-che-nang"],
    relatedArticleSlugs: ["du-lech-tam-vs-du-tron", "kich-thuoc-du-ngoai-troi", "gia-o-du-ngoai-troi-bao-nhieu"]
  },
  "du-quan-cafe": {
    title: "Dù quán cafe giúp tăng trải nghiệm ngồi ngoài trời và nhận diện mặt tiền",
    lead: `Dù quán cafe không chỉ để che nắng mưa. Với quán sân vườn, quán mặt phố, rooftop hoặc khu ngồi vỉa hè, mẫu dù phù hợp giúp khách ngồi thoải mái hơn, mặt tiền nhìn chỉn chu hơn và khu vực kinh doanh ngoài trời vận hành hiệu quả hơn. ${sharedCta}`,
    applications: ["Quán cafe sân vườn, cafe mặt tiền, cafe vỉa hè", "Khu bàn ngoài trời của nhà hàng, trà sữa, quán ăn nhẹ", "Rooftop, ban công, sân thượng cần tạo điểm nhấn", "Chuỗi cửa hàng cần đồng bộ màu sắc hoặc in logo thương hiệu"],
    choosingTips: ["Quán nhỏ nên ưu tiên dù vuông 2x2m hoặc tâm giữa gọn để không chiếm lối đi.", "Quán sân vườn rộng có thể chọn dù tròn 3m hoặc dù lệch tâm 3x3m để tăng vùng che.", "Nếu quán cần nhận diện thương hiệu, nên cân nhắc dù in logo nhưng giữ thiết kế gọn, dễ nhìn.", "Nên chọn màu tán phù hợp bảng hiệu, bàn ghế và phong cách quán thay vì chỉ chọn màu nổi."],
    sizeGuide: [{ need: "Ban công, mặt tiền nhỏ", suggestion: "Dù cafe vuông 2x2m", note: "Gọn, dễ bố trí sát tường hoặc theo cụm nhỏ." }, { need: "Cụm bàn sân vườn phổ biến", suggestion: "Dù cafe tròn 3m", note: "Cân bằng vùng che, thẩm mỹ và chi phí." }, { need: "Không gian cần hình ảnh cao cấp", suggestion: "Dù lệch tâm 3x3m", note: "Ít vướng trụ giữa bàn, hợp quán muốn nâng hình ảnh." }],
    faqs: [{ question: "Nên chọn dù quán cafe loại nào?", answer: "Tùy mặt bằng. Quán nhỏ thường hợp dù tâm giữa hoặc dù vuông gọn; quán sân vườn, rooftop hoặc không gian cao cấp có thể chọn dù lệch tâm." }, { question: "Dù quán cafe có thể in logo không?", answer: "Có. Dù in logo phù hợp quán muốn tăng nhận diện tại mặt tiền hoặc đồng bộ chuỗi." }, { question: "Mua nhiều bộ cho quán có được tư vấn bố trí không?", answer: "Có. Ô Dù Đại Phát có thể gợi ý theo số bàn, lối đi, hướng nắng và phong cách quán." }, { question: "Có giao dù quán cafe toàn quốc không?", answer: "Có. Đơn hàng được tư vấn, xác nhận mẫu, số lượng và phương án giao hàng rõ ràng trước khi triển khai." }],
    relatedCategorySlugs: ["du-in-logo", "du-lech-tam", "du-che-nang"],
    relatedArticleSlugs: ["nen-chon-du-quan-cafe-loai-nao", "du-in-logo-cho-quan-cafe", "gia-o-du-ngoai-troi-bao-nhieu"]
  },
  "du-san-vuon": {
    title: "Dù sân vườn cho gia đình, biệt thự, homestay và khu nghỉ dưỡng",
    lead: `Dù sân vườn phù hợp những không gian cần che nắng nhưng vẫn giữ vẻ thoáng, đẹp và hài hòa với cảnh quan. Khi chọn đúng kích thước, kiểu dáng và màu sắc, khu sân vườn có thể trở thành nơi tiếp khách, thư giãn, ăn uống hoặc chụp ảnh đẹp hơn mỗi ngày. ${sharedCta}`,
    applications: ["Sân vườn gia đình, biệt thự, villa", "Homestay, resort, khu nghỉ dưỡng nhỏ", "Khu hồ bơi, ghế nằm, bàn trà ngoài trời", "Không gian sân hiên cần che nắng linh hoạt"],
    choosingTips: ["Đo vùng bàn ghế và lối đi trước khi chọn kích thước dù.", "Không gian nghỉ dưỡng nên ưu tiên màu sắc hài hòa cảnh quan, không quá chói.", "Sân vườn gia đình nên chọn mẫu dễ vận hành và dễ bảo quản.", "Nếu dùng gần hồ bơi hoặc khu gió, nên trao đổi kỹ điều kiện thực tế để chọn phương án an toàn hơn."],
    sizeGuide: [{ need: "Bàn trà nhỏ 2-4 ghế", suggestion: "Dù tròn/tâm giữa 2.5m", note: "Gọn, hợp sân hiên và góc vườn nhỏ." }, { need: "Bàn ăn ngoài trời 4-6 ghế", suggestion: "Dù tròn 3m hoặc vuông 3x3m", note: "Vùng che vừa đủ, dễ phối cảnh quan." }, { need: "Villa, resort, hồ bơi", suggestion: "Dù sân vườn cao cấp hoặc dù lệch tâm", note: "Ưu tiên hình ảnh, trải nghiệm và độ bền." }],
    faqs: [{ question: "Dù sân vườn nên chọn kích thước nào?", answer: "Nên chọn theo vùng bàn ghế thực tế. Góc nhỏ có thể dùng 2.5m, bàn 4-6 ghế thường dùng 3m hoặc 3x3m, không gian rộng có thể phối nhiều bộ." }, { question: "Dù sân vườn có phù hợp homestay, resort không?", answer: "Có. Với homestay và resort, nên ưu tiên mẫu có hình thức đẹp, màu sắc hợp concept và bố trí tạo trải nghiệm thư giãn cho khách." }, { question: "Có cần gửi ảnh sân vườn trước khi báo giá không?", answer: "Rất nên. Ảnh mặt bằng giúp đội ngũ tư vấn đúng kích thước, mẫu dù và vị trí đặt dù." }, { question: "Dù sân vườn có giao tỉnh xa không?", answer: "Có. Ô Dù Đại Phát hỗ trợ giao hàng toàn quốc và hướng dẫn lắp đặt theo từng trường hợp." }],
    relatedCategorySlugs: ["du-lech-tam", "du-che-nang", "du-quan-cafe"],
    relatedArticleSlugs: ["kich-thuoc-du-ngoai-troi", "gia-o-du-ngoai-troi-bao-nhieu", "du-lech-tam-vs-du-tron"]
  },
  "du-che-nang": {
    title: "Dù che nắng ngoài trời cho quán ăn, nhà hàng, khuôn viên và công trình",
    lead: `Dù che nắng là nhóm sản phẩm được chọn khi khách cần giải pháp che phủ linh hoạt, dễ triển khai và phù hợp nhiều mục đích sử dụng. Dòng này phù hợp từ quán ăn, nhà hàng, trường học, khuôn viên đến sân vườn gia đình hoặc công trình thương mại cần nhiều bộ. ${sharedCta}`,
    applications: ["Quán ăn, nhà hàng sân vườn, khu bàn ngoài trời", "Khuôn viên trường học, sân chờ, điểm tập trung", "Sân vườn gia đình, sân hiên, bãi đậu xe nhỏ", "Công trình cần triển khai nhiều bộ theo cụm"],
    choosingTips: ["Xác định ưu tiên chính: che nắng, che mưa nhẹ, thẩm mỹ hay nhân rộng số lượng.", "Khu đông người nên chú ý lối đi, khoảng mở tán và độ ổn định khi vận hành.", "Quán ăn, nhà hàng nên chọn mẫu dễ vệ sinh, dễ bố trí theo nhiều bàn.", "Công trình cần nhiều bộ nên thống nhất màu sắc và kích thước từ đầu để nhìn đồng bộ."],
    sizeGuide: [{ need: "Khu bàn nhỏ hoặc điểm bán", suggestion: "Dù tâm giữa 2.5m", note: "Gọn, dễ bố trí và tối ưu chi phí." }, { need: "Nhà hàng/quán ăn ngoài trời", suggestion: "Dù tâm giữa 3m hoặc dù che nắng theo cụm", note: "Dễ nhân rộng theo số lượng bàn." }, { need: "Không gian cần hình ảnh đẹp hơn", suggestion: "Dù lệch tâm hoặc dù sân vườn cao cấp", note: "Phù hợp khu tiếp khách, sân vườn, resort." }],
    faqs: [{ question: "Dù che nắng có dùng cho quán ăn ngoài trời được không?", answer: "Có. Quán ăn ngoài trời thường ưu tiên mẫu dễ bố trí, che phủ tốt và có thể nhân rộng nhiều bộ theo layout bàn." }, { question: "Có thể đặt nhiều bộ cùng màu không?", answer: "Có. Với công trình, quán ăn hoặc khuôn viên, nên thống nhất màu sắc và kích thước để tổng thể nhìn chuyên nghiệp hơn." }, { question: "Dù che nắng có chịu được mưa không?", answer: "Tùy chất liệu và điều kiện sử dụng. Khi mưa gió lớn nên gấp dù và bảo quản theo hướng dẫn." }, { question: "Báo giá dù che nắng cần thông tin gì?", answer: "Bạn nên gửi kích thước khu vực, số lượng dự kiến, ảnh vị trí và khu vực giao hàng để nhận tư vấn sát hơn." }],
    relatedCategorySlugs: ["du-quan-cafe", "du-san-vuon", "du-lech-tam"],
    relatedArticleSlugs: ["gia-o-du-ngoai-troi-bao-nhieu", "kich-thuoc-du-ngoai-troi", "nen-chon-du-quan-cafe-loai-nao"]
  },
  "du-in-logo": {
    title: "Dù in logo giúp thương hiệu nổi bật tại điểm bán và sự kiện ngoài trời",
    lead: `Dù in logo phù hợp quán cafe, nhà hàng, chuỗi cửa hàng, sự kiện và thương hiệu cần tăng nhận diện tại khu vực ngoài trời. Khi thiết kế đúng, logo xuất hiện vừa đủ, dễ nhìn từ xa nhưng không làm rối mặt tiền hoặc phá tổng thể không gian. ${sharedCta}`,
    applications: ["Quán cafe, nhà hàng, trà sữa cần đồng bộ nhận diện", "Sự kiện, activation, booth bán hàng ngoài trời", "Chuỗi điểm bán cần nhiều bộ cùng màu, cùng logo", "Thương hiệu tài trợ muốn xuất hiện tại khu vực đông khách"],
    choosingTips: ["Chuẩn bị file logo rõ nét, màu thương hiệu và ảnh vị trí đặt dù.", "Không nên in logo quá dày nếu mặt tiền đã có nhiều biển hiệu.", "Chọn màu tán tương phản vừa đủ để logo dễ nhìn nhưng vẫn sang.", "Với số lượng lớn, nên thống nhất kích thước, màu tán và vị trí in trước khi sản xuất."],
    sizeGuide: [{ need: "Quán cafe nhỏ", suggestion: "Dù vuông 2x2m hoặc dù tròn 2.5-3m", note: "Dễ nhìn logo ở mặt tiền, không chiếm nhiều diện tích." }, { need: "Chuỗi quán, nhiều điểm bán", suggestion: "Một mẫu đồng bộ theo bộ nhận diện", note: "Giúp thương hiệu nhất quán tại nhiều địa điểm." }, { need: "Sự kiện ngoài trời", suggestion: "Dù in logo theo màu chiến dịch", note: "Nên ưu tiên dễ dựng, dễ vận chuyển và nhận diện từ xa." }],
    faqs: [{ question: "Dù in logo cần chuẩn bị file gì?", answer: "Nên gửi file logo rõ nét, mã màu thương hiệu nếu có, kích thước hoặc ảnh vị trí đặt dù." }, { question: "Có nên in logo lớn trên tất cả các mặt dù không?", answer: "Không phải lúc nào cũng nên. Tùy mặt tiền, màu sắc và mục tiêu nhận diện, có thể chọn cách in vừa đủ." }, { question: "Dù in logo phù hợp số lượng ít không?", answer: "Có thể làm cho quán riêng lẻ hoặc số lượng lớn. Báo giá phụ thuộc mẫu dù, kích thước, số lượng và yêu cầu in." }, { question: "Có hỗ trợ tư vấn phối màu theo thương hiệu không?", answer: "Có. Bạn có thể gửi logo, màu chủ đạo và ảnh không gian để được gợi ý màu tán, vị trí in và mẫu dù phù hợp." }],
    relatedCategorySlugs: ["du-quan-cafe", "du-che-nang", "du-lech-tam"],
    relatedArticleSlugs: ["du-in-logo-cho-quan-cafe", "nen-chon-du-quan-cafe-loai-nao", "gia-o-du-ngoai-troi-bao-nhieu"]
  }
};
