import fs from "fs";
import path from "path";
import multer from "multer";

/** File upload untuk katalog MikroTik DCS (main + galeri) */
const uploadRoot = path.join(process.cwd(), "public", "uploads", "mikrotik-dcs");

export function ensureMikrotikDcsUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    ensureMikrotikDcsUploadDir();
    cb(null, uploadRoot);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname) || ".jpg";
    const base = path
      .basename(file.originalname, ext)
      .replace(/[^\w.-]+/g, "_");
    cb(null, `${Date.now()}-${base.slice(0, 32)}${ext}`);
  },
});

const allowed = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

const baseMulter = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (allowed.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Format gambar: JPG, PNG, WebP, atau GIF"));
    }
  },
});

/** Satu main + banyak galeri (field name: main_image, gallery) */
export const uploadMikrotikDcsProduct = baseMulter.fields([
  { name: "main_image", maxCount: 1 },
  { name: "gallery", maxCount: 30 },
]);

export function publicPathFromMikrotikDcsFilename(filename: string): string {
  return `/uploads/mikrotik-dcs/${filename}`;
}

export function filePathFromPublicImagePath(p: string): string | null {
  if (!p.startsWith("/uploads/mikrotik-dcs/")) return null;
  const name = path.basename(p);
  return path.join(uploadRoot, name);
}
