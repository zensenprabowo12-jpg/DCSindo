import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useSearch } from "wouter";
import Layout from "@/components/layout";
import { UBIQUITI_DCS_CATEGORIES } from "../categories";
import { apiUbiquitiPublicProducts } from "../api";
import type { UbiquitiDcsProduct } from "../types";

export default function UbiquitiDcsStoreCatalog() {
  const search = useSearch();
  const [, setLocation] = useLocation();
  const cat = new URLSearchParams(search).get("category") ?? "";

  const [list, setList] = useState<UbiquitiDcsProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  function handleCatChange(newCat: string) {
    if (newCat) {
      setLocation(`/ubiquiti/shop?category=${encodeURIComponent(newCat)}`);
    } else {
      setLocation("/ubiquiti/shop");
    }
  }

  const load = useCallback(async () => {
    setLoading(true);
    setErr(null);
    const r = await apiUbiquitiPublicProducts({ category: cat || undefined, sort: "custom" });
    if (r.ok) setList(r.data);
    else setErr(r.message);
    setLoading(false);
  }, [cat]);

  useEffect(() => { void load(); }, [load]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Ubiquiti</h1>
        <p className="text-muted-foreground mb-8">Produk networking enterprise</p>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => handleCatChange("")}
            className={[
              "px-4 py-1.5 rounded-full text-sm font-semibold border transition-all",
              cat === ""
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-border text-muted-foreground hover:border-blue-500/50 hover:text-foreground",
            ].join(" ")}
          >
            All
          </button>
          {UBIQUITI_DCS_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => handleCatChange(c)}
              className={[
                "px-4 py-1.5 rounded-full text-sm font-semibold border transition-all",
                cat === c
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-border text-muted-foreground hover:border-blue-500/50 hover:text-foreground",
              ].join(" ")}
            >
              {c}
            </button>
          ))}
        </div>

        {err && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 px-4 py-3 text-sm">
            {err}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden animate-pulse">
                <div className="aspect-square bg-secondary/30" />
                <div className="p-5 space-y-2">
                  <div className="h-4 bg-secondary/40 rounded w-3/4" />
                  <div className="h-3 bg-secondary/30 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : list.length === 0 ? (
          <p className="text-muted-foreground text-sm py-12 text-center">
            No products found{cat ? ` in the "${cat}" category` : ""}.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {list.map((p) => (
              <Link key={p.id} href={`/ubiquiti/shop/${p.id}`}>
                <a className="group block bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 cursor-pointer">
                  <div className="aspect-square bg-secondary/20 flex items-center justify-center p-6">
                    <img
                      src={p.main_image || "/images/placeholder-product.png"}
                      alt={p.nama_produk}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/images/placeholder-product.png";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    {p.is_new && (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/15 text-blue-400 border border-blue-500/20 mb-2">
                        NEW
                      </span>
                    )}
                    <h2 className="font-black text-sm uppercase group-hover:text-blue-400 transition-colors line-clamp-2 mb-1">
                      {p.nama_produk}
                    </h2>
                    <p className="text-xs text-muted-foreground">{p.category}</p>
                    {p.deskripsi && (
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1.5">{p.deskripsi}</p>
                    )}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
