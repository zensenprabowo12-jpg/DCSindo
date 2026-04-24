import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { apiPublicProduct } from "../api";
import type { MikrotikDcsProductDetail } from "../types";

export default function MikrotikDcsStoreProductDetail() {
  const [match, params] = useRoute("/mikrotik/shop/:id");
  const id = match ? Number.parseInt(String(params.id ?? ""), 10) : Number.NaN;
  const [d, setD] = useState<MikrotikDcsProductDetail | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!match) {
      setLoading(false);
      setErr("URL tidak valid");
      return;
    }
    if (Number.isNaN(id) || id < 1) {
      setErr("Produk tidak valid");
      setLoading(false);
      return;
    }
    let c = true;
    void (async () => {
      setLoading(true);
      setErr(null);
      const r = await apiPublicProduct(id);
      if (!c) return;
      if (r.ok) {
        setD(r.data);
        setErr(null);
      } else {
        setErr(r.message);
        setD(null);
      }
      setLoading(false);
    })();
    return () => {
      c = false;
    };
  }, [id, match]);

  if (!match) {
    return (
      <Layout>
        <div className="container py-20 text-center text-muted-foreground">Memuat…</div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="container py-20 text-center text-muted-foreground">Memuat…</div>
      </Layout>
    );
  }

  if (err || !d) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-destructive mb-4">{err ?? "Tidak ditemukan"}</p>
          <Button asChild variant="outline">
            <Link href="/mikrotik/shop">Kembali</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/mikrotik/shop">← Kembali ke katalog</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img
              src={d.main_image}
              alt={d.nama_produk}
              className="w-full rounded-2xl border border-border bg-secondary/20 object-contain"
            />
            {d.gallery.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {d.gallery.map((g) => (
                  <img
                    key={g.id}
                    src={g.image_path}
                    alt=""
                    className="h-20 w-20 object-cover rounded-lg border"
                  />
                ))}
              </div>
            )}
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-mono mb-1">SKU: {d.sku}</p>
            <h1 className="text-2xl font-black tracking-tight mb-2">{d.nama_produk}</h1>
            <p className="text-sm text-primary font-medium mb-4">{d.category}</p>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {d.deskripsi}
            </p>
            {d.bullet_points.length > 0 && (
              <div className="mt-6">
                <h2 className="text-sm font-bold mb-2">Highlights</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {d.bullet_points.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
