import { useState } from "react";
import { FELDER, GLOSSARY, NORMS, SAFETY } from "@/lib/eta/content";
import { useEta } from "@/lib/eta/store";

type View = "bai" | "tu" | "tieu" | "an";

export function LearnPanel() {
  const lesson = useEta((s) => s.lesson);
  const setLesson = useEta((s) => s.setLesson);
  const setTab = useEta((s) => s.setTab);
  const markRead = useEta((s) => s.markRead);
  const read = useEta((s) => s.read);
  const [view, setView] = useState<View>("bai");
  const [query, setQuery] = useState("");
  const [step, setStep] = useState(0);
  const [fault, setFault] = useState("");
  const feld = FELDER[lesson - 1] ?? FELDER[0];
  const words = GLOSSARY.filter((item) => {
    const blob = `${item.de} ${item.vi} ${item.note}`.toLowerCase();
    return blob.includes(query.trim().toLowerCase());
  });

  function tapSafety(index: number) {
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

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1 overflow-x-auto">
        {(
          [
            ["bai", "Bài"],
            ["tu", "Thuật ngữ"],
            ["tieu", "Tiêu chuẩn"],
            ["an", "An toàn"],
          ] as const
        ).map(([id, label]) => (
          <button key={id} type="button" onClick={() => setView(id)} className={`h-10 shrink-0 rounded-konami px-3 text-sm ${view === id ? "bg-gold text-ink" : "border border-line"}`}>
            {label}
          </button>
        ))}
      </div>

      {view === "bai" ? (
        <>
          <div className="flex gap-1 overflow-x-auto pb-1">
            {FELDER.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLesson(item.id)}
                className={`h-11 min-w-11 shrink-0 rounded-konami px-2 text-sm font-semibold ${item.id === feld.id ? "bg-gold text-ink" : "border border-line"}`}
              >
                LF{item.id}
                {read.includes(item.id) ? " ·" : ""}
              </button>
            ))}
          </div>
          <article className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-wider text-gold">
              Năm {feld.year} · {feld.hours} giờ · {feld.exam}
            </p>
            <h1 className="font-display text-3xl leading-none text-paper">{feld.vi}</h1>
            <p className="text-sm text-muted">{feld.de}</p>
            <p className="text-sm">{feld.goal}</p>
            <ul className="flex list-disc flex-col gap-1 pl-4 text-sm">
              {feld.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="border border-line bg-ink p-3">
              <h2 className="font-display text-lg text-gold">{feld.exampleTitle}</h2>
              <p className="mt-1 text-sm">{feld.example}</p>
              {feld.formula ? <p className="mt-2 text-sm text-gold">{feld.formula}</p> : null}
            </div>
            <p className="text-sm">
              <span className="text-gold">Việc xưởng. </span>
              {feld.workshop}
            </p>
            <p className="text-xs text-muted">Tiêu chuẩn: {feld.norms.join(" · ")}</p>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="h-11 rounded-konami bg-gold px-3 font-semibold text-ink" onClick={() => markRead(feld.id)}>
                {read.includes(feld.id) ? "Đã đánh dấu" : "Đánh dấu đã học"}
              </button>
              <button type="button" className="h-11 rounded-konami border border-line px-3" onClick={() => setTab("tinh")}>
                Mở máy tính
              </button>
              <button type="button" className="h-11 rounded-konami border border-line px-3" onClick={() => setTab("mo")}>
                Mở mô phỏng
              </button>
            </div>
            <p className="text-xs text-muted">Bài giảng đào tạo. Không thay Elektrofachkraft, phép đo VDE hay sơ đồ tủ thật.</p>
          </article>
        </>
      ) : null}

      {view === "tu" ? (
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted" htmlFor="gloss">
            Tìm tiếng Đức hoặc tiếng Việt
          </label>
          <input id="gloss" value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 border border-line bg-ink px-3" placeholder="Öffner, tự giữ, Lastenheft" />
          <ul className="flex flex-col gap-2">
            {words.map((item) => (
              <li key={item.de} className="border border-line p-2">
                <p className="font-semibold text-gold">{item.de}</p>
                <p className="text-sm">{item.vi}</p>
                <p className="text-xs text-muted">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {view === "tieu" ? (
        <ul className="flex flex-col gap-2">
          {NORMS.map((norm) => (
            <li key={norm.name} className="border border-line p-2">
              <p className="font-semibold text-gold">{norm.name}</p>
              <p className="text-sm">{norm.scope}</p>
            </li>
          ))}
          <li className="text-xs text-muted">Trọng số tham khảo kỳ thi kéo dài: Teil 1 thực hành 40 %, Teil 2 thực hành 30 %, Systementwurf 12 %, Funktions- und Systemanalyse 12 %, Wirtschafts- und Sozialkunde 6 %. Số phút và trọng số lấy theo quy chế IHK đang áp, không lấy theo trí nhớ một năm cũ.</li>
        </ul>
      ) : null}

      {view === "an" ? (
        <div className="flex flex-col gap-2">
          <p className="text-sm">Bấm đúng năm bước theo thứ tự DIN VDE 0105-100. Sai là quay về bước 1.</p>
          <ol className="flex flex-col gap-2">
            {SAFETY.map((item, index) => {
              const done = index < step;
              return (
                <li key={item.de}>
                  <button type="button" onClick={() => tapSafety(index)} className={`flex min-h-11 w-full items-center gap-3 border px-3 py-2 text-left ${done ? "border-gold bg-navy text-paper" : "border-line"}`}>
                    <span className="font-display text-2xl text-gold">{index + 1}</span>
                    <span>
                      <span className="block font-semibold">{item.de}</span>
                      <span className="block text-sm text-muted">{item.vi}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          {fault ? <p className="text-sm text-bad">{fault}</p> : null}
          {step === SAFETY.length ? <p className="text-sm text-ok">Đủ năm bước, đúng thứ tự. Lernfeld 5 được đánh dấu đã học.</p> : <p className="text-sm text-muted">Đang ở bước {step + 1}.</p>}
          <button type="button" className="h-11 rounded-konami border border-line" onClick={() => { setStep(0); setFault(""); }}>
            Làm lại
          </button>
        </div>
      ) : null}
    </div>
  );
}
