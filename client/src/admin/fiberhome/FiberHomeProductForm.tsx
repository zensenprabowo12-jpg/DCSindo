import { useEffect, useState } from "react";
import { Link, useLocation, useRoute } from "wouter";
import { Plus, Trash2 } from "lucide-react";
import AdminNavBar from "../NavBar";
import RequireRole from "../RequireRole";
import {
  apiFiberHomeAddGallery,
  apiFiberHomeCreate,
  apiFiberHomeDeleteGallery,
  apiFiberHomeProduct,
  apiFiberHomeUpdate,
  apiFiberHomeUploadDatasheet,
} from "@/pages/fiberhome/api";
import type {
  FiberHomeApplicationInput,
  FiberHomeGalleryImage,
  FiberHomeSpecInput,
} from "@/pages/fiberhome/types";

const INPUT_CLASS =
  "h-10 w-full rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 px-3 text-sm " +
  "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition";

const TEXTAREA_CLASS =
  "w-full rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 px-3 py-2 text-sm " +
  "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition";

const ADD_BUTTON_CLASS =
  "flex items-center gap-2 h-9 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 " +
  "border border-zinc-700 text-zinc-200 text-sm font-medium transition-colors";

const DELETE_BUTTON_CLASS =
  "shrink-0 h-10 w-10 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 " +
  "text-red-400 flex items-center justify-center transition-colors";

function FiberHomeProductFormInner() {
  const [, setLocation] = useLocation();
  const [isEdit, params] = useRoute("/admin/fiberhome/:id/edit");
  const editId = isEdit ? Number(params?.id) : null;

  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [specs, setSpecs] = useState<FiberHomeSpecInput[]>([
    { label: "", value: "", spec_group: "" },
  ]);
  const [features, setFeatures] = useState<string[]>([""]);
  const [applications, setApplications] = useState<FiberHomeApplicationInput[]>([
    { title: "", description: "" },
  ]);

  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [heroExisting, setHeroExisting] = useState("");

  const [galleryExisting, setGalleryExisting] = useState<FiberHomeGalleryImage[]>([]);
  const [galleryNew, setGalleryNew] = useState<File[]>([]);

  const [datasheetFile, setDatasheetFile] = useState<File | null>(null);
  const [datasheetExisting, setDatasheetExisting] = useState<string | null>(null);

  const [loading, setLoading] = useState(Boolean(editId));
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!editId) return;
    void (async () => {
      const r = await apiFiberHomeProduct(editId);
      if (r.ok) {
        setSku(r.data.sku);
        setName(r.data.name);
        setCategory(r.data.category);
        setDescription(r.data.description);
        setHeroExisting(r.data.image_path);
        setGalleryExisting(r.data.gallery);
        setDatasheetExisting(r.data.datasheet_path);
        setSpecs(
          r.data.technical_specs.length
            ? r.data.technical_specs.map((s) => ({
                label: s.label,
                value: s.value,
                spec_group: s.spec_group,
              }))
            : [{ label: "", value: "", spec_group: "" }],
        );
        setFeatures(
          r.data.features.length ? r.data.features.map((f) => f.feature) : [""],
        );
        setApplications(
          r.data.applications.length
            ? r.data.applications.map((a) => ({ title: a.title, description: a.description }))
            : [{ title: "", description: "" }],
        );
      } else {
        setErr(r.message);
      }
      setLoading(false);
    })();
  }, [editId]);

  function setSpec(i: number, patch: Partial<FiberHomeSpecInput>) {
    setSpecs((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));
  }

  function setApplication(i: number, patch: Partial<FiberHomeApplicationInput>) {
    setApplications((prev) => prev.map((a, idx) => (idx === i ? { ...a, ...patch } : a)));
  }

  async function onDeleteExistingGallery(g: FiberHomeGalleryImage) {
    if (!confirm("Hapus foto ini dari gallery?")) return;
    const r = await apiFiberHomeDeleteGallery(g.id);
    if (!r.ok) {
      alert(r.message);
      return;
    }
    setGalleryExisting((prev) => prev.filter((x) => x.id !== g.id));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!sku.trim() || !name.trim()) {
      setErr("SKU dan Nama produk wajib diisi.");
      return;
    }
    setSaving(true);
    setErr(null);

    const form = new FormData();
    form.append("sku", sku.trim());
    form.append("name", name.trim());
    form.append("category", category.trim());
    form.append("description", description.trim());
    form.append(
      "specs",
      JSON.stringify(specs.filter((s) => s.label.trim()).map((s) => ({
        label: s.label.trim(),
        value: s.value.trim(),
        spec_group: s.spec_group.trim(),
      }))),
    );
    form.append(
      "features",
      JSON.stringify(features.map((f) => f.trim()).filter(Boolean)),
    );
    form.append(
      "applications",
      JSON.stringify(
        applications
          .filter((a) => a.title.trim())
          .map((a) => ({ title: a.title.trim(), description: a.description.trim() })),
      ),
    );
    if (heroFile) form.append("image", heroFile);

    const saved = editId
      ? await apiFiberHomeUpdate(editId, form)
      : await apiFiberHomeCreate(form);

    if (!saved.ok) {
      setSaving(false);
      setErr(saved.message);
      return;
    }

    const productId = editId ?? (saved.data as { id: number }).id;

    // Gallery & datasheet punya endpoint sendiri dan butuh product id,
    // jadi diunggah setelah produknya tersimpan.
    const failed: string[] = [];
    for (const file of galleryNew) {
      const g = await apiFiberHomeAddGallery(productId, file);
      if (!g.ok) failed.push(`${file.name}: ${g.message}`);
    }
    if (datasheetFile) {
      const ds = await apiFiberHomeUploadDatasheet(productId, datasheetFile);
      if (!ds.ok) failed.push(`${datasheetFile.name}: ${ds.message}`);
    }

    setSaving(false);
    if (failed.length) {
      // Produk sudah tersimpan — jangan buang isian form, cukup laporkan file yang gagal.
      setErr(`Produk tersimpan, tapi sebagian file gagal diunggah:\n${failed.join("\n")}`);
      return;
    }
    setLocation("/admin/fiberhome");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <AdminNavBar />
        <div className="container mx-auto px-4 py-20 text-center text-zinc-600 text-sm">
          Memuat…
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link href="/admin/fiberhome">
          <a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Kembali ke daftar produk
          </a>
        </Link>

        <div className="flex items-center gap-2 mt-6 mb-1">
          <span className="w-2 h-2 rounded-full bg-sky-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
            FiberHome
          </span>
        </div>
        <h1 className="text-xl font-bold text-white mb-8">
          {editId ? "Edit Produk" : "Tambah Produk"}
        </h1>

        {err && (
          <div className="mb-6 whitespace-pre-line rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
            {err}
          </div>
        )}

        <form onSubmit={(e) => void onSubmit(e)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                SKU *
              </label>
              <input
                className={INPUT_CLASS}
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="GJYCH-1"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Kategori
              </label>
              <input
                className={INPUT_CLASS}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Drop Cable"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Nama Produk *
            </label>
            <input
              className={INPUT_CLASS}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Drop Fiber G.657A1, 1 Core"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Deskripsi
            </label>
            <textarea
              className={`${TEXTAREA_CLASS} min-h-28`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Foto hero */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Foto Hero
            </label>
            {heroExisting && !heroFile && (
              <img
                src={heroExisting}
                alt=""
                className="w-24 h-24 object-contain rounded-lg bg-zinc-900 border border-zinc-800 p-1"
              />
            )}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => setHeroFile(e.target.files?.[0] ?? null)}
              className="block w-full text-sm text-zinc-400 file:mr-3 file:h-9 file:px-4 file:rounded-lg file:border-0 file:bg-zinc-800 file:text-zinc-200 file:text-sm hover:file:bg-zinc-700"
            />
            {editId && (
              <p className="text-xs text-zinc-600">
                Kosongkan kalau tidak ingin mengganti foto.
              </p>
            )}
          </div>

          {/* Gallery */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Gallery
            </label>
            {galleryExisting.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {galleryExisting.map((g) => (
                  <div key={g.id} className="relative">
                    <img
                      src={g.image_path}
                      alt=""
                      className="w-20 h-20 object-contain rounded-lg bg-zinc-900 border border-zinc-800 p-1"
                    />
                    <button
                      type="button"
                      onClick={() => void onDeleteExistingGallery(g)}
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500/90 hover:bg-red-500 text-white flex items-center justify-center"
                      title="Hapus foto"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={(e) => setGalleryNew(Array.from(e.target.files ?? []))}
              className="block w-full text-sm text-zinc-400 file:mr-3 file:h-9 file:px-4 file:rounded-lg file:border-0 file:bg-zinc-800 file:text-zinc-200 file:text-sm hover:file:bg-zinc-700"
            />
            {galleryNew.length > 0 && (
              <p className="text-xs text-zinc-500">
                {galleryNew.length} foto akan diunggah saat disimpan.
              </p>
            )}
          </div>

          {/* Datasheet */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Datasheet (PDF)
            </label>
            {datasheetExisting && (
              <a
                href={datasheetExisting}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-sky-400 hover:text-sky-300 underline"
              >
                Datasheet saat ini
              </a>
            )}
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setDatasheetFile(e.target.files?.[0] ?? null)}
              className="block w-full text-sm text-zinc-400 file:mr-3 file:h-9 file:px-4 file:rounded-lg file:border-0 file:bg-zinc-800 file:text-zinc-200 file:text-sm hover:file:bg-zinc-700"
            />
          </div>

          {/* Specs */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Spesifikasi Teknis
            </label>
            <div className="space-y-2">
              {specs.map((s, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    className={INPUT_CLASS}
                    value={s.label}
                    onChange={(e) => setSpec(i, { label: e.target.value })}
                    placeholder="Parameter (mis. Fiber Standard)"
                  />
                  <input
                    className={INPUT_CLASS}
                    value={s.value}
                    onChange={(e) => setSpec(i, { value: e.target.value })}
                    placeholder="Nilai (mis. ITU-T G.657A2)"
                  />
                  <input
                    className={`${INPUT_CLASS} sm:w-44 shrink-0`}
                    list="fiberhome-spec-groups"
                    value={s.spec_group}
                    onChange={(e) => setSpec(i, { spec_group: e.target.value })}
                    placeholder="Group"
                  />
                  <button
                    type="button"
                    onClick={() => setSpecs((prev) => prev.filter((_, idx) => idx !== i))}
                    className={DELETE_BUTTON_CLASS}
                    title="Hapus baris"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setSpecs((prev) => [...prev, { label: "", value: "", spec_group: "" }])
              }
              className={ADD_BUTTON_CLASS}
            >
              <Plus className="w-4 h-4" />
              Tambah baris
            </button>
            <datalist id="fiberhome-spec-groups">
              <option value="Optical" />
              <option value="Mechanical" />
              <option value="Environmental" />
              <option value="Umum" />
            </datalist>
            <p className="text-xs text-zinc-600">
              Baris tanpa parameter akan diabaikan. Urutan baris = urutan tampil di web.
              Group kosong dianggap &ldquo;Umum&rdquo; — spec dengan group sama tampil dalam satu
              accordion di halaman produk.
            </p>
          </div>

          {/* Fitur utama */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Fitur Utama
            </label>
            <div className="space-y-2">
              {features.map((f, i) => (
                <div key={i} className="flex gap-2">
                  <textarea
                    className={`${TEXTAREA_CLASS} min-h-10`}
                    rows={2}
                    value={f}
                    onChange={(e) =>
                      setFeatures((prev) =>
                        prev.map((x, idx) => (idx === i ? e.target.value : x)),
                      )
                    }
                    placeholder="mis. Jacket LSZH — aman untuk instalasi indoor"
                  />
                  <button
                    type="button"
                    onClick={() => setFeatures((prev) => prev.filter((_, idx) => idx !== i))}
                    className={DELETE_BUTTON_CLASS}
                    title="Hapus fitur"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setFeatures((prev) => [...prev, ""])}
              className={ADD_BUTTON_CLASS}
            >
              <Plus className="w-4 h-4" />
              Tambah Fitur
            </button>
            <p className="text-xs text-zinc-600">
              Baris kosong diabaikan. Halaman produk menampilkan maksimal 7 fitur pertama.
            </p>
          </div>

          {/* Aplikasi & use case */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Aplikasi &amp; Use Case
            </label>
            <div className="space-y-3">
              {applications.map((a, i) => (
                <div
                  key={i}
                  className="flex gap-2 rounded-lg border border-zinc-800 bg-zinc-900/40 p-3"
                >
                  <div className="flex-1 space-y-2">
                    <input
                      className={INPUT_CLASS}
                      value={a.title}
                      onChange={(e) => setApplication(i, { title: e.target.value })}
                      placeholder="Judul (mis. FTTH)"
                    />
                    <textarea
                      className={TEXTAREA_CLASS}
                      rows={2}
                      value={a.description}
                      onChange={(e) => setApplication(i, { description: e.target.value })}
                      placeholder="Deskripsi singkat"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setApplications((prev) => prev.filter((_, idx) => idx !== i))
                    }
                    className={DELETE_BUTTON_CLASS}
                    title="Hapus aplikasi"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setApplications((prev) => [...prev, { title: "", description: "" }])
              }
              className={ADD_BUTTON_CLASS}
            >
              <Plus className="w-4 h-4" />
              Tambah Aplikasi
            </button>
            <p className="text-xs text-zinc-600">
              Baris tanpa judul diabaikan. Halaman produk menampilkan maksimal 5 aplikasi pertama.
            </p>
          </div>

          <div className="flex gap-3 pt-4 border-t border-zinc-800">
            <button
              type="submit"
              disabled={saving}
              className="h-10 px-6 rounded-lg bg-sky-700 hover:bg-sky-600 disabled:opacity-60 text-white text-sm font-medium transition-colors"
            >
              {saving ? "Menyimpan…" : editId ? "Simpan perubahan" : "Simpan produk"}
            </button>
            <Link href="/admin/fiberhome">
              <button
                type="button"
                className="h-10 px-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-sm font-medium transition-colors"
              >
                Batal
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function FiberHomeProductForm() {
  return (
    <RequireRole roles={["admin"]}>
      <FiberHomeProductFormInner />
    </RequireRole>
  );
}
