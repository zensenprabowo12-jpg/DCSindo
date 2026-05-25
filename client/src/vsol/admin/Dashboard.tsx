import { useCallback, useEffect, useState } from "react";
import { Link } from "wouter";
import { VSOL_DCS_CATEGORIES } from "../categories";
import { apiVsolAdminProducts, apiVsolDeleteProduct, apiVsolReorderProducts } from "../api";
import type { VsolDcsProduct } from "../types";
import VsolProtectedRoute from "./ProtectedRoute";
import AdminNavBar from "../../admin/NavBar";
import { GripVertical, Plus, Save, Pencil, Trash2, AlertCircle } from "lucide-react";

function DashboardInner() {
  const [list, setList] = useState<VsolDcsProduct[]>([]);
  const [cat, setCat] = useState<string>("");
  const [sort, setSort] = useState<"custom" | "latest" | "oldest">("custom");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [dragId, setDragId] = useState<number | null>(null);
  const [dirtyOrder, setDirtyOrder] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const r = await apiVsolAdminProducts({ category: cat || undefined, sort });
    if (r.ok) { setList(r.data); setDirtyOrder(false); }
    setLoading(false);
  }, [cat, sort]);

  useEffect(() => { void load(); }, [load]);

  async function onDelete(id: number) {
    if (!confirm("Delete this product?")) return;
    setDeleting(id);
    const r = await apiVsolDeleteProduct(id);
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
    if (!cat) { alert("Please select a category first to set the order."); return; }
    setSavingOrder(true);
    const r = await apiVsolReorderProducts(cat, list.map((x) => x.id));
    setSavingOrder(false);
    if (!r.ok) { alert(r.message); return; }
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
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-green-400">V-SOL</span>
            </div>
            <h1 className="text-xl font-bold text-white">Product Management</h1>
            <p className="text-sm text-zinc-500 mt-0.5">
              {loading ? "Loading…" : `${list.length} products`}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {dirtyOrder && (
              <button
                onClick={() => void onSaveOrder()}
                disabled={savingOrder}
                className="flex items-center gap-2 h-9 px-4 rounded-lg bg-green-700 hover:bg-green-600 disabled:opacity-60 text-white text-sm font-medium transition-colors"
              >
                <Save className="w-4 h-4" />
                {savingOrder ? "Saving…" : "Save order"}
              </button>
            )}
            <Link href="/admin/vsol/new">
              <button className="flex items-center gap-2 h-9 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-zinc-200 text-sm font-medium transition-colors">
                <Plus className="w-4 h-4" />
                Add product
              </button>
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Category</label>
            <select
              className="h-9 w-full sm:w-52 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            >
              <option value="">All categories</option>
              {VSOL_DCS_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Sort By</label>
            <select
              className="h-9 w-full sm:w-52 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              value={sort}
              onChange={(e) => setSort(e.target.value as "custom" | "latest" | "oldest")}
            >
              <option value="custom">Custom order (drag)</option>
              <option value="latest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        {sort === "custom" && !cat && (
          <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-amber-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            Select <span className="font-semibold">1 category</span> to enable drag &amp; drop reordering.
          </div>
        )}

        <div className="rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-zinc-600 text-sm">
              <svg className="w-5 h-5 animate-spin mr-2" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Loading…
            </div>
          ) : list.length === 0 ? (
            <div className="py-20 text-center text-zinc-600 text-sm">
              No products yet.{" "}
              <Link href="/admin/vsol/new">
                <span className="text-green-400 hover:text-green-300 cursor-pointer">Add one now →</span>
              </Link>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="w-10 px-4 py-3" />
                  <th className="w-12 px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">ID</th>
                  <th className="w-16 px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Photo</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Product Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden md:table-cell">SKU</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden lg:table-cell">Category</th>
                  <th className="w-16 px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden lg:table-cell">Status</th>
                  <th className="w-36 px-4 py-3 text-right text-xs font-semibold text-zinc-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {list.map((p, idx) => (
                  <tr
                    key={p.id}
                    draggable={sort === "custom" && Boolean(cat)}
                    onDragStart={() => setDragId(p.id)}
                    onDragEnd={() => setDragId(null)}
                    onDragOver={(e) => { if (sort !== "custom" || !cat) return; e.preventDefault(); }}
                    onDrop={() => {
                      if (sort !== "custom" || !cat || dragId == null) return;
                      const fromIndex = list.findIndex((x) => x.id === dragId);
                      if (fromIndex < 0 || fromIndex === idx) return;
                      moveItem(fromIndex, idx);
                    }}
                    className={[
                      "group hover:bg-zinc-800/50 transition-colors",
                      sort === "custom" && cat ? "cursor-move" : "",
                      dragId === p.id ? "opacity-50" : "",
                    ].join(" ")}
                  >
                    <td className="px-4 py-3 text-zinc-700 group-hover:text-zinc-500">
                      <GripVertical className="w-4 h-4" />
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-xs text-zinc-600">{p.id}</span>
                    </td>
                    <td className="px-4 py-3">
                      {p.main_image ? (
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 shrink-0">
                          <img src={p.main_image} alt={p.nama_produk} className="w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                          <svg className="w-4 h-4 text-zinc-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M18 9.75h.008v.008H18V9.75z" />
                          </svg>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-zinc-100">{p.nama_produk}</div>
                      <div className="text-xs text-zinc-600 mt-0.5 md:hidden">{p.sku}</div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="font-mono text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">{p.sku}</span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-xs text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-full">{p.category}</span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      {p.is_new ? (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/20">NEW</span>
                      ) : (
                        <span className="text-zinc-700">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link href={`/admin/vsol/${p.id}/edit`}>
                          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-zinc-300 text-xs font-medium transition-colors">
                            <Pencil className="w-3.5 h-3.5" />
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => void onDelete(p.id)}
                          disabled={deleting === p.id}
                          className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 text-red-400 text-xs font-medium transition-colors disabled:opacity-50"
                        >
                          {deleting === p.id ? (
                            <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                            </svg>
                          ) : (
                            <Trash2 className="w-3.5 h-3.5" />
                          )}
                          Delete
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

export default function VsolDcsDashboard() {
  return (
    <VsolProtectedRoute>
      <DashboardInner />
    </VsolProtectedRoute>
  );
}
