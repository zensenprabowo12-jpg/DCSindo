// Parser URL video produk MikroTik → URL embed iframe.
// Dipisah dari ProductVideo.tsx supaya bisa di-unit-test tanpa React
// (lihat videoEmbed.test.ts).
//
// Sumber yang didukung:
//   - YouTube : lewat getYoutubeId() — dipindah apa adanya dari ProductVideo.tsx,
//               output embed identik dengan sebelumnya.
//   - TikTube : instance PeerTube resmi MikroTik (tiktube.com). CSP sudah
//               mengizinkan https://tiktube.com di frame-src.

export type VideoEmbed = { src: string };

const TIKTUBE_HOSTS = new Set(["tiktube.com", "www.tiktube.com"]);
// shortUUID PeerTube (22 char base58) atau UUID penuh (36 char dengan '-').
const TIKTUBE_ID_RE = /^[A-Za-z0-9-]{8,36}$/;
// /w/<id>, /videos/watch/<id>, /videos/embed/<id> (boleh diakhiri '/').
const TIKTUBE_PATH_RE = /^\/(?:w|videos\/watch|videos\/embed)\/([^/]+)\/?$/;
// ID YouTube selalu tepat 11 karakter.
const YOUTUBE_BARE_ID_RE = /^[A-Za-z0-9_-]{11}$/;

export function getTiktubeId(urlOrId: string): string {
  const raw = urlOrId.trim();
  if (!raw) return "";
  try {
    const u = new URL(raw);
    if (u.protocol !== "https:" && u.protocol !== "http:") return "";
    if (!TIKTUBE_HOSTS.has(u.hostname.toLowerCase())) return "";
    const id = u.pathname.match(TIKTUBE_PATH_RE)?.[1] ?? "";
    return TIKTUBE_ID_RE.test(id) ? id : "";
  } catch {
    return "";
  }
}

// TIDAK DIUBAH — dipindah verbatim dari ProductVideo.tsx.
export function getYoutubeId(urlOrId: string) {
  const raw = urlOrId.trim();
  if (!raw) return "";
  if (/^[\w-]{6,}$/.test(raw) && !raw.includes("http")) return raw;
  try {
    const u = new URL(raw);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "");
    }
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v") ?? "";
    }
  } catch {
    // ignore
  }
  return "";
}

export function resolveEmbed(urlOrId: string): VideoEmbed | null {
  const raw = (urlOrId ?? "").trim();
  if (!raw) return null;

  // TikTube dicek lebih dulu, dan hanya cocok untuk host tiktube.
  const tiktubeId = getTiktubeId(raw);
  if (tiktubeId) return { src: `https://tiktube.com/videos/embed/${tiktubeId}` };

  // Input tanpa URL (ID polos): hanya terima ID YouTube asli (11 char).
  // Dulu string apa pun ≥6 char diperlakukan sebagai ID YouTube, sehingga
  // shortUUID TikTube polos menghasilkan iframe YouTube rusak. Sekarang: null.
  const isBare = /^[\w-]{6,}$/.test(raw) && !raw.includes("http");
  if (isBare && !YOUTUBE_BARE_ID_RE.test(raw)) return null;

  const youtubeId = getYoutubeId(raw);
  if (!youtubeId) return null;
  return { src: `https://www.youtube.com/embed/${youtubeId}?rel=0` };
}
