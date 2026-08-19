import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import multer from "multer";
import type { Request } from "express";

/**
 * Upload gambar yang aman: nama file & ekstensi ditentukan SERVER dari isi file
 * (magic bytes), bukan dari `originalname`/`mimetype` yang dikirim client.
 *
 * Alur: multer tulis ke staging (nama acak, di luar webroot) → sniff 4KB awal →
 * cocok whitelist ? rename ke public/uploads/... : hapus + error 400.
 */

/** Hasil sniff — ekstensi dan MIME versi server. */
export type SniffResult = { ext: string; mime: string };

/** Byte awal yang dibaca untuk sniff; 4KB cukup untuk semua signature gambar. */
const SNIFF_BYTES = 4096;

/**
 * Staging di luar `public/` supaya byte yang belum diverifikasi tidak pernah
 * bisa diakses lewat URL. Satu volume dengan public/ agar rename tetap atomic.
 */
const STAGING_ROOT = path.join(process.cwd(), ".upload-staging");

/** Whitelist upload gambar. SVG sengaja di luar daftar (bisa memuat <script>). */
export const IMAGE_MIME_WHITELIST: ReadonlySet<string> = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
]);

/** Error yang selalu dijawab 400 oleh route (bukan 500). */
export class SafeUploadError extends Error {
  readonly status = 400;
  constructor(message: string) {
    super(message);
    this.name = "SafeUploadError";
  }
}

/**
 * Deteksi format gambar dari magic bytes. Mengembalikan null bila tidak dikenal
 * — termasuk untuk SVG, HTML, PHP, dan file gambar yang cuma diganti ekstensinya.
 */
export function sniffMimeFromBuffer(buffer: Buffer): SniffResult | null {
  if (buffer.length < 3) return null;

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  const PNG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (buffer.subarray(0, 8).equals(PNG)) {
    return { ext: ".png", mime: "image/png" };
  }

  // JPEG: FF D8 FF (JFIF/Exif/SPIFF sama-sama diawali ini)
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return { ext: ".jpg", mime: "image/jpeg" };
  }

  // WebP: "RIFF" + 4 byte panjang + "WEBP"
  if (
    buffer.subarray(0, 4).toString("latin1") === "RIFF" &&
    buffer.subarray(8, 12).toString("latin1") === "WEBP"
  ) {
    return { ext: ".webp", mime: "image/webp" };
  }

  // GIF: "GIF87a" atau "GIF89a"
  const gifHeader = buffer.subarray(0, 6).toString("latin1");
  if (gifHeader === "GIF87a" || gifHeader === "GIF89a") {
    return { ext: ".gif", mime: "image/gif" };
  }

  return null;
}

/** Baca sebagian awal file lalu sniff. */
async function sniffFileHead(filePath: string): Promise<SniffResult | null> {
  const handle = await fsp.open(filePath, "r");
  try {
    const buffer = Buffer.alloc(SNIFF_BYTES);
    const { bytesRead } = await handle.read(buffer, 0, SNIFF_BYTES, 0);
    return sniffMimeFromBuffer(buffer.subarray(0, bytesRead));
  } finally {
    await handle.close();
  }
}

/**
 * Multer untuk upload gambar: menulis ke staging dengan nama acak tanpa satu
 * byte pun input client. Nama & ekstensi final diberikan `commitSniffedImages`.
 *
 * `fileFilter` di sini hanya gate murah berbasis header client supaya file jelas
 * salah tidak perlu ditulis dulu; gate yang sebenarnya adalah sniff magic bytes.
 */
export function createStagingImageUpload(opts: { maxFileSize?: number } = {}) {
  const { maxFileSize = 20 * 1024 * 1024 } = opts;

  const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      fs.mkdirSync(STAGING_ROOT, { recursive: true });
      cb(null, STAGING_ROOT);
    },
    filename: (_req, _file, cb) => {
      cb(null, `${Date.now()}-${randomUUID()}.part`);
    },
  });

  return multer({
    storage,
    limits: { fileSize: maxFileSize },
    fileFilter: (_req, file, cb) => {
      if (IMAGE_MIME_WHITELIST.has(file.mimetype)) cb(null, true);
      else cb(new SafeUploadError("Unsupported format. Images: JPG/PNG/WebP/GIF"));
    },
  });
}

/** Semua file request, apa pun bentuk `req.file` / `req.files`. */
function collectFiles(req: Request): Express.Multer.File[] {
  const single = req.file ? [req.file] : [];
  const many = req.files;
  if (!many) return single;
  if (Array.isArray(many)) return [...single, ...many];
  return [...single, ...Object.values(many).flat()];
}

async function unlinkAll(paths: string[]): Promise<void> {
  await Promise.all(paths.map((p) => fsp.rm(p, { force: true }).catch(() => undefined)));
}

/** Hapus semua file request. Dipakai di jalur error agar tidak ada file yatim. */
export async function removeUploadedFiles(req: Request): Promise<void> {
  await unlinkAll(collectFiles(req).map((f) => f.path));
}

/**
 * Validasi isi tiap file, lalu pindahkan dari staging ke `uploadRoot` dengan
 * nama final `<Date.now()>-<uuid><ext>` — ekstensi dari hasil sniff.
 *
 * All-or-nothing: satu file gagal → semua file request ini dihapus dan
 * SafeUploadError dilempar, jadi tidak ada upload separuh jadi.
 *
 * `file.filename` / `file.path` / `file.mimetype` di-update in-place supaya
 * controller yang membaca `f.filename` tidak perlu berubah. `file.originalname`
 * dibiarkan utuh untuk pesan error dan keperluan tampilan.
 */
export async function commitSniffedImages(req: Request, uploadRoot: string): Promise<void> {
  const files = collectFiles(req);
  if (files.length === 0) return;

  try {
    await fsp.mkdir(uploadRoot, { recursive: true });
    for (const file of files) {
      const sniffed = await sniffFileHead(file.path);
      if (!sniffed || !IMAGE_MIME_WHITELIST.has(sniffed.mime)) {
        throw new SafeUploadError(
          `"${file.originalname}" bukan gambar PNG/JPG/WebP/GIF yang valid`,
        );
      }
      const finalName = `${Date.now()}-${randomUUID()}${sniffed.ext}`;
      const finalPath = path.join(uploadRoot, finalName);
      await fsp.rename(file.path, finalPath);
      file.filename = finalName;
      file.path = finalPath;
      file.destination = uploadRoot;
      file.mimetype = sniffed.mime;
    }
  } catch (err) {
    // file.path sudah menunjuk lokasi terkini (staging atau final) untuk tiap file.
    await unlinkAll(files.map((f) => f.path));
    throw err;
  }
}
