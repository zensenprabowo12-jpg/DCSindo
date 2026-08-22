import { useEffect, useState } from "react";
import { Link } from "wouter";
import { MessageCircle, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout";
import { DCS_WHATSAPP_PRIMARY } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { apiFiberHomeProducts } from "./api";
import { categorySlug, groupByCategory } from "./category";
import HeroFiberOptik from "./hero-variants/HeroFiberOptik";
import type { FiberHomeProduct } from "./types";
import CatalogSkeleton from "@/components/catalog/CatalogSkeleton";
import CatalogEmpty from "@/components/catalog/CatalogEmpty";
import CatalogError from "@/components/catalog/CatalogError";

/** Di atas jumlah ini, chip kategori discroll horizontal (Miller's Law). */
const MAX_VISIBLE_CHIPS = 5;

const ALL = "";

function readCategoryParam(): string {
  return new URLSearchParams(window.location.search).get("category")?.trim().toLowerCase() ?? ALL;
}

function ProductCard({ p }: { p: FiberHomeProduct }) {
  return (
    <Link href={`/fiberhome/${encodeURIComponent(p.sku)}`}>
      <a className="group block bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
        <div className="aspect-square bg-secondary/20 flex items-center justify-center p-6">
          <img
            loading="lazy"
            src={p.image_path || "/images/placeholder-product.png"}
            alt={p.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-5">
          <h3 className="font-black text-sm uppercase group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2">
            {p.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            {p.category} · {p.sku}
          </p>
          <p className="text-xs text-muted-foreground line-clamp-2 mt-2">{p.description}</p>
        </div>
      </a>
    </Link>
  );
}

const STATS = [
  { value: "50+", label: "Sales Countries" },
  { value: "11", label: "Global Distribution Centers" },
  { value: "90+", label: "Countries & Regions Served" },
];

export default function FiberHomePage() {
  const [list, setList] = useState<FiberHomeProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  // Slug kategori aktif; "" = "All". Diisi dari `?category=` (link breadcrumb detail).
  const [activeSlug, setActiveSlug] = useState(readCategoryParam);

  // Sinkron kalau user menekan back/forward browser.
  useEffect(() => {
    const sync = () => setActiveSlug(readCategoryParam());
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  useEffect(() => {
    void (async () => {
      const r = await apiFiberHomeProducts();
      if (r.ok) setList(r.data);
      else setErr(r.message);
      setLoading(false);
    })();
  }, []);

  function selectCategory(slug: string) {
    setActiveSlug(slug);
    const url = new URL(window.location.href);
    if (slug) url.searchParams.set("category", slug);
    else url.searchParams.delete("category");
    // Pertahankan history.state supaya router (wouter) tidak kehilangan konteksnya.
    window.history.replaceState(window.history.state, "", url);
  }

  const groups = groupByCategory(list);
  // Slug dari URL bisa saja tidak cocok dengan kategori mana pun → jatuh ke "All".
  const activeGroup = groups.find(([c]) => categorySlug(c) === activeSlug);
  const shown = activeGroup ? [activeGroup] : groups;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b border-border min-h-screen flex items-center">
        <HeroFiberOptik />
        <div className="relative z-10 w-full container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                FiberHome
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
              FTTH Cables &amp; Equipment
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              FiberHome fiber optic solutions for last-mile access networks — drop cable,
              equipment, and accessories that support FTTH installation.
            </p>

            {/* Statistik: hook pertama, card floating di dalam hero */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-lg mt-12">
              {STATS.map((s) => (
                <div key={s.label} className="bg-card/95 backdrop-blur px-6 py-7 text-center">
                  <p className="text-4xl md:text-5xl font-black tracking-tight text-sky-600 dark:text-sky-400">
                    {s.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tentang FiberHome & DCS — satu alur: brand global → misi/nilai → distributor resmi */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black tracking-tight mb-4">
            About FiberHome &amp; DCS as Authorized Distributor
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Wuhan FiberHome International Technologies Co., Ltd. is a company under China
            Information Technology Group. FiberHome is an international provider of information
            and communication network products and solutions, recognized by China&rsquo;s Ministry
            of Science and Technology as an industrialization base and an innovative enterprise
            arising from the achievements of the &ldquo;863&rdquo; program in domestic optical
            communications.
          </p>

          <hr className="border-border my-8" />

          <p className="text-sm text-muted-foreground mb-4">
            The principles they stand by:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
                Mission
              </p>
              <p className="text-sm">
                Maximizing the value of digital connection and benefiting human society
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
                Values
              </p>
              <p className="text-sm">
                Customer-oriented, honest and dedicated, continuous innovation and incremental
                development
              </p>
            </div>
          </div>

          <hr className="border-border my-8" />

          <div className="rounded-2xl border border-border bg-secondary/30 p-6 flex flex-col sm:flex-row items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/15 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-sky-600 dark:text-sky-400" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2">
                PT Dinamika Cipta Solusi — Authorized Distributor FiberHome Indonesia
              </h3>
              <p className="text-muted-foreground max-w-3xl">
                As FiberHome&rsquo;s authorized distributor in Indonesia, DCS guarantees product
                authenticity, stock availability, and technical support across the entire
                FiberHome fiber optic range.
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Statistics &amp; profile source:{" "}
            <a
              href="https://en.fiberhome.com/aboutfiberHome.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              en.fiberhome.com/aboutfiberHome.html
            </a>
          </p>
        </div>
      </section>

      {/* Product list */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black tracking-tight mb-8">Products</h2>

          {err && <CatalogError />}

          {/* Skeleton chip saat loading; chip disembunyikan kalau kategorinya cuma satu. */}
          {loading ? (
            <div className="flex gap-2 mb-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-9 w-28 rounded-full bg-secondary animate-pulse" />
              ))}
            </div>
          ) : (
            groups.length > 1 && (
              <div
                className={cn(
                  "flex gap-2 mb-8 sticky top-16 z-20 py-2 -my-2 bg-background/90 backdrop-blur",
                  groups.length > MAX_VISIBLE_CHIPS
                    ? "overflow-x-auto flex-nowrap"
                    : "flex-wrap",
                )}
              >
                {[[ALL, "All"] as const, ...groups.map(([c]) => [categorySlug(c), c] as const)].map(
                  ([slug, label]) => (
                    <button
                      key={slug || "all"}
                      type="button"
                      onClick={() => selectCategory(slug)}
                      className={cn(
                        "shrink-0 h-9 px-4 rounded-full border text-sm font-semibold transition-colors",
                        (activeGroup ? categorySlug(activeGroup[0]) : ALL) === slug
                          ? "bg-sky-100 dark:bg-sky-500/20 border-sky-500 text-sky-700 dark:text-sky-300"
                          : "bg-card border-border text-muted-foreground hover:border-sky-500/50 hover:text-foreground",
                      )}
                    >
                      {label}
                    </button>
                  ),
                )}
              </div>
            )
          )}

          {loading ? (
            <CatalogSkeleton />
          ) : list.length === 0 ? (
            <CatalogEmpty />
          ) : (
            <div className="space-y-12">
              {shown.map(([category, products]) => (
                <div key={category}>
                  {/* Header kategori hanya relevan saat semua kategori ditampilkan. */}
                  {!activeGroup && groups.length > 1 && (
                    <h3 className="text-lg font-black tracking-tight border-b border-border pb-2 mb-6">
                      {category}
                    </h3>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((p) => (
                      <ProductCard key={p.id} p={p} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA sales */}
      <section className="border-t border-border bg-gradient-to-br from-sky-500/15 via-sky-500/5 to-transparent">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
              Need a quote or technical consultation?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              The DCS sales team is ready to help you pick the FiberHome products that fit your
              network requirements.
            </p>
            <a
              href={`${DCS_WHATSAPP_PRIMARY}?text=${encodeURIComponent(
                "Hello DCS, I would like to ask about FiberHome products.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold px-10 py-5 text-base md:text-lg transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Contact Sales via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
