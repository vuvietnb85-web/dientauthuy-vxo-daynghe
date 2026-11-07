import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Bot,
  Calculator,
  Check,
  ClipboardCheck,
  Cpu,
  PanelLeftClose,
  PanelLeftOpen,
  Volume2,
} from "lucide-react";
import { FELDER } from "@/lib/eta/content";
import { ensureAudio } from "@/lib/eta/audio";
import { useEta, type TabId } from "@/lib/eta/store";
import { CalcPanel } from "./calc-panel";
import { CuDock } from "./cu-dock";
import { ExamPanel } from "./exam-panel";
import { LearnPanel } from "./learn-panel";
import { SimPanel } from "./sim-panel";
import { TutorPanel } from "./tutor-panel";

const TABS: { id: TabId; label: string; icon: typeof BookOpen }[] = [
  { id: "hoc", label: "Giáo trình", icon: BookOpen },
  { id: "tinh", label: "Tính", icon: Calculator },
  { id: "mo", label: "Mô phỏng", icon: Cpu },
  { id: "thi", label: "Thi", icon: ClipboardCheck },
  { id: "thay", label: "Thầy", icon: Bot },
];

function speakLesson(lessonId: number) {
  const feld = FELDER.find((item) => item.id === lessonId);
  if (!feld || typeof window === "undefined" || !window.speechSynthesis) return;
  ensureAudio();
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(`${feld.vi}. ${feld.goal}`);
  utter.lang = "vi-VN";
  const voice = window.speechSynthesis.getVoices().find((item) => item.lang.toLowerCase().startsWith("vi"));
  if (voice) utter.voice = voice;
  utter.rate = 0.96;
  window.speechSynthesis.speak(utter);
}

export function MeisterApp() {
  const tab = useEta((s) => s.tab);
  const setTab = useEta((s) => s.setTab);
  const lesson = useEta((s) => s.lesson);
  const markRead = useEta((s) => s.markRead);
  const railsOpen = useEta((s) => s.railsOpen);
  const setRails = useEta((s) => s.setRails);
  const sticker = useEta((s) => s.sticker);
  const setSticker = useEta((s) => s.setSticker);
  const read = useEta((s) => s.read);
  const frame = useRef<HTMLDivElement>(null);
  const drag = useRef<{ px: number; py: number; x: number; y: number; moved: boolean } | null>(null);
  const [support, setSupport] = useState(false);

  useEffect(() => {
    void useEta.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (!support) return;
    const render = () => {
      const paypal = (window as Window & {
        paypal?: { HostedButtons: (args: { hostedButtonId: string }) => { render: (sel: string) => void } };
      }).paypal;
      const el = document.getElementById("paypal-container-T7AZ748Y27248");
      if (!paypal || !el || el.childElementCount > 0) return;
      paypal.HostedButtons({ hostedButtonId: "T7AZ748Y27248" }).render("#paypal-container-T7AZ748Y27248");
    };
    const existing = document.getElementById("paypal-sdk-hosted");
    if (existing) {
      render();
      return;
    }
    const script = document.createElement("script");
    script.id = "paypal-sdk-hosted";
    script.async = true;
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAAIfuQli_a3Qud-8CIRqCRCeohqtiW29_i2Txx2rQM35pqMc-pbCIZX6L8tx1zbyOj_vp8AUE_dpSqOhc&components=hosted-buttons&disable-funding=venmo&currency=USD";
    script.onload = render;
    document.body.appendChild(script);
  }, [support]);

  const done = read.length;

  return (
    <div ref={frame} className={`schematic relative flex h-dvh flex-col ${railsOpen ? "cockpit" : "cockpit shut"}`}>
      <aside className={`mica-rail mica-left fixed inset-y-0 left-0 z-30 flex flex-col items-center gap-2 py-3 ${railsOpen ? "w-[3.15rem]" : "w-4"}`}>
        <span className="font-display text-xs tracking-widest text-gold">NGAME</span>
        {railsOpen
          ? TABS.map((item) => {
              const Icon = item.icon;
              const on = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={item.label}
                  onClick={() => setTab(item.id)}
                  className={`flex h-11 w-11 items-center justify-center rounded-konami border ${on ? "border-gold bg-gold text-ink" : "border-line bg-panel text-paper"}`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </button>
              );
            })
          : null}
        <button
          type="button"
          className="mt-auto flex h-11 w-11 items-center justify-center text-gold"
          aria-label={railsOpen ? "Thu thanh NGAME" : "Mở thanh NGAME"}
          onClick={() => setRails(!railsOpen)}
        >
          {railsOpen ? <PanelLeftClose className="size-5" /> : <PanelLeftOpen className="size-5" />}
        </button>
      </aside>

      <aside className={`mica-rail mica-right fixed inset-y-0 right-0 z-30 flex flex-col items-center gap-2 py-3 ${railsOpen ? "w-[3.15rem]" : "w-4"}`}>
        <span className="font-display text-xs tracking-widest text-gold">ETA</span>
        {railsOpen ? (
          <>
            <button type="button" aria-label="Nghe bài" className="flex h-11 w-11 items-center justify-center rounded-konami border border-line bg-panel text-paper" onClick={() => speakLesson(lesson)}>
              <Volume2 className="size-5" />
            </button>
            <button type="button" aria-label="Đánh dấu đã học" className="flex h-11 w-11 items-center justify-center rounded-konami border border-line bg-panel text-paper" onClick={() => markRead(lesson)}>
              <Check className="size-5" />
            </button>
            <button type="button" aria-label="Mở mô phỏng" className="flex h-11 w-11 items-center justify-center rounded-konami border border-line bg-panel text-paper" onClick={() => setTab("mo")}>
              <Cpu className="size-5" />
            </button>
            <button type="button" aria-label="Mở máy tính" className="flex h-11 w-11 items-center justify-center rounded-konami border border-line bg-panel text-paper" onClick={() => setTab("tinh")}>
              <Calculator className="size-5" />
            </button>
          </>
        ) : null}
      </aside>

      <section className="zone-new mt-2 flex min-h-0 flex-col px-1">
        <div className="gold-thread flex min-h-0 flex-1 flex-col bg-panel/90">
          <header className="flex items-end justify-between gap-3 border-b border-line px-3 py-2">
            <div>
              <p className="font-display text-2xl leading-none tracking-wide text-gold">MEISTER ETA</p>
              <p className="text-xs text-muted">Elektroniker für Automatisierungstechnik · chuẩn Đức</p>
            </div>
            <p className="text-right text-xs text-paper">
              Đã học {done}/13
              <span className="mt-1 block h-1.5 w-24 bg-ink">
                <span className="block h-full bg-gold" style={{ width: `${(done / 13) * 100}%` }} />
              </span>
            </p>
          </header>
          <nav className="flex gap-1 overflow-x-auto px-2 py-2">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`h-11 shrink-0 rounded-konami px-3 text-sm font-semibold ${tab === item.id ? "bg-gold text-ink" : "border border-line text-paper"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-3">
            {tab === "hoc" ? <LearnPanel /> : null}
            {tab === "tinh" ? <CalcPanel /> : null}
            {tab === "mo" ? <SimPanel /> : null}
            {tab === "thi" ? <ExamPanel /> : null}
            {tab === "thay" ? <TutorPanel /> : null}
          </div>
        </div>
      </section>

      <section className="zone-cu mb-2 mt-3 px-1">
        <CuDock onSupport={() => setSupport(true)} />
      </section>

      <button
        type="button"
        aria-label="Sticker mica PWAMC, chạm để nghe bài, kéo để dời"
        className="sticker-mica absolute z-40 flex h-14 w-14 items-center justify-center rounded-full font-display text-xs font-bold tracking-wide text-ink"
        style={{ left: `${sticker.x}%`, top: `${sticker.y}%` }}
        onPointerDown={(event) => {
          (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
          drag.current = { px: event.clientX, py: event.clientY, x: sticker.x, y: sticker.y, moved: false };
        }}
        onPointerMove={(event) => {
          if (!drag.current || !frame.current) return;
          const rect = frame.current.getBoundingClientRect();
          const dx = ((event.clientX - drag.current.px) / rect.width) * 100;
          const dy = ((event.clientY - drag.current.py) / rect.height) * 100;
          if (Math.hypot(dx, dy) > 1.2) drag.current.moved = true;
          setSticker({
            x: Math.min(86, Math.max(8, drag.current.x + dx)),
            y: Math.min(78, Math.max(6, drag.current.y + dy)),
          });
        }}
        onPointerUp={() => {
          const moved = drag.current?.moved;
          drag.current = null;
          if (!moved) speakLesson(lesson);
        }}
      >
        NGHE
      </button>

      {support ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 p-4" role="dialog" aria-label="Ủng hộ xưởng">
          <div className="gold-thread w-full max-w-md bg-panel p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-xl text-gold">ỦNG HỘ XƯỞNG</h2>
              <button type="button" className="h-11 rounded-konami border border-line px-3" onClick={() => setSupport(false)}>
                Đóng
              </button>
            </div>
            <p className="mb-3 text-sm text-muted">Nút PayPal chỉ tải khi mở tấm này. Không chặn bài học.</p>
            <div id="paypal-container-T7AZ748Y27248" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
