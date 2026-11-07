import { useEffect, useRef, useState } from "react";
import { metalClick, motorHum, readMeter } from "@/lib/eta/audio";

type SimId = "hold" | "star" | "sfc" | "ma" | "safe";

const SIMS: { id: SimId; label: string }[] = [
  { id: "hold", label: "Tự giữ" },
  { id: "star", label: "Sao–tam giác" },
  { id: "sfc", label: "Băng tải" },
  { id: "ma", label: "4–20 mA" },
  { id: "safe", label: "An toàn" },
];

function Btn({ label, pressed, onDown, onUp }: { label: string; pressed?: boolean; onDown: () => void; onUp?: () => void }) {
  return (
    <button
      type="button"
      className={`h-14 min-w-16 rounded-konami border px-3 font-display text-lg tracking-wide ${pressed ? "border-gold bg-gold text-ink" : "border-gold bg-navy text-paper"}`}
      onPointerDown={(event) => {
        event.preventDefault();
        (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
        onDown();
      }}
      onPointerUp={() => onUp?.()}
      onPointerCancel={() => onUp?.()}
    >
      {label}
    </button>
  );
}

export function SimPanel() {
  const [sim, setSim] = useState<SimId>("hold");
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1 overflow-x-auto">
        {SIMS.map((item) => (
          <button key={item.id} type="button" onClick={() => setSim(item.id)} className={`h-11 shrink-0 rounded-konami px-3 text-sm ${sim === item.id ? "bg-gold text-ink" : "border border-line"}`}>
            {item.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted">NGAME trong xưởng mô phỏng: nút bo tròn, viền vàng, bấm là có tiếng contactor thật trên mạch âm thanh. Không phải tủ điện.</p>
      {sim === "hold" ? <HoldSim /> : null}
      {sim === "star" ? <StarSim /> : null}
      {sim === "sfc" ? <SfcSim /> : null}
      {sim === "ma" ? <MaSim /> : null}
      {sim === "safe" ? <SafeSim /> : null}
      <Meter />
    </div>
  );
}

function Meter() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
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
          const tone = getComputedStyle(node).color || "#e8b00f";
          ctx.strokeStyle = tone;
          ctx.lineWidth = 2;
          ctx.beginPath();
          const step = w / data.length;
          for (let i = 0; i < data.length; i += 1) {
            const y = ((data[i] ?? 128) / 255) * h;
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
  return <canvas ref={canvas} width={360} height={48} className="meter border border-line bg-ink text-gold" aria-label="Sóng tiếng xưởng" />;
}

function HoldSim() {
  const q1 = useRef(true);
  const start = useRef(false);
  const stop = useRef(false);
  const seal = useRef(false);
  const [on, setOn] = useState(false);
  const [q, setQ] = useState(true);
  const [holdingStart, setHoldingStart] = useState(false);
  const [holdingStop, setHoldingStop] = useState(false);

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
  const startBranch = pastStop && holdingStart;
  const sealBranch = pastStop && on;

  return (
    <section className="flex flex-col gap-3 border border-line bg-ink p-3">
      <h1 className="font-display text-2xl">Selbsthaltung · tự giữ</h1>
      <p data-sim-status="" className="text-sm text-gold">
        {on ? "K1 tự giữ. Động cơ M1 chạy. Bấm S0 để nhả." : q ? "Tủ có điện. Bấm S1 để hút contactor." : "Q1 đang cắt. Cuộn không được hút."}
      </p>
      <svg viewBox="0 0 340 190" className="w-full border border-line bg-panel">
        <line x1="28" y1="16" x2="28" y2="176" className={hotRail ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <line x1="312" y1="16" x2="312" y2="176" className={on ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <line x1="28" y1="58" x2="78" y2="58" className={pastStop ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <rect x="78" y="42" width="36" height="32" className={holdingStop ? "stroke-bad" : "stroke-paper"} fill="none" strokeWidth="2" />
        <text x="86" y="62" className="wire-label">S0</text>
        <line x1="114" y1="58" x2="150" y2="58" className={pastStop ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <line x1="150" y1="40" x2="150" y2="86" className={pastStop ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <line x1="150" y1="40" x2="214" y2="40" className={startBranch ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <line x1="150" y1="86" x2="214" y2="86" className={sealBranch ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <text x="168" y="36" className="wire-dim">S1</text>
        <text x="168" y="104" className="wire-dim">K1</text>
        <line x1="214" y1="40" x2="214" y2="86" className={pastStop && (holdingStart || on) ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <line x1="214" y1="58" x2="250" y2="58" className={on ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <circle cx="268" cy="58" r="16" className={on ? "stroke-gold" : "stroke-line"} fill="none" strokeWidth="2" />
        <text x="258" y="62" className="wire-hot">K1</text>
        <line x1="284" y1="58" x2="312" y2="58" className={on ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <line x1="28" y1="140" x2="120" y2="140" className={on ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
        <rect x="120" y="122" width="70" height="36" className={on ? "stroke-gold" : "stroke-line"} fill="none" strokeWidth="2" />
        <text x="142" y="144" className="wire-label">M1</text>
        <line x1="190" y1="140" x2="312" y2="140" className={on ? "stroke-gold" : "stroke-line"} strokeWidth="3" />
      </svg>
      <div className="flex flex-wrap gap-2">
        <Btn
          label={q ? "Q1 CẮT" : "Q1 ĐÓNG"}
          onDown={() => {
            q1.current = !q1.current;
            setQ(q1.current);
            commit();
          }}
        />
        <Btn
          label="S1"
          pressed={holdingStart}
          onDown={() => {
            start.current = true;
            setHoldingStart(true);
            commit();
          }}
          onUp={() => {
            start.current = false;
            setHoldingStart(false);
            commit();
          }}
        />
        <Btn
          label="S0"
          pressed={holdingStop}
          onDown={() => {
            stop.current = true;
            setHoldingStop(true);
            commit();
          }}
          onUp={() => {
            stop.current = false;
            setHoldingStop(false);
            commit();
          }}
        />
      </div>
      <p className="text-xs text-muted">S0 là Öffner: đang nhấn thì mạch hở. S1 là Schließer. Thả S1 mà M1 còn chạy là nhờ tiếp điểm duy trì.</p>
    </section>
  );
}

function StarSim() {
  const [phase, setPhase] = useState<"off" | "star" | "gap" | "delta">("off");
  const timers = useRef<number[]>([]);
  useEffect(() => () => timers.current.forEach((id) => window.clearTimeout(id)), []);

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

  return (
    <section className="flex flex-col gap-3 border border-line bg-ink p-3">
      <h1 className="font-display text-2xl">Stern–Dreieck</h1>
      <p data-sim-status="" className="text-sm text-gold">
        {phase === "off" ? "Đứng. Bấm S1 để vào sao." : null}
        {phase === "star" ? "K1 và K2 đóng. Dòng khởi động khoảng 1/3." : null}
        {phase === "gap" ? "K2 đã nhả. Chờ tắt hồ quang trước khi đóng K3." : null}
        {phase === "delta" ? "K1 và K3 đóng. Động cơ ở tam giác." : null}
      </p>
      <div className="grid grid-cols-3 gap-2 text-center text-sm">
        <Lamp on={k1} name="K1 lưới" />
        <Lamp on={k2} name="K2 sao" />
        <Lamp on={k3} name="K3 tam giác" />
      </div>
      <p className={fault ? "text-bad" : "text-ok"}>{fault ? "NGẮN MẠCH — cấm K2 và K3 cùng đóng." : "Liên động giữ K2 và K3 loại trừ nhau."}</p>
      <div className="flex gap-2">
        <Btn label="S1" onDown={startSeq} />
        <Btn label="S0" onDown={stopAll} />
      </div>
      <p className="text-xs text-muted">Role nhiệt trên đường dây chỉnh theo In. Nếu đo dòng pha dây quấn phía tam giác thì chỉnh khoảng 0,58 In.</p>
    </section>
  );
}

function Lamp({ on, name }: { on: boolean; name: string }) {
  return (
    <p className={`border px-2 py-3 ${on ? "border-gold text-gold" : "border-line text-muted"}`}>
      <span className="block font-display text-xl">{on ? "ĐÓNG" : "MỞ"}</span>
      {name}
    </p>
  );
}

const SFC = ["Nghỉ", "B1 có phôi", "M1 chạy", "B2 cuối băng", "Xi lanh ra", "Xi lanh về"];

function SfcSim() {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(false);
  useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(() => setStep((value) => (value + 1) % SFC.length), 900);
    return () => window.clearInterval(id);
  }, [auto]);
  useEffect(() => {
    motorHum(step === 2 || step === 3);
    return () => motorHum(false);
  }, [step]);

  return (
    <section className="flex flex-col gap-3 border border-line bg-ink p-3">
      <h1 className="font-display text-2xl">SFC băng tải</h1>
      <p data-sim-status="" className="text-sm text-gold">
        Bước {step + 1}: {SFC[step]}
      </p>
      <ol className="flex flex-col gap-1">
        {SFC.map((label, index) => (
          <li key={label} className={`border px-3 py-2 text-sm ${index === step ? "border-gold text-gold" : "border-line text-muted"}`}>
            {index + 1}. {label}
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-2">
        <Btn label="BƯỚC" onDown={() => { metalClick(); setStep((value) => (value + 1) % SFC.length); }} />
        <Btn label={auto ? "DỪNG" : "TỰ CHẠY"} pressed={auto} onDown={() => setAuto((value) => !value)} />
        <Btn label="RESET" onDown={() => { setAuto(false); setStep(0); metalClick(); }} />
      </div>
    </section>
  );
}

function MaSim() {
  const [pct, setPct] = useState(50);
  const [broken, setBroken] = useState(false);
  const ma = broken ? 0 : 4 + 16 * (pct / 100);
  const meters = (pct / 100) * 5;
  const raw = (ma / 20) * 27648;
  return (
    <section className="flex flex-col gap-3 border border-line bg-ink p-3">
      <h1 className="font-display text-2xl">Vòng 4–20 mA</h1>
      <p data-sim-status="" className="text-sm text-gold">
        {broken ? "Dòng 0 mA. Dưới 3,6 mA: sự cố vòng đo, không phải bể cạn." : `Mức ${meters.toFixed(2).replace(".", ",")} m · ${ma.toFixed(2).replace(".", ",")} mA · raw ${Math.round(raw)}`}
      </p>
      <label className="text-sm text-muted" htmlFor="level">
        Mức bể 0…5 m
      </label>
      <input id="level" type="range" min={0} max={100} value={pct} onChange={(event) => setPct(Number(event.target.value))} className="h-11" />
      <Btn label={broken ? "NỐI LẠI DÂY" : "ĐỨT DÂY"} pressed={broken} onDown={() => { metalClick(); setBroken((value) => !value); }} />
    </section>
  );
}

function SafeSim() {
  const [estop, setEstop] = useState(true);
  const [guard, setGuard] = useState(true);
  const [ch2, setCh2] = useState(true);
  const [armed, setArmed] = useState(false);
  const healthy = estop && guard && ch2;
  const output = healthy && armed;

  function trip(setter: (v: boolean) => void, value: boolean) {
    metalClick();
    setter(value);
    if (!value) setArmed(false);
  }

  return (
    <section className="flex flex-col gap-3 border border-line bg-ink p-3">
      <h1 className="font-display text-2xl">Hai kênh và khóa chạy lại</h1>
      <p data-sim-status="" className="text-sm text-gold">
        {output ? "Ra an toàn đóng. Máy được phép nhận lệnh chạy." : healthy ? "Mạch lành nhưng chưa reset. Không tự chạy." : "Mạch hở. Ra phải tắt ngay."}
      </p>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <Lamp on={estop} name="E-Stop nhả" />
        <Lamp on={guard} name="Cửa đóng" />
        <Lamp on={ch2} name="Kênh 2" />
        <Lamp on={output} name="Ra K_A" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Btn label={estop ? "ĐẤM E-STOP" : "NHẢ NẤM"} onDown={() => trip(setEstop, !estop)} />
        <Btn label={guard ? "MỞ CỬA" : "ĐÓNG CỬA"} onDown={() => trip(setGuard, !guard)} />
        <Btn label={ch2 ? "HỞ KÊNH 2" : "KÊNH 2 KÍN"} onDown={() => trip(setCh2, !ch2)} />
        <Btn
          label="RESET"
          onDown={() => {
            metalClick();
            if (healthy) setArmed(true);
          }}
        />
      </div>
      <p className="text-xs text-muted">Wiederanlaufsperre: hết sự cố chưa đủ. Phải bấm Reset khi mạch đã lành. App không tính Performance Level thay phần mềm SISTEMA.</p>
    </section>
  );
}
