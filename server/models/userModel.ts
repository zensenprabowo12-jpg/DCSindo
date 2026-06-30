import type { ResultSetHeader, RowDataPacket } from "mysql2";
import bcrypt from "bcryptjs";
import { mysqlPool } from "../config/mysqlPool";
import { isValidRole, type UserRole } from "../auth/roles";

const BCRYPT_ROUNDS = 10;

export type UserRow = {
  id: number;
  username: string;
  password_hash: string;
  role: UserRole;
  name: string | null;
  is_active: 0 | 1;
  created_at: Date;
  updated_at: Date;
};

/** Bentuk aman untuk dikirim ke client (tanpa password_hash). */
export type PublicUser = {
  id: number;
  username: string;
  role: UserRole;
  name: string | null;
  is_active: boolean;
};

export function toPublicUser(row: UserRow): PublicUser {
  return {
    id: row.id,
    username: row.username,
    role: row.role,
    name: row.name,
    is_active: Boolean(row.is_active),
  };
}

let tableEnsured = false;

/**
 * Membuat tabel `users` jika belum ada, lalu SEED 1 admin dari .env
 * (ADMIN_USER / ADMIN_PASS) bila tabel masih kosong.
 * Dipanggil lazy sebelum query pertama. Mengikuti pola adminActivityLogModel.
 */
export async function ensureUsersTable(): Promise<void> {
  if (tableEnsured) return;
  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(190) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      role VARCHAR(20) NOT NULL DEFAULT 'admin',
      name VARCHAR(190) NULL,
      is_active TINYINT(1) NOT NULL DEFAULT 1,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      UNIQUE KEY uq_users_username (username)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
  tableEnsured = true;
  await seedAdminIfEmpty();
}

/**
 * Kalau tabel users kosong, buat 1 admin dari ADMIN_USER/ADMIN_PASS.
 * Ini menjaga admin lama tetap bisa login — tapi sekarang lewat tabel users + bcrypt.
 */
async function seedAdminIfEmpty(): Promise<void> {
  try {
    const [rows] = await mysqlPool.query<RowDataPacket[]>(
      "SELECT COUNT(*) AS cnt FROM users",
    );
    const count = Number(rows[0]?.cnt ?? 0);
    if (count > 0) return;

    const username = process.env.ADMIN_USER?.trim() || "admin";
    const password = process.env.ADMIN_PASS?.trim() || "MBGratisdcsindo";
    const password_hash = await bcrypt.hash(password, BCRYPT_ROUNDS);

    await mysqlPool.query<ResultSetHeader>(
      `INSERT INTO users (username, password_hash, role, name, is_active)
       VALUES (:username, :password_hash, 'admin', :name, 1)`,
      { username, password_hash, name: "Administrator" },
    );
    console.log(`[users] Seed admin awal dibuat dari .env: username="${username}"`);
  } catch (e) {
    console.error("[users] gagal seed admin awal:", (e as Error).message);
  }
}

// ─── QUERY ────────────────────────────────────────────────────

export async function findByUsername(username: string): Promise<UserRow | null> {
  await ensureUsersTable();
  const [rows] = await mysqlPool.query<(UserRow & RowDataPacket)[]>(
    "SELECT * FROM users WHERE username = :username LIMIT 1",
    { username: (username ?? "").trim() },
  );
  return rows[0] ?? null;
}

export async function findById(id: number): Promise<UserRow | null> {
  await ensureUsersTable();
  const [rows] = await mysqlPool.query<(UserRow & RowDataPacket)[]>(
    "SELECT * FROM users WHERE id = :id LIMIT 1",
    { id },
  );
  return rows[0] ?? null;
}

/** Verifikasi password plaintext terhadap hash bcrypt tersimpan. */
export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  if (!plain || !hash) return false;
  try {
    return await bcrypt.compare(plain, hash);
  } catch {
    return false;
  }
}

export async function listUsers(): Promise<PublicUser[]> {
  await ensureUsersTable();
  const [rows] = await mysqlPool.query<(UserRow & RowDataPacket)[]>(
    "SELECT * FROM users ORDER BY id ASC",
  );
  return rows.map(toPublicUser);
}

export type CreateUserInput = {
  username: string;
  password: string;
  role: UserRole;
  name?: string | null;
  is_active?: boolean;
};

export async function createUser(input: CreateUserInput): Promise<number> {
  await ensureUsersTable();
  const username = input.username.trim();
  if (!username) throw new Error("Username wajib diisi");
  if (!input.password) throw new Error("Password wajib diisi");
  if (!isValidRole(input.role)) throw new Error("Role tidak valid");

  const password_hash = await bcrypt.hash(input.password, BCRYPT_ROUNDS);
  const [result] = await mysqlPool.query<ResultSetHeader>(
    `INSERT INTO users (username, password_hash, role, name, is_active)
     VALUES (:username, :password_hash, :role, :name, :is_active)`,
    {
      username,
      password_hash,
      role: input.role,
      name: input.name?.trim() || null,
      is_active: input.is_active === false ? 0 : 1,
    },
  );
  return result.insertId;
}

export type UpdateUserInput = {
  username?: string;
  password?: string; // kalau diisi → re-hash
  role?: UserRole;
  name?: string | null;
  is_active?: boolean;
};

export async function updateUser(id: number, input: UpdateUserInput): Promise<boolean> {
  await ensureUsersTable();
  const sets: string[] = [];
  const params: Record<string, string | number | null> = { id };

  if (input.username !== undefined) {
    const u = input.username.trim();
    if (!u) throw new Error("Username tidak boleh kosong");
    sets.push("username = :username");
    params.username = u;
  }
  if (input.password) {
    sets.push("password_hash = :password_hash");
    params.password_hash = await bcrypt.hash(input.password, BCRYPT_ROUNDS);
  }
  if (input.role !== undefined) {
    if (!isValidRole(input.role)) throw new Error("Role tidak valid");
    sets.push("role = :role");
    params.role = input.role;
  }
  if (input.name !== undefined) {
    sets.push("name = :name");
    params.name = input.name?.trim() || null;
  }
  if (input.is_active !== undefined) {
    sets.push("is_active = :is_active");
    params.is_active = input.is_active ? 1 : 0;
  }

  if (!sets.length) return false;

  const [result] = await mysqlPool.query<ResultSetHeader>(
    `UPDATE users SET ${sets.join(", ")} WHERE id = :id`,
    params,
  );
  return result.affectedRows > 0;
}

export async function deleteUser(id: number): Promise<boolean> {
  await ensureUsersTable();
  const [result] = await mysqlPool.query<ResultSetHeader>(
    "DELETE FROM users WHERE id = :id",
    { id },
  );
  return result.affectedRows > 0;
}
