import fs from "fs";
import path from "path";
import multer from "multer";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "products");

export function ensureCatalogProductUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    ensureCatalogProductUploadDir();
    cb(null, uploadRoot);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname) || ".jpg";
    const base = path.basename(file.originalname, ext).replace(/[^\w.-]+/g, "_");
    cb(null, `${Date.now()}-${base.slice(0, 40)}${ext}`);
  },
});

const allowed = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export const uploadCatalogProductImage = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (allowed.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Format gambar harus JPG, PNG, WebP, atau GIF"));
    }
  },
});

export function publicPathFromCatalogFilename(filename: string): string {
  return `/uploads/products/${filename}`;
}
