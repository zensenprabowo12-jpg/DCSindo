import type { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  findById,
  listUsers,
  updateUser,
} from "../models/userModel";
import { isValidRole, type UserRole } from "../auth/roles";
import { requireRole } from "../middleware/requireRole";

// Manajemen user hanya untuk admin.
const requireAdmin = requireRole("admin");

function parseId(req: Request, res: Response): number | null {
  const n = Number.parseInt(String(req.params.id ?? ""), 10);
  if (!Number.isFinite(n) || n < 1) {
    res.status(400).json({ ok: false, message: "ID tidak valid" });
    return null;
  }
  return n;
}

/** Jumlah admin yang masih aktif (untuk menjaga minimal 1 admin tersisa). */
async function activeAdminCount(): Promise<number> {
  const users = await listUsers();
  return users.filter((u) => u.role === "admin" && u.is_active).length;
}

export async function apiUsersList(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  try {
    const users = await listUsers();
    res.json({ ok: true, data: users });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiUsersCreate(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  const body = (req.body ?? {}) as {
    username?: unknown;
    password?: unknown;
    role?: unknown;
    name?: unknown;
    is_active?: unknown;
  };
  const username = typeof body.username === "string" ? body.username.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";
  const role = body.role;
  if (!username || !password) {
    res.status(400).json({ ok: false, message: "Username dan password wajib diisi" });
    return;
  }
  if (!isValidRole(role)) {
    res.status(400).json({ ok: false, message: "Role tidak valid (admin/trainer/sales)" });
    return;
  }
  try {
    const id = await createUser({
      username,
      password,
      role: role as UserRole,
      name: typeof body.name === "string" ? body.name : null,
      is_active: body.is_active === false ? false : true,
    });
    res.status(201).json({ ok: true, data: { id } });
  } catch (e) {
    if ((e as { code?: string }).code === "ER_DUP_ENTRY") {
      res.status(400).json({ ok: false, message: "Username sudah dipakai" });
      return;
    }
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiUsersUpdate(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  const id = parseId(req, res);
  if (id == null) return;

  const target = await findById(id);
  if (!target) {
    res.status(404).json({ ok: false, message: "User tidak ditemukan" });
    return;
  }

  const body = (req.body ?? {}) as {
    username?: unknown;
    password?: unknown;
    role?: unknown;
    name?: unknown;
    is_active?: unknown;
  };

  const newRole = body.role !== undefined && isValidRole(body.role) ? (body.role as UserRole) : undefined;
  if (body.role !== undefined && newRole === undefined) {
    res.status(400).json({ ok: false, message: "Role tidak valid (admin/trainer/sales)" });
    return;
  }
  const newActive = body.is_active === undefined ? undefined : body.is_active !== false;

  // Jaga: jangan sampai admin aktif terakhir di-nonaktifkan / diturunkan rolenya.
  const wasActiveAdmin = target.role === "admin" && target.is_active === 1;
  const willStopBeingActiveAdmin =
    wasActiveAdmin && ((newRole !== undefined && newRole !== "admin") || newActive === false);
  if (willStopBeingActiveAdmin && (await activeAdminCount()) <= 1) {
    res.status(400).json({ ok: false, message: "Tidak bisa menurunkan/menonaktifkan admin aktif terakhir." });
    return;
  }

  try {
    await updateUser(id, {
      username: typeof body.username === "string" ? body.username : undefined,
      password: typeof body.password === "string" && body.password ? body.password : undefined,
      role: newRole,
      name: body.name === undefined ? undefined : typeof body.name === "string" ? body.name : null,
      is_active: newActive,
    });
    res.json({ ok: true, data: { id } });
  } catch (e) {
    if ((e as { code?: string }).code === "ER_DUP_ENTRY") {
      res.status(400).json({ ok: false, message: "Username sudah dipakai" });
      return;
    }
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiUsersDelete(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  const id = parseId(req, res);
  if (id == null) return;

  // Jangan hapus diri sendiri.
  if (req.session.userId === id) {
    res.status(400).json({ ok: false, message: "Tidak bisa menghapus akun yang sedang login." });
    return;
  }

  const target = await findById(id);
  if (!target) {
    res.status(404).json({ ok: false, message: "User tidak ditemukan" });
    return;
  }

  // Jangan hapus admin aktif terakhir.
  if (target.role === "admin" && target.is_active === 1 && (await activeAdminCount()) <= 1) {
    res.status(400).json({ ok: false, message: "Tidak bisa menghapus admin aktif terakhir." });
    return;
  }

  try {
    const ok = await deleteUser(id);
    if (!ok) {
      res.status(500).json({ ok: false, message: "Gagal hapus" });
      return;
    }
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}
