import fs from "fs";
import path from "path";
import multer from "multer";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "vsol-dcs");

export function ensureVsolDcsUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

const allowedImages = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    ensureVsolDcsUploadDir();
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

const baseMulter = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (allowedImages.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported format. Images: JPG/PNG/WebP/GIF"));
    }
  },
});

/** Fields: main_image, gallery, in_the_box */
export const uploadVsolDcsProduct = baseMulter.fields([
  { name: "main_image", maxCount: 1 },
  { name: "gallery", maxCount: 30 },
  { name: "in_the_box", maxCount: 20 },
]);

export function publicPathFromVsolDcsFilename(filename: string): string {
  return `/uploads/vsol-dcs/${filename}`;
}

export function filePathFromVsolPublicPath(p: string): string | null {
  if (!p.startsWith("/uploads/vsol-dcs/")) return null;
  const name = path.basename(p);
  return path.join(uploadRoot, name);
}
