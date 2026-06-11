import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { apiVsolPublicProduct } from "../api";
import type { VsolDcsProductDetail } from "../types";

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
        background: "rgba(2,20,8,0.93)", backdropFilter: "blur(16px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "vsol-fadeIn 0.2s ease",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: 20, right: 20,
          width: 40, height: 40, borderRadius: "50%",
          border: "1px solid rgba(22,163,74,0.4)", background: "rgba(22,163,74,0.08)",
          color: "#fff", fontSize: 18, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s ease", zIndex: 1,
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(22,163,74,0.25)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(22,163,74,0.08)"; }}
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
            border: "1px solid rgba(22,163,74,0.4)", background: "rgba(22,163,74,0.08)",
            color: "#fff", fontSize: 18, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(22,163,74,0.25)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(22,163,74,0.08)"; }}
        >←</button>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "85vw", maxHeight: "85vh",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "vsol-scaleIn 0.2s ease",
        }}
      >
        <img
          src={images[activeIndex]}
          alt=""
          style={{
            maxWidth: "85vw", maxHeight: "85vh", objectFit: "contain",
            borderRadius: 12, boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
            filter: "drop-shadow(0 8px 32px rgba(22,163,74,0.15))", userSelect: "none",
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
            border: "1px solid rgba(22,163,74,0.4)", background: "rgba(22,163,74,0.08)",
            color: "#fff", fontSize: 18, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(22,163,74,0.25)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(22,163,74,0.08)"; }}
        >→</button>
      )}

      {images.length > 1 && (
        <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
          {images.map((_, i) => (
            <span key={i} style={{ width: i === activeIndex ? 24 : 8, height: 8, borderRadius: 100, display: "block", transition: "all 0.3s ease", background: i === activeIndex ? "#16a34a" : "rgba(22,163,74,0.30)" }} />
          ))}
        </div>
      )}

      <style>{`
        @keyframes vsol-fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes vsol-scaleIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}

// ─── SKELETON ─────────────────────────────────────────────────────────────────

function SkeletonProductDetail() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 max-w-6xl animate-pulse">
        <div className="h-4 w-32 bg-secondary rounded mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="aspect-square rounded-2xl bg-secondary" />
          <div className="space-y-4">
            <div className="h-3 w-24 bg-secondary rounded" />
            <div className="h-8 w-3/4 bg-secondary rounded" />
            <div className="h-3 w-40 bg-secondary rounded" />
            <div className="space-y-2 mt-4">
              <div className="h-3 w-full bg-secondary rounded" />
              <div className="h-3 w-5/6 bg-secondary rounded" />
              <div className="h-3 w-4/6 bg-secondary rounded" />
            </div>
            <div className="h-10 w-44 bg-secondary rounded-full mt-6" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// ─── BREADCRUMB ───────────────────────────────────────────────────────────────

function Breadcrumb({ productName }: { productName: string }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 flex-wrap">
      <Link href="/"><a className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Home</a></Link>
      <span>/</span>
      <Link href="/vsol"><a className="hover:text-green-600 dark:hover:text-green-400 transition-colors">V-SOL</a></Link>
      <span>/</span>
      <Link href="/vsol/shop"><a className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Shop</a></Link>
      <span>/</span>
      <span className="text-foreground font-medium truncate max-w-[200px]">{productName}</span>
    </nav>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function VsolDcsStoreProductDetail() {
  const [match, params] = useRoute("/vsol/shop/:id");
  const id = match ? Number.parseInt(String(params.id ?? ""), 10) : Number.NaN;

  const [d, setD] = useState<VsolDcsProductDetail | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hoverMain, setHoverMain] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!match) { setLoading(false); return; }
    if (Number.isNaN(id) || id < 1) { setErr("Invalid product"); setLoading(false); return; }
    let c = true;
    void (async () => {
      setLoading(true);
      setErr(null);
      const r = await apiVsolPublicProduct(id);
      if (!c) return;
      if (r.ok) { setD(r.data); setActiveImage(r.data.main_image); }
      else { setErr(r.message); setD(null); }
      setLoading(false);
    })();
    return () => { c = false; };
  }, [id, match]);

  // SEO title
  useEffect(() => {
    if (d) document.title = `${d.nama_produk} — V-SOL | DCS`;
    return () => { document.title = "DCS - Professional Network Solutions"; };
  }, [d]);

  const gallery = useMemo(() => {
    if (!d) return [];
    return (d.gallery ?? []).slice().sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
  }, [d]);

  const allImages = useMemo(() => {
    if (!d) return [];
    return [d.main_image, ...gallery.map((g) => g.image_path)].filter(Boolean);
  }, [d, gallery]);

  const activeIndex = allImages.indexOf(activeImage);
  const currentIndex = activeIndex >= 0 ? activeIndex : 0;

  const goPrev = useCallback(() => {
    if (currentIndex > 0) setActiveImage(allImages[currentIndex - 1]);
  }, [currentIndex, allImages]);

  const goNext = useCallback(() => {
    if (currentIndex < allImages.length - 1) setActiveImage(allImages[currentIndex + 1]);
  }, [currentIndex, allImages]);

  const handleMouseDown = (e: React.MouseEvent) => { dragStartX.current = e.clientX; isDragging.current = false; };
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
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff < -40) goNext();
    else if (diff > 40) goPrev();
    touchStartX.current = null;
  };

  const techGroups = useMemo(() => {
    if (!d?.technical_specs?.length) return [];
    const map = new Map<string, { sub_item: string | null; value: string }[]>();
    const order: string[] = [];
    for (const s of d.technical_specs) {
      if (!map.has(s.item)) { map.set(s.item, []); order.push(s.item); }
      map.get(s.item)!.push({ sub_item: s.sub_item ?? null, value: s.value });
    }
    return order.map((item) => ({ item, rows: map.get(item)! }));
  }, [d]);

  if (!match) {
    return (
      <Layout>
        <div className="container py-20 text-center text-muted-foreground">Invalid URL.</div>
      </Layout>
    );
  }

  if (loading) return <SkeletonProductDetail />;

  if (err || !d) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-red-500 mb-6">{err ?? "Not found"}</p>
          <Link href="/vsol/shop"><a className="text-green-600 underline">← Back to catalog</a></Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-10 max-w-6xl">

          {/* Breadcrumb */}
          <Breadcrumb productName={d.nama_produk} />

          {/* Back */}
          <Link href="/vsol/shop">
            <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to catalog
            </a>
          </Link>

          {/* Product top */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Gallery with lightbox */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl border border-border bg-secondary/10 flex items-center justify-center overflow-hidden">
                {/* Nav arrows */}
                {currentIndex > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-green-500/30 text-white flex items-center justify-center hover:bg-green-600/40 transition-all text-sm"
                  >←</button>
                )}
                {currentIndex < allImages.length - 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-green-500/30 text-white flex items-center justify-center hover:bg-green-600/40 transition-all text-sm"
                  >→</button>
                )}
                {/* Zoom hint */}
                <div className={`absolute top-3 right-3 z-10 bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-lg px-2 py-1 text-[10px] text-white/60 font-mono tracking-wider transition-opacity duration-300 pointer-events-none ${hoverMain ? "opacity-100" : "opacity-0"}`}>
                  click to enlarge
                </div>
                <div
                  className="w-full h-full p-8 cursor-zoom-in select-none"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={() => { dragStartX.current = null; isDragging.current = false; setHoverMain(false); }}
                  onMouseEnter={() => setHoverMain(true)}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <img
                    src={activeImage || d.main_image}
                    alt={d.nama_produk}
                    className={`w-full h-full object-contain transition-transform duration-300 pointer-events-none ${hoverMain ? "scale-[1.03]" : "scale-100"}`}
                  />
                </div>
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-2 flex-wrap">
                  {allImages.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(src)}
                      className={[
                        "w-16 h-16 rounded-lg border-2 overflow-hidden transition-all",
                        activeImage === src ? "border-green-500 shadow-[0_0_0_2px_rgba(22,163,74,0.2)]" : "border-border hover:border-green-400",
                      ].join(" ")}
                    >
                      <img src={src} alt="" className="w-full h-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">V-SOL</span>
                {d.is_new && (
                  <span className="ml-1 px-2 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">NEW</span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-1">{d.nama_produk}</h1>
              <p className="text-xs font-mono text-muted-foreground mb-4">
                SKU: {d.sku} · {d.category}{d.subfilter ? ` / ${d.subfilter}` : ""}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">{d.deskripsi}</p>

              {d.bullet_points.filter(Boolean).length > 0 && (
                <ul className="space-y-2 mb-6">
                  {d.bullet_points.filter(Boolean).map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href="https://wa.me/628153058666?text=Halo%20DCS%2C%20saya%20tertarik%20dengan%20produk%20V-SOL%20ini."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact Us for Price
              </a>
            </div>
          </div>

          {/* Technical Specifications */}
          {techGroups.length > 0 && (
            <section className="mb-16">
              <h2 className="text-xl font-bold mb-6">Technical Specifications</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/40 text-left">
                      <th className="px-5 py-3 font-semibold text-muted-foreground w-[30%]">Item</th>
                      <th className="px-5 py-3 font-semibold text-muted-foreground w-[30%]">Sub-item</th>
                      <th className="px-5 py-3 font-semibold text-muted-foreground">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {techGroups.map((group) =>
                      group.rows.map((row, ri) => (
                        <tr key={`${group.item}-${ri}`} className="hover:bg-secondary/20 transition-colors">
                          <td className="px-5 py-3 text-muted-foreground font-medium">{ri === 0 ? group.item : ""}</td>
                          <td className="px-5 py-3 text-muted-foreground">{row.sub_item ?? ""}</td>
                          <td className="px-5 py-3 font-medium">{row.value}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Ordering Information */}
          {(d.ordering_info ?? []).length > 0 && (
            <section className="mb-16">
              <h2 className="text-xl font-bold mb-6">Ordering Information</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/40 text-left">
                      <th className="px-5 py-3 font-semibold text-muted-foreground">Product Name</th>
                      <th className="px-5 py-3 font-semibold text-muted-foreground">Description</th>
                      <th className="px-5 py-3 font-semibold text-muted-foreground">Power Config.</th>
                      <th className="px-5 py-3 font-semibold text-muted-foreground">Accessories</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {(d.ordering_info ?? []).map((row, i) => (
                      <tr key={i} className="hover:bg-secondary/20 transition-colors">
                        <td className="px-5 py-3 font-medium">{row.product_name}</td>
                        <td className="px-5 py-3 text-muted-foreground">{row.product_description}</td>
                        <td className="px-5 py-3 text-muted-foreground">{row.power_configuration}</td>
                        <td className="px-5 py-3 text-muted-foreground">{row.accessories}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* In The Box */}
          {d.in_the_box.length > 0 && (
            <section className="mb-16">
              <h2 className="text-xl font-bold mb-6">In The Box</h2>
              <div className="flex flex-wrap gap-4">
                {d.in_the_box.map((item, i) => (
                  <div key={i} className="w-28 h-28 rounded-xl border border-border bg-secondary/10 flex items-center justify-center p-3">
                    <img src={item.image_path} alt="" className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={allImages}
          activeIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </Layout>
  );
}
