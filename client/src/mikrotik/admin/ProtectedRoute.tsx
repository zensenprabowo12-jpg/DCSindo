import RequireRole from "../../admin/RequireRole";

// Katalog brand hanya untuk admin (Fase 1).
export default function MikrotikDcsProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RequireRole roles={["admin"]}>{children}</RequireRole>;
}
