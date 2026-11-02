import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

/**
 * Player untuk slider "Latest from MikroTik": satu antarmuka untuk dua sumber.
 *  - YouTube  : IFrame Player API resmi (skrip www.youtube.com/iframe_api),
 *               host youtube-nocookie.com, mute + autoplay + playsinline.
 *  - TikTube  : embed PeerTube dengan `api=1` + protokol jschannel lewat
 *               postMessage, ditulis tangan di bawah (tanpa dependency).
 *
 * Komponen ini hanya MELAPOR kejadian player; keputusan waktu ada di
 * latestVideosTimer.ts. Jeda/main yang kita perintahkan sendiri disaring
 * supaya tidak terhitung sebagai jeda/main oleh pengguna.
 */

export type PlayerHandle = { play(): void; pause(): void };

export type PlayerEvents = {
  /** Pengguna menjeda dari kontrol player. */
  onUserPause(): void;
  /** Player main; `user` = dipicu pengguna (bukan autoplay / perintah kita). */
  onPlaying(user: boolean): void;
  onEnded(): void;
  /** Interaksi lain yang terbaca dari player (mis. unmute YouTube). */
  onInteraction(): void;
};

type Props = {
  source: "youtube" | "tiktube";
  embedUrl: string;
  title: string;
  /** Dibaca saat player siap: main atau tetap dijeda. */
  shouldPlay(): boolean;
  events: PlayerEvents;
};

/** Jendela waktu untuk mengenali kejadian sebagai akibat perintah kita. */
const EXPECT_PAUSE_MS = 2_000;
const EXPECT_PLAY_MS = 5_000;
const EXPECT_AUTOPLAY_MS = 15_000;
/** Video HTML5 mengirim `pause` tepat sebelum `ended`; tunggu sebentar sebelum menganggapnya jeda pengguna. */
const USER_PAUSE_DEBOUNCE_MS = 400;

/**
 * Logika bersama: menyaring kejadian player menjadi kejadian "pengguna".
 * Dipakai oleh kedua adaptor.
 */
function createEventFilter(getEvents: () => PlayerEvents) {
  let expectPauseUntil = 0;
  let expectPlayUntil = Date.now() + EXPECT_AUTOPLAY_MS;
  let userPaused = false;
  let ended = false;
  let pauseTimer: ReturnType<typeof setTimeout> | null = null;

  const clearPauseTimer = () => {
    if (pauseTimer) clearTimeout(pauseTimer);
    pauseTimer = null;
  };

  return {
    willPause() {
      expectPauseUntil = Date.now() + EXPECT_PAUSE_MS;
    },
    willPlay() {
      expectPlayUntil = Date.now() + EXPECT_PLAY_MS;
    },
    paused() {
      if (Date.now() < expectPauseUntil) {
        expectPauseUntil = 0;
        return;
      }
      clearPauseTimer();
      pauseTimer = setTimeout(() => {
        pauseTimer = null;
        userPaused = true;
        getEvents().onUserPause();
      }, USER_PAUSE_DEBOUNCE_MS);
    },
    playing() {
      clearPauseTimer();
      const user = userPaused || ended || Date.now() >= expectPlayUntil;
      expectPlayUntil = 0;
      userPaused = false;
      ended = false;
      getEvents().onPlaying(user);
    },
    ended() {
      clearPauseTimer();
      ended = true;
      userPaused = false;
      getEvents().onEnded();
    },
    dispose: clearPauseTimer,
  };
}

// ─── YOUTUBE ──────────────────────────────────────────────────

type YTPlayer = {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  isMuted(): boolean;
  destroy(): void;
};
type YTNamespace = {
  Player: new (el: HTMLElement, opts: Record<string, unknown>) => YTPlayer;
};
type YTWindow = Window & { YT?: Partial<YTNamespace>; onYouTubeIframeAPIReady?: () => void };

let ytApiPromise: Promise<YTNamespace> | null = null;

/** Muat iframe_api sekali per halaman; callback global yang sudah ada tetap dipanggil. */
function loadYouTubeApi(): Promise<YTNamespace> {
  const w = window as YTWindow;
  if (w.YT?.Player) return Promise.resolve(w.YT as YTNamespace);
  if (!ytApiPromise) {
    ytApiPromise = new Promise<YTNamespace>((resolve, reject) => {
      const prev = w.onYouTubeIframeAPIReady;
      w.onYouTubeIframeAPIReady = () => {
        prev?.();
        resolve(w.YT as YTNamespace);
      };
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      s.async = true;
      s.onerror = () => {
        ytApiPromise = null;
        reject(new Error("YouTube IFrame API gagal dimuat"));
      };
      document.head.appendChild(s);
    });
  }
  return ytApiPromise;
}

const YT_STATE = { ENDED: 0, PLAYING: 1, PAUSED: 2 } as const;

function youtubeIdFromEmbed(embedUrl: string): string | null {
  return embedUrl.match(/\/embed\/([A-Za-z0-9_-]{11})(?:[?#]|$)/)?.[1] ?? null;
}

const YouTubePlayer = forwardRef<PlayerHandle, Omit<Props, "source">>(function YouTubePlayer(
  { embedUrl, title, shouldPlay, events },
  ref,
) {
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const readyRef = useRef(false);
  const eventsRef = useRef(events);
  eventsRef.current = events;
  const shouldPlayRef = useRef(shouldPlay);
  shouldPlayRef.current = shouldPlay;
  const filterRef = useRef(createEventFilter(() => eventsRef.current));

  useImperativeHandle(ref, () => ({
    play() {
      if (!readyRef.current) return;
      filterRef.current.willPlay();
      playerRef.current?.playVideo();
    },
    pause() {
      if (!readyRef.current) return;
      filterRef.current.willPause();
      playerRef.current?.pauseVideo();
    },
  }));

  useEffect(() => {
    const host = hostRef.current;
    const videoId = youtubeIdFromEmbed(embedUrl);
    if (!host || !videoId) return;
    const filter = filterRef.current;
    let cancelled = false;
    let mutePoll: ReturnType<typeof setInterval> | null = null;

    loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return;
        const mount = document.createElement("div");
        host.appendChild(mount);
        playerRef.current = new YT.Player(mount, {
          host: "https://www.youtube-nocookie.com",
          videoId,
          width: "100%",
          height: "100%",
          playerVars: { autoplay: 1, mute: 1, playsinline: 1, rel: 0, origin: window.location.origin },
          events: {
            onReady: (e: { target: YTPlayer }) => {
              if (cancelled) return;
              readyRef.current = true;
              e.target.mute();
              if (shouldPlayRef.current()) e.target.playVideo();
              else {
                filter.willPause();
                e.target.pauseVideo();
              }
              // Unmute terjadi di dalam iframe; satu-satunya cara melihatnya adalah polling.
              let wasMuted = true;
              mutePoll = setInterval(() => {
                const muted = playerRef.current?.isMuted() ?? true;
                if (wasMuted && !muted) eventsRef.current.onInteraction();
                wasMuted = muted;
              }, 500);
            },
            onStateChange: (e: { data: number }) => {
              if (cancelled) return;
              if (e.data === YT_STATE.PLAYING) filter.playing();
              else if (e.data === YT_STATE.PAUSED) filter.paused();
              else if (e.data === YT_STATE.ENDED) filter.ended();
            },
          },
        });
        const iframe = host.querySelector("iframe");
        if (iframe) iframe.title = title;
      })
      .catch(() => {
        // API diblokir (mis. ad-blocker): tetap tampilkan video, hanya tanpa kejadian player.
        if (cancelled) return;
        const iframe = document.createElement("iframe");
        iframe.src = `${embedUrl}?autoplay=1&mute=1&playsinline=1&rel=0`;
        iframe.title = title;
        iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        iframe.allowFullscreen = true;
        iframe.style.cssText = "width:100%;height:100%;border:0";
        host.appendChild(iframe);
      });

    return () => {
      cancelled = true;
      readyRef.current = false;
      if (mutePoll) clearInterval(mutePoll);
      filter.dispose();
      try {
        playerRef.current?.destroy();
      } catch {
        /* player sudah lepas dari DOM */
      }
      playerRef.current = null;
      host.replaceChildren();
    };
  }, [embedUrl, title]);

  return <div ref={hostRef} className="absolute inset-0 h-full w-full" />;
});

// ─── TIKTUBE (PeerTube embed API, protokol jschannel) ─────────

const TIKTUBE_ORIGIN = "https://tiktube.com";
const PT_SCOPE = "peertube";
/** Handshake diulang sampai embed menjawab; jschannel mengabaikan __ready ekstra setelah siap. */
const PT_HANDSHAKE_EVERY_MS = 1_000;
const PT_HANDSHAKE_MAX = 15;

const TiktubePlayer = forwardRef<PlayerHandle, Omit<Props, "source">>(function TiktubePlayer(
  { embedUrl, title, shouldPlay, events },
  ref,
) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const eventsRef = useRef(events);
  eventsRef.current = events;
  const shouldPlayRef = useRef(shouldPlay);
  shouldPlayRef.current = shouldPlay;
  const filterRef = useRef(createEventFilter(() => eventsRef.current));
  const apiRef = useRef<{ call(method: "play" | "pause"): void } | null>(null);

  useImperativeHandle(ref, () => ({
    play() {
      filterRef.current.willPlay();
      apiRef.current?.call("play");
    },
    pause() {
      filterRef.current.willPause();
      apiRef.current?.call("pause");
    },
  }));

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const filter = filterRef.current;
    let channelReady = false;
    let playerReady = false;
    let nextId = 1;
    let handshakes = 0;

    const post = (msg: object) => iframe.contentWindow?.postMessage(JSON.stringify(msg), TIKTUBE_ORIGIN);
    const sendHandshake = (type: "publish-request" | "publish-reply") =>
      post({ method: `${PT_SCOPE}::__ready`, params: { type, publish: [] } });

    apiRef.current = {
      call(method) {
        if (!playerReady) return; // status awal diterapkan saat player siap
        post({ id: nextId++, method: `${PT_SCOPE}::${method}` });
      },
    };

    const handshakeTimer = setInterval(() => {
      if (channelReady || ++handshakes > PT_HANDSHAKE_MAX) clearInterval(handshakeTimer);
      else sendHandshake("publish-request");
    }, PT_HANDSHAKE_EVERY_MS);

    const onMessage = (e: MessageEvent) => {
      if (e.source !== iframe.contentWindow || e.origin !== TIKTUBE_ORIGIN || typeof e.data !== "string") return;
      let msg: { method?: unknown; params?: unknown };
      try {
        msg = JSON.parse(e.data);
      } catch {
        return;
      }
      if (typeof msg?.method !== "string") return; // balasan atas panggilan kita — tidak dipakai
      const [scope, method] = msg.method.split("::");
      if (scope !== PT_SCOPE) return;

      if (method === "__ready") {
        const p = msg.params as { type?: unknown } | null;
        if (!channelReady && p?.type === "publish-request") sendHandshake("publish-reply");
        channelReady = true;
        return;
      }
      if (method === "ready") {
        playerReady = true;
        if (shouldPlayRef.current()) {
          filter.willPlay();
          post({ id: nextId++, method: `${PT_SCOPE}::play` });
        } else {
          filter.willPause();
          post({ id: nextId++, method: `${PT_SCOPE}::pause` });
        }
        return;
      }
      if (method === "playbackStatusChange") {
        if (msg.params === "playing") filter.playing();
        else if (msg.params === "paused") filter.paused();
        else if (msg.params === "ended") filter.ended();
      }
    };

    window.addEventListener("message", onMessage);
    return () => {
      clearInterval(handshakeTimer);
      window.removeEventListener("message", onMessage);
      filter.dispose();
      apiRef.current = null;
    };
  }, [embedUrl]);

  return (
    <iframe
      ref={iframeRef}
      className="absolute inset-0 h-full w-full"
      style={{ border: "none" }}
      // playsinline: player PeerTube selalu memasang atribut itu pada <video>-nya sendiri.
      src={`${embedUrl}?api=1&autoplay=1&muted=1`}
      title={title}
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowFullScreen
    />
  );
});

const LatestVideosPlayer = forwardRef<PlayerHandle, Props>(function LatestVideosPlayer({ source, ...rest }, ref) {
  return source === "youtube" ? <YouTubePlayer ref={ref} {...rest} /> : <TiktubePlayer ref={ref} {...rest} />;
});

export default LatestVideosPlayer;
