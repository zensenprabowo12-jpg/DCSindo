"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

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

// ─── KOMPONEN UTAMA ───────────────────────────────────────────
export function ProductTechnicalAccordion({
  items,
}: {
  items: { id: number; title: string; content: string; sort_order: number }[];
}) {
  const isDark = useDarkMode();

  const rows = (items ?? [])
    .map((x) => ({
      id: x.id,
      title: String(x.title ?? "").trim(),
      content: String(x.content ?? "").trim(),
      sort_order: x.sort_order ?? 0,
    }))
    .filter((x) => x.title && x.content)
    .sort((a, b) => a.sort_order - b.sort_order || a.id - b.id);

  const [openId, setOpenId] = useState<number | null>(rows[0]?.id ?? null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  if (!rows.length) return null;

  return (
    <section style={{ marginTop: 56 }}>
      <div style={{ maxWidth: 896, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FF6B35",
              fontFamily: "monospace",
            }}
          >
            Info Teknis
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(18px, 3vw, 24px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: isDark ? "#E8E4DC" : "#F0E8DF",
            }}
          >
            Technical
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              maxWidth: 300,
              margin: "14px auto 0",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.35))" }} />
            <span style={{ color: "#FF6B35", fontSize: 12 }}>◈</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.35), transparent)" }} />
          </div>
        </div>

        {/* Accordion items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {rows.map((item) => {
            const isOpen = openId === item.id;
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                style={{
                  borderRadius: 12,
                  border: isOpen
                    ? "1px solid rgba(255,107,53,0.40)"
                    : isHovered
                    ? "1px solid rgba(255,107,53,0.28)"
                    : "1px solid rgba(255,107,53,0.14)",
                  background: isOpen
                    ? isDark
                      ? "rgba(255,107,53,0.06)"
                      : "rgba(255,107,53,0.04)"
                    : isDark
                    ? "rgba(10,10,15,0.40)"
                    : "rgba(28,20,14,0.32)",
                  backdropFilter: "blur(12px)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  boxShadow: isOpen
                    ? "0 4px 20px rgba(255,107,53,0.08)"
                    : "none",
                }}
              >
                {/* Trigger */}
                <button
                  type="button"
                  onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    padding: "14px 18px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    gap: 12,
                  }}
                >
                  {/* Dot + title */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: isOpen ? "#FF6B35" : "rgba(255,107,53,0.35)",
                        flexShrink: 0,
                        boxShadow: isOpen ? "0 0 8px rgba(255,107,53,0.7)" : "none",
                        transition: "all 0.3s ease",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: isOpen ? 700 : 500,
                        color: isOpen
                          ? "#FF6B35"
                          : isDark
                          ? "rgba(232,228,220,0.85)"
                          : "rgba(240,232,223,0.90)",
                        transition: "all 0.3s ease",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    style={{
                      width: 16,
                      height: 16,
                      flexShrink: 0,
                      color: isOpen ? "#FF6B35" : "rgba(255,107,53,0.45)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease, color 0.3s ease",
                    }}
                    aria-hidden
                  />
                </button>

                {/* Content */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 18px 16px 35px",
                      borderTop: "1px solid rgba(255,107,53,0.10)",
                      marginTop: 0,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.8,
                        color: isDark
                          ? "rgba(232,228,220,0.55)"
                          : "rgba(240,232,223,0.65)",
                        whiteSpace: "pre-line",
                        margin: "12px 0 0",
                      }}
                    >
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
