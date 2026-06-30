import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { fetchMe, roleHome, type Role } from "./session";

/**
 * Guard halaman berbasis role (cek ke server /api/auth/me).
 * - Belum login          → /admin/login
 * - Login tapi role salah → diarahkan ke "rumah" role-nya (roleHome)
 * - Role sesuai           → render children
 *
 * Tidak mengubah desain halaman — hanya membungkus.
 */
export default function RequireRole({
  roles,
  children,
}: {
  roles: Role[];
  children: React.ReactNode;
}) {
  const [, setLocation] = useLocation();
  const [ready, setReady] = useState(false);
  // Identitas array role distabilkan agar effect tidak loop.
  const rolesKey = roles.join(",");

  useEffect(() => {
    let alive = true;
    void (async () => {
      const me = await fetchMe();
      if (!alive) return;
      if (!me.authed || !me.role) {
        setLocation("/admin/login");
        return;
      }
      if (!rolesKey.split(",").includes(me.role)) {
        setLocation(roleHome(me.role));
        return;
      }
      setReady(true);
    })();
    return () => {
      alive = false;
    };
  }, [setLocation, rolesKey]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100">
        <p className="text-zinc-500 text-sm">Memuat…</p>
      </div>
    );
  }
  return <>{children}</>;
}
