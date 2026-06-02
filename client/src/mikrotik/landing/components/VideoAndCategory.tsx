"use client";

import { useEffect, useState } from "react";

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

function HomepageCategoryCard({ title, href, imageSrc }: { title: string; href: string; imageSrc: string }) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "clamp(10px, 1.2vw, 16px)",
        border: hovered ? "1px solid rgba(255,107,53,0.45)" : "1px solid rgba(255,107,53,0.15)",
        background: hovered ? "rgba(255,107,53,0.08)" : "rgba(10,10,15,0.40)",
        backdropFilter: "blur(12px)",
        padding: 0, minHeight: 0, height: "100%",
        display: "flex", alignItems: "flex-end",
        position: "relative", overflow: "hidden",
        textDecoration: "none", transition: "all 0.3s ease",
        boxShadow: hovered ? "0 0 20px rgba(255,107,53,0.15)" : "none",
      }}
    >
      <img src={imageSrc} alt={title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.7s ease" }} loading="lazy" draggable={false} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,15,0.25)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: hovered ? "linear-gradient(to top, rgba(255,107,53,0.55) 0%, rgba(10,10,15,0.30) 50%, transparent 100%)" : "linear-gradient(to top, rgba(10,10,15,0.80) 0%, rgba(10,10,15,0.20) 50%, transparent 100%)", pointerEvents: "none", transition: "all 0.4s ease" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.7), transparent)", opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease" }} />
      <div style={{ position: "relative", zIndex: 10, padding: "clamp(10px, 1.5vw, 16px) clamp(12px, 1.8vw, 20px)" }}>
        <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "clamp(11px, 1.2vw, 15px)", margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.6)", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
          {title}
        </p>
      </div>
    </a>
  );
}

function ViewAllButton({ href }: { href: string }) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "100px",
        padding: "0 clamp(20px, 2.5vw, 32px)",
        height: "clamp(38px, 4.5vh, 48px)",
        display: "inline-flex", alignItems: "center",
        fontSize: "clamp(12px, 1.1vw, 14px)", fontWeight: 600, letterSpacing: "0.03em",
        textDecoration: "none", transition: "all 0.3s ease", cursor: "pointer",
        background: hovered ? "rgba(255,107,53,1)" : "rgba(255,107,53,0.85)",
        border: "1px solid rgba(255,107,53,0.9)", color: "#ffffff",
        boxShadow: hovered ? "0 4px 28px rgba(255,107,53,0.50)" : "0 4px 18px rgba(255,107,53,0.25)",
      }}
    >
      View All Category
    </a>
  );
}

export default function VideoAndCategory({
  title, description, videoId, categories,
}: {
  title: string;
  description: string;
  videoId: string;
  categories: { title: string; href: string; imageSrc?: string }[];
}) {
  const fallbackImg = "/images/placeholder-product.png";
  const isDark = useDarkMode();

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden" style={{ color: "#E8E4DC" }}>
      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl" style={{ padding: "clamp(40px, 6vh, 80px) clamp(16px, 4vw, 32px)" }}>

        {/* JUDUL DUA KOLOM */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(12px, 2vw, 24px)", marginBottom: 4 }}>
          <div>
            <p style={{ margin: "0 0 8px", fontSize: "clamp(9px, 0.9vw, 11px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace" }}>Video</p>
            <h2 style={{ margin: 0, fontSize: "clamp(18px, 3vw, 36px)", fontWeight: 900, letterSpacing: "-0.03em", color: isDark ? "#E8E4DC" : "#F0E8DF" }}>
              Get To Know MikroTik
            </h2>
          </div>
          <div>
            <p style={{ margin: "0 0 8px", fontSize: "clamp(9px, 0.9vw, 11px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace" }}>Kategori</p>
            <h2 style={{ margin: 0, fontSize: "clamp(18px, 3vw, 36px)", fontWeight: 900, letterSpacing: "-0.03em", color: isDark ? "#E8E4DC" : "#F0E8DF" }}>
              Product Category
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "clamp(12px, 2vh, 20px) 0 clamp(16px, 2.5vh, 28px)" }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.35), transparent)" }} />
          <span style={{ color: "#FF6B35", fontSize: 12 }}>◈</span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.35))" }} />
        </div>

        {/* VIDEO + CATEGORY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch" style={{ gap: "clamp(16px, 3vw, 32px)" }}>
          <div className="relative w-full overflow-hidden aspect-video" style={{ borderRadius: "clamp(12px, 1.5vw, 20px)", border: "1px solid rgba(255,107,53,0.18)", background: "rgba(10,10,15,0.50)", backdropFilter: "blur(16px)", boxShadow: "0 8px 36px rgba(255,107,53,0.08)" }}>
            <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`} title="MikroTik Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>

          <div className="flex w-full min-h-[200px] lg:min-h-0 lg:h-full">
            <div className="grid h-full w-full min-h-0 grid-cols-2 grid-rows-2" style={{ gap: "clamp(8px, 1vw, 16px)" }}>
              {categories.slice(0, 4).map((c) => (
                <HomepageCategoryCard key={c.title} title={c.title} href={c.href} imageSrc={c.imageSrc?.trim() ? c.imageSrc : fallbackImg} />
              ))}
            </div>
          </div>
        </div>

        {/* DESKRIPSI + BUTTON */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ marginTop: "clamp(20px, 3vh, 32px)", gap: "clamp(16px, 3vw, 32px)" }}>
          <div>
            <h3 style={{ margin: "0 0 10px", fontSize: "clamp(14px, 1.5vw, 18px)", fontWeight: 800, letterSpacing: "-0.02em", color: isDark ? "#E8E4DC" : "#F0E8DF" }}>
              {title}
            </h3>
            <div style={{ width: 28, height: 2, background: "#FF6B35", borderRadius: 2, marginBottom: 12 }} />
            <p style={{ margin: 0, fontSize: "clamp(12px, 1.1vw, 14px)", lineHeight: 1.8, color: isDark ? "rgba(232,228,220,0.60)" : "rgba(240,232,223,0.70)" }}>
              {description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start items-start pt-1">
            <ViewAllButton href="/mikrotik/categories" />
          </div>
        </div>
      </div>
    </div>
  );
}
