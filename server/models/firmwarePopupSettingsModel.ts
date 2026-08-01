import type { RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";

/**
 * Konten template GLOBAL untuk popup detail firmware (tabel `firmware_popup_settings`).
 * Satu set konten untuk SEMUA firmware & SEMUA brand — bukan per-item, bukan per-brand.
 * Skema: database/firmware_popup_settings.sql
 */

/** Kunci resmi yang boleh disimpan (sesuai seed di file SQL). */
export const FIRMWARE_POPUP_KEYS = ["install_guide", "disclaimer"] as const;
export type FirmwarePopupKey = (typeof FIRMWARE_POPUP_KEYS)[number];

export function isValidFirmwarePopupKey(k: string): k is FirmwarePopupKey {
  return (FIRMWARE_POPUP_KEYS as readonly string[]).includes(k);
}

/** Selalu berisi SEMUA kunci — baris yang tidak ada di DB bernilai "". */
export type FirmwarePopupSettings = Record<FirmwarePopupKey, string>;

/** Nilai default bila tabel/baris belum ada — semua kunci kosong. */
export function emptyFirmwarePopupSettings(): FirmwarePopupSettings {
  return FIRMWARE_POPUP_KEYS.reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {} as FirmwarePopupSettings);
}

/**
 * Ambil semua setting. Kunci yang barisnya belum ada tetap dikembalikan
 * sebagai "" sehingga pemanggil tidak pernah menerima undefined.
 */
export async function listFirmwarePopupSettings(): Promise<FirmwarePopupSettings> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT setting_key, setting_value FROM firmware_popup_settings`,
  );
  const out = emptyFirmwarePopupSettings();
  for (const r of rows) {
    const key = String(r.setting_key ?? "");
    if (isValidFirmwarePopupKey(key)) out[key] = String(r.setting_value ?? "");
  }
  return out;
}

/** Ambil satu setting. `null` bila barisnya belum ada. */
export async function getFirmwarePopupSetting(
  key: FirmwarePopupKey,
): Promise<string | null> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT setting_value FROM firmware_popup_settings WHERE setting_key = :key LIMIT 1`,
    { key },
  );
  if (!rows.length) return null;
  return String(rows[0].setting_value ?? "");
}

/** Simpan satu setting — buat barisnya bila belum ada. String kosong diperbolehkan. */
export async function upsertFirmwarePopupSetting(
  key: FirmwarePopupKey,
  value: string,
): Promise<void> {
  await mysqlPool.query(
    `INSERT INTO firmware_popup_settings (setting_key, setting_value)
     VALUES (:key, :value)
     ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)`,
    { key, value },
  );
}
