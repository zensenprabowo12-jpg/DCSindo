import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { apiPublicProducts } from "../api";
import type { MikrotikDcsProduct } from "../types";
import { cn } from "@/lib/utils";

function splitBullets(xs: string[]) {
  const mid = Math.ceil(xs.length / 2);
  return [xs.slice(0, mid), xs.slice(mid)] as const;
}

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
                {list.map((p) => {
                  const bullets = (p.bullet_points ?? [])
                    .map((x) => (x ?? "").trim())
                    .filter(Boolean)
                    .slice(0, 6);
                  const [b1, b2] = splitBullets(bullets);

                  return (
                    <Link key={p.id} href={`/mikrotik/shop/${p.id}`}>
                      <a
                        className={cn(
                          "group block rounded-2xl overflow-hidden",
                          "bg-card border border-border",
                          "hover:-translate-y-1 hover:shadow-2xl transition-all duration-300",
                        )}
                      >
                        <div className="aspect-[4/3] bg-secondary/20 flex items-center justify-center p-6">
                          <img
                            src={p.main_image || "/images/placeholder-product.png"}
                            alt={p.nama_produk}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            draggable={false}
                          />
                        </div>

                        <div className="p-5">
                          <p className="text-[10px] text-muted-foreground font-mono">
                            SKU: {p.sku || "-"}
                          </p>
                          <h2 className="mt-1 font-black text-sm uppercase tracking-tight line-clamp-2">
                            {p.nama_produk}
                          </h2>
                          <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                            {p.deskripsi}
                          </p>

                          {bullets.length > 0 && (
                            <div className="mt-4 grid grid-cols-2 gap-x-6 text-[11px] text-muted-foreground">
                              <ul className="space-y-1">
                                {b1.map((b, i) => (
                                  <li key={i} className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span className="line-clamp-1">{b}</span>
                                  </li>
                                ))}
                              </ul>
                              <ul className="space-y-1">
                                {b2.map((b, i) => (
                                  <li key={i} className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span className="line-clamp-1">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

