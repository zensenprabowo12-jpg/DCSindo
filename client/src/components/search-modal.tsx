import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Search, X, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { apiUbiquitiPublicProducts } from "@ubiquiti/api";
import { apiPublicProducts } from "@mikrotik/api";
import { apiVsolPublicProducts } from "@vsol/api";
import type { UbiquitiDcsProduct } from "@ubiquiti/types";
import type { MikrotikDcsProduct } from "@mikrotik/types";
import type { VsolDcsProduct } from "@vsol/types";

type Brand = "ubiquiti" | "mikrotik" | "vsol";

type UnifiedProduct = {
  id: number;
  name: string;
  sku: string;
  subfilter: string;
  category: string;
  image: string;
  path: string;
};

const BRAND_META: Record<Brand, { label: string; color: string; accent: string }> = {
  ubiquiti: { label: "Ubiquiti", color: "#0082FF", accent: "rgba(0,130,255,0.08)" },
  mikrotik: { label: "MikroTik", color: "#FF6B35", accent: "rgba(255,107,53,0.08)" },
  vsol: { label: "V-SOL", color: "#16a34a", accent: "rgba(22,163,74,0.08)" },
};

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<UnifiedProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState<Brand | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setSelectedBrand(null);
      setQuery("");
      setProducts([]);
      setFetched(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!selectedBrand || fetched === selectedBrand) return;
    setLoading(true);
    setProducts([]);

    if (selectedBrand === "ubiquiti") {
      void apiUbiquitiPublicProducts().then((r) => {
        if (r.ok) {
          setProducts(
            r.data.map((p: UbiquitiDcsProduct) => ({
              id: p.id,
              name: p.nama_produk,
              sku: p.sku ?? "",
              subfilter: p.subfilter ?? "",
              category: p.category,
              image: p.main_image,
              path: `/ubiquiti/shop/${p.id}`,
            }))
          );
        }
        setFetched("ubiquiti");
        setLoading(false);
      });
    } else if (selectedBrand === "mikrotik") {
      void apiPublicProducts().then((r) => {
        if (r.ok) {
          setProducts(
            r.data.map((p: MikrotikDcsProduct) => ({
              id: p.id,
              name: p.nama_produk,
              sku: p.sku ?? "",
              subfilter: "",
              category: p.category,
              image: p.main_image,
              path: `/mikrotik/shop/${p.id}`,
            }))
          );
        }
        setFetched("mikrotik");
        setLoading(false);
      });
    } else {
      void apiVsolPublicProducts().then((r) => {
        if (r.ok) {
          setProducts(
            r.data.map((p: VsolDcsProduct) => ({
              id: p.id,
              name: p.nama_produk,
              sku: p.sku ?? "",
              subfilter: p.subfilter ?? "",
              category: p.category,
              image: p.main_image,
              path: `/vsol/shop/${p.id}`,
            }))
          );
        }
        setFetched("vsol");
        setLoading(false);
      });
    }
  }, [selectedBrand, fetched]);

  const normalize = (s: string) => s.toLowerCase().replace(/[\s\-_]+/g, "");

  const filtered = selectedBrand
    ? (() => {
        const q = normalize(query);
        if (!q) return [];
        return products.filter(
          (p) =>
            normalize(p.name).includes(q) ||
            normalize(p.sku).includes(q) ||
            normalize(p.category).includes(q) ||
            normalize(p.subfilter).includes(q)
        );
      })()
    : [];

  const meta = selectedBrand ? BRAND_META[selectedBrand] : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            className="w-full max-w-2xl bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 border-b border-border flex items-center gap-4">
              {selectedBrand && (
                <button
                  onClick={() => { setSelectedBrand(null); setQuery(""); }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="Back to brand selection"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
              )}
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              {selectedBrand ? (
                <input
                  autoFocus
                  placeholder={`Search ${BRAND_META[selectedBrand].label} products...`}
                  className="flex-1 bg-transparent border-none outline-none text-lg font-medium placeholder:text-muted-foreground text-foreground"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              ) : (
                <span className="flex-1 text-lg font-medium text-muted-foreground">
                  Select a brand to search
                </span>
              )}
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-white/10 shrink-0">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Body */}
            <div className="max-h-[60vh] overflow-y-auto">

              {/* Brand picker */}
              {!selectedBrand && (
                <div className="p-5 grid grid-cols-2 gap-4">
                  {(Object.entries(BRAND_META) as [Brand, typeof BRAND_META[Brand]][]).map(([brand, m]) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className="group flex flex-col items-start gap-3 p-5 rounded-xl border border-border hover:border-transparent transition-all text-left"
                      onMouseEnter={(e) => (e.currentTarget.style.background = m.accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                    >
                      <span
                        className="text-xs font-black uppercase tracking-widest"
                        style={{ color: m.color }}
                      >
                        {m.label}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Search all {m.label} products
                      </span>
                      <ChevronRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        style={{ color: m.color }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Search results */}
              {selectedBrand && (
                <div className="p-4">
                  {loading ? (
                    <div className="py-12 text-center text-muted-foreground text-sm">
                      Loading products...
                    </div>
                  ) : query && filtered.length > 0 ? (
                    <div className="grid gap-2">
                      {filtered.map((p) => (
                        <Link key={p.id} href={p.path} onClick={onClose}>
                          <a className="flex items-center gap-4 p-4 hover:bg-accent rounded-xl transition-colors group">
                            <div className="w-14 h-14 bg-secondary/30 rounded-lg p-2 flex items-center justify-center shrink-0">
                              <img
                                src={p.image}
                                alt={p.name}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).style.display = "none";
                                }}
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="font-bold group-hover:text-primary transition-colors truncate">
                                {p.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5 truncate">
                                SKU: {p.sku}
                              </div>
                              <div
                                className="text-xs font-black uppercase tracking-widest mt-0.5"
                                style={{ color: meta?.color }}
                              >
                                {p.category}
                              </div>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  ) : query ? (
                    <div className="py-12 text-center text-muted-foreground text-sm">
                      No results found for &ldquo;{query}&rdquo;
                    </div>
                  ) : (
                    <div className="py-12 text-center text-muted-foreground text-sm">
                      Start typing to search {meta?.label} products...
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
