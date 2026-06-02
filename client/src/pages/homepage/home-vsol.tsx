import { useRef } from "react";
import Layout from "@/components/layout";
import { Link } from "wouter";
import { ArrowRight, Zap, Globe, Shield, Cpu } from "lucide-react";
import { motion, useInView } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const GREEN = "#16a34a";
const GREEN_LIGHT = "#22c55e";
const GREEN_BRIGHT = "#4ade80";

const TIMELINE = [
  {
    year: "2010",
    title: "Founded in Guangzhou",
    desc: "V-SOL was established in Guangzhou, China, with a mission to deliver affordable FTTX fiber optic solutions to emerging markets.",
  },
  {
    year: "2013",
    title: "First EPON & GPON Line",
    desc: "Launched the first-generation OLT and ONU product lineup, covering both EPON and GPON standards for telecom operators.",
  },
  {
    year: "2016",
    title: "30+ Countries Reached",
    desc: "V-SOL products were deployed across more than 30 countries in Asia, Africa, and Latin America, gaining recognition for reliability.",
  },
  {
    year: "2019",
    title: "Carrier Certification",
    desc: "Received telecom-grade certification from major carriers globally, validating V-SOL as an enterprise and carrier-class vendor.",
  },
  {
    year: "2022",
    title: "5 Million+ Ports Deployed",
    desc: "Surpassed 5 million active fiber ports worldwide, cementing V-SOL's position as a leading FTTH equipment manufacturer.",
  },
  {
    year: "Now",
    title: "DCS Partnership in Indonesia",
    desc: "V-SOL partners with DCS as the official distributor in Indonesia, bringing FTTH technology and full after-sales support.",
  },
];

const CATEGORIES = [
  {
    label: "ONU / ONT",
    desc: "Optical Network Unit for end-user fiber connections",
    // ── GANTI GAMBAR: taruh file gambar di public/images/vsol/categories/ lalu ubah nama file di bawah
    image: "/images/vsol/ONT.jpeg",
    icon: "01",
  },
  {
    label: "OLT",
    desc: "Optical Line Terminal for GPON/EPON networks",
    // ── GANTI GAMBAR: taruh file gambar di public/images/vsol/categories/ lalu ubah nama file di bawah
    image: "/images/vsol/OLT.jpeg",
    icon: "02",
  },
  {
    label: "WiFi Router",
    desc: "Wireless routers for home and business use",
    // ── GANTI GAMBAR: taruh file gambar di public/images/vsol/categories/ lalu ubah nama file di bawah
    image: "/images/vsol/homerouter.jpeg",
    icon: "03",
  },
];

const STATS = [
  { value: "5M+", label: "Ports Deployed", icon: Zap },
  { value: "30+", label: "Countries", icon: Globe },
  { value: "15+", label: "Years Expertise", icon: Shield },
  { value: "24/7", label: "Tech Support", icon: Cpu },
];

export default function HomeVsol() {
  const timelineRef = useRef<HTMLElement | null>(null);
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.05 });
  const catsRef = useRef<HTMLElement | null>(null);
  const catsInView = useInView(catsRef, { once: true, amount: 0.05 });
  const statsRef = useRef<HTMLElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });

  return (
    <Layout>
      <style>{`
        @keyframes vsol-pulse-orb {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.08); }
        }
        @keyframes vsol-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes vsol-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes vsol-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes vsol-border-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
          50% { box-shadow: 0 0 0 3px rgba(34,197,94,0.18); }
        }
        .vsol-cat-card:hover .vsol-cat-img {
          transform: scale(1.07) translateY(-4px);
        }
        .vsol-cat-card:hover .vsol-cat-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .vsol-stat-card:hover {
          border-color: rgba(34,197,94,0.5) !important;
          background: rgba(22,163,74,0.10) !important;
        }
      `}</style>

      <div className="min-w-0 antialiased" style={{ background: "#060c07" }}>

        {/* ── HERO ───────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
          style={{ background: "#060c07" }}
        >
          {/* Animated orb — behind everything */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "50%",
              left: "50%",
              width: "80vw",
              height: "80vw",
              maxWidth: 900,
              maxHeight: 900,
              transform: "translate(-50%, -58%)",
              borderRadius: "50%",
              background: `radial-gradient(circle at 50% 50%, rgba(22,163,74,0.22) 0%, rgba(22,163,74,0.06) 45%, transparent 70%)`,
              animation: "vsol-pulse-orb 6s ease-in-out infinite",
              filter: "blur(8px)",
            }}
          />

          {/* Secondary smaller orb */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "30%",
              right: "10%",
              width: "30vw",
              height: "30vw",
              maxWidth: 340,
              maxHeight: 340,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(74,222,128,0.10) 0%, transparent 70%)`,
              animation: "vsol-pulse-orb 9s ease-in-out infinite reverse",
              filter: "blur(24px)",
            }}
          />

          {/* Fine grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(22,163,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,163,74,0.06) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
            }}
          />

          {/* Scan line */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{ opacity: 0.025 }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${GREEN_BRIGHT}, transparent)`,
                animation: "vsol-scan 8s linear infinite",
              }}
            />
          </div>

          {/* Hero content */}
          <div className="relative z-10 px-4 max-w-5xl mx-auto">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(22,163,74,0.12)",
                border: "1px solid rgba(34,197,94,0.3)",
                borderRadius: 100,
                padding: "6px 18px",
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: GREEN_BRIGHT,
                  boxShadow: `0 0 8px ${GREEN_BRIGHT}`,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: GREEN_LIGHT,
                  fontFamily: "monospace",
                }}
              >
                Dinamika Cipta Solusi · Official Distributor
              </span>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginBottom: 10 }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(72px, 15vw, 140px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                  background: `linear-gradient(135deg, #ffffff 0%, #d1fae5 40%, ${GREEN_LIGHT} 70%, ${GREEN} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  userSelect: "none",
                }}
              >
                V-SOL
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(74,222,128,0.6)",
                fontFamily: "monospace",
                marginBottom: 28,
              }}
            >
              FIBER OPTIC SOLUTIONS
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontSize: "clamp(15px, 2vw, 19px)",
                color: "rgba(255,255,255,0.55)",
                marginBottom: 44,
                maxWidth: 560,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.7,
              }}
            >
              Professional FTTH &amp; Fiber Optic Solutions — ONU/ONT, OLT, and WiFi Routers, delivered with full technical support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
            >
              <Link href="/vsol/shop">
                <a
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 32px",
                    borderRadius: 100,
                    background: `linear-gradient(135deg, ${GREEN_LIGHT} 0%, ${GREEN} 100%)`,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    boxShadow: `0 0 32px rgba(22,163,74,0.4), 0 4px 16px rgba(0,0,0,0.4)`,
                    transition: "all 0.25s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 48px rgba(34,197,94,0.65), 0 4px 20px rgba(0,0,0,0.5)`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px rgba(22,163,74,0.4), 0 4px 16px rgba(0,0,0,0.4)`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  Browse Products
                  <ArrowRight size={16} />
                </a>
              </Link>
              <Link href="/support/vsol">
                <a
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 32px",
                    borderRadius: 100,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(34,197,94,0.35)",
                    color: "rgba(255,255,255,0.75)",
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: "none",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.25s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.7)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.35)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  Support &amp; Contact
                </a>
              </Link>
            </motion.div>
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: 120,
              background: "linear-gradient(to bottom, transparent, #060c07)",
            }}
          />
        </section>

        {/* ── STATS BAR ──────────────────────────────────────── */}
        <section
          ref={statsRef as React.RefObject<HTMLElement>}
          style={{ background: "#060c07", padding: "0 16px 80px" }}
        >
          <div
            style={{
              maxWidth: 1040,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="vsol-stat-card"
                  variants={FADE_UP}
                  custom={i * 0.08}
                  initial="hidden"
                  animate={statsInView ? "visible" : "hidden"}
                  style={{
                    borderRadius: 20,
                    border: "1px solid rgba(22,163,74,0.18)",
                    background: "rgba(22,163,74,0.05)",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    background: "rgba(22,163,74,0.12)",
                    border: "1px solid rgba(34,197,94,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Icon size={18} color={GREEN_LIGHT} />
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(28px, 4vw, 40px)",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      background: `linear-gradient(135deg, #ffffff, ${GREEN_LIGHT})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── CATEGORIES ─────────────────────────────────────── */}
        <section
          ref={catsRef as React.RefObject<HTMLElement>}
          style={{ background: "#080e09", padding: "80px 16px 96px" }}
        >
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>

            {/* Section header */}
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              animate={catsInView ? "visible" : "hidden"}
              style={{ marginBottom: 56, display: "flex", flexDirection: "column", gap: 12 }}
            >
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: GREEN_LIGHT,
                fontFamily: "monospace",
              }}>
                // PRODUCT_CATEGORIES
              </span>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                margin: 0,
                lineHeight: 1.1,
              }}>
                What We Offer
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, margin: 0, lineHeight: 1.7, maxWidth: 440 }}>
                End-to-end fiber optic components for ISPs, enterprises, and telecom operators.
              </p>
            </motion.div>

            {/* Cards grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}>
              {CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  variants={FADE_UP}
                  custom={i * 0.1}
                  initial="hidden"
                  animate={catsInView ? "visible" : "hidden"}
                >
                  <Link href={`/vsol/shop?category=${encodeURIComponent(cat.label)}`}>
                    <a
                      className="vsol-cat-card"
                      style={{
                        display: "block",
                        borderRadius: 24,
                        border: "1px solid rgba(22,163,74,0.18)",
                        background: "rgba(10,18,11,0.7)",
                        overflow: "hidden",
                        textDecoration: "none",
                        transition: "all 0.35s ease",
                        backdropFilter: "blur(12px)",
                        position: "relative",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "rgba(34,197,94,0.55)";
                        el.style.boxShadow = `0 8px 48px rgba(22,163,74,0.18), 0 0 0 1px rgba(34,197,94,0.1)`;
                        el.style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "rgba(22,163,74,0.18)";
                        el.style.boxShadow = "none";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {/* Index badge */}
                      <div style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        zIndex: 2,
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: "monospace",
                        color: "rgba(34,197,94,0.4)",
                        letterSpacing: "0.1em",
                      }}>
                        {cat.icon}
                      </div>

                      {/* Image area */}
                      <div style={{
                        height: 200,
                        background: "rgba(14,24,15,0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        position: "relative",
                      }}>
                        {/* Corner accent */}
                        <div style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 1,
                          background: `linear-gradient(90deg, transparent, rgba(34,197,94,0.3), transparent)`,
                        }} />
                        <img
                          src={cat.image}
                          alt={cat.label}
                          className="vsol-cat-img"
                          style={{
                            maxWidth: "75%",
                            maxHeight: "80%",
                            objectFit: "contain",
                            transition: "transform 0.5s ease",
                            filter: "drop-shadow(0 8px 24px rgba(22,163,74,0.2))",
                          }}
                        />
                      </div>

                      {/* Text area */}
                      <div style={{ padding: "20px 24px 24px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                          <span style={{
                            fontSize: 16,
                            fontWeight: 800,
                            color: "#ffffff",
                            letterSpacing: "-0.01em",
                          }}>
                            {cat.label}
                          </span>
                          {/* Arrow */}
                          <div
                            className="vsol-cat-arrow"
                            style={{
                              opacity: 0,
                              transform: "translateX(-8px)",
                              transition: "all 0.3s ease",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 30,
                              height: 30,
                              borderRadius: "50%",
                              background: "rgba(34,197,94,0.15)",
                              border: "1px solid rgba(34,197,94,0.3)",
                              flexShrink: 0,
                            }}
                          >
                            <ArrowRight size={13} color={GREEN_LIGHT} />
                          </div>
                        </div>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.65, margin: 0 }}>
                          {cat.desc}
                        </p>

                        {/* Bottom green accent */}
                        <div style={{
                          marginTop: 20,
                          height: 2,
                          borderRadius: 2,
                          background: `linear-gradient(90deg, ${GREEN}, transparent)`,
                          opacity: 0.5,
                        }} />
                      </div>
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HISTORY — Timeline ─────────────────────────────── */}
        <section
          ref={timelineRef as React.RefObject<HTMLElement>}
          style={{ background: "#060c07", padding: "80px 16px 96px" }}
        >
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>

            {/* Header */}
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              animate={timelineInView ? "visible" : "hidden"}
              style={{ marginBottom: 64, display: "flex", flexDirection: "column", gap: 12 }}
            >
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: GREEN_LIGHT,
                fontFamily: "monospace",
              }}>
                // COMPANY_HISTORY
              </span>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                margin: 0,
                lineHeight: 1.1,
              }}>
                The V-SOL Story
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, margin: 0, lineHeight: 1.7, maxWidth: 440 }}>
                From a factory in Guangzhou to millions of fiber connections deployed worldwide.
              </p>
            </motion.div>

            {/* Timeline */}
            <div style={{ position: "relative" }}>
              {/* Vertical connecting line */}
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 1,
                background: `linear-gradient(to bottom, transparent, rgba(22,163,74,0.35) 10%, rgba(22,163,74,0.35) 90%, transparent)`,
              }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.year}
                    variants={FADE_UP}
                    custom={i * 0.1}
                    initial="hidden"
                    animate={timelineInView ? "visible" : "hidden"}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "80px 1fr",
                      gap: "0 32px",
                      paddingBottom: i < TIMELINE.length - 1 ? 40 : 0,
                      position: "relative",
                    }}
                  >
                    {/* Year column */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", paddingTop: 4, position: "relative" }}>
                      {/* Dot on the line */}
                      <div style={{
                        position: "absolute",
                        right: -16,
                        top: 8,
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: i === TIMELINE.length - 1 ? GREEN_BRIGHT : GREEN,
                        border: `2px solid ${i === TIMELINE.length - 1 ? GREEN_BRIGHT : GREEN}`,
                        boxShadow: i === TIMELINE.length - 1 ? `0 0 16px ${GREEN_BRIGHT}` : "none",
                        zIndex: 1,
                      }} />
                      <span style={{
                        fontSize: 12,
                        fontWeight: 800,
                        fontFamily: "monospace",
                        color: i === TIMELINE.length - 1 ? GREEN_BRIGHT : GREEN_LIGHT,
                        letterSpacing: "0.05em",
                      }}>
                        {item.year}
                      </span>
                    </div>

                    {/* Content */}
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      style={{
                        borderRadius: 16,
                        border: "1px solid rgba(22,163,74,0.14)",
                        background: "rgba(12,22,13,0.6)",
                        padding: "20px 24px",
                        backdropFilter: "blur(8px)",
                        transition: "border-color 0.3s, background 0.3s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.4)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(16,32,17,0.8)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(22,163,74,0.14)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(12,22,13,0.6)";
                      }}
                    >
                      <h3 style={{
                        margin: "0 0 8px",
                        fontSize: 15,
                        fontWeight: 800,
                        color: "#ffffff",
                        letterSpacing: "-0.01em",
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        margin: 0,
                        fontSize: 13,
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                      }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TRAINING CTA ───────────────────────────────────── */}
        <section style={{ background: "#080e09", padding: "80px 16px 96px", position: "relative", overflow: "hidden" }}>
          {/* Background glow */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "70vw",
            height: "70vw",
            maxWidth: 700,
            maxHeight: 700,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <span style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: GREEN_LIGHT,
              fontFamily: "monospace",
              marginBottom: 20,
            }}>
              // TRAINING &amp; CERTIFICATION
            </span>

            <h2 style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Master Fiber Optic<br />
              <span style={{
                background: `linear-gradient(135deg, ${GREEN_LIGHT}, ${GREEN_BRIGHT})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Technology
              </span>
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 15,
              lineHeight: 1.75,
              marginBottom: 40,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
            }}>
              Attend our hands-on training sessions for V-SOL products and FTTH deployment. Suitable for ISP engineers and network technicians.
            </p>

            <Link href="/training">
              <a
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "15px 36px",
                  borderRadius: 100,
                  background: `linear-gradient(135deg, ${GREEN_LIGHT} 0%, ${GREEN} 100%)`,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  boxShadow: `0 0 40px rgba(22,163,74,0.45), 0 4px 16px rgba(0,0,0,0.4)`,
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 60px rgba(34,197,94,0.7), 0 4px 24px rgba(0,0,0,0.5)`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px rgba(22,163,74,0.45), 0 4px 16px rgba(0,0,0,0.4)`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                }}
              >
                View Training Schedule
                <ArrowRight size={16} />
              </a>
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
