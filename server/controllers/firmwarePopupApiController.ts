import type { Request, Response } from "express";
import {
  emptyFirmwarePopupSettings,
  isValidFirmwarePopupKey,
  listFirmwarePopupSettings,
  upsertFirmwarePopupSetting,
  FIRMWARE_POPUP_KEYS,
} from "../models/firmwarePopupSettingsModel";
import { requireRole } from "../middleware/requireRole";

// Guard: endpoint admin konten popup butuh role 'admin'.
const requireAdminSession = requireRole("admin");

// ─── PUBLIC ───────────────────────────────────────────────────
/**
 * Sengaja TIDAK pernah 500: modal publik harus tetap tampil walau tabel
 * `firmware_popup_settings` belum ada (mis. DB lokal yang belum diimpor).
 * Nilai "" = pemanggil memakai teks bawaannya sendiri.
 */
export async function apiFirmwarePopupPublicGet(req: Request, res: Response): Promise<void> {
  try {
    const data = await listFirmwarePopupSettings();
    res.json({ ok: true, data });
  } catch (e) {
    console.warn(
      `[firmware-popup] Gagal membaca firmware_popup_settings, memakai nilai kosong: ${(e as Error).message}`,
    );
    res.json({ ok: true, data: emptyFirmwarePopupSettings() });
  }
}

// ─── ADMIN GET ────────────────────────────────────────────────
/**
 * Kebalikan dari endpoint publik: error DB DIteruskan sebagai 500 supaya
 * admin tahu tabelnya belum ada, bukan diam-diam menyunting nilai kosong.
 */
export async function apiFirmwarePopupAdminGet(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const data = await listFirmwarePopupSettings();
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN UPDATE ─────────────────────────────────────────────
export async function apiFirmwarePopupAdminUpdate(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const key = String(req.params.key ?? "");
    if (!isValidFirmwarePopupKey(key)) {
      res.status(400).json({
        ok: false,
        message: `Kunci tidak dikenal. Pilihan: ${FIRMWARE_POPUP_KEYS.join(", ")}`,
      });
      return;
    }
    // Tanpa trim — newline di awal/akhir bermakna untuk teks multi-baris.
    // String kosong sah: admin sengaja mengosongkan section.
    const value = (req.body as { value?: unknown })?.value;
    if (typeof value !== "string") {
      res.status(400).json({ ok: false, message: "Field `value` wajib berupa string" });
      return;
    }
    await upsertFirmwarePopupSetting(key, value);
    res.json({ ok: true, data: { key } });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}
