import { useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { apiVsolPublicProduct } from "../api";
import type { VsolDcsProductDetail } from "../types";

export default function VsolDcsStoreProductDetail() {
  const [match, params] = useRoute("/vsol/shop/:id");
  const id = match ? Number.parseInt(String(params.id ?? ""), 10) : Number.NaN;

  const [d, setD] = useState<VsolDcsProductDetail | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (!match) { setLoading(false); return; }
    if (Number.isNaN(id) || id < 1) { setErr("Invalid product"); setLoading(false); return; }
    let c = true;
    void (async () => {
      setLoading(true);
      setErr(null);
      const r = await apiVsolPublicProduct(id);
      if (!c) return;
      if (r.ok) { setD(r.data); setActiveImage(r.data.main_image); }
      else { setErr(r.message); setD(null); }
      setLoading(false);
    })();
    return () => { c = false; };
  }, [id, match]);

  const gallery = useMemo(() => {
    if (!d) return [];
    return (d.gallery ?? []).slice().sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
  }, [d]);

  const techGroups = useMemo(() => {
    if (!d?.technical_specs?.length) return [];
    const map = new Map<string, { sub_item: string | null; value: string }[]>();
    const order: string[] = [];
    for (const s of d.technical_specs) {
      if (!map.has(s.item)) { map.set(s.item, []); order.push(s.item); }
      map.get(s.item)!.push({ sub_item: s.sub_item ?? null, value: s.value });
    }
    return order.map((item) => ({ item, rows: map.get(item)! }));
  }, [d]);

  if (!match) {
    return (
      <Layout>
        <div className="container py-20 text-center text-muted-foreground">Invalid URL.</div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="container py-20 text-center text-muted-foreground">Loading…</div>
      </Layout>
    );
  }

  if (err || !d) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-red-500 mb-6">{err ?? "Not found"}</p>
          <Link href="/vsol/shop"><a className="text-green-600 underline">← Back to catalog</a></Link>
        </div>
      </Layout>
    );
  }

  const allImages = [d.main_image, ...gallery.map((g) => g.image_path)].filter(Boolean);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-10 max-w-6xl">
          {/* Back */}
          <Link href="/vsol/shop">
            <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to catalog
            </a>
          </Link>

          {/* Product top */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl border border-border bg-secondary/10 flex items-center justify-center p-8 overflow-hidden">
                <img
                  src={activeImage || d.main_image}
                  alt={d.nama_produk}
                  className="w-full h-full object-contain"
                />
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-2 flex-wrap">
                  {allImages.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(src)}
                      className={[
                        "w-16 h-16 rounded-lg border-2 overflow-hidden transition-all",
                        activeImage === src ? "border-green-500" : "border-border hover:border-green-400",
                      ].join(" ")}
                    >
                      <img src={src} alt="" className="w-full h-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">V-SOL</span>
                {d.is_new && (
                  <span className="ml-1 px-2 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">NEW</span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-1">{d.nama_produk}</h1>
              <p className="text-xs font-mono text-muted-foreground mb-4">SKU: {d.sku} · {d.category}{d.subfilter ? ` / ${d.subfilter}` : ""}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{d.deskripsi}</p>

              {d.bullet_points.filter(Boolean).length > 0 && (
                <ul className="space-y-2 mb-6">
                  {d.bullet_points.filter(Boolean).map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Contact Us for Price
              </a>
            </div>
          </div>

          {/* Technical Specifications */}
          {techGroups.length > 0 && (
            <section className="mb-16">
              <h2 className="text-xl font-bold mb-6">Technical Specifications</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/40 text-left">
                      <th className="px-5 py-3 font-semibold text-muted-foreground w-[30%]">Item</th>
                      <th className="px-5 py-3 font-semibold text-muted-foreground w-[30%]">Sub-item</th>
                      <th className="px-5 py-3 font-semibold text-muted-foreground">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {techGroups.map((group) =>
                      group.rows.map((row, ri) => (
                        <tr key={`${group.item}-${ri}`} className="hover:bg-secondary/20 transition-colors">
                          <td className="px-5 py-3 text-muted-foreground font-medium">
                            {ri === 0 ? group.item : ""}
                          </td>
                          <td className="px-5 py-3 text-muted-foreground">
                            {row.sub_item ?? ""}
                          </td>
                          <td className="px-5 py-3 font-medium">{row.value}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Ordering Information */}
          {(d.ordering_info ?? []).length > 0 && (
            <section className="mb-16">
              <h2 className="text-xl font-bold mb-6">Ordering Information</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/40 text-left">
                      <th className="px-5 py-3 font-semibold text-muted-foreground">Product Name</th>
                      <th className="px-5 py-3 font-semibold text-muted-foreground">Description</th>
                      <th className="px-5 py-3 font-semibold text-muted-foreground">Power Config.</th>
                      <th className="px-5 py-3 font-semibold text-muted-foreground">Accessories</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {(d.ordering_info ?? []).map((row, i) => (
                      <tr key={i} className="hover:bg-secondary/20 transition-colors">
                        <td className="px-5 py-3 font-medium">{row.product_name}</td>
                        <td className="px-5 py-3 text-muted-foreground">{row.product_description}</td>
                        <td className="px-5 py-3 text-muted-foreground">{row.power_configuration}</td>
                        <td className="px-5 py-3 text-muted-foreground">{row.accessories}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* In The Box */}
          {d.in_the_box.length > 0 && (
            <section className="mb-16">
              <h2 className="text-xl font-bold mb-6">In The Box</h2>
              <div className="flex flex-wrap gap-4">
                {d.in_the_box.map((item, i) => (
                  <div key={i} className="w-28 h-28 rounded-xl border border-border bg-secondary/10 flex items-center justify-center p-3">
                    <img src={item.image_path} alt="" className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}
