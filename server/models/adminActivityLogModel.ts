import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";

export type AdminActivityLogRow = {
  id: number;
  attempted_username: string;
  success: 0 | 1;
  ip_address: string | null;
  user_agent: string | null;
  created_at: Date;
};

let tableEnsured = false;

/**
 * Membuat tabel log aktivitas login admin jika belum ada.
 * Dipanggil sekali (lazy) sebelum insert / select pertama.
 */
async function ensureTable(): Promise<void> {
  if (tableEnsured) return;
  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS admin_activity_log (
      id INT AUTO_INCREMENT PRIMARY KEY,
      attempted_username VARCHAR(190) NOT NULL DEFAULT '',
      success TINYINT(1) NOT NULL DEFAULT 0,
      ip_address VARCHAR(64) NULL,
      user_agent VARCHAR(512) NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
  tableEnsured = true;
}

/**
 * Catat satu percobaan login admin.
 * Tidak pernah melempar error ke pemanggil — logging tidak boleh membuat login gagal.
 */
export async function recordAdminLoginAttempt(input: {
  attemptedUsername: string;
  success: boolean;
  ipAddress?: string | null;
  userAgent?: string | null;
}): Promise<void> {
  try {
    await ensureTable();
    await mysqlPool.query<ResultSetHeader>(
      `INSERT INTO admin_activity_log
        (attempted_username, success, ip_address, user_agent)
       VALUES (:attempted_username, :success, :ip_address, :user_agent)`,
      {
        attempted_username: (input.attemptedUsername ?? "").slice(0, 190),
        success: input.success ? 1 : 0,
        ip_address: (input.ipAddress ?? null)?.slice(0, 64) ?? null,
        user_agent: (input.userAgent ?? null)?.slice(0, 512) ?? null,
      },
    );
  } catch (e) {
    console.error("[adminActivityLog] gagal mencatat percobaan login:", (e as Error).message);
  }
}

/** Ambil daftar log terbaru (default 100 baris). */
export async function listAdminLoginAttempts(limit = 100): Promise<AdminActivityLogRow[]> {
  await ensureTable();
  const safeLimit = Math.min(Math.max(Number.isFinite(limit) ? limit : 100, 1), 500);
  const [rows] = await mysqlPool.query<(AdminActivityLogRow & RowDataPacket)[]>(
    `SELECT id, attempted_username, success, ip_address, user_agent, created_at
       FROM admin_activity_log
      ORDER BY created_at DESC, id DESC
      LIMIT ${safeLimit}`,
  );
  return rows;
}
