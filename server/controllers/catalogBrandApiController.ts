import type { Request, Response } from "express";
import { findAllBrands } from "../models/brandModel";

export async function apiListBrands(_req: Request, res: Response) {
  try {
    const data = await findAllBrands();
    res.json({ ok: true, data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, message: "Gagal mengambil daftar brand" });
  }
}
