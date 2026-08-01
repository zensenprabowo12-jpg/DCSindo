import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";

/**
 * Log pengunjung situs publik.
 *
 * Satu baris = satu pengunjung per hari kalender (di-dedup di level DB lewat
 * UNIQUE uniq_visitor_day). Artinya COUNT(*) menghitung "visitor-hari", BUKAN
 * pageview — tabel ini memang tidak dirancang untuk menghitung pageview.
 */
export type VisitorLogRow = {
  id: number;
  visitor_hash: string;
  visit_date: string; // 'YYYY-MM-DD'
  ip_address: string | null;
  user_agent: string | null;
  device: string | null;
  os: string | null;
  browser: string | null;
  country: string | null;
  city: string | null;
  first_path: string;
  referrer: string | null;
  is_bot: 0 | 1;
  visited_at: Date;
};

export type InsertVisitInput = {
  visitor_hash: string;
  visit_date: string; // 'YYYY-MM-DD'
  ip_address?: string | null;
  user_agent?: string | null;
  device?: string | null;
  os?: string | null;
  browser?: string | null;
  country?: string | null;
  city?: string | null;
  first_path?: string;
  referrer?: string | null;
  is_bot?: boolean;
};

export type ListVisitsParams = {
  from?: string | null; // 'YYYY-MM-DD' inklusif
  to?: string | null; // 'YYYY-MM-DD' inklusif
  limit?: number; // default 100, dibatasi 1..500
  offset?: number; // default 0
  includeBots?: boolean; // default false
};

export type StatsParams = {
  from?: string | null;
  to?: string | null;
  includeBots?: boolean;
};

export type VisitorStats = {
  range: { from: string | null; to: string | null };
  /** Jumlah baris = visitor-hari pada rentang ini (lihat catatan di atas). */
  totalVisits: number;
  uniqueVisitors: number;
  perDay: { date: string; visits: number }[];
  topPages: { path: string; visits: number }[];
  /** Brand diturunkan dari first_path, bukan kolom tersendiri (lihat BRAND_CASE). */
  topBrands: { brand: string; visits: number }[];
  topBrowsers: { browser: string; visits: number }[];
  topDevices: { device: string; visits: number }[];
  topCountries: { country: string; visits: number }[];
};

let tableEnsured = false;

/**
 * Membuat tabel visitor_log jika belum ada (pola sama users/admin_activity_log).
 * Diekspor supaya bisa dipanggil sekali saat startup, tapi tiap fungsi di bawah
 * tetap memanggilnya sendiri agar model ini mandiri.
 *
 * Catatan kolom:
 * - `visitor_hash` sengaja ASCII: isinya sha256 heksadesimal. Di bawah utf8mb4
 *   MariaDB memesan 4 byte/karakter (256 byte di index); ascii_bin cukup 64 byte
 *   sekaligus membuat perbandingan persis per-byte, bukan case/accent-insensitive.
 * - `idx_date_bot (visit_date, is_bot)` menggantikan index terpisah untuk
 *   `visit_date` dan `is_bot`. Index tunggal atas kolom 2 nilai praktis tidak
 *   pernah dipilih optimizer, sedangkan komposit ini melayani bentuk query yang
 *   sebenarnya (rentang tanggal + sembunyikan bot) dan — karena `visit_date`
 *   ada di posisi terdepan — sekaligus menggantikan idx_visit_date.
 */
export async function ensureVisitorLogTable(): Promise<void> {
  if (tableEnsured) return;
  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS visitor_log (
      id           BIGINT AUTO_INCREMENT PRIMARY KEY,
      visitor_hash CHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
      visit_date   DATE         NOT NULL,
      ip_address   VARCHAR(45)  NULL,
      user_agent   TEXT         NULL,
      device       VARCHAR(32)  NULL,
      os           VARCHAR(64)  NULL,
      browser      VARCHAR(64)  NULL,
      country      VARCHAR(64)  NULL,
      city         VARCHAR(128) NULL,
      first_path   VARCHAR(512) NOT NULL DEFAULT '',
      referrer     VARCHAR(512) NULL,
      is_bot       TINYINT(1)   NOT NULL DEFAULT 0,
      visited_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY uniq_visitor_day (visitor_hash, visit_date),
      INDEX idx_date_bot (visit_date, is_bot),
      INDEX idx_first_path (first_path(100)),
      INDEX idx_country (country)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);
  tableEnsured = true;
}

/** Potong string ke lebar kolom; string kosong/undefined jadi null. */
function cut(v: string | null | undefined, max: number): string | null {
  if (v == null) return null;
  const s = v.trim();
  return s ? s.slice(0, max) : null;
}

/** Susun WHERE bersama untuk list & stats. Memakai visit_date agar cocok idx_date_bot. */
function buildFilter(p: StatsParams): { where: string; params: Record<string, string> } {
  const conds: string[] = [];
  const params: Record<string, string> = {};
  if (p.from) {
    conds.push("visit_date >= :from");
    params.from = p.from;
  }
  if (p.to) {
    conds.push("visit_date <= :to");
    params.to = p.to;
  }
  if (!p.includeBots) conds.push("is_bot = 0");
  return { where: conds.length ? `WHERE ${conds.join(" AND ")}` : "", params };
}

/** Kolom SELECT untuk baris utuh. visit_date diformat agar tipenya string, bukan Date. */
const SELECT_COLUMNS = `
  id, visitor_hash, DATE_FORMAT(visit_date, '%Y-%m-%d') AS visit_date,
  ip_address, user_agent, device, os, browser, country, city,
  first_path, referrer, is_bot, visited_at`;

/**
 * Catat satu kunjungan. INSERT IGNORE + UNIQUE(visitor_hash, visit_date) membuat
 * dedup satu-kunjungan-per-hari aman dari race tanpa perlu SELECT dulu.
 *
 * Mengembalikan true bila baris baru dibuat, false bila pengunjung ini sudah
 * tercatat hari ini (atau bila terjadi error).
 *
 * Tidak pernah melempar error ke pemanggil — pelacakan pengunjung tidak boleh
 * membuat request halaman gagal.
 */
export async function insertVisit(input: InsertVisitInput): Promise<boolean> {
  try {
    await ensureVisitorLogTable();
    const [res] = await mysqlPool.query<ResultSetHeader>(
      `INSERT IGNORE INTO visitor_log
         (visitor_hash, visit_date, ip_address, user_agent, device, os, browser,
          country, city, first_path, referrer, is_bot)
       VALUES
         (:visitor_hash, :visit_date, :ip_address, :user_agent, :device, :os, :browser,
          :country, :city, :first_path, :referrer, :is_bot)`,
      {
        visitor_hash: (input.visitor_hash ?? "").slice(0, 64),
        visit_date: input.visit_date,
        ip_address: cut(input.ip_address, 45),
        // user_agent kolom TEXT — disimpan mentah untuk analisis ulang bila parser diperbarui.
        user_agent: input.user_agent?.trim() || null,
        device: cut(input.device, 32),
        os: cut(input.os, 64),
        browser: cut(input.browser, 64),
        country: cut(input.country, 64),
        city: cut(input.city, 128),
        first_path: cut(input.first_path, 512) ?? "",
        referrer: cut(input.referrer, 512),
        is_bot: input.is_bot ? 1 : 0,
      },
    );
    return res.affectedRows === 1;
  } catch (e) {
    console.error("[visitorLog] gagal mencatat kunjungan:", (e as Error).message);
    return false;
  }
}

/** Daftar kunjungan untuk tabel admin. `total` dipakai untuk paginasi. */
export async function listVisits(
  params: ListVisitsParams = {},
): Promise<{ rows: VisitorLogRow[]; total: number }> {
  await ensureVisitorLogTable();
  const { where, params: filter } = buildFilter(params);

  // LIMIT/OFFSET disisipkan langsung setelah di-clamp jadi integer (pola sama
  // listAdminLoginAttempts) — placeholder tidak dipakai untuk klausa ini.
  const limit = Math.min(Math.max(Math.trunc(Number(params.limit) || 100), 1), 500);
  const offset = Math.max(Math.trunc(Number(params.offset) || 0), 0);

  const [rows] = await mysqlPool.query<(VisitorLogRow & RowDataPacket)[]>(
    `SELECT ${SELECT_COLUMNS}
       FROM visitor_log
       ${where}
      ORDER BY visited_at DESC, id DESC
      LIMIT ${limit} OFFSET ${offset}`,
    filter,
  );

  const [countRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT COUNT(*) AS total FROM visitor_log ${where}`,
    filter,
  );

  return { rows, total: Number(countRows[0]?.total ?? 0) };
}

/**
 * Penurunan brand dari `first_path`, dikerjakan di SQL supaya agregasinya
 * selesai dalam satu query (tanpa pengelompokan di memori).
 *
 * ⚠ ESCAPE: di template literal TS, `\\\\b` menghasilkan teks SQL `\\b`, yang
 * baru diurai MariaDB menjadi `\b` (word boundary). Kalau di sini hanya ditulis
 * `\\b`, teks SQL-nya jadi `\b` dan MariaDB mengartikannya sebagai karakter
 * BACKSPACE — regex-nya diam-diam tidak pernah cocok dan SEMUA baris jatuh ke
 * "Lainnya / Beranda".
 *
 * `\b` mencegah cocok-sebagian: /vsolusi dan /mikrotikan tidak ikut terhitung.
 * Cabang /admin bersifat defensif saja — middleware pelacak sudah melewati
 * /admin, jadi barisnya tidak akan pernah ada.
 */
const BRAND_CASE = `CASE
      WHEN LOWER(first_path) = '/admin' OR LOWER(first_path) LIKE '/admin/%'
                                                           THEN 'Lainnya / Beranda'
      WHEN LOWER(first_path) REGEXP '/mikrotik\\\\b'         THEN 'MikroTik'
      WHEN LOWER(first_path) REGEXP '/(ubiquiti|unifi)\\\\b' THEN 'Ubiquiti'
      WHEN LOWER(first_path) REGEXP '/vsol\\\\b'             THEN 'V-SOL'
      ELSE 'Lainnya / Beranda'
    END`;

/**
 * Kunjungan per brand. "Lainnya / Beranda" sengaja diletakkan paling akhir:
 * ia bukan brand, dan jumlahnya hampir selalu terbesar (first_path hanya
 * mencatat halaman pendaratan, dan "/" adalah pintu masuk paling umum).
 */
export async function topBrands(
  params: StatsParams = {},
): Promise<{ brand: string; visits: number }[]> {
  await ensureVisitorLogTable();
  const { where, params: filter } = buildFilter(params);
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT ${BRAND_CASE} AS brand, COUNT(*) AS visits
       FROM visitor_log
       ${where}
      GROUP BY brand
      ORDER BY (brand = 'Lainnya / Beranda'), visits DESC, brand ASC`,
    filter,
  );
  return rows.map((r) => ({ brand: String(r.brand), visits: Number(r.visits) }));
}

/** Agregat untuk dashboard admin. */
export async function getStats(params: StatsParams = {}): Promise<VisitorStats> {
  await ensureVisitorLogTable();
  const { where, params: filter } = buildFilter(params);

  /** Top-N untuk satu kolom; nilai kosong/NULL diabaikan. */
  async function topBy(column: string): Promise<{ label: string; visits: number }[]> {
    const extra = where ? `${where} AND` : "WHERE";
    const [rows] = await mysqlPool.query<RowDataPacket[]>(
      `SELECT ${column} AS label, COUNT(*) AS visits
         FROM visitor_log
         ${extra} ${column} IS NOT NULL AND ${column} <> ''
        GROUP BY ${column}
        ORDER BY visits DESC, label ASC
        LIMIT 10`,
      filter,
    );
    return rows.map((r) => ({ label: String(r.label), visits: Number(r.visits) }));
  }

  const [totalsRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT COUNT(*) AS totalVisits, COUNT(DISTINCT visitor_hash) AS uniqueVisitors
       FROM visitor_log ${where}`,
    filter,
  );

  const [perDayRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT DATE_FORMAT(visit_date, '%Y-%m-%d') AS date, COUNT(*) AS visits
       FROM visitor_log
       ${where}
      GROUP BY visit_date
      ORDER BY visit_date ASC`,
    filter,
  );

  const [pages, brands, browsers, devices, countries] = await Promise.all([
    topBy("first_path"),
    topBrands(params),
    topBy("browser"),
    topBy("device"),
    topBy("country"),
  ]);

  return {
    range: { from: params.from ?? null, to: params.to ?? null },
    totalVisits: Number(totalsRows[0]?.totalVisits ?? 0),
    uniqueVisitors: Number(totalsRows[0]?.uniqueVisitors ?? 0),
    perDay: perDayRows.map((r) => ({ date: String(r.date), visits: Number(r.visits) })),
    topPages: pages.map((r) => ({ path: r.label, visits: r.visits })),
    topBrands: brands,
    topBrowsers: browsers.map((r) => ({ browser: r.label, visits: r.visits })),
    topDevices: devices.map((r) => ({ device: r.label, visits: r.visits })),
    topCountries: countries.map((r) => ({ country: r.label, visits: r.visits })),
  };
}

/**
 * Retensi: hapus kunjungan lebih tua dari `months` bulan.
 * Dihapus per batch supaya tiap transaksi pendek dan tidak menahan lock lama.
 * Mengembalikan total baris terhapus.
 */
export async function pruneOld(months = 3): Promise<number> {
  await ensureVisitorLogTable();
  const safeMonths = Math.min(Math.max(Math.trunc(Number(months) || 3), 1), 120);
  const BATCH = 1000;
  let total = 0;
  for (;;) {
    const [res] = await mysqlPool.query<ResultSetHeader>(
      `DELETE FROM visitor_log
        WHERE visited_at < NOW() - INTERVAL ${safeMonths} MONTH
        LIMIT ${BATCH}`,
    );
    total += res.affectedRows;
    if (res.affectedRows < BATCH) break;
  }
  return total;
}
