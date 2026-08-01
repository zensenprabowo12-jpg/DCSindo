// API client + tipe untuk konten template popup firmware (global, semua brand).
// Pola mengikuti ./api.ts (fetch + credentials:"include").

import type { ApiErr, ApiOk } from "./api";

export const FIRMWARE_POPUP_KEYS = ["install_guide", "disclaimer"] as const;
export type FirmwarePopupKey = (typeof FIRMWARE_POPUP_KEYS)[number];

/** Selalu berisi semua kunci — "" bila belum diisi admin. */
export type FirmwarePopupSettings = Record<FirmwarePopupKey, string>;

const BASE = "/api/firmware-popup";

async function j<T>(res: Response): Promise<T> {
  const contentType = res.headers.get("content-type") ?? "";
  const text = await res.text();
  const looksLikeHtml = /^\s*<!doctype html/i.test(text) || contentType.includes("text/html");
  if (looksLikeHtml) {
    throw new Error("API returned HTML instead of JSON. Make sure you run `npm run dev` (Express+Vite).");
  }
  if (!text) return {} as T;
  return JSON.parse(text) as T;
}

async function safe<T>(fn: () => Promise<T>): Promise<T | ApiErr> {
  try {
    return await fn();
  } catch (e) {
    const message = e instanceof Error ? e.message : "Request failed";
    return { ok: false, message } as ApiErr;
  }
}

/** Dipakai modal publik (stage 3) — tanpa auth. */
export async function apiFirmwarePopupPublic(): Promise<ApiOk<FirmwarePopupSettings> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/public`);
    return j(res);
  }) as Promise<ApiOk<FirmwarePopupSettings> | ApiErr>;
}

export async function apiFirmwarePopupAdminGet(): Promise<ApiOk<FirmwarePopupSettings> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin`, { credentials: "include" });
    return j(res);
  }) as Promise<ApiOk<FirmwarePopupSettings> | ApiErr>;
}

export async function apiFirmwarePopupUpdate(
  key: FirmwarePopupKey,
  value: string,
): Promise<ApiOk<{ key: FirmwarePopupKey }> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/${key}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ value }),
    });
    return j(res);
  }) as Promise<ApiOk<{ key: FirmwarePopupKey }> | ApiErr>;
}
