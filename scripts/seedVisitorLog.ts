/**
 * Script: seedVisitorLog.ts
 *
 * Utilitas DEV sekali pakai: mengisi tabel `visitor_log` dengan data dummy yang
 * realistis supaya dashboard admin (/admin/visitor-log) bisa dilihat tanpa
 * menunggu trafik asli. Tidak menyentuh kode produk sama sekali.
 *
 * Usage:
 *   npx tsx scripts/seedVisitorLog.ts --i-know-this-is-prod
 *   npx tsx scripts/seedVisitorLog.ts --clear --yes --i-know-this-is-prod
 *   npx tsx scripts/seedVisitorLog.ts --count=500 --days=60 --i-know-this-is-prod
 *
 * Flag:
 *   --seed                 (default) isi data dummy
 *   --clear                hapus data; default HANYA baris hasil seed
 *   --all                  bersama --clear: hapus SEMUA baris (termasuk data asli)
 *   --yes                  wajib menyertai --clear
 *   --i-know-this-is-prod  wajib bila DB bukan localhost
 *   --count=N              jumlah baris (default 300)
 *   --days=N               rentang hari ke belakang (default 90)
 */
import "dotenv/config";
import { createHash } from "node:crypto";
import { UAParser } from "ua-parser-js";
import { Crawlers } from "ua-parser-js/extensions";
import { isBot } from "ua-parser-js/bot-detection";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../server/config/mysqlPool";

/* ─── CLI ─────────────────────────────────────────────────────────────── */

const argv = process.argv.slice(2);
const has = (flag: string) => argv.includes(flag);

function num(name: string, fallback: number): number {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  if (!hit) return fallback;
  const n = Number.parseInt(hit.slice(hit.indexOf("=") + 1), 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

/**
 * Penanda baris hasil seed, ditempelkan di ujung user_agent.
 * Kolom user_agent tidak ditampilkan di UI admin, dan parsing device/os/browser
 * dilakukan dari UA versi BERSIH — jadi penanda ini tidak terlihat di mana pun,
 * tapi membuat --clear bisa presisi tanpa menyentuh data kunjungan asli.
 */
const SEED_MARK = "DCS-SEED";

/* ─── Guard produksi ──────────────────────────────────────────────────── */

function resolveTarget(): { label: string; isLocal: boolean } {
  const socket = process.env.DB_SOCKET?.trim();
  const host = process.env.DB_HOST?.trim() || "localhost";
  const port = process.env.DB_PORT?.trim() || "3306";
  const name = process.env.DB_NAME?.trim() || "(DB_NAME belum di-set)";
  // Hanya loopback/socket yang dianggap lokal. IP LAN SENGAJA dihitung remote:
  // di proyek ini 192.168.x justru server produksi, dan tidak ada DB lokal.
  const isLocal = Boolean(socket) || ["localhost", "127.0.0.1", "::1"].includes(host);
  return { label: socket ? `socket:${socket} → ${name}` : `${host}:${port} → ${name}`, isLocal };
}

/* ─── PRNG deterministik ──────────────────────────────────────────────── */

/** mulberry32 — hasil seed dapat diulang, jadi preview tidak berubah tiap run. */
function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20260731);

function pick<T>(arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)]!;
}

/** Pilih berbobot dari pasangan [nilai, bobot]. */
function weighted<T>(pairs: [T, number][]): T {
  const total = pairs.reduce((s, p) => s + p[1], 0);
  let r = rand() * total;
  for (const [value, w] of pairs) {
    r -= w;
    if (r <= 0) return value;
  }
  return pairs[pairs.length - 1]![0];
}

/* ─── Bahan data ──────────────────────────────────────────────────────── */

const HUMAN_UAS = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.2210.91",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
  "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1",
];
/** Bobot pemakaian UA — Chrome desktop & mobile paling umum. */
const UA_WEIGHTS: [string, number][] = [
  [HUMAN_UAS[0]!, 34],
  [HUMAN_UAS[1]!, 12],
  [HUMAN_UAS[2]!, 8],
  [HUMAN_UAS[3]!, 10],
  [HUMAN_UAS[4]!, 24],
  [HUMAN_UAS[5]!, 12],
];

const UA_GOOGLEBOT = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const UA_BINGBOT = "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)";

type Subnet = { prefix: string; country: string | null; city: string | null; weight: number };

/** Geo menempel pada subnet, jadi IP dan lokasi tidak pernah bertentangan. */
const SUBNETS: Subnet[] = [
  { prefix: "114.124.140", country: "ID", city: "Jakarta", weight: 5 },
  { prefix: "103.10.66", country: "ID", city: "Jakarta", weight: 4 },
  { prefix: "36.68.12", country: "ID", city: "Bandung", weight: 3 },
  { prefix: "180.243.7", country: "ID", city: "Surabaya", weight: 3 },
  { prefix: "165.21.44", country: "SG", city: "Singapore", weight: 2 },
  { prefix: "175.136.90", country: "MY", city: "Kuala Lumpur", weight: 2 },
  { prefix: "8.8.8", country: "US", city: "Mountain View", weight: 1 },
  { prefix: "172.217.19", country: "US", city: "New York", weight: 1 },
  { prefix: "203.0.113", country: null, city: null, weight: 1 }, // lookup gagal
];

/** Bot: IP-nya dikunci ke UA yang cocok, seperti di dunia nyata. */
const BOT_VISITORS = [
  { ip: "66.249.66.1", ua: UA_GOOGLEBOT, country: "US", city: "Mountain View" },
  { ip: "66.249.66.83", ua: UA_GOOGLEBOT, country: "US", city: "Mountain View" },
  { ip: "66.249.73.12", ua: UA_GOOGLEBOT, country: "US", city: "Mountain View" },
  { ip: "40.77.167.45", ua: UA_BINGBOT, country: "US", city: null },
  { ip: "40.77.167.201", ua: UA_BINGBOT, country: "US", city: null },
];

const PATHS: [string, number][] = [
  ["/", 35],
  ["/firmware", 15],
  ["/firmware/mikrotik", 10],
  ["/firmware/ubiquiti", 10],
  ["/firmware/vsol", 10],
  ["/about", 10],
  ["/contact", 10],
];

const REFERRERS: [string | null, number][] = [
  [null, 45],
  ["https://www.google.com/", 30],
  ["https://www.dcsindo.com/firmware", 15],
  ["https://www.facebook.com/", 10],
];

type Visitor = {
  ip: string;
  ua: string;
  country: string | null;
  city: string | null;
  bot: boolean;
};

/** Kolam pengunjung tetap — dipakai ulang lintas hari agar ada "returning visitor". */
function buildHumanPool(size: number): Visitor[] {
  const subnetPairs: [Subnet, number][] = SUBNETS.map((s) => [s, s.weight]);
  const pool: Visitor[] = [];
  const seen = new Set<string>();
  while (pool.length < size) {
    const sub = weighted(subnetPairs);
    const ip = `${sub.prefix}.${2 + Math.floor(rand() * 248)}`;
    const ua = weighted(UA_WEIGHTS);
    const key = `${ip}|${ua}`;
    if (seen.has(key)) continue;
    seen.add(key);
    pool.push({ ip, ua, country: sub.country, city: sub.city, bot: false });
  }
  return pool;
}

/* ─── Parsing UA (memakai pipeline yang sama dengan middleware) ────────── */

type Parsed = { device: string; os: string | null; browser: string | null; bot: boolean };

const parseCache = new Map<string, Parsed>();

function parseUa(ua: string): Parsed {
  const cached = parseCache.get(ua);
  if (cached) return cached;
  const r = new UAParser(ua, Crawlers).getResult();
  const label = (n?: string, v?: string) => [n, v].filter(Boolean).join(" ").trim() || null;
  const type = r.device.type;
  const parsed: Parsed = {
    device: !type ? "desktop" : type === "mobile" || type === "tablet" ? type : "other",
    os: label(r.os.name, r.os.version),
    browser: label(r.browser.name, r.browser.major),
    bot: isBot(ua),
  };
  parseCache.set(ua, parsed);
  return parsed;
}

/* ─── Tanggal & waktu ─────────────────────────────────────────────────── */

const pad = (n: number) => String(n).padStart(2, "0");
const fmtDate = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** Waktu acak, condong ke jam kerja 08–18. */
function randomTime(): string {
  const h = rand() < 0.7 ? 8 + Math.floor(rand() * 10) : Math.floor(rand() * 24);
  return `${pad(h)}:${pad(Math.floor(rand() * 60))}:${pad(Math.floor(rand() * 60))}`;
}

/**
 * Jumlah kunjungan per hari: tren naik × lebih ramai di hari kerja × jitter.
 * Hasilnya dinormalisasi supaya totalnya mendekati `target`.
 */
function dailyCounts(days: number, target: number): number[] {
  const weights: number[] = [];
  for (let i = 0; i < days; i++) {
    const d = new Date();
    d.setDate(d.getDate() - (days - 1 - i));
    const dow = d.getDay();
    const trend = 1 + 1.6 * (i / Math.max(1, days - 1));
    const weekday = dow === 0 || dow === 6 ? 0.45 : 1;
    weights.push(trend * weekday * (0.7 + rand() * 0.6));
  }
  const sum = weights.reduce((a, b) => a + b, 0);
  // Pembulatan probabilistik, bukan Math.round: saat rata-rata harian rendah
  // (mis. --count kecil), sebagian hari jatuh ke 0 dan grafik ikut menguji
  // pengisian hari kosong di sisi klien. Math.round akan selalu >=1.
  return weights.map((w) => {
    const raw = (w / sum) * target;
    return Math.max(0, Math.floor(raw) + (rand() < raw % 1 ? 1 : 0));
  });
}

/* ─── Mode ────────────────────────────────────────────────────────────── */

type Row = [
  string, string, string, string, string, string | null,
  string | null, string | null, string | null, string, string | null, 0 | 1, string,
];

async function runSeed(count: number, days: number): Promise<void> {
  const humans = buildHumanPool(90);
  const counts = dailyCounts(days, count);
  const rows: Row[] = [];

  for (let i = 0; i < days; i++) {
    const day = new Date();
    day.setDate(day.getDate() - (days - 1 - i));
    const visitDate = fmtDate(day);

    // Cegah pengunjung sama muncul dua kali di hari yang sama — UNIQUE
    // (visitor_hash, visit_date) akan menolaknya (INSERT biasa, bukan IGNORE).
    const usedToday = new Set<string>();

    for (let k = 0; k < counts[i]!; k++) {
      const asBot = rand() < 0.1;

      // Coba beberapa kali cari pengunjung yang belum dipakai hari ini.
      // Kalau langsung `continue` saat bentrok, manusia (yang pemilihannya
      // dicondongkan) lebih sering terbuang daripada bot — proporsi bot jadi
      // naik sendiri dan total baris meleset dari target.
      let v: Visitor | null = null;
      for (let attempt = 0; attempt < 8; attempt++) {
        let cand: Visitor;
        if (asBot) {
          const b = pick(BOT_VISITORS);
          cand = { ip: b.ip, ua: b.ua, country: b.country, city: b.city, bot: true };
        } else {
          // Pangkat >1 mencondongkan pilihan ke awal kolam → sebagian orang
          // muncul berulang kali lintas hari, sebagian hanya sekali.
          const idx = Math.floor(Math.pow(rand(), 1.8) * humans.length);
          cand = humans[Math.min(idx, humans.length - 1)]!;
        }
        if (!usedToday.has(`${cand.ip}|${cand.ua}`)) {
          v = cand;
          break;
        }
      }
      if (!v) continue;

      const key = `${v.ip}|${v.ua}`;
      usedToday.add(key);

      const p = parseUa(v.ua);
      rows.push([
        createHash("sha256").update(key).digest("hex"),
        visitDate,
        v.ip,
        `${v.ua} ${SEED_MARK}`,
        p.device,
        p.os,
        p.browser,
        v.country,
        v.city,
        weighted(PATHS),
        weighted(REFERRERS),
        p.bot ? 1 : 0,
        `${visitDate} ${randomTime()}`,
      ]);
    }
  }

  if (!rows.length) {
    console.log("Tidak ada baris yang dihasilkan.");
    return;
  }

  const [res] = await mysqlPool.query<ResultSetHeader>(
    `INSERT INTO visitor_log
       (visitor_hash, visit_date, ip_address, user_agent, device, os, browser,
        country, city, first_path, referrer, is_bot, visited_at)
     VALUES ?`,
    [rows],
  );

  // Laporan dibaca ulang dari DB, bukan dari array lokal, supaya benar-benar mencerminkan isi tabel.
  const [stat] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT COUNT(*) AS total,
            COUNT(DISTINCT visitor_hash) AS uniq,
            COUNT(DISTINCT visit_date)   AS days,
            SUM(is_bot)                  AS bots,
            DATE_FORMAT(MIN(visit_date), '%Y-%m-%d') AS min_d,
            DATE_FORMAT(MAX(visit_date), '%Y-%m-%d') AS max_d
       FROM visitor_log WHERE user_agent LIKE '%${SEED_MARK}%'`,
  );
  const s = stat[0]!;
  const bots = Number(s.bots ?? 0);
  const total = Number(s.total ?? 0);

  console.log(`\n✅ Selesai — ${res.affectedRows} baris dimasukkan.\n`);
  console.log(`   Total baris seed : ${total}`);
  console.log(`   Rentang          : ${s.min_d} → ${s.max_d} (${s.days} hari ada data dari ${days} hari)`);
  console.log(`   Pengunjung unik  : ${s.uniq}`);
  console.log(`   Bot              : ${bots} (${total ? ((bots / total) * 100).toFixed(1) : "0"}%)`);
  console.log(`\n   Lihat di: /admin/visitor-log`);
  console.log(`   Bersihkan: npx tsx scripts/seedVisitorLog.ts --clear --yes${resolveTarget().isLocal ? "" : " --i-know-this-is-prod"}`);
}

async function runClear(all: boolean): Promise<void> {
  const where = all ? "" : `WHERE user_agent LIKE '%${SEED_MARK}%'`;
  const [res] = await mysqlPool.query<ResultSetHeader>(`DELETE FROM visitor_log ${where}`);
  const [left] = await mysqlPool.query<RowDataPacket[]>("SELECT COUNT(*) AS n FROM visitor_log");
  console.log(`\n🗑  ${res.affectedRows} baris dihapus (${all ? "SEMUA baris" : "hanya baris seed"}).`);
  console.log(`   Sisa di visitor_log: ${left[0]!.n}`);
}

/* ─── Main ────────────────────────────────────────────────────────────── */

async function main(): Promise<void> {
  const target = resolveTarget();
  const clearing = has("--clear");

  console.log(`\nDatabase : ${target.label}`);
  console.log(`Status   : ${target.isLocal ? "LOKAL" : "REMOTE / PRODUKSI"}`);
  console.log(`Mode     : ${clearing ? (has("--all") ? "clear (SEMUA)" : "clear (baris seed)") : "seed"}\n`);

  if (!target.isLocal && !has("--i-know-this-is-prod")) {
    console.error("❌ Dibatalkan: database ini BUKAN localhost.");
    console.error("   Di proyek ini tidak ada DB lokal — host LAN di .env adalah server produksi,");
    console.error("   dan tabel visitor_log yang sama dibaca oleh dashboard admin sungguhan.");
    console.error("   Tambahkan --i-know-this-is-prod bila memang disengaja.\n");
    process.exitCode = 1;
    return;
  }

  if (clearing) {
    if (!has("--yes")) {
      console.error("❌ Dibatalkan: --clear wajib disertai --yes.\n");
      process.exitCode = 1;
      return;
    }
    if (has("--all")) {
      console.warn("⚠  --all menghapus SEMUA baris, termasuk kunjungan asli yang sudah tercatat.\n");
    }
    await runClear(has("--all"));
    return;
  }

  await runSeed(num("count", 300), num("days", 90));
}

main()
  .catch((e: unknown) => {
    console.error("ERR:", (e as Error).message);
    process.exitCode = 1;
  })
  .finally(() => {
    void mysqlPool.end();
  });
