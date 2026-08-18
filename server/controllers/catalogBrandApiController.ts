import type { Request, Response } from "express";
import { findAllBrands } from "../models/brandModel";
import { requireRole } from "../middleware/requireRole";

// Guard: API katalog lama ditutup untuk anonim (tidak ada pemakai publik).
const requireAdminSession = requireRole("admin");

export async function apiListBrands(req: Request, res: Response) {
  if (!requireAdminSession(req, res)) return;
  try {
    const data = await findAllBrands();
    res.json({ ok: true, data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, message: "Gagal mengambil daftar brand" });
  }
}
