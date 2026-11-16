import type { Request, Response } from "express";
import { requireRole } from "../middleware/requireRole";

/**
 * Helper bersama pola "Published per produk" (lihat PROJECT_SUMMARY.md §7).
 * Dipakai MikroTik, Ubiquiti, dan V-SOL. FiberHome (Stage 1) punya salinan
 * sendiri di controllernya dan sengaja tidak diubah.
 */

/**
 * - Endpoint PUBLIK selalu `{ publishedOnly: true }`.
 * - Endpoint ADMIN & pemakaian internal (update/delete) `{ publishedOnly: false }`.
 */
export type VisibilityOpts = { publishedOnly: boolean };

export const ALL_PRODUCTS: VisibilityOpts = { publishedOnly: false };
export const PUBLISHED_ONLY: VisibilityOpts = { publishedOnly: true };

/**
 * Nilai boolean dari body JSON atau multipart (multipart selalu string,
 * kadang string[] dari multer).
 * `undefined` = field tidak dikirim; `null` = dikirim tapi tidak valid.
 */
export function parsePublished(raw: unknown): boolean | undefined | null {
  if (raw === undefined) return undefined;
  const v = Array.isArray(raw) ? raw[0] : raw;
  if (v === true || v === 1 || v === "1" || v === "true") return true;
  if (v === false || v === 0 || v === "0" || v === "false") return false;
  return null;
}

export const INVALID_PUBLISHED_MESSAGE = "is_published must be true or false";

// ─── Handler admin: POST /admin/products/:id/published ───────

/**
 * Bangun handler toggle per brand. Body JSON `{ is_published: boolean }`.
 * 401 belum login · 403 bukan admin · 400 id/nilai salah · 404 id tak ada.
 */
export function makeSetPublishedHandler(
  setPublished: (id: number, published: boolean) => Promise<boolean>,
  messages: { invalidId: string; notFound: string },
) {
  const requireAdmin = requireRole("admin");
  return async (req: Request, res: Response): Promise<void> => {
    if (!requireAdmin(req, res)) return;
    try {
      const id = Number.parseInt(String(req.params.id ?? ""), 10);
      if (!Number.isFinite(id) || id < 1) {
        res.status(400).json({ ok: false, message: messages.invalidId });
        return;
      }
      const published = parsePublished((req.body as Record<string, unknown> | undefined)?.is_published);
      if (published === undefined || published === null) {
        res.status(400).json({ ok: false, message: INVALID_PUBLISHED_MESSAGE });
        return;
      }
      if (!(await setPublished(id, published))) {
        res.status(404).json({ ok: false, message: messages.notFound });
        return;
      }
      res.json({ ok: true, data: { id, is_published: published } });
    } catch (e) {
      res.status(500).json({ ok: false, message: (e as Error).message });
    }
  };
}
