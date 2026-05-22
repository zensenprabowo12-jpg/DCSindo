import fs from "fs";
import path from "path";
import multer from "multer";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "ubiquiti-dcs");

export function ensureUbiquitiDcsUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
}

const allowedImages = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const allowedVideos = new Set(["video/mp4", "video/webm", "video/ogg"]);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    ensureUbiquitiDcsUploadDir();
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
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB untuk video
  fileFilter: (_req, file, cb) => {
    if (allowedImages.has(file.mimetype) || allowedVideos.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Format tidak didukung. Gambar: JPG/PNG/WebP/GIF. Video: MP4/WebM/OGG"));
    }
  },
});

/** Fields: main_image, gallery, overview_images, overview_videos, in_the_box */
export const uploadUbiquitiDcsProduct = baseMulter.fields([
  { name: "main_image", maxCount: 1 },
  { name: "gallery", maxCount: 30 },
  { name: "overview_images", maxCount: 20 },
  { name: "overview_videos", maxCount: 10 },
  { name: "in_the_box", maxCount: 20 },
]);

export function publicPathFromUbiquitiDcsFilename(filename: string): string {
  return `/uploads/ubiquiti-dcs/${filename}`;
}

export function filePathFromUbiquitiPublicPath(p: string): string | null {
  if (!p.startsWith("/uploads/ubiquiti-dcs/")) return null;
  const name = path.basename(p);
  return path.join(uploadRoot, name);
}
