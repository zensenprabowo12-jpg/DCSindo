"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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

  // Flatten rows untuk alternating warna
  const flatRows: { sectionTitle: string; label: string; value: string; isFirst: boolean; rowSpan: number; globalIdx: number }[] = [];
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
    <section
      id={id}
      style={{ marginTop: 64, scrollMarginTop: 96, width: "100%" }}
    >
      <div style={{ width: "100%", maxWidth: 896, textAlign: "left" }}>
        <Collapsible defaultOpen>

          {/* ── TRIGGER ── */}
          <CollapsibleTrigger
            type="button"
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              borderRadius: 12,
              border: "1px solid rgba(255,107,53,0.22)",
              background: isDark
                ? "rgba(10,10,15,0.50)"
                : "rgba(28,20,14,0.40)",
              backdropFilter: "blur(12px)",
              padding: "12px 18px",
              textAlign: "left",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(255,107,53,0.06)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,107,53,0.45)";
              (e.currentTarget as HTMLButtonElement).style.background = isDark
                ? "rgba(255,107,53,0.07)"
                : "rgba(255,107,53,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,107,53,0.22)";
              (e.currentTarget as HTMLButtonElement).style.background = isDark
                ? "rgba(10,10,15,0.50)"
                : "rgba(28,20,14,0.40)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Badge kecil */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  border: "1px solid rgba(255,107,53,0.30)",
                  borderRadius: "100px",
                  padding: "3px 12px",
                  background: "rgba(255,107,53,0.08)",
                  flexShrink: 0,
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
                    fontSize: 9,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#FF6B35",
                    fontFamily: "monospace",
                    fontWeight: 600,
                  }}
                >
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
                width: 20,
                height: 20,
                flexShrink: 0,
                color: "#FF6B35",
                transition: "transform 0.2s ease",
              }}
              aria-hidden
            />
          </CollapsibleTrigger>

          {/* ── CONTENT ── */}
          <CollapsibleContent style={{ overflow: "hidden" }}>
            <div
              style={{
                marginTop: 12,
                borderRadius: 16,
                border: "1px solid rgba(255,107,53,0.15)",
                overflow: "hidden",
                background: isDark
                  ? "rgba(10,10,15,0.40)"
                  : "rgba(28,20,14,0.32)",
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
                        background: row.globalIdx % 2 === 0
                          ? "rgba(255,107,53,0.025)"
                          : "transparent",
                      }}
                    >
                      {/* Kolom section title */}
                      {row.isFirst && (
                        <td
                          rowSpan={row.rowSpan}
                          style={{
                            width: "28%",
                            padding: "12px 16px",
                            verticalAlign: "top",
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            color: "#FF6B35",
                            fontFamily: "monospace",
                            fontWeight: 700,
                            borderRight: "1px solid rgba(255,107,53,0.08)",
                          }}
                        >
                          {row.sectionTitle}
                        </td>
                      )}

                      {/* Kolom label */}
                      <td
                        style={{
                          width: "36%",
                          padding: "12px 16px",
                          fontWeight: 600,
                          color: isDark ? "rgba(232,228,220,0.85)" : "rgba(240,232,223,0.90)",
                          borderRight: "1px solid rgba(255,107,53,0.06)",
                        }}
                      >
                        {row.label}
                      </td>

                      {/* Kolom value */}
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
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
