import fs from "fs";
import path from "path";
import type { Request } from "express";
import {
  commitSniffedImages,
  createStagingImageUpload,
  removeUploadedFiles,
} from "../utils/safeUpload";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "vsol-dcs");

export function ensureVsolDcsUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

const baseMulter = createStagingImageUpload();

/** Fields: main_image, gallery, in_the_box */
export const uploadVsolDcsProduct = baseMulter.fields([
  { name: "main_image", maxCount: 1 },
  { name: "gallery", maxCount: 30 },
  { name: "in_the_box", maxCount: 20 },
]);

/**
 * Wajib dipanggil setelah `uploadVsolDcsProduct`: sniff isi file, lalu pindahkan
 * dari staging ke public/uploads/vsol-dcs dengan nama final dari server.
 * Melempar SafeUploadError (400) bila ada file yang bukan gambar valid.
 */
export function commitVsolDcsUploads(req: Request): Promise<void> {
  return commitSniffedImages(req, uploadRoot);
}

/** Buang file staging saat request gagal sebelum commit. */
export function discardVsolDcsUploads(req: Request): Promise<void> {
  return removeUploadedFiles(req);
}

export function publicPathFromVsolDcsFilename(filename: string): string {
  return `/uploads/vsol-dcs/${filename}`;
}

export function filePathFromVsolPublicPath(p: string): string | null {
  if (!p.startsWith("/uploads/vsol-dcs/")) return null;
  const name = path.basename(p);
  return path.join(uploadRoot, name);
}
