import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { apiPublicProducts } from "../api";
import type { MikrotikDcsProduct } from "../types";
import { ProductCard } from "./components/ProductCard";
import { CATEGORY_BACKGROUNDS } from "./CategoryBackground";

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

  const backgroundImage =
    CATEGORY_BACKGROUNDS[category.toLowerCase()] ||
    "/images/category-bg/default.jpg";

  const [list, setList] = useState<MikrotikDcsProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setErr(null);

    const r = await apiPublicProducts({
      category,
      sort: "custom",
    });

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
        <div className="container py-20 text-center text-muted-foreground">
          Memuat…
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* FULL PAGE FIXED BACKGROUND */}
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/65" />

        {/* CONTENT */}
        <div className="relative z-10">
          {/* HERO */}
          <section className="px-4 pt-20 pb-10">
            <div className="max-w-6xl mx-auto">
              {/* BACK BUTTON */}
              <div className="mb-8 flex justify-center">
                <Button
                  asChild
                  variant="secondary"
                  className="bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20"
                >
                  <Link href="/mikrotik/categories">
                    ← Kembali ke categories
                  </Link>
                </Button>
              </div>

              {/* TITLE */}
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                  {category}
                </h1>

                <p className="mt-5 text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
                  Explore MikroTik {category} products with high performance and
                  reliable networking solutions.
                </p>
              </div>
            </div>
          </section>

          {/* PRODUCTS */}
          <section className="px-4 pb-20">
            <div className="max-w-6xl mx-auto">
              {/* ERROR */}
              {err && (
                <div className="rounded-xl border border-red-200 bg-red-50 text-red-800 px-4 py-3 text-sm mb-8">
                  {err}
                </div>
              )}

              {/* LOADING */}
              {loading ? (
                <p className="text-center text-white/80">
                  Memuat produk…
                </p>
              ) : list.length === 0 ? (
                <p className="text-center text-white/80">
                  Belum ada produk untuk kategori ini.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {list.map((p) => (
                    <div key={p.id} className="backdrop-blur-sm">
                      <ProductCard product={p} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}