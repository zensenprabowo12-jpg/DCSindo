"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { apiPublicProduct } from "../api";
import type { MikrotikDcsProductDetail } from "../types";
import { ProductGallery } from "./product-detail/ProductGallery";
import { ProductInfo } from "./product-detail/ProductInfo";
import { ProductVideo } from "./product-detail/ProductVideo";
import { ProductSpecification } from "./product-detail/ProductSpecification";
import { ProductTechnicalAccordion } from "./product-detail/ProductTechnicalAccordion";
import { MIKROTIK_PRODUCT_EXTRAS } from "./productExtras";
import { CATEGORY_BACKGROUNDS } from "./CategoryBackground";

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

function BackButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
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
          background: hovered
            ? "rgba(255,107,53,0.22)"
            : "rgba(255,107,53,0.09)",
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
        {label}
      </a>
    </Link>
  );
}

export default function MikrotikDcsStoreProductDetail() {
  const [match, params] = useRoute("/mikrotik/shop/:id");
  const isDark = useDarkMode();

  const id = match
    ? Number.parseInt(String(params.id ?? ""), 10)
    : Number.NaN;

  const [d, setD] = useState<MikrotikDcsProductDetail | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>("");

  const extras = useMemo(() => {
    return Number.isFinite(id)
      ? MIKROTIK_PRODUCT_EXTRAS[id]
      : undefined;
  }, [id]);

  const specId = "mikrotik-product-spec";

  useEffect(() => {
    if (!match) {
      setLoading(false);
      setErr(null);
      return;
    }

    if (Number.isNaN(id) || id < 1) {
      setErr("Produk tidak valid");
      setLoading(false);
      return;
    }

    let c = true;

    void (async () => {
      setLoading(true);
      setErr(null);

      const r = await apiPublicProduct(id);

      if (!c) return;

      if (r.ok) {
        setD(r.data);
        setErr(null);
      } else {
        setErr(r.message);
        setD(null);
      }

      setLoading(false);
    })();

    return () => {
      c = false;
    };
  }, [id, match]);

  const categoryName = (
    (d as any)?.nama_kategori ||
    (d as any)?.category ||
    ""
  )
    .toString()
    .toLowerCase();

  const backgroundImage =
    CATEGORY_BACKGROUNDS[categoryName] ||
    "/images/category-bg/default.jpg";

  const gallery = useMemo(() => {
    if (!d) return [];

    return (d.gallery ?? [])
      .slice()
      .sort(
        (a, b) =>
          (a.sort_order ?? 0) - (b.sort_order ?? 0),
      )
      .map((g) => ({
        id: g.id,
        src: g.image_path,
      }));
  }, [d]);

  const bulletPoints = useMemo(
    () =>
      d
        ? (d.bullet_points ?? [])
            .map(String)
            .filter(Boolean)
        : [],
    [d],
  );

  const videoUrlOrId = useMemo(
    () =>
      d
        ? (d.video_url ?? "") ||
          extras?.videoUrl ||
          ""
        : "",
    [d, extras?.videoUrl],
  );

  const videoTitle = useMemo(
    () =>
      d
        ? (d.video_title ?? undefined) ||
          extras?.videoTitle
        : undefined,
    [d, extras?.videoTitle],
  );

  const videoDescription = useMemo(
    () =>
      d
        ? (d.video_description ?? undefined) ||
          extras?.videoDescription
        : undefined,
    [d, extras?.videoDescription],
  );

  const specifications = useMemo(() => {
    if (!d)
      return [] as {
        title: string;
        items: { label: string; value: string }[];
      }[];

    if (d.specifications && d.specifications.length)
      return d.specifications;

    if (extras?.specifications)
      return [extras.specifications];

    return [];
  }, [d, extras?.specifications]);

  useEffect(() => {
    if (!d) {
      setActiveImage("");
      return;
    }

    setActiveImage(
      d.main_image || gallery[0]?.src || "",
    );
  }, [d, gallery]);

  const scrollToSpecs = useCallback(() => {
    const el = document.getElementById(specId);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [specId]);

  const backHref = categoryName
    ? `/mikrotik/categories/${encodeURIComponent(
        categoryName,
      )}`
    : "/mikrotik/categories";

  if (!match) {
    return (
      <Layout>
        <div
          style={{
            padding: "80px 24px",
            textAlign: "center",
            color: "rgba(255,107,53,0.8)",
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          URL tidak valid
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div
          style={{
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
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

            Memuat…
          </div>

          <style>{`
            @keyframes pulse {
              0%,100%{
                opacity:1;
                transform:scale(1)
              }
              50%{
                opacity:0.4;
                transform:scale(0.8)
              }
            }
          `}</style>
        </div>
      </Layout>
    );
  }

  if (err || !d) {
    return (
      <Layout>
        <div
          style={{
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(255,107,53,0.85)",
              fontSize: 14,
              fontFamily: "monospace",
              marginBottom: 20,
            }}
          >
            {err ?? "Tidak ditemukan"}
          </p>

          <BackButton
            href="/mikrotik/categories"
            label="← Kembali ke Categories"
          />
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
          overflow: "hidden",
          background: "#0B0B0F",
        }}
      >
        {/* BATIK BACKGROUND */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            opacity: 0.42,
            filter:
              "brightness(1.1) contrast(1.2) saturate(1.15)",
            transform: "scale(1.03)",
          }}
        />

        {/* SOFT LIGHT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
            pointerEvents: "none",
          }}
        />

        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isDark
              ? "linear-gradient(to bottom, rgba(8,8,12,0.68), rgba(10,10,15,0.74))"
              : "linear-gradient(to bottom, rgba(25,18,12,0.55), rgba(20,15,10,0.62))",
            transition: "all 0.5s ease",
          }}
        />

        {/* ORANGE GLOW */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "55vw",
              height: "55vw",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
              filter: "blur(90px)",
              marginTop: "-5vw",
            }}
          />
        </div>

        {/* GRID TEXTURE */}
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

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "48px 24px 80px",
            }}
          >
            {/* BACK BUTTON */}
            <div style={{ marginBottom: 28 }}>
              <BackButton
                href={backHref}
                label="← Kembali ke Categories"
              />
            </div>

            <div
              style={{
                maxWidth: 1152,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 40,
                  alignItems: "start",
                }}
              >
                <ProductGallery
                  title={d.nama_produk}
                  mainSrc={d.main_image}
                  gallery={gallery}
                  activeSrc={
                    activeImage || d.main_image
                  }
                  onSelect={setActiveImage}
                />

                <ProductInfo
                  name={d.nama_produk}
                  sku={d.sku}
                  description={d.deskripsi}
                  bullets={bulletPoints}
                  onScrollToSpecs={scrollToSpecs}
                />
              </div>

              <ProductVideo
                videoUrlOrId={videoUrlOrId}
                title={
                  videoTitle || "Judul Video Product"
                }
                description={videoDescription || ""}
              />

              <ProductTechnicalAccordion
                items={d.technical_items ?? []}
              />

              <ProductSpecification
                id={specId}
                title="Specification"
                specifications={specifications}
              />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%,100%{
              opacity:1;
              transform:scale(1)
            }
            50%{
              opacity:0.4;
              transform:scale(0.8)
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}