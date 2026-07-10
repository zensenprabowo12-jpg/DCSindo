import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useRoute } from "wouter";
import AdminNavBar from "../NavBar";
import FirmwareProtectedRoute from "./ProtectedRoute";
import {
  apiFirmwareAdminList,
  apiFirmwareDelete,
  apiFirmwareReorder,
  FIRMWARE_BRAND_META,
  isFirmwareBrand,
  type FirmwareBrand,
  type FirmwareFile,
} from "./api";
import {
  GripVertical,
  Plus,
  Save,
  Pencil,
  Trash2,
  AlertCircle,
  ArrowLeft,
  Download,
  ExternalLink,
} from "lucide-react";

function formatBytes(n: number | null): string {
  if (n == null) return "—";
  if (n < 1024) return `${n} B`;
  const kb = n / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(1)} MB`;
  return `${(mb / 1024).toFixed(2)} GB`;
}

function ListInner({ brand }: { brand: FirmwareBrand }) {
  const meta = FIRMWARE_BRAND_META[brand];
  const [list, setList] = useState<FirmwareFile[]>([]);
  const [cats, setCats] = useState<string[]>([]);
  const [cat, setCat] = useState<string>("");
  const [sort, setSort] = useState<"custom" | "latest" | "oldest">("custom");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [dragId, setDragId] = useState<number | null>(null);
  const [dirtyOrder, setDirtyOrder] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);

  const loadCats = useCallback(async () => {
    const r = await apiFirmwareAdminList({ brand });
    if (r.ok) {
      const set = Array.from(new Set(r.data.map((x) => x.category).filter(Boolean))).sort();
      setCats(set);
    }
  }, [brand]);

  const load = useCallback(async () => {
    setLoading(true);
    const r = await apiFirmwareAdminList({ brand, category: cat || undefined, sort });
    if (r.ok) {
      setList(r.data);
      setDirtyOrder(false);
    }
    setLoading(false);
  }, [brand, cat, sort]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    void loadCats();
  }, [loadCats]);

  async function onDelete(id: number) {
    if (!confirm("Hapus firmware ini?")) return;
    setDeleting(id);
    const r = await apiFirmwareDelete(id);
    setDeleting(null);
    if (r.ok) {
      void load();
      void loadCats();
    } else {
      alert(r.message);
    }
  }

  function moveItem(fromIndex: number, toIndex: number) {
    setList((prev) => {
      const next = [...prev];
      const [item] = next.splice(fromIndex, 1);
      if (!item) return prev;
      next.splice(toIndex, 0, item);
      return next;
    });
    setDirtyOrder(true);
  }

  async function onSaveOrder() {
    if (!cat) {
      alert("Pilih 1 kategori dulu untuk mengatur urutan.");
      return;
    }
    setSavingOrder(true);
    const r = await apiFirmwareReorder(brand, cat, list.map((x) => x.id));
    setSavingOrder(false);
    if (!r.ok) {
      alert(r.message);
      return;
    }
    setDirtyOrder(false);
    void load();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link href="/admin/firmware">
              <button className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-2">
                <ArrowLeft className="w-3.5 h-3.5" />
                Semua brand
              </button>
            </Link>
            <div className="flex items-center gap-2 mb-1">
              <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
              <span className={`text-xs font-semibold uppercase tracking-widest ${meta.label}`}>
                {meta.name}
              </span>
            </div>
            <h1 className="text-xl font-bold text-white">Firmware</h1>
            <p className="text-sm text-zinc-500 mt-0.5">
              {loading ? "Memuat…" : `${list.length} firmware`}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {dirtyOrder && (
              <button
                onClick={() => void onSaveOrder()}
                disabled={savingOrder}
                className={`flex items-center gap-2 h-9 px-4 rounded-lg ${meta.btn} disabled:opacity-60 text-white text-sm font-medium transition-colors`}
              >
                <Save className="w-4 h-4" />
                {savingOrder ? "Menyimpan…" : "Simpan urutan"}
              </button>
            )}
            <Link href={`/admin/firmware/${brand}/new`}>
              <button className="flex items-center gap-2 h-9 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-zinc-200 text-sm font-medium transition-colors">
                <Plus className="w-4 h-4" />
                Tambah Firmware
              </button>
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Kategori</label>
            <select
              className={`h-9 w-full sm:w-52 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 ${meta.ring} focus:border-transparent transition`}
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            >
              <option value="">Semua kategori</option>
              {cats.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Urutkan</label>
            <select
              className={`h-9 w-full sm:w-52 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 ${meta.ring} focus:border-transparent transition`}
              value={sort}
              onChange={(e) => setSort(e.target.value as "custom" | "latest" | "oldest")}
            >
              <option value="custom">Urutan kustom (drag)</option>
              <option value="latest">Terbaru</option>
              <option value="oldest">Terlama</option>
            </select>
          </div>
        </div>

        {sort === "custom" && !cat && (
          <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-amber-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            Pilih <span className="font-semibold">1 kategori</span> untuk mengaktifkan drag &amp; drop.
          </div>
        )}

        <div className="rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-zinc-600 text-sm">
              <svg className="w-5 h-5 animate-spin mr-2" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Memuat…
            </div>
          ) : list.length === 0 ? (
            <div className="py-20 text-center text-zinc-600 text-sm">
              Belum ada firmware.{" "}
              <Link href={`/admin/firmware/${brand}/new`}>
                <span className={`cursor-pointer ${meta.link}`}>Tambah sekarang →</span>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="w-10 px-4 py-3" />
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Kategori</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Nama Produk</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden md:table-cell">Model</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden lg:table-cell">Versi</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Sumber</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden sm:table-cell">Ukuran</th>
                    <th className="w-36 px-4 py-3 text-right text-xs font-semibold text-zinc-500 uppercase tracking-wider">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {list.map((f, idx) => (
                    <tr
                      key={f.id}
                      draggable={sort === "custom" && Boolean(cat)}
                      onDragStart={() => setDragId(f.id)}
                      onDragEnd={() => setDragId(null)}
                      onDragOver={(e) => {
                        if (sort !== "custom" || !cat) return;
                        e.preventDefault();
                      }}
                      onDrop={() => {
                        if (sort !== "custom" || !cat || dragId == null) return;
                        const fromIndex = list.findIndex((x) => x.id === dragId);
                        if (fromIndex < 0 || fromIndex === idx) return;
                        moveItem(fromIndex, idx);
                      }}
                      className={[
                        "group hover:bg-zinc-800/50 transition-colors",
                        sort === "custom" && cat ? "cursor-move" : "",
                        dragId === f.id ? "opacity-50" : "",
                      ].join(" ")}
                    >
                      <td className="px-4 py-3 text-zinc-700 group-hover:text-zinc-500">
                        <GripVertical className="w-4 h-4" />
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-full whitespace-nowrap">
                          {f.category || "—"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-zinc-100">{f.product_name}</div>
                        <div className="text-xs text-zinc-600 mt-0.5 md:hidden">{f.model_sku ?? ""}</div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        {f.model_sku ? (
                          <span className="font-mono text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">{f.model_sku}</span>
                        ) : (
                          <span className="text-zinc-700">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell text-zinc-400 text-xs">
                        {f.version || <span className="text-zinc-700">—</span>}
                      </td>
                      <td className="px-4 py-3">
                        {f.source_type === "upload" ? (
                          f.file_path ? (
                            <a
                              href={f.file_path}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/25 transition-colors"
                            >
                              <Download className="w-3 h-3" />
                              Upload
                            </a>
                          ) : (
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                              Upload
                            </span>
                          )
                        ) : f.external_url ? (
                          <a
                            href={f.external_url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-400 border border-sky-500/20 hover:bg-sky-500/25 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Link
                          </a>
                        ) : (
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-400 border border-sky-500/20">
                            Link
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell text-zinc-400 text-xs whitespace-nowrap">
                        {formatBytes(f.file_size)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link href={`/admin/firmware/${brand}/${f.id}/edit`}>
                            <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-zinc-300 text-xs font-medium transition-colors">
                              <Pencil className="w-3.5 h-3.5" />
                              Edit
                            </button>
                          </Link>
                          <button
                            onClick={() => void onDelete(f.id)}
                            disabled={deleting === f.id}
                            className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 text-red-400 text-xs font-medium transition-colors disabled:opacity-50"
                          >
                            {deleting === f.id ? (
                              <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                              </svg>
                            ) : (
                              <Trash2 className="w-3.5 h-3.5" />
                            )}
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FirmwareBrandList() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/admin/firmware/:brand");
  const brand = params?.brand ?? "";

  useEffect(() => {
    if (!isFirmwareBrand(brand)) setLocation("/admin/firmware");
  }, [brand, setLocation]);

  if (!isFirmwareBrand(brand)) return null;

  return (
    <FirmwareProtectedRoute>
      <ListInner brand={brand} />
    </FirmwareProtectedRoute>
  );
}
