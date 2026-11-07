let ctx: AudioContext | null = null;
let tap: AudioNode | null = null;
let analyser: AnalyserNode | null = null;
let hum: { stop: () => void } | null = null;
let humOn = false;

function chain() {
  if (ctx && tap) return ctx;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  ctx = new Ctx();
  const highpass = ctx.createBiquadFilter();
  highpass.type = "highpass";
  highpass.frequency.value = 45;
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -16;
  comp.knee.value = 8;
  comp.ratio.value = 3.2;
  comp.attack.value = 0.004;
  comp.release.value = 0.14;
  const makeup = ctx.createGain();
  makeup.gain.value = 1.25;
  const limiter = ctx.createDynamicsCompressor();
  limiter.threshold.value = -2;
  limiter.knee.value = 0;
  limiter.ratio.value = 20;
  limiter.attack.value = 0.002;
  limiter.release.value = 0.08;
  analyser = ctx.createAnalyser();
  analyser.fftSize = 256;
  highpass.connect(comp);
  comp.connect(makeup);
  makeup.connect(limiter);
  limiter.connect(ctx.destination);
  limiter.connect(analyser);
  tap = highpass;
  return ctx;
}

export function ensureAudio() {
  const audio = chain();
  if (audio.state === "suspended") void audio.resume();
  return audio;
}

function panNode(value: number) {
  if (!ctx || !tap) return null;
  const panner = ctx.createStereoPanner();
  panner.pan.value = value;
  panner.connect(tap);
  return panner;
}

export function metalClick() {
  const audio = ensureAudio();
  const dest = panNode(-0.65);
  if (!dest) return;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = "square";
  osc.frequency.setValueAtTime(240, audio.currentTime);
  osc.frequency.exponentialRampToValueAtTime(90, audio.currentTime + 0.045);
  gain.gain.setValueAtTime(0.12, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.06);
  osc.connect(gain);
  gain.connect(dest);
  osc.start();
  osc.stop(audio.currentTime + 0.07);
}

export function motorHum(on: boolean) {
  if (on === humOn) return;
  humOn = on;
  hum?.stop();
  hum = null;
  if (!on) return;
  const audio = ensureAudio();
  const dest = panNode(0);
  if (!dest) return;
  const gain = audio.createGain();
  gain.gain.value = 0.045;
  gain.connect(dest);
  const base = audio.createOscillator();
  base.type = "sine";
  base.frequency.value = 50;
  const harmonic = audio.createOscillator();
  harmonic.type = "triangle";
  harmonic.frequency.value = 100;
  const harmGain = audio.createGain();
  harmGain.gain.value = 0.35;
  base.connect(gain);
  harmonic.connect(harmGain);
  harmGain.connect(gain);
  base.start();
  harmonic.start();
  hum = {
    stop: () => {
      const now = audio.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      base.stop(now + 0.1);
      harmonic.stop(now + 0.1);
    },
  };
}

export function readMeter() {
  if (!analyser) return null;
  const data = new Uint8Array(analyser.fftSize);
  analyser.getByteTimeDomainData(data);
  return data;
}
