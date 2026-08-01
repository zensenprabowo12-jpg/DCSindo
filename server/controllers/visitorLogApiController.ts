import type { Request, Response } from "express";
import { getStats, listVisits } from "../models/visitorLogModel";
import { requireRole } from "../middleware/requireRole";

/** Guard: seluruh endpoint statistik pengunjung butuh role 'admin'. */
const requireAdminSession = requireRole("admin");

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
/** Rentang bawaan bila `from`/`to` tidak dikirim. */
const DEFAULT_RANGE_DAYS = 30;

function str(v: unknown): string | null {
  const raw = Array.isArray(v) ? v[0] : v;
  return typeof raw === "string" && raw.trim() ? raw.trim() : null;
}

/** Tanggal lokal 'YYYY-MM-DD' (bukan UTC — samakan dengan jam server & DB). */
function localDate(d: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function clampInt(v: unknown, fallback: number, min: number, max: number): number {
  const n = Number.parseInt(String(Array.isArray(v) ? v[0] : v ?? ""), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(Math.max(n, min), max);
}

type Range = { from: string; to: string; includeBots: boolean };

/**
 * Baca & validasi rentang tanggal + flag bot dari query string.
 * Mengembalikan null bila tidak valid — respons 400 sudah ditulis.
 */
function parseRange(req: Request, res: Response): Range | null {
  const rawFrom = str(req.query.from);
  const rawTo = str(req.query.to);

  if ((rawFrom && !DATE_RE.test(rawFrom)) || (rawTo && !DATE_RE.test(rawTo))) {
    res.status(400).json({ ok: false, message: "Format tanggal harus YYYY-MM-DD." });
    return null;
  }

  const today = new Date();
  const to = rawTo ?? localDate(today);
  let from = rawFrom;
  if (!from) {
    const d = new Date(today);
    d.setDate(d.getDate() - (DEFAULT_RANGE_DAYS - 1));
    from = localDate(d);
  }

  // 'YYYY-MM-DD' aman dibandingkan secara leksikografis.
  if (from > to) {
    res.status(400).json({ ok: false, message: "Tanggal awal tidak boleh melewati tanggal akhir." });
    return null;
  }

  const includeBots = str(req.query.includeBots);
  return { from, to, includeBots: includeBots === "1" || includeBots === "true" };
}

/** Admin: daftar kunjungan (paginasi server-side). */
export async function apiVisitorLogList(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  const range = parseRange(req, res);
  if (!range) return;
  try {
    const limit = clampInt(req.query.limit, 100, 1, 500);
    const offset = clampInt(req.query.offset, 0, 0, Number.MAX_SAFE_INTEGER);
    const data = await listVisits({ ...range, limit, offset });
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

/** Admin: agregat statistik pengunjung untuk dashboard. */
export async function apiVisitorLogStats(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  const range = parseRange(req, res);
  if (!range) return;
  try {
    const data = await getStats(range);
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}
