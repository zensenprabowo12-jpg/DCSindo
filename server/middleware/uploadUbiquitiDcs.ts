import fs from "fs";
import path from "path";
import type { Request } from "express";
import {
  commitSniffedUploads,
  createStagingUpload,
  IMAGE_MIMES,
  removeUploadedFiles,
  unionMimes,
  VIDEO_MIMES,
} from "../utils/safeUpload";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "ubiquiti-dcs");

export function ensureUbiquitiDcsUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

const clientMimes = unionMimes(IMAGE_MIMES, VIDEO_MIMES);

const baseMulter = createStagingUpload({
  maxFileSize: 50 * 1024 * 1024, // 50MB untuk video
  clientMimes,
  rejectMessage: "Format tidak didukung. Gambar: JPG/PNG/WebP/GIF. Video: MP4/WebM/OGG",
});

/** Fields: main_image, gallery, overview_images, overview_videos, in_the_box */
export const uploadUbiquitiDcsProduct = baseMulter.fields([
  { name: "main_image", maxCount: 1 },
  { name: "gallery", maxCount: 30 },
  { name: "overview_images", maxCount: 20 },
  { name: "overview_videos", maxCount: 10 },
  { name: "in_the_box", maxCount: 20 },
]);

/**
 * Wajib dipanggil setelah `uploadUbiquitiDcsProduct`: sniff isi file, lalu
 * pindahkan dari staging ke public/uploads/ubiquiti-dcs dengan nama dari server.
 *
 * Video hanya diterima di field `overview_videos`; field lainnya wajib gambar,
 * jadi MP4 tidak bisa lagi menyusup ke `main_image` dan merusak render halaman.
 */
export function commitUbiquitiDcsUploads(req: Request): Promise<void> {
  return commitSniffedUploads(req, uploadRoot, {
    allowed: IMAGE_MIMES,
    byField: { overview_videos: VIDEO_MIMES },
    label: "gambar PNG/JPG/WebP/GIF atau video MP4/WebM/OGG",
  });
}

/** Buang file staging saat request gagal sebelum commit. */
export function discardUbiquitiDcsUploads(req: Request): Promise<void> {
  return removeUploadedFiles(req);
}

export function publicPathFromUbiquitiDcsFilename(filename: string): string {
  return `/uploads/ubiquiti-dcs/${filename}`;
}

export function filePathFromUbiquitiPublicPath(p: string): string | null {
  if (!p.startsWith("/uploads/ubiquiti-dcs/")) return null;
  const name = path.basename(p);
  return path.join(uploadRoot, name);
}
