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
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  solid?: boolean;
  isDark: boolean;
}

function LinkButton({ href, children, solid = false, isDark }: LinkButtonProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  const base: React.CSSProperties = {
    borderRadius: "100px",
    padding: "0 28px",
    height: "46px",
    display: "inline-flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: solid ? 600 : 500,
    letterSpacing: "0.03em",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const solidStyle: React.CSSProperties = {
    background: hovered ? "rgba(255,107,53,1)" : "rgba(255,107,53,0.85)",
    border: "1px solid rgba(255,107,53,0.9)",
    color: "#ffffff",
    boxShadow: hovered
      ? "0 4px 30px rgba(255,107,53,0.50)"
      : "0 4px 20px rgba(255,107,53,0.30)",
  };

  const ghostStyle: React.CSSProperties = {
    background: hovered ? "rgba(255,107,53,0.22)" : "rgba(255,107,53,0.09)",
    backdropFilter: "blur(12px)",
    border: hovered
      ? "1px solid rgba(255,107,53,0.60)"
      : "1px solid rgba(255,107,53,0.28)",
    color: hovered ? "#ffffff" : isDark ? "#E8E4DC" : "#F0E8DF",
  };

  return (
    <a
      href={href}
      style={{ ...base, ...(solid ? solidStyle : ghostStyle) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

interface SelectorButtonProps {
  label: string;
  isActive: boolean;
  isDark: boolean;
  onClick: () => void;
}

function SelectorButton({ label, isActive, isDark, onClick }: SelectorButtonProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  const style: React.CSSProperties = {
    height: "36px",
    padding: "0 20px",
    borderRadius: "100px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: isActive
      ? "1px solid rgba(255,107,53,0.8)"
      : hovered
      ? "1px solid rgba(255,107,53,0.40)"
      : "1px solid rgba(255,107,53,0.20)",
    background: isActive
      ? "rgba(255,107,53,0.85)"
      : hovered
      ? "rgba(255,107,53,0.15)"
      : "rgba(255,107,53,0.07)",
    color: isActive
      ? "#ffffff"
      : isDark
      ? "rgba(232,228,220,0.6)"
      : "rgba(240,232,223,0.7)",
    boxShadow: isActive ? "0 4px 16px rgba(255,107,53,0.30)" : "none",
  };

  return (
    <button
      type="button"
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </button>
  );
}

export default function ProductShowcase({
  products,
}: {
  products: MikrotikLandingProduct[];
}) {
  const [activeKey, setActiveKey] = useState<MikrotikLandingProduct["key"]>("A");
  const active = useMemo(
    () => products.find((p) => p.key === activeKey) ?? products[0],
    [activeKey, products]
  );
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
      }}
    >
      {/* OVERLAY */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isDark ? "rgba(10,10,15,0.65)" : "rgba(28,20,14,0.55)",
        }}
      />

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          style={{
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(255,107,53,0.10) 0%, transparent 70%)",
            filter: "blur(90px)",
            transition: "all 0.5s ease",
          }}
        />
      </div>

      {/* GRID */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-16 md:py-20 w-full relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
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
            Product Highlight
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(26px, 4vw, 46px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: isDark ? "#E8E4DC" : "#F0E8DF",
            }}
          >
            Pilihan Produk Unggulan
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              maxWidth: 400,
              margin: "20px auto 0",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.35))" }} />
            <span style={{ color: "#FF6B35", fontSize: 14 }}>◈</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.35), transparent)" }} />
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey + "-left"}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {/* Badge tagline */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid rgba(255,107,53,0.35)",
                  borderRadius: "100px",
                  padding: "5px 16px",
                  background: "rgba(255,107,53,0.08)",
                  backdropFilter: "blur(8px)",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#FF6B35",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#FF6B35",
                    fontFamily: "monospace",
                    fontWeight: 600,
                  }}
                >
                  {active.tagline}
                </span>
              </div>

              {/* Nama */}
              <h3
                style={{
                  fontSize: "clamp(24px, 4vw, 40px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  margin: "0 0 24px",
                  color: isDark ? "#E8E4DC" : "#F0E8DF",
                  lineHeight: 1.1,
                }}
              >
                {active.name}
              </h3>

              {/* Bullets */}
              <ul
                style={{
                  margin: "0 0 20px",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {active.bullets.map((b, i) => (
                  <li
                    key={`${active.key}-${i}`}
                    style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        marginTop: 7,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#FF6B35",
                        flexShrink: 0,
                        boxShadow: "0 0 6px rgba(255,107,53,0.5)",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: isDark
                          ? "rgba(232,228,220,0.70)"
                          : "rgba(240,232,223,0.80)",
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Deskripsi */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: isDark
                    ? "rgba(232,228,220,0.55)"
                    : "rgba(240,232,223,0.65)",
                  margin: "0 0 32px",
                }}
              >
                {active.description}
              </p>

              {/* Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <LinkButton href={active.productDetailHref} solid isDark={isDark}>
                  Product Detail
                </LinkButton>
                <LinkButton href={active.contactHref} isDark={isDark}>
                  Contact Us
                </LinkButton>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT */}
          <div className="flex flex-col items-center">
            <div
              className="w-full rounded-3xl p-8 relative overflow-hidden"
              style={{
                border: "1px solid rgba(255,107,53,0.18)",
                background: isDark ? "rgba(10,10,15,0.45)" : "rgba(28,20,14,0.38)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 40px rgba(255,107,53,0.08)",
              }}
            >
              {/* Huruf dekoratif */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "clamp(120px, 18vw, 200px)",
                  fontWeight: 900,
                  color: "rgba(255,107,53,0.06)",
                  fontFamily: "Georgia, serif",
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                  zIndex: 0,
                  transition: "all 0.4s ease",
                }}
              >
                {activeKey}
              </div>

              {/* Gambar */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeKey + "-img"}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.03, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="aspect-[4/3] w-full rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    background: "rgba(255,107,53,0.04)",
                    border: "1px solid rgba(255,107,53,0.12)",
                  }}
                >
                  <img
                    src={active.imageSrc}
                    alt={active.name}
                    className="w-full h-full object-contain"
                    style={{
                      filter: "drop-shadow(0 8px 24px rgba(255,107,53,0.20))",
                      padding: "12px",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Selector */}
              <div
                className="mt-6 flex items-center justify-center gap-2"
                style={{ position: "relative", zIndex: 1 }}
              >
                {products.map((p) => (
                  <SelectorButton
                    key={p.key}
                    label={`Product ${p.key}`}
                    isActive={p.key === activeKey}
                    isDark={isDark}
                    onClick={() => setActiveKey(p.key)}
                  />
                ))}
              </div>
            </div>

            <p
              style={{
                marginTop: 16,
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "rgba(232,228,220,0.35)",
                fontFamily: "monospace",
                textAlign: "center",
              }}
            >
              Klik selector Product A / B / C untuk mengganti konten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
