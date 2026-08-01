import fs from "fs";
import path from "path";
import multer from "multer";

/** File upload untuk firmware (file biner, bukan gambar). */
const uploadRoot = path.join(process.cwd(), "public", "uploads", "firmware");

export function ensureFirmwareUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    ensureFirmwareUploadDir();
    cb(null, uploadRoot);
  },
  filename: (_req, file, cb) => {
    // Pertahankan nama asli (termasuk ekstensi) — hanya disanitasi.
    const clean = file.originalname.replace(/[^\w.-]+/g, "_");
    cb(null, `${Date.now()}-${clean}`);
  },
});

/**
 * Whitelist berdasarkan ekstensi — mimetype file biner tidak dapat diandalkan.
 * Mendukung ekstensi ganda seperti `.tar.gz`.
 */
const allowedExt = [".bin", ".img", ".zip", ".tar", ".gz", ".tar.gz", ".ubi", ".npk", ".itb"];

const baseMulter = multer({
  storage,
  limits: { fileSize: 550 * 1024 * 1024 }, // 550 MB (headroom untuk firmware ~500 MB)
  fileFilter: (_req, file, cb) => {
    const name = file.originalname.toLowerCase();
    if (allowedExt.some((ext) => name.endsWith(ext))) {
      cb(null, true);
    } else {
      cb(new Error("Format firmware: .bin .img .zip .tar .gz .tar.gz .ubi .npk .itb"));
    }
  },
});

/** Satu file firmware per unggahan (field name: firmware_file). */
export const uploadFirmwareFile = baseMulter.single("firmware_file");

export function publicPathFromFirmwareFilename(filename: string): string {
  return `/uploads/firmware/${filename}`;
}

export function filePathFromFirmwarePublicPath(p: string): string | null {
  if (!p.startsWith("/uploads/firmware/")) return null;
  const name = path.basename(p);
  return path.join(uploadRoot, name);
}
