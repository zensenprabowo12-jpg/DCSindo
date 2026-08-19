import fs from "fs";
import path from "path";
import type { Request } from "express";
import {
  commitSniffedImages,
  createStagingImageUpload,
  removeUploadedFiles,
} from "../utils/safeUpload";

/** File upload untuk katalog MikroTik DCS (main + galeri) */
const uploadRoot = path.join(process.cwd(), "public", "uploads", "mikrotik-dcs");

export function ensureMikrotikDcsUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

const baseMulter = createStagingImageUpload({ maxFileSize: 8 * 1024 * 1024 });

/** Satu main + banyak galeri (field name: main_image, gallery) */
export const uploadMikrotikDcsProduct = baseMulter.fields([
  { name: "main_image", maxCount: 1 },
  { name: "gallery", maxCount: 30 },
]);

/**
 * Wajib dipanggil setelah `uploadMikrotikDcsProduct`: sniff isi file, lalu
 * pindahkan dari staging ke public/uploads/mikrotik-dcs dengan nama dari server.
 * Melempar SafeUploadError (400) bila ada file yang bukan gambar valid.
 */
export function commitMikrotikDcsUploads(req: Request): Promise<void> {
  return commitSniffedImages(req, uploadRoot);
}

/** Buang file staging saat request gagal sebelum commit. */
export function discardMikrotikDcsUploads(req: Request): Promise<void> {
  return removeUploadedFiles(req);
}

export function publicPathFromMikrotikDcsFilename(filename: string): string {
  return `/uploads/mikrotik-dcs/${filename}`;
}

export function filePathFromPublicImagePath(p: string): string | null {
  if (!p.startsWith("/uploads/mikrotik-dcs/")) return null;
  const name = path.basename(p);
  return path.join(uploadRoot, name);
}
