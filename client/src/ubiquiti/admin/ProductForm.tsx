import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UBIQUITI_DCS_CATEGORIES } from "../categories";
import {
  apiUbiquitiAdminProduct,
  apiUbiquitiAdminProducts,
  apiUbiquitiCreateProduct,
  apiUbiquitiUpdateProduct,
} from "../api";
import UbiquitiProtectedRoute from "./ProtectedRoute";
import type { UbiquitiDcsProduct, UbiquitiDcsProductDetail } from "../types";

const EMPTY_BULLETS = () => Array.from({ length: 9 }, () => "");

type TechItem = { label: string; value: string; is_check: boolean };
type TechSection = { section_title: string; items: TechItem[] };

const EMPTY_TECH_SECTION = (): TechSection => ({
  section_title: "",
  items: [{ label: "", value: "", is_check: false }],
});

function ProductFormBody({ id }: { id?: string }) {
  const [, setLocation] = useLocation();
  const isEdit = Boolean(id);
  const [loading, setLoading] = useState(isEdit);
  const [err, setErr] = useState<string | null>(null);

  const [nama, setNama] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState<string>(UBIQUITI_DCS_CATEGORIES[0]);
  const [subfilter, setSubfilter] = useState("");
  const [desk, setDesk] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [bullets, setBullets] = useState<string[]>(EMPTY_BULLETS());

  const [mainFile, setMainFile] = useState<File | null>(null);
  const [mainPreview, setMainPreview] = useState<string | null>(null);
  const [existingMain, setExistingMain] = useState<string | null>(null);

  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [keepGallery, setKeepGallery] = useState<string[]>([]);

  const [overviewImgFiles, setOverviewImgFiles] = useState<File[]>([]);
  const [keepOverviewImgs, setKeepOverviewImgs] = useState<string[]>([]);

  const [overviewVidFiles, setOverviewVidFiles] = useState<File[]>([]);
  const [keepOverviewVids, setKeepOverviewVids] = useState<string[]>([]);

  const [techSections, setTechSections] = useState<TechSection[]>([]);

  const [inBoxFiles, setInBoxFiles] = useState<File[]>([]);
  const [keepInBox, setKeepInBox] = useState<string[]>([]);

  const [allProducts, setAllProducts] = useState<UbiquitiDcsProduct[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);

  useEffect(() => {
    if (!isEdit || !id) return;
    let active = true;
    void (async () => {
      setLoading(true);
      const n = Number.parseInt(id, 10);
      const r = await apiUbiquitiAdminProduct(n);
      if (!active) return;
      if (!r.ok) { setErr(r.message); setLoading(false); return; }
      const d: UbiquitiDcsProductDetail = r.data;
      setNama(d.nama_produk);
      setSku(d.sku);
      setCategory(d.category);
      setSubfilter(d.subfilter ?? "");
      setDesk(d.deskripsi);
      setIsNew(d.is_new);
      const b = [...d.bullet_points, ...Array(9).fill("")].slice(0, 9) as string[];
      setBullets(b.map((x) => (x == null ? "" : String(x))));
      setExistingMain(d.main_image);
      setKeepGallery((d.gallery ?? []).map((g) => g.image_path));
      setKeepOverviewImgs((d.overview_images ?? []).map((x) => x.image_path));
      setKeepOverviewVids((d.overview_videos ?? []).map((x) => x.video_path));
      setKeepInBox((d.in_the_box ?? []).map((x) => x.image_path));
      setSelectedAddons((d.addons ?? []).map((a) => a.addon_product_id));

      const specs = d.technical_specs ?? [];
      const map = new Map<string, TechItem[]>();
      specs.forEach((s) => {
        if (!map.has(s.section_title)) map.set(s.section_title, []);
        map.get(s.section_title)!.push({ label: s.label, value: s.value, is_check: s.is_check });
      });
      const loaded: TechSection[] = Array.from(map.entries()).map(([section_title, items]) => ({ section_title, items }));
      setTechSections(loaded);
      setLoading(false);
    })();
    return () => { active = false; };
  }, [isEdit, id]);

  useEffect(() => {
    void (async () => {
      const r = await apiUbiquitiAdminProducts();
      if (r.ok) {
        const currentId = id ? Number.parseInt(id, 10) : -1;
        setAllProducts(r.data.filter((p) => p.id !== currentId));
      }
    })();
  }, [id]);

  useEffect(() => {
    if (!mainFile) { setMainPreview(null); return; }
    const url = URL.createObjectURL(mainFile);
    setMainPreview(url);
    return () => { URL.revokeObjectURL(url); };
  }, [mainFile]);

  function setBulletAt(i: number, v: string) {
    setBullets((prev) => { const n = [...prev]; n[i] = v; return n; });
  }

  function addTechSection() { setTechSections((p) => [...p, EMPTY_TECH_SECTION()]); }
  function removeTechSection(si: number) { setTechSections((p) => p.filter((_, i) => i !== si)); }
  function setTechSectionTitle(si: number, v: string) {
    setTechSections((p) => p.map((s, i) => i === si ? { ...s, section_title: v } : s));
  }
  function addTechItem(si: number) {
    setTechSections((p) => p.map((s, i) =>
      i === si ? { ...s, items: [...s.items, { label: "", value: "", is_check: false }] } : s
    ));
  }
  function removeTechItem(si: number, ii: number) {
    setTechSections((p) => p.map((s, i) => {
      if (i !== si) return s;
      const next = s.items.filter((_, idx) => idx !== ii);
      return { ...s, items: next.length ? next : [{ label: "", value: "", is_check: false }] };
    }));
  }
  function setTechItemField(si: number, ii: number, field: keyof TechItem, value: string | boolean) {
    setTechSections((p) => p.map((s, i) =>
      i === si ? { ...s, items: s.items.map((item, idx) => idx === ii ? { ...item, [field]: value } : item) } : s
    ));
  }
  function toggleAddon(pid: number) {
    setSelectedAddons((prev) => prev.includes(pid) ? prev.filter((x) => x !== pid) : [...prev, pid]);
  }

  function getUploadedFiles(fileList: File[]): File[] { return fileList; }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!isEdit && !mainFile) { setErr("Gambar utama wajib diupload"); return; }
    const bClean = bullets.map((s) => s.trim()).filter(Boolean);
    if (bClean.length > 9) { setErr("Maksimal 9 bullet"); return; }

    const techFlat: { section_title: string; label: string; value: string; is_check: boolean; sort_order: number }[] = [];
    let so = 0;
    for (const section of techSections) {
      if (!section.section_title.trim()) { setErr("Judul section Technical wajib diisi"); return; }
      for (const item of section.items) {
        if (!item.label.trim()) { setErr("Label pada Technical wajib diisi"); return; }
        techFlat.push({ section_title: section.section_title.trim(), label: item.label.trim(), value: item.value.trim(), is_check: item.is_check, sort_order: so++ });
      }
    }

    const form = new FormData();
    form.set("nama_produk", nama.trim());
    form.set("sku", sku.trim());
    form.set("category", category);
    form.set("subfilter", subfilter.trim());
    form.set("deskripsi", desk.trim());
    form.set("is_new", isNew ? "1" : "0");
    form.set("bullets", JSON.stringify(bClean));
    form.set("technical_specs", JSON.stringify(techFlat));
    form.set("addon_ids", JSON.stringify(selectedAddons));
    if (mainFile) form.append("main_image", mainFile);
    for (const f of galleryFiles) form.append("gallery", f);
    for (const f of overviewImgFiles) form.append("overview_images", f);
    for (const f of overviewVidFiles) form.append("overview_videos", f);
    for (const f of inBoxFiles) form.append("in_the_box", f);
    if (isEdit) {
      form.set("existing_gallery", JSON.stringify(keepGallery));
      form.set("existing_overview_images", JSON.stringify(keepOverviewImgs));
      form.set("existing_overview_videos", JSON.stringify(keepOverviewVids));
      form.set("existing_in_the_box", JSON.stringify(keepInBox));
    }

    if (isEdit && id) {
      const r = await apiUbiquitiUpdateProduct(Number.parseInt(id, 10), form);
      if (r.ok) { setLocation("/admin/ubiquiti"); return; }
      setErr(r.message);
    } else {
      const r = await apiUbiquitiCreateProduct(form);
      if (r.ok) { setLocation("/admin/ubiquiti"); return; }
      setErr(r.message);
    }
  }

  if (loading) {
    return (
      <Layout>
        <div className="container py-20 text-center text-muted-foreground">Memuat…</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-2xl font-black mb-6">
          {isEdit ? "Edit produk Ubiquiti" : "Tambah produk Ubiquiti"}
        </h1>
        {err && (
          <div className="mb-4 text-sm text-red-600 border border-red-200 rounded-lg p-3">{err}</div>
        )}
        <form onSubmit={onSubmit} className="space-y-6 border border-border rounded-2xl p-6 bg-card">
          {isEdit && id && (
            <div className="space-y-2">
              <Label>ID</Label>
              <Input value={id} readOnly className="bg-muted" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="nama">Nama produk *</Label>
            <Input id="nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sku">SKU *</Label>
            <Input id="sku" value={sku} onChange={(e) => setSku(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label>Kategori *</Label>
            <select className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm" value={category} onChange={(e) => setCategory(e.target.value)}>
              {UBIQUITI_DCS_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sub">Subfilter (optional)</Label>
            <Input id="sub" value={subfilter} onChange={(e) => setSubfilter(e.target.value)} placeholder="contoh: Enterprise Scale" />
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="isnew" checked={isNew} onChange={(e) => setIsNew(e.target.checked)} className="h-4 w-4" />
            <Label htmlFor="isnew">Tandai sebagai produk baru (NEW badge)</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="desk">Deskripsi *</Label>
            <Textarea id="desk" value={desk} onChange={(e) => setDesk(e.target.value)} rows={5} required />
          </div>
          <div className="space-y-2">
            <Label>Bullet Points (max. 9, optional)</Label>
            <div className="space-y-2">
              {bullets.map((b, i) => (
                <Input key={i} value={b} placeholder={`Point ${i + 1} (optional)`} onChange={(e) => setBulletAt(i, e.target.value)} />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Gambar utama {isEdit ? "" : "*"}</Label>
            {existingMain && !mainFile && <img src={existingMain} alt="" className="h-32 w-32 object-contain border rounded-md mb-2" />}
            {mainPreview && <img src={mainPreview} alt="" className="h-32 w-32 object-contain border rounded-md mb-2" />}
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
                    <button type="button" className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs" onClick={() => setKeepGallery((k) => k.filter((p) => p !== src))}>x</button>
                  </div>
                ))}
              </div>
            )}
            <Input type="file" accept="image/*" multiple onChange={(e) => setGalleryFiles(e.target.files ? Array.from(e.target.files) : [])} />
          </div>
          <div className="space-y-2">
            <Label>Overview Images (optional)</Label>
            {isEdit && keepOverviewImgs.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {keepOverviewImgs.map((src) => (
                  <div key={src} className="relative">
                    <img src={src} alt="" className="h-20 w-20 object-cover rounded border" />
                    <button type="button" className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs" onClick={() => setKeepOverviewImgs((k) => k.filter((p) => p !== src))}>x</button>
                  </div>
                ))}
              </div>
            )}
            <Input type="file" accept="image/*" multiple onChange={(e) => setOverviewImgFiles(e.target.files ? Array.from(e.target.files) : [])} />
          </div>
          <div className="space-y-2">
            <Label>Overview Videos (optional)</Label>
            {isEdit && keepOverviewVids.length > 0 && (
              <div className="flex flex-col gap-1 mb-2">
                {keepOverviewVids.map((src) => (
                  <div key={src} className="flex items-center gap-2 border rounded p-2 text-sm">
                    <span className="truncate flex-1">{src}</span>
                    <button type="button" className="text-destructive text-xs" onClick={() => setKeepOverviewVids((k) => k.filter((p) => p !== src))}>Hapus</button>
                  </div>
                ))}
              </div>
            )}
            <Input type="file" accept="video/*" multiple onChange={(e) => setOverviewVidFiles(e.target.files ? Array.from(e.target.files) : [])} />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label>Technical Specifications (optional)</Label>
                <p className="text-xs text-muted-foreground mt-1">Centang "Check" jika value hanya tanda centang.</p>
              </div>
              <Button type="button" variant="outline" onClick={addTechSection}>+ Tambah section</Button>
            </div>
            {techSections.length === 0 && <p className="text-xs text-muted-foreground">Belum ada section.</p>}
            <div className="space-y-4">
              {techSections.map((section, si) => (
                <div key={si} className="rounded-xl border border-border p-3 space-y-3 bg-background">
                  <div className="flex items-center justify-between gap-3">
                    <Input value={section.section_title} placeholder="Judul section (contoh: Overview, Hardware)" onChange={(e) => setTechSectionTitle(si, e.target.value)} />
                    <Button type="button" variant="ghost" onClick={() => removeTechSection(si)}>Hapus section</Button>
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_auto] gap-2 items-center">
                        <Input value={item.label} placeholder="Label" onChange={(e) => setTechItemField(si, ii, "label", e.target.value)} />
                        <Input value={item.value} placeholder="Value" disabled={item.is_check} onChange={(e) => setTechItemField(si, ii, "value", e.target.value)} />
                        <div className="flex items-center gap-1">
                          <input type="checkbox" id={`chk-${si}-${ii}`} checked={item.is_check} onChange={(e) => { setTechItemField(si, ii, "is_check", e.target.checked); if (e.target.checked) setTechItemField(si, ii, "value", ""); }} className="h-4 w-4" />
                          <label htmlFor={`chk-${si}-${ii}`} className="text-xs">Check</label>
                        </div>
                        <Button type="button" variant="outline" onClick={() => removeTechItem(si, ii)}>Hapus</Button>
                      </div>
                    ))}
                  </div>
                  <Button type="button" variant="secondary" onClick={() => addTechItem(si)}>+ Tambah item</Button>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>In The Box — Package content photos (optional)</Label>
            {isEdit && keepInBox.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {keepInBox.map((src) => (
                  <div key={src} className="relative">
                    <img src={src} alt="" className="h-20 w-20 object-cover rounded border" />
                    <button type="button" className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs" onClick={() => setKeepInBox((k) => k.filter((p) => p !== src))}>x</button>
                  </div>
                ))}
              </div>
            )}
            <Input type="file" accept="image/*" multiple onChange={(e) => setInBoxFiles(e.target.files ? Array.from(e.target.files) : [])} />
          </div>
          <div className="space-y-3">
            <Label>Add Ons (optional)</Label>
            <p className="text-xs text-muted-foreground">Select other Ubiquiti products to add as add-ons for this product.</p>
            {allProducts.length === 0 ? (
              <p className="text-xs text-muted-foreground italic">No other products available.</p>
            ) : (
              <div className="max-h-48 overflow-y-auto border border-border rounded-lg p-2 space-y-1">
                {allProducts.map((p) => (
                  <label key={p.id} className="flex items-center gap-3 cursor-pointer hover:bg-muted rounded px-2 py-1">
                    <input type="checkbox" checked={selectedAddons.includes(p.id)} onChange={() => toggleAddon(p.id)} className="h-4 w-4" />
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <img src={p.main_image} alt="" className="h-8 w-8 object-contain rounded border flex-shrink-0" />
                      <span className="text-sm truncate">{p.nama_produk}</span>
                      <span className="text-xs text-muted-foreground flex-shrink-0">{p.sku}</span>
                    </div>
                  </label>
                ))}
              </div>
            )}
            {selectedAddons.length > 0 && <p className="text-xs text-muted-foreground">{selectedAddons.length} produk dipilih.</p>}
          </div>
          <div className="flex gap-3">
            <Button type="submit">Simpan</Button>
            <Button type="button" variant="outline" onClick={() => setLocation("/admin/ubiquiti")}>Batal</Button>
            <Button type="button" variant="ghost" asChild><a href="/">Ke website</a></Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default function UbiquitiProductForm() {
  const [matchNew] = useRoute("/admin/ubiquiti/new");
  const [matchEdit, params] = useRoute("/admin/ubiquiti/:id/edit");
  if (matchNew) {
    return <UbiquitiProtectedRoute><ProductFormBody /></UbiquitiProtectedRoute>;
  }
  if (matchEdit && params.id) {
    return <UbiquitiProtectedRoute><ProductFormBody id={params.id} /></UbiquitiProtectedRoute>;
  }
  return null;
}
