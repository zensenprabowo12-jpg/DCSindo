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

// ─── HELPER ──────────────────────────────────────────────────
function getYoutubeId(urlOrId: string) {
  const raw = urlOrId.trim();
  if (!raw) return "";
  if (/^[\w-]{6,}$/.test(raw) && !raw.includes("http")) return raw;
  try {
    const u = new URL(raw);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "");
    }
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v") ?? "";
    }
  } catch {
    // ignore
  }
  return "";
}

// ─── KOMPONEN UTAMA ──────────────────────────────────────────
export function ProductVideo({
  videoUrlOrId,
  title,
  description,
}: {
  videoUrlOrId: string;
  title?: string;
  description?: string;
}) {
  const isDark = useDarkMode();
  const id = getYoutubeId(videoUrlOrId);
  if (!id) return null;

  return (
    <section style={{ marginTop: 64 }}>
      <div style={{ maxWidth: 896, margin: "0 auto" }}>

        {/* Video container */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,107,53,0.18)",
            background: isDark
              ? "rgba(10,10,15,0.50)"
              : "rgba(28,20,14,0.40)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 40px rgba(255,107,53,0.08)",
            position: "relative",
          }}
        >
          {/* Glow di belakang video */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, rgba(255,107,53,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* iframe */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              background: "#000",
              zIndex: 1,
            }}
          >
            <iframe
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              src={`https://www.youtube.com/embed/${id}?rel=0`}
              title={title || "Product Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Title + Description */}
        {(title || description) && (
          <div style={{ marginTop: 24, textAlign: "center" }}>

            {title && (
              <div style={{ marginBottom: description ? 12 : 0 }}>
                {/* Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    border: "1px solid rgba(255,107,53,0.30)",
                    borderRadius: "100px",
                    padding: "4px 14px",
                    background: "rgba(255,107,53,0.07)",
                    marginBottom: 10,
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
                    Video
                  </span>
                </div>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(16px, 2.5vw, 22px)",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    color: isDark ? "#E8E4DC" : "#F0E8DF",
                  }}
                >
                  {title}
                </h2>
              </div>
            )}

            {description && (
              <>
                {/* Divider */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    maxWidth: 300,
                    margin: "12px auto",
                  }}
                >
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.30))" }} />
                  <span style={{ color: "#FF6B35", fontSize: 12 }}>◈</span>
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.30), transparent)" }} />
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: isDark
                      ? "rgba(232,228,220,0.55)"
                      : "rgba(240,232,223,0.65)",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {description}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
