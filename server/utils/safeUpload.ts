import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import multer from "multer";
import type { Request } from "express";

/**
 * Upload aman: nama file & ekstensi ditentukan SERVER, bukan dari
 * `originalname`/`mimetype` yang dikirim client.
 *
 * Alur: multer tulis ke staging (nama acak, di luar webroot) → validasi →
 * lolos ? pindahkan ke public/uploads/... dengan nama final : hapus + error 400.
 *
 * Dua mode validasi:
 * - `commitSniffedUploads` — magic bytes (gambar, video web, PDF). Default.
 * - `commitExtWhitelistedUploads` — daftar putih ekstensi, untuk biner yang
 *   tidak punya signature standar (firmware .ubi/.npk/.itb). Tidak baca isi file.
 */

/** Hasil sniff — ekstensi dan MIME versi server. */
export type SniffResult = { ext: string; mime: string };

/** Byte awal yang dibaca untuk sniff; 4KB cukup untuk semua signature di bawah. */
const SNIFF_BYTES = 4096;

/**
 * Staging di luar `public/` supaya byte yang belum diverifikasi tidak pernah
 * bisa diakses lewat URL. Idealnya satu volume dengan public/ agar pindah file
 * hanya operasi metadata; kalau beda volume, `moveInto` fallback ke copy.
 */
const STAGING_ROOT = path.join(process.cwd(), ".upload-staging");

/** Gambar raster yang aman di-<img>. SVG sengaja di luar daftar (bisa memuat <script>). */
export const IMAGE_MIMES: ReadonlySet<string> = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
]);

/** Varian tanpa GIF — dipakai brand yang memang tidak pernah menerima GIF. */
export const IMAGE_MIMES_NO_GIF: ReadonlySet<string> = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
]);

/** Video yang bisa diputar <video> tanpa plugin. */
export const VIDEO_MIMES: ReadonlySet<string> = new Set([
  "video/mp4",
  "video/webm",
  "video/ogg",
]);

export const PDF_MIMES: ReadonlySet<string> = new Set(["application/pdf"]);

/** Gabungkan beberapa daftar MIME (mis. gambar + video untuk satu form). */
export function unionMimes(...sets: ReadonlySet<string>[]): ReadonlySet<string> {
  const out = new Set<string>();
  for (const set of sets) set.forEach((mime) => out.add(mime));
  return out;
}

/** Error yang selalu dijawab 400 oleh route (bukan 500). */
export class SafeUploadError extends Error {
  readonly status = 400;
  constructor(message: string) {
    super(message);
    this.name = "SafeUploadError";
  }
}

/**
 * Deteksi format dari magic bytes. Mengembalikan null bila tidak dikenal —
 * termasuk untuk SVG, HTML, PHP, MOV/MKV, dan file yang cuma diganti ekstensinya.
 */
export function sniffMimeFromBuffer(buffer: Buffer): SniffResult | null {
  if (buffer.length < 3) return null;

  // ── Gambar ────────────────────────────────────────────────
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

  // ── Video ─────────────────────────────────────────────────
  // ISO-BMFF: "ftyp" di offset 4, brand di offset 8 menentukan variannya.
  if (buffer.subarray(4, 8).toString("latin1") === "ftyp") {
    const brand = buffer.subarray(8, 12).toString("latin1");
    // Brand QuickTime ("qt  ") dan turunan lain sengaja tidak dikenali.
    if (/^(iso[m2456]|mp4[12]|avc1|dash|mmp4|M4V )$/.test(brand)) {
      return { ext: ".mp4", mime: "video/mp4" };
    }
    return null;
  }

  // Matroska/WebM: EBML 1A 45 DF A3. DocType "webm" ada di header awal;
  // .mkv memakai container sama tapi bukan format web → ditolak.
  if (buffer.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3]))) {
    if (buffer.subarray(0, 64).toString("latin1").includes("webm")) {
      return { ext: ".webm", mime: "video/webm" };
    }
    return null;
  }

  // Ogg: "OggS". Ekstensi .ogv supaya Content-Type terbaca video/ogg.
  if (buffer.subarray(0, 4).toString("latin1") === "OggS") {
    return { ext: ".ogv", mime: "video/ogg" };
  }

  // ── Dokumen ───────────────────────────────────────────────
  if (buffer.subarray(0, 5).toString("latin1") === "%PDF-") {
    return { ext: ".pdf", mime: "application/pdf" };
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
 * Cocokkan ekstensi dengan daftar putih; yang terpanjang menang supaya
 * `.tar.gz` tidak keliru dibaca sebagai `.gz`. Mengembalikan ekstensi versi
 * daftar putih (huruf kecil), bukan potongan string dari client.
 */
export function matchWhitelistedExt(
  originalname: string,
  allowedExt: readonly string[],
): string | null {
  const lower = originalname.toLowerCase();
  let matched: string | null = null;
  for (const ext of allowedExt) {
    if (lower.endsWith(ext) && (matched === null || ext.length > matched.length)) {
      matched = ext;
    }
  }
  return matched;
}

/** Buang ekstensi `ext` dari nama; fallback ke extname bila tidak cocok. */
function stripExt(originalname: string, ext: string): string {
  const base = path.basename(originalname);
  if (base.toLowerCase().endsWith(ext.toLowerCase())) return base.slice(0, -ext.length);
  return path.basename(base, path.extname(base));
}

/**
 * Nama final: `<ts>-<uuid><ext>`, atau `<ts>-<uuid>-<base><ext>` bila nama perlu
 * tetap terbaca (file yang diunduh user, mis. firmware & datasheet PDF).
 *
 * Properti keamanannya sama di kedua bentuk: ekstensi berasal dari server, uuid
 * mencegah tabrakan/tebak-tebakan, dan `base` sudah disanitasi + dibatasi.
 */
function buildFinalName(originalname: string, ext: string, keepReadableName: boolean): string {
  const stamp = `${Date.now()}-${randomUUID()}`;
  if (!keepReadableName) return `${stamp}${ext}`;

  const base = stripExt(originalname, ext)
    .replace(/[^\w.-]+/g, "_")
    .replace(/^[._-]+/, "")
    .slice(0, 48);
  return base ? `${stamp}-${base}${ext}` : `${stamp}${ext}`;
}

/**
 * Pindahkan file staging ke tujuan. `rename` bila satu volume (murah, atomic,
 * penting untuk firmware ratusan MB); fallback copy+hapus bila beda volume
 * supaya tidak gagal dengan EXDEV.
 */
async function moveInto(from: string, to: string): Promise<void> {
  try {
    await fsp.rename(from, to);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== "EXDEV") throw err;
    await fsp.copyFile(from, to);
    await fsp.rm(from, { force: true });
  }
}

/**
 * Multer yang menulis ke staging dengan nama acak tanpa satu byte pun input
 * client. Nama & ekstensi final diberikan oleh salah satu fungsi `commit*`.
 *
 * `clientMimes`/`allowedExt` hanyalah gate murah supaya file yang jelas salah
 * tidak perlu ditulis dulu; gate sebenarnya ada di tahap commit.
 */
export function createStagingUpload(opts: {
  maxFileSize?: number;
  clientMimes?: ReadonlySet<string>;
  allowedExt?: readonly string[];
  rejectMessage?: string;
} = {}) {
  const {
    maxFileSize = 20 * 1024 * 1024,
    clientMimes,
    allowedExt,
    rejectMessage = "Format file tidak didukung",
  } = opts;

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
      const mimeOk = !clientMimes || clientMimes.has(file.mimetype);
      const extOk = !allowedExt || matchWhitelistedExt(file.originalname, allowedExt) !== null;
      if (mimeOk && extOk) cb(null, true);
      else cb(new SafeUploadError(rejectMessage));
    },
  });
}

/** Preset upload gambar: JPG/PNG/WebP/GIF, batas 20MB. */
export function createStagingImageUpload(opts: { maxFileSize?: number } = {}) {
  return createStagingUpload({
    maxFileSize: opts.maxFileSize,
    clientMimes: IMAGE_MIMES,
    rejectMessage: "Unsupported format. Images: JPG/PNG/WebP/GIF",
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

/** Aturan MIME yang diizinkan — global, dan opsional dibedakan per field form. */
export type SniffPolicy = {
  allowed: ReadonlySet<string>;
  /** Override per nama field, mis. `overview_videos` boleh video sementara field lain tidak. */
  byField?: Readonly<Record<string, ReadonlySet<string>>>;
  /** Disebut dalam pesan error 400. */
  label?: string;
  /** Sisipkan nama asli yang sudah disanitasi ke nama final (file yang diunduh user). */
  keepReadableName?: boolean;
};

/**
 * Pindahkan file dari staging ke `uploadRoot` setelah `decide` menentukan
 * ekstensi final. All-or-nothing: satu file gagal → semua file request ini
 * dihapus dan error dilempar, jadi tidak ada upload separuh jadi.
 *
 * `file.filename`/`path`/`destination` di-update in-place supaya controller yang
 * membaca `f.filename` tidak perlu berubah. `file.originalname` dibiarkan utuh.
 */
async function commitUploads(
  req: Request,
  uploadRoot: string,
  decide: (file: Express.Multer.File) => Promise<SniffResult>,
  keepReadableName: boolean,
): Promise<void> {
  const files = collectFiles(req);
  if (files.length === 0) return;

  try {
    await fsp.mkdir(uploadRoot, { recursive: true });
    for (const file of files) {
      const { ext, mime } = await decide(file);
      const finalName = buildFinalName(file.originalname, ext, keepReadableName);
      // Sanity check: nama final tidak boleh mengandung pemisah path.
      if (path.basename(finalName) !== finalName) {
        throw new SafeUploadError("Nama file tidak valid");
      }
      const finalPath = path.join(uploadRoot, finalName);
      await moveInto(file.path, finalPath);
      file.filename = finalName;
      file.path = finalPath;
      file.destination = uploadRoot;
      file.mimetype = mime;
    }
  } catch (err) {
    // file.path selalu menunjuk lokasi terkini (staging atau final) tiap file.
    await unlinkAll(files.map((f) => f.path));
    throw err;
  }
}

/**
 * Validasi isi tiap file lewat magic bytes, lalu pindahkan ke `uploadRoot`
 * dengan nama & ekstensi dari server. Hanya 4KB pertama yang dibaca, jadi biaya
 * validasinya tetap sama untuk file kecil maupun besar.
 */
export function commitSniffedUploads(
  req: Request,
  uploadRoot: string,
  policy: SniffPolicy,
): Promise<void> {
  const label = policy.label ?? "gambar PNG/JPG/WebP/GIF";
  return commitUploads(
    req,
    uploadRoot,
    async (file) => {
      const allowed = policy.byField?.[file.fieldname] ?? policy.allowed;
      const sniffed = await sniffFileHead(file.path);
      if (!sniffed || !allowed.has(sniffed.mime)) {
        throw new SafeUploadError(`"${file.originalname}" bukan ${label} yang valid`);
      }
      return sniffed;
    },
    policy.keepReadableName ?? false,
  );
}

/** Preset gambar — dipakai brand yang seluruh fieldnya gambar. */
export function commitSniffedImages(req: Request, uploadRoot: string): Promise<void> {
  return commitSniffedUploads(req, uploadRoot, { allowed: IMAGE_MIMES });
}

/**
 * Validasi berdasarkan daftar putih ekstensi, untuk biner tanpa magic bytes
 * standar (firmware). Isi file TIDAK dibaca sama sekali — penting untuk file
 * ratusan MB — sehingga commit tetap hanya operasi metadata.
 *
 * Ekstensi final diambil dari daftar putih server, bukan dari string client.
 */
export function commitExtWhitelistedUploads(
  req: Request,
  uploadRoot: string,
  opts: { allowedExt: readonly string[]; label: string; keepReadableName?: boolean },
): Promise<void> {
  return commitUploads(
    req,
    uploadRoot,
    async (file) => {
      const ext = matchWhitelistedExt(file.originalname, opts.allowedExt);
      if (!ext) {
        throw new SafeUploadError(`"${file.originalname}" bukan ${opts.label}`);
      }
      // Biner: pertahankan mimetype apa adanya, tidak ada klaim yang bisa diverifikasi.
      return { ext, mime: file.mimetype };
    },
    opts.keepReadableName ?? false,
  );
}
