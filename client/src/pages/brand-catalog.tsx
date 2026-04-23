import Layout from "@/components/layout";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import { Search } from "lucide-react";

type ApiOk<T> = { ok: true; data: T };
type ApiErr = { ok: false; message: string };

type BrandRow = {
  id: number;
  nama_brand: string;
  slug: string;
  created_at: string;
};

type CatalogProductWithBrandRow = {
  id: number;
  brand_id: number;
  nama_produk: string;
  deskripsi: string;
  spesifikasi: string;
  gambar: string;
  created_at: string;
  nama_brand: string;
  brand_slug: string;
};

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { credentials: "include" });
  const text = await res.text();
  const json = text ? (JSON.parse(text) as T) : ({} as T);
  if (!res.ok) {
    throw new Error(`${res.status}: ${text || res.statusText}`);
  }
  return json;
}

export default function BrandCatalogPage() {
  const [match, params] = useRoute("/brand/:slug");
  const slug = (params?.slug ?? "").trim().toLowerCase();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [brand, setBrand] = useState<BrandRow | null>(null);
  const [products, setProducts] = useState<CatalogProductWithBrandRow[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!match) return;
    let cancelled = false;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const [brandsRes, productsRes] = await Promise.all([
          fetchJson<ApiOk<BrandRow[]> | ApiErr>("/api/brands"),
          fetchJson<ApiOk<CatalogProductWithBrandRow[]> | ApiErr>(
            `/api/products?brand=${encodeURIComponent(slug)}`,
          ),
        ]);

        if (cancelled) return;

        if (!("ok" in brandsRes) || brandsRes.ok !== true) {
          setError("Gagal memuat brand. Pastikan backend server berjalan.");
          setBrand(null);
        } else {
          const b = brandsRes.data.find((x) => x.slug?.toLowerCase() === slug) ?? null;
          setBrand(b);
        }

        if (!("ok" in productsRes) || productsRes.ok !== true) {
          setError("Gagal memuat produk. Pastikan backend server berjalan.");
          setProducts([]);
        } else {
          setProducts(productsRes.data);
        }
      } catch (e) {
        if (cancelled) return;
        setError((e as Error).message || "Gagal memuat katalog.");
        setBrand(null);
        setProducts([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [match, slug]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return products;
    return products.filter((p) => {
      return (
        p.nama_produk?.toLowerCase().includes(query) ||
        p.deskripsi?.toLowerCase().includes(query) ||
        p.spesifikasi?.toLowerCase().includes(query)
      );
    });
  }, [products, q]);

  // Jika URL tidak cocok, biarkan router lanjut (komponen ini tidak render apa-apa).
  if (!match) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                {brand?.nama_brand ?? slug.toUpperCase()}
              </h1>
              <p className="text-muted-foreground mt-2">
                {loading
                  ? "Memuat katalog..."
                  : `${filtered.length} produk${q.trim() ? " (filtered)" : ""}`}
              </p>
            </div>

            <div className="relative w-full md:w-[360px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari produk..."
                className={cn(
                  "w-full h-12 pl-11 pr-4 rounded-full bg-background border border-border",
                  "focus:outline-none focus:ring-2 focus:ring-primary/30",
                )}
              />
            </div>
          </div>

          {error && (
            <div className="mb-10 rounded-2xl border border-red-200 bg-red-50 text-red-800 px-5 py-4">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={`sk-${idx}`}
                  className="rounded-2xl border border-border overflow-hidden animate-pulse"
                >
                  <div className="aspect-square bg-secondary/30" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 w-2/3 bg-secondary/40 rounded" />
                    <div className="h-3 w-1/3 bg-secondary/30 rounded" />
                  </div>
                </div>
              ))
            ) : (
              filtered.map((p) => (
                <Link key={p.id} href={`/brand/${slug}/${p.id}`}>
                  <a className="group block bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-square bg-secondary/10 flex items-center justify-center p-6">
                      <img
                        src={p.gambar || "/images/placeholder-product.png"}
                        alt={p.nama_produk}
                        className="w-full h-full object-contain group-hover:scale-105 rounded-2xl transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-black text-sm uppercase group-hover:text-primary transition-colors mb-2">
                        {p.nama_produk}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {p.deskripsi}
                      </p>
                    </div>
                  </a>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

