import { useEffect, useMemo, useState } from "react";
import AdminNavBar from "./NavBar";
import RequireRole from "./RequireRole";
import { fetchMe, type Role } from "./session";
import { Users as UsersIcon, Download } from "lucide-react";

type Registration = {
  id: number;
  training_id: number;
  full_name: string;
  email: string;
  phone: string;
  company: string | null;
  status: string;
  created_at: string;
  training_title: string | null;
  training_brand: string | null;
};

type TrainingOption = { id: number; title: string };

const STATUSES = ["registered", "confirmed", "attended", "cancelled"] as const;

const STATUS_STYLE: Record<string, string> = {
  registered: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  confirmed: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  attended: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  cancelled: "bg-zinc-600/20 text-zinc-400 border-zinc-600/40",
};

function formatDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("id-ID", {
    day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
  });
}

function downloadCsv(rows: Registration[]) {
  const headers = ["Nama", "Email", "HP", "Perusahaan", "Training", "Tanggal Daftar", "Status"];
  const esc = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
  const lines = [
    headers.map(esc).join(","),
    ...rows.map((r) =>
      [
        r.full_name,
        r.email,
        r.phone,
        r.company ?? "",
        r.training_title ?? "",
        formatDateTime(r.created_at),
        r.status,
      ]
        .map((v) => esc(String(v)))
        .join(","),
    ),
  ];
  // BOM UTF-8 agar Excel membuka karakter non-ASCII dengan benar.
  const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `peserta-training-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function PesertaInner() {
  const [rows, setRows] = useState<Registration[] | null>(null);
  const [trainings, setTrainings] = useState<TrainingOption[]>([]);
  const [filter, setFilter] = useState<string>(""); // training_id atau ""
  const [role, setRole] = useState<Role | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const canEditStatus = role === "admin" || role === "trainer";

  async function loadRows(trainingId: string) {
    setErr(null);
    const q = trainingId ? `?training_id=${encodeURIComponent(trainingId)}` : "";
    try {
      const res = await fetch(`/api/training/registrations${q}`, { credentials: "include" });
      const json = (await res.json()) as { ok: boolean; data?: Registration[]; message?: string };
      if (json.ok && Array.isArray(json.data)) setRows(json.data);
      else {
        setErr(json.message ?? "Gagal memuat peserta");
        setRows([]);
      }
    } catch {
      setErr("Koneksi ke server gagal");
      setRows([]);
    }
  }

  useEffect(() => {
    void fetchMe().then((me) => setRole(me.role));
    void (async () => {
      try {
        const res = await fetch("/api/training/sessions", { credentials: "include" });
        const json = (await res.json()) as { ok: boolean; data?: { id: number; title: string }[] };
        if (json.ok && json.data) setTrainings(json.data.map((t) => ({ id: t.id, title: t.title })));
      } catch {
        /* ignore */
      }
    })();
    void loadRows("");
  }, []);

  function onFilterChange(v: string) {
    setFilter(v);
    setRows(null);
    void loadRows(v);
  }

  async function onChangeStatus(id: number, status: string) {
    const res = await fetch(`/api/training/registrations/${id}/status`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const json = (await res.json()) as { ok: boolean; message?: string };
    if (!json.ok) {
      alert(json.message ?? "Gagal mengubah status");
      return;
    }
    setRows((prev) => (prev ? prev.map((r) => (r.id === id ? { ...r, status } : r)) : prev));
  }

  const total = useMemo(() => rows?.length ?? 0, [rows]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Peserta Training</h1>
            <p className="text-sm text-zinc-500 mt-1">
              Daftar pendaftar training{role ? ` — akses: ${role}` : ""}.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={filter}
              onChange={(e) => onFilterChange(e.target.value)}
              className="h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-sm px-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Semua training</option>
              {trainings.map((t) => (
                <option key={t.id} value={String(t.id)}>
                  {t.title}
                </option>
              ))}
            </select>
            <button
              onClick={() => rows && rows.length > 0 && downloadCsv(rows)}
              disabled={!rows || rows.length === 0}
              className="h-10 flex items-center gap-2 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm font-medium text-zinc-200 disabled:opacity-40 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {err && (
          <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5 mb-5">
            {err}
          </div>
        )}

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
          {rows == null ? (
            <div className="p-6 space-y-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-6 w-full rounded bg-zinc-800 animate-pulse" />
              ))}
            </div>
          ) : rows.length === 0 ? (
            <div className="py-20 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-800 text-zinc-500 mb-4">
                <UsersIcon className="w-6 h-6" />
              </div>
              <p className="text-zinc-400 font-medium">Belum ada peserta</p>
              <p className="text-zinc-600 text-sm mt-1">
                Data peserta akan muncul di sini setelah ada yang mendaftar training.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 text-left text-xs uppercase tracking-wider text-zinc-500">
                    <th className="px-4 py-3 font-medium">Nama</th>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">HP</th>
                    <th className="px-4 py-3 font-medium hidden md:table-cell">Perusahaan</th>
                    <th className="px-4 py-3 font-medium">Training</th>
                    <th className="px-4 py-3 font-medium hidden lg:table-cell">Tgl Daftar</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-b border-zinc-800/60 last:border-0 hover:bg-zinc-800/40">
                      <td className="px-4 py-3 text-zinc-100 font-medium">{r.full_name}</td>
                      <td className="px-4 py-3 text-zinc-400">{r.email}</td>
                      <td className="px-4 py-3 text-zinc-400 whitespace-nowrap">{r.phone}</td>
                      <td className="px-4 py-3 text-zinc-400 hidden md:table-cell">{r.company ?? "—"}</td>
                      <td className="px-4 py-3 text-zinc-300">{r.training_title ?? "—"}</td>
                      <td className="px-4 py-3 text-zinc-500 hidden lg:table-cell whitespace-nowrap">
                        {formatDateTime(r.created_at)}
                      </td>
                      <td className="px-4 py-3">
                        {canEditStatus ? (
                          <select
                            value={r.status}
                            onChange={(e) => void onChangeStatus(r.id, e.target.value)}
                            className="h-8 rounded-md bg-zinc-800 border border-zinc-700 text-xs px-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            {STATUSES.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <span
                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                              STATUS_STYLE[r.status] ?? STATUS_STYLE.registered
                            }`}
                          >
                            {r.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {rows != null && rows.length > 0 && (
          <p className="mt-4 text-xs text-zinc-600">Total {total} peserta.</p>
        )}
      </div>
    </div>
  );
}

export default function Peserta() {
  return (
    <RequireRole roles={["admin", "trainer", "sales"]}>
      <PesertaInner />
    </RequireRole>
  );
}
