import { useState, type ReactNode } from "react";
import {
  BANDS,
  MULTI_BANDS,
  TOL_BANDS,
  apparentFromP,
  ceilStep,
  dropPercent,
  engToMa,
  fmt,
  maToEng,
  maToSiemens,
  motorCurrent,
  pickDevice,
  powerFromCurrent,
  reactiveKvar,
  resistor4,
  slipRatio,
  syncRpm,
  thermalSet,
  transformerCurrents,
  voltageDrop,
} from "@/lib/eta/calc";

type Tool = "motor" | "drop" | "guard" | "pfc" | "speed" | "power" | "thermal" | "analog" | "trafo" | "color";

const TOOLS: { id: Tool; label: string }[] = [
  { id: "motor", label: "Dòng động cơ" },
  { id: "drop", label: "Sụt áp" },
  { id: "guard", label: "Ib In Iz" },
  { id: "pfc", label: "Bù cosφ" },
  { id: "speed", label: "Tốc độ" },
  { id: "power", label: "P Q S" },
  { id: "thermal", label: "Role nhiệt" },
  { id: "analog", label: "4–20 mA" },
  { id: "trafo", label: "Biến áp" },
  { id: "color", label: "Vòng màu" },
];

function Field({ label, value, onChange, step = "0.01" }: { label: string; value: string; onChange: (v: string) => void; step?: string }) {
  const id = label.replace(/\s+/g, "-");
  return (
    <label className="flex flex-col gap-1 text-sm" htmlFor={id}>
      <span className="text-muted">{label}</span>
      <input id={id} inputMode="decimal" step={step} value={value} onChange={(event) => onChange(event.target.value)} className="h-11 border border-line bg-ink px-3" />
    </label>
  );
}

function n(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

export function CalcPanel() {
  const [tool, setTool] = useState<Tool>("motor");
  const [pKw, setPKw] = useState("5.5");
  const [volt, setVolt] = useState("400");
  const [cos, setCos] = useState("0.85");
  const [eta, setEta] = useState("0.9");
  const [phase, setPhase] = useState<"1" | "3">("3");
  const [lengthM, setLengthM] = useState("40");
  const [amp, setAmp] = useState("16");
  const [section, setSection] = useState("2.5");
  const [kappa, setKappa] = useState("56");
  const [ib, setIb] = useState("18");
  const [iz, setIz] = useState("24");
  const [cos2, setCos2] = useState("0.95");
  const [freq, setFreq] = useState("50");
  const [pairs, setPairs] = useState("2");
  const [rpm, setRpm] = useState("1450");
  const [place, setPlace] = useState<"line" | "winding">("line");
  const [ma, setMa] = useState("12");
  const [min, setMin] = useState("0");
  const [max, setMax] = useState("5");
  const [u1, setU1] = useState("400");
  const [u2, setU2] = useState("24");
  const [sva, setSva] = useState("250");
  const [bandA, setBandA] = useState("nâu");
  const [bandB, setBandB] = useState("đen");
  const [bandM, setBandM] = useState("đỏ");
  const [bandT, setBandT] = useState("vàngkim");

  const pW = n(pKw) * 1000;
  const motorI = motorCurrent(pW, n(volt), n(cos), n(eta));
  const drop = voltageDrop({
    phase: phase === "3" ? 3 : 1,
    lengthM: n(lengthM),
    currentA: n(amp),
    cos: n(cos),
    kappa: n(kappa),
    sectionMm2: n(section),
  });
  const dropPct = dropPercent(drop, n(volt));
  const guard = pickDevice(n(ib), n(iz));
  const kvar = reactiveKvar(n(pKw), n(cos), n(cos2));
  const sync = syncRpm(n(freq), n(pairs));
  const slip = slipRatio(sync, n(rpm));
  const power = powerFromCurrent(n(volt), n(amp), n(cos), phase === "3" ? 3 : 1);
  const fromP = apparentFromP(pW, n(cos));
  const thermal = thermalSet(motorI, place);
  const level = maToEng(n(ma), n(min), n(max));
  const backMa = engToMa(level, n(min), n(max));
  const raw = maToSiemens(n(ma));
  const trafo = transformerCurrents(n(u1), n(u2), n(sva), phase === "3" ? 3 : 1);
  const color = resistor4(bandA, bandB, bandM, bandT);
  const limit = 3;
  const otherLimit = 5;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1 overflow-x-auto">
        {TOOLS.map((item) => (
          <button key={item.id} type="button" onClick={() => setTool(item.id)} className={`h-11 shrink-0 rounded-konami px-3 text-sm ${tool === item.id ? "bg-gold text-ink" : "border border-line"}`}>
            {item.label}
          </button>
        ))}
      </div>

      {tool === "motor" ? (
        <CalcCard title="Dòng dây động cơ 3 pha" formula="I = P / (√3 · U · cosφ · η)">
          <Field label="P (kW)" value={pKw} onChange={setPKw} />
          <Field label="U dây (V)" value={volt} onChange={setVolt} />
          <Field label="cosφ" value={cos} onChange={setCos} />
          <Field label="η (0–1)" value={eta} onChange={setEta} />
          <Result label="Dòng dây" value={`${fmt(motorI)} A`} ok={Number.isFinite(motorI)} />
          <p className="text-xs text-muted">Ví dụ xưởng 5,5 kW · 400 V · 0,85 · 0,90 ra khoảng 10,38 A. Thiếu η thì không lấy cosφ làm hiệu suất.</p>
        </CalcCard>
      ) : null}

      {tool === "drop" ? (
        <CalcCard title="Sụt áp tuyến dây" formula={phase === "3" ? "ΔU = √3 · L · I · cosφ / (κ · A)" : "ΔU = 2 · L · I · cosφ / (κ · A)"}>
          <Select label="Mạch" value={phase} onChange={setPhase} options={[["3", "Ba pha"], ["1", "Một pha"]]} />
          <Field label="L một chiều (m)" value={lengthM} onChange={setLengthM} />
          <Field label="I (A)" value={amp} onChange={setAmp} />
          <Field label="cosφ" value={cos} onChange={setCos} />
          <Field label="A (mm²)" value={section} onChange={setSection} />
          <Field label="κ (Cu 56, Al 33)" value={kappa} onChange={setKappa} />
          <Field label="U danh định (V)" value={volt} onChange={setVolt} />
          <Result label="ΔU" value={`${fmt(drop)} V · ${fmt(dropPct)} %`} ok={dropPct <= otherLimit} />
          <p className="text-xs text-muted">
            Ngưỡng hay dạy theo DIN VDE 0100-520: chiếu sáng {limit} %, phụ tải khác {otherLimit} %. Kết quả này không phải Iz của cáp.
          </p>
        </CalcCard>
      ) : null}

      {tool === "guard" ? (
        <CalcCard title="Phối hợp bảo vệ" formula="Ib ≤ In ≤ Iz">
          <Field label="Ib dòng làm việc (A)" value={ib} onChange={setIb} />
          <Field label="Iz tra bảng cáp (A)" value={iz} onChange={setIz} />
          <Result label="In chọn được" value={guard.inA == null ? "Không có bậc" : `${fmt(guard.inA, 0)} A`} ok={guard.inA != null} />
          <p className="text-sm">{guard.reason}</p>
          <p className="text-xs text-muted">Iz phải lấy từ DIN VDE 0298-4 theo cách đặt cáp. App không bịa dòng chịu tải.</p>
        </CalcCard>
      ) : null}

      {tool === "pfc" ? (
        <CalcCard title="Bù công suất phản kháng" formula="Qc = P (tanφ1 − tanφ2)">
          <Field label="P (kW)" value={pKw} onChange={setPKw} />
          <Field label="cosφ hiện tại" value={cos} onChange={setCos} />
          <Field label="cosφ mục tiêu" value={cos2} onChange={setCos2} />
          <Result label="Qc cần" value={`${fmt(kvar)} kvar`} ok={kvar > 0} />
          <p className="text-sm">Bậc tụ xưởng kế tiếp: {fmt(ceilStep(kvar), kvar >= 10 ? 0 : 1)} kvar.</p>
        </CalcCard>
      ) : null}

      {tool === "speed" ? (
        <CalcCard title="Tốc độ đồng bộ và độ trượt" formula="ns = 60 · f / p    ·    s = (ns − n) / ns">
          <Field label="f (Hz)" value={freq} onChange={setFreq} />
          <Field label="p số đôi cực" value={pairs} onChange={setPairs} step="1" />
          <Field label="n thực (min⁻¹)" value={rpm} onChange={setRpm} step="1" />
          <Result label="ns và s" value={`${fmt(sync, 0)} min⁻¹ · ${fmt(slip * 100)} %`} ok={slip >= 0 && slip < 0.15} />
          <p className="text-xs text-muted">p = 2 là động cơ 4 cực. Số cực = 2p. Trượt âm nghĩa là đang ở chế độ máy phát hoặc nhập n lớn hơn ns.</p>
        </CalcCard>
      ) : null}

      {tool === "power" ? (
        <CalcCard title="Tam giác công suất" formula="P = √3 · U · I · cosφ    ·    S = P / cosφ">
          <Field label="U (V)" value={volt} onChange={setVolt} />
          <Field label="I (A)" value={amp} onChange={setAmp} />
          <Field label="cosφ" value={cos} onChange={setCos} />
          <Field label="P nếu biết trước (kW)" value={pKw} onChange={setPKw} />
          <Select label="Pha" value={phase} onChange={setPhase} options={[["3", "Ba pha"], ["1", "Một pha"]]} />
          <Result label="Từ U và I" value={`P ${fmt(power.pW / 1000)} kW · Q ${fmt(power.qVar / 1000)} kvar · S ${fmt(power.sVa / 1000)} kVA`} ok />
          <p className="text-sm">Từ P và cosφ: S {fmt(fromP.sVa / 1000)} kVA · Q {fmt(fromP.qVar / 1000)} kvar.</p>
        </CalcCard>
      ) : null}

      {tool === "thermal" ? (
        <CalcCard title="Điểm chỉnh role nhiệt" formula={place === "line" ? "I chỉnh ≈ In" : "I chỉnh ≈ In / √3 ≈ 0,58 · In"}>
          <Field label="P (kW)" value={pKw} onChange={setPKw} />
          <Field label="U dây (V)" value={volt} onChange={setVolt} />
          <Field label="cosφ" value={cos} onChange={setCos} />
          <Field label="η" value={eta} onChange={setEta} />
          <Select label="Vị trí role" value={place} onChange={setPlace} options={[["line", "Đường dây nguồn"], ["winding", "Pha dây quấn sau contactor tam giác"]]} />
          <Result label="In tính được" value={`${fmt(motorI)} A`} ok={Number.isFinite(motorI)} />
          <Result label="Điểm chỉnh" value={`${fmt(thermal)} A`} ok={Number.isFinite(thermal)} />
        </CalcCard>
      ) : null}

      {tool === "analog" ? (
        <CalcCard title="Thang 4–20 mA" formula="x = xmin + (I − 4) / 16 · (xmax − xmin)">
          <Field label="I (mA)" value={ma} onChange={setMa} />
          <Field label="xmin" value={min} onChange={setMin} />
          <Field label="xmax" value={max} onChange={setMax} />
          <Result label="Giá trị đo" value={fmt(level)} ok={n(ma) >= 3.6 && n(ma) <= 21} />
          <p className="text-sm">Đối chiếu dòng: {fmt(backMa)} mA. Số nguyên kiểu 0…27648 cho 0…20 mA: {fmt(raw, 0)}.</p>
          <p className="text-xs text-muted">{n(ma) < 3.6 ? "Dưới 3,6 mA: coi là đứt dây hoặc mất nguồn vòng, không phải mức 0." : "4 mA là đầu thang, không phải sự cố."}</p>
        </CalcCard>
      ) : null}

      {tool === "trafo" ? (
        <CalcCard title="Dòng biến áp lý tưởng" formula={phase === "3" ? "I = S / (√3 · U)" : "I = S / U"}>
          <Select label="Pha" value={phase} onChange={setPhase} options={[["1", "Một pha"], ["3", "Ba pha"]]} />
          <Field label="U1 (V)" value={u1} onChange={setU1} />
          <Field label="U2 (V)" value={u2} onChange={setU2} />
          <Field label="S (VA)" value={sva} onChange={setSva} />
          <Result label="Tỉ số U1/U2" value={fmt(trafo.ratio, 3)} ok />
          <Result label="I1 và I2" value={`${fmt(trafo.i1)} A · ${fmt(trafo.i2)} A`} ok />
        </CalcCard>
      ) : null}

      {tool === "color" ? (
        <CalcCard title="Điện trở 4 vòng" formula="R = (10·a + b) · hệ số">
          <Select label="Vòng 1" value={bandA} onChange={setBandA} options={BANDS.map((item) => [item, item])} />
          <Select label="Vòng 2" value={bandB} onChange={setBandB} options={BANDS.map((item) => [item, item])} />
          <Select label="Nhân" value={bandM} onChange={setBandM} options={MULTI_BANDS.map((item) => [item, item === "vàngkim" ? "vàng kim" : item])} />
          <Select label="Dung sai" value={bandT} onChange={setBandT} options={TOL_BANDS.map((item) => [item, item === "vàngkim" ? "vàng kim" : item])} />
          <Result label="R" value={`${fmt(color.ohm, color.ohm >= 100 ? 0 : 2)} Ω · ${color.tol}`} ok={Number.isFinite(color.ohm)} />
        </CalcCard>
      ) : null}
    </div>
  );
}

function CalcCard({ title, formula, children }: { title: string; formula: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3 border border-line bg-ink p-3">
      <h1 className="font-display text-2xl leading-none">{title}</h1>
      <p className="text-sm text-gold">{formula}</p>
      <div className="calc-grid">{children}</div>
    </section>
  );
}

function Result({ label, value, ok }: { label: string; value: string; ok: boolean }) {
  return (
    <p className={`col-span-2 border px-3 py-2 ${ok ? "border-gold text-paper" : "border-bad text-bad"}`}>
      <span className="block text-xs text-muted">{label}</span>
      <span className="font-display text-2xl">{value}</span>
    </p>
  );
}

function Select<T extends string>({ label, value, onChange, options }: { label: string; value: T; onChange: (v: T) => void; options: [T, string][] }) {
  const id = `sel-${label}`;
  return (
    <label className="span-2 flex flex-col gap-1 text-sm" htmlFor={id}>
      <span className="text-muted">{label}</span>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value as T)} className="h-11 border border-line bg-ink px-2">
        {options.map(([key, text]) => (
          <option key={key} value={key}>
            {text}
          </option>
        ))}
      </select>
    </label>
  );
}
