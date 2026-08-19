import fs from "fs";
import path from "path";
import type { Request } from "express";
import {
  commitSniffedImages,
  createStagingImageUpload,
  removeUploadedFiles,
} from "../utils/safeUpload";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "training");

export function ensureTrainingUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

/** Galeri sesi — banyak gambar sekaligus (field name: images). */
export const uploadTrainingGallery = createStagingImageUpload({
  maxFileSize: 5 * 1024 * 1024,
}).array("images", 20);

/** Thumbnail + QR sesi dalam satu form multipart. */
export const uploadTrainingSessionFiles = createStagingImageUpload({
  maxFileSize: 10 * 1024 * 1024,
}).fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "qr_image", maxCount: 1 },
]);

/**
 * Wajib dipanggil setelah middleware upload training mana pun: sniff isi file,
 * lalu pindahkan dari staging ke public/uploads/training dengan nama dari server.
 * Semua field training bertipe gambar, jadi satu policy cukup.
 */
export function commitTrainingUploads(req: Request): Promise<void> {
  return commitSniffedImages(req, uploadRoot);
}

/** Buang file staging saat request gagal sebelum commit. */
export function discardTrainingUploads(req: Request): Promise<void> {
  return removeUploadedFiles(req);
}

export function publicPathFromTrainingFilename(filename: string): string {
  return `/uploads/training/${filename}`;
}

export function filePathFromTrainingPublicPath(p: string): string | null {
  if (!p.startsWith("/uploads/training/")) return null;
  return path.join(uploadRoot, path.basename(p));
}
