"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MikrotikLandingProduct } from "../data";

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

function LinkButton({ href, children, solid = false, isDark }: { href: string; children: React.ReactNode; solid?: boolean; isDark: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "100px",
        padding: "0 clamp(16px, 2vw, 28px)",
        height: "clamp(38px, 4vh, 46px)",
        display: "inline-flex",
        alignItems: "center",
        fontSize: "clamp(12px, 1.1vw, 14px)",
        fontWeight: solid ? 600 : 500,
        letterSpacing: "0.03em",
        textDecoration: "none",
        transition: "all 0.3s ease",
        cursor: "pointer",
        ...(solid ? {
          background: hovered ? "rgba(255,107,53,1)" : "rgba(255,107,53,0.85)",
          border: "1px solid rgba(255,107,53,0.9)",
          color: "#ffffff",
          boxShadow: hovered ? "0 4px 30px rgba(255,107,53,0.50)" : "0 4px 20px rgba(255,107,53,0.30)",
        } : {
          background: hovered ? "rgba(255,107,53,0.22)" : "rgba(255,107,53,0.09)",
          backdropFilter: "blur(12px)",
          border: hovered ? "1px solid rgba(255,107,53,0.60)" : "1px solid rgba(255,107,53,0.28)",
          color: hovered ? "#ffffff" : isDark ? "#E8E4DC" : "#F0E8DF",
        }),
      }}
    >
      {children}
    </a>
  );
}

function SelectorButton({ label, isActive, isDark, onClick }: { label: string; isActive: boolean; isDark: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: "clamp(30px, 3.5vh, 36px)",
        padding: "0 clamp(12px, 1.5vw, 20px)",
        borderRadius: "100px",
        fontSize: "clamp(11px, 1vw, 13px)",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: isActive ? "1px solid rgba(255,107,53,0.8)" : hovered ? "1px solid rgba(255,107,53,0.40)" : "1px solid rgba(255,107,53,0.20)",
        background: isActive ? "rgba(255,107,53,0.85)" : hovered ? "rgba(255,107,53,0.15)" : "rgba(255,107,53,0.07)",
        color: isActive ? "#ffffff" : isDark ? "rgba(232,228,220,0.6)" : "rgba(240,232,223,0.7)",
        boxShadow: isActive ? "0 4px 16px rgba(255,107,53,0.30)" : "none",
      }}
    >
      {label}
    </button>
  );
}

function VideoToggleButton({ showVideo, hasVideo, isDark, onClick }: { showVideo: boolean; hasVideo: boolean; isDark: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  if (!hasVideo) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: "clamp(28px, 3vh, 34px)",
        padding: "0 clamp(10px, 1.2vw, 16px)",
        borderRadius: "100px",
        fontSize: "clamp(10px, 0.9vw, 12px)",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: hovered ? "1px solid rgba(255,107,53,0.70)" : "1px solid rgba(255,107,53,0.35)",
        background: showVideo ? "rgba(255,107,53,0.85)" : hovered ? "rgba(255,107,53,0.18)" : "rgba(255,107,53,0.08)",
        color: showVideo ? "#ffffff" : isDark ? "#E8E4DC" : "#F0E8DF",
        boxShadow: showVideo ? "0 4px 16px rgba(255,107,53,0.35)" : "none",
      }}
    >
      <span style={{ fontSize: 11 }}>{showVideo ? "🖼" : "▶"}</span>
      {showVideo ? "Lihat Gambar" : "Lihat Video"}
    </button>
  );
}

export default function ProductShowcase({ products }: { products: MikrotikLandingProduct[] }) {
  const [activeKey, setActiveKey] = useState<MikrotikLandingProduct["key"]>("A");
  const [showVideo, setShowVideo] = useState(false);

  const active = useMemo(
    () => products.find((p) => p.key === activeKey) ?? products[0],
    [activeKey, products]
  );
  const isDark = useDarkMode();

  useEffect(() => {
    setShowVideo(false);
  }, [activeKey]);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto w-full relative z-10" style={{ padding: "clamp(40px, 6vh, 80px) clamp(16px, 3vw, 32px)" }}>

        {/* HEADER */}
        <div className="text-center" style={{ marginBottom: "clamp(24px, 4vh, 48px)" }}>
          <p style={{ margin: "0 0 10px", fontSize: "clamp(9px, 0.9vw, 11px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace" }}>
            Product Highlight
          </p>
          <h2 style={{ margin: 0, fontSize: "clamp(20px, 3vw, 38px)", fontWeight: 900, letterSpacing: "-0.03em", color: isDark ? "#E8E4DC" : "#F0E8DF" }}>
            Featured Products
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 14, maxWidth: 340, margin: "clamp(12px, 2vh, 20px) auto 0" }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.35))" }} />
            <span style={{ color: "#FF6B35", fontSize: 12 }}>◈</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.35), transparent)" }} />
          </div>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center" style={{ gap: "clamp(24px, 4vw, 40px)" }}>

          {/* LEFT - INFO */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey + "-left"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, border: "1px solid rgba(255,107,53,0.35)", borderRadius: "100px", padding: "4px 14px", background: "rgba(255,107,53,0.08)", backdropFilter: "blur(8px)", marginBottom: "clamp(10px, 1.5vh, 16px)" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF6B35", display: "inline-block" }} />
                <span style={{ fontSize: "clamp(8px, 0.8vw, 10px)", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace", fontWeight: 600 }}>
                  {active.tagline}
                </span>
              </div>

              <h3 style={{ fontSize: "clamp(18px, 3vw, 34px)", fontWeight: 900, letterSpacing: "-0.03em", margin: "0 0 clamp(14px, 2vh, 24px)", color: isDark ? "#E8E4DC" : "#F0E8DF", lineHeight: 1.1 }}>
                {active.name}
              </h3>

              <ul style={{ margin: "0 0 clamp(12px, 2vh, 20px)", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "clamp(6px, 1vh, 10px)" }}>
                {active.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ marginTop: 6, width: 6, height: 6, borderRadius: "50%", background: "#FF6B35", flexShrink: 0, boxShadow: "0 0 5px rgba(255,107,53,0.5)" }} />
                    <span style={{ fontSize: "clamp(12px, 1.1vw, 14px)", lineHeight: 1.7, color: isDark ? "rgba(232,228,220,0.70)" : "rgba(240,232,223,0.80)" }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <p style={{ fontSize: "clamp(12px, 1.1vw, 14px)", lineHeight: 1.8, color: isDark ? "rgba(232,228,220,0.55)" : "rgba(240,232,223,0.65)", margin: "0 0 clamp(20px, 3vh, 32px)" }}>
                {active.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(8px, 1vw, 12px)", alignItems: "center" }}>
                <LinkButton href={active.productDetailHref} solid isDark={isDark}>Product Detail</LinkButton>
                <LinkButton href={active.contactHref} isDark={isDark}>Contact Us</LinkButton>
                <VideoToggleButton
                  showVideo={showVideo}
                  hasVideo={!!active.videoId}
                  isDark={isDark}
                  onClick={() => setShowVideo((v) => !v)}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT - MEDIA */}
          <div className="flex flex-col items-center">
            <div
              className="w-full relative overflow-hidden"
              style={{
                borderRadius: "clamp(16px, 2vw, 24px)",
                padding: showVideo ? 0 : "clamp(16px, 2.5vw, 32px)",
                border: "1px solid rgba(255,107,53,0.18)",
                background: isDark ? "rgba(10,10,15,0.45)" : "rgba(28,20,14,0.38)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 40px rgba(255,107,53,0.08)",
                transition: "padding 0.3s ease",
              }}
            >
              {/* Huruf dekoratif - hanya saat mode gambar */}
              {!showVideo && (
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "clamp(80px, 14vw, 160px)", fontWeight: 900, color: "rgba(255,107,53,0.06)", fontFamily: "Georgia, serif", letterSpacing: "-0.05em", lineHeight: 1, userSelect: "none", pointerEvents: "none", zIndex: 0 }}>
                  {activeKey}
                </div>
              )}

              {/* VIDEO atau GAMBAR */}
              <AnimatePresence mode="wait">
                {showVideo && active.videoId ? (
                  <motion.div
                    key={activeKey + "-video"}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ position: "relative", zIndex: 1, borderRadius: "clamp(16px, 2vw, 24px)", overflow: "hidden", aspectRatio: "16/9", width: "100%" }}
                  >
                    <iframe
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                      src={"https://www.youtube.com/embed/" + active.videoId + "?autoplay=1&mute=0&rel=0"}
                      title={"Video " + active.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeKey + "-img"}
                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.03, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="aspect-[4/3] w-full rounded-2xl flex items-center justify-center overflow-hidden"
                    style={{ position: "relative", zIndex: 1, background: "rgba(255,107,53,0.04)", border: "1px solid rgba(255,107,53,0.12)" }}
                  >
                    <img
                      src={active.imageSrc}
                      alt={active.name}
                      className="w-full h-full object-contain"
                      style={{ filter: "drop-shadow(0 6px 20px rgba(255,107,53,0.18))", padding: "clamp(8px, 1.5vw, 16px)" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div
                className="flex items-center justify-center"
                style={{
                  marginTop: "clamp(12px, 2vh, 24px)",
                  marginBottom: showVideo ? "clamp(12px, 2vh, 16px)" : 0,
                  padding: showVideo ? "0 clamp(16px, 2.5vw, 32px)" : 0,
                  gap: "clamp(6px, 1vw, 10px)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {products.map((p) => (
                  <SelectorButton
                    key={p.key}
                    label={"Product " + p.key}
                    isActive={p.key === activeKey}
                    isDark={isDark}
                    onClick={() => setActiveKey(p.key)}
                  />
                ))}
              </div>
            </div>

            <p style={{ marginTop: "clamp(10px, 1.5vh, 16px)", fontSize: "clamp(9px, 0.9vw, 11px)", letterSpacing: "0.1em", color: "rgba(232,228,220,0.35)", fontFamily: "monospace", textAlign: "center" }}>
              Click to switch product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
