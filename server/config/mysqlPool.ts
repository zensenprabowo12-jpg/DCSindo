import mysql from "mysql2/promise";

type MysqlEnv = {
  host: string;
  port: number;
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

function loadMysqlEnv(): MysqlEnv {
  const host = requiredEnv("MYSQL_HOST"); // backend boleh pakai localhost jika DB ada di server yg sama
  const portRaw = process.env.MYSQL_PORT?.trim() || "3306";
  const port = Number.parseInt(portRaw, 10);
  if (!Number.isFinite(port) || port <= 0) {
    throw new Error(`[MySQL] ENV "MYSQL_PORT" tidak valid: "${portRaw}"`);
  }

  const user = requiredEnv("MYSQL_USER");
  // password boleh kosong untuk beberapa setup, jadi tidak di-required
  const password = process.env.MYSQL_PASSWORD ?? "";
  const database = requiredEnv("MYSQL_DATABASE");

  return { host, port, user, password, database };
}

const mysqlEnv = (() => {
  try {
    return loadMysqlEnv();
  } catch (e) {
    // Jangan crash saat import; log error-nya, lalu pool tetap dibuat minimal (akan gagal saat dipakai).
    console.error((e as Error).message);
    return null;
  }
})();

export const mysqlPool = mysql.createPool({
  host: mysqlEnv?.host,
  port: mysqlEnv?.port,
  user: mysqlEnv?.user,
  password: mysqlEnv?.password,
  database: mysqlEnv?.database,
  waitForConnections: true,
  connectionLimit: 10,
  namedPlaceholders: true,
});

function mysqlErrorHint(err: { code?: string; errno?: number; message?: string }): void {
  const msg = err.message ?? String(err);
  console.error("[MySQL]", msg);

  if (err.code === "ER_BAD_DB_ERROR") {
    const dbName = mysqlEnv?.database ?? "<unknown>";
    console.error(
      `[MySQL] Database "${dbName}" tidak ada. Buat dulu, contoh:\n` +
        `  CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n` +
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
    if (!mysqlEnv) {
      console.error("[MySQL] Konfigurasi env belum lengkap. Koneksi tidak dicoba.");
      return;
    }

    console.log(
      `[MySQL] Mencoba koneksi ke "${mysqlEnv.database}" di ${mysqlEnv.host}:${mysqlEnv.port} (user: "${mysqlEnv.user}")...`,
    );
    const conn = await mysqlPool.getConnection();
    try {
      await conn.ping();
      console.log(
        `[MySQL] Terhubung ke database "${mysqlEnv.database}" di ${mysqlEnv.host}:${mysqlEnv.port} (user: "${mysqlEnv.user}").`,
      );
    } finally {
      conn.release();
    }
  } catch (e) {
    mysqlErrorHint(e as { code?: string; errno?: number; message?: string });
  }
}
