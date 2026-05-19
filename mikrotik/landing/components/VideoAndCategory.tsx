"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// ─── HOOK DARK MODE ──────────────────────────────────────────
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

// ─── CATEGORY CARD ───────────────────────────────────────────
function HomepageCategoryCard({
  title,
  href,
  imageSrc,
}: {
  title: string;
  href: string;
  imageSrc: string;
}) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        border: hovered
          ? "1px solid rgba(255,107,53,0.45)"
          : "1px solid rgba(255,107,53,0.15)",
        background: hovered
          ? "rgba(255,107,53,0.08)"
          : "rgba(10,10,15,0.40)",
        backdropFilter: "blur(12px)",
        padding: "0",
        minHeight: 0,
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        position: "relative",
        overflow: "hidden",
        textDecoration: "none",
        transition: "all 0.3s ease",
        boxShadow: hovered
          ? "0 0 24px rgba(255,107,53,0.15)"
          : "none",
      }}
    >
      {/* Gambar */}
      <img
        src={imageSrc}
        alt={title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.7s ease",
        }}
        loading="lazy"
        draggable={false}
      />

      {/* Overlay gelap */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,10,15,0.25)",
          pointerEvents: "none",
        }}
      />

      {/* Gradient bawah */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(255,107,53,0.55) 0%, rgba(10,10,15,0.30) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(10,10,15,0.80) 0%, rgba(10,10,15,0.20) 50%, transparent 100%)",
          pointerEvents: "none",
          transition: "all 0.4s ease",
        }}
      />

      {/* Border oranye bawah saat hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.7), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Judul */}
      <div style={{ position: "relative", zIndex: 10, padding: "16px 20px" }}>
        <p
          style={{
            fontWeight: 700,
            color: "#ffffff",
            fontSize: "15px",
            margin: 0,
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </p>
      </div>
    </a>
  );
}

// ─── VIEW ALL BUTTON ─────────────────────────────────────────
function ViewAllButton({ href }: { href: string }) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "100px",
        padding: "0 32px",
        height: "48px",
        display: "inline-flex",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "0.03em",
        textDecoration: "none",
        transition: "all 0.3s ease",
        cursor: "pointer",
        background: hovered ? "rgba(255,107,53,1)" : "rgba(255,107,53,0.85)",
        border: "1px solid rgba(255,107,53,0.9)",
        color: "#ffffff",
        boxShadow: hovered
          ? "0 4px 30px rgba(255,107,53,0.50)"
          : "0 4px 20px rgba(255,107,53,0.25)",
      }}
    >
      View All Category
    </a>
  );
}

// ─── KOMPONEN UTAMA ───────────────────────────────────────────
export default function VideoAndCategory({
  title,
  description,
  videoId,
  categories,
}: {
  title: string;
  description: string;
  videoId: string;
  categories: { title: string; href: string; imageSrc?: string }[];
}) {
  const fallbackImg = "/images/placeholder-product.png";
  const isDark = useDarkMode();
  const backgroundUrl = "/images/batik/batik-mikrotik1.png";

  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#E8E4DC",
      }}
    >
      {/* OVERLAY */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isDark
            ? "rgba(10,10,15,0.72)"
            : "rgba(28,20,14,0.65)",
        }}
      />

      {/* GLOW TENGAH */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          style={{
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(255,107,53,0.14) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(255,107,53,0.10) 0%, transparent 70%)",
            filter: "blur(90px)",
            transition: "all 0.5s ease",
          }}
        />
      </div>

      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">

        {/* JUDUL DUA KOLOM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-2">

          {/* Kiri */}
          <div>
            <p
              style={{
                margin: "0 0 12px",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#FF6B35",
                fontFamily: "monospace",
              }}
            >
              Video
            </p>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: isDark ? "#E8E4DC" : "#F0E8DF",
              }}
            >
              Get To Know MikroTik
            </h2>
          </div>

          {/* Kanan */}
          <div>
            <p
              style={{
                margin: "0 0 12px",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#FF6B35",
                fontFamily: "monospace",
              }}
            >
              Kategori
            </p>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: isDark ? "#E8E4DC" : "#F0E8DF",
              }}
            >
              Product Category
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            margin: "20px 0 28px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(90deg, rgba(255,107,53,0.35), transparent)",
            }}
          />
          <span style={{ color: "#FF6B35", fontSize: 14 }}>◈</span>
          <div
            style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.35))",
            }}
          />
        </div>

        {/* VIDEO + CATEGORY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">

          {/* VIDEO */}
          <div
            className="relative w-full overflow-hidden aspect-video"
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(255,107,53,0.18)",
              background: "rgba(10,10,15,0.50)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 8px 40px rgba(255,107,53,0.08)",
            }}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`}
              title="MikroTik Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* CATEGORY GRID */}
          <div className="flex w-full min-h-[240px] lg:min-h-0 lg:h-full">
            <div className="grid h-full w-full min-h-0 grid-cols-2 grid-rows-2 gap-4">
              {categories.slice(0, 4).map((c) => (
                <HomepageCategoryCard
                  key={c.title}
                  title={c.title}
                  href={c.href}
                  imageSrc={c.imageSrc?.trim() ? c.imageSrc : fallbackImg}
                />
              ))}
            </div>
          </div>
        </div>

        {/* DESKRIPSI + BUTTON */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Deskripsi */}
          <div>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "18px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: isDark ? "#E8E4DC" : "#F0E8DF",
              }}
            >
              {title}
            </h3>
            <div
              style={{
                width: 32,
                height: 2,
                background: "#FF6B35",
                borderRadius: 2,
                marginBottom: 14,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: 1.8,
                color: isDark
                  ? "rgba(232,228,220,0.60)"
                  : "rgba(240,232,223,0.70)",
              }}
            >
              {description}
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-start items-start pt-1">
            <ViewAllButton href="/mikrotik/categories" />
          </div>
        </div>
      </div>
    </div>
  );
}
