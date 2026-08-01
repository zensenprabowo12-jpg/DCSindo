import type { Request, Response, NextFunction } from "express";
import { createHash } from "node:crypto";
import { UAParser } from "ua-parser-js";
import { Crawlers } from "ua-parser-js/extensions";
import { isBot } from "ua-parser-js/bot-detection";
import geoip from "geoip-lite";
import { isStaticAssetPath } from "../utils/staticAssetPath";
import { insertVisit } from "../models/visitorLogModel";

/**
 * Middleware pencatat pengunjung.
 *
 * Satu baris per pengunjung anonim per hari kalender (dedup di level DB lewat
 * UNIQUE uniq_visitor_day). Middleware ini hanya melacak *page load* — bukan
 * XHR, aset, atau request API.
 *
 * Seluruh pekerjaan (hash, parse UA, geo, INSERT) ditunda dengan setImmediate
 * sehingga jalur respons tidak menanggung biaya apa pun.
 */

/** Basis path yang dilewati, termasuk seluruh sub-pohonnya. */
const SKIP_BASES = ["/api", "/admin", "/uploads", "/assets", "/src"];

/**
 * Prefix mentah yang dilewati.
 * `/@` menangkap aset dev Vite (/@vite/client, /@react-refresh);
 * `/site.webmanifest` perlu disebut eksplisit karena ekstensi "webmanifest"
 * tidak ada di daftar putih ASSET_EXTENSIONS.
 */
const SKIP_PREFIXES = ["/@", "/favicon", "/robots.txt", "/site.webmanifest"];

/**
 * Saringan diurutkan dari yang paling murah.
 *
 * Pemeriksaan Accept bukan sekadar pengaman tambahan: di mode dev, Vite
 * melayani /src/main.tsx dan sejenisnya, dan ekstensi "tsx" TIDAK ada di
 * ASSET_EXTENSIONS — jadi saringan Accept inilah yang menahannya. Saringan ini
 * juga yang menyingkirkan XHR, <img>, dan fetch JSON.
 */
function shouldTrack(req: Request): boolean {
  if (req.method !== "GET") return false;

  const p = req.path;
  for (const base of SKIP_BASES) {
    if (p === base || p.startsWith(`${base}/`)) return false;
  }
  for (const prefix of SKIP_PREFIXES) {
    if (p.startsWith(prefix)) return false;
  }

  if (isStaticAssetPath(p)) return false;

  return (req.get("accept") ?? "").includes("text/html");
}

/** UAParser memakai undefined untuk desktop; sisanya diringkas jadi "other". */
function mapDevice(type: string | undefined): string {
  if (!type) return "desktop";
  if (type === "mobile" || type === "tablet") return type;
  return "other";
}

/** Gabung "nama versi" — null bila keduanya kosong. */
function label(name?: string, version?: string): string | null {
  const s = [name, version].filter(Boolean).join(" ").trim();
  return s || null;
}

/**
 * Tanggal lokal 'YYYY-MM-DD'.
 * Sengaja BUKAN toISOString(): itu UTC dan akan menggeser batas hari 7 jam
 * di Asia/Jakarta, sehingga dedup harian meleset.
 */
function localDate(d = new Date()): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

export function visitorTracker(req: Request, _res: Response, next: NextFunction): void {
  if (!shouldTrack(req)) {
    next();
    return;
  }

  // Ambil nilai primitifnya lebih dulu supaya closure di bawah tidak menahan
  // objek req (beserta socket-nya) tetap hidup.
  const ip = req.ip ?? "";
  const ua = req.get("user-agent") ?? "";
  const firstPath = req.originalUrl;
  const referrer = req.get("referer") ?? null;

  setImmediate(() => {
    try {
      // Ekstensi Crawlers dipakai sekali jalan: browser biasa tetap terparsir
      // normal, sementara bot ikut dapat nama (mis. "Googlebot") alih-alih null.
      const parsed = new UAParser(ua, Crawlers).getResult();
      const geo = ip ? geoip.lookup(ip) : null;

      // insertVisit sudah menelan errornya sendiri (Stage 1) — try/catch di sini
      // untuk melindungi parse UA / lookup geo, yang berada di luar jangkauannya.
      void insertVisit({
        visitor_hash: createHash("sha256").update(`${ip}|${ua}`).digest("hex"),
        visit_date: localDate(),
        ip_address: ip || null,
        user_agent: ua || null,
        device: mapDevice(parsed.device.type),
        os: label(parsed.os.name, parsed.os.version),
        browser: label(parsed.browser.name, parsed.browser.major),
        // geoip-lite mengembalikan kode ISO-2 ("ID"), bukan nama negara.
        country: geo?.country ?? null,
        city: geo?.city ?? null,
        first_path: firstPath,
        referrer,
        is_bot: isBot(ua),
      });
    } catch (e) {
      console.error("[visitorTracker] gagal menyiapkan data kunjungan:", (e as Error).message);
    }
  });

  next();
}

/**
 * Panaskan geoip-lite saat startup.
 *
 * Basis datanya sebenarnya sudah dimuat saat modul ini di-import (require
 * geoip-lite ≈ 75 ms dan langsung menaikkan RSS ~144 MB), jadi pemanggilan ini
 * lebih untuk memastikan + memberi baris log yang bisa diamati, bukan agar
 * pengunjung pertama tidak menanggung jeda.
 */
export function preloadGeoip(): void {
  const t0 = Date.now();
  const ok = geoip.lookup("8.8.8.8") !== null;
  console.log(
    `[visitorTracker] geoip-lite ${ok ? "siap" : "TIDAK mengembalikan data"} (${Date.now() - t0} ms).`,
  );
}
