import { useCallback, useEffect, useState } from "react";
import { Link } from "wouter";
import { GripVertical, Pencil, Plus, Save, Trash2 } from "lucide-react";
import AdminNavBar from "../NavBar";
import RequireRole from "../RequireRole";
import {
  apiFiberHomeDelete,
  apiFiberHomeProducts,
  apiFiberHomeReorder,
} from "@/pages/fiberhome/api";
import type { FiberHomeProduct } from "@/pages/fiberhome/types";

function FiberHomeAdminInner() {
  const [list, setList] = useState<FiberHomeProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [dragId, setDragId] = useState<number | null>(null);
  const [dirtyOrder, setDirtyOrder] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const r = await apiFiberHomeProducts();
    if (r.ok) {
      setList(r.data);
      setDirtyOrder(false);
      setErr(null);
    } else {
      setErr(r.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function onDelete(p: FiberHomeProduct) {
    if (!confirm(`Hapus produk "${p.name}"? Foto & spesifikasinya ikut terhapus.`)) return;
    setDeleting(p.id);
    const r = await apiFiberHomeDelete(p.id);
    setDeleting(null);
    if (r.ok) void load();
    else alert(r.message);
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
    setSavingOrder(true);
    const r = await apiFiberHomeReorder(list.map((x) => x.id));
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
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
                FiberHome
              </span>
            </div>
            <h1 className="text-xl font-bold text-white">Product Management</h1>
            <p className="text-sm text-zinc-500 mt-0.5">
              {loading ? "Memuat…" : `${list.length} produk`}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {dirtyOrder && (
              <button
                onClick={() => void onSaveOrder()}
                disabled={savingOrder}
                className="flex items-center gap-2 h-9 px-4 rounded-lg bg-sky-700 hover:bg-sky-600 disabled:opacity-60 text-white text-sm font-medium transition-colors"
              >
                <Save className="w-4 h-4" />
                {savingOrder ? "Menyimpan…" : "Simpan urutan"}
              </button>
            )}
            <Link href="/admin/fiberhome/new">
              <button className="flex items-center gap-2 h-9 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-zinc-200 text-sm font-medium transition-colors">
                <Plus className="w-4 h-4" />
                Tambah produk
              </button>
            </Link>
          </div>
        </div>

        {err && (
          <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
            {err}
          </div>
        )}

        <div className="rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900">
          {loading ? (
            <div className="py-20 text-center text-zinc-600 text-sm">Memuat…</div>
          ) : list.length === 0 ? (
            <div className="py-20 text-center text-zinc-600 text-sm">
              Belum ada produk.{" "}
              <Link href="/admin/fiberhome/new">
                <span className="text-sky-400 hover:text-sky-300 cursor-pointer">
                  Tambah sekarang →
                </span>
              </Link>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="w-10 px-4 py-3" />
                  <th className="w-16 px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Foto
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Nama Produk
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden md:table-cell">
                    SKU
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden lg:table-cell">
                    Kategori
                  </th>
                  <th className="w-24 px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden lg:table-cell">
                    Datasheet
                  </th>
                  <th className="w-36 px-4 py-3 text-right text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {list.map((p, idx) => (
                  <tr
                    key={p.id}
                    draggable
                    onDragStart={() => setDragId(p.id)}
                    onDragEnd={() => setDragId(null)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                      if (dragId == null) return;
                      const fromIndex = list.findIndex((x) => x.id === dragId);
                      if (fromIndex < 0 || fromIndex === idx) return;
                      moveItem(fromIndex, idx);
                    }}
                    className={[
                      "group hover:bg-zinc-800/50 transition-colors cursor-move",
                      dragId === p.id ? "opacity-50" : "",
                    ].join(" ")}
                  >
                    <td className="px-4 py-3 text-zinc-700 group-hover:text-zinc-500">
                      <GripVertical className="w-4 h-4" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 shrink-0">
                        {p.image_path && (
                          <img
                            src={p.image_path}
                            alt={p.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = "none";
                            }}
                          />
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-zinc-100">{p.name}</div>
                      <div className="text-xs text-zinc-600 mt-0.5 md:hidden">{p.sku}</div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="font-mono text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">
                        {p.sku}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-xs text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-full">
                        {p.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      {p.datasheet_path ? (
                        <a
                          href={p.datasheet_path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-sky-400 hover:text-sky-300 underline"
                        >
                          PDF
                        </a>
                      ) : (
                        <span className="text-zinc-700">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link href={`/admin/fiberhome/${p.id}/edit`}>
                          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-zinc-300 text-xs font-medium transition-colors">
                            <Pencil className="w-3.5 h-3.5" />
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => void onDelete(p)}
                          disabled={deleting === p.id}
                          className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 text-red-400 text-xs font-medium transition-colors disabled:opacity-50"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          {deleting === p.id ? "…" : "Hapus"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FiberHomeAdmin() {
  return (
    <RequireRole roles={["admin"]}>
      <FiberHomeAdminInner />
    </RequireRole>
  );
}
