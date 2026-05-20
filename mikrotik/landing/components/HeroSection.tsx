"use client";

import { useEffect, useState, useRef } from "react";

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

const milestones = [
  { year: "1996", title: "Lahirnya MikroTik", desc: "Didirikan di Riga, Latvia oleh John Trully & Arnis Riekstins" },
  { year: "1997", title: "RouterOS Pertama", desc: "Sistem operasi berbasis Linux yang merevolusi dunia networking" },
  { year: "2002", title: "Era RouterBOARD", desc: "Hardware sendiri yang terjangkau dan bertenaga tinggi" },
  { year: "2010", title: "Ekspansi Global", desc: "Distribusi ke 150+ negara di seluruh dunia" },
  { year: "Kini", title: "Inovasi Tanpa Henti", desc: "CCR, CRS, dan solusi cloud networking terkini" },
];

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
      { threshold: 0.2 }
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
        gap: 10,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div
          style={{
            width: 8, height: 8, borderRadius: "50%",
            background: isActive ? "#FF6B35" : "rgba(255,107,53,0.35)",
            boxShadow: isActive ? "0 0 8px rgba(255,107,53,0.8)" : "none",
            transition: "all 0.4s ease", marginTop: 3, flexShrink: 0,
          }}
        />
        {index < milestones.length - 1 && (
          <div style={{ width: 1, flex: 1, minHeight: 20, background: "rgba(255,107,53,0.2)", marginTop: 3 }} />
        )}
      </div>
      <div style={{ paddingBottom: index < milestones.length - 1 ? 12 : 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
          <span style={{ fontSize: 8, fontFamily: "monospace", letterSpacing: "0.1em", color: "#FF6B35", fontWeight: 700 }}>
            {milestone.year}
          </span>
          <span style={{ fontSize: 10, fontWeight: 700, color: isActive ? "#FF6B35" : "rgba(232,228,220,0.85)", letterSpacing: "-0.01em", transition: "color 0.4s ease" }}>
            {milestone.title}
          </span>
        </div>
        <p style={{ fontSize: 9, lineHeight: 1.5, color: "rgba(232,228,220,0.40)", margin: 0 }}>
          {milestone.desc}
        </p>
      </div>
    </div>
  );
}

function HoverButton({ label, isDark, onClick }: { label: string; isDark: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "100px",
        padding: "0 clamp(16px, 2vw, 28px)",
        minWidth: "clamp(120px, 14vw, 160px)",
        height: "clamp(36px, 4vh, 44px)",
        background: hovered ? "rgba(255,107,53,0.22)" : "rgba(255,107,53,0.09)",
        backdropFilter: "blur(12px)",
        border: hovered ? "1px solid rgba(255,107,53,0.60)" : "1px solid rgba(255,107,53,0.28)",
        color: hovered ? "#ffffff" : isDark ? "#E8E4DC" : "#F0E8DF",
        fontSize: "clamp(11px, 1.1vw, 13px)",
        fontWeight: 500, letterSpacing: "0.03em", cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 4px 20px rgba(255,107,53,0.25)" : "0 2px 10px rgba(255,107,53,0.08)",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

export default function HeroSection() {
  const logoUrl = "/uploads/mikrotik-dcs/mikrotik_logo.png";
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
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ATAS */}
        <div
          className="flex-1 flex flex-col items-center justify-center px-4"
          style={{ paddingTop: "clamp(80px, 10vh, 120px)", paddingBottom: "clamp(24px, 4vh, 48px)" }}
        >
          {/* LOGO + BADGE */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, marginBottom: "clamp(12px, 2vh, 20px)" }}>
            <img
              src={logoUrl}
              alt="MikroTik"
              style={{
                width: "clamp(140px, 18vw, 260px)",
                height: "clamp(140px, 18vw, 260px)",
                objectFit: "contain",
                filter: "drop-shadow(0 6px 24px rgba(255,107,53,0.55)) drop-shadow(0 0 40px rgba(255,107,53,0.22))",
              }}
              draggable={false}
            />
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                border: "1px solid rgba(255,107,53,0.35)", borderRadius: "100px",
                padding: "4px 14px", background: "rgba(255,107,53,0.08)", backdropFilter: "blur(8px)",
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF6B35", display: "inline-block" }} />
              <span style={{ fontSize: "clamp(8px, 0.8vw, 10px)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace", fontWeight: 600 }}>
                Dinamika Cipta Solusi
              </span>
            </div>
          </div>

          {/* Typewriter */}
          <div style={{ textAlign: "center", marginBottom: "clamp(8px, 1.5vh, 12px)" }}>
            <h1
              style={{
                fontSize: "clamp(22px, 4.5vw, 52px)", fontWeight: 900,
                letterSpacing: "-0.03em", lineHeight: 1.1,
                color: isDark ? "#E8E4DC" : "#F0E8DF",
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
                  display: "inline-block", width: 2, height: "0.85em",
                  background: "#FF6B35", marginLeft: 3, verticalAlign: "middle",
                  borderRadius: 2, animation: "blink 0.9s infinite",
                }}
              />
            </h1>
          </div>

          <p style={{ fontSize: "clamp(10px, 1vw, 13px)", color: "rgba(232,228,220,0.45)", fontFamily: "monospace", letterSpacing: "0.08em", marginBottom: "clamp(20px, 3vh, 32px)" }}>
            MikroTik · Networking For Everyone
          </p>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, width: "100%", maxWidth: 360, marginBottom: "clamp(20px, 3vh, 32px)" }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.35))" }} />
            <span style={{ color: "#FF6B35", fontSize: 12 }}>◈</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.35), transparent)" }} />
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
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
            padding: "clamp(16px, 2.5vh, 24px) 0 clamp(20px, 3vh, 32px)",
          }}
        >
          <div className="container mx-auto px-4">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(12px, 2vh, 20px)" }}>
              <span style={{ fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace", fontWeight: 700, whiteSpace: "nowrap" }}>
                Perjalanan MikroTik
              </span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.25), transparent)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0 20px" }}>
              {milestones.map((m, i) => (
                <TimelineItem key={m.year} milestone={m} index={i} isActive={activeMilestone === i} />
              ))}
            </div>
            <p style={{ marginTop: "clamp(12px, 2vh, 20px)", fontSize: 9, letterSpacing: "0.1em", color: "rgba(232,228,220,0.28)", fontFamily: "monospace", textAlign: "center" }}>
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
