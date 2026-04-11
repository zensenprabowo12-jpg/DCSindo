import fs from "fs";
import path from "path";

/** Hapus file di disk jika path seperti /uploads/mikrotik/xxx.jpg */
export function tryUnlinkPublicImage(webPath: string | null | undefined): void {
  if (!webPath || !webPath.startsWith("/uploads/")) return;
  const abs = path.join(process.cwd(), "public", webPath.replace(/^\//, ""));
  fs.unlink(abs, () => undefined);
}
