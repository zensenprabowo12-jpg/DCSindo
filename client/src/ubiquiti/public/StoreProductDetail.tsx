import { useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { apiUbiquitiPublicProduct } from "../api";
import type { UbiquitiDcsProductDetail, UbiquitiGalleryImage } from "../types";

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function isYouTube(url: string): boolean {
  return /youtube\.com|youtu\.be/i.test(url);
}

function getYouTubeId(url: string): string {
  const m = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : url;
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────

function Gallery({
  mainSrc,
  gallery,
  title,
}: {
  mainSrc: string;
  gallery: UbiquitiGalleryImage[];
  title: string;
}) {
  const allImages = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const src of [mainSrc, ...gallery.map((g) => g.image_path)]) {
      if (src && !seen.has(src)) {
        seen.add(src);
        result.push(src);
      }
    }
    return result;
  }, [mainSrc, gallery]);

  const [active, setActive] = useState(allImages[0] ?? "");

  useEffect(() => {
    setActive(allImages[0] ?? "");
  }, [allImages]);

  return (
    <div>
      {/* Main image */}
      <div className="rounded-2xl overflow-hidden border border-border bg-secondary/10 flex items-center justify-center aspect-[4/3]">
        {active ? (
          <img
            key={active}
            src={active}
            alt={title}
            className="w-full h-full object-contain p-6"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/images/placeholder-product.png";
            }}
          />
        ) : (
          <div className="w-16 h-16 text-muted-foreground/30">
            <svg fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M18 9.75h.008v.008H18V9.75z" />
            </svg>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {allImages.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(src)}
              className={[
                "shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all bg-secondary/10",
                active === src
                  ? "border-blue-500 shadow-[0_0_0_2px_rgba(59,130,246,0.2)]"
                  : "border-border hover:border-blue-500/50",
              ].join(" ")}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-contain p-1.5"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── PRODUCT DETAIL ───────────────────────────────────────────────────────────

type TabKey = "overview" | "technical" | "inbox" | "addons";

export default function UbiquitiDcsStoreProductDetail() {
  const [match, params] = useRoute("/ubiquiti/shop/:id");
  const id = match ? Number.parseInt(String(params?.id ?? ""), 10) : NaN;

  const [d, setD] = useState<UbiquitiDcsProductDetail | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<TabKey>("overview");

  useEffect(() => {
    if (!match || !Number.isFinite(id) || id < 1) {
      setErr("Invalid product");
      setLoading(false);
      return;
    }
    let alive = true;
    setLoading(true);
    void apiUbiquitiPublicProduct(id).then((r) => {
      if (!alive) return;
      if (r.ok) { setD(r.data); setErr(null); }
      else { setErr(r.message); setD(null); }
      setLoading(false);
    });
    return () => { alive = false; };
  }, [id, match]);

  const gallery = useMemo(
    () => [...(d?.gallery ?? [])].sort((a, b) => a.sort_order - b.sort_order),
    [d],
  );

  const overviewImages = useMemo(
    () => [...(d?.overview_images ?? [])].sort((a, b) => a.sort_order - b.sort_order),
    [d],
  );

  const overviewVideos = useMemo(
    () => [...(d?.overview_videos ?? [])].sort((a, b) => a.sort_order - b.sort_order),
    [d],
  );

  const bullets = useMemo(
    () => (d?.bullet_points ?? []).map(String).filter(Boolean),
    [d],
  );

  const techSections = useMemo(() => {
    if (!d?.technical_specs?.length) return [];
    const map = new Map<string, typeof d.technical_specs>();
    for (const spec of [...d.technical_specs].sort((a, b) => a.sort_order - b.sort_order)) {
      const key = spec.section_title || "General";
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(spec);
    }
    return Array.from(map.entries()).map(([title, items]) => ({ title, items }));
  }, [d]);

  const hasOverview = overviewImages.length > 0 || overviewVideos.length > 0;
  const hasInBox = (d?.in_the_box?.length ?? 0) > 0;
  const hasAddons = (d?.addons?.length ?? 0) > 0;

  const TABS: { key: TabKey; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "technical", label: "Technical" },
    ...(hasInBox ? [{ key: "inbox" as TabKey, label: "In The Box" }] : []),
    ...(hasAddons ? [{ key: "addons" as TabKey, label: "Add Ons" }] : []),
  ];

  function scrollToTabs(nextTab: TabKey) {
    setTab(nextTab);
    setTimeout(() => {
      document.getElementById("ubiquiti-product-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  // ── States: loading / error ──────────────────────────────────────────────────

  if (!match) {
    return (
      <Layout>
        <div className="py-20 text-center text-muted-foreground text-sm">Invalid URL.</div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="h-5 w-28 bg-secondary/40 rounded mb-10 animate-pulse" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="aspect-[4/3] rounded-2xl bg-secondary/30 animate-pulse" />
            <div className="space-y-4 pt-2">
              <div className="h-3 w-20 bg-secondary/30 rounded animate-pulse" />
              <div className="h-8 w-3/4 bg-secondary/40 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-secondary/30 rounded animate-pulse" />
              <div className="h-px bg-border my-4" />
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-3 bg-secondary/25 rounded animate-pulse" style={{ width: `${70 + i * 5}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (err || !d) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <p className="text-muted-foreground text-sm mb-6">{err ?? "Product not found."}</p>
          <Link href="/ubiquiti/shop">
            <a className="text-sm text-blue-400 hover:text-blue-300 transition-colors">← Back to catalog</a>
          </Link>
        </div>
      </Layout>
    );
  }

  // ── Main render ──────────────────────────────────────────────────────────────

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 max-w-6xl">

        {/* Back button */}
        <Link href="/ubiquiti/shop">
          <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke katalog
          </a>
        </Link>

        {/* ── Top section: Gallery + Info ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">

          <Gallery mainSrc={d.main_image} gallery={gallery} title={d.nama_produk} />

          <div className="flex flex-col">
            {/* SKU */}
            <p className="text-[10px] font-mono tracking-widest text-blue-400/70 mb-2 uppercase">
              SKU: {d.sku || "—"}
            </p>

            {/* Name */}
            <h1 className="text-3xl font-black tracking-tight text-foreground leading-tight mb-3">
              {d.nama_produk}
            </h1>

            {/* Category + NEW badge */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border">
                {d.category}
              </span>
              {d.is_new && (
                <span className="text-xs font-bold bg-blue-500/15 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full">
                  NEW
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-0.5 bg-blue-500 rounded-full" />
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {d.deskripsi}
            </p>

            {/* Bullet points */}
            {bullets.length > 0 && (
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 border border-blue-500/25 rounded-full px-3 py-1 bg-blue-500/5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-blue-400">
                    Highlights
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-auto pt-4">
              <Link href="/support">
                <a className="h-11 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors inline-flex items-center">
                  Contact Us
                </a>
              </Link>
              <button
                type="button"
                onClick={() => scrollToTabs("technical")}
                className="h-11 px-6 rounded-full border border-border hover:border-blue-500/50 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Specification
              </button>
            </div>
          </div>
        </div>

        {/* ── Tabs ────────────────────────────────────────────────────────────── */}
        <div id="ubiquiti-product-tabs" className="scroll-mt-24">
          {/* Tab bar */}
          <div className="flex gap-1 border-b border-border mb-8 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={[
                  "relative px-5 py-3 text-sm font-semibold whitespace-nowrap transition-colors",
                  tab === t.key
                    ? "text-blue-400"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {t.label}
                {tab === t.key && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* ── Tab: Overview ─────────────────────────────────────────────────── */}
          {tab === "overview" && (
            <div>
              {!hasOverview ? (
                <p className="text-muted-foreground text-sm py-8 text-center">
                  No overview media available for this product.
                </p>
              ) : (
                <>
                  {overviewImages.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {overviewImages.map((img) => (
                        <img
                          key={img.id}
                          src={img.image_path}
                          alt={d.nama_produk}
                          className="rounded-2xl w-full object-cover shadow-lg border border-border"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ))}
                    </div>
                  )}
                  {overviewVideos.length > 0 && (
                    <div className="space-y-6">
                      {overviewVideos.map((v) => (
                        <div key={v.id} className="rounded-2xl overflow-hidden border border-border bg-secondary/10">
                          {isYouTube(v.video_path) ? (
                            <iframe
                              src={`https://www.youtube.com/embed/${getYouTubeId(v.video_path)}`}
                              className="w-full aspect-video"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={d.nama_produk}
                            />
                          ) : (
                            <video
                              src={v.video_path}
                              controls
                              className="w-full aspect-video"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* ── Tab: Technical ────────────────────────────────────────────────── */}
          {tab === "technical" && (
            <div className="max-w-4xl">
              {techSections.length === 0 ? (
                <p className="text-muted-foreground text-sm py-8 text-center">
                  No specification data available for this product.
                </p>
              ) : (
                <div className="space-y-8">
                  {techSections.map(({ title, items }) => (
                    <div key={title}>
                      <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-3 px-1">
                        {title}
                      </h3>
                      <div className="rounded-xl border border-border overflow-hidden">
                        {items.map((spec, i) => (
                          <div
                            key={spec.id}
                            className={[
                              "grid grid-cols-[160px_1fr] sm:grid-cols-[200px_1fr] gap-4 px-4 py-3 text-sm",
                              i !== 0 ? "border-t border-border" : "",
                              i % 2 === 0 ? "" : "bg-secondary/5",
                            ].join(" ")}
                          >
                            <span className="text-muted-foreground font-medium">{spec.label}</span>
                            <span className="font-medium text-foreground">
                              {spec.is_check ? (
                                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                spec.value || "—"
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Tab: In The Box ───────────────────────────────────────────────── */}
          {tab === "inbox" && (
            <div>
              {!hasInBox ? (
                <p className="text-muted-foreground text-sm py-8 text-center">No data available.</p>
              ) : (
                <div
                  className={[
                    "gap-6",
                    d.in_the_box.length === 1
                      ? "flex justify-center"
                      : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                  ].join(" ")}
                >
                  {[...d.in_the_box]
                    .sort((a, b) => a.sort_order - b.sort_order)
                    .map((item) => (
                      <div
                        key={item.id}
                        className={[
                          "rounded-2xl border border-border bg-secondary/10 flex items-center justify-center",
                          d.in_the_box.length === 1 ? "p-12 max-w-lg w-full" : "aspect-square p-6",
                        ].join(" ")}
                      >
                        <img
                          src={item.image_path}
                          alt="In the box"
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}

          {/* ── Tab: Add Ons ──────────────────────────────────────────────────── */}
          {tab === "addons" && (
            <div>
              {!hasAddons ? (
                <p className="text-muted-foreground text-sm py-8 text-center">No add-ons available for this product.</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {d.addons.map((addon) => (
                    <Link key={addon.id} href={`/ubiquiti/shop/${addon.addon_product_id}`}>
                      <a className="group block rounded-2xl border border-border bg-card hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden cursor-pointer">
                        <div className="aspect-square bg-secondary/20 p-6 flex items-center justify-center">
                          <img
                            src={addon.addon_product.main_image}
                            alt={addon.addon_product.nama_produk}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </div>
                        <div className="p-4 border-t border-border">
                          <h3 className="text-sm font-bold group-hover:text-blue-400 transition-colors line-clamp-2">
                            {addon.addon_product.nama_produk}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {addon.addon_product.category}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
