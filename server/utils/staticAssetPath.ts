/**
 * Ekstensi yang dianggap file aset, bukan route SPA.
 * Dipakai catch-all (dev & produksi) agar aset yang hilang menjawab 404,
 * bukan index.html berstatus 200 yang tak bisa didekode browser.
 */
const ASSET_EXTENSIONS = new Set([
  // gambar
  "png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "ico", "bmp",
  // media
  "mp4", "webm", "mov", "mp3", "wav",
  // web assets
  "css", "js", "mjs", "cjs", "map", "json",
  // font
  "woff", "woff2", "ttf", "otf", "eot",
  // dokumen & biner
  "pdf", "txt", "xml", "csv", "zip", "gz", "tar", "bin", "img", "npk", "itb", "ubi",
]);

/**
 * true bila segmen terakhir path berakhiran ekstensi aset yang dikenal.
 *
 * Memakai daftar putih, bukan "ada titik berarti file", supaya route SPA yang
 * mengandung titik (mis. /produk/v1.2) tidak salah dianggap aset.
 */
export function isStaticAssetPath(pathname: string): boolean {
  const withoutQuery = pathname.split("?")[0].split("#")[0];
  const lastSegment = withoutQuery.slice(withoutQuery.lastIndexOf("/") + 1);
  const dot = lastSegment.lastIndexOf(".");
  if (dot <= 0) return false; // tak ada ekstensi, atau dotfile seperti ".env"
  return ASSET_EXTENSIONS.has(lastSegment.slice(dot + 1).toLowerCase());
}
