import { useCallback, useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { VSOL_DCS_CATEGORIES } from "../categories";
import { apiVsolPublicProducts } from "../api";
import type { VsolDcsProduct } from "../types";
import { cn } from "@/lib/utils";

export default function VsolDcsStoreCatalog() {
  const [list, setList] = useState<VsolDcsProduct[]>([]);
  const [cat, setCat] = useState("");
  const [sort, setSort] = useState<"latest" | "oldest">("latest");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setErr(null);
    const r = await apiVsolPublicProducts({ category: cat || undefined, sort });
    if (r.ok) {
      setList(r.data);
    } else {
      setErr(r.message);
    }
    setLoading(false);
  }, [cat, sort]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">V-SOL</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Product Catalog</h1>
          <p className="text-muted-foreground mb-8">FTTH &amp; Fiber Optic Solutions</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Category</label>
              <select
                className={cn(
                  "h-10 w-full sm:w-64 rounded-full border border-border bg-background px-4 text-sm",
                  "focus:outline-none focus:ring-2 focus:ring-green-500/30",
                )}
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              >
                <option value="">All</option>
                {VSOL_DCS_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Sort By</label>
              <select
                className={cn(
                  "h-10 w-full sm:w-64 rounded-full border border-border bg-background px-4 text-sm",
                  "focus:outline-none focus:ring-2 focus:ring-green-500/30",
                )}
                value={sort}
                onChange={(e) => setSort(e.target.value as "latest" | "oldest")}
              >
                <option value="latest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          {err && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-200 dark:border-red-900 px-4 py-3 text-sm">
              {err}
            </div>
          )}

          {loading ? (
            <p className="text-muted-foreground">Loading catalog…</p>
          ) : list.length === 0 ? (
            <p className="text-muted-foreground">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {list.map((p) => (
                <Link key={p.id} href={`/vsol/shop/${p.id}`}>
                  <a className="group block bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-square bg-secondary/20 flex items-center justify-center p-6">
                      <img
                        loading="lazy"
                        src={p.main_image || "/images/placeholder-product.png"}
                        alt={p.nama_produk}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-5">
                      {p.is_new && (
                        <span className="inline-block mb-2 px-2 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                          NEW
                        </span>
                      )}
                      <h2 className="font-black text-sm uppercase group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                        {p.nama_produk}
                      </h2>
                      <p className="text-xs text-muted-foreground mt-1">{p.category}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-2">{p.deskripsi}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
