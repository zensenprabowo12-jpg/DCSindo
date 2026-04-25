import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { apiPublicProducts } from "../api";
import type { MikrotikDcsProduct } from "../types";
import { ProductCard } from "./components/ProductCard";

export default function MikrotikCategoryCatalogPage() {
  const [match, params] = useRoute("/mikrotik/categories/:category");
  const raw = String(params?.category ?? "");
  const category = useMemo(() => {
    try {
      return decodeURIComponent(raw);
    } catch {
      return raw;
    }
  }, [raw]);

  const [list, setList] = useState<MikrotikDcsProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setErr(null);
    const r = await apiPublicProducts({ category, sort: "latest" });
    if (r.ok) setList(r.data);
    else setErr(r.message);
    setLoading(false);
  }, [category]);

  useEffect(() => {
    if (!match) return;
    void load();
  }, [load, match]);

  if (!match) {
    return (
      <Layout>
        <div className="container py-20 text-center text-muted-foreground">Memuat…</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex justify-center">
              <Button asChild variant="ghost">
                <Link href="/mikrotik/categories">← Kembali ke categories</Link>
              </Button>
            </div>

            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                Kategori {category}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                We provide the best product.
              </p>
            </div>

            {err && (
              <div className="mt-8 rounded-xl border border-red-200 bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-200 dark:border-red-900 px-4 py-3 text-sm">
                {err}
              </div>
            )}

            {loading ? (
              <p className="mt-12 text-center text-muted-foreground">Memuat produk…</p>
            ) : list.length === 0 ? (
              <p className="mt-12 text-center text-muted-foreground">
                Belum ada produk untuk kategori ini.
              </p>
            ) : (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {list.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

