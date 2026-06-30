import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import AdminNavBar from "./NavBar";
import RequireRole from "./RequireRole";

type ActivityLogRow = {
  id: number;
  attempted_username: string;
  success: 0 | 1;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
};

function formatDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function AdminActivityLogInner() {
  const [, setLocation] = useLocation();
  const [rows, setRows] = useState<ActivityLogRow[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setErr(null);
    try {
      const res = await fetch("/api/mikrotik-dcs/admin/activity-log", {
        credentials: "include",
      });
      const json = (await res.json()) as { ok: boolean; data?: ActivityLogRow[]; message?: string };
      if (json.ok && Array.isArray(json.data)) {
        setRows(json.data);
      } else {
        setErr(json.message ?? "Gagal memuat log");
        setRows([]);
      }
    } catch {
      setErr("Koneksi ke server gagal");
      setRows([]);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />

      <div className="container mx-auto px-4 py-10 max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <button
              onClick={() => setLocation("/admin")}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-3 inline-flex items-center gap-1"
            >
              ← Kembali ke Dashboard
            </button>
            <h1 className="text-2xl font-bold text-white tracking-tight">Activity Log</h1>
            <p className="text-sm text-zinc-500 mt-1">
              Riwayat percobaan login ke panel admin (terbaru di atas)
            </p>
          </div>
          <button
            onClick={() => void load()}
            className="shrink-0 h-9 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm font-medium text-zinc-200 transition-colors"
          >
            ↻ Refresh
          </button>
        </div>

        {err && (
          <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5 mb-5">
            {err}
          </div>
        )}

        {/* Table */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
          {rows == null ? (
            <div className="p-6 space-y-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-full rounded bg-zinc-800 animate-pulse" />
              ))}
            </div>
          ) : rows.length === 0 ? (
            <div className="p-10 text-center text-sm text-zinc-500">
              Belum ada percobaan login yang tercatat.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 text-left text-xs uppercase tracking-wider text-zinc-500">
                    <th className="px-4 py-3 font-medium">Waktu</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Username dicoba</th>
                    <th className="px-4 py-3 font-medium">IP</th>
                    <th className="px-4 py-3 font-medium">Browser</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-b border-zinc-800/60 last:border-0 hover:bg-zinc-800/40">
                      <td className="px-4 py-3 whitespace-nowrap text-zinc-300">
                        {formatDateTime(r.created_at)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {r.success ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 text-green-400 px-2.5 py-1 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Berhasil
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 text-red-400 px-2.5 py-1 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Gagal
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-zinc-300 font-mono text-xs">
                        {r.attempted_username || <span className="text-zinc-600">(kosong)</span>}
                      </td>
                      <td className="px-4 py-3 text-zinc-400 font-mono text-xs whitespace-nowrap">
                        {r.ip_address ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-zinc-500 text-xs max-w-[260px] truncate" title={r.user_agent ?? ""}>
                        {r.user_agent ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {rows != null && rows.length > 0 && (
          <p className="mt-4 text-xs text-zinc-600">
            Menampilkan {rows.length} entri terbaru.
          </p>
        )}
      </div>
    </div>
  );
}

export default function AdminActivityLog() {
  return (
    <RequireRole roles={["admin"]}>
      <AdminActivityLogInner />
    </RequireRole>
  );
}
