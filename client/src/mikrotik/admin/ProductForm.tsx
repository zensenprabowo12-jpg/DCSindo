import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MIKROTIK_DCS_CATEGORIES } from "../categories";
import { apiAdminProduct, apiCreateProduct, apiUpdateProduct } from "../api";
import MikrotikDcsProtectedRoute from "./ProtectedRoute";
import type { MikrotikDcsProductDetail } from "../types";

const EMPTY_BULLETS = () => Array.from({ length: 9 }, () => "");
const EMPTY_SPEC_SECTION = () => ({ title: "", items: [{ label: "", value: "" }] });

function ProductFormBody({ id }: { id?: string }) {
  const [, setLocation] = useLocation();
  const isEdit = Boolean(id);
  const [loading, setLoading] = useState(isEdit);
  const [err, setErr] = useState<string | null>(null);

  const [nama, setNama] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState<string>(MIKROTIK_DCS_CATEGORIES[0]);
  const [desk, setDesk] = useState("");
  const [bullets, setBullets] = useState<string[]>(EMPTY_BULLETS);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDesc, setVideoDesc] = useState("");
  const [specSections, setSpecSections] = useState<
    { title: string; items: { label: string; value: string }[] }[]
  >([EMPTY_SPEC_SECTION()]);
  const [technicalItems, setTechnicalItems] = useState<
    { title: string; content: string }[]
  >([]);
  const [mainFile, setMainFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [mainPreview, setMainPreview] = useState<string | null>(null);
  const [existingMain, setExistingMain] = useState<string | null>(null);
  const [keepGallery, setKeepGallery] = useState<string[]>([]);

  useEffect(() => {
    if (!isEdit || !id) return;
    let c = true;
    void (async () => {
      setLoading(true);
      const n = Number.parseInt(id, 10);
      const r = await apiAdminProduct(n);
      if (!c) return;
      if (!r.ok) {
        setErr(r.message);
        setLoading(false);
        return;
      }
      const d: MikrotikDcsProductDetail = r.data;
      setNama(d.nama_produk);
      setSku(d.sku);
      if (d.category) setCategory(d.category);
      setDesk(d.deskripsi);
      const b = [...d.bullet_points, ...Array(9).fill("")].slice(0, 9) as string[];
      setBullets(b.map((x) => (x == null ? "" : String(x))));
      setExistingMain(d.main_image);
      setKeepGallery(d.gallery.map((g) => g.image_path));
      setVideoUrl(String((d as any).video_url ?? ""));
      setVideoTitle(String((d as any).video_title ?? ""));
      setVideoDesc(String((d as any).video_description ?? ""));
      const specs = (d as any).specifications as unknown;
      const loadedSections = Array.isArray(specs)
        ? specs
            .map((section) => {
              if (!section || typeof section !== "object") return null;
              const s = section as Record<string, unknown>;
              const title = String(s.title ?? "");
              const itemsRaw = Array.isArray(s.items) ? s.items : [];
              const items = itemsRaw
                .map((item) => {
                  if (!item || typeof item !== "object") return null;
                  const row = item as Record<string, unknown>;
                  return {
                    label: String(row.label ?? ""),
                    value: String(row.value ?? ""),
                  };
                })
                .filter((item): item is { label: string; value: string } => Boolean(item));
              return { title, items: items.length ? items : [{ label: "", value: "" }] };
            })
            .filter(
              (
                section,
              ): section is { title: string; items: { label: string; value: string }[] } =>
                Boolean(section),
            )
        : [];
      setSpecSections(loadedSections.length ? loadedSections : [EMPTY_SPEC_SECTION()]);
      const loadedTechnical = Array.isArray((d as any).technical_items)
        ? ((d as any).technical_items as Array<{ title?: unknown; content?: unknown }>)
            .map((x) => ({
              title: String(x?.title ?? ""),
              content: String(x?.content ?? ""),
            }))
            .filter((x) => x.title || x.content)
        : [];
      setTechnicalItems(loadedTechnical);
      setLoading(false);
    })();
    return () => {
      c = false;
    };
  }, [isEdit, id]);

  useEffect(() => {
    if (!mainFile) {
      setMainPreview(null);
      return;
    }
    const u = URL.createObjectURL(mainFile);
    setMainPreview(u);
    return () => {
      URL.revokeObjectURL(u);
    };
  }, [mainFile]);

  function setBulletAt(i: number, v: string) {
    setBullets((prev) => {
      const n = [...prev];
      n[i] = v;
      return n;
    });
  }

  function removeFromGallery(path: string) {
    setKeepGallery((k) => k.filter((p) => p !== path));
  }

  function addSpecSection() {
    setSpecSections((prev) => [...prev, EMPTY_SPEC_SECTION()]);
  }

  function removeSpecSection(sectionIndex: number) {
    setSpecSections((prev) => prev.filter((_, i) => i !== sectionIndex));
  }

  function setSpecSectionTitle(sectionIndex: number, title: string) {
    setSpecSections((prev) =>
      prev.map((section, i) => (i === sectionIndex ? { ...section, title } : section)),
    );
  }

  function addSpecItem(sectionIndex: number) {
    setSpecSections((prev) =>
      prev.map((section, i) =>
        i === sectionIndex
          ? { ...section, items: [...section.items, { label: "", value: "" }] }
          : section,
      ),
    );
  }

  function removeSpecItem(sectionIndex: number, itemIndex: number) {
    setSpecSections((prev) =>
      prev.map((section, i) => {
        if (i !== sectionIndex) return section;
        const nextItems = section.items.filter((_, idx) => idx !== itemIndex);
        return { ...section, items: nextItems.length ? nextItems : [{ label: "", value: "" }] };
      }),
    );
  }

  function setSpecItemAt(
    sectionIndex: number,
    itemIndex: number,
    field: "label" | "value",
    value: string,
  ) {
    setSpecSections((prev) =>
      prev.map((section, i) =>
        i === sectionIndex
          ? {
              ...section,
              items: section.items.map((item, idx) =>
                idx === itemIndex ? { ...item, [field]: value } : item,
              ),
            }
          : section,
      ),
    );
  }

  function addTechnicalItem() {
    setTechnicalItems((prev) => [...prev, { title: "", content: "" }]);
  }

  function removeTechnicalItem(index: number) {
    setTechnicalItems((prev) => prev.filter((_, i) => i !== index));
  }

  function setTechnicalItemAt(
    index: number,
    field: "title" | "content",
    value: string,
  ) {
    setTechnicalItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!isEdit && !mainFile) {
      setErr("Upload gambar utama wajib");
      return;
    }
    const bClean = bullets.map((s) => s.trim()).filter(Boolean);
    const specificationSections = specSections
      .map((section) => ({
        title: section.title.trim(),
        items: (section.items ?? [])
          .map((item) => ({
            label: item.label.trim(),
            value: item.value.trim(),
          }))
          .filter((item) => item.label || item.value),
      }))
      .filter((section) => section.title || section.items.length > 0);
    const technicalClean = technicalItems
      .map((item, idx) => ({
        title: item.title.trim(),
        content: item.content.trim(),
        sort_order: idx,
      }))
      .filter((item) => item.title || item.content);
    if (bClean.length > 9) {
      setErr("Maksimal 9 bullet");
      return;
    }
    for (const section of specificationSections) {
      if (!section.title) {
        setErr("Judul section specifications wajib diisi");
        return;
      }
      if (!section.items.length) {
        setErr("Setiap section specifications minimal punya 1 item");
        return;
      }
      for (const item of section.items) {
        if (!item.label || !item.value) {
          setErr("Kolom point dan jawaban pada specifications wajib diisi");
          return;
        }
      }
    }
    for (const item of technicalClean) {
      if (!item.title || !item.content) {
        setErr("Semua technical item wajib isi title dan content");
        return;
      }
    }

    const form = new FormData();
    form.set("nama_produk", nama.trim());
    form.set("sku", sku.trim());
    form.set("category", category);
    form.set("deskripsi", desk.trim());
    form.set("bullets", JSON.stringify(bClean));
    form.set("video_url", videoUrl.trim());
    form.set("video_title", videoTitle.trim());
    form.set("video_description", videoDesc.trim());
    form.set("technical_items", JSON.stringify(technicalClean));
    const specPayload = JSON.stringify(specificationSections);
    form.set("specification_sections", specPayload);
    // Alias: beberapa stack multipart hanya meneruskan field tertentu
    form.set("specifications", specPayload);
    if (mainFile) {
      form.append("main_image", mainFile);
    }
    for (const f of galleryFiles) {
      form.append("gallery", f);
    }
    if (isEdit && id) {
      form.set("existing_gallery", JSON.stringify(keepGallery));
    }

    if (isEdit && id) {
      const n = Number.parseInt(id, 10);
      const r = await apiUpdateProduct(n, form);
      if (r.ok) {
        setLocation("/admin/mikrotik");
        return;
      }
      setErr(r.message);
    } else {
      const r = await apiCreateProduct(form);
      if (r.ok) {
        setLocation("/admin/mikrotik");
        return;
      }
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
          {isEdit ? "Edit produk" : "Tambah produk"}
        </h1>
        {err && (
          <div className="mb-4 text-sm text-red-600 border border-red-200 rounded-lg p-3">
            {err}
          </div>
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
            <select
              className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {MIKROTIK_DCS_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="d">Deskripsi *</Label>
            <Textarea
              id="d"
              value={desk}
              onChange={(e) => setDesk(e.target.value)}
              rows={5}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vurl">Video URL (YouTube)</Label>
            <Input
              id="vurl"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vtitle">Video Title</Label>
            <Input
              id="vtitle"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              placeholder="Judul video"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vdesc">Video Description</Label>
            <Textarea
              id="vdesc"
              value={videoDesc}
              onChange={(e) => setVideoDesc(e.target.value)}
              rows={3}
              placeholder="Deskripsi singkat video"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Specifications</Label>
              <Button type="button" variant="outline" onClick={addSpecSection}>
                + Tambah section
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Kolom kiri = judul section, kolom tengah = point, kolom kanan = jawaban.
            </p>
            <div className="space-y-3">
              {specSections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="rounded-xl border border-border p-3 space-y-3 bg-background">
                  <div className="flex items-center justify-between gap-3">
                    <Input
                      value={section.title}
                      placeholder="Judul kiri (contoh: SPECIFICATIONS)"
                      onChange={(e) => setSpecSectionTitle(sectionIdx, e.target.value)}
                    />
                    <Button type="button" variant="ghost" onClick={() => removeSpecSection(sectionIdx)}>
                      Hapus section
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-2">
                        <Input
                          value={item.label}
                          placeholder="Point (kolom tengah)"
                          onChange={(e) => setSpecItemAt(sectionIdx, itemIdx, "label", e.target.value)}
                        />
                        <Input
                          value={item.value}
                          placeholder="Jawaban (kolom kanan)"
                          onChange={(e) => setSpecItemAt(sectionIdx, itemIdx, "value", e.target.value)}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => removeSpecItem(sectionIdx, itemIdx)}
                        >
                          Hapus
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button type="button" variant="secondary" onClick={() => addSpecItem(sectionIdx)}>
                    + Tambah point
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Technical Dropdown Items</Label>
              <Button type="button" variant="outline" onClick={addTechnicalItem}>
                + Tambah item
              </Button>
            </div>
            {technicalItems.length === 0 && (
              <p className="text-xs text-muted-foreground">
                Belum ada item. Tambahkan item untuk section Technical accordion di halaman produk.
              </p>
            )}
            <div className="space-y-3">
              {technicalItems.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-border p-3 space-y-2 bg-background">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Item {idx + 1}</p>
                    <Button
                      type="button"
                      variant="ghost"
                      className="text-destructive hover:text-destructive"
                      onClick={() => removeTechnicalItem(idx)}
                    >
                      Hapus
                    </Button>
                  </div>
                  <Input
                    value={item.title}
                    placeholder="Title (contoh: Throughput)"
                    onChange={(e) => setTechnicalItemAt(idx, "title", e.target.value)}
                  />
                  <Textarea
                    value={item.content}
                    rows={3}
                    placeholder="Content"
                    onChange={(e) => setTechnicalItemAt(idx, "content", e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Bullet (maks. 9)</Label>
            <div className="space-y-2">
              {bullets.map((b, i) => (
                <Input
                  key={i}
                  value={b}
                  placeholder={`Point ${i + 1} (opsional)`}
                  onChange={(e) => setBulletAt(i, e.target.value)}
                />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Gambar utama {isEdit ? "" : "*"}</Label>
            {existingMain && !mainFile && (
              <img
                src={existingMain}
                alt=""
                className="h-32 w-32 object-contain border rounded-md mb-2"
              />
            )}
            {mainPreview && <img src={mainPreview} alt="" className="h-32 w-32 object-contain border rounded-md mb-2" />}
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setMainFile(e.target.files?.[0] ?? null)}
            />
            {isEdit && <p className="text-xs text-muted-foreground">Kosongkan jika tidak ganti gambar</p>}
          </div>
          <div className="space-y-2">
            <Label>Galeri (banyak file)</Label>
            {isEdit && keepGallery.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {keepGallery.map((src) => (
                  <div key={src} className="relative group">
                    <img src={src} alt="" className="h-20 w-20 object-cover rounded border" />
                    <button
                      type="button"
                      className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs"
                      onClick={() => removeFromGallery(src)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const f = e.target.files;
                setGalleryFiles(f ? Array.from(f) : []);
              }}
            />
          </div>
          <div className="flex gap-3">
            <Button type="submit">Simpan</Button>
            <Button type="button" variant="outline" onClick={() => setLocation("/admin/mikrotik")}>
              Batal
            </Button>
            <Button type="button" variant="ghost" asChild>
              <a href="/">Ke website</a>
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default function ProductForm() {
  const [matchNew] = useRoute("/admin/mikrotik/new");
  const [matchEdit, params] = useRoute("/admin/mikrotik/:id/edit");
  if (matchNew) {
    return (
      <MikrotikDcsProtectedRoute>
        <ProductFormBody />
      </MikrotikDcsProtectedRoute>
    );
  }
  if (matchEdit && params.id) {
    return (
      <MikrotikDcsProtectedRoute>
        <ProductFormBody id={params.id} />
      </MikrotikDcsProtectedRoute>
    );
  }
  return null;
}
