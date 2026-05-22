"use client";

import { useState } from "react";
import { Link } from "wouter";
import type { MikrotikDcsProduct } from "@mikrotik/types";

function splitBullets(xs: string[]) {
  const mid = Math.ceil(xs.length / 2);
  return [xs.slice(0, mid), xs.slice(mid)] as const;
}

export function ProductCard({ product }: { product: MikrotikDcsProduct }) {
  const [hovered, setHovered] = useState(false);

  const bullets = (product.bullet_points ?? [])
    .map((x) => (x ?? "").trim())
    .filter(Boolean);
  const [b1, b2] = splitBullets(bullets);

  return (
    <Link href={`/mikrotik/shop/${product.id}`}>
      <a
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "block",
          height: "100%",
          textDecoration: "none",
          borderRadius: "16px",
          overflow: "hidden",
          border: hovered
            ? "1px solid rgba(255,107,53,0.45)"
            : "1px solid rgba(255,107,53,0.15)",
          background: hovered
            ? "rgba(255,107,53,0.05)"
            : "rgba(255,255,255,0.02)",
          backdropFilter: "blur(12px)",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 8px 32px rgba(255,107,53,0.12)"
            : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>

          {/* ── GARIS ATAS SAAT HOVER ── */}
          <div
            style={{
              height: 2,
              background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.6), transparent)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s ease",
              flexShrink: 0,
            }}
          />

          {/* ── GAMBAR — tinggi tetap pakai aspect-ratio ── */}
          <div
            style={{
              aspectRatio: "4/3",
              background: hovered
                ? "rgba(255,107,53,0.07)"
                : "rgba(255,107,53,0.03)",
              borderBottom: "1px solid rgba(255,107,53,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              flexShrink: 0,
              overflow: "hidden",
              position: "relative",
              transition: "background 0.3s ease",
            }}
          >
            {/* Glow di belakang gambar */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at center, rgba(255,107,53,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <img
              src={product.main_image || "/images/placeholder-product.png"}
              alt={product.nama_produk}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.4s ease",
                position: "relative",
                zIndex: 1,
              }}
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* ── KONTEN ── */}
          <div
            style={{
              padding: "14px 16px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* SKU — tinggi tetap 16px */}
            <div style={{ height: 16, marginBottom: 4, flexShrink: 0 }}>
              <p
                style={{
                  fontSize: 9,
                  fontFamily: "monospace",
                  letterSpacing: "0.1em",
                  color: "rgba(255,107,53,0.6)",
                  margin: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                SKU: {product.sku || "-"}
              </p>
            </div>

            {/* NAMA PRODUK — tinggi tetap 2 baris */}
            <div style={{ height: 36, marginBottom: 8, flexShrink: 0, overflow: "hidden" }}>
              <h2
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#E8E4DC",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  textTransform: "uppercase",
                  margin: 0,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {product.nama_produk}
              </h2>
            </div>

            {/* DESKRIPSI — tinggi tetap 2 baris */}
            <div style={{ height: 32, marginBottom: 12, flexShrink: 0, overflow: "hidden" }}>
              <p
                style={{
                  fontSize: 10,
                  color: "rgba(232,228,220,0.45)",
                  lineHeight: 1.55,
                  margin: 0,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {product.deskripsi}
              </p>
            </div>

            {/* BULLETS — flex-1 biar sisa ruang diisi, tinggi konsisten */}
            <div
              style={{
                flex: 1,
                borderTop: "1px solid rgba(255,107,53,0.08)",
                paddingTop: 10,
                minHeight: 80,
              }}
            >
              {bullets.length > 0 ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0 12px",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  {/* Kolom kiri */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {b1.map((b, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: 6,
                          alignItems: "flex-start",
                          marginBottom: 4,
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "#FF6B35",
                            flexShrink: 0,
                            marginTop: 4,
                            boxShadow: "0 0 4px rgba(255,107,53,0.5)",
                          }}
                        />
                        <span
                          style={{
                            fontSize: 9,
                            lineHeight: 1.4,
                            color: "rgba(232,228,220,0.50)",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Kolom kanan */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {b2.map((b, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: 6,
                          alignItems: "flex-start",
                          marginBottom: 4,
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "#FF6B35",
                            flexShrink: 0,
                            marginTop: 4,
                            boxShadow: "0 0 4px rgba(255,107,53,0.5)",
                          }}
                        />
                        <span
                          style={{
                            fontSize: 9,
                            lineHeight: 1.4,
                            color: "rgba(232,228,220,0.50)",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div style={{ height: 80 }} />
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
