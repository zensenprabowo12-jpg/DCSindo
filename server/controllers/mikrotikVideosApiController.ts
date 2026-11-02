import type { Request, Response } from "express";
import { getMikrotikVideos } from "../services/mikrotikVideosService";

// ─── PUBLIC ───────────────────────────────────────────────────
/**
 * Sengaja TIDAK pernah 500: section "Latest from MikroTik" cukup disembunyikan
 * frontend bila data kosong. Data dilayani dari cache memori (lihat service),
 * jadi request ini tidak memukul YouTube/TikTube tiap kali.
 */
export async function apiMikrotikVideosPublic(_req: Request, res: Response): Promise<void> {
  res.setHeader("Cache-Control", "public, max-age=300");
  try {
    const data = await getMikrotikVideos();
    res.json({ ok: true, data });
  } catch (e) {
    console.warn(`[mikrotik-videos] Gagal menyusun feed, mengirim daftar kosong: ${(e as Error).message}`);
    res.json({ ok: true, data: [] });
  }
}
