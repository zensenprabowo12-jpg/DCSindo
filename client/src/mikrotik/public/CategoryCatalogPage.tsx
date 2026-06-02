"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { apiPublicProducts } from "../api";
import type { MikrotikDcsProduct } from "../types";
import { ProductCard } from "./components/ProductCard";
import { CATEGORY_BACKGROUNDS } from "./CategoryBackground";

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

// ─── BACK BUTTON ─────────────────────────────────────────────
function BackButton({ href }: { href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}>
      <a
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          borderRadius: "100px",
          padding: "8px 20px",
          background: hovered ? "rgba(255,107,53,0.22)" : "rgba(255,107,53,0.09)",
          backdropFilter: "blur(12px)",
          border: hovered
            ? "1px solid rgba(255,107,53,0.60)"
            : "1px solid rgba(255,107,53,0.28)",
          color: hovered ? "#ffffff" : "#E8E4DC",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.03em",
          textDecoration: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: hovered
            ? "0 4px 24px rgba(255,107,53,0.25)"
            : "0 2px 12px rgba(255,107,53,0.08)",
        }}
      >
        ← Kembali ke Categories
      </a>
    </Link>
  );
}

// ─── KOMPONEN UTAMA ───────────────────────────────────────────
export default function MikrotikCategoryCatalogPage() {
  const [match, params] = useRoute("/mikrotik/categories/:category");
  const isDark = useDarkMode();

  const raw = String(params?.category ?? "");
  const category = useMemo(() => {
    try { return decodeURIComponent(raw); }
    catch { return raw; }
  }, [raw]);

  const backgroundImage =
    CATEGORY_BACKGROUNDS[category.toLowerCase()] ||
    "/images/category-bg/default.jpg";

  const [list, setList] = useState<MikrotikDcsProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setErr(null);
    const r = await apiPublicProducts({ category, sort: "custom" });
    if (r.ok) setList(r.data);
    else setErr(r.message);
    setLoading(false);
  }, [category]);

  useEffect(() => {
    if (!match) return;
    void load();
  }, [load, match]);

  if (!match) {
    return (
      <Layout>
        <div style={{ padding: "80px 24px", textAlign: "center", color: "rgba(232,228,220,0.5)" }}>
          Memuat…
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* ── OVERLAY ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isDark
              ? "rgba(10,10,15,0.75)"
              : "rgba(28,20,14,0.68)",
            transition: "all 0.5s ease",
          }}
        />

        {/* ── GLOW ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "60vw",
              height: "60vw",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,107,53,0.13) 0%, transparent 70%)",
              filter: "blur(80px)",
              marginTop: "-10vw",
            }}
          />
        </div>

        {/* ── GRID TEXTURE ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(255,107,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── CONTENT ── */}
        <div style={{ position: "relative", zIndex: 10 }}>

          {/* HERO */}
          <section style={{ padding: "80px 24px 40px" }}>
            <div style={{ maxWidth: 1152, margin: "0 auto" }}>

              {/* Back button */}
              <div style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
                <BackButton href="/mikrotik/categories" />
              </div>

              {/* Title */}
              <div style={{ textAlign: "center" }}>
                {/* Badge label */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    border: "1px solid rgba(255,107,53,0.35)",
                    borderRadius: "100px",
                    padding: "5px 18px",
                    background: "rgba(255,107,53,0.08)",
                    backdropFilter: "blur(8px)",
                    marginBottom: 20,
                  }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF6B35", display: "inline-block" }} />
                  <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B35", fontFamily: "monospace", fontWeight: 600 }}>
                    MikroTik Category
                  </span>
                </div>

                {/* Nama kategori */}
                <h1
                  style={{
                    fontSize: "clamp(32px, 7vw, 72px)",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                    margin: "0 0 20px",
                    background: "linear-gradient(135deg, #FF6B35 0%, #F7C59F 50%, #FF6B35 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textTransform: "uppercase",
                  }}
                >
                  {category}
                </h1>

                {/* Divider */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, maxWidth: 400, margin: "0 auto 16px" }}>
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.35))" }} />
                  <span style={{ color: "#FF6B35", fontSize: 14 }}>◈</span>
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,107,53,0.35), transparent)" }} />
                </div>

                {/* Deskripsi */}
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "rgba(232,228,220,0.55)",
                    maxWidth: 560,
                    margin: "0 auto",
                  }}
                >
                  Explore MikroTik {category} products with high performance and reliable networking solutions.
                </p>
              </div>
            </div>
          </section>

          {/* PRODUCTS */}
          <section style={{ padding: "0 24px 80px" }}>
            <div style={{ maxWidth: 1152, margin: "0 auto" }}>

              {/* Error */}
              {err && (
                <div
                  style={{
                    borderRadius: 12,
                    border: "1px solid rgba(255,107,53,0.35)",
                    background: "rgba(255,107,53,0.08)",
                    backdropFilter: "blur(8px)",
                    padding: "12px 18px",
                    marginBottom: 32,
                    fontSize: 13,
                    color: "#FF6B35",
                  }}
                >
                  {err}
                </div>
              )}

              {/* Loading */}
              {loading ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      color: "rgba(232,228,220,0.50)",
                      fontSize: 13,
                      fontFamily: "monospace",
                      letterSpacing: "0.1em",
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#FF6B35",
                        animation: "pulse 1.2s infinite",
                      }}
                    />
                    Memuat produk…
                  </div>
                </div>
              ) : list.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <p style={{ fontSize: 14, color: "rgba(232,228,220,0.45)", fontFamily: "monospace", letterSpacing: "0.08em" }}>
                    No products found in this category.
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: 24,
                  }}
                >
                  {list.map((p) => (
                    <div key={p.id}>
                      <ProductCard product={p} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </Layout>
  );
}
