"use client";

import { useEffect, useState, useRef } from "react";

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

// ─── DATA TIMELINE ───────────────────────────────────────────
const milestones = [
  { year: "1996", title: "Lahirnya MikroTik", desc: "Didirikan di Riga, Latvia oleh John Trully & Arnis Riekstins" },
  { year: "1997", title: "RouterOS Pertama", desc: "Sistem operasi berbasis Linux yang merevolusi dunia networking" },
  { year: "2002", title: "Era RouterBOARD", desc: "Hardware sendiri yang terjangkau dan bertenaga tinggi" },
  { year: "2010", title: "Ekspansi Global", desc: "Distribusi ke 150+ negara di seluruh dunia" },
  { year: "Kini", title: "Inovasi Tanpa Henti", desc: "CCR, CRS, dan solusi cloud networking terkini" },
];

// ─── TYPEWRITER PHRASES ──────────────────────────────────────
const phrases = [
  "Routing The World",
  "Since 1996",
  "RouterOS Technology",
  "150+ Countries",
  "Trusted by Millions",
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── TIMELINE ITEM ───────────────────────────────────────────
function TimelineItem({
  milestone,
  index,
  isActive,
}: {
  milestone: typeof milestones[0];
  index: number;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: isActive ? "#FF6B35" : "rgba(255,107,53,0.35)",
            boxShadow: isActive ? "0 0 10px rgba(255,107,53,0.8)" : "none",
            transition: "all 0.4s ease",
            marginTop: 3,
            flexShrink: 0,
          }}
        />
        {index < milestones.length - 1 && (
          <div
            style={{
              width: 1,
              flex: 1,
              minHeight: 28,
              background: "rgba(255,107,53,0.2)",
              marginTop: 4,
            }}
          />
        )}
      </div>

      <div style={{ paddingBottom: index < milestones.length - 1 ? 16 : 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
          <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.12em", color: "#FF6B35", fontWeight: 700 }}>
            {milestone.year}
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: isActive ? "#FF6B35" : "rgba(232,228,220,0.85)",
              letterSpacing: "-0.01em",
              transition: "color 0.4s ease",
            }}
          >
            {milestone.title}
          </span>
        </div>
        <p style={{ fontSize: 10, lineHeight: 1.6, color: "rgba(232,228,220,0.45)", margin: 0 }}>
          {milestone.desc}
        </p>
      </div>
    </div>
  );
}

// ─── HOVER BUTTON ─────────────────────────────────────────────
function HoverButton({ label, isDark, onClick }: { label: string; isDark: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "100px",
        padding: "0 24px",
        minWidth: "160px",
        height: "44px",
        background: hovered ? "rgba(255,107,53,0.22)" : "rgba(255,107,53,0.09)",
        backdropFilter: "blur(12px)",
        border: hovered ? "1px solid rgba(255,107,53,0.60)" : "1px solid rgba(255,107,53,0.28)",
        color: hovered ? "#ffffff" : isDark ? "#E8E4DC" : "#F0E8DF",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "0.03em",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 4px 24px rgba(255,107,53,0.28)" : "0 2px 12px rgba(255,107,53,0.08)",
      }}
    >
      {label}
    </button>
  );
}

// ─── KOMPONEN UTAMA ───────────────────────────────────────────
export default function HeroSection() {
  const logoUrl = "/uploads/mikrotik-dcs/mikrotik_logo.png";
  const backgroundUrl = "/images/batik/batik-mikrotik1.png";
  const isDark = useDarkMode();

  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const [activeMilestone, setActiveMilestone] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % milestones.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{ background: isDark ? "rgba(10,10,15,0.72)" : "rgba(28,20,14,0.65)" }}
      />

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          style={{
            width: "50vw", height: "50vw", borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(255,107,53,0.16) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(255,107,53,0.11) 0%, transparent 70%)",
            filter: "blur(80px)",
            transition: "all 0.5s ease",
          }}
        />
      </div>

      {/* GRID */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,107,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ATAS */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-8">

          {/* LOGO + BADGE DEKAT */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, marginBottom: 20 }}>
            <img
              src={logoUrl}
              alt="MikroTik"
              style={{
                width: "clamp(240px, 32vw, 480px)",
                height: "clamp(240px, 32vw, 480px)",
                objectFit: "contain",
                filter: "drop-shadow(0 8px 32px rgba(255,107,53,0.55)) drop-shadow(0 0 60px rgba(255,107,53,0.25))",
              }}
              draggable={false}
            />
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(255,107,53,0.35)", borderRadius: "100px",
                padding: "5px 18px", background: "rgba(255,107,53,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF6B35", display: "inline-block" }} />
              <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace", fontWeight: 600 }}>
                Dinamika Cipta Solusi
              </span>
            </div>
          </div>

          {/* Typewriter */}
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <h1
              style={{
                fontSize: "clamp(28px, 6vw, 64px)",
                fontWeight: 900, letterSpacing: "-0.03em",
                lineHeight: 1.1, color: isDark ? "#E8E4DC" : "#F0E8DF",
                margin: 0, minHeight: "1.2em",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6B35 0%, #F7C59F 60%, #FF6B35 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {displayText}
              </span>
              <span
                style={{
                  display: "inline-block", width: 3, height: "0.85em",
                  background: "#FF6B35", marginLeft: 4, verticalAlign: "middle",
                  borderRadius: 2, animation: "blink 0.9s infinite",
                }}
              />
            </h1>
          </div>

          <p style={{ fontSize: 13, color: "rgba(232,228,220,0.45)", fontFamily: "monospace", letterSpacing: "0.08em", marginBottom: 36 }}>
            MikroTik · Networking For Everyone
          </p>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, width: "100%", maxWidth: 400, marginBottom: 36 }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.35))" }} />
            <span style={{ color: "#FF6B35", fontSize: 14 }}>◈</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.35), transparent)" }} />
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {[
              { label: "Product Highlight", id: "mikrotik-home-a" },
              { label: "Product Category",  id: "mikrotik-home-b" },
              { label: "Why Choose Us",     id: "mikrotik-home-c" },
            ].map((btn) => (
              <HoverButton key={btn.id} label={btn.label} isDark={isDark} onClick={() => scrollToId(btn.id)} />
            ))}
          </div>
        </div>

        {/* BAWAH: TIMELINE */}
        <div
          style={{
            borderTop: "1px solid rgba(255,107,53,0.12)",
            background: isDark ? "rgba(10,10,15,0.45)" : "rgba(28,20,14,0.38)",
            backdropFilter: "blur(16px)",
            padding: "24px 0 32px",
          }}
        >
          <div className="container mx-auto px-4">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace", fontWeight: 700 }}>
                Perjalanan MikroTik
              </span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.25), transparent)" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0 24px" }}>
              {milestones.map((m, i) => (
                <TimelineItem key={m.year} milestone={m} index={i} isActive={activeMilestone === i} />
              ))}
            </div>

            <p style={{ marginTop: 20, fontSize: 10, letterSpacing: "0.12em", color: "rgba(232,228,220,0.30)", fontFamily: "monospace", textAlign: "center" }}>
              Scroll untuk melihat section berikutnya.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
