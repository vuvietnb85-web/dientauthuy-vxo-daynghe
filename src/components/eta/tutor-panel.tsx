import { useState } from "react";
import { askMeister } from "@/lib/eta/ask-meister";
import { contextFor } from "@/lib/eta/local-tutor";

const PROMPTS = [
  "Giải dòng động cơ 5,5 kW, 400 V, cos 0,85, hiệu suất 0,9",
  "Năm quy tắc an toàn đúng thứ tự là gì?",
  "Vì sao role nhiệt mạch sao-tam giác đôi khi chỉnh 0,58 In?",
  "Selbsthaltung hoạt động thế nào?",
  "12 mA trên thang 0 đến 5 mét là bao nhiêu mét?",
];

export function TutorPanel() {
  const [question, setQuestion] = useState(PROMPTS[0] ?? "");
  const [local, setLocal] = useState("");
  const [remote, setRemote] = useState("");
  const [pending, setPending] = useState(false);

  async function ask(text: string) {
    const clean = text.trim();
    if (clean.length < 2 || pending) return;
    const packed = contextFor(clean);
    setLocal(packed.local);
    setRemote("");
    setPending(true);
    try {
      const result = await askMeister({ data: { question: clean, context: packed.context } });
      setRemote(result.ok ? result.text : result.error);
    } catch (error) {
      setRemote(error instanceof Error ? error.message : "Không hỏi được thầy Grok.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-display text-3xl leading-none">Thầy dạy nghề</h1>
      <p className="text-sm text-muted">Luật xưởng trả lời ngay. Grok chỉ chạy khi bấm hỏi, không chặn màn học.</p>
      <div className="flex gap-2 overflow-x-auto">
        {PROMPTS.map((prompt) => (
          <button key={prompt} type="button" className="h-11 shrink-0 rounded-konami border border-line px-3 text-left text-xs" onClick={() => { setQuestion(prompt); void ask(prompt); }}>
            {prompt}
          </button>
        ))}
      </div>
      <label className="text-sm text-muted" htmlFor="ask">
        Câu hỏi
      </label>
      <textarea id="ask" value={question} onChange={(event) => setQuestion(event.target.value)} rows={4} className="border border-line bg-ink p-3" />
      <button type="button" disabled={pending} className="h-12 rounded-konami bg-gold font-semibold text-ink disabled:opacity-40" onClick={() => void ask(question)}>
        {pending ? "Đang hỏi Grok…" : "Hỏi thầy"}
      </button>
      {local ? (
        <article className="border border-line bg-ink p-3">
          <h2 className="font-display text-xl text-gold">Thầy xưởng</h2>
          <p className="mt-2 whitespace-pre-wrap text-sm">{local}</p>
        </article>
      ) : null}
      {remote ? (
        <article className="border border-gold p-3">
          <h2 className="font-display text-xl text-gold">Thầy Grok</h2>
          <p className="mt-2 whitespace-pre-wrap text-sm">{remote}</p>
        </article>
      ) : null}
    </div>
  );
}
