import { createServerFn } from "@tanstack/react-start";

type Ask = { question: string; context: string };

export const askMeister = createServerFn({ method: "POST" })
  .validator((input: unknown): Ask => {
    const raw = input as Partial<Ask> | null;
    const question = String(raw?.question ?? "").trim();
    const context = String(raw?.context ?? "").trim();
    if (question.length < 2 || question.length > 1200) {
      throw new Error("Câu hỏi cần từ 2 đến 1200 ký tự.");
    }
    return { question, context: context.slice(0, 6000) };
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "Thầy Grok chưa có khóa trong môi trường này. Phần thầy xưởng phía trên vẫn dùng được." };

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        temperature: 0.2,
        max_tokens: 700,
        messages: [
          {
            role: "system",
            content:
              "Bạn là Meister ETA, giáo viên nghề Elektroniker für Automatisierungstechnik. Dạy bằng tiếng Việt, thuật ngữ Đức trong ngoặc. Chỉ dùng công thức và tên tiêu chuẩn có trong CONTEXT hoặc kiến thức chắc: Ohm, dòng động cơ 3 pha, sụt áp, Ib ≤ In ≤ Iz, năm quy tắc DIN VDE 0105-100, IEC 61131-3, khởi động sao-tam giác, 4-20 mA. Không bịa số điều khoản, không bịa Iz, không bịa mã cáp. Thiếu dữ liệu thì nói cần tra bảng nào. Nhắc đây là bài học, không thay Elektrofachkraft. Ngắn, có bước tính, có một câu kiểm tra ngược. Không chẩn đoán y tế.",
          },
          {
            role: "user",
            content: `CONTEXT:\n${data.context}\n\nCÂU HỎI:\n${data.question}`,
          },
        ],
      }),
    });

    if (!res.ok) return { ok: false as const, error: `Thầy Grok không trả lời được (mã ${res.status}). Dùng phần thầy xưởng.` };

    const body = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) return { ok: false as const, error: "Thầy Grok trả lời rỗng." };
    return { ok: true as const, text };
  });
