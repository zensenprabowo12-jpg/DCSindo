import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation, useRoute } from "wouter";
import AdminNavBar from "../NavBar";
import RequireRole from "../RequireRole";
import { Plus, Trash2, GripVertical, Upload, X } from "lucide-react";
import type { TrainingSessionDetail } from "../../pages/training/types";

type GalleryItem = { id: number; image_path: string; caption: string | null };

const BRANDS = ["MikroTik", "Ubiquiti", "V-SOL", "General"] as const;
const FORMATS = ["Online", "Offline", "Hybrid"] as const;

type SyllabusItem = { localId: number; item: string };

function toDatetimeLocal(iso: string | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

let localIdCounter = 0;

function TrainingFormInner() {
  const [, setLocation] = useLocation();
  const [matchNew] = useRoute("/admin/training/new");
  const [matchEdit, editParams] = useRoute("/admin/training/:id/edit");
  const editId = matchEdit ? parseInt(String(editParams?.id ?? ""), 10) : null;
  const isEdit = editId != null && Number.isFinite(editId);

  // Form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState<typeof BRANDS[number]>("General");
  const [format, setFormat] = useState<typeof FORMATS[number]>("Offline");
  const [location_, setLocation_] = useState("");
  const [startDt, setStartDt] = useState("");
  const [endDt, setEndDt] = useState("");
  const [durationHours, setDurationHours] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [hasCert, setHasCert] = useState(false);
  const [hasLab, setHasLab] = useState(false);
  const [instructorName, setInstructorName] = useState("");
  const [instructorContact, setInstructorContact] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [qrFile, setQrFile] = useState<File | null>(null);
  const [qrPreview, setQrPreview] = useState<string>("");
  const [customLinkUrl, setCustomLinkUrl] = useState("");
  const [customLinkLabel, setCustomLinkLabel] = useState("");
  const [syllabus, setSyllabus] = useState<SyllabusItem[]>([]);

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const thumbInputRef = useRef<HTMLInputElement>(null);
  const qrInputRef = useRef<HTMLInputElement>(null);

  // Gallery state (edit mode only)
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [galleryUploading, setGalleryUploading] = useState(false);
  const [galleryError, setGalleryError] = useState<string | null>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const loadGallery = useCallback(async () => {
    if (!isEdit || !editId) return;
    const res = await fetch(`/api/training/admin/sessions/${editId}/gallery`, { credentials: "include" });
    const json = await res.json() as { ok: boolean; data?: GalleryItem[] };
    if (json.ok && json.data) setGallery(json.data);
  }, [isEdit, editId]);

  useEffect(() => {
    if (!isEdit) return;
    void (async () => {
      const [sessionRes] = await Promise.all([
        fetch(`/api/training/admin/sessions/${editId}`, { credentials: "include" }),
      ]);
      const json = await sessionRes.json() as { ok: boolean; data?: TrainingSessionDetail };
      if (json.ok && json.data) {
        const d = json.data;
        setTitle(d.title);
        setDescription(d.description ?? "");
        setBrand(d.brand as typeof BRANDS[number]);
        setFormat(d.format as typeof FORMATS[number]);
        setLocation_(d.location ?? "");
        setStartDt(toDatetimeLocal(d.start_datetime));
        setEndDt(toDatetimeLocal(d.end_datetime));
        setDurationHours(d.duration_hours != null ? String(d.duration_hours) : "");
        setCapacity(d.capacity != null ? String(d.capacity) : "");
        setPrice(d.price != null ? String(d.price) : "");
        setIsFree(d.is_free);
        setHasCert(d.has_certificate);
        setHasLab(d.has_hands_on_lab);
        setInstructorName(d.instructor_name ?? "");
        setInstructorContact(d.instructor_contact ?? "");
        setThumbnailPreview(d.thumbnail ?? "");
        setQrPreview(d.qr_image ?? "");
        setCustomLinkUrl(d.custom_link_url ?? "");
        setCustomLinkLabel(d.custom_link_label ?? "");
        setSyllabus(d.syllabus.map((s) => ({ localId: ++localIdCounter, item: s.item })));
      }
      setLoading(false);
      void loadGallery();
    })();
  }, [isEdit, editId, setLocation, loadGallery]);

  function addSyllabusItem() {
    setSyllabus((prev) => [...prev, { localId: ++localIdCounter, item: "" }]);
  }

  function removeSyllabusItem(localId: number) {
    setSyllabus((prev) => prev.filter((s) => s.localId !== localId));
  }

  function updateSyllabusItem(localId: number, value: string) {
    setSyllabus((prev) => prev.map((s) => s.localId === localId ? { ...s, item: value } : s));
  }

  async function onGalleryFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files?.length || !editId) return;
    setGalleryUploading(true);
    setGalleryError(null);
    const fd = new FormData();
    Array.from(files).forEach((f) => fd.append("images", f));
    try {
      const res = await fetch(`/api/training/admin/sessions/${editId}/gallery`, {
        method: "POST", body: fd, credentials: "include",
      });
      const json = await res.json() as { ok: boolean; message?: string };
      if (!json.ok) { setGalleryError(json.message ?? "Upload gagal"); }
      else { await loadGallery(); }
    } catch (err) {
      setGalleryError((err as Error).message);
    } finally {
      setGalleryUploading(false);
      e.target.value = "";
    }
  }

  async function onGalleryDelete(imageId: number) {
    if (!confirm("Hapus foto ini?")) return;
    setGalleryError(null);
    try {
      const res = await fetch(`/api/training/admin/gallery/${imageId}`, {
        method: "DELETE", credentials: "include",
      });
      const json = await res.json() as { ok: boolean; message?: string };
      if (!json.ok) { setGalleryError(json.message ?? "Gagal hapus"); }
      else { setGallery((prev) => prev.filter((g) => g.id !== imageId)); }
    } catch (err) {
      setGalleryError((err as Error).message);
    }
  }

  function onThumbnailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  }

  function onQrChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setQrFile(file);
    setQrPreview(URL.createObjectURL(file));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) { setError("Judul wajib diisi."); return; }
    if (!startDt || !endDt) { setError("Tanggal mulai dan selesai wajib diisi."); return; }
    if (new Date(startDt) >= new Date(endDt)) { setError("Tanggal selesai harus setelah tanggal mulai."); return; }

    setSaving(true);
    setError(null);

    try {
      const syllabusPayload = syllabus
        .filter((s) => s.item.trim())
        .map((s, i) => ({ item: s.item.trim(), sort_order: i }));

      // Use multipart if any file is present, else JSON
      let body: FormData | string;
      let headers: Record<string, string> = {};

      if (thumbnailFile || qrFile) {
        const fd = new FormData();
        fd.append("title", title.trim());
        fd.append("description", description.trim());
        fd.append("brand", brand);
        fd.append("format", format);
        fd.append("location", location_.trim());
        fd.append("start_datetime", new Date(startDt).toISOString());
        fd.append("end_datetime", new Date(endDt).toISOString());
        fd.append("duration_hours", durationHours);
        fd.append("capacity", capacity);
        fd.append("price", price);
        fd.append("is_free", isFree ? "1" : "0");
        fd.append("has_certificate", hasCert ? "1" : "0");
        fd.append("has_hands_on_lab", hasLab ? "1" : "0");
        fd.append("instructor_name", instructorName.trim());
        fd.append("instructor_contact", instructorContact.trim());
        fd.append("custom_link_url", customLinkUrl.trim());
        fd.append("custom_link_label", customLinkLabel.trim());
        if (thumbnailFile) fd.append("thumbnail", thumbnailFile);
        if (qrFile) fd.append("qr_image", qrFile);
        fd.append("syllabus", JSON.stringify(syllabusPayload));
        body = fd;
      } else {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          brand,
          format,
          location: location_.trim(),
          start_datetime: new Date(startDt).toISOString(),
          end_datetime: new Date(endDt).toISOString(),
          duration_hours: durationHours ? parseFloat(durationHours) : null,
          capacity: capacity ? parseInt(capacity, 10) : null,
          price: price ? parseFloat(price) : null,
          is_free: isFree,
          has_certificate: hasCert,
          has_hands_on_lab: hasLab,
          instructor_name: instructorName.trim(),
          instructor_contact: instructorContact.trim(),
          custom_link_url: customLinkUrl.trim() || null,
          custom_link_label: customLinkLabel.trim() || null,
          syllabus: syllabusPayload,
        });
      }

      const url = isEdit
        ? `/api/training/admin/sessions/${editId}`
        : "/api/training/admin/sessions";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, { method, headers, body, credentials: "include" });
      const json = await res.json() as { ok: boolean; message?: string };

      if (!json.ok) { setError(json.message ?? "Gagal menyimpan."); setSaving(false); return; }
      setLocation("/admin/training");
    } catch (e) {
      setError((e as Error).message);
      setSaving(false);
    }
  }

  const inputClass = "w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition";
  const labelClass = "block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider";
  const checkboxClass = "w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-indigo-500 focus:ring-indigo-500/30";

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950">
        <AdminNavBar />
        <div className="flex items-center justify-center h-64">
          <div className="w-6 h-6 rounded-full border-2 border-zinc-600 border-t-indigo-400 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />
      <div className="container mx-auto px-4 py-10 max-w-3xl">

        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => setLocation("/admin/training")} className="text-zinc-400 hover:text-white text-sm">
            ← Training
          </button>
          <span className="text-zinc-700">/</span>
          <h1 className="text-xl font-bold text-white">{isEdit ? "Edit Training" : "New Training"}</h1>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 px-4 py-3 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={(e) => void onSubmit(e)} className="space-y-8">

          {/* Basic info */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-5">
            <h2 className="font-bold text-white text-sm uppercase tracking-wider">Informasi Dasar</h2>

            <div>
              <label className={labelClass}>Judul *</label>
              <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul training" required />
            </div>

            <div>
              <label className={labelClass}>Deskripsi</label>
              <textarea className={inputClass + " min-h-[100px] resize-y"} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Deskripsi singkat training" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Brand *</label>
                <select className={inputClass} value={brand} onChange={(e) => setBrand(e.target.value as typeof BRANDS[number])}>
                  {BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Format *</label>
                <select className={inputClass} value={format} onChange={(e) => setFormat(e.target.value as typeof FORMATS[number])}>
                  {FORMATS.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Lokasi</label>
              <input className={inputClass} value={location_} onChange={(e) => setLocation_(e.target.value)} placeholder="Nama gedung / kota / Online" />
            </div>
          </section>

          {/* Schedule */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-5">
            <h2 className="font-bold text-white text-sm uppercase tracking-wider">Jadwal</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Mulai *</label>
                <input type="datetime-local" className={inputClass} value={startDt} onChange={(e) => setStartDt(e.target.value)} required />
              </div>
              <div>
                <label className={labelClass}>Selesai *</label>
                <input type="datetime-local" className={inputClass} value={endDt} onChange={(e) => setEndDt(e.target.value)} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Durasi (jam)</label>
                <input type="number" min="0" step="0.5" className={inputClass} value={durationHours} onChange={(e) => setDurationHours(e.target.value)} placeholder="8" />
              </div>
              <div>
                <label className={labelClass}>Kapasitas (peserta)</label>
                <input type="number" min="1" className={inputClass} value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="20" />
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-5">
            <h2 className="font-bold text-white text-sm uppercase tracking-wider">Harga & Fitur</h2>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="isFree" className={checkboxClass} checked={isFree} onChange={(e) => setIsFree(e.target.checked)} />
              <label htmlFor="isFree" className="text-sm text-zinc-300">Training Gratis</label>
            </div>

            {!isFree && (
              <div>
                <label className={labelClass}>Harga (Rp)</label>
                <input type="number" min="0" className={inputClass} value={price} onChange={(e) => setPrice(e.target.value)} placeholder="500000" />
              </div>
            )}

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <input type="checkbox" id="hasCert" className={checkboxClass} checked={hasCert} onChange={(e) => setHasCert(e.target.checked)} />
                <label htmlFor="hasCert" className="text-sm text-zinc-300">Bersertifikat</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="hasLab" className={checkboxClass} checked={hasLab} onChange={(e) => setHasLab(e.target.checked)} />
                <label htmlFor="hasLab" className="text-sm text-zinc-300">Ada Hands-On Lab</label>
              </div>
            </div>
          </section>

          {/* Instructor */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-5">
            <h2 className="font-bold text-white text-sm uppercase tracking-wider">Instruktur</h2>
            <div>
              <label className={labelClass}>Nama Instruktur</label>
              <input className={inputClass} value={instructorName} onChange={(e) => setInstructorName(e.target.value)} placeholder="Nama lengkap" />
            </div>
            <div>
              <label className={labelClass}>Kontak Instruktur</label>
              <input className={inputClass} value={instructorContact} onChange={(e) => setInstructorContact(e.target.value)} placeholder="Email / LinkedIn / nomor" />
            </div>
          </section>

          {/* Thumbnail */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
            <h2 className="font-bold text-white text-sm uppercase tracking-wider">Thumbnail</h2>
            {thumbnailPreview && (
              <img src={thumbnailPreview} alt="Preview" className="w-full max-h-48 object-cover rounded-xl border border-zinc-700" />
            )}
            <input ref={thumbInputRef} type="file" accept="image/*" className="hidden" onChange={onThumbnailChange} />
            <button
              type="button"
              onClick={() => thumbInputRef.current?.click()}
              className="px-4 py-2 rounded-xl border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-sm transition-colors"
            >
              {thumbnailPreview ? "Ganti Gambar" : "Upload Thumbnail"}
            </button>
          </section>

          {/* QR Code */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
            <h2 className="font-bold text-white text-sm uppercase tracking-wider">QR Code <span className="text-zinc-600 font-normal normal-case tracking-normal">(optional)</span></h2>
            <p className="text-zinc-500 text-xs">Displayed on the public page with the label "Scan for more info".</p>
            {qrPreview && (
              <div className="flex items-start gap-4">
                <img src={qrPreview} alt="QR Preview" className="w-28 h-28 rounded-xl border border-zinc-700 bg-white object-contain p-1" />
                <button
                  type="button"
                  onClick={() => { setQrFile(null); setQrPreview(""); }}
                  className="text-xs text-zinc-500 hover:text-red-400 transition-colors mt-1"
                >
                  Hapus QR
                </button>
              </div>
            )}
            <input ref={qrInputRef} type="file" accept="image/*" className="hidden" onChange={onQrChange} />
            <button
              type="button"
              onClick={() => qrInputRef.current?.click()}
              className="px-4 py-2 rounded-xl border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-sm transition-colors"
            >
              {qrPreview ? "Ganti QR Code" : "Upload QR Code"}
            </button>
          </section>

          {/* Custom Link */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-5">
            <h2 className="font-bold text-white text-sm uppercase tracking-wider">Additional Link <span className="text-zinc-600 font-normal normal-case tracking-normal">(optional)</span></h2>
            <div>
              <label className={labelClass}>Label Link</label>
              <input
                className={inputClass}
                value={customLinkLabel}
                onChange={(e) => setCustomLinkLabel(e.target.value)}
                placeholder="contoh: Daftar Sekarang / Info Lebih Lanjut"
              />
            </div>
            <div>
              <label className={labelClass}>URL Link</label>
              <input
                type="url"
                className={inputClass}
                value={customLinkUrl}
                onChange={(e) => setCustomLinkUrl(e.target.value)}
                placeholder="https://..."
              />
            </div>
          </section>

          {/* Syllabus */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-white text-sm uppercase tracking-wider">Materi / Syllabus</h2>
              <button
                type="button"
                onClick={addSyllabusItem}
                className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 rounded-full px-3 py-1 transition-colors"
              >
                <Plus className="w-3 h-3" />
                Tambah
              </button>
            </div>

            {syllabus.length === 0 ? (
              <p className="text-zinc-600 text-sm">No syllabus items yet. Click "Add" to add one.</p>
            ) : (
              <div className="space-y-2">
                {syllabus.map((s, idx) => (
                  <div key={s.localId} className="flex items-center gap-2">
                    <GripVertical className="w-4 h-4 text-zinc-600 shrink-0" />
                    <span className="text-zinc-600 text-xs w-5 shrink-0">{idx + 1}.</span>
                    <input
                      className={inputClass + " flex-1"}
                      value={s.item}
                      onChange={(e) => updateSyllabusItem(s.localId, e.target.value)}
                      placeholder={`Materi ${idx + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeSyllabusItem(s.localId)}
                      className="p-1.5 text-zinc-600 hover:text-red-400 transition-colors shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Gallery — edit mode only */}
          {isEdit && (
            <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-white text-sm uppercase tracking-wider">Galeri / Dokumentasi Foto</h2>
                <button
                  type="button"
                  onClick={() => galleryInputRef.current?.click()}
                  disabled={galleryUploading}
                  className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 rounded-full px-3 py-1 transition-colors disabled:opacity-50"
                >
                  <Upload className="w-3 h-3" />
                  {galleryUploading ? "Mengupload…" : "Upload Foto"}
                </button>
                <input
                  ref={galleryInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => void onGalleryFilesChange(e)}
                />
              </div>

              <p className="text-zinc-500 text-xs -mt-1">
                Foto ini tampil sebagai <span className="text-zinc-300 font-medium">dokumentasi publik</span> di halaman training.
                Untuk training yang sudah selesai, foto ini jadi portofolio. (JPG/PNG/WebP/GIF, maks 5MB, bisa pilih banyak)
              </p>

              {galleryError && (
                <p className="text-red-400 text-xs">{galleryError}</p>
              )}

              {gallery.length === 0 ? (
                <p className="text-zinc-600 text-sm">Belum ada foto. Klik "Upload Foto" untuk menambah dokumentasi.</p>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {gallery.map((img) => (
                    <div key={img.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-700">
                      <img
                        src={img.image_path}
                        alt={img.caption ?? ""}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => void onGalleryDelete(img.id)}
                        className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/70 text-zinc-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Submit */}
          <div className="flex items-center gap-3 justify-end">
            <button
              type="button"
              onClick={() => setLocation("/admin/training")}
              className="px-6 py-2.5 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-sm font-semibold transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-bold transition-colors"
            >
              {saving ? "Menyimpan…" : isEdit ? "Simpan Perubahan" : "Buat Training"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function TrainingForm() {
  return (
    <RequireRole roles={["admin", "trainer"]}>
      <TrainingFormInner />
    </RequireRole>
  );
}
