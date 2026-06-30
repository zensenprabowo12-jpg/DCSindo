import { useEffect, useState } from "react";
import AdminNavBar from "./NavBar";
import RequireRole from "./RequireRole";
import type { Role } from "./session";
import { Plus, Trash2, KeyRound } from "lucide-react";

type User = {
  id: number;
  username: string;
  role: Role;
  name: string | null;
  is_active: boolean;
};

const ROLES: Role[] = ["admin", "trainer", "sales"];

async function api<T = unknown>(
  url: string,
  init?: RequestInit,
): Promise<{ ok: boolean; data?: T; message?: string }> {
  try {
    const res = await fetch(url, { credentials: "include", ...init });
    return (await res.json()) as { ok: boolean; data?: T; message?: string };
  } catch {
    return { ok: false, message: "Koneksi ke server gagal" };
  }
}

function UsersInner() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);

  // form create
  const [cUser, setCUser] = useState("");
  const [cName, setCName] = useState("");
  const [cPass, setCPass] = useState("");
  const [cRole, setCRole] = useState<Role>("trainer");
  const [creating, setCreating] = useState(false);

  async function load() {
    setErr(null);
    const r = await api<User[]>("/api/auth/users");
    if (r.ok && r.data) setUsers(r.data);
    else {
      setErr(r.message ?? "Gagal memuat user");
      setUsers([]);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function onCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!cUser.trim() || !cPass) {
      setErr("Username dan password wajib diisi");
      return;
    }
    setCreating(true);
    const r = await api("/api/auth/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: cUser.trim(), name: cName.trim() || null, password: cPass, role: cRole }),
    });
    setCreating(false);
    if (r.ok) {
      setCUser("");
      setCName("");
      setCPass("");
      setCRole("trainer");
      setShowCreate(false);
      void load();
    } else {
      setErr(r.message ?? "Gagal membuat user");
    }
  }

  async function patch(id: number, body: Record<string, unknown>) {
    const r = await api(`/api/auth/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!r.ok) {
      alert(r.message ?? "Gagal menyimpan");
    }
    void load();
  }

  async function onResetPassword(u: User) {
    const pwd = prompt(`Password baru untuk "${u.username}":`);
    if (!pwd) return;
    await patch(u.id, { password: pwd });
  }

  async function onDelete(u: User) {
    if (!confirm(`Hapus user "${u.username}"?`)) return;
    const r = await api(`/api/auth/users/${u.id}`, { method: "DELETE" });
    if (!r.ok) alert(r.message ?? "Gagal hapus");
    void load();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Manajemen User</h1>
            <p className="text-sm text-zinc-500 mt-1">Kelola akun & role (admin / trainer / sales)</p>
          </div>
          <button
            onClick={() => setShowCreate((v) => !v)}
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
          >
            <Plus className="w-4 h-4" />
            Tambah User
          </button>
        </div>

        {err && (
          <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5 mb-5">
            {err}
          </div>
        )}

        {showCreate && (
          <form
            onSubmit={onCreate}
            className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
          >
            <input
              value={cUser}
              onChange={(e) => setCUser(e.target.value)}
              placeholder="Username"
              autoComplete="off"
              className="h-10 rounded-lg bg-zinc-800 border border-zinc-700 text-sm px-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              value={cName}
              onChange={(e) => setCName(e.target.value)}
              placeholder="Nama (opsional)"
              className="h-10 rounded-lg bg-zinc-800 border border-zinc-700 text-sm px-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              value={cPass}
              onChange={(e) => setCPass(e.target.value)}
              type="text"
              placeholder="Password"
              autoComplete="new-password"
              className="h-10 rounded-lg bg-zinc-800 border border-zinc-700 text-sm px-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={cRole}
              onChange={(e) => setCRole(e.target.value as Role)}
              className="h-10 rounded-lg bg-zinc-800 border border-zinc-700 text-sm px-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <button
              type="submit"
              disabled={creating}
              className="h-10 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white text-sm font-semibold transition-colors"
            >
              {creating ? "Menyimpan…" : "Simpan"}
            </button>
          </form>
        )}

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
          {users == null ? (
            <div className="p-6 space-y-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-6 w-full rounded bg-zinc-800 animate-pulse" />
              ))}
            </div>
          ) : users.length === 0 ? (
            <div className="p-10 text-center text-sm text-zinc-500">Belum ada user.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 text-left text-xs uppercase tracking-wider text-zinc-500">
                    <th className="px-4 py-3 font-medium">Username</th>
                    <th className="px-4 py-3 font-medium">Nama</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-b border-zinc-800/60 last:border-0 hover:bg-zinc-800/40">
                      <td className="px-4 py-3 font-mono text-zinc-200">{u.username}</td>
                      <td className="px-4 py-3 text-zinc-400">{u.name ?? "—"}</td>
                      <td className="px-4 py-3">
                        <select
                          value={u.role}
                          onChange={(e) => void patch(u.id, { role: e.target.value })}
                          className="h-8 rounded-md bg-zinc-800 border border-zinc-700 text-xs px-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          {ROLES.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => void patch(u.id, { is_active: !u.is_active })}
                          className={[
                            "text-xs font-semibold px-2.5 py-1 rounded-full border transition-colors",
                            u.is_active
                              ? "bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20"
                              : "bg-zinc-700/30 text-zinc-400 border-zinc-700 hover:bg-zinc-700/50",
                          ].join(" ")}
                          title="Klik untuk toggle aktif/nonaktif"
                        >
                          {u.is_active ? "Aktif" : "Nonaktif"}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 justify-end">
                          <button
                            onClick={() => void onResetPassword(u)}
                            className="p-1.5 rounded-lg text-zinc-400 hover:text-indigo-300 hover:bg-zinc-700 transition-colors"
                            title="Reset password"
                          >
                            <KeyRound className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => void onDelete(u)}
                            className="p-1.5 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
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
    </div>
  );
}

export default function Users() {
  return (
    <RequireRole roles={["admin"]}>
      <UsersInner />
    </RequireRole>
  );
}
