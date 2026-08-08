import fs from "fs";
import path from "path";
import multer from "multer";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "fiberhome");
const datasheetRoot = path.join(uploadRoot, "datasheets");

export function ensureFiberHomeUploadDir(): void {
  fs.mkdirSync(uploadRoot, { recursive: true });
  fs.mkdirSync(datasheetRoot, { recursive: true });
}

function makeStorage(dir: string, ensure: () => void, fallbackExt: string) {
  return multer.diskStorage({
    destination: (_req, _file, cb) => {
      ensure();
      cb(null, dir);
    },
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname) || fallbackExt;
      const base = path.basename(file.originalname, ext).replace(/[^\w.-]+/g, "_");
      cb(null, `${Date.now()}-${base.slice(0, 32)}${ext}`);
    },
  });
}

const allowedImages = new Set(["image/jpeg", "image/png", "image/webp"]);

/** Field `image` — dipakai untuk foto hero maupun foto gallery. */
export const uploadFiberHomeImage = multer({
  storage: makeStorage(uploadRoot, ensureFiberHomeUploadDir, ".jpg"),
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (allowedImages.has(file.mimetype)) cb(null, true);
    else cb(new Error("Format gambar: JPG/PNG/WebP"));
  },
}).single("image");

/** Field `datasheet` — PDF saja. */
export const uploadFiberHomeDatasheet = multer({
  storage: makeStorage(datasheetRoot, ensureFiberHomeUploadDir, ".pdf"),
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const isPdf =
      file.mimetype === "application/pdf" &&
      file.originalname.toLowerCase().endsWith(".pdf");
    if (isPdf) cb(null, true);
    else cb(new Error("Datasheet harus berformat .pdf"));
  },
}).single("datasheet");

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
