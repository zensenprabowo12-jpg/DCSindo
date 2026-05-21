"use client";

import { useMemo, useState, useEffect, useRef, useCallback } from "react";

export type GalleryImage = { id: string | number; src: string };

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

function ThumbButton({ src, isActive, onClick }: { src: string; isActive: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Pilih gambar"
      style={{
        width: 64, height: 64, borderRadius: 10, flexShrink: 0,
        border: isActive ? "1px solid rgba(255,107,53,0.80)" : hovered ? "1px solid rgba(255,107,53,0.45)" : "1px solid rgba(255,107,53,0.15)",
        background: isActive ? "rgba(255,107,53,0.10)" : hovered ? "rgba(255,107,53,0.07)" : "rgba(255,107,53,0.03)",
        overflow: "hidden", cursor: "pointer", transition: "all 0.25s ease",
        boxShadow: isActive ? "0 0 14px rgba(255,107,53,0.25)" : "none",
        padding: 0, position: "relative",
      }}
    >
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.8), transparent)", opacity: isActive ? 1 : 0, transition: "opacity 0.25s ease" }} />
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease", transform: hovered ? "scale(1.08)" : "scale(1)" }} draggable={false} />
    </button>
  );
}

// ─── LIGHTBOX ────────────────────────────────────────────────
function Lightbox({ images, activeIndex, onClose, onPrev, onNext }: {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < images.length - 1;

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(5,5,8,0.92)",
        backdropFilter: "blur(16px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "fadeIn 0.2s ease",
      }}
    >
      {/* Tombol tutup */}
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: 20, right: 20,
          width: 40, height: 40, borderRadius: "50%",
          border: "1px solid rgba(255,107,53,0.35)",
          background: "rgba(255,107,53,0.08)",
          color: "#E8E4DC", fontSize: 18, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s ease", zIndex: 1,
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,53,0.25)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,53,0.08)"; }}
      >
        ✕
      </button>

      {/* Counter */}
      {images.length > 1 && (
        <div style={{ position: "absolute", top: 24, left: "50%", transform: "translateX(-50%)", fontSize: 12, color: "rgba(232,228,220,0.45)", fontFamily: "monospace", letterSpacing: "0.1em" }}>
          {activeIndex + 1} / {images.length}
        </div>
      )}

      {/* Tombol prev */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          style={{
            position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid rgba(255,107,53,0.35)",
            background: "rgba(255,107,53,0.08)",
            color: "#E8E4DC", fontSize: 18, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,53,0.25)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,53,0.08)"; }}
        >
          ←
        </button>
      )}

      {/* Gambar utama */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "85vw", maxHeight: "85vh",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "scaleIn 0.2s ease",
        }}
      >
        <img
          src={images[activeIndex]}
          alt=""
          style={{
            maxWidth: "85vw", maxHeight: "85vh",
            objectFit: "contain",
            borderRadius: 12,
            boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            filter: "drop-shadow(0 8px 32px rgba(255,107,53,0.15))",
            userSelect: "none",
          }}
          draggable={false}
        />
      </div>

      {/* Tombol next */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          style={{
            position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid rgba(255,107,53,0.35)",
            background: "rgba(255,107,53,0.08)",
            color: "#E8E4DC", fontSize: 18, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,53,0.25)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,53,0.08)"; }}
        >
          →
        </button>
      )}

      {/* Thumbnail strip di bawah */}
      {images.length > 1 && (
        <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); /* navigate to index */ onClose(); }}
              style={{
                width: i === activeIndex ? 24 : 8, height: 8, borderRadius: 100,
                border: "none", cursor: "pointer", transition: "all 0.3s ease",
                background: i === activeIndex ? "#FF6B35" : "rgba(255,107,53,0.30)",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}

// ─── KOMPONEN UTAMA ───────────────────────────────────────────
export function ProductGallery({ title, mainSrc, gallery, activeSrc, onSelect }: {
  title: string;
  mainSrc: string;
  gallery: GalleryImage[];
  activeSrc: string;
  onSelect: (src: string) => void;
}) {
  const isDark = useDarkMode();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hoverMain, setHoverMain] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

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

  const srcs = thumbnails.map((t) => t.src);
  const activeIndex = srcs.indexOf(activeSrc);
  const currentIndex = activeIndex >= 0 ? activeIndex : 0;

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onSelect(srcs[currentIndex - 1]);
  }, [currentIndex, srcs, onSelect]);

  const goNext = useCallback(() => {
    if (currentIndex < srcs.length - 1) onSelect(srcs[currentIndex + 1]);
  }, [currentIndex, srcs, onSelect]);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (isDragging.current) {
      if (diff < -40) goNext();
      else if (diff > 40) goPrev();
    } else {
      setLightboxOpen(true);
    }
    dragStartX.current = null;
    isDragging.current = false;
  };

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff < -40) goNext();
    else if (diff > 40) goPrev();
    touchStartX.current = null;
  };

  return (
    <div>
      <div
        style={{
          borderRadius: 16,
          border: "1px solid rgba(255,107,53,0.18)",
          background: isDark ? "rgba(10,10,15,0.45)" : "rgba(28,20,14,0.35)",
          backdropFilter: "blur(12px)",
          padding: 24,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(255,107,53,0.06)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(255,107,53,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", zIndex: 2, border: "1px solid rgba(255,107,53,0.40)", background: "rgba(10,10,15,0.55)", backdropFilter: "blur(8px)", color: "#E8E4DC", fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,53,0.30)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(10,10,15,0.55)"; }}
          >
            ←
          </button>
        )}

        {currentIndex < srcs.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", zIndex: 2, border: "1px solid rgba(255,107,53,0.40)", background: "rgba(10,10,15,0.55)", backdropFilter: "blur(8px)", color: "#E8E4DC", fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,53,0.30)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(10,10,15,0.55)"; }}
          >
            →
          </button>
        )}

        <div style={{ position: "absolute", top: 12, right: 12, zIndex: 2, background: "rgba(10,10,15,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,107,53,0.25)", borderRadius: 8, padding: "4px 8px", fontSize: 10, color: "rgba(232,228,220,0.50)", fontFamily: "monospace", letterSpacing: "0.08em", opacity: hoverMain ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: "none" }}>
          klik untuk perbesar
        </div>

        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => { dragStartX.current = null; isDragging.current = false; setHoverMain(false); }}
          onMouseEnter={() => setHoverMain(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ aspectRatio: "4/3", width: "100%", borderRadius: 12, background: "rgba(255,107,53,0.04)", border: "1px solid rgba(255,107,53,0.10)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", zIndex: 1, cursor: "zoom-in", userSelect: "none" }}
        >
          <img
            src={activeSrc}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "contain", padding: 24, filter: "drop-shadow(0 4px 16px rgba(255,107,53,0.15))", transition: "transform 0.3s ease", transform: hoverMain ? "scale(1.03)" : "scale(1)", pointerEvents: "none" }}
            draggable={false}
          />
        </div>
      </div>

      {thumbnails.length > 1 && (
        <div style={{ marginTop: 14, display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
          {thumbnails.map((t) => (
            <ThumbButton key={String(t.id)} src={t.src} isActive={t.src === activeSrc} onClick={() => onSelect(t.src)} />
          ))}
        </div>
      )}

      {lightboxOpen && (
        <Lightbox images={srcs} activeIndex={currentIndex} onClose={() => setLightboxOpen(false)} onPrev={goPrev} onNext={goNext} />
      )}
    </div>
  );
}
