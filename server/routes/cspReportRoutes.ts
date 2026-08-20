import type { Express, Request, Response } from "express";
import express from "express";
import rateLimit from "express-rate-limit";
import { CSP_REPORT_PATH } from "../middleware/csp";

/**
 * H-06 Tahap 2 Fase A — penerima laporan pelanggaran CSP.
 *
 * Dipanggil browser, bukan manusia: anonim, tanpa sesi, dan balasannya selalu
 * 204 tanpa body karena browser mengabaikan isi respons.
 *
 * Nilai sebenarnya ada pada laporan dari PENGUNJUNG NYATA di halaman yang tidak
 * terpikir untuk diuji manual. Konsekuensinya endpoint ini terbuka untuk umum,
 * jadi tiga pengaman dipasang: pembatas laju, batas ukuran body, dan penyaring
 * derau ekstensi.
 */

/** Bentuk laporan gaya `report-uri` (Content-Type: application/csp-report). */
type LegacyReport = {
  "document-uri"?: unknown;
  "violated-directive"?: unknown;
  "effective-directive"?: unknown;
  "blocked-uri"?: unknown;
  "source-file"?: unknown;
  "line-number"?: unknown;
};

/** Bentuk laporan gaya Reporting API (application/reports+json). */
type ModernReport = {
  type?: unknown;
  body?: {
    documentURL?: unknown;
    effectiveDirective?: unknown;
    violatedDirective?: unknown;
    blockedURL?: unknown;
    sourceFile?: unknown;
    lineNumber?: unknown;
  };
};

type Violation = {
  documentUri: string;
  directive: string;
  blockedUri: string;
  sourceFile: string;
  line: string;
};

const str = (v: unknown): string => (typeof v === "string" && v ? v : typeof v === "number" ? String(v) : "");

/**
 * Terima kedua bentuk laporan. Saat ini hanya `report-uri` yang aktif, tapi
 * menangani bentuk modern sejak awal berarti Fase B bisa menyalakan `report-to`
 * tanpa menyentuh file ini.
 */
function normalize(body: unknown): Violation[] {
  const out: Violation[] = [];

  const pushLegacy = (r: LegacyReport) => {
    out.push({
      documentUri: str(r["document-uri"]),
      directive: str(r["effective-directive"]) || str(r["violated-directive"]),
      blockedUri: str(r["blocked-uri"]),
      sourceFile: str(r["source-file"]),
      line: str(r["line-number"]),
    });
  };

  if (Array.isArray(body)) {
    for (const item of body as ModernReport[]) {
      if (!item || typeof item !== "object") continue;
      const b = item.body;
      if (!b || typeof b !== "object") continue;
      out.push({
        documentUri: str(b.documentURL),
        directive: str(b.effectiveDirective) || str(b.violatedDirective),
        blockedUri: str(b.blockedURL),
        sourceFile: str(b.sourceFile),
        line: str(b.lineNumber),
      });
    }
    return out;
  }

  if (body && typeof body === "object") {
    const wrapped = (body as { "csp-report"?: unknown })["csp-report"];
    if (wrapped && typeof wrapped === "object") {
      pushLegacy(wrapped as LegacyReport);
      return out;
    }
    pushLegacy(body as LegacyReport);
  }

  return out;
}

/**
 * Skema URL yang menandakan laporan berasal dari luar situs kita.
 *
 * Pengalaman lapangan: mayoritas laporan CSP di situs publik bukan berasal dari
 * situsnya sendiri, melainkan dari ekstensi browser, antivirus yang menyuntik
 * script, dan injeksi iklan operator. Tanpa saringan ini log akan tenggelam dan
 * pelanggaran asli — yang justru sedang dicari — jadi mustahil terlihat.
 */
const FOREIGN_SCHEMES = [
  "chrome-extension:",
  "moz-extension:",
  "safari-extension:",
  "safari-web-extension:",
  "ms-browser-extension:",
  "webkit-masked-url:",
  "resource:",
  "chrome:",
  "about:",
];

function isNoise(v: Violation): boolean {
  const fields = [v.blockedUri, v.sourceFile, v.documentUri];
  return fields.some((f) => {
    const lower = f.toLowerCase();
    return FOREIGN_SCHEMES.some((scheme) => lower.startsWith(scheme));
  });
}

/**
 * Deduplikasi: satu pelanggaran yang sama bisa datang dari ribuan tab. Kunci
 * yang sama hanya dicetak sekali per SUPPRESS_MS, lengkap dengan jumlah
 * kejadian yang tertahan, supaya log PM2 tetap terbaca tanpa kehilangan sinyal.
 */
const SUPPRESS_MS = 10 * 60 * 1000;
const MAX_KEYS = 500;
const seen = new Map<string, { suppressed: number; lastLoggedAt: number }>();

function shouldLog(key: string): number | null {
  const now = Date.now();
  const entry = seen.get(key);

  if (!entry) {
    // Batasi pertumbuhan memori: endpoint publik, kunci berasal dari input luar.
    if (seen.size >= MAX_KEYS) {
      seen.clear();
      console.error("[csp] tabel dedupe penuh — direset");
    }
    seen.set(key, { suppressed: 0, lastLoggedAt: now });
    return 0;
  }

  if (now - entry.lastLoggedAt >= SUPPRESS_MS) {
    const suppressed = entry.suppressed;
    entry.suppressed = 0;
    entry.lastLoggedAt = now;
    return suppressed;
  }

  entry.suppressed += 1;
  return null;
}

/**
 * 100 laporan per menit per IP. Longgar karena satu pemuatan halaman yang
 * melanggar bisa memicu belasan laporan sekaligus dari banyak tab, tapi tetap
 * menutup kemungkinan endpoint ini dipakai membanjiri disk.
 */
const cspReportRateLimit = rateLimit({
  windowMs: 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false },
});

function handleCspReport(req: Request, res: Response): void {
  // Balas lebih dulu: browser tidak menunggu apa pun, dan pekerjaan logging
  // tidak perlu menahan koneksinya.
  res.status(204).end();

  const ua = typeof req.headers["user-agent"] === "string" ? req.headers["user-agent"] : "-";
  const ip = req.ip ?? "-";

  for (const v of normalize(req.body)) {
    if (!v.directive && !v.blockedUri) continue;
    if (isNoise(v)) continue;

    const key = `${v.directive}|${v.blockedUri}|${v.documentUri}`;
    const suppressed = shouldLog(key);
    if (suppressed === null) continue;

    const tail = suppressed > 0 ? ` (+${suppressed} kejadian serupa ditahan)` : "";
    console.error(
      `[csp-report] ${v.directive || "?"} memblokir "${v.blockedUri || "?"}" ` +
        `di ${v.documentUri || "?"}` +
        (v.sourceFile ? ` — sumber ${v.sourceFile}:${v.line || "?"}` : "") +
        ` — ip=${ip} ua="${ua}"${tail}`,
    );
  }
}

export function registerCspReportRoutes(app: Express): void {
  app.post(
    CSP_REPORT_PATH,
    cspReportRateLimit,
    // Browser mengirim application/csp-report atau application/reports+json —
    // express.json() global hanya menangani application/json, jadi tanpa baris
    // ini req.body akan selalu kosong. Batas 64kb: laporan CSP kecil, dan
    // original-policy adalah satu-satunya field yang bisa membengkak.
    express.json({
      type: ["application/csp-report", "application/reports+json", "application/json"],
      limit: "64kb",
    }),
    handleCspReport,
  );
}
