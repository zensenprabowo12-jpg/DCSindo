import { useCallback, useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { MIKROTIK_DCS_CATEGORIES } from "../categories";
import { apiPublicProducts } from "../api";
import type { MikrotikDcsProduct } from "../types";
import { cn } from "@/lib/utils";
import CatalogSkeleton from "@/components/catalog/CatalogSkeleton";
import CatalogEmpty from "@/components/catalog/CatalogEmpty";
import CatalogError from "@/components/catalog/CatalogError";

/**
 * Katalog publik: data dari MySQL lewat /api/mikrotik-dcs
 */
export default function MikrotikDcsStoreCatalog() {
  const [list, setList] = useState<MikrotikDcsProduct[]>([]);
  const [cat, setCat] = useState("");
  const [sort, setSort] = useState<"latest" | "oldest">("latest");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setErr(null);
    const r = await apiPublicProducts({ category: cat || undefined, sort });
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
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">MikroTik</h1>
          <p className="text-muted-foreground mb-8">Product catalog</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Category</label>
              <select
                className={cn(
                  "h-10 w-full sm:w-64 rounded-full border border-border bg-background px-4 text-sm",
                  "focus:outline-none focus:ring-2 focus:ring-primary/30",
                )}
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              >
                <option value="">All</option>
                {MIKROTIK_DCS_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Sort By</label>
              <select
                className={cn(
                  "h-10 w-full sm:w-64 rounded-full border border-border bg-background px-4 text-sm",
                  "focus:outline-none focus:ring-2 focus:ring-primary/30",
                )}
                value={sort}
                onChange={(e) => setSort(e.target.value as "latest" | "oldest")}
              >
                <option value="latest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          {err && <CatalogError />}

          {loading ? (
            <CatalogSkeleton />
          ) : list.length === 0 ? (
            <CatalogEmpty />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {list.map((p) => (
                <Link key={p.id} href={`/mikrotik/shop/${p.id}`}>
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
                      <h2 className="font-black text-sm uppercase group-hover:text-primary transition-colors line-clamp-2">
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
