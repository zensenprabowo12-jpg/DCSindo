import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { fetchMe, logout, type Role } from "./session";

type Tab = { label: string; href: string; roles: Role[] };

const TABS: Tab[] = [
  { label: "DCS", href: "/admin", roles: ["admin"] },
  { label: "MikroTik", href: "/admin/mikrotik", roles: ["admin"] },
  { label: "Ubiquiti", href: "/admin/ubiquiti", roles: ["admin"] },
  { label: "V-SOL", href: "/admin/vsol", roles: ["admin"] },
  { label: "Firmware", href: "/admin/firmware", roles: ["admin"] },
  { label: "Training", href: "/admin/training", roles: ["admin", "trainer"] },
  { label: "Peserta", href: "/admin/peserta", roles: ["admin", "trainer", "sales"] },
  { label: "Users", href: "/admin/users", roles: ["admin"] },
];

export default function AdminNavBar() {
  const [location, setLocation] = useLocation();
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    let alive = true;
    void fetchMe().then((me) => {
      if (alive) setRole(me.role);
    });
    return () => {
      alive = false;
    };
  }, []);

  function isActive(href: string) {
    if (href === "/admin") return location === "/admin";
    return location.startsWith(href);
  }

  async function onLogout() {
    await logout();
    setLocation("/admin/login");
  }

  // Sebelum role diketahui, jangan tampilkan tab (hindari flash tab yang tidak berhak).
  const visibleTabs = role ? TABS.filter((t) => t.roles.includes(role)) : [];

  return (
    <div className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Tabs */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-0.5">
              {visibleTabs.map((tab) => (
                <button
                  key={tab.href}
                  onClick={() => setLocation(tab.href)}
                  className={[
                    "relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-150",
                    isActive(tab.href)
                      ? "text-white bg-zinc-800"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60",
                  ].join(" ")}
                >
                  {tab.label}
                  {isActive(tab.href) && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-indigo-500 rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1">
            {role && (
              <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 mr-1">
                {role}
              </span>
            )}
            <button
              onClick={() => setLocation("/")}
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors px-3 py-1.5 rounded-md hover:bg-zinc-800/60"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Website
            </button>
            <button
              onClick={() => void onLogout()}
              className="text-xs text-zinc-500 hover:text-red-400 transition-colors px-3 py-1.5 rounded-md hover:bg-zinc-800/60"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
