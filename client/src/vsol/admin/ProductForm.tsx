import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { VSOL_DCS_CATEGORIES } from "../categories";
import {
  apiVsolAdminProduct,
  apiVsolCreateProduct,
  apiVsolUpdateProduct,
} from "../api";
import VsolProtectedRoute from "./ProtectedRoute";
import type { VsolDcsProductDetail } from "../types";

// ─── LOCAL TYPES ─────────────────────────────────────────────

type SpecRow = { sub_item: string; value: string };
type SpecItem = { item: string; rows: SpecRow[] };

type OrderingRow = {
  product_name: string;
  product_description: string;
  power_configuration: string;
  accessories: string;
};

// ─── EMPTY FACTORIES ─────────────────────────────────────────

const EMPTY_BULLETS = () => Array.from({ length: 9 }, () => "");
const EMPTY_SPEC_ITEM = (): SpecItem => ({ item: "", rows: [{ sub_item: "", value: "" }] });
const EMPTY_ORDERING_ROW = (): OrderingRow => ({ product_name: "", product_description: "", power_configuration: "", accessories: "" });

// ─── SPEC BUILDER HELPERS ────────────────────────────────────

function specsToFlat(items: SpecItem[]): { item: string; sub_item: string | null; value: string; sort_order: number }[] {
  const flat: { item: string; sub_item: string | null; value: string; sort_order: number }[] = [];
  let order = 0;
  for (const si of items) {
    for (const row of si.rows) {
      flat.push({
        item: si.item.trim(),
        sub_item: row.sub_item.trim() || null,
        value: row.value.trim(),
        sort_order: order++,
      });
    }
  }
  return flat;
}

function flatToSpecItems(
  flat: { item: string; sub_item: string | null; value: string }[]
): SpecItem[] {
  const map = new Map<string, SpecItem>();
  const order: string[] = [];
  for (const row of flat) {
    if (!map.has(row.item)) {
      map.set(row.item, { item: row.item, rows: [] });
      order.push(row.item);
    }
    map.get(row.item)!.rows.push({ sub_item: row.sub_item ?? "", value: row.value });
  }
  return order.map((k) => map.get(k)!);
}

// ─── FORM BODY ───────────────────────────────────────────────

function ProductFormBody({ id }: { id?: string }) {
  const [, setLocation] = useLocation();
  const isEdit = Boolean(id);
  const [loading, setLoading] = useState(isEdit);
  const [err, setErr] = useState<string | null>(null);

  // Basic fields
  const [nama, setNama] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState<string>(VSOL_DCS_CATEGORIES[0]);
  const [subfilter, setSubfilter] = useState("");
  const [desk, setDesk] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [bullets, setBullets] = useState<string[]>(EMPTY_BULLETS());

  // Images
  const [mainFile, setMainFile] = useState<File | null>(null);
  const [mainPreview, setMainPreview] = useState<string | null>(null);
  const [existingMain, setExistingMain] = useState<string | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [keepGallery, setKeepGallery] = useState<string[]>([]);
  const [inBoxFiles, setInBoxFiles] = useState<File[]>([]);
  const [keepInBox, setKeepInBox] = useState<string[]>([]);

  // Technical Specs
  const [specItems, setSpecItems] = useState<SpecItem[]>([]);

  // Ordering Info
  const [orderingRows, setOrderingRows] = useState<OrderingRow[]>([]);

  // ── Load for edit ──────────────────────────────────────────
  useEffect(() => {
    if (!isEdit || !id) return;
    let active = true;
    void (async () => {
      setLoading(true);
      const n = Number.parseInt(id, 10);
      const r = await apiVsolAdminProduct(n);
      if (!active) return;
      if (!r.ok) { setErr(r.message); setLoading(false); return; }
      const d: VsolDcsProductDetail = r.data;
      setNama(d.nama_produk);
      setSku(d.sku);
      setCategory(d.category);
      setSubfilter(d.subfilter ?? "");
      setDesk(d.deskripsi);
      setIsNew(d.is_new);
      setBullets([...d.bullet_points, ...Array(9).fill("")].slice(0, 9).map((x) => (x == null ? "" : String(x))));
      setExistingMain(d.main_image);
      setKeepGallery((d.gallery ?? []).map((g) => g.image_path));
      setKeepInBox((d.in_the_box ?? []).map((x) => x.image_path));
      setSpecItems(flatToSpecItems(d.technical_specs ?? []));
      setOrderingRows((d.ordering_info ?? []).map((o) => ({
        product_name: o.product_name,
        product_description: o.product_description,
        power_configuration: o.power_configuration,
        accessories: o.accessories,
      })));
      setLoading(false);
    })();
    return () => { active = false; };
  }, [isEdit, id]);

  useEffect(() => {
    if (!mainFile) { setMainPreview(null); return; }
    const url = URL.createObjectURL(mainFile);
    setMainPreview(url);
    return () => { URL.revokeObjectURL(url); };
  }, [mainFile]);

  // ── Bullets ───────────────────────────────────────────────
  function setBulletAt(i: number, v: string) {
    setBullets((prev) => { const n = [...prev]; n[i] = v; return n; });
  }

  // ── Spec item helpers ─────────────────────────────────────
  function addSpecItem() { setSpecItems((p) => [...p, EMPTY_SPEC_ITEM()]); }

  function removeSpecItem(si: number) {
    setSpecItems((p) => p.filter((_, i) => i !== si));
  }

  function setSpecItemName(si: number, v: string) {
    setSpecItems((p) => p.map((s, i) => i === si ? { ...s, item: v } : s));
  }

  function addSpecRow(si: number) {
    setSpecItems((p) => p.map((s, i) =>
      i === si ? { ...s, rows: [...s.rows, { sub_item: "", value: "" }] } : s
    ));
  }

  function removeSpecRow(si: number, ri: number) {
    setSpecItems((p) => p.map((s, i) => {
      if (i !== si) return s;
      const next = s.rows.filter((_, idx) => idx !== ri);
      return { ...s, rows: next.length ? next : [{ sub_item: "", value: "" }] };
    }));
  }

  function setSpecRow(si: number, ri: number, field: keyof SpecRow, value: string) {
    setSpecItems((p) => p.map((s, i) =>
      i === si ? { ...s, rows: s.rows.map((r, idx) => idx === ri ? { ...r, [field]: value } : r) } : s
    ));
  }

  // ── Ordering row helpers ──────────────────────────────────
  function addOrderingRow() { setOrderingRows((p) => [...p, EMPTY_ORDERING_ROW()]); }
  function removeOrderingRow(i: number) { setOrderingRows((p) => p.filter((_, idx) => idx !== i)); }
  function setOrderingField(i: number, field: keyof OrderingRow, v: string) {
    setOrderingRows((p) => p.map((r, idx) => idx === i ? { ...r, [field]: v } : r));
  }

  // ── Submit ────────────────────────────────────────────────
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!isEdit && !mainFile) { setErr("Main image is required"); return; }
    const bClean = bullets.map((s) => s.trim()).filter(Boolean);
    if (bClean.length > 9) { setErr("Maximum 9 bullet points"); return; }

    for (const si of specItems) {
      if (!si.item.trim()) { setErr("Spec item name is required"); return; }
    }

    const techFlat = specsToFlat(specItems);

    const orderFlat = orderingRows.map((r, i) => ({
      product_name: r.product_name.trim(),
      product_description: r.product_description.trim(),
      power_configuration: r.power_configuration.trim(),
      accessories: r.accessories.trim(),
      sort_order: i,
    }));

    const form = new FormData();
    form.set("nama_produk", nama.trim());
    form.set("sku", sku.trim());
    form.set("category", category);
    form.set("subfilter", subfilter.trim());
    form.set("deskripsi", desk.trim());
    form.set("is_new", isNew ? "1" : "0");
    form.set("bullets", JSON.stringify(bClean));
    form.set("technical_specs", JSON.stringify(techFlat));
    form.set("ordering_info", JSON.stringify(orderFlat));
    if (mainFile) form.append("main_image", mainFile);
    for (const f of galleryFiles) form.append("gallery", f);
    for (const f of inBoxFiles) form.append("in_the_box", f);
    if (isEdit) {
      form.set("existing_gallery", JSON.stringify(keepGallery));
      form.set("existing_in_the_box", JSON.stringify(keepInBox));
    }

    if (isEdit && id) {
      const r = await apiVsolUpdateProduct(Number.parseInt(id, 10), form);
      if (r.ok) { setLocation("/admin/vsol"); return; }
      setErr(r.message);
    } else {
      const r = await apiVsolCreateProduct(form);
      if (r.ok) { setLocation("/admin/vsol"); return; }
      setErr(r.message);
    }
  }

  // ── Loading state ─────────────────────────────────────────
  if (loading) {
    return (
      <Layout>
        <div className="container py-20 text-center text-muted-foreground">Loading…</div>
      </Layout>
    );
  }

  // ── Render ────────────────────────────────────────────────
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-2xl font-black mb-6">
          {isEdit ? "Edit V-SOL product" : "Add V-SOL product"}
        </h1>

        {err && (
          <div className="mb-4 text-sm text-red-600 border border-red-200 rounded-lg p-3">{err}</div>
        )}

        <form onSubmit={onSubmit} className="space-y-8">

          {/* ── Basic info ─────────────────────────────────── */}
          <section className="border border-border rounded-2xl p-6 bg-card space-y-5">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Basic Info</h2>

            {isEdit && id && (
              <div className="space-y-2">
                <Label>ID</Label>
                <Input value={id} readOnly className="bg-muted" />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="nama">Product Name *</Label>
              <Input id="nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sku">SKU *</Label>
              <Input id="sku" value={sku} onChange={(e) => setSku(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label>Category *</Label>
              <select
                className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {VSOL_DCS_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sub">Subfilter (optional)</Label>
              <Input id="sub" value={subfilter} onChange={(e) => setSubfilter(e.target.value)} placeholder="e.g. GPON, EPON" />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="isnew" checked={isNew} onChange={(e) => setIsNew(e.target.checked)} className="h-4 w-4" />
              <Label htmlFor="isnew">Mark as new product (NEW badge)</Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="desk">Description</Label>
              <Textarea id="desk" value={desk} onChange={(e) => setDesk(e.target.value)} rows={5} />
            </div>

            <div className="space-y-2">
              <Label>Bullet Points (max. 9, optional)</Label>
              <div className="space-y-2">
                {bullets.map((b, i) => (
                  <Input key={i} value={b} placeholder={`Point ${i + 1} (optional)`} onChange={(e) => setBulletAt(i, e.target.value)} />
                ))}
              </div>
            </div>
          </section>

          {/* ── Images ────────────────────────────────────── */}
          <section className="border border-border rounded-2xl p-6 bg-card space-y-5">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Images</h2>

            <div className="space-y-2">
              <Label>Main Image {isEdit ? "" : "*"}</Label>
              {existingMain && !mainFile && (
                <img src={existingMain} alt="" className="h-32 w-32 object-contain border rounded-md mb-2" />
              )}
              {mainPreview && (
                <img src={mainPreview} alt="" className="h-32 w-32 object-contain border rounded-md mb-2" />
              )}
              <Input type="file" accept="image/*" onChange={(e) => setMainFile(e.target.files?.[0] ?? null)} />
              {isEdit && <p className="text-xs text-muted-foreground">Leave blank to keep the current image</p>}
            </div>

            <div className="space-y-2">
              <Label>Product Gallery (optional)</Label>
              {isEdit && keepGallery.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {keepGallery.map((src) => (
                    <div key={src} className="relative">
                      <img src={src} alt="" className="h-20 w-20 object-cover rounded border" />
                      <button
                        type="button"
                        className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs"
                        onClick={() => setKeepGallery((k) => k.filter((p) => p !== src))}
                      >×</button>
                    </div>
                  ))}
                </div>
              )}
              <Input type="file" accept="image/*" multiple onChange={(e) => setGalleryFiles(e.target.files ? Array.from(e.target.files) : [])} />
            </div>

            <div className="space-y-2">
              <Label>In The Box — Package Content Photos (optional)</Label>
              {isEdit && keepInBox.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {keepInBox.map((src) => (
                    <div key={src} className="relative">
                      <img src={src} alt="" className="h-20 w-20 object-cover rounded border" />
                      <button
                        type="button"
                        className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs"
                        onClick={() => setKeepInBox((k) => k.filter((p) => p !== src))}
                      >×</button>
                    </div>
                  ))}
                </div>
              )}
              <Input type="file" accept="image/*" multiple onChange={(e) => setInBoxFiles(e.target.files ? Array.from(e.target.files) : [])} />
            </div>
          </section>

          {/* ── Technical Specifications ──────────────────── */}
          <section className="border border-border rounded-2xl p-6 bg-card space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Technical Specifications</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Each "Item" can have a direct value, or multiple sub-item rows.
                  Leave Sub-item blank for a direct value (e.g. Chassis → 1U 19Inch).
                </p>
              </div>
              <Button type="button" variant="outline" size="sm" onClick={addSpecItem}>+ Add Item</Button>
            </div>

            {specItems.length === 0 && (
              <p className="text-xs text-muted-foreground">No items yet. Click "Add Item" to start.</p>
            )}

            <div className="space-y-4">
              {specItems.map((si, siIdx) => (
                <div key={siIdx} className="rounded-xl border border-border p-4 space-y-3 bg-background">
                  {/* Item name row */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1">
                      <Label className="text-xs">Item (group label)</Label>
                      <Input
                        value={si.item}
                        placeholder="e.g. Chassis, Uplink Port, Power"
                        onChange={(e) => setSpecItemName(siIdx, e.target.value)}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="mt-5 text-destructive hover:text-destructive"
                      onClick={() => removeSpecItem(siIdx)}
                    >
                      Remove Item
                    </Button>
                  </div>

                  {/* Sub-item rows */}
                  <div className="space-y-2 pl-4 border-l-2 border-border">
                    <div className="grid grid-cols-[1fr_1fr_auto] gap-2 mb-1">
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">Sub-item (optional)</span>
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">Value</span>
                      <span />
                    </div>
                    {si.rows.map((row, ri) => (
                      <div key={ri} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center">
                        <Input
                          value={row.sub_item}
                          placeholder="e.g. QTY, RJ45(GE) — or leave blank"
                          onChange={(e) => setSpecRow(siIdx, ri, "sub_item", e.target.value)}
                        />
                        <Input
                          value={row.value}
                          placeholder="e.g. 4, 1U 19Inch"
                          onChange={(e) => setSpecRow(siIdx, ri, "value", e.target.value)}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeSpecRow(siIdx, ri)}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={() => addSpecRow(siIdx)}
                    >
                      + Add row
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Ordering Information ──────────────────────── */}
          <section className="border border-border rounded-2xl p-6 bg-card space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Ordering Information</h2>
                <p className="text-xs text-muted-foreground mt-1">Optional. Each row is one orderable configuration.</p>
              </div>
              <Button type="button" variant="outline" size="sm" onClick={addOrderingRow}>+ Add Row</Button>
            </div>

            {orderingRows.length === 0 && (
              <p className="text-xs text-muted-foreground">No rows yet. Click "Add Row" to start.</p>
            )}

            {orderingRows.length > 0 && (
              <div className="space-y-3">
                {/* Header */}
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-2 px-1">
                  {["Product Name", "Product Description", "Power Config.", "Accessories", ""].map((h) => (
                    <span key={h} className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">{h}</span>
                  ))}
                </div>
                {/* Rows */}
                {orderingRows.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-2 items-start">
                    <Input
                      value={row.product_name}
                      placeholder="Product Name"
                      onChange={(e) => setOrderingField(i, "product_name", e.target.value)}
                    />
                    <Input
                      value={row.product_description}
                      placeholder="Description"
                      onChange={(e) => setOrderingField(i, "product_description", e.target.value)}
                    />
                    <Input
                      value={row.power_configuration}
                      placeholder="e.g. AC/DC"
                      onChange={(e) => setOrderingField(i, "power_configuration", e.target.value)}
                    />
                    <Input
                      value={row.accessories}
                      placeholder="e.g. Power Cord"
                      onChange={(e) => setOrderingField(i, "accessories", e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-0 text-destructive hover:text-destructive"
                      onClick={() => removeOrderingRow(i)}
                    >
                      ×
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ── Actions ───────────────────────────────────── */}
          <div className="flex gap-3">
            <Button type="submit">Save</Button>
            <Button type="button" variant="outline" onClick={() => setLocation("/admin/vsol")}>Cancel</Button>
            <Button type="button" variant="ghost" asChild>
              <a href="/">Back to website</a>
            </Button>
          </div>

        </form>
      </div>
    </Layout>
  );
}

// ─── ROUTE WRAPPER ───────────────────────────────────────────

export default function VsolProductForm() {
  const [matchNew] = useRoute("/admin/vsol/new");
  const [matchEdit, params] = useRoute("/admin/vsol/:id/edit");
  if (matchNew) {
    return <VsolProtectedRoute><ProductFormBody /></VsolProtectedRoute>;
  }
  if (matchEdit && params.id) {
    return <VsolProtectedRoute><ProductFormBody id={params.id} /></VsolProtectedRoute>;
  }
  return null;
}
