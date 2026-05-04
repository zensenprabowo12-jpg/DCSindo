import mysql from "mysql2/promise";
import type { PoolOptions } from "mysql2";

/** Konfigurasi pool: hanya UNIX socket — tidak ada host/port TCP. */
export type MysqlSocketEnv = {
  socketPath: string;
  user: string;
  password: string;
  database: string;
};

function requiredEnv(name: string): string {
  const v = process.env[name];
  if (!v || !v.trim()) {
    throw new Error(`[MySQL] ENV "${name}" wajib di-set (cek file .env).`);
  }
  return v.trim();
}

/**
 * Wajib di `.env`:
 * - DB_SOCKET — path socket MySQL/MariaDB (contoh Debian: /var/run/mysqld/mysqld.sock)
 * - DB_USER
 * - DB_NAME
 * - DB_PASSWORD — boleh kosong
 */
function loadMysqlEnv(): MysqlSocketEnv {
  return {
    socketPath: requiredEnv("DB_SOCKET"),
    user: requiredEnv("DB_USER"),
    password: process.env.DB_PASSWORD ?? "",
    database: requiredEnv("DB_NAME"),
  };
}

const mysqlEnv = (() => {
  try {
    return loadMysqlEnv();
  } catch (e) {
    console.error((e as Error).message);
    return null;
  }
})();

function poolOptionsFromEnv(env: MysqlSocketEnv): PoolOptions {
  return {
    socketPath: env.socketPath,
    user: env.user,
    password: env.password,
    database: env.database,
    waitForConnections: true,
    connectionLimit: 10,
    namedPlaceholders: true,
  };
}

export const mysqlPool = mysql.createPool(
  mysqlEnv ? poolOptionsFromEnv(mysqlEnv) : {},
);

function mysqlErrorHint(err: {
  code?: string;
  errno?: number;
  message?: string;
}): void {
  const msg = err.message ?? String(err);
  console.error("[MySQL]", msg);

  if (err.code === "ER_BAD_DB_ERROR") {
    const dbName = mysqlEnv?.database ?? "<unknown>";
    console.error(
      `[MySQL] Database "${dbName}" tidak ada. Buat dulu, contoh:\n` +
        `  CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n` +
        `Atau set DB_NAME di .env ke nama database yang sudah Anda punya.\n` +
        `Skrip contoh: database/00_create_database.sql`,
    );
  } else if (err.code === "ECONNREFUSED") {
    console.error(
      "[MySQL] Koneksi ditolak — pastikan MySQL/MariaDB berjalan dan DB_SOCKET menunjuk ke file socket yang benar.",
    );
  } else if (err.code === "ER_ACCESS_DENIED_ERROR") {
    console.error(
      "[MySQL] Akses ditolak — periksa DB_USER dan DB_PASSWORD di .env.",
    );
  }
}

/**
 * Ping database saat startup.
 */
export async function verifyMysqlOnStartup(): Promise<void> {
  try {
    if (!mysqlEnv) {
      console.error("[MySQL] Konfigurasi env belum lengkap. Koneksi tidak dicoba.");
      return;
    }

    console.log(
      `[MySQL] Mencoba koneksi ke "${mysqlEnv.database}" lewat UNIX socket "${mysqlEnv.socketPath}" (user: "${mysqlEnv.user}")...`,
    );

    const conn = await mysqlPool.getConnection();
    try {
      await conn.ping();
      console.log("[MySQL] Database connected via UNIX socket");
    } finally {
      conn.release();
    }
  } catch (e) {
    mysqlErrorHint(e as { code?: string; errno?: number; message?: string });
  }
}
