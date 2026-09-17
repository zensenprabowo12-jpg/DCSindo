import RequireRole from "../RequireRole";

// Panel firmware: admin + trainer (keempat halaman memakai wrapper ini).
export default function FirmwareProtectedRoute({ children }: { children: React.ReactNode }) {
  return <RequireRole roles={["admin", "trainer"]}>{children}</RequireRole>;
}
