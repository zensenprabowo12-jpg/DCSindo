import { randomUUID } from "node:crypto";
import type { NextFunction, Request, Response } from "express";

/**
 * H-04 — Sanitasi response 5xx.
 *
 * Error handler di `index.ts` mengirim `err.message` apa adanya. Untuk 4xx itu
 * memang disengaja (pesan validasi ditulis untuk dibaca user), tapi untuk 5xx
 * pesannya berasal dari lapisan bawah: query MySQL beserta nama tabel/kolom,
 * path filesystem absolut, atau isi stack trace. Semua itu tidak boleh sampai
 * ke browser.
 *
 * Middleware ini membungkus `res.json`: begitu status >= 500, body diganti
 * pesan generik + `ref` (correlation ID). Body asli tetap ditulis penuh ke
 * stdout, jadi admin cukup mencari `ref` dari laporan user di log PM2 untuk
 * mendapat pesan asli beserta stack trace yang dicetak error handler.
 */
export function errorSanitizer(req: Request, res: Response, next: NextFunction): void {
  res.locals.correlationId = randomUUID();

  const originalJson = res.json.bind(res);
  res.json = ((body?: unknown) => {
    if (res.statusCode < 500) return originalJson(body);
    console.error(
      `[5xx ${res.locals.correlationId}] ${req.method} ${req.originalUrl} — body asli:`,
      body,
    );
    return originalJson({
      ok: false,
      message: "Terjadi kesalahan pada server. Sebutkan kode berikut saat melapor.",
      ref: res.locals.correlationId,
    });
  }) as Response["json"];

  next();
}

/** Correlation ID request ini; string kosong bila middleware belum jalan. */
export function correlationId(res: Response): string {
  return typeof res.locals.correlationId === "string" ? res.locals.correlationId : "";
}
