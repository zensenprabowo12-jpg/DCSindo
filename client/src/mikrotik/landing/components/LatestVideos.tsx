"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionShell from "./SectionShell";
import LatestVideosPlayer, { type PlayerEvents, type PlayerHandle } from "./LatestVideosPlayer";
import { initSlideTimer, shouldBePlaying, stepSlideTimer, type SlideTimerEvent } from "./latestVideosTimer";

/**
 * "Latest from MikroTik" — 10 video resmi terbaru (YouTube + TikTube) dari
 * GET /api/mikrotik-videos/public. Server yang menyaring Shorts, menggabung,
 * dan meng-cache; komponen ini hanya menampilkan.
 *
 * - Section disembunyikan total bila feed kosong atau error.
 * - Autoplay MUTED (playsinline), baru mulai saat section terlihat; keluar
 *   layar = video dijeda + timer beku.
 * - Auto-advance mengikuti latestVideosTimer.ts (0:30, atau 1:30 bila ada
 *   interaksi; jeda 5 detik sebelum pindah; berputar 10 -> 1). Fullscreen dan
 *   jeda oleh pengguna membekukan timer.
 * - Hanya slide aktif yang dirender — pindah slide meng-unmount player lama.
 * - Interaksi di DALAM iframe tidak terlihat oleh halaman, jadi yang dipakai:
 *   kejadian player (play/pause/ended/unmute), fullscreenchange, fokus pindah
 *   ke iframe (klik ke dalam player), dan mouse/scroll/sentuh/keyboard di section.
 */

type MikrotikVideo = {
  id: string;
  source: "youtube" | "tiktube";
  title: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
  watchUrl: string;
  publishedAt: string;
};

const SOURCE_LABEL: Record<MikrotikVideo["source"], string> = { youtube: "YouTube", tiktube: "TikTube" };

const SWIPE_MIN_PX = 50;
/** Batas titik navigasi (Miller's Law); server juga sudah membatasi 10. */
const MAX_VIDEOS = 10;
const TICK_MS = 250;
/** Section dianggap terlihat bila minimal separuh area video ada di viewport. */
const VISIBLE_RATIO = 0.5;

const FRAME_RADIUS = "clamp(16px, 2vw, 24px)";

function useDarkMode(): boolean {
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

function isVideo(v: unknown): v is MikrotikVideo {
  const x = v as MikrotikVideo;
  return (
    !!x &&
    (x.source === "youtube" || x.source === "tiktube") &&
    typeof x.id === "string" &&
    typeof x.title === "string" &&
    typeof x.description === "string" &&
    typeof x.thumbnailUrl === "string" &&
    typeof x.embedUrl === "string" &&
    /^https:\/\/(www\.youtube-nocookie\.com|tiktube\.com)\//.test(x.embedUrl)
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function NavArrow({ dir, onClick, className }: { dir: "prev" | "next"; onClick: () => void; className?: string }) {
  const [hovered, setHovered] = useState(false);
  const Icon = dir === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Previous video" : "Next video"}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: hovered ? "1px solid rgba(255,107,53,0.70)" : "1px solid rgba(255,107,53,0.40)",
        // Latar gelap semi-transparan: tetap terbaca saat menimpa tepi video di layar HP.
        background: hovered ? "rgba(255,107,53,0.85)" : "rgba(20,14,10,0.55)",
        color: hovered ? "#ffffff" : "#FF6B35",
        boxShadow: hovered ? "0 4px 16px rgba(255,107,53,0.30)" : "none",
        backdropFilter: "blur(4px)",
      }}
    >
      <Icon size={20} />
    </button>
  );
}

function VideosSkeleton() {
  return (
    <div role="status" aria-label="Loading videos" className="max-w-4xl mx-auto animate-pulse">
      <div
        className="aspect-video w-full"
        style={{ borderRadius: FRAME_RADIUS, background: "rgba(255,107,53,0.06)", border: "1px solid rgba(255,107,53,0.12)" }}
      />
      <div className="space-y-2" style={{ marginTop: 20 }}>
        <div className="h-5 rounded w-3/4" style={{ background: "rgba(240,232,223,0.12)" }} />
        <div className="h-3 rounded w-full" style={{ background: "rgba(240,232,223,0.08)" }} />
        <div className="h-3 rounded w-2/3" style={{ background: "rgba(240,232,223,0.08)" }} />
      </div>
    </div>
  );
}

function VideoCarousel({ videos, isDark }: { videos: MikrotikVideo[]; isDark: boolean }) {
  const count = videos.length;
  const timerRef = useRef(initSlideTimer(count));
  const [view, setView] = useState({ index: 0, serial: 0 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const playerRef = useRef<PlayerHandle | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const reduceMotion = useReducedMotion();

  /** Satu-satunya pintu perubahan status: jalankan mesin timer, terapkan perintahnya. */
  const dispatch = useCallback((ev: SlideTimerEvent) => {
    const { state, commands } = stepSlideTimer(timerRef.current, ev);
    timerRef.current = state;
    for (const c of commands) {
      if (c === "play") playerRef.current?.play();
      else playerRef.current?.pause();
    }
    setView((v) => (v.index === state.index && v.serial === state.serial ? v : { index: state.index, serial: state.serial }));
  }, []);

  const shouldPlay = useCallback(() => shouldBePlaying(timerRef.current), []);

  const playerEvents = useMemo<PlayerEvents>(
    () => ({
      onUserPause: () => dispatch({ type: "userPause" }),
      onPlaying: (user) => dispatch({ type: "playing", user }),
      onEnded: () => dispatch({ type: "ended" }),
      onInteraction: () => dispatch({ type: "interaction" }),
    }),
    [dispatch],
  );

  // Detak timer. dt diukur nyata; mesin timer membatasi lompatan besar.
  useEffect(() => {
    let last = performance.now();
    const id = setInterval(() => {
      const now = performance.now();
      dispatch({ type: "tick", dtMs: now - last });
      last = now;
    }, TICK_MS);
    return () => clearInterval(id);
  }, [dispatch]);

  // Terlihat = ≥50% video di viewport DAN tab aktif.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let intersecting = false;
    const update = () => {
      const visible = intersecting && document.visibilityState === "visible";
      if (visible) setHasBeenVisible(true);
      dispatch({ type: "visibility", visible });
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        intersecting = entry.isIntersecting && entry.intersectionRatio >= VISIBLE_RATIO;
        update();
      },
      { threshold: [0, VISIBLE_RATIO, 1] },
    );
    io.observe(el);
    document.addEventListener("visibilitychange", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [dispatch]);

  // Fullscreen player (iframe meminta fullscreen -> fullscreenElement = iframe kita).
  useEffect(() => {
    const onChange = () => {
      const d = document as Document & { webkitFullscreenElement?: Element | null };
      const el = document.fullscreenElement ?? d.webkitFullscreenElement ?? null;
      dispatch({ type: "fullscreen", active: !!el && !!stageRef.current?.contains(el) });
    };
    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
    };
  }, [dispatch]);

  // Interaksi tingkat halaman di dalam section + klik ke dalam iframe (fokus pindah ke iframe).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const interact = () => dispatch({ type: "interaction" });
    // movement 0 = mousemove sintetis saat halaman di-scroll di bawah kursor diam.
    const onMouseMove = (e: MouseEvent) => {
      if (e.movementX !== 0 || e.movementY !== 0) interact();
    };
    const onWindowBlur = () => {
      setTimeout(() => {
        const el = document.activeElement;
        if (el instanceof HTMLIFrameElement && stageRef.current?.contains(el)) interact();
      }, 0);
    };
    const opts = { passive: true } as const;
    root.addEventListener("mousemove", onMouseMove, opts);
    root.addEventListener("wheel", interact, opts);
    root.addEventListener("touchstart", interact, opts);
    root.addEventListener("pointerdown", interact, opts);
    root.addEventListener("keydown", interact);
    window.addEventListener("blur", onWindowBlur);
    return () => {
      root.removeEventListener("mousemove", onMouseMove);
      root.removeEventListener("wheel", interact);
      root.removeEventListener("touchstart", interact);
      root.removeEventListener("pointerdown", interact);
      root.removeEventListener("keydown", interact);
      window.removeEventListener("blur", onWindowBlur);
    };
  }, [dispatch]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      dispatch({ type: "prev" });
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      dispatch({ type: "next" });
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) >= SWIPE_MIN_PX && Math.abs(dx) > Math.abs(dy)) dispatch({ type: dx < 0 ? "next" : "prev" });
  };

  const active = videos[view.index];
  const slideKey = `${active.id}:${view.serial}`;
  const textMain = isDark ? "#E8E4DC" : "#F0E8DF";
  const textSoft = isDark ? "rgba(232,228,220,0.60)" : "rgba(240,232,223,0.70)";
  const fadeIn = reduceMotion
    ? { initial: false as const, animate: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35, ease: "easeOut" as const } };

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Latest MikroTik videos"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="max-w-5xl mx-auto outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]/60"
      style={{ borderRadius: FRAME_RADIUS }}
    >
      {/* VIDEO 16:9 + panah kiri/kanan. md+: panah di luar video (padding); HP: menimpa tepi video. */}
      <div className="relative md:px-16">
        <div
          ref={stageRef}
          className="relative w-full aspect-video overflow-hidden"
          style={{
            borderRadius: FRAME_RADIUS,
            border: "1px solid rgba(255,107,53,0.18)",
            background: isDark ? "rgba(10,10,15,0.45)" : "rgba(28,20,14,0.38)",
            boxShadow: "0 8px 40px rgba(255,107,53,0.08)",
          }}
        >
          <motion.div key={slideKey} className="absolute inset-0" {...fadeIn}>
            {hasBeenVisible ? (
              <LatestVideosPlayer
                ref={playerRef}
                source={active.source}
                embedUrl={active.embedUrl}
                title={active.title}
                shouldPlay={shouldPlay}
                events={playerEvents}
              />
            ) : (
              <img src={active.thumbnailUrl} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            )}
          </motion.div>
        </div>
        <NavArrow dir="prev" onClick={() => dispatch({ type: "prev" })} className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        <NavArrow dir="next" onClick={() => dispatch({ type: "next" })} className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      </div>

      {/* TITIK — di antara video dan judul */}
      <div className="flex items-center justify-center flex-wrap" style={{ marginTop: "clamp(10px, 2vh, 16px)", gap: 2 }}>
        {videos.map((v, i) => (
          <button
            key={v.id}
            type="button"
            aria-label={`Go to video ${i + 1}`}
            aria-current={i === view.index ? "true" : undefined}
            onClick={() => dispatch({ type: "goTo", index: i })}
            style={{ width: 20, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center", border: "none", background: "transparent", padding: 0, cursor: "pointer" }}
          >
            <span
              style={{
                width: i === view.index ? 18 : 8,
                height: 8,
                borderRadius: 100,
                transition: reduceMotion ? "none" : "all 0.3s ease",
                background: i === view.index ? "#FF6B35" : "rgba(255,107,53,0.30)",
                boxShadow: i === view.index ? "0 0 8px rgba(255,107,53,0.5)" : "none",
              }}
            />
          </button>
        ))}
      </div>

      {/* JUDUL + DESKRIPSI — teks polos dari sumber */}
      <motion.div key={`text:${slideKey}`} className="md:px-16" style={{ marginTop: "clamp(6px, 1.5vh, 12px)" }} {...fadeIn}>
        <p style={{ margin: "0 0 6px", fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", color: "rgba(255,107,53,0.85)" }}>
          {[formatDate(active.publishedAt), SOURCE_LABEL[active.source]].filter(Boolean).join(" · ")}
        </p>
        <h3
          className="line-clamp-2"
          style={{ margin: "0 0 8px", fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.3, color: textMain, overflowWrap: "anywhere" }}
        >
          {active.title}
        </h3>
        {active.description && (
          <p
            className="line-clamp-3"
            style={{ margin: 0, fontSize: "clamp(12px, 1.1vw, 14px)", lineHeight: 1.7, color: textSoft, overflowWrap: "anywhere" }}
          >
            {active.description}
          </p>
        )}
      </motion.div>

      <p aria-live="polite" className="sr-only">
        {`Video ${view.index + 1} of ${count}: ${active.title}`}
      </p>
    </div>
  );
}

export default function LatestVideos() {
  const [status, setStatus] = useState<"loading" | "ready" | "hidden">("loading");
  const [videos, setVideos] = useState<MikrotikVideo[]>([]);
  const isDark = useDarkMode();

  useEffect(() => {
    const ctrl = new AbortController();
    fetch("/api/mikrotik-videos/public", { signal: ctrl.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((body: { ok?: boolean; data?: unknown } | null) => {
        const list = body?.ok && Array.isArray(body.data) ? body.data.filter(isVideo).slice(0, MAX_VIDEOS) : [];
        setVideos(list);
        setStatus(list.length > 0 ? "ready" : "hidden");
      })
      .catch(() => {
        if (!ctrl.signal.aborted) setStatus("hidden");
      });
    return () => ctrl.abort();
  }, []);

  if (status === "hidden") return null;

  const textMain = isDark ? "#E8E4DC" : "#F0E8DF";

  return (
    <SectionShell id="mikrotik-home-videos">
      <div className="relative overflow-hidden">
        <div className="container mx-auto w-full relative z-10" style={{ padding: "clamp(40px, 6vh, 80px) clamp(16px, 3vw, 32px)" }}>
          {/* HEADER — gaya sama dengan "Featured Products" */}
          <div className="text-center" style={{ marginBottom: "clamp(24px, 4vh, 48px)" }}>
            <p style={{ margin: "0 0 10px", fontSize: "clamp(9px, 0.9vw, 11px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace" }}>
              Official Videos
            </p>
            <h2 style={{ margin: 0, fontSize: "clamp(20px, 3vw, 38px)", fontWeight: 900, letterSpacing: "-0.03em", color: textMain }}>
              Latest video from MikroTik
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 14, maxWidth: 340, margin: "clamp(12px, 2vh, 20px) auto 0" }}>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.35))" }} />
              <span style={{ color: "#FF6B35", fontSize: 12 }}>◈</span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.35), transparent)" }} />
            </div>
          </div>

          {status === "loading" ? <VideosSkeleton /> : <VideoCarousel videos={videos} isDark={isDark} />}
        </div>
      </div>
    </SectionShell>
  );
}
