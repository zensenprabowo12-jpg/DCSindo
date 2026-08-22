import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────

function Lightbox({ images, activeIndex, onClose, onPrev, onNext }: {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < images.length - 1;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(5,5,8,0.92)", backdropFilter: "blur(16px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "ubi-fadeIn 0.2s ease",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: 20, right: 20,
          width: 40, height: 40, borderRadius: "50%",
          border: "1px solid rgba(0,130,255,0.35)", background: "rgba(0,130,255,0.08)",
          color: "#fff", fontSize: 18, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s ease", zIndex: 1,
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,130,255,0.25)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,130,255,0.08)"; }}
      >
        ✕
      </button>

      {images.length > 1 && (
        <div style={{ position: "absolute", top: 24, left: "50%", transform: "translateX(-50%)", fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "monospace", letterSpacing: "0.1em" }}>
          {activeIndex + 1} / {images.length}
        </div>
      )}

      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          style={{
            position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid rgba(0,130,255,0.35)", background: "rgba(0,130,255,0.08)",
            color: "#fff", fontSize: 18, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,130,255,0.25)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,130,255,0.08)"; }}
        >←</button>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "85vw", maxHeight: "85vh",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "ubi-scaleIn 0.2s ease",
        }}
      >
        <img
          src={images[activeIndex]}
          alt=""
          style={{
            maxWidth: "85vw", maxHeight: "85vh", objectFit: "contain",
            borderRadius: 12, boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            filter: "drop-shadow(0 8px 32px rgba(0,130,255,0.15))", userSelect: "none",
          }}
          draggable={false}
        />
      </div>

      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          style={{
            position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid rgba(0,130,255,0.35)", background: "rgba(0,130,255,0.08)",
            color: "#fff", fontSize: 18, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,130,255,0.25)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,130,255,0.08)"; }}
        >→</button>
      )}

      {images.length > 1 && (
        <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
          {images.map((_, i) => (
            <span key={i} style={{ width: i === activeIndex ? 24 : 8, height: 8, borderRadius: 100, display: "block", transition: "all 0.3s ease", background: i === activeIndex ? "#0082FF" : "rgba(0,130,255,0.30)" }} />
          ))}
        </div>
      )}

      <style>{`
        @keyframes ubi-fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ubi-scaleIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hoverMain, setHoverMain] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    setActive(allImages[0] ?? "");
  }, [allImages]);

  const activeIndex = allImages.indexOf(active);
  const currentIndex = activeIndex >= 0 ? activeIndex : 0;

  const goPrev = useCallback(() => {
    if (currentIndex > 0) setActive(allImages[currentIndex - 1]);
  }, [currentIndex, allImages]);

  const goNext = useCallback(() => {
    if (currentIndex < allImages.length - 1) setActive(allImages[currentIndex + 1]);
  }, [currentIndex, allImages]);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true;
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (isDragging.current) {
      if (diff < -40) goNext();
      else if (diff > 40) goPrev();
    } else {
      setLightboxOpen(true);
    }
    dragStartX.current = null;
    isDragging.current = false;
  };

  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff < -40) goNext();
    else if (diff > 40) goPrev();
    touchStartX.current = null;
  };

  return (
    <div>
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-secondary/10 flex items-center justify-center aspect-[4/3]">
        {/* Navigation arrows */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-blue-500/40 transition-all text-sm"
          >←</button>
        )}
        {currentIndex < allImages.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-blue-500/40 transition-all text-sm"
          >→</button>
        )}
        {/* Zoom hint */}
        <div className={`absolute top-3 right-3 z-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg px-2 py-1 text-[10px] text-white/60 font-mono tracking-wider transition-opacity duration-300 pointer-events-none ${hoverMain ? "opacity-100" : "opacity-0"}`}>
          click to enlarge
        </div>
        {active ? (
          <div
            className="w-full h-full cursor-zoom-in select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { dragStartX.current = null; isDragging.current = false; setHoverMain(false); }}
            onMouseEnter={() => setHoverMain(true)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              key={active}
              src={active}
              alt={title}
              className={`w-full h-full object-contain p-6 transition-transform duration-300 pointer-events-none ${hoverMain ? "scale-[1.03]" : "scale-100"}`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/images/placeholder-product.png";
              }}
            />
          </div>
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
                loading="lazy"
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

      {lightboxOpen && (
        <Lightbox
          images={allImages}
          activeIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={goPrev}
          onNext={goNext}
        />
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

  useEffect(() => {
    if (d) document.title = `${d.nama_produk} — Ubiquiti | DCS`;
    return () => { document.title = "DCS - Professional Network Solutions"; };
  }, [d]);

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

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 flex-wrap">
          <Link href="/"><a className="hover:text-blue-500 transition-colors">Home</a></Link>
          <span>/</span>
          <Link href="/ubiquiti"><a className="hover:text-blue-500 transition-colors">Ubiquiti</a></Link>
          <span>/</span>
          <Link href="/ubiquiti/shop"><a className="hover:text-blue-500 transition-colors">Shop</a></Link>
          {d && (
            <>
              <span>/</span>
              <span className="text-foreground font-medium truncate max-w-[200px]">{d.nama_produk}</span>
            </>
          )}
        </nav>

        {/* Back button */}
        <Link href="/ubiquiti/shop">
          <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to catalog
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
                          loading="lazy"
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
                          loading="lazy"
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
                            loading="lazy"
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
