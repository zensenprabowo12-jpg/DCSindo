import { useCallback, useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { MIKROTIK_DCS_CATEGORIES } from "../categories";
import { apiAdminProducts, apiDeleteProduct, apiReorderProducts } from "../api";
import type { MikrotikDcsProduct } from "../types";
import MikrotikDcsProtectedRoute from "./ProtectedRoute";
import AdminNavBar from "../../admin/NavBar";
import { GripVertical } from "lucide-react";

function DashboardInner() {
  const [list, setList] = useState<MikrotikDcsProduct[]>([]);
  const [cat, setCat] = useState<string>("");
  const [sort, setSort] = useState<"custom" | "latest" | "oldest">("custom");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [dragId, setDragId] = useState<number | null>(null);
  const [dirtyOrder, setDirtyOrder] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const r = await apiAdminProducts({ category: cat || undefined, sort });
    if (r.ok) { setList(r.data); setDirtyOrder(false); }
    setLoading(false);
  }, [cat, sort]);

  useEffect(() => { void load(); }, [load]);

  async function onDelete(id: number) {
    if (!confirm("Hapus produk ini?")) return;
    setDeleting(id);
    const r = await apiDeleteProduct(id);
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
    if (!cat) { alert("Pilih kategori dulu untuk mengatur urutan."); return; }
    setSavingOrder(true);
    const r = await apiReorderProducts(cat, list.map((x) => x.id));
    setSavingOrder(false);
    if (!r.ok) { alert(r.message); return; }
    setDirtyOrder(false);
    void load();
  }

  return (
    <Layout>
      <AdminNavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-black tracking-tight">Produk MikroTik</h1>
            <p className="text-muted-foreground text-sm mt-0.5">{list.length} produk</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild>
              <Link href="/admin/mikrotik/new">+ Tambah produk</Link>
            </Button>
            <Button variant="secondary" disabled={!dirtyOrder || savingOrder} onClick={() => void onSaveOrder()}>
              {savingOrder ? "Menyimpan…" : "Simpan urutan"}
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Kategori</label>
            <select className="h-10 w-full sm:w-56 rounded-md border border-border bg-background px-3 text-sm" value={cat} onChange={(e) => setCat(e.target.value)}>
              <option value="">Semua kategori</option>
              {MIKROTIK_DCS_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Urutkan</label>
            <select className="h-10 w-full sm:w-56 rounded-md border border-border bg-background px-3 text-sm" value={sort} onChange={(e) => setSort(e.target.value as "custom" | "latest" | "oldest")}>
              <option value="custom">Urutan custom (drag)</option>
              <option value="latest">Terbaru</option>
              <option value="oldest">Terlama</option>
            </select>
          </div>
        </div>

        {sort === "custom" && !cat && (
          <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200 dark:border-amber-900 px-4 py-3 text-sm">
            Pilih <span className="font-semibold">1 kategori</span> dulu untuk drag & drop.
          </div>
        )}

        <div className="border border-border rounded-xl overflow-hidden bg-card">
          {loading ? (
            <p className="p-8 text-center text-muted-foreground">Memuat…</p>
          ) : list.length === 0 ? (
            <p className="p-8 text-center text-muted-foreground">Belum ada produk</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10"></TableHead>
                  <TableHead className="w-14">ID</TableHead>
                  <TableHead>Nama</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead className="w-40">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {list.map((p, idx) => (
                  <TableRow
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
                    className={sort === "custom" && cat ? "cursor-move" : undefined}
                  >
                    <TableCell className="text-muted-foreground"><GripVertical className="w-4 h-4 opacity-60" /></TableCell>
                    <TableCell className="font-mono text-xs">{p.id}</TableCell>
                    <TableCell className="font-medium">{p.nama_produk}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{p.sku}</TableCell>
                    <TableCell className="text-sm">{p.category}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={`/admin/mikrotik/${p.id}/edit`}>Edit</Link>
                        </Button>
                        <Button size="sm" variant="destructive" disabled={deleting === p.id} onClick={() => void onDelete(p.id)}>
                          {deleting === p.id ? "…" : "Hapus"}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default function MikrotikDcsDashboard() {
  return (
    <MikrotikDcsProtectedRoute>
      <DashboardInner />
    </MikrotikDcsProtectedRoute>
  );
}
