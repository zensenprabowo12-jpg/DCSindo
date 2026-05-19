"use client";

import { useState, useEffect } from "react";

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

// ─── LINK BUTTON ─────────────────────────────────────────────
function SolidLinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "100px",
        padding: "0 28px",
        height: "46px",
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
      {children}
    </a>
  );
}

// ─── GHOST BUTTON ─────────────────────────────────────────────
function GhostButton({
  children,
  isDark,
  onClick,
}: {
  children: React.ReactNode;
  isDark: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "100px",
        padding: "0 28px",
        height: "46px",
        display: "inline-flex",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: 500,
        letterSpacing: "0.03em",
        cursor: "pointer",
        transition: "all 0.3s ease",
        background: hovered ? "rgba(255,107,53,0.22)" : "rgba(255,107,53,0.09)",
        backdropFilter: "blur(12px)",
        border: hovered
          ? "1px solid rgba(255,107,53,0.60)"
          : "1px solid rgba(255,107,53,0.28)",
        color: hovered ? "#ffffff" : isDark ? "#E8E4DC" : "#F0E8DF",
        boxShadow: hovered ? "0 4px 24px rgba(255,107,53,0.20)" : "none",
      }}
    >
      {children}
    </button>
  );
}

// ─── KOMPONEN UTAMA ───────────────────────────────────────────
export function ProductInfo({
  name,
  sku,
  description,
  bullets,
  onScrollToSpecs,
}: {
  name: string;
  sku: string;
  description: string;
  bullets: string[];
  onScrollToSpecs: () => void;
}) {
  const isDark = useDarkMode();

  return (
    <div>
      {/* SKU */}
      <p
        style={{
          fontSize: 10,
          fontFamily: "monospace",
          letterSpacing: "0.12em",
          color: "rgba(255,107,53,0.65)",
          marginBottom: 6,
        }}
      >
        SKU: {sku || "-"}
      </p>

      {/* Nama produk */}
      <h1
        style={{
          fontSize: "clamp(20px, 3vw, 30px)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          color: isDark ? "#E8E4DC" : "#F0E8DF",
          margin: 0,
        }}
      >
        {name}
      </h1>

      {/* Divider tipis */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          margin: "16px 0",
        }}
      >
        <div
          style={{
            width: 28,
            height: 2,
            background: "#FF6B35",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            flex: 1,
            height: 1,
            background: "rgba(255,107,53,0.12)",
          }}
        />
      </div>

      {/* Deskripsi */}
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.8,
          color: isDark ? "rgba(232,228,220,0.60)" : "rgba(240,232,223,0.70)",
          whiteSpace: "pre-wrap",
          margin: 0,
        }}
      >
        {description}
      </p>

      {/* Highlights */}
      {bullets.length > 0 && (
        <div style={{ marginTop: 24 }}>
          {/* Badge Highlights */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(255,107,53,0.30)",
              borderRadius: "100px",
              padding: "4px 14px",
              background: "rgba(255,107,53,0.07)",
              marginBottom: 14,
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
              Highlights
            </span>
          </div>

          {/* Bullet list */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {bullets.map((b, i) => (
              <li
                key={i}
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <span
                  style={{
                    marginTop: 6,
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
                      ? "rgba(232,228,220,0.65)"
                      : "rgba(240,232,223,0.75)",
                  }}
                >
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons */}
      <div
        style={{
          marginTop: 32,
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <SolidLinkButton href="/support/mikrotik">
          Contact Us
        </SolidLinkButton>
        <GhostButton isDark={isDark} onClick={onScrollToSpecs}>
          Specification
        </GhostButton>
      </div>
    </div>
  );
}
