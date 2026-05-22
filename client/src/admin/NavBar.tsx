import { useLocation } from "wouter";

const TABS = [
  { label: "DCS Admin", href: "/admin" },
  { label: "MikroTik", href: "/admin/mikrotik" },
  { label: "Ubiquiti", href: "/admin/ubiquiti" },
  { label: "V-SOL", href: "/admin/vsol", disabled: true },
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
    <div className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Tabs */}
          <div className="flex items-center gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.href}
                disabled={tab.disabled}
                onClick={() => !tab.disabled && setLocation(tab.href)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-all
                  ${tab.disabled
                    ? "text-muted-foreground/40 cursor-not-allowed"
                    : isActive(tab.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }
                `}
              >
                {tab.label}
                {tab.disabled && (
                  <span className="ml-1 text-xs opacity-50">(nanti)</span>
                )}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLocation("/")}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-muted"
            >
              ← Website
            </button>
            <button
              onClick={() => void onLogout()}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-muted"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
