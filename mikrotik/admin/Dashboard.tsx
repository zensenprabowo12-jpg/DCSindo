import { useCallback, useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MIKROTIK_DCS_CATEGORIES } from "../categories";
import { apiAdminProducts, apiDeleteProduct, apiLogout } from "../api";
import type { MikrotikDcsProduct } from "../types";
import MikrotikDcsProtectedRoute from "./ProtectedRoute";
import { Shield } from "lucide-react";

function DashboardInner() {
  const [list, setList] = useState<MikrotikDcsProduct[]>([]);
  const [cat, setCat] = useState<string>("");
  const [sort, setSort] = useState<"latest" | "oldest">("latest");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const r = await apiAdminProducts({
      category: cat || undefined,
      sort,
    });
    if (r.ok) setList(r.data);
    setLoading(false);
  }, [cat, sort]);

  useEffect(() => {
    void load();
  }, [load]);

  async function onDelete(id: number) {
    if (!confirm("Hapus produk ini?")) return;
    setDeleting(id);
    const r = await apiDeleteProduct(id);
    setDeleting(null);
    if (r.ok) void load();
    else alert(r.message);
  }

  async function onLogout() {
    await apiLogout();
    window.location.href = "/mikrotik-dcs/admin/login";
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
              <Shield className="w-7 h-7" />
              Dashboard Produk
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Kelola katalog MikroTik
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" asChild>
              <a href="/">Kembali ke website</a>
            </Button>
            <Button variant="outline" onClick={() => void onLogout()}>
              Logout
            </Button>
            <Button asChild>
              <a href="/mikrotik-dcs/admin/new">Tambah produk</a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Kategori</label>
            <select
              className="h-10 w-full sm:w-64 rounded-md border border-border bg-background px-3 text-sm"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            >
              <option value="">Semua kategori</option>
              {MIKROTIK_DCS_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Urutkan</label>
            <select
              className="h-10 w-full sm:w-64 rounded-md border border-border bg-background px-3 text-sm"
              value={sort}
              onChange={(e) => setSort(e.target.value as "latest" | "oldest")}
            >
              <option value="latest">Terbaru ditambah</option>
              <option value="oldest">Terlama</option>
            </select>
          </div>
        </div>

        <div className="border border-border rounded-xl overflow-hidden bg-card">
          {loading ? (
            <p className="p-8 text-center text-muted-foreground">Memuat…</p>
          ) : list.length === 0 ? (
            <p className="p-8 text-center text-muted-foreground">Belum ada produk</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-14">ID</TableHead>
                  <TableHead>Nama</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead className="w-40">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {list.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-mono text-xs">{p.id}</TableCell>
                    <TableCell className="font-medium">{p.nama_produk}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{p.sku}</TableCell>
                    <TableCell className="text-sm">{p.category}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={`/mikrotik-dcs/admin/${p.id}/edit`}>Edit</Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          disabled={deleting === p.id}
                          onClick={() => void onDelete(p.id)}
                        >
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
