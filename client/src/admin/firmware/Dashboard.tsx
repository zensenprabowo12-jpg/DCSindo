import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import AdminNavBar from "../NavBar";
import FirmwareProtectedRoute from "./ProtectedRoute";
import { apiFirmwareAdminList, FIRMWARE_BRANDS, FIRMWARE_BRAND_META } from "./api";

function DashboardInner() {
  const [, setLocation] = useLocation();
  const [counts, setCounts] = useState<Record<string, number | null>>({});

  useEffect(() => {
    FIRMWARE_BRANDS.forEach((b) => {
      void apiFirmwareAdminList({ brand: b }).then((r) => {
        setCounts((prev) => ({ ...prev, [b]: r.ok ? r.data.length : null }));
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-white tracking-tight">Firmware</h1>
          <p className="text-sm text-zinc-500 mt-1">Pilih brand untuk mengelola firmware</p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FIRMWARE_BRANDS.map((key) => {
            const meta = FIRMWARE_BRAND_META[key];
            return (
              <div
                key={key}
                onClick={() => setLocation(`/admin/firmware/${key}`)}
                className={[
                  "group relative rounded-2xl border bg-zinc-900 p-6 transition-all duration-200 cursor-pointer hover:bg-zinc-800/80",
                  meta.border,
                ].join(" ")}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${meta.accent} pointer-events-none`} />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
                    <span className={`text-xs font-semibold uppercase tracking-widest ${meta.label}`}>
                      {key}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-1">{meta.name}</h2>
                  <p className="text-sm text-zinc-500">Kelola firmware {meta.name}</p>

                  <div className="mt-4">
                    {counts[key] == null ? (
                      <div className="h-5 w-20 rounded bg-zinc-800 animate-pulse" />
                    ) : (
                      <span className="text-2xl font-bold text-white">
                        {counts[key]}
                        <span className="text-sm font-normal text-zinc-500 ml-1.5">firmware</span>
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    Kelola firmware
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function FirmwareDashboard() {
  return (
    <FirmwareProtectedRoute>
      <DashboardInner />
    </FirmwareProtectedRoute>
  );
}
