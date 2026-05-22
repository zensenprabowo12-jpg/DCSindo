import { useLocation } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { isAdminAuthedSession, clearAdminAuthedSession } from "./authGate";
import { useEffect, useState } from "react";

const BRANDS = [
  {
    key: "mikrotik",
    name: "MikroTik",
    description: "Kelola produk katalog MikroTik DCS",
    href: "/admin/mikrotik",
    color: "bg-orange-50 border-orange-200 hover:border-orange-400 dark:bg-orange-950/20 dark:border-orange-900",
    iconColor: "text-orange-500",
    icon: "🔴",
  },
  {
    key: "ubiquiti",
    name: "Ubiquiti",
    description: "Kelola produk katalog Ubiquiti DCS",
    href: "/admin/ubiquiti",
    color: "bg-blue-50 border-blue-200 hover:border-blue-400 dark:bg-blue-950/20 dark:border-blue-900",
    iconColor: "text-blue-500",
    icon: "🔵",
  },
];

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isAdminAuthedSession()) {
      setLocation("/admin/login");
      return;
    }
    setReady(true);
  }, [setLocation]);

  async function onLogout() {
    await fetch("/api/mikrotik-dcs/auth/logout", { method: "POST", credentials: "include" });
    clearAdminAuthedSession();
    setLocation("/admin/login");
  }

  if (!ready) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
              <Shield className="w-7 h-7" />
              Admin Panel
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Dinamika Cipta Solusi — Pilih brand untuk dikelola
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <a href="/">Website</a>
            </Button>
            <Button variant="outline" onClick={() => void onLogout()}>
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.key}
              onClick={() => setLocation(brand.href)}
              className={`block rounded-2xl border-2 p-6 transition-all duration-200 cursor-pointer ${brand.color}`}
            >
              <div className="text-4xl mb-4">{brand.icon}</div>
              <h2 className="text-xl font-black tracking-tight mb-1">{brand.name}</h2>
              <p className="text-sm text-muted-foreground">{brand.description}</p>
              <div className="mt-4 text-sm font-semibold text-primary">
                Kelola produk →
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
