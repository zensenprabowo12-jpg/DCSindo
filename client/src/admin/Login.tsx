import { useState } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { markAdminAuthedSession } from "./authGate";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState("admin");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const res = await fetch("/api/mikrotik-dcs/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username: user, password: pass }),
      });
      const data = await res.json() as { ok: boolean; message?: string };
      if (data.ok) {
        markAdminAuthedSession();
        setLocation("/admin");
      } else {
        setErr(data.message ?? "Login gagal");
      }
    } catch {
      setErr("Koneksi ke server gagal");
    }
    setLoading(false);
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black tracking-tight mb-1">Admin Panel</h1>
          <p className="text-sm text-muted-foreground">Dinamika Cipta Solusi</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 border border-border rounded-2xl p-6 bg-card">
          {err && (
            <div className="text-sm text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 rounded-lg p-3">
              {err}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="u">Username</Label>
            <Input id="u" value={user} onChange={(e) => setUser(e.target.value)} autoComplete="username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="p">Password</Label>
            <Input id="p" type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="current-password" />
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
