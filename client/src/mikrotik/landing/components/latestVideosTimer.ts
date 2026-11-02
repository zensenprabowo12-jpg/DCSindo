/**
 * Mesin status timer slider "Latest from MikroTik" — fungsi murni, tanpa
 * React/DOM, supaya aturan waktunya bisa diuji terpisah.
 *
 * Aturan per slide:
 *  - Tanpa interaksi: pada 0:30 video dijeda 5 detik, lalu pindah slide.
 *  - Ada interaksi: batas jadi 1:30 (dihitung dari awal slide). Interaksi
 *    berikutnya TIDAK memperpanjang lagi.
 *  - Video selesai sebelum batas: tahan 5 detik di kondisi akhir, lalu pindah.
 *  - Slide terakhir -> kembali ke slide pertama.
 *  - Timer BEKU selama section tidak terlihat, player fullscreen, atau video
 *    dijeda oleh pengguna — tidak pernah auto-advance dari kondisi itu.
 *  - Pindah lewat panah/titik: slide baru mulai segar dengan batas 0:30.
 *
 * `elapsedMs` adalah waktu menonton yang dihitung (bagian beku dan jeda 5
 * detik tidak ikut dihitung), bukan jam dinding.
 */

export const BASE_LIMIT_MS = 30_000;
export const EXTENDED_LIMIT_MS = 90_000;
export const HOLD_MS = 5_000;
/** Batas dt per tick: tab yang di-throttle/tidur tidak boleh melompati aturan. */
export const MAX_TICK_MS = 1_000;

export type SlideTimerState = {
  index: number;
  count: number;
  /** Naik tiap slide dimulai ulang — dipakai sebagai key agar player di-mount ulang. */
  serial: number;
  elapsedMs: number;
  limitMs: number;
  extended: boolean;
  phase: "counting" | "holding";
  holdReason: "limit" | "ended" | null;
  holdMs: number;
  visible: boolean;
  fullscreen: boolean;
  userPaused: boolean;
};

export type SlideTimerEvent =
  | { type: "tick"; dtMs: number }
  | { type: "interaction" }
  | { type: "visibility"; visible: boolean }
  | { type: "fullscreen"; active: boolean }
  | { type: "userPause" }
  /** Player mulai/lanjut main. `user` = dipicu pengguna, bukan autoplay/perintah kita. */
  | { type: "playing"; user: boolean }
  | { type: "ended" }
  | { type: "goTo"; index: number }
  | { type: "next" }
  | { type: "prev" };

export type PlayerCommand = "play" | "pause";

export type StepResult = { state: SlideTimerState; commands: PlayerCommand[] };

export function initSlideTimer(count: number, index = 0): SlideTimerState {
  return {
    index: Math.max(0, Math.min(index, count - 1)),
    count,
    serial: 0,
    elapsedMs: 0,
    limitMs: BASE_LIMIT_MS,
    extended: false,
    phase: "counting",
    holdReason: null,
    holdMs: 0,
    visible: false,
    fullscreen: false,
    userPaused: false,
  };
}

export function isFrozen(s: SlideTimerState): boolean {
  return !s.visible || s.fullscreen || s.userPaused;
}

/** Apakah player slide aktif semestinya sedang main sekarang. */
export function shouldBePlaying(s: SlideTimerState): boolean {
  return s.phase === "counting" && !isFrozen(s);
}

function freshSlide(s: SlideTimerState, index: number): SlideTimerState {
  return {
    ...s,
    index,
    serial: s.serial + 1,
    elapsedMs: 0,
    limitMs: BASE_LIMIT_MS,
    extended: false,
    phase: "counting",
    holdReason: null,
    holdMs: 0,
    fullscreen: false,
    userPaused: false,
  };
}

const wrap = (i: number, count: number) => ((i % count) + count) % count;

/** Interaksi pertama memperpanjang batas ke 1:30; berikutnya tidak berefek. */
function applyInteraction(s: SlideTimerState): StepResult {
  if (s.extended) return { state: s, commands: [] };
  const next: SlideTimerState = { ...s, extended: true, limitMs: EXTENDED_LIMIT_MS };
  // Sedang jeda 5 detik karena batas 0:30 -> batalkan jeda dan lanjut main.
  if (s.phase === "holding" && s.holdReason === "limit" && s.elapsedMs < EXTENDED_LIMIT_MS) {
    const resumed: SlideTimerState = { ...next, phase: "counting", holdReason: null, holdMs: 0 };
    return { state: resumed, commands: isFrozen(resumed) ? [] : ["play"] };
  }
  return { state: next, commands: [] };
}

export function stepSlideTimer(s: SlideTimerState, ev: SlideTimerEvent): StepResult {
  const none = (state: SlideTimerState): StepResult => ({ state, commands: [] });

  switch (ev.type) {
    case "tick": {
      if (isFrozen(s) || s.count === 0) return none(s);
      const dt = Math.max(0, Math.min(ev.dtMs, MAX_TICK_MS));
      if (s.phase === "counting") {
        const elapsedMs = s.elapsedMs + dt;
        if (elapsedMs >= s.limitMs) {
          return { state: { ...s, elapsedMs, phase: "holding", holdReason: "limit", holdMs: 0 }, commands: ["pause"] };
        }
        return none({ ...s, elapsedMs });
      }
      const holdMs = s.holdMs + dt;
      if (holdMs >= HOLD_MS) return none(freshSlide(s, wrap(s.index + 1, s.count)));
      return none({ ...s, holdMs });
    }

    case "interaction":
      return applyInteraction(s);

    case "visibility": {
      if (ev.visible === s.visible) return none(s);
      const next = { ...s, visible: ev.visible };
      if (s.phase !== "counting" || s.userPaused) return none(next);
      if (!ev.visible) return { state: next, commands: ["pause"] };
      return { state: next, commands: next.fullscreen ? [] : ["play"] };
    }

    case "fullscreen": {
      if (ev.active === s.fullscreen) return none(s);
      const next = { ...s, fullscreen: ev.active };
      return ev.active ? applyInteraction(next) : none(next);
    }

    case "userPause": {
      // Saat jeda 5 detik video sudah kita jeda; jeda "pengguna" di sini tidak bermakna.
      if (s.phase === "holding") return none(s);
      return applyInteraction({ ...s, userPaused: true });
    }

    case "playing": {
      let next: SlideTimerState = { ...s, userPaused: false };
      if (!ev.user) return none(next);
      // Pengguna memutar ulang video yang sudah selesai -> kembali menghitung.
      if (next.phase === "holding" && next.holdReason === "ended") {
        next = { ...next, phase: "counting", holdReason: null, holdMs: 0 };
      }
      return applyInteraction(next);
    }

    case "ended": {
      if (s.phase === "holding") return none(s);
      return none({ ...s, phase: "holding", holdReason: "ended", holdMs: 0, userPaused: false });
    }

    case "goTo": {
      if (!Number.isInteger(ev.index) || ev.index < 0 || ev.index >= s.count || ev.index === s.index) return none(s);
      return none(freshSlide(s, ev.index));
    }

    case "next":
      return s.count > 1 ? none(freshSlide(s, wrap(s.index + 1, s.count))) : none(s);

    case "prev":
      return s.count > 1 ? none(freshSlide(s, wrap(s.index - 1, s.count))) : none(s);
  }
}
