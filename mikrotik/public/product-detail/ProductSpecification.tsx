"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

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

function AnimatedPanel({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>("auto");
  const isFirstRender = useRef(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isFirstRender.current) {
      // Default open — langsung tampilkan tanpa animasi
      setHeight(isOpen ? "auto" : 0);
      isFirstRender.current = false;
      return;
    }

    if (isOpen) {
      // Buka: ukur scrollHeight dulu, lalu set auto setelah animasi
      const h = el.scrollHeight;
      setHeight(h);
      const timer = setTimeout(() => setHeight("auto"), 360);
      return () => clearTimeout(timer);
    } else {
      // Tutup: set height eksplisit dulu baru ke 0
      setHeight(el.scrollHeight);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight(0));
      });
    }
  }, [isOpen]);

  return (
    <div
      style={{
        height: height,
        overflow: "hidden",
        transition: isFirstRender.current ? "none" : "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div ref={ref}>
        {children}
      </div>
    </div>
  );
}

export function ProductSpecification({
  id,
  title,
  specifications,
}: {
  id: string;
  title?: string;
  specifications: { title: string; items: { label: string; value: string }[] }[];
}) {
  const isDark = useDarkMode();
  const [isOpen, setIsOpen] = useState(true);
  const [hovered, setHovered] = useState(false);

  const sections = (specifications ?? [])
    .map((section) => ({
      title: String(section.title ?? "").trim(),
      items: (section.items ?? [])
        .map((item) => ({
          label: String(item.label ?? "").trim(),
          value: String(item.value ?? "").trim(),
        }))
        .filter((item) => item.label && item.value),
    }))
    .filter((section) => section.title && section.items.length > 0);

  if (sections.length === 0) return null;

  const flatRows: {
    sectionTitle: string;
    label: string;
    value: string;
    isFirst: boolean;
    rowSpan: number;
    globalIdx: number;
  }[] = [];

  let globalIdx = 0;
  sections.forEach((section) => {
    section.items.forEach((item, itemIdx) => {
      flatRows.push({
        sectionTitle: section.title,
        label: item.label,
        value: item.value,
        isFirst: itemIdx === 0,
        rowSpan: section.items.length,
        globalIdx: globalIdx++,
      });
    });
  });

  return (
    <section id={id} style={{ marginTop: 64, scrollMarginTop: 96, width: "100%" }}>
      <div style={{ width: "100%", maxWidth: 896, textAlign: "left" }}>

        {/* TRIGGER */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-expanded={isOpen}
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            borderRadius: 12,
            border: hovered
              ? "1px solid rgba(255,107,53,0.45)"
              : "1px solid rgba(255,107,53,0.22)",
            background: hovered
              ? isDark ? "rgba(255,107,53,0.07)" : "rgba(255,107,53,0.06)"
              : isDark ? "rgba(10,10,15,0.50)" : "rgba(28,20,14,0.40)",
            backdropFilter: "blur(12px)",
            padding: "12px 18px",
            textAlign: "left",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(255,107,53,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                border: "1px solid rgba(255,107,53,0.30)", borderRadius: "100px",
                padding: "3px 12px", background: "rgba(255,107,53,0.08)", flexShrink: 0,
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF6B35", display: "inline-block" }} />
              <span style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace", fontWeight: 600 }}>
                Specs
              </span>
            </div>

            {/* Judul */}
            <h2
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: isDark ? "#E8E4DC" : "#F0E8DF",
                margin: 0,
              }}
            >
              {title || "Specification"}
            </h2>
          </div>

          {/* Chevron */}
          <ChevronDown
            style={{
              width: 20, height: 20, flexShrink: 0,
              color: "#FF6B35",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            aria-hidden
          />
        </button>

        {/* ANIMATED CONTENT */}
        <AnimatedPanel isOpen={isOpen}>
          <div
            style={{
              marginTop: 12,
              borderRadius: 16,
              border: "1px solid rgba(255,107,53,0.15)",
              overflow: "hidden",
              background: isDark ? "rgba(10,10,15,0.40)" : "rgba(28,20,14,0.32)",
              backdropFilter: "blur(12px)",
            }}
          >
            <table
              style={{
                width: "100%",
                fontSize: 13,
                textAlign: "left",
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                {flatRows.map((row) => (
                  <tr
                    key={`${row.sectionTitle}-${row.label}-${row.globalIdx}`}
                    style={{
                      borderBottom: "1px solid rgba(255,107,53,0.08)",
                      background: row.globalIdx % 2 === 0 ? "rgba(255,107,53,0.025)" : "transparent",
                    }}
                  >
                    {row.isFirst && (
                      <td
                        rowSpan={row.rowSpan}
                        style={{
                          width: "28%", padding: "12px 16px", verticalAlign: "top",
                          fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
                          color: "#FF6B35", fontFamily: "monospace", fontWeight: 700,
                          borderRight: "1px solid rgba(255,107,53,0.08)",
                        }}
                      >
                        {row.sectionTitle}
                      </td>
                    )}

                    <td
                      style={{
                        width: "36%", padding: "12px 16px", fontWeight: 600,
                        color: isDark ? "rgba(232,228,220,0.85)" : "rgba(240,232,223,0.90)",
                        borderRight: "1px solid rgba(255,107,53,0.06)",
                      }}
                    >
                      {row.label}
                    </td>

                    <td
                      style={{
                        padding: "12px 16px",
                        color: isDark ? "rgba(232,228,220,0.55)" : "rgba(240,232,223,0.65)",
                        lineHeight: 1.6,
                      }}
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedPanel>
      </div>
    </section>
  );
}
