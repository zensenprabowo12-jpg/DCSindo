import RequireRole from "../RequireRole";

// Panel firmware hanya untuk admin.
export default function FirmwareProtectedRoute({ children }: { children: React.ReactNode }) {
  return <RequireRole roles={["admin"]}>{children}</RequireRole>;
}
