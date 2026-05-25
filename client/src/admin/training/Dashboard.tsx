import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import AdminNavBar from "../NavBar";
import { isAdminAuthedSession } from "../authGate";
import { BRAND_BG, STATUS_BG, formatDate, type TrainingBrand, type TrainingSession, type TrainingStatus } from "../../pages/training/types";
import { FlaskConical, Plus, Pencil, Trash2, Award } from "lucide-react";

async function fetchSessions(): Promise<TrainingSession[]> {
  const res = await fetch("/api/training/admin/sessions", { credentials: "include" });
  const json = await res.json() as { ok: boolean; data?: TrainingSession[] };
  return json.ok && json.data ? json.data : [];
}

async function deleteSession(id: number): Promise<boolean> {
  const res = await fetch(`/api/training/admin/sessions/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  const json = await res.json() as { ok: boolean };
  return json.ok;
}

export default function TrainingAdminDashboard() {
  const [, setLocation] = useLocation();
  const [sessions, setSessions] = useState<TrainingSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);

  useEffect(() => {
    if (!isAdminAuthedSession()) { setLocation("/admin/login"); return; }
    void fetchSessions().then((data) => { setSessions(data); setLoading(false); });
  }, [setLocation]);

  async function onDelete(id: number) {
    if (!confirm("Hapus training ini?")) return;
    setDeleting(id);
    await deleteSession(id);
    setSessions((prev) => prev.filter((s) => s.id !== id));
    setDeleting(null);
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />
      <div className="container mx-auto px-4 py-10 max-w-6xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Training Center</h1>
            <p className="text-sm text-zinc-500 mt-1">Kelola sesi training & workshop</p>
          </div>
          <button
            onClick={() => setLocation("/admin/training/new")}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Training
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-16 rounded-xl bg-zinc-900 animate-pulse" />
            ))}
          </div>
        ) : sessions.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-zinc-500 mb-4">Belum ada training.</p>
            <button
              onClick={() => setLocation("/admin/training/new")}
              className="text-indigo-400 hover:text-indigo-300 text-sm underline"
            >
              Tambah training pertama
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-zinc-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-900 border-b border-zinc-800">
                <tr>
                  <th className="text-left px-4 py-3 text-zinc-400 font-semibold">Title</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-semibold hidden sm:table-cell">Brand</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-semibold hidden md:table-cell">Tanggal</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-semibold hidden lg:table-cell">Status</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-semibold hidden lg:table-cell">Flags</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {sessions.map((s) => (
                  <tr key={s.id} className="bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-white line-clamp-1">{s.title}</p>
                      <p className="text-xs text-zinc-500 mt-0.5">{s.format}</p>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${BRAND_BG[s.brand as TrainingBrand]}`}>
                        {s.brand}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-zinc-400 hidden md:table-cell text-xs">
                      {formatDate(s.start_datetime)}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${STATUS_BG[s.status as TrainingStatus]}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <div className="flex items-center gap-1.5">
                        {s.has_hands_on_lab && <FlaskConical className="w-3.5 h-3.5 text-amber-400" aria-label="Hands-On Lab" />}
                        {s.has_certificate && <Award className="w-3.5 h-3.5 text-yellow-400" aria-label="Certificate" />}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 justify-end">
                        <button
                          onClick={() => setLocation(`/admin/training/${s.id}/edit`)}
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => void onDelete(s.id)}
                          disabled={deleting === s.id}
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-40"
                          title="Hapus"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
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
  );
}
