"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import SectionShell from "./SectionShell";

/**
 * "Latest from MikroTik" — 10 video resmi terbaru (YouTube + TikTube) dari
 * GET /api/mikrotik-videos/public. Server yang menyaring Shorts, menggabung,
 * dan meng-cache; komponen ini hanya menampilkan.
 *
 * - Section disembunyikan total bila feed kosong atau error.
 * - Click-to-play: iframe baru dipasang setelah tombol play diklik, dan hanya
 *   satu slide yang dirender — pindah slide meng-unmount iframe sebelumnya.
 * - Navigasi manual saja (panah, titik, keyboard ←/→, swipe). Tanpa auto-advance.
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

function NavArrow({ dir, disabled, onClick }: { dir: "prev" | "next"; disabled: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const Icon = dir === "prev" ? ChevronLeft : ChevronRight;
  const active = hovered && !disabled;
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Previous video" : "Next video"}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 44,
        height: 44,
        flexShrink: 0,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.35 : 1,
        transition: "all 0.3s ease",
        border: active ? "1px solid rgba(255,107,53,0.70)" : "1px solid rgba(255,107,53,0.30)",
        background: active ? "rgba(255,107,53,0.85)" : "rgba(255,107,53,0.08)",
        color: active ? "#ffffff" : "#FF6B35",
        boxShadow: active ? "0 4px 16px rgba(255,107,53,0.30)" : "none",
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
        style={{ borderRadius: "clamp(16px, 2vw, 24px)", background: "rgba(255,107,53,0.06)", border: "1px solid rgba(255,107,53,0.12)" }}
      />
      <div className="space-y-2" style={{ marginTop: 20 }}>
        <div className="h-5 rounded w-3/4" style={{ background: "rgba(240,232,223,0.12)" }} />
        <div className="h-3 rounded w-full" style={{ background: "rgba(240,232,223,0.08)" }} />
        <div className="h-3 rounded w-2/3" style={{ background: "rgba(240,232,223,0.08)" }} />
      </div>
    </div>
  );
}

export default function LatestVideos() {
  const [status, setStatus] = useState<"loading" | "ready" | "hidden">("loading");
  const [videos, setVideos] = useState<MikrotikVideo[]>([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
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

  const count = videos.length;
  const goTo = (i: number) => {
    if (i < 0 || i >= count || i === index) return;
    setPlaying(false);
    setIndex(i);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
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
    if (Math.abs(dx) >= SWIPE_MIN_PX && Math.abs(dx) > Math.abs(dy)) goTo(index + (dx < 0 ? 1 : -1));
  };

  const active = videos[index];
  const textMain = isDark ? "#E8E4DC" : "#F0E8DF";
  const textSoft = isDark ? "rgba(232,228,220,0.60)" : "rgba(240,232,223,0.70)";

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
              Latest from MikroTik
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 14, maxWidth: 340, margin: "clamp(12px, 2vh, 20px) auto 0" }}>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.35))" }} />
              <span style={{ color: "#FF6B35", fontSize: 12 }}>◈</span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.35), transparent)" }} />
            </div>
          </div>

          {status === "loading" || !active ? (
            <VideosSkeleton />
          ) : (
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Latest MikroTik videos"
              tabIndex={0}
              onKeyDown={onKeyDown}
              className="max-w-4xl mx-auto outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]/60"
              style={{ borderRadius: "clamp(16px, 2vw, 24px)" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  {/* VIDEO 16:9 */}
                  <div
                    className="relative w-full aspect-video overflow-hidden"
                    style={{
                      borderRadius: "clamp(16px, 2vw, 24px)",
                      border: "1px solid rgba(255,107,53,0.18)",
                      background: isDark ? "rgba(10,10,15,0.45)" : "rgba(28,20,14,0.38)",
                      boxShadow: "0 8px 40px rgba(255,107,53,0.08)",
                    }}
                  >
                    {playing ? (
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        style={{ border: "none" }}
                        src={`${active.embedUrl}?autoplay=1${active.source === "youtube" ? "&rel=0" : ""}`}
                        title={active.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        aria-label={`Play video: ${active.title}`}
                        className="group absolute inset-0 h-full w-full cursor-pointer"
                        style={{ border: "none", padding: 0, background: "transparent" }}
                      >
                        <img src={active.thumbnailUrl} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                        <span className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55) 100%)" }} />
                        <span
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                          style={{
                            width: "clamp(56px, 8vw, 76px)",
                            height: "clamp(56px, 8vw, 76px)",
                            background: "rgba(255,107,53,0.92)",
                            boxShadow: "0 6px 30px rgba(255,107,53,0.45)",
                            color: "#ffffff",
                          }}
                        >
                          <Play size={28} fill="currentColor" style={{ marginLeft: 3 }} />
                        </span>
                        <span
                          className="absolute"
                          style={{
                            top: 12,
                            left: 12,
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            padding: "4px 10px",
                            borderRadius: 100,
                            color: "#ffffff",
                            background: "rgba(0,0,0,0.55)",
                            border: "1px solid rgba(255,107,53,0.35)",
                          }}
                        >
                          {SOURCE_LABEL[active.source]}
                        </span>
                      </button>
                    )}
                  </div>

                  {/* JUDUL + DESKRIPSI — teks polos dari sumber */}
                  <div style={{ marginTop: "clamp(14px, 2vh, 22px)" }}>
                    <p style={{ margin: "0 0 6px", fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", color: "rgba(255,107,53,0.85)" }}>
                      {formatDate(active.publishedAt)}
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
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* NAVIGASI: panah 44×44 + titik */}
              <div className="flex items-center justify-center" style={{ marginTop: "clamp(18px, 3vh, 28px)", gap: 12 }}>
                <NavArrow dir="prev" disabled={index === 0} onClick={() => goTo(index - 1)} />
                <div className="flex items-center justify-center flex-wrap" style={{ gap: 2 }}>
                  {videos.map((v, i) => (
                    <button
                      key={v.id}
                      type="button"
                      aria-label={`Go to video ${i + 1}`}
                      aria-current={i === index ? "true" : undefined}
                      onClick={() => goTo(i)}
                      style={{ width: 20, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center", border: "none", background: "transparent", padding: 0, cursor: "pointer" }}
                    >
                      <span
                        style={{
                          width: i === index ? 18 : 8,
                          height: 8,
                          borderRadius: 100,
                          transition: "all 0.3s ease",
                          background: i === index ? "#FF6B35" : "rgba(255,107,53,0.30)",
                          boxShadow: i === index ? "0 0 8px rgba(255,107,53,0.5)" : "none",
                        }}
                      />
                    </button>
                  ))}
                </div>
                <NavArrow dir="next" disabled={index === count - 1} onClick={() => goTo(index + 1)} />
              </div>
              <p aria-live="polite" className="sr-only">
                {`Video ${index + 1} of ${count}: ${active.title}`}
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
