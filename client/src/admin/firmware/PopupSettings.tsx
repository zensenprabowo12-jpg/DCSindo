import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import AdminNavBar from "../NavBar";
import FirmwareProtectedRoute from "./ProtectedRoute";
import {
  apiFirmwarePopupAdminGet,
  apiFirmwarePopupUpdate,
  type FirmwarePopupKey,
  type FirmwarePopupSettings,
} from "./popupSettingsApi";

const EMPTY: FirmwarePopupSettings = { install_guide: "", disclaimer: "" };

const labelCls = "text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block";
const textareaCls =
  "w-full rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 px-3 py-2.5 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition placeholder:text-zinc-600 resize-y";

function PopupSettingsInner() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  // `values` = isi textarea saat ini; `baseline` = isi terakhir yang tersimpan di DB.
  const [values, setValues] = useState<FirmwarePopupSettings>(EMPTY);
  const [baseline, setBaseline] = useState<FirmwarePopupSettings>(EMPTY);
  const savedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let alive = true;
    void apiFirmwarePopupAdminGet().then((r) => {
      if (!alive) return;
      if (!r.ok) {
        setError(r.message);
      } else {
        setValues(r.data);
        setBaseline(r.data);
      }
      setLoading(false);
    });
    return () => {
      alive = false;
      if (savedTimer.current) clearTimeout(savedTimer.current);
    };
  }, []);

  function setValue(key: FirmwarePopupKey, v: string) {
    setValues((prev) => ({ ...prev, [key]: v }));
    setSaved(false);
  }

  const changedKeys = (Object.keys(values) as FirmwarePopupKey[]).filter(
    (k) => values[k] !== baseline[k],
  );
  const dirty = changedKeys.length > 0;

  async function onSave() {
    if (!dirty || saving) return;
    setSaving(true);
    setError(null);
    setSaved(false);

    // Hanya kunci yang berubah yang dikirim.
    const results = await Promise.all(
      changedKeys.map((k) => apiFirmwarePopupUpdate(k, values[k])),
    );
    setSaving(false);

    const failed = results.find((r) => !r.ok);
    if (failed && !failed.ok) {
      setError(failed.message);
      return;
    }

    // Baseline ikut bergeser supaya tombol Simpan kembali non-aktif.
    setBaseline(values);
    setSaved(true);
    if (savedTimer.current) clearTimeout(savedTimer.current);
    savedTimer.current = setTimeout(() => setSaved(false), 3000);
  }

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

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <button
          onClick={() => setLocation("/admin/firmware")}
          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Kembali ke firmware
        </button>

        <h1 className="text-xl font-bold text-white mb-1">Konten Popup Firmware</h1>
        <p className="text-sm text-zinc-500 mb-6">
          Konten global — dipakai pada popup detail SEMUA firmware di semua brand.
        </p>

        {error && (
          <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {saved && (
          <div className="mb-5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
            Tersimpan.
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className={labelCls} htmlFor="install_guide">
              Panduan Instalasi
            </label>
            <textarea
              id="install_guide"
              className={`${textareaCls} font-mono`}
              rows={10}
              value={values.install_guide}
              onChange={(e) => setValue("install_guide", e.target.value)}
              placeholder="Satu langkah per baris…"
            />
            <p className="mt-1.5 text-xs text-zinc-600">
              Satu langkah per baris. Penomoran 1, 2, 3… dibuat otomatis — jangan ditulis manual.
            </p>
          </div>

          <div>
            <label className={labelCls} htmlFor="disclaimer">
              Peringatan &amp; Disclaimer
            </label>
            <textarea
              id="disclaimer"
              className={textareaCls}
              rows={8}
              value={values.disclaimer}
              onChange={(e) => setValue("disclaimer", e.target.value)}
              placeholder="Teks peringatan…"
            />
            <p className="mt-1.5 text-xs text-zinc-600">
              Paragraf biasa. Pisahkan dengan baris kosong untuk paragraf baru.
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={() => void onSave()}
            disabled={!dirty || saving}
            className="h-10 px-5 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
          >
            {saving ? "Menyimpan…" : "Simpan"}
          </button>
          {dirty && !saving && (
            <span className="text-xs text-zinc-500">
              {changedKeys.length} perubahan belum disimpan
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FirmwarePopupSettings() {
  return (
    <FirmwareProtectedRoute>
      <PopupSettingsInner />
    </FirmwareProtectedRoute>
  );
}
