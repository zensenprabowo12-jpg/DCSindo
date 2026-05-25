import { useLocation } from "wouter";
import { isAdminAuthedSession, clearAdminAuthedSession } from "./authGate";
import { useEffect, useState } from "react";
import AdminNavBar from "./NavBar";

async function fetchProductCount(url: string): Promise<number | null> {
  try {
    const res = await fetch(url, { credentials: "include" });
    const json = await res.json() as { ok: boolean; data?: unknown[] };
    if (json.ok && Array.isArray(json.data)) return json.data.length;
    return null;
  } catch {
    return null;
  }
}

const BRANDS = [
  {
    key: "mikrotik",
    name: "MikroTik",
    description: "Kelola produk katalog MikroTik DCS",
    href: "/admin/mikrotik",
    accentColor: "from-red-500/10 to-transparent",
    borderColor: "border-zinc-800 hover:border-red-500/50",
    dotColor: "bg-red-500",
    labelColor: "text-red-400",
  },
  {
    key: "ubiquiti",
    name: "Ubiquiti",
    description: "Kelola produk katalog Ubiquiti DCS",
    href: "/admin/ubiquiti",
    accentColor: "from-blue-500/10 to-transparent",
    borderColor: "border-zinc-800 hover:border-blue-500/50",
    dotColor: "bg-blue-500",
    labelColor: "text-blue-400",
  },
  {
    key: "vsol",
    name: "V-SOL",
    description: "Segera hadir",
    href: "/admin/vsol",
    disabled: true,
    accentColor: "from-zinc-700/10 to-transparent",
    borderColor: "border-zinc-800/50",
    dotColor: "bg-zinc-600",
    labelColor: "text-zinc-600",
  },
];

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [ready, setReady] = useState(false);
  const [counts, setCounts] = useState<Record<string, number | null>>({});

  useEffect(() => {
    if (!isAdminAuthedSession()) {
      setLocation("/admin/login");
      return;
    }
    setReady(true);
    void Promise.all([
      fetchProductCount("/api/mikrotik-dcs/admin/products").then((n) =>
        setCounts((prev) => ({ ...prev, mikrotik: n }))
      ),
      fetchProductCount("/api/ubiquiti-dcs/admin/products").then((n) =>
        setCounts((prev) => ({ ...prev, ubiquiti: n }))
      ),
    ]);
  }, [setLocation]);

  async function onLogout() {
    await fetch("/api/mikrotik-dcs/auth/logout", { method: "POST", credentials: "include" });
    clearAdminAuthedSession();
    setLocation("/admin/login");
  }

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-white tracking-tight">Admin Dashboard</h1>
          <p className="text-sm text-zinc-500 mt-1">Dinamika Cipta Solusi — Select a brand to manage</p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.key}
              onClick={() => !brand.disabled && setLocation(brand.href)}
              className={[
                "group relative rounded-2xl border bg-zinc-900 p-6 transition-all duration-200",
                brand.borderColor,
                brand.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:bg-zinc-800/80",
              ].join(" ")}
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${brand.accentColor} pointer-events-none`} />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${brand.dotColor}`} />
                  <span className={`text-xs font-semibold uppercase tracking-widest ${brand.labelColor}`}>
                    {brand.key}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mb-1">{brand.name}</h2>
                <p className="text-sm text-zinc-500">{brand.description}</p>

                {!brand.disabled && (
                  <div className="mt-4">
                    {counts[brand.key] == null ? (
                      <div className="h-5 w-20 rounded bg-zinc-800 animate-pulse" />
                    ) : (
                      <span className="text-2xl font-bold text-white">
                        {counts[brand.key]}
                        <span className="text-sm font-normal text-zinc-500 ml-1.5">produk</span>
                      </span>
                    )}
                  </div>
                )}

                {!brand.disabled && (
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    Kelola produk
                    <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
                {brand.disabled && (
                  <div className="mt-5 text-xs text-zinc-700 font-medium">Segera hadir</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions footer */}
        <div className="mt-12 flex items-center justify-between border-t border-zinc-800 pt-6">
          <span className="text-xs text-zinc-600">DCS Admin Panel</span>
          <div className="flex gap-3">
            <button
              onClick={() => setLocation("/")}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              ← Website
            </button>
            <button
              onClick={() => void onLogout()}
              className="text-xs text-zinc-500 hover:text-red-400 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
