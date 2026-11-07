import { FELDER, GLOSSARY, SAFETY } from "./content";

const RULES: { keys: string[]; feld: number; extra: string }[] = [
  {
    keys: ["sụt", "sut ap", "cáp", "cap", "mm2", "mm²", "tiết diện"],
    feld: 2,
    extra: "Công thức 3 pha: ΔU = √3 · L · I · cosφ / (κ · A), L một chiều (m), κ đồng 56. Phần trăm = ΔU / U · 100. Ngưỡng hay dạy: 3 % chiếu sáng, 5 % tải khác theo thông lệ DIN VDE 0100-520. Iz không được bịa — tra DIN VDE 0298-4.",
  },
  {
    keys: ["bảo vệ", "bao ve", "iz", "aptomat", "mcb", "cầu chì"],
    feld: 6,
    extra: "Chuỗi Ib ≤ In ≤ Iz. Nếu Ib > Iz thì tăng tiết diện hoặc giảm tải trước. Bậc In thường gặp: 6, 10, 13, 16, 20, 25, 32, 40, 50, 63.",
  },
  {
    keys: ["sao-tam", "sao tam", "stern", "dreieck", "tam giac", "0,58", "0.58", "lien dong"],
    feld: 13,
    extra: "K2 sao và K3 tam giác loại trừ nhau, nếu không sẽ ngắn mạch. Dòng khởi động sao khoảng 1/3. Role nhiệt trên dây nguồn chỉnh ≈ In. Role đo dòng pha dây quấn chỉnh ≈ 0,58 · In.",
  },
  {
    keys: ["role nhiệt", "role nhiet", "quá tải", "qua tai", "motorschutz"],
    feld: 8,
    extra: "Điểm chỉnh phụ thuộc chỗ đặt role, không phải một con số duy nhất. Xem vị trí so với contactor tam giác.",
  },
  {
    keys: ["tự giữ", "tu giu", "selbst", "contactor", "nút dừng", "nut dung", "ladder", "sps", "plc"],
    feld: 3,
    extra: "K1 = Q1 ∧ Stop_kín ∧ (Start ∨ K1). Stop là Öffner nối tiếp. Start là Schließer song song tiếp điểm duy trì.",
  },
  {
    keys: ["4-20", "4–20", "cảm biến", "cam bien", "ma ", "mức bể", "muc be"],
    feld: 13,
    extra: "x = xmin + (I − 4) / 16 · (xmax − xmin). Dưới khoảng 3,6 mA là vùng đứt dây khi hệ đang chuẩn 4–20 mA, không phải mức 0. Số Siemens hay gặp: raw = I / 20 · 27648.",
  },
  {
    keys: ["tốc độ", "toc do", "cực", "cuc", "trượt", "truot", "vòng", "vong"],
    feld: 8,
    extra: "ns = 60 · f / p với p là số đôi cực. s = (ns − n) / ns. 50 Hz và p = 2 cho 1500 min⁻¹.",
  },
  {
    keys: ["dong dien", "dong co", "động cơ", "công suất", "cos", "kva", "kw"],
    feld: 8,
    extra: "I = P / (√3 · U · cosφ · η) với P tính bằng oát, U điện áp dây. S = P / cosφ. Q = P · tanφ.",
  },
  {
    keys: ["bù", "bu cong", "tụ", "tu bu", "kvar", "cosφ", "cos phi"],
    feld: 8,
    extra: "Qc = P · (tanφ1 − tanφ2), P tính kW thì Qc ra kvar. Chọn bậc tụ tiêu chuẩn lớn hơn hoặc bằng Qc. Không bù quá đà thành dung kháng lúc non tải nếu đề bài không cho phép.",
  },
  {
    keys: ["biến áp", "bien ap", "máy biến", "may bien"],
    feld: 1,
    extra: "U1 / U2 = N1 / N2 = I2 / I1 ở máy lý tưởng một pha. Ba pha: I = S / (√3 · U) mỗi phía.",
  },
  {
    keys: ["an toàn", "an toan", "freischalt", "5 quy", "năm quy", "nam quy", "e-stop", "dừng khẩn", "dung khan"],
    feld: 5,
    extra: "Đúng thứ tự: Freischalten, gegen Wiedereinschalten sichern, Spannungsfreiheit feststellen, erden und kurzschließen, benachbarte Teile abdecken. Hạ áp xác nhận bằng bút hai cực DIN EN 61243-3. Nhả E-Stop không được làm máy tự chạy.",
  },
  {
    keys: ["profinet", "profibus", "bus", "ethernet", "rs-485", "rs485"],
    feld: 9,
    extra: "PROFIBUS DP kinh điển là RS-485. PROFINET là Ethernet công nghiệp. Mất link thì kiểm tra nguồn, cáp, đèn, địa chỉ hoặc tên thiết bị trước khi viết lại chương trình.",
  },
  {
    keys: ["lasten", "pflichten", "hồ sơ", "ho so"],
    feld: 12,
    extra: "Lastenheft: bên đặt hàng nói cần đạt gì. Pflichtenheft: bên làm cam kết làm bằng cách nào và kiểm ra sao.",
  },
  {
    keys: ["bảo trì", "bao tri", "wartung", "sửa", "sua chua"],
    feld: 11,
    extra: "Wartung làm theo kế hoạch khi chưa hỏng. Instandsetzung là sửa sau hỏng. Trước khi đổi thông số, chép bộ số cũ.",
  },
];

function fold(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

export function localAnswer(question: string) {
  const q = fold(question);
  const hit = RULES.find((rule) => rule.keys.some((key) => q.includes(fold(key))));
  const feld = FELDER.find((item) => item.id === (hit?.feld ?? 0)) ?? null;
  const gloss = GLOSSARY.filter((g) => q.includes(fold(g.de)) || q.includes(fold(g.vi))).slice(0, 3);
  const lines = [
    "Thầy xưởng trả theo luật cố định, không bịa số điều khoản.",
    hit?.extra ?? "Chưa khớp một công thức riêng. Hãy đưa số: điện áp, công suất, chiều dài, tiết diện, hoặc tên Lernfeld.",
  ];
  if (feld) {
    lines.push(`Lernfeld ${feld.id} · ${feld.vi}.`);
    lines.push(feld.goal);
    if (feld.formula) lines.push(`Công thức: ${feld.formula}`);
    lines.push(`Tiêu chuẩn liên quan: ${feld.norms.join("; ")}.`);
  }
  if (gloss.length) {
    lines.push(gloss.map((g) => `${g.de} = ${g.vi}. ${g.note}`).join(" "));
  }
  if (q.includes("quy tac") || q.includes("an toan") || q.includes("sicher")) {
    lines.push(SAFETY.map((step, index) => `${index + 1}. ${step.de} — ${step.vi}`).join(" "));
  }
  lines.push("Câu kiểm tra ngược: hãy tự tính lại một số, hoặc chỉ tay vào tiếp điểm Stop trên sơ đồ và nói vì sao nó phải là Öffner.");
  lines.push("Đây là bài học. Không thay giấy phép làm việc của Elektrofachkraft trên tủ điện thật.");
  return { text: lines.join("\n"), feldId: feld?.id ?? null };
}

export function contextFor(question: string) {
  const local = localAnswer(question);
  const feld = FELDER.find((item) => item.id === local.feldId);
  const block = feld
    ? [`LF${feld.id} ${feld.de}`, feld.vi, feld.goal, ...feld.points, feld.example, feld.formula ?? ""].join("\n")
    : FELDER.map((item) => `LF${item.id}: ${item.vi}`).join("\n");
  return { local: local.text, context: block };
}
