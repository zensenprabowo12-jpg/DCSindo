import mysql from "mysql2/promise";

const host = process.env.MYSQL_HOST ?? "127.0.0.1";
const port = Number.parseInt(process.env.MYSQL_PORT ?? "3306", 10);
const user = process.env.MYSQL_USER ?? "root";
const password = process.env.MYSQL_PASSWORD ?? "";
/** Nama database dari .env (MYSQL_DATABASE). Default `dcsindo` — harus sudah ada di MySQL. */
const database = process.env.MYSQL_DATABASE ?? "dcsindo";

export const mysqlPool = mysql.createPool({
  host,
  port,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  namedPlaceholders: true,
});

function mysqlErrorHint(err: { code?: string; errno?: number; message?: string }): void {
  const msg = err.message ?? String(err);
  console.error("[MySQL]", msg);

  if (err.code === "ER_BAD_DB_ERROR") {
    console.error(
      `[MySQL] Database "${database}" tidak ada. Buat dulu, contoh:\n` +
        `  CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n` +
        `Atau set MYSQL_DATABASE di .env ke nama database yang sudah Anda punya.\n` +
        `Skrip contoh: database/00_create_database.sql`,
    );
  } else if (err.code === "ECONNREFUSED") {
    console.error(
      "[MySQL] Koneksi ditolak — pastikan layanan MySQL/MariaDB berjalan dan MYSQL_HOST/MYSQL_PORT benar.",
    );
  } else if (err.code === "ER_ACCESS_DENIED_ERROR") {
    console.error(
      "[MySQL] Akses ditolak — periksa MYSQL_USER dan MYSQL_PASSWORD di file .env.",
    );
  }
}

/**
 * Ping database saat startup: log sukses atau pesan error yang jelas (termasuk DB tidak ada).
 */
export async function verifyMysqlOnStartup(): Promise<void> {
  try {
    const conn = await mysqlPool.getConnection();
    try {
      await conn.ping();
      console.log(
        `[MySQL] Terhubung ke database "${database}" di ${host}:${port} (user: "${user}").`,
      );
    } finally {
      conn.release();
    }
  } catch (e) {
    mysqlErrorHint(e as { code?: string; errno?: number; message?: string });
  }
}
