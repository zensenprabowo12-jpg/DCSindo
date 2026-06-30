// Helper sesi/role terpusat untuk semua halaman admin.
// Sumber kebenaran = server (cookie session) via GET /api/auth/me.

export type Role = "admin" | "trainer" | "sales";

export type Me = {
  authed: boolean;
  role: Role | null;
  username: string | null;
};

export async function fetchMe(): Promise<Me> {
  try {
    const res = await fetch("/api/auth/me", { credentials: "include" });
    const json = (await res.json()) as {
      ok: boolean;
      authed?: boolean;
      user?: { username: string; role: Role } | null;
    };
    return {
      authed: Boolean(json.authed),
      role: json.user?.role ?? null,
      username: json.user?.username ?? null,
    };
  } catch {
    return { authed: false, role: null, username: null };
  }
}

/** Halaman tujuan default per role (dipakai setelah login & saat akses ditolak). */
export function roleHome(role: Role | null): string {
  switch (role) {
    case "admin":
      return "/admin";
    case "trainer":
      return "/admin/training";
    case "sales":
      return "/admin/peserta";
    default:
      return "/admin/login";
  }
}

export async function logout(): Promise<void> {
  try {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
  } catch {
    /* ignore */
  }
}
