export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function fmt(n: number, digits = 2) {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);
}

export function motorCurrent(pW: number, uV: number, cos: number, eta: number) {
  const den = Math.sqrt(3) * uV * cos * eta;
  if (!(den > 0)) return Number.NaN;
  return pW / den;
}

export function voltageDrop(opts: {
  phase: 1 | 3;
  lengthM: number;
  currentA: number;
  cos: number;
  kappa: number;
  sectionMm2: number;
}) {
  if (!(opts.kappa > 0) || !(opts.sectionMm2 > 0)) return Number.NaN;
  const k = opts.phase === 3 ? Math.sqrt(3) : 2;
  return (k * opts.lengthM * opts.currentA * opts.cos) / (opts.kappa * opts.sectionMm2);
}

export function dropPercent(deltaU: number, uV: number) {
  if (!(uV > 0)) return Number.NaN;
  return (deltaU / uV) * 100;
}

export function reactiveKvar(pKw: number, cos1: number, cos2: number) {
  const c1 = clamp(cos1, 0.05, 0.999);
  const c2 = clamp(cos2, 0.05, 0.999);
  return pKw * (Math.tan(Math.acos(c1)) - Math.tan(Math.acos(c2)));
}

export const CAP_STEPS = [1, 1.5, 2, 2.5, 5, 7.5, 10, 12.5, 15, 20, 25, 30, 40, 50, 60, 75, 100];

export function ceilStep(kvar: number) {
  if (!(kvar > 0)) return 0;
  return CAP_STEPS.find((s) => s >= kvar - 1e-9) ?? CAP_STEPS[CAP_STEPS.length - 1];
}

export function syncRpm(freqHz: number, polePairs: number) {
  if (!(polePairs > 0)) return Number.NaN;
  return (60 * freqHz) / polePairs;
}

export function slipRatio(sync: number, actual: number) {
  if (!(sync > 0)) return Number.NaN;
  return (sync - actual) / sync;
}

export function powerFromCurrent(uV: number, iA: number, cos: number, phase: 1 | 3) {
  const c = clamp(cos, -1, 1);
  const s = (phase === 3 ? Math.sqrt(3) : 1) * uV * iA;
  const p = s * c;
  const q = s * Math.sin(Math.acos(c));
  return { sVa: s, pW: p, qVar: q };
}

export function apparentFromP(pW: number, cos: number) {
  const c = clamp(Math.abs(cos), 0.05, 1);
  const s = pW / c;
  const q = pW * Math.tan(Math.acos(c));
  return { sVa: s, qVar: q };
}

export function thermalSet(inA: number, place: "line" | "winding") {
  if (!(inA > 0)) return Number.NaN;
  return place === "line" ? inA : inA / Math.sqrt(3);
}

export function maToEng(ma: number, min: number, max: number) {
  return min + ((ma - 4) / 16) * (max - min);
}

export function engToMa(value: number, min: number, max: number) {
  const span = max - min;
  if (span === 0) return Number.NaN;
  return 4 + ((value - min) / span) * 16;
}

export function maToSiemens(ma: number) {
  return (ma / 20) * 27648;
}

export function transformerCurrents(u1: number, u2: number, sVa: number, phase: 1 | 3) {
  const k = phase === 3 ? Math.sqrt(3) : 1;
  if (!(u1 > 0) || !(u2 > 0)) return { i1: Number.NaN, i2: Number.NaN, ratio: Number.NaN };
  return { i1: sVa / (k * u1), i2: sVa / (k * u2), ratio: u1 / u2 };
}

export const DEVICE_STEPS = [6, 10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160];

export function pickDevice(ib: number, iz: number) {
  if (!(ib > 0) || !(iz > 0)) return { inA: null as number | null, reason: "Thiếu Ib hoặc Iz." };
  if (ib > iz) {
    return { inA: null, reason: "Ib lớn hơn Iz. Dây không chịu nổi dòng làm việc — tăng tiết diện hoặc giảm tải trước khi chọn thiết bị bảo vệ." };
  }
  const inA = DEVICE_STEPS.find((n) => n >= ib && n <= iz) ?? null;
  if (inA == null) {
    return { inA: null, reason: "Không có bậc In tiêu chuẩn nào thỏa Ib ≤ In ≤ Iz. Đổi tiết diện hoặc bậc bảo vệ." };
  }
  return { inA, reason: `Chuỗi đúng: Ib ${fmt(ib, 2)} A ≤ In ${fmt(inA, 0)} A ≤ Iz ${fmt(iz, 2)} A.` };
}

const COLOR_DIGIT: Record<string, number> = {
  đen: 0,
  nâu: 1,
  đỏ: 2,
  cam: 3,
  vàng: 4,
  lục: 5,
  lam: 6,
  tím: 7,
  xám: 8,
  trắng: 9,
};

export const BANDS = Object.keys(COLOR_DIGIT);

const MULTIPLIER: Record<string, number> = {
  đen: 1,
  nâu: 10,
  đỏ: 100,
  cam: 1_000,
  vàng: 10_000,
  lục: 100_000,
  lam: 1_000_000,
  tím: 10_000_000,
  xám: 100_000_000,
  trắng: 1_000_000_000,
  vàngkim: 0.1,
  bạc: 0.01,
};

export const MULTI_BANDS = Object.keys(MULTIPLIER);

const TOLERANCE: Record<string, string> = {
  nâu: "±1 %",
  đỏ: "±2 %",
  lục: "±0,5 %",
  vàngkim: "±5 %",
  bạc: "±10 %",
};

export const TOL_BANDS = Object.keys(TOLERANCE);

export function resistor4(a: string, b: string, m: string, t: string) {
  const d1 = COLOR_DIGIT[a];
  const d2 = COLOR_DIGIT[b];
  const mul = MULTIPLIER[m];
  if (d1 == null || d2 == null || mul == null) return { ohm: Number.NaN, tol: "—" };
  return { ohm: (d1 * 10 + d2) * mul, tol: TOLERANCE[t] ?? "—" };
}

export function germanGrade(percent: number) {
  if (percent >= 92) return { note: "1", name: "sehr gut · rất tốt" };
  if (percent >= 81) return { note: "2", name: "gut · tốt" };
  if (percent >= 67) return { note: "3", name: "befriedigend · đạt khá" };
  if (percent >= 50) return { note: "4", name: "ausreichend · đạt" };
  if (percent >= 30) return { note: "5", name: "mangelhaft · chưa đạt" };
  return { note: "6", name: "ungenügend · kém" };
}
