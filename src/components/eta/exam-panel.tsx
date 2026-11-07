import { useMemo, useState } from "react";
import { germanGrade } from "@/lib/eta/calc";
import { QUESTIONS, type Question } from "@/lib/eta/content";
import { useEta } from "@/lib/eta/store";

function drawPaper(): Question[] {
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

export function ExamPanel() {
  const best = useEta((s) => s.bestScore);
  const setBest = useEta((s) => s.setBest);
  const [paper, setPaper] = useState<Question[] | null>(null);
  const [picks, setPicks] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const score = useMemo(() => {
    if (!paper) return 0;
    const hit = paper.filter((item) => picks[item.id] === item.answer).length;
    return Math.round((hit / paper.length) * 100);
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

  if (!paper) {
    return (
      <section className="flex flex-col gap-3">
        <h1 className="font-display text-3xl leading-none">Phòng thi xưởng</h1>
        <p className="text-sm">Tám câu trắc nghiệm rút từ 13 Lernfeld. Thang điểm 100 kiểu trường nghề Đức: 92 rất tốt, 81 tốt, 67 khá, 50 đạt.</p>
        <p className="text-sm text-muted">Điểm cao nhất trên máy này: {best == null ? "chưa có" : `${best} · ${germanGrade(best).name}`}.</p>
        <button type="button" className="h-12 rounded-konami bg-gold font-semibold text-ink" onClick={begin}>
          Vào thi
        </button>
      </section>
    );
  }

  const grade = germanGrade(score);
  const answered = paper.every((item) => picks[item.id] != null);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl">Đề 8 câu</h1>
        <button type="button" className="h-11 rounded-konami border border-line px-3" onClick={begin}>
          Đề khác
        </button>
      </div>
      {paper.map((item, index) => (
        <fieldset key={item.id} className="border border-line p-3">
          <legend className="px-1 text-sm text-gold">Câu {index + 1} · LF{item.feld}</legend>
          <p className="mb-2 text-sm">{item.stem}</p>
          <div className="flex flex-col gap-2">
            {item.choices.map((choice, choiceIndex) => {
              const selected = picks[item.id] === choiceIndex;
              const reveal = done && choiceIndex === item.answer;
              const wrong = done && selected && choiceIndex !== item.answer;
              return (
                <label key={choice} className={`flex min-h-11 items-center gap-2 border px-2 ${reveal ? "border-gold" : ""} ${wrong ? "border-bad" : "border-line"}`}>
                  <input
                    type="radio"
                    name={item.id}
                    checked={selected}
                    disabled={done}
                    onChange={() => setPicks((prev) => ({ ...prev, [item.id]: choiceIndex }))}
                  />
                  <span className="text-sm">{choice}</span>
                </label>
              );
            })}
          </div>
          {done ? <p className="mt-2 text-sm text-muted">{item.why}</p> : null}
        </fieldset>
      ))}
      {done ? (
        <p className="border border-gold p-3 font-display text-2xl text-gold">
          {score}/100 · Note {grade.note} · {grade.name}
        </p>
      ) : (
        <button type="button" disabled={!answered} className="h-12 rounded-konami bg-gold font-semibold text-ink disabled:opacity-40" onClick={finish}>
          Nộp bài
        </button>
      )}
    </section>
  );
}
