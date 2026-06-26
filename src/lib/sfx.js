// Retro 8-bit Synthesizer Sound Effects using Web Audio API
let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  // Resume context if suspended (browser security autoplays)
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// 1. Hover Blip (Subtle high-pitched synth click)
export function playHover() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'triangle'; // triangle has a softer retro sound than square
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

  gain.gain.setValueAtTime(0.02, ctx.currentTime); // very low volume so it is pleasant
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.05);
}

// 2. Click Blip (Slightly lower pitch)
export function playClick() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'square';
  osc.frequency.setValueAtTime(400, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.08);

  gain.gain.setValueAtTime(0.03, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.08);
}

// 3. Success Fanfare (Double coin pickup sound)
export function playSuccess() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  
  // Note 1
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.connect(gain1);
  gain1.connect(ctx.destination);
  osc1.type = 'square';
  osc1.frequency.setValueAtTime(523.25, now); // C5
  gain1.gain.setValueAtTime(0.04, now);
  gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
  osc1.start(now);
  osc1.stop(now + 0.1);

  // Note 2 (slightly delayed)
  setTimeout(() => {
    const ctx2 = getAudioContext();
    if (!ctx2) return;
    const now2 = ctx2.currentTime;
    const osc2 = ctx2.createOscillator();
    const gain2 = ctx2.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx2.destination);
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(659.25, now2); // E5
    gain2.gain.setValueAtTime(0.04, now2);
    gain2.gain.exponentialRampToValueAtTime(0.001, now2 + 0.15);
    osc2.start(now2);
    osc2.stop(now2 + 0.15);
  }, 80);

  // Note 3 (final high note)
  setTimeout(() => {
    const ctx3 = getAudioContext();
    if (!ctx3) return;
    const now3 = ctx3.currentTime;
    const osc3 = ctx3.createOscillator();
    const gain3 = ctx3.createGain();
    osc3.connect(gain3);
    gain3.connect(ctx3.destination);
    osc3.type = 'square';
    osc3.frequency.setValueAtTime(783.99, now3); // G5
    gain3.gain.setValueAtTime(0.05, now3);
    gain3.gain.exponentialRampToValueAtTime(0.001, now3 + 0.25);
    osc3.start(now3);
    osc3.stop(now3 + 0.25);
  }, 160);
}

// 4. Fail Crash (Buzzing down-slide crash)
export function playFail() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(180, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(60, ctx.currentTime + 0.25);

  gain.gain.setValueAtTime(0.06, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.25);
}
