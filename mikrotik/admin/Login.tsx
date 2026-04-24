import { useState } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiLogin, apiLogout } from "../api";
import { useEffect } from "react";
import { markAdminAuthedOnce } from "./authGate";

/**
 * Login admin sederhana (admin / admindcs) — session di server
 */
export default function MikrotikDcsAdminLogin() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState("admin");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Pastikan tiap masuk ke halaman login, sesi sebelumnya dibersihkan.
    void apiLogout();
  }, [setLocation]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    const r = await apiLogin(user, pass);
    setLoading(false);
    if (r.ok) {
      markAdminAuthedOnce();
      setLocation("/mikrotik-dcs/admin");
    } else {
      setErr(r.message);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 max-w-md">
        <h1 className="text-2xl font-black tracking-tight mb-2">Admin MikroTik</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Masuk untuk mengelola katalog produk
        </p>
        <form onSubmit={onSubmit} className="space-y-4 border border-border rounded-2xl p-6 bg-card">
          {err && (
            <div className="text-sm text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 rounded-lg p-3">
              {err}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="u">Username</Label>
            <Input
              id="u"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="p">Password</Label>
            <Input
              id="p"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "…" : "Login"}
          </Button>
        </form>
        <p className="text-center mt-6">
          <Button variant="link" asChild>
            <a href="/">Kembali ke website utama</a>
          </Button>
        </p>
      </div>
    </Layout>
  );
}
