import { useEffect, useState } from "react";
import { TICKER } from "@/lib/eta/content";
import { readCuLive } from "@/lib/eta/cu-live";
import { canChiYear, nextCountdown, solarToLunar, weekdayVi } from "@/lib/eta/lunar";

type Live = {
  clock: string;
  solar: string;
  lunar: string;
  next: string;
  weather: string;
  fx: string;
};

function snapshot(now: Date, weather: string, fx: string): Live {
  const lunar = solarToLunar(now.getDate(), now.getMonth() + 1, now.getFullYear());
  const countdown = nextCountdown(now);
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  return {
    clock: `${hh}:${mm}`,
    solar: `${weekdayVi(now)} ${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")}.${now.getFullYear()}`,
    lunar: `${lunar.day} THÁNG ${lunar.month}${lunar.leap ? " NHUẬN" : ""} · ${canChiYear(lunar.year).toUpperCase()}`,
    next: countdown ? (countdown.days === 0 ? `${countdown.label.toUpperCase()} HÔM NAY` : `${countdown.label.toUpperCase()} CÒN ${countdown.days} NGÀY`) : "—",
    weather,
    fx,
  };
}

export function CuDock({ onSupport }: { onSupport: () => void }) {
  const [live, setLive] = useState<Live | null>(null);

  useEffect(() => {
    let weather = "—";
    let fx = "—";
    const paint = () => setLive(snapshot(new Date(), weather, fx));
    paint();
    const clock = window.setInterval(paint, 30_000);
    void readCuLive()
      .then((data) => {
        if (data.weather) weather = data.weather;
        if (data.fx) fx = data.fx;
        paint();
      })
      .catch(() => undefined);
    return () => window.clearInterval(clock);
  }, []);

  return (
    <div className="gold-thread flex h-full min-h-0 flex-col justify-center bg-navy/80 px-2">
      <div className="overflow-hidden text-gold">
        <p className="ticker-track font-display text-sm tracking-widest">
          <span>{TICKER}</span>
          <span>{TICKER}</span>
        </p>
      </div>
      <div className="mt-1 flex items-center justify-between gap-2 text-xs uppercase tracking-wide text-paper">
        <p className="min-w-0 truncate">{live ? `${live.solar} · ${live.clock}` : "—"}</p>
        <button type="button" className="h-10 shrink-0 rounded-konami border border-gold px-2 text-gold" onClick={onSupport}>
          Ủng hộ
        </button>
      </div>
      <p className="truncate text-xs uppercase tracking-wide text-gold">{live ? `${live.lunar} · ${live.next}` : "—"}</p>
      <p className="truncate text-xs uppercase text-muted">{live ? `${live.weather} · ${live.fx}` : "—"}</p>
    </div>
  );
}
