"use client";

import { useMemo, useState, useEffect } from "react";

export type GalleryImage = { id: string | number; src: string };

function useDarkMode(): boolean {
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

// ─── THUMBNAIL BUTTON ─────────────────────────────────────────
function ThumbButton({
  src,
  isActive,
  onClick,
}: {
  src: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Pilih gambar"
      style={{
        width: 64,
        height: 64,
        borderRadius: 10,
        border: isActive
          ? "1px solid rgba(255,107,53,0.80)"
          : hovered
          ? "1px solid rgba(255,107,53,0.45)"
          : "1px solid rgba(255,107,53,0.15)",
        background: isActive
          ? "rgba(255,107,53,0.10)"
          : hovered
          ? "rgba(255,107,53,0.07)"
          : "rgba(255,107,53,0.03)",
        flexShrink: 0,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: isActive ? "0 0 14px rgba(255,107,53,0.25)" : "none",
        padding: 0,
        position: "relative",
      }}
    >
      {/* Garis bawah saat aktif */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.8), transparent)",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      />
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
        draggable={false}
      />
    </button>
  );
}

// ─── KOMPONEN UTAMA ───────────────────────────────────────────
export function ProductGallery({
  title,
  mainSrc,
  gallery,
  activeSrc,
  onSelect,
}: {
  title: string;
  mainSrc: string;
  gallery: GalleryImage[];
  activeSrc: string;
  onSelect: (src: string) => void;
}) {
  const isDark = useDarkMode();

  const thumbnails = useMemo(() => {
    const seen = new Set<string>();
    const all = [{ id: "main", src: mainSrc }, ...gallery];
    return all.filter((x) => {
      if (!x.src) return false;
      if (seen.has(x.src)) return false;
      seen.add(x.src);
      return true;
    });
  }, [gallery, mainSrc]);

  return (
    <div>
      {/* ── MAIN IMAGE ── */}
      <div
        style={{
          borderRadius: 16,
          border: "1px solid rgba(255,107,53,0.18)",
          background: isDark
            ? "rgba(10,10,15,0.45)"
            : "rgba(28,20,14,0.35)",
          backdropFilter: "blur(12px)",
          padding: 24,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(255,107,53,0.06)",
        }}
      >
        {/* Glow di dalam container */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(255,107,53,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Image box */}
        <div
          style={{
            aspectRatio: "4/3",
            width: "100%",
            borderRadius: 12,
            background: "rgba(255,107,53,0.04)",
            border: "1px solid rgba(255,107,53,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src={activeSrc}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: 24,
              filter: "drop-shadow(0 4px 16px rgba(255,107,53,0.15))",
            }}
            draggable={false}
          />
        </div>
      </div>

      {/* ── THUMBNAILS ── */}
      {thumbnails.length > 1 && (
        <div
          style={{
            marginTop: 14,
            display: "flex",
            gap: 10,
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          {thumbnails.map((t) => (
            <ThumbButton
              key={String(t.id)}
              src={t.src}
              isActive={t.src === activeSrc}
              onClick={() => onSelect(t.src)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
