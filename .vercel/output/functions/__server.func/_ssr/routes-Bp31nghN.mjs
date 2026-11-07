import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as Cpu, c as Calculator, i as PanelLeftClose, l as Bot, o as ClipboardCheck, r as PanelLeftOpen, s as Check, t as Volume2, u as BookOpen } from "../_libs/lucide-react.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bp31nghN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FELDER = [
	{
		id: 1,
		de: "Elektrotechnische Systeme analysieren und Funktionen prüfen",
		vi: "Phân tích hệ thống điện và kiểm tra chức năng",
		year: 1,
		hours: 80,
		exam: "Teil 1 và Teil 2",
		goal: "Đọc được mạch, tính được đại lượng cơ bản, phân biệt được ký hiệu thiết bị trước khi cầm tua-vít.",
		points: [
			"Định luật Ohm: U = R · I. Công suất P = U · I với một chiều và tải thuần trở.",
			"Nối tiếp cộng trở. Song song: 1/Rt = 1/R1 + 1/R2. Hai trở bằng nhau song song thì Rt = R/2.",
			"Ký hiệu tham chiếu DIN EN 81346: Q đóng cắt, F bảo vệ, K contactor, S nút, M động cơ, B cảm biến.",
			"Đo U song song với tải, đo I nối tiếp. Nhầm cách đo là cách hỏng mạch và hỏng đồng hồ."
		],
		norms: ["DIN EN 81346", "IEC 60038 (lưới hạ áp châu Âu 230/400 V)"],
		exampleTitle: "Hai điện trở sợi đốt 200 Ω song song",
		example: "1/Rt = 1/200 + 1/200 = 1/100, nên Rt = 100 Ω. Cắm vào 24 V thì I = 24/100 = 0,24 A, P = 5,76 W.",
		formula: "U = R · I    ·    1/Rt = Σ 1/Ri",
		workshop: "Vẽ một mạch đèn 24 V, ghi chiều dòng giả định, tính I trước khi đóng nguồn bàn thí nghiệm."
	},
	{
		id: 2,
		de: "Elektrische Installationen planen und ausführen",
		vi: "Lập kế hoạch và thi công lắp đặt điện",
		year: 1,
		hours: 80,
		exam: "Teil 1 và Teil 2",
		goal: "Chọn tuyến dây, tính sụt áp, đọc được sơ đồ lắp đặt và không nhầm dây bảo vệ.",
		points: [
			"Sụt áp 1 pha: ΔU = 2 · L · I · cosφ / (κ · A). Hệ số 2 vì có chiều đi và chiều về.",
			"Sụt áp 3 pha: ΔU = √3 · L · I · cosφ / (κ · A). L là chiều dài một chiều, mét.",
			"κ đồng thường lấy 56 m/(Ω·mm²), nhôm 33. Đây là hệ số tính xưởng, không thay bảng cáp.",
			"Thông lệ DIN VDE 0100-520: chiếu sáng khoảng 3 %, phụ tải khác khoảng 5 % tính từ điểm đấu nguồn công cộng.",
			"PE và N không hoán đổi. Màu dây theo bản vẽ tủ, không theo trí nhớ một công trình khác."
		],
		norms: ["DIN VDE 0100-520", "DIN VDE 0298-4"],
		exampleTitle: "Tuyến đồng 3 pha, 40 m, 16 A, 2,5 mm², cosφ 0,9",
		example: "ΔU = 1,732 · 40 · 16 · 0,9 / (56 · 2,5) ≈ 7,13 V. Trên 400 V là khoảng 1,8 %, còn trong ngưỡng 5 %.",
		formula: "ΔU₃ = √3 · L · I · cosφ / (κ · A)",
		workshop: "Với một ổ máy trong xưởng, nhập L, I, A vào bàn tính sụt áp. Nếu vượt 5 %, tăng tiết diện rồi tính lại."
	},
	{
		id: 3,
		de: "Steuerungen analysieren und anpassen",
		vi: "Phân tích và chỉnh mạch điều khiển",
		year: 1,
		hours: 80,
		exam: "Teil 1 và Teil 2",
		goal: "Đọc mạch tự giữ, chỉ ra nút dừng ưu tiên và giải thích vì sao contactor không được tự hút lại.",
		points: [
			"S0 Stop là Öffner (thường đóng), mắc nối tiếp. Nhả nút thì mạch mới kín được.",
			"S1 Start là Schließer (thường mở), mắc song song với tiếp điểm duy trì K1.",
			"Cuộn K1 chỉ hút khi Stop đang kín và (Start đang nhấn hoặc tiếp điểm duy trì đã đóng).",
			"Thả Start mà mạch vẫn giữ là nhờ tiếp điểm duy trì, không phải vì nút Start bị kẹt.",
			"Dừng phải thắng khởi động: mở Stop là mất điện cuộn ngay, dù Start còn bị nhấn."
		],
		norms: ["DIN EN 60204-1", "IEC 61131-3 (LD)"],
		exampleTitle: "Tự giữ một contactor",
		example: "Nhấn S1: dòng qua S0 và S1 tới cuộn K1. K1 đóng tiếp điểm duy trì song song S1. Thả S1, dòng đi qua tiếp điểm K1. Nhấn S0, cuộn mất điện, tiếp điểm duy trì mở, thả S0 máy không tự chạy.",
		formula: "K1 = Q1 ∧ ¬S0 ∧ (S1 ∨ K1)",
		workshop: "Trong mô phỏng Tự giữ: bấm S1, thả tay, xác nhận M1 vẫn chạy; bấm S0, xác nhận M1 dừng hẳn."
	},
	{
		id: 4,
		de: "Informationstechnische Systeme bereitstellen",
		vi: "Chuẩn bị hệ thống công nghệ thông tin cho xưởng",
		year: 1,
		hours: 80,
		exam: "Teil 1 và Teil 2",
		goal: "Nhận biết mạng máy, địa chỉ, và thói quen không để mật khẩu PLC dán trên cửa tủ.",
		points: [
			"192.168.1.10/24 có mặt nạ 255.255.255.0. Đổi octet cuối là cùng mạng, đổi octet thứ ba là khác mạng.",
			"PLC, HMI, biến tần cần địa chỉ tĩnh ghi trong sơ đồ, không để DHCP rồi quên.",
			"Cáp mạng xưởng đi riêng với cáp động lực. Khoảng cách và vỏ bọc ghi trong tài liệu nhà sản xuất.",
			"Mật khẩu kỹ thuật không dán lên tủ, không dùng chung một mật khẩu cho mọi máy của khách."
		],
		norms: ["IEC 61131", "IEC 62443 (an ninh mạng công nghiệp, mức nguyên tắc)"],
		exampleTitle: "Hai thiết bị 192.168.1.10 và 192.168.1.20",
		example: "Cùng prefix /24 nên ping được nếu VLAN và cáp đúng. 192.168.2.20 thì khác mạng, cần router.",
		formula: "mặt nạ /24 = 255.255.255.0",
		workshop: "Lập một bảng 6 địa chỉ: PLC, HMI, biến tần, máy tính lập trình, gateway, dự phòng. Không trùng."
	},
	{
		id: 5,
		de: "Elektroenergieversorgung und Sicherheit von Betriebsmitteln gewährleisten",
		vi: "Đảm bảo nguồn điện và an toàn thiết bị",
		year: 2,
		hours: 80,
		exam: "Teil 1 và Teil 2",
		goal: "Thuộc và không đảo thứ tự năm quy tắc an toàn. Biết dụng cụ nào được dùng để kết luận mất điện.",
		points: [
			"1 Freischalten — cắt hết nguồn, mọi cực.",
			"2 Gegen Wiedereinschalten sichern — khóa, nhả cầu chì, biển cấm đóng.",
			"3 Spannungsfreiheit feststellen — xác nhận mất điện.",
			"4 Erden und kurzschließen — nối đất và ngắn mạch khi quy định yêu cầu.",
			"5 Benachbarte unter Spannung stehende Teile abdecken oder abschranken — che hoặc rào phần còn điện.",
			"Hạ áp: dùng Spannungsprüfer hai cực theo DIN EN 61243-3. Bút thử cảm ứng không phải bằng chứng duy nhất.",
			"Thử bút trên nguồn còn sống đã biết, đo tủ, rồi thử lại bút. Đó là Prüfen–Messen–Prüfen."
		],
		norms: [
			"DIN VDE 0105-100",
			"DIN EN 61243-3",
			"DGUV Vorschrift 3"
		],
		exampleTitle: "Thay một contactor trong tủ 400 V",
		example: "Ngắt Q chính, khóa tay nắm, treo biển, đo cả ba pha tới PE và giữa các pha bằng bút hai cực đã thử trước. Hạ áp tủ máy thường không ngắn mạch như trung thế, nhưng che thanh cái còn điện kế bên là bắt buộc nếu chạm được.",
		workshop: "Mở thẻ An toàn và bấm đúng năm bước theo thứ tự. Bấm sai là làm lại từ đầu."
	},
	{
		id: 6,
		de: "Anlagen analysieren und deren Sicherheit prüfen",
		vi: "Phân tích hệ thống và kiểm tra an toàn",
		year: 2,
		hours: 60,
		exam: "Teil 1 và Teil 2",
		goal: "Nắm chuỗi Ib ≤ In ≤ Iz và biết biên bản kiểm tra không được bịa số đo.",
		points: [
			"Ib dòng làm việc, In dòng danh định thiết bị bảo vệ, Iz dòng cho phép của dây.",
			"Chuỗi chọn: Ib ≤ In ≤ Iz. Sai một mắt xích là hoặc dây cháy hoặc bảo vệ không chịu tải.",
			"Iz lấy từ DIN VDE 0298-4 theo cách đặt, cách điện, số lõi mang tải, nhiệt độ. Không chép một số nhớ.",
			"Đo cách điện bằng Iso-Messgerät khi mạch đã được cắt theo năm quy tắc.",
			"RCD/FI thử nút test định kỳ, nhưng nút test không thay thế phép đo dòng rò khi biên bản yêu cầu."
		],
		norms: [
			"DIN VDE 0100-430",
			"DIN VDE 0100-600",
			"DIN VDE 0298-4"
		],
		exampleTitle: "Ib = 18 A, Iz tra bảng = 24 A",
		example: "Bậc In hợp lệ nhỏ nhất trong dãy thường gặp là 20 A vì 18 ≤ 20 ≤ 24. Bậc 25 A đã lớn hơn Iz, không lấy.",
		formula: "Ib ≤ In ≤ Iz",
		workshop: "Nhập Ib và Iz ở bàn tính Bảo vệ. Nếu không ra In, viết lý do trước khi đề xuất tăng tiết diện."
	},
	{
		id: 7,
		de: "Steuerungen für Anlagen programmieren und realisieren",
		vi: "Lập trình và thi công điều khiển thiết bị",
		year: 2,
		hours: 80,
		exam: "nur Teil 2",
		goal: "Viết được mạch thang tương đương tự giữ và gọi đúng tên ngôn ngữ IEC 61131-3.",
		points: [
			"IEC 61131-3 dạy LD (ladder), FBD, ST, SFC. IL còn trong tài liệu cũ, không lấy làm ngôn ngữ chính.",
			"Một rung ladder đọc từ trái sang phải: điều kiện rồi mới tới cuộn.",
			"Ưu tiên dừng là hình học của sơ đồ: Stop nối tiếp, đứng trước nhánh song song Start và duy trì.",
			"Đặt tên biến theo thiết bị thật: S0_Stop, S1_Start, K1_Motor. Tên M0.0 một mình là không bàn giao được.",
			"Giả lập xong vẫn phải đối chiếu với I/O thật. Nhầm NO/NC ngoài hiện trường là lỗi kinh điển."
		],
		norms: ["IEC 61131-3", "DIN EN 60204-1"],
		exampleTitle: "Cuộn K1",
		example: "K1 = S0_ok AND (S1 OR K1), với S0_ok là trạng thái mạch dừng đang kín. Trong PLC, nhập Stop vật lý thường đóng vào input và giữ logic fail-safe.",
		formula: "LD: tiếp điểm nối tiếp = AND, song song = OR",
		workshop: "Đối chiếu mô phỏng Tự giữ với một mạng ladder bạn tự viết ra giấy. Hai cái phải cùng một câu chuyện."
	},
	{
		id: 8,
		de: "Antriebssysteme auswählen und integrieren",
		vi: "Chọn và tích hợp truyền động",
		year: 2,
		hours: 60,
		exam: "nur Teil 2",
		goal: "Tính dòng động cơ, tốc độ đồng bộ, hệ số trượt và điểm chỉnh role nhiệt sao–tam giác.",
		points: [
			"Dòng dây 3 pha: I = P / (√3 · U · cosφ · η). P đổi ra oát, U là điện áp dây.",
			"Tốc độ đồng bộ ns = 60 · f / p, p là số đôi cực (Polpaarzahl). 50 Hz, p = 2 → 1500 min⁻¹.",
			"Độ trượt s = (ns − n) / ns. Rotor không bao giờ chạm ns khi có tải.",
			"Role nhiệt trên đường dây nguồn: chỉnh khoảng In. Nằm sau contactor tam giác, đo dòng pha dây quấn: chỉnh khoảng In / √3 ≈ 0,58 · In.",
			"Khởi động sao giảm dòng và mô-men xuống khoảng một phần ba so với đóng tam giác trực tiếp."
		],
		norms: ["DIN EN 60204-1", "IEC 60034 (động cơ quay, họ tiêu chuẩn)"],
		exampleTitle: "Động cơ 5,5 kW, 400 V, cosφ 0,85, η 0,90",
		example: "I = 5500 / (1,732 · 400 · 0,85 · 0,90) ≈ 10,38 A. Role nhiệt đường dây chỉnh khoảng 10,4 A. Nếu role đo dòng pha dây quấn tam giác thì khoảng 6,0 A.",
		formula: "I = P / (√3 · U · cosφ · η)",
		workshop: "Lấy một tem động cơ thật hoặc tem giả định trong bàn tính. Điền đủ P, U, cosφ, η. Thiếu số nào thì không được bịa."
	},
	{
		id: 9,
		de: "Steuerungssysteme und Kommunikationssysteme integrieren",
		vi: "Tích hợp điều khiển và truyền thông",
		year: 3,
		hours: 100,
		exam: "nur Teil 2",
		goal: "Phân biệt bus cổ điển và Ethernet công nghiệp, biết thứ tự kiểm tra khi mất liên kết.",
		points: [
			"PROFIBUS DP lớp vật lý kinh điển là RS-485, có điện trở cuối tuyến.",
			"PROFINET chạy trên Ethernet công nghiệp. Đừng tìm điện trở cuối RS-485 trên một đường PROFINET đồng.",
			"Mất liên kết: kiểm tra nguồn thiết bị, đèn link, địa chỉ/tên thiết bị, rồi mới nghi ngờ chương trình.",
			"Cáp bus không đi chung ống với cáp động lực nếu tài liệu nhà sản xuất cấm.",
			"Một địa chỉ hoặc một tên thiết bị PROFINET trùng là lỗi đấu mạng, không phải lỗi cơ khí."
		],
		norms: ["IEC 61158", "IEC 61784"],
		exampleTitle: "Đèn link tắt",
		example: "Đổi cáp đã biết tốt trước khi nạp lại toàn bộ project. Nếu cáp tốt mà vẫn tắt, kiểm tra cổng và nguồn đối tác.",
		workshop: "Viết một trình tự 6 bước chẩn đoán mất PROFINET, từ dễ tới khó, không bắt đầu bằng việc viết lại chương trình."
	},
	{
		id: 10,
		de: "Automatisierungssysteme in Betrieb nehmen und übergeben",
		vi: "Đưa hệ thống vào vận hành và bàn giao",
		year: 3,
		hours: 100,
		exam: "nur Teil 2",
		goal: "Biết bàn giao gồm phép thử chức năng, phép thử bảo vệ và chữ ký, không chỉ là máy đã quay.",
		points: [
			"Inbetriebnahme đi từ nguồn, bảo vệ, I/O, rồi mới tới trình tự máy.",
			"E-Stop và cửa bảo vệ thử trước khi cho chạy tự động.",
			"Wiederanlaufsperre: sau khi nhả dừng khẩn, máy không được tự chạy. Phải có lệnh khởi động mới.",
			"Biên bản ghi trị số đo thật. Ô trống để trống, không điền số đẹp.",
			"Bàn giao kèm sơ đồ đúng với tủ đã sửa, danh sách I/O và mật khẩu được chuyển theo quy định xưởng."
		],
		norms: ["DIN EN 60204-1", "DIN VDE 0100-600"],
		exampleTitle: "Thử dừng khẩn",
		example: "Máy đang chạy, đấm E-Stop, mọi chuyển động nguy hiểm phải dừng. Xoay nhả nấm, máy vẫn đứng. Chỉ chạy lại sau khi bấm nút khởi động chủ định.",
		workshop: "Trong mô phỏng An toàn hai kênh, gây sự cố rồi xác nhận đèn ra tắt và không tự sáng lại khi hết sự cố."
	},
	{
		id: 11,
		de: "Automatisierungssysteme instand halten und optimieren",
		vi: "Bảo trì và tối ưu hệ thống tự động",
		year: 3,
		hours: 80,
		exam: "nur Teil 2",
		goal: "Tách bảo trì phòng ngừa khỏi sửa chữa, và không chỉnh thông số vòng lặp khi chưa ghi lại trạng thái cũ.",
		points: [
			"Wartung: việc theo kế hoạch, máy chưa hỏng. Instandsetzung: sửa sau khi đã hỏng.",
			"Inspektion là kiểm tra, không mặc định là thay thế.",
			"Trước khi sửa thông số biến tần hoặc PID, chép bộ số đang chạy ra giấy hoặc file.",
			"Tối ưu từng bước nhỏ, mỗi lần một thông số, có xu hướng đo. Tăng P đến khi dao động không gọi là tối ưu.",
			"Phụ tùng thay phải đúng mã. Contactor cùng dòng nhưng khác điện áp cuộn là hàng sai."
		],
		norms: ["DIN 31051 (thuật ngữ bảo trì)", "DIN EN 60204-1"],
		exampleTitle: "Cuộn contactor 24 V DC lắp nhầm vào mạch 230 V AC",
		example: "Cuộn cháy hoặc không hút đúng. Tem trên thân K1 là tài liệu, không phải gợi ý.",
		workshop: "Lập 5 việc Wartung tuần cho một tủ băng tải: siết đầu cốt có đánh dấu, lọc quạt, thử E-Stop, soi đèn I/O, nghe contactor."
	},
	{
		id: 12,
		de: "Automatisierungssysteme planen",
		vi: "Lập kế hoạch hệ thống tự động hóa",
		year: 4,
		hours: 60,
		exam: "nur Teil 2",
		goal: "Phân biệt việc khách muốn gì và việc nhà thầu cam kết làm gì.",
		points: [
			"Lastenheft là lời của bên đặt hàng: chức năng cần đạt, không phải sơ đồ đấu dây.",
			"Pflichtenheft là lời của bên làm: cách đáp ứng Lastenheft, có thể kiểm tra được.",
			"Thiếu một câu trong Lastenheft thì không được tự bịa yêu cầu an toàn cho đỡ hẹp phạm vi.",
			"Chọn cảm biến theo đại lượng đo, môi trường, khoảng cách, và kiểu tín hiệu 24 V hoặc 4–20 mA.",
			"Kế hoạch phải chỉ ra phần nào là an toàn máy, phần nào chỉ là điều khiển thường."
		],
		norms: ["DIN EN ISO 13849-1", "VDI/VDE 3694 (tài liệu Lastenheft/Pflichtenheft, họ hướng dẫn)"],
		exampleTitle: "Câu trong Lastenheft",
		example: "“Băng tải dừng khi hết phôi và khi đấm dừng khẩn, không tự chạy lại.” Pflichtenheft phải chỉ ra cảm biến nào, rơ-le an toàn nào, và phép thử nào chứng minh câu đó.",
		workshop: "Viết 6 dòng Lastenheft cho bể mức 4–20 mA. Cấm dùng tên linh kiện ở bước này."
	},
	{
		id: 13,
		de: "Automatisierungssysteme realisieren",
		vi: "Thi công hệ thống tự động hóa",
		year: 4,
		hours: 80,
		exam: "nur Teil 2",
		goal: "Lắp được mạch sao–tam giác có liên động, đưa tín hiệu 4–20 mA vào thang đo đúng, bàn giao đúng hiện trạng.",
		points: [
			"Contactor sao và contactor tam giác không được đóng cùng lúc. Liên động cả điện và cơ nếu sơ đồ yêu cầu.",
			"Chuyển sao sang tam giác có thời gian nghỉ ngắn để tắt hồ quang, rồi mới đóng tam giác.",
			"Dòng khởi động kiểu sao xấp xỉ một phần ba dòng khởi động tam giác trực tiếp. Mô-men cũng giảm tương ứng.",
			"4 mA là điểm đầu thang đo, không phải đứt dây. Dưới khoảng 3,6 mA mới là vùng sự cố đứt dây khi hệ đang dùng 4–20 mA.",
			"Số nguyên PLC kiểu Siemens thường gặp: 0…20 mA ứng 0…27648. 4 mA ứng khoảng 5530."
		],
		norms: ["DIN EN 60204-1", "IEC 61131-3"],
		exampleTitle: "Mức bể 0…5 m, dòng đo 12 mA",
		example: "Giá trị = 0 + (12 − 4) / 16 · 5 = 2,5 m. Số Siemens = 12 / 20 · 27648 ≈ 16589.",
		formula: "x = xmin + (I − 4) / 16 · (xmax − xmin)",
		workshop: "Chạy mô phỏng Sao–tam giác và mô phỏng 4–20 mA. Ghi lại thời điểm K2 nhả, K3 hút, và giá trị mét tại 12 mA."
	}
];
var NORMS = [
	{
		name: "DIN VDE 0105-100",
		scope: "Làm việc trên hệ thống điện. Nguồn của năm quy tắc an toàn, đúng thứ tự."
	},
	{
		name: "DIN EN 61243-3",
		scope: "Dụng cụ thử điện hai cực dùng khi kết luận mất điện ở hạ áp."
	},
	{
		name: "DIN VDE 0100-430",
		scope: "Phối hợp bảo vệ quá dòng. Chuỗi học việc Ib ≤ In ≤ Iz nằm ở họ yêu cầu này."
	},
	{
		name: "DIN VDE 0100-520",
		scope: "Đi dây. Phụ lục tham khảo hay được dạy: sụt áp chiếu sáng 3 %, phụ tải khác 5 %."
	},
	{
		name: "DIN VDE 0100-600",
		scope: "Kiểm tra lắp đặt hạ áp trước khi đóng điện và khi lập biên bản."
	},
	{
		name: "DIN VDE 0298-4",
		scope: "Dòng cho phép của cáp. Tra theo cách lắp, không lấy một số duy nhất."
	},
	{
		name: "DIN EN 60204-1",
		scope: "Trang bị điện của máy: nguồn, dừng, tủ, màu nút, điều kiện bàn giao."
	},
	{
		name: "DIN EN ISO 13849-1",
		scope: "Phần điều khiển liên quan an toàn. Category và PL. App không tính PL thay SISTEMA."
	},
	{
		name: "IEC 61131-3",
		scope: "Ngôn ngữ PLC: LD, FBD, ST, SFC."
	},
	{
		name: "DIN EN 81346",
		scope: "Ký hiệu thiết bị trên sơ đồ: Q, F, K, S, M, B."
	},
	{
		name: "DGUV Vorschrift 3",
		scope: "Kiểm định thiết bị điện định kỳ trong cơ sở Đức."
	},
	{
		name: "KMK Rahmenlehrplan",
		scope: "13 Lernfelder nghề Elektroniker für Automatisierungstechnik, khoảng 1.020 giờ trường."
	}
];
var GLOSSARY = [
	{
		de: "Öffner",
		vi: "Tiếp điểm thường đóng",
		note: "NC. Nút dừng dùng loại này."
	},
	{
		de: "Schließer",
		vi: "Tiếp điểm thường mở",
		note: "NO. Nút khởi động dùng loại này."
	},
	{
		de: "Selbsthaltung",
		vi: "Tự giữ",
		note: "Tiếp điểm song song với nút Start."
	},
	{
		de: "Schütz",
		vi: "Contactor",
		note: "Ký hiệu K. Cuộn hút, tiếp điểm lực và tiếp điểm phụ."
	},
	{
		de: "Motorschutzrelais",
		vi: "Role nhiệt bảo vệ động cơ",
		note: "Chỉnh theo vị trí lắp, không phải lúc nào cũng bằng In."
	},
	{
		de: "Freischalten",
		vi: "Cắt điện mọi phía",
		note: "Quy tắc an toàn số 1."
	},
	{
		de: "Spannungsfreiheit",
		vi: "Trạng thái không còn điện",
		note: "Phải đo, không được suy đoán."
	},
	{
		de: "Elektrofachkraft",
		vi: "Người làm điện có chuyên môn được giao",
		note: "Mô phỏng này không cấp tư cách đó."
	},
	{
		de: "Stern-Dreieck",
		vi: "Khởi động sao–tam giác",
		note: "Dòng và mô-men khởi động giảm còn khoảng 1/3."
	},
	{
		de: "Polpaarzahl",
		vi: "Số đôi cực",
		note: "p = 2 nghĩa là 4 cực, ns = 1500 ở 50 Hz."
	},
	{
		de: "Schlupf",
		vi: "Độ trượt",
		note: "s = (ns − n) / ns."
	},
	{
		de: "Wirkleistung",
		vi: "Công suất tác dụng P",
		note: "Đơn vị oát."
	},
	{
		de: "Blindleistung",
		vi: "Công suất phản kháng Q",
		note: "Đơn vị var. Bù bằng tụ."
	},
	{
		de: "Scheinleistung",
		vi: "Công suất biểu kiến S",
		note: "Đơn vị VA. S = P / cosφ khi P và cosφ đã biết."
	},
	{
		de: "Lastenheft",
		vi: "Hồ sơ yêu cầu của bên đặt hàng",
		note: "Nói cái cần đạt."
	},
	{
		de: "Pflichtenheft",
		vi: "Hồ sơ cam kết của bên làm",
		note: "Nói cách làm, kiểm được."
	},
	{
		de: "Inbetriebnahme",
		vi: "Đưa vào vận hành",
		note: "Có biên bản, không chỉ cắm điện."
	},
	{
		de: "Wiederanlaufsperre",
		vi: "Khóa không tự khởi động lại",
		note: "Nhả E-Stop không được làm máy chạy."
	},
	{
		de: "Wartung",
		vi: "Bảo trì theo kế hoạch",
		note: "Làm khi chưa hỏng."
	},
	{
		de: "Instandsetzung",
		vi: "Sửa chữa sau hư hỏng",
		note: "Khác Wartung."
	},
	{
		de: "Not-Halt",
		vi: "Dừng khẩn",
		note: "Nấm thường màu đỏ, nền vàng, dạng giữ."
	},
	{
		de: "SPS",
		vi: "PLC",
		note: "Speicherprogrammierbare Steuerung."
	},
	{
		de: "Aktor",
		vi: "Cơ cấu chấp hành",
		note: "Contactor, van, biến tần, xi lanh."
	},
	{
		de: "Sensor",
		vi: "Cảm biến",
		note: "B. Tín hiệu số 24 V hoặc tương tự 4–20 mA."
	},
	{
		de: "Schaltschrank",
		vi: "Tủ điện",
		note: "Sơ đồ phải khớp với dây đã buộc."
	},
	{
		de: "Leitungsschutz",
		vi: "Bảo vệ đường dây",
		note: "Cầu chì hoặc MCB, không thay role nhiệt động cơ."
	},
	{
		de: "Feld",
		vi: "Hiện trường",
		note: "Khác với tủ. Cảm biến nằm ở Feld."
	}
];
var SAFETY = [
	{
		de: "Freischalten",
		vi: "Cắt khỏi mọi nguồn điện"
	},
	{
		de: "Gegen Wiedereinschalten sichern",
		vi: "Khóa không cho đóng lại"
	},
	{
		de: "Spannungsfreiheit feststellen",
		vi: "Xác nhận đã mất điện"
	},
	{
		de: "Erden und kurzschließen",
		vi: "Nối đất và ngắn mạch khi cần"
	},
	{
		de: "Benachbarte, unter Spannung stehende Teile abdecken oder abschranken",
		vi: "Che hoặc rào phần vẫn còn điện"
	}
];
var QUESTIONS = [
	{
		id: "q1",
		feld: 1,
		stem: "Hai điện trở 200 Ω mắc song song. Điện trở tương đương bằng bao nhiêu?",
		choices: [
			"400 Ω",
			"100 Ω",
			"200 Ω",
			"50 Ω"
		],
		answer: 1,
		why: "1/Rt = 1/200 + 1/200 = 1/100, nên Rt = 100 Ω."
	},
	{
		id: "q2",
		feld: 1,
		stem: "Định luật Ohm viết đúng là câu nào?",
		choices: [
			"U = R / I",
			"U = R · I",
			"I = U · R",
			"P = R / U"
		],
		answer: 1,
		why: "U = R · I. Đảo lại thì I = U / R, không phải U · R."
	},
	{
		id: "q3",
		feld: 2,
		stem: "Trong công thức sụt áp 3 pha ΔU = √3 · L · I · cosφ / (κ · A), L là gì?",
		choices: [
			"Chiều dài khứ hồi đã nhân 2",
			"Chiều dài một chiều của tuyến",
			"Chiều dài chỉ dây PE",
			"Chu vi ống"
		],
		answer: 1,
		why: "Với 3 pha, hệ số √3 đã thay cho hệ số 2 của mạch một pha. L vẫn là chiều dài một chiều."
	},
	{
		id: "q4",
		feld: 2,
		stem: "Hệ số dẫn κ của đồng trong công thức xưởng thường lấy bằng bao nhiêu?",
		choices: [
			"33",
			"8,9",
			"56",
			"100"
		],
		answer: 2,
		why: "Đồng 56 m/(Ω·mm²). Nhôm thường lấy 33. Đây là hệ số tính, không phải dòng cho phép."
	},
	{
		id: "q5",
		feld: 3,
		stem: "Nút dừng trong mạch tự giữ chuẩn được mắc thế nào?",
		choices: [
			"Thường mở, song song với cuộn",
			"Thường đóng, nối tiếp trước nhánh Start",
			"Thường mở, nối tiếp sau cuộn",
			"Thường đóng, song song với Start"
		],
		answer: 1,
		why: "Stop là Öffner mắc nối tiếp để nhấn là mất điện cuộn ngay."
	},
	{
		id: "q6",
		feld: 3,
		stem: "Tiếp điểm duy trì của contactor K1 mắc ở đâu?",
		choices: [
			"Nối tiếp với nút Stop",
			"Song song với nút Start",
			"Song song với cuộn K1",
			"Trên dây PE"
		],
		answer: 1,
		why: "Song song với Start để khi thả nút, dòng vẫn nuôi cuộn. Stop vẫn nằm ngoài nhánh này."
	},
	{
		id: "q7",
		feld: 4,
		stem: "Mặt nạ mạng của 192.168.10.20/24 là gì?",
		choices: [
			"255.255.0.0",
			"255.0.0.0",
			"255.255.255.0",
			"255.255.255.128"
		],
		answer: 2,
		why: "/24 có 24 bit mạng, viết thành 255.255.255.0."
	},
	{
		id: "q8",
		feld: 5,
		stem: "Bước thứ ba trong năm quy tắc an toàn DIN VDE 0105-100 là gì?",
		choices: [
			"Nối đất và ngắn mạch",
			"Khóa không cho đóng lại",
			"Xác nhận mất điện",
			"Che phần còn điện"
		],
		answer: 2,
		why: "Thứ tự là cắt, khóa, xác nhận mất điện, rồi mới nối đất/ngắn mạch và che phần còn điện."
	},
	{
		id: "q9",
		feld: 5,
		stem: "Kết luận một tủ hạ áp đã mất điện phải dựa vào đâu?",
		choices: [
			"Đèn tủ tắt",
			"Bút thử điện hai cực đã được thử trước và sau",
			"Bút cảm ứng kêu hay không",
			"Lời của ca trước"
		],
		answer: 1,
		why: "DIN EN 61243-3. Bút cảm ứng và đèn báo không thay phép đo hai cực."
	},
	{
		id: "q10",
		feld: 6,
		stem: "Chuỗi phối hợp bảo vệ nào đúng?",
		choices: [
			"Iz ≤ In ≤ Ib",
			"Ib ≤ In ≤ Iz",
			"In ≤ Ib ≤ Iz",
			"Ib ≤ Iz ≤ In"
		],
		answer: 1,
		why: "Dòng làm việc không vượt thiết bị bảo vệ, và thiết bị bảo vệ không vượt dòng cho phép của dây."
	},
	{
		id: "q11",
		feld: 6,
		stem: "Ib = 18 A và Iz = 24 A. Bậc In nào dưới đây đúng chuỗi?",
		choices: [
			"16 A",
			"20 A",
			"25 A",
			"32 A"
		],
		answer: 1,
		why: "16 < 18 nên không chịu tải. 25 và 32 lớn hơn Iz. 20 thỏa 18 ≤ 20 ≤ 24."
	},
	{
		id: "q12",
		feld: 7,
		stem: "Sơ đồ thang trong IEC 61131-3 ký hiệu là gì?",
		choices: [
			"ST",
			"LD",
			"SFC",
			"FBD"
		],
		answer: 1,
		why: "LD là Ladder Diagram. ST là structured text, FBD là khối chức năng, SFC là lưu đồ bước."
	},
	{
		id: "q13",
		feld: 7,
		stem: "Vì sao nút dừng phải nằm ngoài nhánh song song Start và tiếp điểm duy trì?",
		choices: [
			"Để tiết kiệm một input",
			"Để dừng cắt được cả đường Start lẫn đường tự giữ",
			"Để contactor hút nhanh hơn",
			"Để role nhiệt không tác động"
		],
		answer: 1,
		why: "Nếu Stop chỉ nằm trên một nhánh, nhánh kia vẫn nuôi cuộn và máy không dừng."
	},
	{
		id: "q14",
		feld: 8,
		stem: "Lưới 50 Hz, số đôi cực p = 2. Tốc độ đồng bộ bằng bao nhiêu?",
		choices: [
			"3000 min⁻¹",
			"1500 min⁻¹",
			"1000 min⁻¹",
			"750 min⁻¹"
		],
		answer: 1,
		why: "ns = 60 · 50 / 2 = 1500 min⁻¹. p = 1 mới ra 3000."
	},
	{
		id: "q15",
		feld: 8,
		stem: "Role nhiệt đặt sau contactor tam giác, đo dòng pha dây quấn. Chỉnh gần giá trị nào?",
		choices: [
			"Đúng bằng In",
			"Khoảng 0,58 · In",
			"Khoảng 1,73 · In",
			"Gấp ba In"
		],
		answer: 1,
		why: "Dòng pha trong đấu tam giác bằng dòng dây chia √3, nên điểm chỉnh khoảng 0,58 · In."
	},
	{
		id: "q16",
		feld: 8,
		stem: "Động cơ 5,5 kW, 400 V, cosφ 0,85, η 0,90. Dòng dây gần bằng bao nhiêu?",
		choices: [
			"5,5 A",
			"8,0 A",
			"10,4 A",
			"18 A"
		],
		answer: 2,
		why: "I = 5500 / (√3 · 400 · 0,85 · 0,90) ≈ 10,37 A."
	},
	{
		id: "q17",
		feld: 9,
		stem: "PROFINET về lớp mạng là gì?",
		choices: [
			"Vòng dòng 4–20 mA",
			"Ethernet công nghiệp",
			"RS-232 lập trình",
			"Nguồn 24 V cảm biến"
		],
		answer: 1,
		why: "PROFINET đi trên Ethernet. PROFIBUS DP cổ điển mới là RS-485."
	},
	{
		id: "q18",
		feld: 9,
		stem: "PROFIBUS DP kinh điển dùng lớp vật lý nào?",
		choices: [
			"RS-485",
			"4–20 mA",
			"HDMI",
			"Bluetooth"
		],
		answer: 0,
		why: "RS-485, hai dây vi sai, có điện trở cuối tuyến."
	},
	{
		id: "q19",
		feld: 10,
		stem: "Wiederanlaufsperre yêu cầu điều gì sau khi nhả nấm dừng khẩn?",
		choices: [
			"Máy tự chạy tiếp chu trình cũ",
			"Máy đứng yên cho đến lệnh khởi động mới",
			"Chỉ cần bật lại aptomat",
			"Biến tần tự reset và chạy"
		],
		answer: 1,
		why: "Nhả E-Stop chỉ khôi phục điều kiện, không được là lệnh chạy."
	},
	{
		id: "q20",
		feld: 11,
		stem: "Wartung khác Instandsetzung ở điểm nào?",
		choices: [
			"Wartung chỉ làm trên phần mềm",
			"Wartung là việc theo kế hoạch khi chưa hỏng; Instandsetzung là sửa sau hỏng",
			"Hai từ đồng nghĩa",
			"Instandsetzung không cần biên bản"
		],
		answer: 1,
		why: "Tách phòng ngừa khỏi sửa chữa để lập kế hoạch phụ tùng và dừng máy."
	},
	{
		id: "q21",
		feld: 12,
		stem: "Lastenheft là tài liệu của ai?",
		choices: [
			"Bên đặt hàng, mô tả việc cần đạt",
			"Hãng contactor",
			"Bên thi công, mô tả lời giải chi tiết",
			"Cơ quan điện lực, bảng Iz"
		],
		answer: 0,
		why: "Lastenheft nói yêu cầu. Pflichtenheft mới là cam kết cách làm của bên nhận việc."
	},
	{
		id: "q22",
		feld: 12,
		stem: "Pflichtenheft dùng để làm gì?",
		choices: [
			"Thay thế tem động cơ",
			"Chốt cách thực hiện và cách kiểm tra so với Lastenheft",
			"Ghi giờ công ca đêm",
			"Thay năm quy tắc an toàn"
		],
		answer: 1,
		why: "Mỗi yêu cầu bên mua phải lần được sang cách làm và phép thử bên bán."
	},
	{
		id: "q23",
		feld: 13,
		stem: "Vì sao contactor sao và contactor tam giác phải loại trừ lẫn nhau?",
		choices: [
			"Để động cơ quay chậm mãi",
			"Đóng cùng lúc sẽ ngắn mạch nguồn",
			"Để role nhiệt không cần chỉnh",
			"Vì IEC 61131 bắt buộc có ba ngôn ngữ"
		],
		answer: 1,
		why: "Hai trạng thái đấu dây đó không được tồn tại đồng thời trên cùng đầu cực động cơ."
	},
	{
		id: "q24",
		feld: 13,
		stem: "Dòng khởi động kiểu sao so với đóng tam giác trực tiếp xấp xỉ bằng bao nhiêu?",
		choices: [
			"Gấp √3",
			"Bằng nhau",
			"Khoảng 1/3",
			"Gấp 3"
		],
		answer: 2,
		why: "Điện áp pha trên dây quấn giảm √3 lần khi đấu sao, dòng và mô-men khởi động còn khoảng 1/3."
	},
	{
		id: "q25",
		feld: 13,
		stem: "Cảm biến 4–20 mA, thang 0…5 m, dòng đo 12 mA. Mức bể bằng bao nhiêu?",
		choices: [
			"1,2 m",
			"2,5 m",
			"3,6 m",
			"4,0 m"
		],
		answer: 1,
		why: "(12 − 4) / 16 · 5 = 2,5 m. 4 mA là 0 m, không phải sự cố."
	},
	{
		id: "q26",
		feld: 8,
		stem: "P = 7,5 kW và cosφ = 0,8. Công suất biểu kiến S gần bằng bao nhiêu?",
		choices: [
			"6,0 kVA",
			"7,5 kVA",
			"9,4 kVA",
			"12 kVA"
		],
		answer: 2,
		why: "S = P / cosφ = 7,5 / 0,8 = 9,375 kVA."
	}
];
var TICKER = "NĂM QUY TẮC · FREISCHALTEN → SICHERN → SPANNUNGSFREIHEIT → ERDEN UND KURZSCHLIESSEN → ABDECKEN    ·    NGHỀ ELEKTRONIKER FÜR AUTOMATISIERUNGSTECHNIK · 13 LERNFELDER · KHOẢNG 1020 GIỜ TRƯỜNG    ·    THAM KHẢO TRỌNG SỐ IHK 40 / 30 / 12 / 12 / 6 · ĐỐI CHIẾU QUY CHẾ HIỆN HÀNH    ·    IB ≤ IN ≤ IZ · SỤT ÁP CHIẾU SÁNG 3 % · PHỤ TẢI KHÁC 5 %    ·    IEC 61131-3 · LD · FBD · ST · SFC    ·    MÔ PHỎNG KHÔNG THAY THẾ ELEKTROFACHKRAFT    ·    ";
var ctx = null;
var tap = null;
var analyser = null;
var hum = null;
var humOn = false;
function chain() {
	if (ctx && tap) return ctx;
	ctx = new (window.AudioContext || window.webkitAudioContext)();
	const highpass = ctx.createBiquadFilter();
	highpass.type = "highpass";
	highpass.frequency.value = 45;
	const comp = ctx.createDynamicsCompressor();
	comp.threshold.value = -16;
	comp.knee.value = 8;
	comp.ratio.value = 3.2;
	comp.attack.value = .004;
	comp.release.value = .14;
	const makeup = ctx.createGain();
	makeup.gain.value = 1.25;
	const limiter = ctx.createDynamicsCompressor();
	limiter.threshold.value = -2;
	limiter.knee.value = 0;
	limiter.ratio.value = 20;
	limiter.attack.value = .002;
	limiter.release.value = .08;
	analyser = ctx.createAnalyser();
	analyser.fftSize = 256;
	highpass.connect(comp);
	comp.connect(makeup);
	makeup.connect(limiter);
	limiter.connect(ctx.destination);
	limiter.connect(analyser);
	tap = highpass;
	return ctx;
}
function ensureAudio() {
	const audio = chain();
	if (audio.state === "suspended") audio.resume();
	return audio;
}
function panNode(value) {
	if (!ctx || !tap) return null;
	const panner = ctx.createStereoPanner();
	panner.pan.value = value;
	panner.connect(tap);
	return panner;
}
function metalClick() {
	const audio = ensureAudio();
	const dest = panNode(-.65);
	if (!dest) return;
	const osc = audio.createOscillator();
	const gain = audio.createGain();
	osc.type = "square";
	osc.frequency.setValueAtTime(240, audio.currentTime);
	osc.frequency.exponentialRampToValueAtTime(90, audio.currentTime + .045);
	gain.gain.setValueAtTime(.12, audio.currentTime);
	gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + .06);
	osc.connect(gain);
	gain.connect(dest);
	osc.start();
	osc.stop(audio.currentTime + .07);
}
function motorHum(on) {
	if (on === humOn) return;
	humOn = on;
	hum?.stop();
	hum = null;
	if (!on) return;
	const audio = ensureAudio();
	const dest = panNode(0);
	if (!dest) return;
	const gain = audio.createGain();
	gain.gain.value = .045;
	gain.connect(dest);
	const base = audio.createOscillator();
	base.type = "sine";
	base.frequency.value = 50;
	const harmonic = audio.createOscillator();
	harmonic.type = "triangle";
	harmonic.frequency.value = 100;
	const harmGain = audio.createGain();
	harmGain.gain.value = .35;
	base.connect(gain);
	harmonic.connect(harmGain);
	harmGain.connect(gain);
	base.start();
	harmonic.start();
	hum = { stop: () => {
		const now = audio.currentTime;
		gain.gain.cancelScheduledValues(now);
		gain.gain.setValueAtTime(gain.gain.value, now);
		gain.gain.exponentialRampToValueAtTime(.001, now + .08);
		base.stop(now + .1);
		harmonic.stop(now + .1);
	} };
}
function readMeter() {
	if (!analyser) return null;
	const data = new Uint8Array(analyser.fftSize);
	analyser.getByteTimeDomainData(data);
	return data;
}
var useEta = create()(persist((set) => ({
	lesson: 1,
	read: [],
	tab: "hoc",
	bestScore: null,
	sticker: {
		x: 72,
		y: 58
	},
	railsOpen: true,
	setTab: (tab) => set({ tab }),
	setLesson: (lesson) => set({ lesson }),
	markRead: (lesson) => set((s) => ({ read: s.read.includes(lesson) ? s.read : [...s.read, lesson] })),
	setBest: (score) => set((s) => ({ bestScore: s.bestScore == null ? score : Math.max(s.bestScore, score) })),
	setSticker: (sticker) => set({ sticker }),
	setRails: (railsOpen) => set({ railsOpen })
}), {
	name: "meister-eta-v1",
	storage: createJSONStorage(() => localStorage),
	skipHydration: true
}));
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function fmt(n, digits = 2) {
	if (!Number.isFinite(n)) return "—";
	return new Intl.NumberFormat("vi-VN", {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(n);
}
function motorCurrent(pW, uV, cos, eta) {
	const den = Math.sqrt(3) * uV * cos * eta;
	if (!(den > 0)) return NaN;
	return pW / den;
}
function voltageDrop(opts) {
	if (!(opts.kappa > 0) || !(opts.sectionMm2 > 0)) return NaN;
	return (opts.phase === 3 ? Math.sqrt(3) : 2) * opts.lengthM * opts.currentA * opts.cos / (opts.kappa * opts.sectionMm2);
}
function dropPercent(deltaU, uV) {
	if (!(uV > 0)) return NaN;
	return deltaU / uV * 100;
}
function reactiveKvar(pKw, cos1, cos2) {
	const c1 = clamp(cos1, .05, .999);
	const c2 = clamp(cos2, .05, .999);
	return pKw * (Math.tan(Math.acos(c1)) - Math.tan(Math.acos(c2)));
}
var CAP_STEPS = [
	1,
	1.5,
	2,
	2.5,
	5,
	7.5,
	10,
	12.5,
	15,
	20,
	25,
	30,
	40,
	50,
	60,
	75,
	100
];
function ceilStep(kvar) {
	if (!(kvar > 0)) return 0;
	return CAP_STEPS.find((s) => s >= kvar - 1e-9) ?? CAP_STEPS[CAP_STEPS.length - 1];
}
function syncRpm(freqHz, polePairs) {
	if (!(polePairs > 0)) return NaN;
	return 60 * freqHz / polePairs;
}
function slipRatio(sync, actual) {
	if (!(sync > 0)) return NaN;
	return (sync - actual) / sync;
}
function powerFromCurrent(uV, iA, cos, phase) {
	const c = clamp(cos, -1, 1);
	const s = (phase === 3 ? Math.sqrt(3) : 1) * uV * iA;
	return {
		sVa: s,
		pW: s * c,
		qVar: s * Math.sin(Math.acos(c))
	};
}
function apparentFromP(pW, cos) {
	const c = clamp(Math.abs(cos), .05, 1);
	return {
		sVa: pW / c,
		qVar: pW * Math.tan(Math.acos(c))
	};
}
function thermalSet(inA, place) {
	if (!(inA > 0)) return NaN;
	return place === "line" ? inA : inA / Math.sqrt(3);
}
function maToEng(ma, min, max) {
	return min + (ma - 4) / 16 * (max - min);
}
function engToMa(value, min, max) {
	const span = max - min;
	if (span === 0) return NaN;
	return 4 + (value - min) / span * 16;
}
function maToSiemens(ma) {
	return ma / 20 * 27648;
}
function transformerCurrents(u1, u2, sVa, phase) {
	const k = phase === 3 ? Math.sqrt(3) : 1;
	if (!(u1 > 0) || !(u2 > 0)) return {
		i1: NaN,
		i2: NaN,
		ratio: NaN
	};
	return {
		i1: sVa / (k * u1),
		i2: sVa / (k * u2),
		ratio: u1 / u2
	};
}
var DEVICE_STEPS = [
	6,
	10,
	13,
	16,
	20,
	25,
	32,
	40,
	50,
	63,
	80,
	100,
	125,
	160
];
function pickDevice(ib, iz) {
	if (!(ib > 0) || !(iz > 0)) return {
		inA: null,
		reason: "Thiếu Ib hoặc Iz."
	};
	if (ib > iz) return {
		inA: null,
		reason: "Ib lớn hơn Iz. Dây không chịu nổi dòng làm việc — tăng tiết diện hoặc giảm tải trước khi chọn thiết bị bảo vệ."
	};
	const inA = DEVICE_STEPS.find((n) => n >= ib && n <= iz) ?? null;
	if (inA == null) return {
		inA: null,
		reason: "Không có bậc In tiêu chuẩn nào thỏa Ib ≤ In ≤ Iz. Đổi tiết diện hoặc bậc bảo vệ."
	};
	return {
		inA,
		reason: `Chuỗi đúng: Ib ${fmt(ib, 2)} A ≤ In ${fmt(inA, 0)} A ≤ Iz ${fmt(iz, 2)} A.`
	};
}
var COLOR_DIGIT = {
	đen: 0,
	nâu: 1,
	đỏ: 2,
	cam: 3,
	vàng: 4,
	lục: 5,
	lam: 6,
	tím: 7,
	xám: 8,
	trắng: 9
};
var BANDS = Object.keys(COLOR_DIGIT);
var MULTIPLIER = {
	đen: 1,
	nâu: 10,
	đỏ: 100,
	cam: 1e3,
	vàng: 1e4,
	lục: 1e5,
	lam: 1e6,
	tím: 1e7,
	xám: 1e8,
	trắng: 1e9,
	vàngkim: .1,
	bạc: .01
};
var MULTI_BANDS = Object.keys(MULTIPLIER);
var TOLERANCE = {
	nâu: "±1 %",
	đỏ: "±2 %",
	lục: "±0,5 %",
	vàngkim: "±5 %",
	bạc: "±10 %"
};
var TOL_BANDS = Object.keys(TOLERANCE);
function resistor4(a, b, m, t) {
	const d1 = COLOR_DIGIT[a];
	const d2 = COLOR_DIGIT[b];
	const mul = MULTIPLIER[m];
	if (d1 == null || d2 == null || mul == null) return {
		ohm: NaN,
		tol: "—"
	};
	return {
		ohm: (d1 * 10 + d2) * mul,
		tol: TOLERANCE[t] ?? "—"
	};
}
function germanGrade(percent) {
	if (percent >= 92) return {
		note: "1",
		name: "sehr gut · rất tốt"
	};
	if (percent >= 81) return {
		note: "2",
		name: "gut · tốt"
	};
	if (percent >= 67) return {
		note: "3",
		name: "befriedigend · đạt khá"
	};
	if (percent >= 50) return {
		note: "4",
		name: "ausreichend · đạt"
	};
	if (percent >= 30) return {
		note: "5",
		name: "mangelhaft · chưa đạt"
	};
	return {
		note: "6",
		name: "ungenügend · kém"
	};
}
var TOOLS = [
	{
		id: "motor",
		label: "Dòng động cơ"
	},
	{
		id: "drop",
		label: "Sụt áp"
	},
	{
		id: "guard",
		label: "Ib In Iz"
	},
	{
		id: "pfc",
		label: "Bù cosφ"
	},
	{
		id: "speed",
		label: "Tốc độ"
	},
	{
		id: "power",
		label: "P Q S"
	},
	{
		id: "thermal",
		label: "Role nhiệt"
	},
	{
		id: "analog",
		label: "4–20 mA"
	},
	{
		id: "trafo",
		label: "Biến áp"
	},
	{
		id: "color",
		label: "Vòng màu"
	}
];
function Field({ label, value, onChange, step = "0.01" }) {
	const id = label.replace(/\s+/g, "-");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1 text-sm",
		htmlFor: id,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			inputMode: "decimal",
			step,
			value,
			onChange: (event) => onChange(event.target.value),
			className: "h-11 border border-line bg-ink px-3"
		})]
	});
}
function n(value) {
	const parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : NaN;
}
function CalcPanel() {
	const [tool, setTool] = (0, import_react.useState)("motor");
	const [pKw, setPKw] = (0, import_react.useState)("5.5");
	const [volt, setVolt] = (0, import_react.useState)("400");
	const [cos, setCos] = (0, import_react.useState)("0.85");
	const [eta, setEta] = (0, import_react.useState)("0.9");
	const [phase, setPhase] = (0, import_react.useState)("3");
	const [lengthM, setLengthM] = (0, import_react.useState)("40");
	const [amp, setAmp] = (0, import_react.useState)("16");
	const [section, setSection] = (0, import_react.useState)("2.5");
	const [kappa, setKappa] = (0, import_react.useState)("56");
	const [ib, setIb] = (0, import_react.useState)("18");
	const [iz, setIz] = (0, import_react.useState)("24");
	const [cos2, setCos2] = (0, import_react.useState)("0.95");
	const [freq, setFreq] = (0, import_react.useState)("50");
	const [pairs, setPairs] = (0, import_react.useState)("2");
	const [rpm, setRpm] = (0, import_react.useState)("1450");
	const [place, setPlace] = (0, import_react.useState)("line");
	const [ma, setMa] = (0, import_react.useState)("12");
	const [min, setMin] = (0, import_react.useState)("0");
	const [max, setMax] = (0, import_react.useState)("5");
	const [u1, setU1] = (0, import_react.useState)("400");
	const [u2, setU2] = (0, import_react.useState)("24");
	const [sva, setSva] = (0, import_react.useState)("250");
	const [bandA, setBandA] = (0, import_react.useState)("nâu");
	const [bandB, setBandB] = (0, import_react.useState)("đen");
	const [bandM, setBandM] = (0, import_react.useState)("đỏ");
	const [bandT, setBandT] = (0, import_react.useState)("vàngkim");
	const pW = n(pKw) * 1e3;
	const motorI = motorCurrent(pW, n(volt), n(cos), n(eta));
	const drop = voltageDrop({
		phase: phase === "3" ? 3 : 1,
		lengthM: n(lengthM),
		currentA: n(amp),
		cos: n(cos),
		kappa: n(kappa),
		sectionMm2: n(section)
	});
	const dropPct = dropPercent(drop, n(volt));
	const guard = pickDevice(n(ib), n(iz));
	const kvar = reactiveKvar(n(pKw), n(cos), n(cos2));
	const sync = syncRpm(n(freq), n(pairs));
	const slip = slipRatio(sync, n(rpm));
	const power = powerFromCurrent(n(volt), n(amp), n(cos), phase === "3" ? 3 : 1);
	const fromP = apparentFromP(pW, n(cos));
	const thermal = thermalSet(motorI, place);
	const level = maToEng(n(ma), n(min), n(max));
	const backMa = engToMa(level, n(min), n(max));
	const raw = maToSiemens(n(ma));
	const trafo = transformerCurrents(n(u1), n(u2), n(sva), phase === "3" ? 3 : 1);
	const color = resistor4(bandA, bandB, bandM, bandT);
	const limit = 3;
	const otherLimit = 5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto",
				children: TOOLS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTool(item.id),
					className: `h-11 shrink-0 rounded-konami px-3 text-sm ${tool === item.id ? "bg-gold text-ink" : "border border-line"}`,
					children: item.label
				}, item.id))
			}),
			tool === "motor" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalcCard, {
				title: "Dòng dây động cơ 3 pha",
				formula: "I = P / (√3 · U · cosφ · η)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "P (kW)",
						value: pKw,
						onChange: setPKw
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "U dây (V)",
						value: volt,
						onChange: setVolt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "cosφ",
						value: cos,
						onChange: setCos
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "η (0–1)",
						value: eta,
						onChange: setEta
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "Dòng dây",
						value: `${fmt(motorI)} A`,
						ok: Number.isFinite(motorI)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Ví dụ xưởng 5,5 kW · 400 V · 0,85 · 0,90 ra khoảng 10,38 A. Thiếu η thì không lấy cosφ làm hiệu suất."
					})
				]
			}) : null,
			tool === "drop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalcCard, {
				title: "Sụt áp tuyến dây",
				formula: phase === "3" ? "ΔU = √3 · L · I · cosφ / (κ · A)" : "ΔU = 2 · L · I · cosφ / (κ · A)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Mạch",
						value: phase,
						onChange: setPhase,
						options: [["3", "Ba pha"], ["1", "Một pha"]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "L một chiều (m)",
						value: lengthM,
						onChange: setLengthM
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "I (A)",
						value: amp,
						onChange: setAmp
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "cosφ",
						value: cos,
						onChange: setCos
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "A (mm²)",
						value: section,
						onChange: setSection
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "κ (Cu 56, Al 33)",
						value: kappa,
						onChange: setKappa
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "U danh định (V)",
						value: volt,
						onChange: setVolt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "ΔU",
						value: `${fmt(drop)} V · ${fmt(dropPct)} %`,
						ok: dropPct <= otherLimit
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"Ngưỡng hay dạy theo DIN VDE 0100-520: chiếu sáng ",
							limit,
							" %, phụ tải khác ",
							otherLimit,
							" %. Kết quả này không phải Iz của cáp."
						]
					})
				]
			}) : null,
			tool === "guard" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalcCard, {
				title: "Phối hợp bảo vệ",
				formula: "Ib ≤ In ≤ Iz",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Ib dòng làm việc (A)",
						value: ib,
						onChange: setIb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Iz tra bảng cáp (A)",
						value: iz,
						onChange: setIz
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "In chọn được",
						value: guard.inA == null ? "Không có bậc" : `${fmt(guard.inA, 0)} A`,
						ok: guard.inA != null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: guard.reason
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Iz phải lấy từ DIN VDE 0298-4 theo cách đặt cáp. App không bịa dòng chịu tải."
					})
				]
			}) : null,
			tool === "pfc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalcCard, {
				title: "Bù công suất phản kháng",
				formula: "Qc = P (tanφ1 − tanφ2)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "P (kW)",
						value: pKw,
						onChange: setPKw
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "cosφ hiện tại",
						value: cos,
						onChange: setCos
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "cosφ mục tiêu",
						value: cos2,
						onChange: setCos2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "Qc cần",
						value: `${fmt(kvar)} kvar`,
						ok: kvar > 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							"Bậc tụ xưởng kế tiếp: ",
							fmt(ceilStep(kvar), kvar >= 10 ? 0 : 1),
							" kvar."
						]
					})
				]
			}) : null,
			tool === "speed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalcCard, {
				title: "Tốc độ đồng bộ và độ trượt",
				formula: "ns = 60 · f / p    ·    s = (ns − n) / ns",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "f (Hz)",
						value: freq,
						onChange: setFreq
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "p số đôi cực",
						value: pairs,
						onChange: setPairs,
						step: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "n thực (min⁻¹)",
						value: rpm,
						onChange: setRpm,
						step: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "ns và s",
						value: `${fmt(sync, 0)} min⁻¹ · ${fmt(slip * 100)} %`,
						ok: slip >= 0 && slip < .15
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "p = 2 là động cơ 4 cực. Số cực = 2p. Trượt âm nghĩa là đang ở chế độ máy phát hoặc nhập n lớn hơn ns."
					})
				]
			}) : null,
			tool === "power" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalcCard, {
				title: "Tam giác công suất",
				formula: "P = √3 · U · I · cosφ    ·    S = P / cosφ",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "U (V)",
						value: volt,
						onChange: setVolt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "I (A)",
						value: amp,
						onChange: setAmp
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "cosφ",
						value: cos,
						onChange: setCos
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "P nếu biết trước (kW)",
						value: pKw,
						onChange: setPKw
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Pha",
						value: phase,
						onChange: setPhase,
						options: [["3", "Ba pha"], ["1", "Một pha"]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "Từ U và I",
						value: `P ${fmt(power.pW / 1e3)} kW · Q ${fmt(power.qVar / 1e3)} kvar · S ${fmt(power.sVa / 1e3)} kVA`,
						ok: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							"Từ P và cosφ: S ",
							fmt(fromP.sVa / 1e3),
							" kVA · Q ",
							fmt(fromP.qVar / 1e3),
							" kvar."
						]
					})
				]
			}) : null,
			tool === "thermal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalcCard, {
				title: "Điểm chỉnh role nhiệt",
				formula: place === "line" ? "I chỉnh ≈ In" : "I chỉnh ≈ In / √3 ≈ 0,58 · In",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "P (kW)",
						value: pKw,
						onChange: setPKw
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "U dây (V)",
						value: volt,
						onChange: setVolt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "cosφ",
						value: cos,
						onChange: setCos
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "η",
						value: eta,
						onChange: setEta
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Vị trí role",
						value: place,
						onChange: setPlace,
						options: [["line", "Đường dây nguồn"], ["winding", "Pha dây quấn sau contactor tam giác"]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "In tính được",
						value: `${fmt(motorI)} A`,
						ok: Number.isFinite(motorI)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "Điểm chỉnh",
						value: `${fmt(thermal)} A`,
						ok: Number.isFinite(thermal)
					})
				]
			}) : null,
			tool === "analog" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalcCard, {
				title: "Thang 4–20 mA",
				formula: "x = xmin + (I − 4) / 16 · (xmax − xmin)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "I (mA)",
						value: ma,
						onChange: setMa
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "xmin",
						value: min,
						onChange: setMin
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "xmax",
						value: max,
						onChange: setMax
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "Giá trị đo",
						value: fmt(level),
						ok: n(ma) >= 3.6 && n(ma) <= 21
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							"Đối chiếu dòng: ",
							fmt(backMa),
							" mA. Số nguyên kiểu 0…27648 cho 0…20 mA: ",
							fmt(raw, 0),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: n(ma) < 3.6 ? "Dưới 3,6 mA: coi là đứt dây hoặc mất nguồn vòng, không phải mức 0." : "4 mA là đầu thang, không phải sự cố."
					})
				]
			}) : null,
			tool === "trafo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalcCard, {
				title: "Dòng biến áp lý tưởng",
				formula: phase === "3" ? "I = S / (√3 · U)" : "I = S / U",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Pha",
						value: phase,
						onChange: setPhase,
						options: [["1", "Một pha"], ["3", "Ba pha"]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "U1 (V)",
						value: u1,
						onChange: setU1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "U2 (V)",
						value: u2,
						onChange: setU2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "S (VA)",
						value: sva,
						onChange: setSva
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "Tỉ số U1/U2",
						value: fmt(trafo.ratio, 3),
						ok: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "I1 và I2",
						value: `${fmt(trafo.i1)} A · ${fmt(trafo.i2)} A`,
						ok: true
					})
				]
			}) : null,
			tool === "color" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalcCard, {
				title: "Điện trở 4 vòng",
				formula: "R = (10·a + b) · hệ số",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Vòng 1",
						value: bandA,
						onChange: setBandA,
						options: BANDS.map((item) => [item, item])
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Vòng 2",
						value: bandB,
						onChange: setBandB,
						options: BANDS.map((item) => [item, item])
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Nhân",
						value: bandM,
						onChange: setBandM,
						options: MULTI_BANDS.map((item) => [item, item === "vàngkim" ? "vàng kim" : item])
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Dung sai",
						value: bandT,
						onChange: setBandT,
						options: TOL_BANDS.map((item) => [item, item === "vàngkim" ? "vàng kim" : item])
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
						label: "R",
						value: `${fmt(color.ohm, color.ohm >= 100 ? 0 : 2)} Ω · ${color.tol}`,
						ok: Number.isFinite(color.ohm)
					})
				]
			}) : null
		]
	});
}
function CalcCard({ title, formula, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3 border border-line bg-ink p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl leading-none",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-gold",
				children: formula
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "calc-grid",
				children
			})
		]
	});
}
function Result({ label, value, ok }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: `col-span-2 border px-3 py-2 ${ok ? "border-gold text-paper" : "border-bad text-bad"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl",
			children: value
		})]
	});
}
function Select({ label, value, onChange, options }) {
	const id = `sel-${label}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "span-2 flex flex-col gap-1 text-sm",
		htmlFor: id,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			id,
			value,
			onChange: (event) => onChange(event.target.value),
			className: "h-11 border border-line bg-ink px-2",
			children: options.map(([key, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: key,
				children: text
			}, key))
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var readCuLive = createServerFn({ method: "GET" }).handler(createSsrRpc("18568ba13a4ce8ac837f7c8689c197deffdd566141c3b16e59b7030af3ed02db"));
var PI = Math.PI;
function INT(d) {
	return Math.floor(d);
}
function jdFromDate(dd, mm, yy) {
	const a = INT((14 - mm) / 12);
	const y = yy + 4800 - a;
	const m = mm + 12 * a - 3;
	let jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
	if (jd < 2299161) jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
	return jd;
}
function jdToDate(jd) {
	let a;
	let b;
	let c;
	if (jd > 2299160) {
		a = jd + 32044;
		b = INT((4 * a + 3) / 146097);
		c = a - INT(b * 146097 / 4);
	} else {
		b = 0;
		c = jd + 32082;
	}
	const d = INT((4 * c + 3) / 1461);
	const e = c - INT(1461 * d / 4);
	const m = INT((5 * e + 2) / 153);
	return {
		day: e - INT((153 * m + 2) / 5) + 1,
		month: m + 3 - 12 * INT(m / 10),
		year: b * 100 + d - 4800 + INT(m / 10)
	};
}
function NewMoon(k) {
	const T = k / 1236.85;
	const T2 = T * T;
	const T3 = T2 * T;
	const dr = PI / 180;
	let Jd1 = 2415020.75933 + 29.53058868 * k + 1178e-7 * T2 - 155e-9 * T3;
	Jd1 += 33e-5 * Math.sin((166.56 + 132.87 * T - .009173 * T2) * dr);
	const M = 359.2242 + 29.10535608 * k - 333e-7 * T2 - 347e-8 * T3;
	const Mpr = 306.0253 + 385.81691806 * k + .0107306 * T2 + 1236e-8 * T3;
	const F = 21.2964 + 390.67050646 * k - .0016528 * T2 - 239e-8 * T3;
	let C1 = (.1734 - 393e-6 * T) * Math.sin(M * dr) + .0021 * Math.sin(2 * dr * M);
	C1 = C1 - .4068 * Math.sin(Mpr * dr) + .0161 * Math.sin(dr * 2 * Mpr);
	C1 = C1 - 4e-4 * Math.sin(dr * 3 * Mpr);
	C1 = C1 + .0104 * Math.sin(dr * 2 * F) - .0051 * Math.sin(dr * (M + Mpr));
	C1 = C1 - .0074 * Math.sin(dr * (M - Mpr)) + 4e-4 * Math.sin(dr * (2 * F + M));
	C1 = C1 - 4e-4 * Math.sin(dr * (2 * F - M)) - 6e-4 * Math.sin(dr * (2 * F + Mpr));
	C1 = C1 + .001 * Math.sin(dr * (2 * F - Mpr)) + 5e-4 * Math.sin(dr * (2 * Mpr + M));
	let deltat;
	if (T < -11) deltat = .001 + 839e-6 * T + 2261e-7 * T2 - 845e-8 * T3 - 81e-9 * T * T3;
	else deltat = -278e-6 + 265e-6 * T + 262e-6 * T2;
	return Jd1 + C1 - deltat;
}
function SunLongitude(jdn) {
	const T = (jdn - 2451545) / 36525;
	const T2 = T * T;
	const dr = PI / 180;
	const M = 357.5291 + 35999.0503 * T - 1559e-7 * T2 - 48e-8 * T * T2;
	const L0 = 280.46645 + 36000.76983 * T + 3032e-7 * T2;
	let DL = (1.9146 - .004817 * T - 14e-6 * T2) * Math.sin(dr * M);
	DL = DL + (.019993 - 101e-6 * T) * Math.sin(dr * 2 * M) + 29e-5 * Math.sin(dr * 3 * M);
	let L = (L0 + DL) * dr;
	L = L - PI * 2 * INT(L / (PI * 2));
	return L;
}
function getSunLongitude(dayNumber, timeZone) {
	return INT(SunLongitude(dayNumber - .5 - timeZone / 24) / PI * 6);
}
function getNewMoonDay(k, timeZone) {
	return INT(NewMoon(k) + .5 + timeZone / 24);
}
function getLunarMonth11(yy, timeZone) {
	const k = INT((jdFromDate(31, 12, yy) - 2415021) / 29.530588853);
	let nm = getNewMoonDay(k, timeZone);
	if (getSunLongitude(nm, timeZone) >= 9) nm = getNewMoonDay(k - 1, timeZone);
	return nm;
}
function getLeapMonthOffset(a11, timeZone) {
	const k = INT((a11 - 2415021.076998695) / 29.530588853 + .5);
	let last = 0;
	let i = 1;
	let arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
	do {
		last = arc;
		i += 1;
		arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
	} while (arc !== last && i < 14);
	return i - 1;
}
function solarToLunar(dd, mm, yy, timeZone = 7) {
	const dayNumber = jdFromDate(dd, mm, yy);
	const k = INT((dayNumber - 2415021.076998695) / 29.530588853);
	let monthStart = getNewMoonDay(k + 1, timeZone);
	if (monthStart > dayNumber) monthStart = getNewMoonDay(k, timeZone);
	let a11 = getLunarMonth11(yy, timeZone);
	let b11 = a11;
	let lunarYear;
	if (a11 >= monthStart) {
		lunarYear = yy;
		a11 = getLunarMonth11(yy - 1, timeZone);
	} else {
		lunarYear = yy + 1;
		b11 = getLunarMonth11(yy + 1, timeZone);
	}
	const lunarDay = dayNumber - monthStart + 1;
	const diff = INT((monthStart - a11) / 29);
	let lunarLeap = false;
	let lunarMonth = diff + 11;
	if (b11 - a11 > 365) {
		const leapMonthDiff = getLeapMonthOffset(a11, timeZone);
		if (diff >= leapMonthDiff) {
			lunarMonth = diff + 10;
			if (diff === leapMonthDiff) lunarLeap = true;
		}
	}
	if (lunarMonth > 12) lunarMonth -= 12;
	if (lunarMonth >= 11 && diff < 4) lunarYear -= 1;
	return {
		day: lunarDay,
		month: lunarMonth,
		year: lunarYear,
		leap: lunarLeap
	};
}
function lunarToSolar(lunarDay, lunarMonth, lunarYear, lunarLeap, timeZone = 7) {
	let a11;
	let b11;
	if (lunarMonth < 11) {
		a11 = getLunarMonth11(lunarYear - 1, timeZone);
		b11 = getLunarMonth11(lunarYear, timeZone);
	} else {
		a11 = getLunarMonth11(lunarYear, timeZone);
		b11 = getLunarMonth11(lunarYear + 1, timeZone);
	}
	const k = INT(.5 + (a11 - 2415021.076998695) / 29.530588853);
	let off = lunarMonth - 11;
	if (off < 0) off += 12;
	if (b11 - a11 > 365) {
		const leapOff = getLeapMonthOffset(a11, timeZone);
		let leapMonth = leapOff - 2;
		if (leapMonth < 0) leapMonth += 12;
		if (lunarLeap && lunarMonth !== leapMonth) return null;
		if (lunarLeap || off >= leapOff) off += 1;
	}
	return jdToDate(getNewMoonDay(k + off, timeZone) + lunarDay - 1);
}
var CAN = [
	"Giáp",
	"Ất",
	"Bính",
	"Đinh",
	"Mậu",
	"Kỷ",
	"Canh",
	"Tân",
	"Nhâm",
	"Quý"
];
var CHI = [
	"Tý",
	"Sửu",
	"Dần",
	"Mão",
	"Thìn",
	"Tỵ",
	"Ngọ",
	"Mùi",
	"Thân",
	"Dậu",
	"Tuất",
	"Hợi"
];
function canChiYear(lunarYear) {
	return `${CAN[(lunarYear + 6) % 10]} ${CHI[(lunarYear + 8) % 12]}`;
}
var WEEKDAYS = [
	"Chủ nhật",
	"Thứ hai",
	"Thứ ba",
	"Thứ tư",
	"Thứ năm",
	"Thứ sáu",
	"Thứ bảy"
];
function weekdayVi(date) {
	return WEEKDAYS[date.getDay()] ?? "";
}
function startOfDay(d) {
	return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}
function nextCountdown(now) {
	const year = now.getFullYear();
	const lunar = solarToLunar(now.getDate(), now.getMonth() + 1, year);
	const candidates = [];
	for (const y of [lunar.year, lunar.year + 1]) {
		const tet = lunarToSolar(1, 1, y, false);
		const gio = lunarToSolar(10, 3, y, false);
		if (tet) candidates.push({
			label: "Tết Nguyên Đán",
			at: new Date(tet.year, tet.month - 1, tet.day)
		});
		if (gio) candidates.push({
			label: "Giỗ Tổ Hùng Vương",
			at: new Date(gio.year, gio.month - 1, gio.day)
		});
	}
	for (const y of [year, year + 1]) {
		candidates.push({
			label: "Quốc khánh",
			at: new Date(y, 8, 2)
		});
		candidates.push({
			label: "Nhà giáo Việt Nam",
			at: new Date(y, 10, 20)
		});
		candidates.push({
			label: "Tết Dương lịch",
			at: new Date(y + 1, 0, 1)
		});
	}
	const today = startOfDay(now);
	return candidates.map((c) => ({
		...c,
		days: Math.round((startOfDay(c.at) - today) / 864e5)
	})).filter((c) => c.days >= 0).sort((a, b) => a.days - b.days)[0] ?? null;
}
function snapshot(now, weather, fx) {
	const lunar = solarToLunar(now.getDate(), now.getMonth() + 1, now.getFullYear());
	const countdown = nextCountdown(now);
	return {
		clock: `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`,
		solar: `${weekdayVi(now)} ${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")}.${now.getFullYear()}`,
		lunar: `${lunar.day} THÁNG ${lunar.month}${lunar.leap ? " NHUẬN" : ""} · ${canChiYear(lunar.year).toUpperCase()}`,
		next: countdown ? countdown.days === 0 ? `${countdown.label.toUpperCase()} HÔM NAY` : `${countdown.label.toUpperCase()} CÒN ${countdown.days} NGÀY` : "—",
		weather,
		fx
	};
}
function CuDock({ onSupport }) {
	const [live, setLive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let weather = "—";
		let fx = "—";
		const paint = () => setLive(snapshot(/* @__PURE__ */ new Date(), weather, fx));
		paint();
		const clock = window.setInterval(paint, 3e4);
		readCuLive().then((data) => {
			if (data.weather) weather = data.weather;
			if (data.fx) fx = data.fx;
			paint();
		}).catch(() => void 0);
		return () => window.clearInterval(clock);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gold-thread flex h-full min-h-0 flex-col justify-center bg-navy/80 px-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden text-gold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "ticker-track font-display text-sm tracking-widest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: TICKER }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: TICKER })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-center justify-between gap-2 text-xs uppercase tracking-wide text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "min-w-0 truncate",
					children: live ? `${live.solar} · ${live.clock}` : "—"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-10 shrink-0 rounded-konami border border-gold px-2 text-gold",
					onClick: onSupport,
					children: "Ủng hộ"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-xs uppercase tracking-wide text-gold",
				children: live ? `${live.lunar} · ${live.next}` : "—"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-xs uppercase text-muted",
				children: live ? `${live.weather} · ${live.fx}` : "—"
			})
		]
	});
}
function drawPaper() {
	const pool = [...QUESTIONS];
	for (let i = pool.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = pool[i];
		const b = pool[j];
		if (a && b) {
			pool[i] = b;
			pool[j] = a;
		}
	}
	return pool.slice(0, 8);
}
function ExamPanel() {
	const best = useEta((s) => s.bestScore);
	const setBest = useEta((s) => s.setBest);
	const [paper, setPaper] = (0, import_react.useState)(null);
	const [picks, setPicks] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(false);
	const score = (0, import_react.useMemo)(() => {
		if (!paper) return 0;
		const hit = paper.filter((item) => picks[item.id] === item.answer).length;
		return Math.round(hit / paper.length * 100);
	}, [paper, picks]);
	function begin() {
		setPaper(drawPaper());
		setPicks({});
		setDone(false);
	}
	function finish() {
		setDone(true);
		setBest(score);
	}
	if (!paper) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl leading-none",
				children: "Phòng thi xưởng"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: "Tám câu trắc nghiệm rút từ 13 Lernfeld. Thang điểm 100 kiểu trường nghề Đức: 92 rất tốt, 81 tốt, 67 khá, 50 đạt."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Điểm cao nhất trên máy này: ",
					best == null ? "chưa có" : `${best} · ${germanGrade(best).name}`,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "h-12 rounded-konami bg-gold font-semibold text-ink",
				onClick: begin,
				children: "Vào thi"
			})
		]
	});
	const grade = germanGrade(score);
	const answered = paper.every((item) => picks[item.id] != null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl",
					children: "Đề 8 câu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 rounded-konami border border-line px-3",
					onClick: begin,
					children: "Đề khác"
				})]
			}),
			paper.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "border border-line p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
						className: "px-1 text-sm text-gold",
						children: [
							"Câu ",
							index + 1,
							" · LF",
							item.feld
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm",
						children: item.stem
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-2",
						children: item.choices.map((choice, choiceIndex) => {
							const selected = picks[item.id] === choiceIndex;
							const reveal = done && choiceIndex === item.answer;
							const wrong = done && selected && choiceIndex !== item.answer;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: `flex min-h-11 items-center gap-2 border px-2 ${reveal ? "border-gold" : ""} ${wrong ? "border-bad" : "border-line"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: item.id,
									checked: selected,
									disabled: done,
									onChange: () => setPicks((prev) => ({
										...prev,
										[item.id]: choiceIndex
									}))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: choice
								})]
							}, choice);
						})
					}),
					done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: item.why
					}) : null
				]
			}, item.id)),
			done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "border border-gold p-3 font-display text-2xl text-gold",
				children: [
					score,
					"/100 · Note ",
					grade.note,
					" · ",
					grade.name
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: !answered,
				className: "h-12 rounded-konami bg-gold font-semibold text-ink disabled:opacity-40",
				onClick: finish,
				children: "Nộp bài"
			})
		]
	});
}
function LearnPanel() {
	const lesson = useEta((s) => s.lesson);
	const setLesson = useEta((s) => s.setLesson);
	const setTab = useEta((s) => s.setTab);
	const markRead = useEta((s) => s.markRead);
	const read = useEta((s) => s.read);
	const [view, setView] = (0, import_react.useState)("bai");
	const [query, setQuery] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)(0);
	const [fault, setFault] = (0, import_react.useState)("");
	const feld = FELDER[lesson - 1] ?? FELDER[0];
	const words = GLOSSARY.filter((item) => {
		return `${item.de} ${item.vi} ${item.note}`.toLowerCase().includes(query.trim().toLowerCase());
	});
	function tapSafety(index) {
		if (index === step) {
			const next = step + 1;
			setStep(next);
			setFault("");
			if (next === SAFETY.length) markRead(5);
			return;
		}
		setFault("Sai thứ tự. Năm quy tắc không được đảo. Làm lại từ bước 1.");
		setStep(0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto",
				children: [
					["bai", "Bài"],
					["tu", "Thuật ngữ"],
					["tieu", "Tiêu chuẩn"],
					["an", "An toàn"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setView(id),
					className: `h-10 shrink-0 rounded-konami px-3 text-sm ${view === id ? "bg-gold text-ink" : "border border-line"}`,
					children: label
				}, id))
			}),
			view === "bai" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto pb-1",
				children: FELDER.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setLesson(item.id),
					className: `h-11 min-w-11 shrink-0 rounded-konami px-2 text-sm font-semibold ${item.id === feld.id ? "bg-gold text-ink" : "border border-line"}`,
					children: [
						"LF",
						item.id,
						read.includes(item.id) ? " ·" : ""
					]
				}, item.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-wider text-gold",
						children: [
							"Năm ",
							feld.year,
							" · ",
							feld.hours,
							" giờ · ",
							feld.exam
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-none text-paper",
						children: feld.vi
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: feld.de
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: feld.goal
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex list-disc flex-col gap-1 pl-4 text-sm",
						children: feld.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-line bg-ink p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg text-gold",
								children: feld.exampleTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: feld.example
							}),
							feld.formula ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-gold",
								children: feld.formula
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "Việc xưởng. "
						}), feld.workshop]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: ["Tiêu chuẩn: ", feld.norms.join(" · ")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 rounded-konami bg-gold px-3 font-semibold text-ink",
								onClick: () => markRead(feld.id),
								children: read.includes(feld.id) ? "Đã đánh dấu" : "Đánh dấu đã học"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 rounded-konami border border-line px-3",
								onClick: () => setTab("tinh"),
								children: "Mở máy tính"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 rounded-konami border border-line px-3",
								onClick: () => setTab("mo"),
								children: "Mở mô phỏng"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Bài giảng đào tạo. Không thay Elektrofachkraft, phép đo VDE hay sơ đồ tủ thật."
					})
				]
			})] }) : null,
			view === "tu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm text-muted",
						htmlFor: "gloss",
						children: "Tìm tiếng Đức hoặc tiếng Việt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "gloss",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						className: "h-11 border border-line bg-ink px-3",
						placeholder: "Öffner, tự giữ, Lastenheft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-2",
						children: words.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border border-line p-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-gold",
									children: item.de
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: item.vi
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: item.note
								})
							]
						}, item.de))
					})
				]
			}) : null,
			view === "tieu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col gap-2",
				children: [NORMS.map((norm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border border-line p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-gold",
						children: norm.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: norm.scope
					})]
				}, norm.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-xs text-muted",
					children: "Trọng số tham khảo kỳ thi kéo dài: Teil 1 thực hành 40 %, Teil 2 thực hành 30 %, Systementwurf 12 %, Funktions- und Systemanalyse 12 %, Wirtschafts- und Sozialkunde 6 %. Số phút và trọng số lấy theo quy chế IHK đang áp, không lấy theo trí nhớ một năm cũ."
				})]
			}) : null,
			view === "an" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "Bấm đúng năm bước theo thứ tự DIN VDE 0105-100. Sai là quay về bước 1."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "flex flex-col gap-2",
						children: SAFETY.map((item, index) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => tapSafety(index),
								className: `flex min-h-11 w-full items-center gap-3 border px-3 py-2 text-left ${index < step ? "border-gold bg-navy text-paper" : "border-line"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-gold",
									children: index + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-semibold",
									children: item.de
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-muted",
									children: item.vi
								})] })]
							}) }, item.de);
						})
					}),
					fault ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-bad",
						children: fault
					}) : null,
					step === SAFETY.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ok",
						children: "Đủ năm bước, đúng thứ tự. Lernfeld 5 được đánh dấu đã học."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Đang ở bước ",
							step + 1,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 rounded-konami border border-line",
						onClick: () => {
							setStep(0);
							setFault("");
						},
						children: "Làm lại"
					})
				]
			}) : null
		]
	});
}
var SIMS = [
	{
		id: "hold",
		label: "Tự giữ"
	},
	{
		id: "star",
		label: "Sao–tam giác"
	},
	{
		id: "sfc",
		label: "Băng tải"
	},
	{
		id: "ma",
		label: "4–20 mA"
	},
	{
		id: "safe",
		label: "An toàn"
	}
];
function Btn({ label, pressed, onDown, onUp }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: `h-14 min-w-16 rounded-konami border px-3 font-display text-lg tracking-wide ${pressed ? "border-gold bg-gold text-ink" : "border-gold bg-navy text-paper"}`,
		onPointerDown: (event) => {
			event.preventDefault();
			event.currentTarget.setPointerCapture(event.pointerId);
			onDown();
		},
		onPointerUp: () => onUp?.(),
		onPointerCancel: () => onUp?.(),
		children: label
	});
}
function SimPanel() {
	const [sim, setSim] = (0, import_react.useState)("hold");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto",
				children: SIMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSim(item.id),
					className: `h-11 shrink-0 rounded-konami px-3 text-sm ${sim === item.id ? "bg-gold text-ink" : "border border-line"}`,
					children: item.label
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "NGAME trong xưởng mô phỏng: nút bo tròn, viền vàng, bấm là có tiếng contactor thật trên mạch âm thanh. Không phải tủ điện."
			}),
			sim === "hold" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoldSim, {}) : null,
			sim === "star" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarSim, {}) : null,
			sim === "sfc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SfcSim, {}) : null,
			sim === "ma" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaSim, {}) : null,
			sim === "safe" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeSim, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {})
		]
	});
}
function Meter() {
	const canvas = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let frame = 0;
		const draw = () => {
			const node = canvas.current;
			const data = readMeter();
			if (node && data) {
				const ctx = node.getContext("2d");
				if (ctx) {
					const w = node.width;
					const h = node.height;
					ctx.clearRect(0, 0, w, h);
					ctx.strokeStyle = getComputedStyle(node).color || "#e8b00f";
					ctx.lineWidth = 2;
					ctx.beginPath();
					const step = w / data.length;
					for (let i = 0; i < data.length; i += 1) {
						const y = (data[i] ?? 128) / 255 * h;
						if (i === 0) ctx.moveTo(0, y);
						else ctx.lineTo(i * step, y);
					}
					ctx.stroke();
				}
			}
			frame = requestAnimationFrame(draw);
		};
		frame = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(frame);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvas,
		width: 360,
		height: 48,
		className: "meter border border-line bg-ink text-gold",
		"aria-label": "Sóng tiếng xưởng"
	});
}
function HoldSim() {
	const q1 = (0, import_react.useRef)(true);
	const start = (0, import_react.useRef)(false);
	const stop = (0, import_react.useRef)(false);
	const seal = (0, import_react.useRef)(false);
	const [on, setOn] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)(true);
	const [holdingStart, setHoldingStart] = (0, import_react.useState)(false);
	const [holdingStop, setHoldingStop] = (0, import_react.useState)(false);
	function commit() {
		const prev = seal.current;
		const next = q1.current && !stop.current && (start.current || prev);
		if (next !== prev) metalClick();
		seal.current = next;
		setOn(next);
		motorHum(next);
	}
	const hotRail = q;
	const pastStop = q && !holdingStop;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3 border border-line bg-ink p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Selbsthaltung · tự giữ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-sim-status": "",
				className: "text-sm text-gold",
				children: on ? "K1 tự giữ. Động cơ M1 chạy. Bấm S0 để nhả." : q ? "Tủ có điện. Bấm S1 để hút contactor." : "Q1 đang cắt. Cuộn không được hút."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 340 190",
				className: "w-full border border-line bg-panel",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "28",
						y1: "16",
						x2: "28",
						y2: "176",
						className: hotRail ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "312",
						y1: "16",
						x2: "312",
						y2: "176",
						className: on ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "28",
						y1: "58",
						x2: "78",
						y2: "58",
						className: pastStop ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "78",
						y: "42",
						width: "36",
						height: "32",
						className: holdingStop ? "stroke-bad" : "stroke-paper",
						fill: "none",
						strokeWidth: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "86",
						y: "62",
						className: "wire-label",
						children: "S0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "114",
						y1: "58",
						x2: "150",
						y2: "58",
						className: pastStop ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "150",
						y1: "40",
						x2: "150",
						y2: "86",
						className: pastStop ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "150",
						y1: "40",
						x2: "214",
						y2: "40",
						className: pastStop && holdingStart ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "150",
						y1: "86",
						x2: "214",
						y2: "86",
						className: pastStop && on ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "168",
						y: "36",
						className: "wire-dim",
						children: "S1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "168",
						y: "104",
						className: "wire-dim",
						children: "K1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "214",
						y1: "40",
						x2: "214",
						y2: "86",
						className: pastStop && (holdingStart || on) ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "214",
						y1: "58",
						x2: "250",
						y2: "58",
						className: on ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "268",
						cy: "58",
						r: "16",
						className: on ? "stroke-gold" : "stroke-line",
						fill: "none",
						strokeWidth: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "258",
						y: "62",
						className: "wire-hot",
						children: "K1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "284",
						y1: "58",
						x2: "312",
						y2: "58",
						className: on ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "28",
						y1: "140",
						x2: "120",
						y2: "140",
						className: on ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "120",
						y: "122",
						width: "70",
						height: "36",
						className: on ? "stroke-gold" : "stroke-line",
						fill: "none",
						strokeWidth: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "142",
						y: "144",
						className: "wire-label",
						children: "M1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "190",
						y1: "140",
						x2: "312",
						y2: "140",
						className: on ? "stroke-gold" : "stroke-line",
						strokeWidth: "3"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						label: q ? "Q1 CẮT" : "Q1 ĐÓNG",
						onDown: () => {
							q1.current = !q1.current;
							setQ(q1.current);
							commit();
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						label: "S1",
						pressed: holdingStart,
						onDown: () => {
							start.current = true;
							setHoldingStart(true);
							commit();
						},
						onUp: () => {
							start.current = false;
							setHoldingStart(false);
							commit();
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						label: "S0",
						pressed: holdingStop,
						onDown: () => {
							stop.current = true;
							setHoldingStop(true);
							commit();
						},
						onUp: () => {
							stop.current = false;
							setHoldingStop(false);
							commit();
						}
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "S0 là Öffner: đang nhấn thì mạch hở. S1 là Schließer. Thả S1 mà M1 còn chạy là nhờ tiếp điểm duy trì."
			})
		]
	});
}
function StarSim() {
	const [phase, setPhase] = (0, import_react.useState)("off");
	const timers = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => () => timers.current.forEach((id) => window.clearTimeout(id)), []);
	function clear() {
		timers.current.forEach((id) => window.clearTimeout(id));
		timers.current = [];
	}
	function stopAll() {
		clear();
		setPhase("off");
		metalClick();
		motorHum(false);
	}
	function startSeq() {
		clear();
		metalClick();
		motorHum(true);
		setPhase("star");
		const gap = window.setTimeout(() => {
			metalClick();
			setPhase("gap");
		}, 1600);
		const delta = window.setTimeout(() => {
			metalClick();
			setPhase("delta");
		}, 1900);
		timers.current = [gap, delta];
	}
	const k1 = phase !== "off";
	const k2 = phase === "star";
	const k3 = phase === "delta";
	const fault = k2 && k3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3 border border-line bg-ink p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Stern–Dreieck"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				"data-sim-status": "",
				className: "text-sm text-gold",
				children: [
					phase === "off" ? "Đứng. Bấm S1 để vào sao." : null,
					phase === "star" ? "K1 và K2 đóng. Dòng khởi động khoảng 1/3." : null,
					phase === "gap" ? "K2 đã nhả. Chờ tắt hồ quang trước khi đóng K3." : null,
					phase === "delta" ? "K1 và K3 đóng. Động cơ ở tam giác." : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2 text-center text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lamp, {
						on: k1,
						name: "K1 lưới"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lamp, {
						on: k2,
						name: "K2 sao"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lamp, {
						on: k3,
						name: "K3 tam giác"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: fault ? "text-bad" : "text-ok",
				children: fault ? "NGẮN MẠCH — cấm K2 và K3 cùng đóng." : "Liên động giữ K2 và K3 loại trừ nhau."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					label: "S1",
					onDown: startSeq
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					label: "S0",
					onDown: stopAll
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Role nhiệt trên đường dây chỉnh theo In. Nếu đo dòng pha dây quấn phía tam giác thì chỉnh khoảng 0,58 In."
			})
		]
	});
}
function Lamp({ on, name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: `border px-2 py-3 ${on ? "border-gold text-gold" : "border-line text-muted"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-display text-xl",
			children: on ? "ĐÓNG" : "MỞ"
		}), name]
	});
}
var SFC = [
	"Nghỉ",
	"B1 có phôi",
	"M1 chạy",
	"B2 cuối băng",
	"Xi lanh ra",
	"Xi lanh về"
];
function SfcSim() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [auto, setAuto] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!auto) return;
		const id = window.setInterval(() => setStep((value) => (value + 1) % SFC.length), 900);
		return () => window.clearInterval(id);
	}, [auto]);
	(0, import_react.useEffect)(() => {
		motorHum(step === 2 || step === 3);
		return () => motorHum(false);
	}, [step]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3 border border-line bg-ink p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "SFC băng tải"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				"data-sim-status": "",
				className: "text-sm text-gold",
				children: [
					"Bước ",
					step + 1,
					": ",
					SFC[step]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-1",
				children: SFC.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `border px-3 py-2 text-sm ${index === step ? "border-gold text-gold" : "border-line text-muted"}`,
					children: [
						index + 1,
						". ",
						label
					]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						label: "BƯỚC",
						onDown: () => {
							metalClick();
							setStep((value) => (value + 1) % SFC.length);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						label: auto ? "DỪNG" : "TỰ CHẠY",
						pressed: auto,
						onDown: () => setAuto((value) => !value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						label: "RESET",
						onDown: () => {
							setAuto(false);
							setStep(0);
							metalClick();
						}
					})
				]
			})
		]
	});
}
function MaSim() {
	const [pct, setPct] = (0, import_react.useState)(50);
	const [broken, setBroken] = (0, import_react.useState)(false);
	const ma = broken ? 0 : 4 + 16 * (pct / 100);
	const meters = pct / 100 * 5;
	const raw = ma / 20 * 27648;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3 border border-line bg-ink p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Vòng 4–20 mA"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-sim-status": "",
				className: "text-sm text-gold",
				children: broken ? "Dòng 0 mA. Dưới 3,6 mA: sự cố vòng đo, không phải bể cạn." : `Mức ${meters.toFixed(2).replace(".", ",")} m · ${ma.toFixed(2).replace(".", ",")} mA · raw ${Math.round(raw)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-sm text-muted",
				htmlFor: "level",
				children: "Mức bể 0…5 m"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "level",
				type: "range",
				min: 0,
				max: 100,
				value: pct,
				onChange: (event) => setPct(Number(event.target.value)),
				className: "h-11"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
				label: broken ? "NỐI LẠI DÂY" : "ĐỨT DÂY",
				pressed: broken,
				onDown: () => {
					metalClick();
					setBroken((value) => !value);
				}
			})
		]
	});
}
function SafeSim() {
	const [estop, setEstop] = (0, import_react.useState)(true);
	const [guard, setGuard] = (0, import_react.useState)(true);
	const [ch2, setCh2] = (0, import_react.useState)(true);
	const [armed, setArmed] = (0, import_react.useState)(false);
	const healthy = estop && guard && ch2;
	const output = healthy && armed;
	function trip(setter, value) {
		metalClick();
		setter(value);
		if (!value) setArmed(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3 border border-line bg-ink p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Hai kênh và khóa chạy lại"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-sim-status": "",
				className: "text-sm text-gold",
				children: output ? "Ra an toàn đóng. Máy được phép nhận lệnh chạy." : healthy ? "Mạch lành nhưng chưa reset. Không tự chạy." : "Mạch hở. Ra phải tắt ngay."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lamp, {
						on: estop,
						name: "E-Stop nhả"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lamp, {
						on: guard,
						name: "Cửa đóng"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lamp, {
						on: ch2,
						name: "Kênh 2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lamp, {
						on: output,
						name: "Ra K_A"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						label: estop ? "ĐẤM E-STOP" : "NHẢ NẤM",
						onDown: () => trip(setEstop, !estop)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						label: guard ? "MỞ CỬA" : "ĐÓNG CỬA",
						onDown: () => trip(setGuard, !guard)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						label: ch2 ? "HỞ KÊNH 2" : "KÊNH 2 KÍN",
						onDown: () => trip(setCh2, !ch2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						label: "RESET",
						onDown: () => {
							metalClick();
							if (healthy) setArmed(true);
						}
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Wiederanlaufsperre: hết sự cố chưa đủ. Phải bấm Reset khi mạch đã lành. App không tính Performance Level thay phần mềm SISTEMA."
			})
		]
	});
}
var askMeister = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input;
	const question = String(raw?.question ?? "").trim();
	const context = String(raw?.context ?? "").trim();
	if (question.length < 2 || question.length > 1200) throw new Error("Câu hỏi cần từ 2 đến 1200 ký tự.");
	return {
		question,
		context: context.slice(0, 6e3)
	};
}).handler(createSsrRpc("5415880355680c0ec138bf1ba695fbcfaf1ffb419af91630649f4f36ccd52ccc"));
var RULES = [
	{
		keys: [
			"sụt",
			"sut ap",
			"cáp",
			"cap",
			"mm2",
			"mm²",
			"tiết diện"
		],
		feld: 2,
		extra: "Công thức 3 pha: ΔU = √3 · L · I · cosφ / (κ · A), L một chiều (m), κ đồng 56. Phần trăm = ΔU / U · 100. Ngưỡng hay dạy: 3 % chiếu sáng, 5 % tải khác theo thông lệ DIN VDE 0100-520. Iz không được bịa — tra DIN VDE 0298-4."
	},
	{
		keys: [
			"bảo vệ",
			"bao ve",
			"iz",
			"aptomat",
			"mcb",
			"cầu chì"
		],
		feld: 6,
		extra: "Chuỗi Ib ≤ In ≤ Iz. Nếu Ib > Iz thì tăng tiết diện hoặc giảm tải trước. Bậc In thường gặp: 6, 10, 13, 16, 20, 25, 32, 40, 50, 63."
	},
	{
		keys: [
			"sao-tam",
			"sao tam",
			"stern",
			"dreieck",
			"tam giac",
			"0,58",
			"0.58",
			"lien dong"
		],
		feld: 13,
		extra: "K2 sao và K3 tam giác loại trừ nhau, nếu không sẽ ngắn mạch. Dòng khởi động sao khoảng 1/3. Role nhiệt trên dây nguồn chỉnh ≈ In. Role đo dòng pha dây quấn chỉnh ≈ 0,58 · In."
	},
	{
		keys: [
			"role nhiệt",
			"role nhiet",
			"quá tải",
			"qua tai",
			"motorschutz"
		],
		feld: 8,
		extra: "Điểm chỉnh phụ thuộc chỗ đặt role, không phải một con số duy nhất. Xem vị trí so với contactor tam giác."
	},
	{
		keys: [
			"tự giữ",
			"tu giu",
			"selbst",
			"contactor",
			"nút dừng",
			"nut dung",
			"ladder",
			"sps",
			"plc"
		],
		feld: 3,
		extra: "K1 = Q1 ∧ Stop_kín ∧ (Start ∨ K1). Stop là Öffner nối tiếp. Start là Schließer song song tiếp điểm duy trì."
	},
	{
		keys: [
			"4-20",
			"4–20",
			"cảm biến",
			"cam bien",
			"ma ",
			"mức bể",
			"muc be"
		],
		feld: 13,
		extra: "x = xmin + (I − 4) / 16 · (xmax − xmin). Dưới khoảng 3,6 mA là vùng đứt dây khi hệ đang chuẩn 4–20 mA, không phải mức 0. Số Siemens hay gặp: raw = I / 20 · 27648."
	},
	{
		keys: [
			"tốc độ",
			"toc do",
			"cực",
			"cuc",
			"trượt",
			"truot",
			"vòng",
			"vong"
		],
		feld: 8,
		extra: "ns = 60 · f / p với p là số đôi cực. s = (ns − n) / ns. 50 Hz và p = 2 cho 1500 min⁻¹."
	},
	{
		keys: [
			"dong dien",
			"dong co",
			"động cơ",
			"công suất",
			"cos",
			"kva",
			"kw"
		],
		feld: 8,
		extra: "I = P / (√3 · U · cosφ · η) với P tính bằng oát, U điện áp dây. S = P / cosφ. Q = P · tanφ."
	},
	{
		keys: [
			"bù",
			"bu cong",
			"tụ",
			"tu bu",
			"kvar",
			"cosφ",
			"cos phi"
		],
		feld: 8,
		extra: "Qc = P · (tanφ1 − tanφ2), P tính kW thì Qc ra kvar. Chọn bậc tụ tiêu chuẩn lớn hơn hoặc bằng Qc. Không bù quá đà thành dung kháng lúc non tải nếu đề bài không cho phép."
	},
	{
		keys: [
			"biến áp",
			"bien ap",
			"máy biến",
			"may bien"
		],
		feld: 1,
		extra: "U1 / U2 = N1 / N2 = I2 / I1 ở máy lý tưởng một pha. Ba pha: I = S / (√3 · U) mỗi phía."
	},
	{
		keys: [
			"an toàn",
			"an toan",
			"freischalt",
			"5 quy",
			"năm quy",
			"nam quy",
			"e-stop",
			"dừng khẩn",
			"dung khan"
		],
		feld: 5,
		extra: "Đúng thứ tự: Freischalten, gegen Wiedereinschalten sichern, Spannungsfreiheit feststellen, erden und kurzschließen, benachbarte Teile abdecken. Hạ áp xác nhận bằng bút hai cực DIN EN 61243-3. Nhả E-Stop không được làm máy tự chạy."
	},
	{
		keys: [
			"profinet",
			"profibus",
			"bus",
			"ethernet",
			"rs-485",
			"rs485"
		],
		feld: 9,
		extra: "PROFIBUS DP kinh điển là RS-485. PROFINET là Ethernet công nghiệp. Mất link thì kiểm tra nguồn, cáp, đèn, địa chỉ hoặc tên thiết bị trước khi viết lại chương trình."
	},
	{
		keys: [
			"lasten",
			"pflichten",
			"hồ sơ",
			"ho so"
		],
		feld: 12,
		extra: "Lastenheft: bên đặt hàng nói cần đạt gì. Pflichtenheft: bên làm cam kết làm bằng cách nào và kiểm ra sao."
	},
	{
		keys: [
			"bảo trì",
			"bao tri",
			"wartung",
			"sửa",
			"sua chua"
		],
		feld: 11,
		extra: "Wartung làm theo kế hoạch khi chưa hỏng. Instandsetzung là sửa sau hỏng. Trước khi đổi thông số, chép bộ số cũ."
	}
];
function fold(s) {
	return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
}
function localAnswer(question) {
	const q = fold(question);
	const hit = RULES.find((rule) => rule.keys.some((key) => q.includes(fold(key))));
	const feld = FELDER.find((item) => item.id === (hit?.feld ?? 0)) ?? null;
	const gloss = GLOSSARY.filter((g) => q.includes(fold(g.de)) || q.includes(fold(g.vi))).slice(0, 3);
	const lines = ["Thầy xưởng trả theo luật cố định, không bịa số điều khoản.", hit?.extra ?? "Chưa khớp một công thức riêng. Hãy đưa số: điện áp, công suất, chiều dài, tiết diện, hoặc tên Lernfeld."];
	if (feld) {
		lines.push(`Lernfeld ${feld.id} · ${feld.vi}.`);
		lines.push(feld.goal);
		if (feld.formula) lines.push(`Công thức: ${feld.formula}`);
		lines.push(`Tiêu chuẩn liên quan: ${feld.norms.join("; ")}.`);
	}
	if (gloss.length) lines.push(gloss.map((g) => `${g.de} = ${g.vi}. ${g.note}`).join(" "));
	if (q.includes("quy tac") || q.includes("an toan") || q.includes("sicher")) lines.push(SAFETY.map((step, index) => `${index + 1}. ${step.de} — ${step.vi}`).join(" "));
	lines.push("Câu kiểm tra ngược: hãy tự tính lại một số, hoặc chỉ tay vào tiếp điểm Stop trên sơ đồ và nói vì sao nó phải là Öffner.");
	lines.push("Đây là bài học. Không thay giấy phép làm việc của Elektrofachkraft trên tủ điện thật.");
	return {
		text: lines.join("\n"),
		feldId: feld?.id ?? null
	};
}
function contextFor(question) {
	const local = localAnswer(question);
	const feld = FELDER.find((item) => item.id === local.feldId);
	const block = feld ? [
		`LF${feld.id} ${feld.de}`,
		feld.vi,
		feld.goal,
		...feld.points,
		feld.example,
		feld.formula ?? ""
	].join("\n") : FELDER.map((item) => `LF${item.id}: ${item.vi}`).join("\n");
	return {
		local: local.text,
		context: block
	};
}
var PROMPTS = [
	"Giải dòng động cơ 5,5 kW, 400 V, cos 0,85, hiệu suất 0,9",
	"Năm quy tắc an toàn đúng thứ tự là gì?",
	"Vì sao role nhiệt mạch sao-tam giác đôi khi chỉnh 0,58 In?",
	"Selbsthaltung hoạt động thế nào?",
	"12 mA trên thang 0 đến 5 mét là bao nhiêu mét?"
];
function TutorPanel() {
	const [question, setQuestion] = (0, import_react.useState)(PROMPTS[0] ?? "");
	const [local, setLocal] = (0, import_react.useState)("");
	const [remote, setRemote] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	async function ask(text) {
		const clean = text.trim();
		if (clean.length < 2 || pending) return;
		const packed = contextFor(clean);
		setLocal(packed.local);
		setRemote("");
		setPending(true);
		try {
			const result = await askMeister({ data: {
				question: clean,
				context: packed.context
			} });
			setRemote(result.ok ? result.text : result.error);
		} catch (error) {
			setRemote(error instanceof Error ? error.message : "Không hỏi được thầy Grok.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl leading-none",
				children: "Thầy dạy nghề"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Luật xưởng trả lời ngay. Grok chỉ chạy khi bấm hỏi, không chặn màn học."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto",
				children: PROMPTS.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 shrink-0 rounded-konami border border-line px-3 text-left text-xs",
					onClick: () => {
						setQuestion(prompt);
						ask(prompt);
					},
					children: prompt
				}, prompt))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-sm text-muted",
				htmlFor: "ask",
				children: "Câu hỏi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: "ask",
				value: question,
				onChange: (event) => setQuestion(event.target.value),
				rows: 4,
				className: "border border-line bg-ink p-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: pending,
				className: "h-12 rounded-konami bg-gold font-semibold text-ink disabled:opacity-40",
				onClick: () => void ask(question),
				children: pending ? "Đang hỏi Grok…" : "Hỏi thầy"
			}),
			local ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border border-line bg-ink p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-gold",
					children: "Thầy xưởng"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 whitespace-pre-wrap text-sm",
					children: local
				})]
			}) : null,
			remote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border border-gold p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-gold",
					children: "Thầy Grok"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 whitespace-pre-wrap text-sm",
					children: remote
				})]
			}) : null
		]
	});
}
var TABS = [
	{
		id: "hoc",
		label: "Giáo trình",
		icon: BookOpen
	},
	{
		id: "tinh",
		label: "Tính",
		icon: Calculator
	},
	{
		id: "mo",
		label: "Mô phỏng",
		icon: Cpu
	},
	{
		id: "thi",
		label: "Thi",
		icon: ClipboardCheck
	},
	{
		id: "thay",
		label: "Thầy",
		icon: Bot
	}
];
function speakLesson(lessonId) {
	const feld = FELDER.find((item) => item.id === lessonId);
	if (!feld || typeof window === "undefined" || !window.speechSynthesis) return;
	ensureAudio();
	window.speechSynthesis.cancel();
	const utter = new SpeechSynthesisUtterance(`${feld.vi}. ${feld.goal}`);
	utter.lang = "vi-VN";
	const voice = window.speechSynthesis.getVoices().find((item) => item.lang.toLowerCase().startsWith("vi"));
	if (voice) utter.voice = voice;
	utter.rate = .96;
	window.speechSynthesis.speak(utter);
}
function MeisterApp() {
	const tab = useEta((s) => s.tab);
	const setTab = useEta((s) => s.setTab);
	const lesson = useEta((s) => s.lesson);
	const markRead = useEta((s) => s.markRead);
	const railsOpen = useEta((s) => s.railsOpen);
	const setRails = useEta((s) => s.setRails);
	const sticker = useEta((s) => s.sticker);
	const setSticker = useEta((s) => s.setSticker);
	const read = useEta((s) => s.read);
	const frame = (0, import_react.useRef)(null);
	const drag = (0, import_react.useRef)(null);
	const [support, setSupport] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		useEta.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!support) return;
		const render = () => {
			const paypal = window.paypal;
			const el = document.getElementById("paypal-container-T7AZ748Y27248");
			if (!paypal || !el || el.childElementCount > 0) return;
			paypal.HostedButtons({ hostedButtonId: "T7AZ748Y27248" }).render("#paypal-container-T7AZ748Y27248");
		};
		if (document.getElementById("paypal-sdk-hosted")) {
			render();
			return;
		}
		const script = document.createElement("script");
		script.id = "paypal-sdk-hosted";
		script.async = true;
		script.src = "https://www.paypal.com/sdk/js?client-id=BAAIfuQli_a3Qud-8CIRqCRCeohqtiW29_i2Txx2rQM35pqMc-pbCIZX6L8tx1zbyOj_vp8AUE_dpSqOhc&components=hosted-buttons&disable-funding=venmo&currency=USD";
		script.onload = render;
		document.body.appendChild(script);
	}, [support]);
	const done = read.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: frame,
		className: `schematic relative flex h-dvh flex-col ${railsOpen ? "cockpit" : "cockpit shut"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `mica-rail mica-left fixed inset-y-0 left-0 z-30 flex flex-col items-center gap-2 py-3 ${railsOpen ? "w-[3.15rem]" : "w-4"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xs tracking-widest text-gold",
						children: "NGAME"
					}),
					railsOpen ? TABS.map((item) => {
						const Icon = item.icon;
						const on = tab === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": item.label,
							onClick: () => setTab(item.id),
							className: `flex h-11 w-11 items-center justify-center rounded-konami border ${on ? "border-gold bg-gold text-ink" : "border-line bg-panel text-paper"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								"aria-hidden": "true"
							})
						}, item.id);
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-auto flex h-11 w-11 items-center justify-center text-gold",
						"aria-label": railsOpen ? "Thu thanh NGAME" : "Mở thanh NGAME",
						onClick: () => setRails(!railsOpen),
						children: railsOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftOpen, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `mica-rail mica-right fixed inset-y-0 right-0 z-30 flex flex-col items-center gap-2 py-3 ${railsOpen ? "w-[3.15rem]" : "w-4"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xs tracking-widest text-gold",
					children: "ETA"
				}), railsOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Nghe bài",
						className: "flex h-11 w-11 items-center justify-center rounded-konami border border-line bg-panel text-paper",
						onClick: () => speakLesson(lesson),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Đánh dấu đã học",
						className: "flex h-11 w-11 items-center justify-center rounded-konami border border-line bg-panel text-paper",
						onClick: () => markRead(lesson),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Mở mô phỏng",
						className: "flex h-11 w-11 items-center justify-center rounded-konami border border-line bg-panel text-paper",
						onClick: () => setTab("mo"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Mở máy tính",
						className: "flex h-11 w-11 items-center justify-center rounded-konami border border-line bg-panel text-paper",
						onClick: () => setTab("tinh"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "size-5" })
					})
				] }) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "zone-new mt-2 flex min-h-0 flex-col px-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gold-thread flex min-h-0 flex-1 flex-col bg-panel/90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "flex items-end justify-between gap-3 border-b border-line px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl leading-none tracking-wide text-gold",
								children: "MEISTER ETA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Elektroniker für Automatisierungstechnik · chuẩn Đức"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-right text-xs text-paper",
								children: [
									"Đã học ",
									done,
									"/13",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block h-1.5 w-24 bg-ink",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block h-full bg-gold",
											style: { width: `${done / 13 * 100}%` }
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex gap-1 overflow-x-auto px-2 py-2",
							children: TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setTab(item.id),
								className: `h-11 shrink-0 rounded-konami px-3 text-sm font-semibold ${tab === item.id ? "bg-gold text-ink" : "border border-line text-paper"}`,
								children: item.label
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-h-0 flex-1 overflow-y-auto px-3 pb-3",
							children: [
								tab === "hoc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnPanel, {}) : null,
								tab === "tinh" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalcPanel, {}) : null,
								tab === "mo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimPanel, {}) : null,
								tab === "thi" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExamPanel, {}) : null,
								tab === "thay" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TutorPanel, {}) : null
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "zone-cu mb-2 mt-3 px-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuDock, { onSupport: () => setSupport(true) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Sticker mica PWAMC, chạm để nghe bài, kéo để dời",
				className: "sticker-mica absolute z-40 flex h-14 w-14 items-center justify-center rounded-full font-display text-xs font-bold tracking-wide text-ink",
				style: {
					left: `${sticker.x}%`,
					top: `${sticker.y}%`
				},
				onPointerDown: (event) => {
					event.currentTarget.setPointerCapture(event.pointerId);
					drag.current = {
						px: event.clientX,
						py: event.clientY,
						x: sticker.x,
						y: sticker.y,
						moved: false
					};
				},
				onPointerMove: (event) => {
					if (!drag.current || !frame.current) return;
					const rect = frame.current.getBoundingClientRect();
					const dx = (event.clientX - drag.current.px) / rect.width * 100;
					const dy = (event.clientY - drag.current.py) / rect.height * 100;
					if (Math.hypot(dx, dy) > 1.2) drag.current.moved = true;
					setSticker({
						x: Math.min(86, Math.max(8, drag.current.x + dx)),
						y: Math.min(78, Math.max(6, drag.current.y + dy))
					});
				},
				onPointerUp: () => {
					const moved = drag.current?.moved;
					drag.current = null;
					if (!moved) speakLesson(lesson);
				},
				children: "NGHE"
			}),
			support ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-end justify-center bg-ink/80 p-4",
				role: "dialog",
				"aria-label": "Ủng hộ xưởng",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gold-thread w-full max-w-md bg-panel p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl text-gold",
								children: "ỦNG HỘ XƯỞNG"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 rounded-konami border border-line px-3",
								onClick: () => setSupport(false),
								children: "Đóng"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-sm text-muted",
							children: "Nút PayPal chỉ tải khi mở tấm này. Không chặn bài học."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "paypal-container-T7AZ748Y27248" })
					]
				})
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeisterApp, {});
}
//#endregion
export { Home as component };
