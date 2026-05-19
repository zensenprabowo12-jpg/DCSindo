"use client";

import { useEffect, useRef, useState } from "react";

// ─── TIPE DATA ───────────────────────────────────────────────
interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

interface PillarItem {
  icon: string;
  title: string;
  color: string;
  description: string;
}

interface TimelineCardProps {
  item: TimelineItem;
  active: boolean;
  align: "left" | "right";
}

interface AnimatedCounterProps {
  value: string;
}

// ─── DATA ────────────────────────────────────────────────────
const timelineData: TimelineItem[] = [
  {
    year: "1996",
    title: "Lahirnya MikroTik",
    description:
      "MikroTik didirikan di Riga, Latvia oleh John Trully dan Arnis Riekstins. Visi awalnya adalah menyediakan solusi koneksi internet di wilayah yang infrastruktur internetnya masih sangat terbatas.",
    icon: "🏛️",
    color: "#FF6B35",
  },
  {
    year: "1997",
    title: "RouterOS Pertama",
    description:
      "MikroTik merilis RouterOS — sistem operasi berbasis Linux yang revolusioner, mampu mengubah komputer biasa menjadi router canggih dengan fitur firewall, bandwidth management, dan VPN.",
    icon: "⚙️",
    color: "#F7C59F",
  },
  {
    year: "2002",
    title: "Era RouterBOARD",
    description:
      "MikroTik mulai memproduksi hardware sendiri melalui lini RouterBOARD, menjadikan solusi jaringan semakin terjangkau dan mudah dideploy di berbagai lingkungan.",
    icon: "🔧",
    color: "#EFEFD0",
  },
  {
    year: "2010",
    title: "Ekspansi Global",
    description:
      "MikroTik merambah pasar global, dengan distribusi ke ratusan negara. Produknya menjadi standar de facto untuk ISP skala kecil-menengah di Asia, Amerika Latin, dan Afrika.",
    icon: "🌍",
    color: "#04A777",
  },
  {
    year: "2018",
    title: "MikroTik di Indonesia",
    description:
      "Indonesia menjadi salah satu pasar terbesar MikroTik di dunia. Ribuan ISP lokal, sekolah, dan perusahaan menggunakan RouterOS untuk kebutuhan jaringan sehari-hari.",
    icon: "🇮🇩",
    color: "#FF6B35",
  },
  {
    year: "Kini",
    title: "Inovasi Tanpa Henti",
    description:
      "MikroTik terus berinovasi dengan produk terbaru seperti series hEX, CCR (Cloud Core Router), CRS (Cloud Router Switch), dan platform manajemen berbasis cloud.",
    icon: "🚀",
    color: "#A23B72",
  },
];

const stats: StatItem[] = [
  { value: "28+", label: "Tahun Pengalaman", sublabel: "Sejak 1996" },
  { value: "150+", label: "Negara", sublabel: "Distribusi Global" },
  { value: "2M+", label: "Perangkat Aktif", sublabel: "Di seluruh dunia" },
  { value: "#1", label: "ISP Choice", sublabel: "Untuk jaringan menengah" },
];

const pillars: PillarItem[] = [
  {
    icon: "◈",
    title: "Visi",
    color: "#FF6B35",
    description:
      "Menghadirkan solusi jaringan yang efisien, terjangkau, dan mudah diakses untuk berbagai kebutuhan infrastruktur — dari jaringan rumahan hingga data center enterprise.",
  },
  {
    icon: "◉",
    title: "Misi",
    color: "#04A777",
    description:
      "Mengembangkan teknologi routing dan wireless yang handal melalui inovasi software dan hardware yang berkelanjutan, dengan fokus pada kemudahan konfigurasi dan stabilitas.",
  },
  {
    icon: "◆",
    title: "Value",
    color: "#A23B72",
    description:
      "Memberikan sistem jaringan yang stabil, fleksibel, dan scalable untuk berbagai lingkungan — dengan harga yang kompetitif tanpa kompromi pada performa dan fitur.",
  },
];

// ─── HELPER ──────────────────────────────────────────────────
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "255, 107, 53";
}

// ─── ANIMATED COUNTER ────────────────────────────────────────
function AnimatedCounter({ value }: AnimatedCounterProps) {
  const [display, setDisplay] = useState<string>("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/\d/g, "");
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const step = Math.ceil(num / 40);
    const interval = setInterval(() => {
      start += step;
      if (start >= num) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        setDisplay(String(start) + suffix);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

// ─── TIMELINE CARD ───────────────────────────────────────────
function TimelineCard({ item, active, align }: TimelineCardProps) {
  return (
    <div
      style={{
        border: `1px solid ${active ? item.color : "rgba(255,107,53,0.12)"}`,
        borderRadius: "16px",
        padding: "20px 24px",
        background: active
          ? `rgba(${hexToRgb(item.color)}, 0.07)`
          : "rgba(255,255,255,0.02)",
        width: "100%",
        textAlign: align === "right" ? "right" : "left",
        transition: "all 0.3s ease",
        boxShadow: active
          ? `0 0 30px rgba(${hexToRgb(item.color)}, 0.12)`
          : "none",
        backdropFilter: "blur(8px)",
        cursor: "pointer",
      }}
    >
      <p
        style={{
          margin: "0 0 6px",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: "#E8E4DC",
        }}
      >
        {item.title}
      </p>
      <p
        style={{
          margin: 0,
          fontSize: 13,
          lineHeight: 1.7,
          color: "rgba(232,228,220,0.55)",
          maxHeight: active ? "200px" : "60px",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        {item.description}
      </p>
      {!active && (
        <p
          style={{
            margin: "8px 0 0",
            fontSize: 11,
            color: item.color,
            fontFamily: "monospace",
            letterSpacing: "0.1em",
          }}
        >
          TAP UNTUK DETAIL →
        </p>
      )}
    </div>
  );
}

// ─── KOMPONEN UTAMA ──────────────────────────────────────────
export default function WhyChooseUs() {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  const heroRef  = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const tlRef    = useRef<HTMLDivElement>(null);

  const [heroInView,  setHeroInView]  = useState<boolean>(false);
  const [statsInView, setStatsInView] = useState<boolean>(false);
  const [tlInView,    setTlInView]    = useState<boolean>(false);

  useEffect(() => {
    const watch = (
      el: HTMLDivElement | null,
      setter: (v: boolean) => void
    ) => {
      if (!el) return () => {};
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setter(true);
        },
        { threshold: 0.05 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };

    const c1 = watch(heroRef.current,  setHeroInView);
    const c2 = watch(statsRef.current, setStatsInView);
    const c3 = watch(tlRef.current,    setTlInView);
    return () => { c1(); c2(); c3(); };
  }, []);

  return (
    <div
      style={{
        background: "#0A0A0F",
        minHeight: "100vh",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        color: "#E8E4DC",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* ── BACKGROUND ── */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "55vw", height: "55vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "-10%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(4,167,119,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", top: "50%", left: "40%", width: "30vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(162,59,114,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,107,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* ── HERO ── */}
      <div
        ref={heroRef}
        style={{ position: "relative", zIndex: 1, padding: "120px 24px 80px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}
      >
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1px solid rgba(255,107,53,0.4)", borderRadius: "100px",
            padding: "6px 20px", marginBottom: "40px", background: "rgba(255,107,53,0.07)",
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6B35", display: "inline-block" }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace" }}>
            Dinamika Cipta Solusi
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 96px)", fontWeight: 900, lineHeight: 1.0,
            letterSpacing: "-0.03em", margin: "0 0 24px",
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}
        >
          <span style={{ color: "#E8E4DC" }}>History of</span>{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF6B35 0%, #F7C59F 50%, #FF6B35 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            MikroTik
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(232,228,220,0.55)",
            maxWidth: "620px", margin: "0 auto 60px", lineHeight: 1.75,
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
          }}
        >
          Dari garasi di Latvia menuju jaringan global — perjalanan 28 tahun perusahaan yang merevolusi industri networking dunia.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 16, opacity: heroInView ? 1 : 0, transition: "opacity 1s ease 0.5s" }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.3))" }} />
          <span style={{ color: "#FF6B35", fontSize: 20 }}>◈</span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.3), transparent)" }} />
        </div>
      </div>

      {/* ── CERITA ASAL USUL ── */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 24px 100px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ border: "1px solid rgba(255,107,53,0.15)", borderRadius: "24px", overflow: "hidden", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }}>
          <div style={{ padding: "32px 40px 24px", borderBottom: "1px solid rgba(255,107,53,0.1)", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(255,107,53,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
              🌐
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace" }}>Asal Usul</p>
              <p style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Tentang MikroTik</p>
            </div>
          </div>
          <div style={{ padding: "32px 40px 40px" }}>
            <p style={{ margin: "0 0 20px", lineHeight: 1.85, color: "rgba(232,228,220,0.75)", fontSize: 16 }}>
              MikroTik didirikan pada tahun <strong style={{ color: "#FF6B35" }}>1996 di Riga, Latvia</strong> oleh{" "}
              <strong style={{ color: "#E8E4DC" }}>John Trully</strong> dan <strong style={{ color: "#E8E4DC" }}>Arnis Riekstins</strong>.
              Pada awalnya, perusahaan ini berfokus pada pengembangan teknologi jaringan untuk menyediakan koneksi internet
              menggunakan sistem wireless dan routing di wilayah yang infrastruktur internetnya masih sangat terbatas.
            </p>
            <p style={{ margin: "0 0 20px", lineHeight: 1.85, color: "rgba(232,228,220,0.75)", fontSize: 16 }}>
              MikroTik pertama kali dikenal luas melalui <strong style={{ color: "#04A777" }}>RouterOS</strong> — sistem operasi
              berbasis Linux yang dirancang untuk mengubah komputer standar menjadi router jaringan bertenaga penuh, lengkap
              dengan fitur manajemen internet, firewall, bandwidth management, VPN, dan wireless access point.
            </p>
            <p style={{ margin: 0, lineHeight: 1.85, color: "rgba(232,228,220,0.75)", fontSize: 16 }}>
              Seiring meningkatnya permintaan pasar, MikroTik mengembangkan lini perangkat keras sendiri bernama{" "}
              <strong style={{ color: "#F7C59F" }}>RouterBOARD</strong> — hardware khusus yang dioptimalkan untuk menjalankan
              RouterOS dengan efisiensi daya tinggi dan harga yang sangat kompetitif untuk berbagai skala jaringan.
            </p>
          </div>
        </div>
      </div>

      {/* ── STATISTIK ── */}
      <div
        ref={statsRef}
        style={{ position: "relative", zIndex: 1, padding: "0 24px 100px", maxWidth: "1100px", margin: "0 auto" }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,107,53,0.15)", borderRadius: "20px",
                padding: "32px 24px", background: "rgba(255,255,255,0.02)",
                textAlign: "center", backdropFilter: "blur(8px)",
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", background: "linear-gradient(135deg, #FF6B35, #F7C59F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>
                <AnimatedCounter value={s.value} />
              </p>
              <p style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 700, color: "#E8E4DC" }}>{s.label}</p>
              <p style={{ margin: 0, fontSize: 11, color: "rgba(232,228,220,0.4)", fontFamily: "monospace", letterSpacing: "0.1em" }}>{s.sublabel}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div
        ref={tlRef}
        style={{ position: "relative", zIndex: 1, padding: "0 24px 100px", maxWidth: "1100px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ margin: "0 0 12px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace" }}>
            Perjalanan Waktu
          </p>
          <h2 style={{ margin: 0, fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em" }}>
            Timeline MikroTik
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Garis tengah */}
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, transparent, rgba(255,107,53,0.3) 10%, rgba(255,107,53,0.3) 90%, transparent)", transform: "translateX(-50%)" }} />

          {timelineData.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                onClick={() => setActiveYear(activeYear === i ? null : i)}
                style={{
                  display: "grid", gridTemplateColumns: "1fr 60px 1fr",
                  marginBottom: 32, cursor: "pointer",
                  opacity: tlInView ? 1 : 0,
                  transform: tlInView ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
                }}
              >
                {/* Kolom kiri */}
                <div style={{ padding: "0 32px 0 0", display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
                  {isLeft
                    ? <TimelineCard item={item} active={activeYear === i} align="right" />
                    : <div style={{ width: "100%" }} />
                  }
                </div>

                {/* Dot tengah */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20 }}>
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                      background: activeYear === i ? item.color : "rgba(255,107,53,0.15)",
                      border: `2px solid ${item.color}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, transition: "all 0.3s ease",
                      boxShadow: activeYear === i ? `0 0 20px ${item.color}60` : "none",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ marginTop: 8, fontSize: 11, fontWeight: 700, color: item.color, fontFamily: "monospace", letterSpacing: "0.05em", textAlign: "center" }}>
                    {item.year}
                  </div>
                </div>

                {/* Kolom kanan */}
                <div style={{ padding: "0 0 0 32px", display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
                  {!isLeft
                    ? <TimelineCard item={item} active={activeYear === i} align="left" />
                    : <div style={{ width: "100%" }} />
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── VISI MISI VALUE ── */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 24px 120px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ border: "1px solid rgba(255,107,53,0.15)", borderRadius: "28px", overflow: "hidden", background: "rgba(255,255,255,0.015)", backdropFilter: "blur(12px)" }}>
          <div style={{ padding: "40px 48px 32px", borderBottom: "1px solid rgba(255,107,53,0.1)", display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 28 }}>🧭</span>
            <div>
              <p style={{ margin: 0, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace" }}>Fondasi Perusahaan</p>
              <p style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>Visi, Misi & Nilai</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {pillars.map((p, i) => (
              <div
                key={i}
                style={{
                  padding: "40px",
                  borderRight: i < pillars.length - 1 ? "1px solid rgba(255,107,53,0.08)" : "none",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,107,53,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "transparent";
                }}
              >
                <div style={{ fontSize: 32, color: p.color, marginBottom: 16, lineHeight: 1 }}>{p.icon}</div>
                <p style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", color: "#E8E4DC" }}>{p.title}</p>
                <div style={{ width: 32, height: 2, background: p.color, marginBottom: 16, borderRadius: 2 }} />
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: "rgba(232,228,220,0.6)" }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px 60px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 20 }}>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.2))" }} />
          <span style={{ color: "#FF6B35", fontSize: 16 }}>◈</span>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.2), transparent)" }} />
        </div>
        <p style={{ margin: "0 0 4px", fontSize: 13, fontWeight: 700, letterSpacing: "0.05em", color: "#E8E4DC" }}>
          Dinamika Cipta Solusi
        </p>
        <p style={{ margin: 0, fontSize: 11, color: "rgba(232,228,220,0.3)", fontFamily: "monospace", letterSpacing: "0.1em" }}>
          AUTHORIZED MIKROTIK DISTRIBUTOR
        </p>
      </div>
    </div>
  );
}
