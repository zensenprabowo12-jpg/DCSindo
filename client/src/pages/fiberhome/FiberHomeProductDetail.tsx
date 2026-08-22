import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import { Building2, Check, Copy, Download, Home, MessageCircle, Radio } from "lucide-react";
import Layout from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DCS_WHATSAPP_PRIMARY } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { apiFiberHomeProduct } from "./api";
import { categorySlug } from "./category";
import type { FiberHomeProduct, FiberHomeSpec } from "./types";

/** Icon aplikasi dirotasi per posisi — data aplikasi tidak menyimpan icon. */
const APP_ICONS = [Home, Radio, Building2];

// Miller's Law: batasi jumlah item yang ditampilkan sekaligus.
const MAX_FEATURES = 7;
const MAX_APPLICATIONS = 5;

/** Kelompokkan spec per `spec_group`, urutan group = urutan kemunculan pertama. */
function groupSpecs(specs: FiberHomeSpec[]): Array<[string, FiberHomeSpec[]]> {
  const groups = new Map<string, FiberHomeSpec[]>();
  for (const s of specs) {
    const key = s.spec_group || "Umum";
    const bucket = groups.get(key);
    if (bucket) bucket.push(s);
    else groups.set(key, [s]);
  }
  return Array.from(groups);
}

export default function FiberHomeProductDetail() {
  const [match, params] = useRoute("/fiberhome/:sku");
  const sku = params?.sku ?? "";

  const [d, setD] = useState<FiberHomeProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!sku) return;
    setLoading(true);
    setErr(null);
    void (async () => {
      const r = await apiFiberHomeProduct(decodeURIComponent(sku));
      if (r.ok) {
        setD(r.data);
        setActiveImage(r.data.image_path || r.data.gallery[0]?.image_path || null);
      } else {
        setErr(r.message);
      }
      setLoading(false);
    })();
  }, [sku]);

  if (!match) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center text-muted-foreground">
          URL tidak valid.
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center text-muted-foreground">
          Memuat produk…
        </div>
      </Layout>
    );
  }

  if (err || !d) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-red-500 mb-6">{err ?? "Produk tidak ditemukan"}</p>
          <Link href="/fiberhome">
            <a className="text-sky-600 dark:text-sky-400 underline">← Kembali ke katalog</a>
          </Link>
        </div>
      </Layout>
    );
  }

  // Hero + gallery jadi satu daftar thumbnail.
  const thumbs = [
    ...(d.image_path ? [d.image_path] : []),
    ...d.gallery.map((g) => g.image_path),
  ];

  const specGroups = groupSpecs(d.technical_specs);

  async function copySku() {
    // clipboard API hanya ada di secure context; kalau tidak ada, tombol jadi no-op.
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(d!.sku);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/">
                  <a className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</a>
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/fiberhome">
                  <a className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    FiberHome
                  </a>
                </Link>
              </li>
              {d.category && (
                <>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href={`/fiberhome?category=${categorySlug(d.category)}`}>
                      <a className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                        {d.category}
                      </a>
                    </Link>
                  </li>
                </>
              )}
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium" aria-current="page">
                {d.name}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            {/* Foto */}
            <div>
              <div className="aspect-square bg-secondary/20 border border-border rounded-2xl flex items-center justify-center p-8">
                <img
                  src={activeImage || "/images/placeholder-product.png"}
                  alt={d.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {thumbs.length > 1 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {thumbs.map((src) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImage(src)}
                      className={cn(
                        "w-20 h-20 rounded-xl border bg-secondary/20 p-2 transition-all",
                        activeImage === src
                          ? "border-sky-500 ring-2 ring-sky-500/30"
                          : "border-border hover:border-sky-500/50",
                      )}
                    >
                      <img loading="lazy" src={src} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                  FiberHome
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-3">{d.name}</h1>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                {d.category && (
                  <span className="text-xs font-medium text-muted-foreground bg-secondary/50 border border-border rounded-full px-3 py-1">
                    {d.category}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => void copySku()}
                  title={copied ? "Copied!" : "Klik untuk menyalin SKU"}
                  className="group relative inline-flex items-center gap-2 font-mono text-sm font-semibold rounded-lg border border-border bg-slate-100 dark:bg-slate-800 px-3 py-1 hover:border-sky-500 transition-colors"
                >
                  SKU: {d.sku}
                  <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-sky-600 dark:group-hover:text-sky-400" />
                  {copied && (
                    <span
                      role="status"
                      className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-sky-600 text-white text-xs font-sans font-medium px-2 py-1"
                    >
                      Copied!
                    </span>
                  )}
                </button>
              </div>

              {d.description && (
                <p className="text-sm leading-relaxed mb-8">{d.description}</p>
              )}

              {d.features.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-sm font-black uppercase tracking-wider mb-4">Fitur Utama</h2>
                  <ul className="space-y-3">
                    {d.features.slice(0, MAX_FEATURES).map((f) => (
                      <li key={f.id} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                        <span>{f.feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                {d.datasheet_path && (
                  <a
                    href={d.datasheet_path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white px-7 py-4 text-sm font-bold transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download Datasheet
                  </a>
                )}
                <a
                  href={`${DCS_WHATSAPP_PRIMARY}?text=${encodeURIComponent(
                    `Halo, saya tertarik dengan produk FiberHome ${d.name} (SKU: ${d.sku}). Bisa info lebih lanjut?`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-sky-600 text-sky-700 dark:text-sky-400 hover:bg-sky-600 hover:text-white px-7 py-4 text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Tanya Sales via WA
                </a>
              </div>
            </div>
          </div>

          {/* Aplikasi & use case */}
          {d.applications.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-black tracking-tight mb-6">Aplikasi &amp; Use Case</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {d.applications.slice(0, MAX_APPLICATIONS).map((a, i) => {
                  const Icon = APP_ICONS[i % APP_ICONS.length];
                  return (
                    <div key={a.id} className="rounded-2xl border border-border bg-card p-6">
                      <div className="w-11 h-11 rounded-xl bg-sky-500/15 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                      </div>
                      <h3 className="font-bold text-sm mb-1">{a.title}</h3>
                      {a.description && (
                        <p className="text-sm text-muted-foreground">{a.description}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Spesifikasi teknis — satu accordion per group, group pertama terbuka */}
          {specGroups.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-black tracking-tight mb-6">Spesifikasi Teknis</h2>
              <Accordion
                type="multiple"
                defaultValue={[specGroups[0][0]]}
                className="border border-border rounded-2xl overflow-hidden"
              >
                {specGroups.map(([group, rows]) => (
                  <AccordionItem key={group} value={group} className="border-b last:border-b-0">
                    <AccordionTrigger className="px-5 text-base font-bold hover:no-underline hover:bg-secondary/30">
                      {group}
                      <span className="ml-auto mr-3 text-xs font-normal text-muted-foreground">
                        {rows.length} item
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-0 pt-0">
                      <table className="w-full text-sm">
                        <tbody>
                          {rows.map((s, i) => (
                            <tr
                              key={s.id}
                              className={cn(
                                "border-t border-border",
                                i % 2 === 1 && "bg-secondary/20",
                              )}
                            >
                              <th className="text-left font-semibold px-5 py-3 w-1/3 align-top">
                                {s.label}
                              </th>
                              <td className="px-5 py-3 text-muted-foreground">{s.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
