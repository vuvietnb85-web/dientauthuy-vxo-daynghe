import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask-meister-xj-GFmYz.js
var askMeister_createServerFn_handler = createServerRpc({
	id: "5415880355680c0ec138bf1ba695fbcfaf1ffb419af91630649f4f36ccd52ccc",
	name: "askMeister",
	filename: "src/lib/eta/ask-meister.ts"
}, (opts) => askMeister.__executeServer(opts));
var askMeister = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input;
	const question = String(raw?.question ?? "").trim();
	const context = String(raw?.context ?? "").trim();
	if (question.length < 2 || question.length > 1200) throw new Error("Câu hỏi cần từ 2 đến 1200 ký tự.");
	return {
		question,
		context: context.slice(0, 6e3)
	};
}).handler(askMeister_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "Thầy Grok chưa có khóa trong môi trường này. Phần thầy xưởng phía trên vẫn dùng được."
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			temperature: .2,
			max_tokens: 700,
			messages: [{
				role: "system",
				content: "Bạn là Meister ETA, giáo viên nghề Elektroniker für Automatisierungstechnik. Dạy bằng tiếng Việt, thuật ngữ Đức trong ngoặc. Chỉ dùng công thức và tên tiêu chuẩn có trong CONTEXT hoặc kiến thức chắc: Ohm, dòng động cơ 3 pha, sụt áp, Ib ≤ In ≤ Iz, năm quy tắc DIN VDE 0105-100, IEC 61131-3, khởi động sao-tam giác, 4-20 mA. Không bịa số điều khoản, không bịa Iz, không bịa mã cáp. Thiếu dữ liệu thì nói cần tra bảng nào. Nhắc đây là bài học, không thay Elektrofachkraft. Ngắn, có bước tính, có một câu kiểm tra ngược. Không chẩn đoán y tế."
			}, {
				role: "user",
				content: `CONTEXT:\n${data.context}\n\nCÂU HỎI:\n${data.question}`
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `Thầy Grok không trả lời được (mã ${res.status}). Dùng phần thầy xưởng.`
	};
	const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
	if (!text) return {
		ok: false,
		error: "Thầy Grok trả lời rỗng."
	};
	return {
		ok: true,
		text
	};
});
//#endregion
export { askMeister_createServerFn_handler };
