import fs from "fs";
import path from "path";
import type { Request } from "express";
import {
  commitSniffedUploads,
  createStagingUpload,
  IMAGE_MIMES_NO_GIF,
  PDF_MIMES,
  removeUploadedFiles,
} from "../utils/safeUpload";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "fiberhome");
const datasheetRoot = path.join(uploadRoot, "datasheets");

export function ensureFiberHomeUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
  fs.mkdirSync(datasheetRoot, { recursive: true });
}

/** Field `image` — dipakai untuk foto hero maupun foto gallery. */
export const uploadFiberHomeImage = createStagingUpload({
  maxFileSize: 20 * 1024 * 1024,
  clientMimes: IMAGE_MIMES_NO_GIF,
  rejectMessage: "Format gambar: JPG/PNG/WebP",
}).single("image");

/** Field `datasheet` — PDF saja. */
export const uploadFiberHomeDatasheet = createStagingUpload({
  maxFileSize: 50 * 1024 * 1024,
  clientMimes: PDF_MIMES,
  allowedExt: [".pdf"],
  rejectMessage: "Datasheet harus berformat .pdf",
}).single("datasheet");

/** Commit gambar produk/galeri ke public/uploads/fiberhome. */
export function commitFiberHomeImage(req: Request): Promise<void> {
  return commitSniffedUploads(req, uploadRoot, {
    allowed: IMAGE_MIMES_NO_GIF,
    label: "gambar PNG/JPG/WebP",
  });
}

/**
 * Commit datasheet ke public/uploads/fiberhome/datasheets.
 * `keepReadableName` dipakai karena file ini diunduh user — nama uuid murni
 * bikin isi folder Downloads tidak bisa dikenali.
 */
export function commitFiberHomeDatasheet(req: Request): Promise<void> {
  return commitSniffedUploads(req, datasheetRoot, {
    allowed: PDF_MIMES,
    label: "berkas PDF",
    keepReadableName: true,
  });
}

/** Buang file staging saat request gagal sebelum commit. */
export function discardFiberHomeUploads(req: Request): Promise<void> {
  return removeUploadedFiles(req);
}

export function publicPathFromFiberHomeFilename(filename: string): string {
  return `/uploads/fiberhome/${filename}`;
}

export function publicPathFromFiberHomeDatasheetFilename(filename: string): string {
  return `/uploads/fiberhome/datasheets/${filename}`;
}

/** Path disk dari public path — hanya menerima path di bawah /uploads/fiberhome/. */
export function filePathFromFiberHomePublicPath(p: string): string | null {
  if (!p.startsWith("/uploads/fiberhome/")) return null;
  const rel = p.slice("/uploads/fiberhome/".length);
  const abs = path.resolve(uploadRoot, rel);
  // Cegah traversal keluar dari uploadRoot.
  if (abs !== uploadRoot && !abs.startsWith(uploadRoot + path.sep)) return null;
  return abs;
}
