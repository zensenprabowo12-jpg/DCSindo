import { useLocation } from "wouter";

const TABS: { label: string; href: string; disabled?: boolean }[] = [
  { label: "DCS", href: "/admin" },
  { label: "MikroTik", href: "/admin/mikrotik" },
  { label: "Ubiquiti", href: "/admin/ubiquiti" },
  { label: "Training", href: "/admin/training" },
  { label: "V-SOL", href: "/admin/vsol" },
];

export default function AdminNavBar() {
  const [location, setLocation] = useLocation();

  function isActive(href: string) {
    if (href === "/admin") return location === "/admin";
    return location.startsWith(href);
  }

  async function onLogout() {
    await fetch("/api/mikrotik-dcs/auth/logout", { method: "POST", credentials: "include" });
    setLocation("/admin/login");
  }

  return (
    <div className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Tabs */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-0.5">
              {TABS.map((tab) => (
                <button
                  key={tab.href}
                  disabled={tab.disabled}
                  onClick={() => !tab.disabled && setLocation(tab.href)}
                  className={[
                    "relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-150",
                    tab.disabled
                      ? "text-zinc-600 cursor-not-allowed"
                      : isActive(tab.href)
                      ? "text-white bg-zinc-800"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60",
                  ].join(" ")}
                >
                  {tab.label}
                  {isActive(tab.href) && !tab.disabled && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-indigo-500 rounded-full" />
                  )}
                  {tab.disabled && (
                    <span className="ml-1.5 text-[10px] font-normal text-zinc-600">soon</span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1">
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
