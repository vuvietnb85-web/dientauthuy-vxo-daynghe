import { createServerFn } from "@tanstack/react-start";

export const readCuLive = createServerFn({ method: "GET" }).handler(async () => {
  let weather: string | null = null;
  let fx: string | null = null;
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=20.42&longitude=106.17&current=temperature_2m",
      { signal: AbortSignal.timeout(4000) },
    );
    if (res.ok) {
      const body = (await res.json()) as { current?: { temperature_2m?: number } };
      const temp = body.current?.temperature_2m;
      if (typeof temp === "number") weather = `${Math.round(temp)} °C NAM ĐỊNH`;
    }
  } catch {
    weather = null;
  }
  try {
    const res = await fetch("https://api.frankfurter.app/latest?from=EUR&to=VND", {
      signal: AbortSignal.timeout(4000),
    });
    if (res.ok) {
      const body = (await res.json()) as { rates?: { VND?: number } };
      const rate = body.rates?.VND;
      if (typeof rate === "number") {
        fx = `1 EUR = ${new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 }).format(rate)} VND`;
      }
    }
  } catch {
    fx = null;
  }
  return { weather, fx };
});
