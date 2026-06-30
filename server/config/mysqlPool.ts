import mysql from "mysql2/promise";
import type { PoolOptions } from "mysql2";

function requiredEnv(name: string): string {
  const v = process.env[name];
  if (!v || !v.trim()) {
    throw new Error(`[MySQL] ENV "${name}" wajib di-set (cek file .env).`);
  }
  return v.trim();
}

function loadPoolOptions(): PoolOptions {
  const socketPath = process.env.DB_SOCKET?.trim();
  const user       = requiredEnv("DB_USER");
  const password   = process.env.DB_PASSWORD ?? "";
  const database   = requiredEnv("DB_NAME");

  // Kalau DB_SOCKET ada → pakai UNIX socket (Linux server)
  if (socketPath) {
    console.log(`[MySQL] Mode: UNIX socket → ${socketPath}`);
    return { socketPath, user, password, database, waitForConnections: true, connectionLimit: 10, namedPlaceholders: true };
  }

  // Kalau tidak ada → pakai TCP host/port (Windows / remote server)
  const host = process.env.DB_HOST ?? "localhost";
  const port = parseInt(process.env.DB_PORT ?? "3306", 10);
  console.log(`[MySQL] Mode: TCP → ${host}:${port}`);
  return { host, port, user, password, database, waitForConnections: true, connectionLimit: 10, namedPlaceholders: true };
}

let poolOptions: PoolOptions | null = null;

try {
  poolOptions = loadPoolOptions();
} catch (e) {
  console.error((e as Error).message);
}

export const mysqlPool = mysql.createPool(poolOptions ?? {});

/**
 * Opsi koneksi MySQL yang sudah di-resolve (host/port atau socket + kredensial).
 * Dipakai mis. oleh express-mysql-session untuk session store.
 * null bila konfigurasi env belum lengkap.
 */
export function getMysqlConnectionOptions(): PoolOptions | null {
  return poolOptions;
}

function mysqlErrorHint(err: { code?: string; message?: string }): void {
  console.error("[MySQL]", err.message ?? String(err));
  if (err.code === "ER_BAD_DB_ERROR") {
    console.error(`[MySQL] Database tidak ditemukan. Cek DB_NAME di .env`);
  } else if (err.code === "ECONNREFUSED") {
    console.error(`[MySQL] Koneksi ditolak — cek DB_HOST, DB_PORT, dan pastikan MySQL berjalan.`);
  } else if (err.code === "ER_ACCESS_DENIED_ERROR") {
    console.error(`[MySQL] Akses ditolak — cek DB_USER dan DB_PASSWORD di .env.`);
  }
}

export async function verifyMysqlOnStartup(): Promise<void> {
  if (!poolOptions) {
    console.error("[MySQL] Konfigurasi env belum lengkap. Koneksi tidak dicoba.");
    return;
  }
  try {
    const conn = await mysqlPool.getConnection();
    try {
      await conn.ping();
      console.log("[MySQL] ✅ Database connected!");
    } finally {
      conn.release();
    }
  } catch (e) {
    mysqlErrorHint(e as { code?: string; message?: string });
  }
}