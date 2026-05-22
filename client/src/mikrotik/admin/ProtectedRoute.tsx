import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { apiMe } from "../api";

export default function MikrotikDcsProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [, setLocation] = useLocation();
  const [ready, setReady] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => {
  let c = true;
  (async () => {
    const r = await apiMe();
    if (!c) return;
    if (r.ok && r.data.authed) {
      setOk(true);
    } else {
      setLocation("/admin/login");
    }
    setReady(true);
  })();
  return () => { c = false; };
}, [setLocation]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <p className="text-muted-foreground">Memuat…</p>
      </div>
    );
  }
  if (!ok) return null;
  return <>{children}</>;
}
