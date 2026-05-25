import fs from "fs";
import path from "path";
import multer from "multer";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "training");

export function ensureTrainingUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    ensureTrainingUploadDir();
    cb(null, uploadRoot);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname) || ".jpg";
    const base = path.basename(file.originalname, ext).replace(/[^\w.-]+/g, "_");
    cb(null, `${Date.now()}-${base.slice(0, 32)}${ext}`);
  },
});

const allowedImages = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export const uploadTrainingThumbnail = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (allowedImages.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Format tidak didukung. Gunakan JPG/PNG/WebP/GIF."));
    }
  },
}).single("thumbnail");

export const uploadTrainingGallery = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (allowedImages.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Format tidak didukung. Gunakan JPG/PNG/WebP/GIF."));
    }
  },
}).array("images", 20);

// Handles both thumbnail and qr_image in a single multipart form
export const uploadTrainingSessionFiles = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (allowedImages.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Format tidak didukung. Gunakan JPG/PNG/WebP/GIF."));
    }
  },
}).fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "qr_image", maxCount: 1 },
]);

export function publicPathFromTrainingFilename(filename: string): string {
  return `/uploads/training/${filename}`;
}

export function filePathFromTrainingPublicPath(p: string): string | null {
  if (!p.startsWith("/uploads/training/")) return null;
  return path.join(uploadRoot, path.basename(p));
}
