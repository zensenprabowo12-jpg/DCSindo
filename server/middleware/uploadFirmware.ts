import fs from "fs";
import path from "path";
import type { Request } from "express";
import {
  commitExtWhitelistedUploads,
  createStagingUpload,
  removeUploadedFiles,
} from "../utils/safeUpload";

/** File upload untuk firmware (file biner, bukan gambar). */
const uploadRoot = path.join(process.cwd(), "public", "uploads", "firmware");

export function ensureFirmwareUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

/**
 * Whitelist berdasarkan ekstensi — firmware tidak punya magic bytes standar
 * (.ubi/.npk/.itb tiap vendor beda), jadi isi file tidak bisa disniff.
 * Mendukung ekstensi ganda seperti `.tar.gz`.
 */
const allowedExt = [".bin", ".img", ".zip", ".tar", ".gz", ".tar.gz", ".ubi", ".npk", ".itb"];

const rejectMessage = "Format firmware: .bin .img .zip .tar .gz .tar.gz .ubi .npk .itb";

const baseMulter = createStagingUpload({
  maxFileSize: 550 * 1024 * 1024, // 550 MB (headroom untuk firmware ~500 MB)
  allowedExt,
  rejectMessage,
});

/** Satu file firmware per unggahan (field name: firmware_file). */
export const uploadFirmwareFile = baseMulter.single("firmware_file");

/**
 * Commit firmware: ekstensi diambil dari daftar putih server, uuid mencegah
 * tabrakan. Isi file tidak dibaca sama sekali, jadi commit hanya operasi
 * metadata — file 500 MB tidak ikut di-buffer maupun di-hash.
 *
 * `keepReadableName` dipertahankan karena file ini diunduh user secara langsung
 * (`<a href={file_path}>`, tanpa Content-Disposition), sehingga nama di disk
 * adalah nama yang mendarat di folder Downloads mereka.
 */
export function commitFirmwareUpload(req: Request): Promise<void> {
  return commitExtWhitelistedUploads(req, uploadRoot, {
    allowedExt,
    label: rejectMessage,
    keepReadableName: true,
  });
}

/** Buang file staging saat request gagal sebelum commit. */
export function discardFirmwareUpload(req: Request): Promise<void> {
  return removeUploadedFiles(req);
}

export function publicPathFromFirmwareFilename(filename: string): string {
  return `/uploads/firmware/${filename}`;
}

export function filePathFromFirmwarePublicPath(p: string): string | null {
  if (!p.startsWith("/uploads/firmware/")) return null;
  const name = path.basename(p);
  return path.join(uploadRoot, name);
}
