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
  const [specsText, setSpecsText] = useState("");
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
      setSpecsText(specs && typeof specs === "object" ? JSON.stringify(specs, null, 2) : "");
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

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!isEdit && !mainFile) {
      setErr("Upload gambar utama wajib");
      return;
    }
    const bClean = bullets.map((s) => s.trim()).filter(Boolean);
    if (bClean.length > 9) {
      setErr("Maksimal 9 bullet");
      return;
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
    if (specsText.trim()) {
      try {
        const parsed = JSON.parse(specsText) as unknown;
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          form.set("specifications", JSON.stringify(parsed));
        } else {
          setErr("Specifications harus berupa JSON object (key-value)");
          return;
        }
      } catch {
        setErr("Specifications JSON tidak valid");
        return;
      }
    } else {
      form.set("specifications", "");
    }
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
        setLocation("/mikrotik-dcs/admin");
        return;
      }
      setErr(r.message);
    } else {
      const r = await apiCreateProduct(form);
      if (r.ok) {
        setLocation("/mikrotik-dcs/admin");
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
          <div className="space-y-2">
            <Label htmlFor="specs">Specifications (JSON)</Label>
            <Textarea
              id="specs"
              value={specsText}
              onChange={(e) => setSpecsText(e.target.value)}
              rows={6}
              placeholder={`{\n  "CPU": "Dual-core",\n  "RAM": "256MB"\n}`}
            />
            <p className="text-xs text-muted-foreground">
              Format harus JSON object key-value.
            </p>
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
            <Button type="button" variant="outline" onClick={() => setLocation("/mikrotik-dcs/admin")}>
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
  const [matchNew] = useRoute("/mikrotik-dcs/admin/new");
  const [matchEdit, params] = useRoute("/mikrotik-dcs/admin/:id/edit");
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
