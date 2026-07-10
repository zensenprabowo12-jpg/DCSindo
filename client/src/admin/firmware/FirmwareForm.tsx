import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import AdminNavBar from "../NavBar";
import FirmwareProtectedRoute from "./ProtectedRoute";
import {
  apiFirmwareAdminGet,
  apiFirmwareCreate,
  apiFirmwareUpdate,
  FIRMWARE_BRAND_META,
  isFirmwareBrand,
  type FirmwareBrand,
  type FirmwareSourceType,
} from "./api";
import { ArrowLeft, Save, UploadCloud, Link2 } from "lucide-react";

function FormInner({ brand, id }: { brand: FirmwareBrand; id: number | null }) {
  const meta = FIRMWARE_BRAND_META[brand];
  const [, setLocation] = useLocation();
  const isEdit = id != null;

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [modelSku, setModelSku] = useState("");
  const [version, setVersion] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [sourceType, setSourceType] = useState<FirmwareSourceType>("upload");
  const [externalUrl, setExternalUrl] = useState("");
  const [checksum, setChecksum] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [existingFilePath, setExistingFilePath] = useState<string | null>(null);

  useEffect(() => {
    if (!isEdit || id == null) return;
    let alive = true;
    void (async () => {
      const r = await apiFirmwareAdminGet(id);
      if (!alive) return;
      if (!r.ok) {
        setError(r.message);
        setLoading(false);
        return;
      }
      const d = r.data;
      setCategory(d.category ?? "");
      setProductName(d.product_name ?? "");
      setModelSku(d.model_sku ?? "");
      setVersion(d.version ?? "");
      setReleaseDate(d.release_date ?? "");
      setSourceType(d.source_type);
      setExternalUrl(d.external_url ?? "");
      setChecksum(d.checksum ?? "");
      setNotes(d.notes ?? "");
      setExistingFilePath(d.file_path);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [isEdit, id]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!productName.trim()) {
      setError("Nama produk wajib diisi.");
      return;
    }
    if (sourceType === "upload" && !isEdit && !file) {
      setError("File firmware wajib diunggah untuk sumber Upload.");
      return;
    }
    if (sourceType === "upload" && isEdit && !file && !existingFilePath) {
      setError("File firmware wajib diunggah untuk sumber Upload.");
      return;
    }
    if (sourceType === "external" && !externalUrl.trim()) {
      setError("Link eksternal wajib diisi untuk sumber Link.");
      return;
    }

    const fd = new FormData();
    fd.set("brand", brand);
    fd.set("category", category.trim());
    fd.set("product_name", productName.trim());
    fd.set("model_sku", modelSku.trim());
    fd.set("version", version.trim());
    fd.set("release_date", releaseDate);
    fd.set("source_type", sourceType);
    fd.set("checksum", checksum.trim());
    fd.set("notes", notes.trim());
    if (sourceType === "upload") {
      if (file) fd.set("firmware_file", file);
    } else {
      fd.set("external_url", externalUrl.trim());
    }

    setSaving(true);
    const r = isEdit && id != null ? await apiFirmwareUpdate(id, fd) : await apiFirmwareCreate(fd);
    setSaving(false);
    if (!r.ok) {
      setError(r.message);
      return;
    }
    setLocation(`/admin/firmware/${brand}`);
  }

  const inputCls = `h-10 w-full rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 ${meta.ring} focus:border-transparent transition placeholder:text-zinc-600`;
  const labelCls = "text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block";

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <AdminNavBar />
        <div className="flex items-center justify-center py-24 text-zinc-500 text-sm">Memuat…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <button
          onClick={() => setLocation(`/admin/firmware/${brand}`)}
          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Kembali ke daftar
        </button>

        <div className="flex items-center gap-2 mb-1">
          <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
          <span className={`text-xs font-semibold uppercase tracking-widest ${meta.label}`}>{meta.name}</span>
        </div>
        <h1 className="text-xl font-bold text-white mb-6">
          {isEdit ? "Edit Firmware" : "Tambah Firmware"}
        </h1>

        {error && (
          <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-5">
          {/* Brand terkunci */}
          <div>
            <label className={labelCls}>Brand</label>
            <div className="h-10 w-full rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-400 px-3 text-sm flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
              {meta.name}
              <span className="text-zinc-600 text-xs ml-auto">terkunci</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Kategori</label>
              <input
                className={inputCls}
                list="firmware-categories"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="mis. 10G-PON, RouterOS"
              />
              <datalist id="firmware-categories">
                <option value="10G-PON" />
                <option value="GPON" />
                <option value="RouterOS" />
                <option value="airFiber" />
              </datalist>
            </div>
            <div>
              <label className={labelCls}>Model / SKU</label>
              <input
                className={inputCls}
                value={modelSku}
                onChange={(e) => setModelSku(e.target.value)}
                placeholder="mis. V1600XG02-W"
              />
            </div>
          </div>

          <div>
            <label className={labelCls}>Nama Produk *</label>
            <input
              className={inputCls}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="mis. Chassis OLT"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Versi</label>
              <input
                className={inputCls}
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                placeholder="mis. v1.5.6"
              />
            </div>
            <div>
              <label className={labelCls}>Tanggal Rilis</label>
              <input
                type="date"
                className={inputCls}
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
              />
            </div>
          </div>

          {/* Sumber file */}
          <div>
            <label className={labelCls}>Sumber File</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSourceType("upload")}
                className={[
                  "flex items-center gap-2 h-11 px-4 rounded-lg border text-sm font-medium transition-colors",
                  sourceType === "upload"
                    ? "bg-zinc-800 border-zinc-600 text-white"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200",
                ].join(" ")}
              >
                <UploadCloud className="w-4 h-4" />
                Upload file
              </button>
              <button
                type="button"
                onClick={() => setSourceType("external")}
                className={[
                  "flex items-center gap-2 h-11 px-4 rounded-lg border text-sm font-medium transition-colors",
                  sourceType === "external"
                    ? "bg-zinc-800 border-zinc-600 text-white"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200",
                ].join(" ")}
              >
                <Link2 className="w-4 h-4" />
                Link eksternal
              </button>
            </div>
          </div>

          {/* Kondisional */}
          {sourceType === "upload" ? (
            <div>
              <label className={labelCls}>File Firmware {isEdit ? "" : "*"}</label>
              {isEdit && existingFilePath && (
                <div className="mb-2 text-xs text-zinc-500">
                  File saat ini:{" "}
                  <a href={existingFilePath} target="_blank" rel="noreferrer" className={meta.link}>
                    {existingFilePath.split("/").pop()}
                  </a>
                  <span className="text-zinc-600"> — unggah baru untuk mengganti.</span>
                </div>
              )}
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="block w-full text-sm text-zinc-400 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-zinc-800 file:text-zinc-200 hover:file:bg-zinc-700 cursor-pointer"
              />
              <p className="mt-1.5 text-xs text-zinc-600">
                Ekstensi: .bin .img .zip .tar .gz .tar.gz .ubi .npk .itb — maks 300 MB
              </p>
            </div>
          ) : (
            <div>
              <label className={labelCls}>Link Eksternal *</label>
              <input
                className={inputCls}
                value={externalUrl}
                onChange={(e) => setExternalUrl(e.target.value)}
                placeholder="https://mikrotik.com/download atau Google Drive"
              />
            </div>
          )}

          <div>
            <label className={labelCls}>Checksum</label>
            <input
              className={inputCls}
              value={checksum}
              onChange={(e) => setChecksum(e.target.value)}
              placeholder="mis. SHA256: ..."
            />
          </div>

          <div>
            <label className={labelCls}>Catatan</label>
            <textarea
              className={`w-full rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 ${meta.ring} focus:border-transparent transition placeholder:text-zinc-600 min-h-[80px]`}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Catatan tambahan (opsional)"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className={`flex items-center gap-2 h-10 px-5 rounded-lg ${meta.btn} disabled:opacity-60 text-white text-sm font-medium transition-colors`}
            >
              <Save className="w-4 h-4" />
              {saving ? "Menyimpan…" : isEdit ? "Simpan perubahan" : "Simpan firmware"}
            </button>
            <button
              type="button"
              onClick={() => setLocation(`/admin/firmware/${brand}`)}
              className="h-10 px-5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-sm font-medium transition-colors"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function FirmwareForm() {
  const [, setLocation] = useLocation();
  const [matchNew, pNew] = useRoute("/admin/firmware/:brand/new");
  const [matchEdit, pEdit] = useRoute("/admin/firmware/:brand/:id/edit");
  const brand = (matchEdit ? pEdit?.brand : pNew?.brand) ?? "";
  const idParam = matchEdit ? pEdit?.id : undefined;

  useEffect(() => {
    if (!isFirmwareBrand(brand)) setLocation("/admin/firmware");
  }, [brand, setLocation]);

  if (!isFirmwareBrand(brand)) return null;

  const id = idParam != null ? Number.parseInt(idParam, 10) : null;

  return (
    <FirmwareProtectedRoute>
      <FormInner brand={brand} id={id != null && Number.isFinite(id) ? id : null} />
    </FirmwareProtectedRoute>
  );
}
