/**
 * Feed "Latest from MikroTik" — 10 video resmi terbaru dari YouTube @mikrotik
 * dan TikTube (kanal mikrotik_news), digabung & di-cache di memori proses.
 *
 * Tanpa database dan tanpa dependency baru: global fetch Node + parser RSS
 * minimal yang hanya membaca elemen yang dipakai di bawah.
 *
 * Aturan:
 *  - Cache TTL 7 hari. Refresh yang gagal TIDAK menghapus data: tiap sumber
 *    menyimpan hasil terakhirnya yang berhasil (stale-on-error), jadi satu
 *    sumber mati tidak menghapus sumber lain.
 *  - Bila ada sumber yang gagal, refresh berikutnya dijadwalkan lebih cepat
 *    (RETRY_MS), bukan menunggu 7 hari.
 *  - Hanya satu refresh berjalan pada satu waktu (anti-stampede). Request
 *    yang datang saat cache basi langsung dilayani data lama; hanya request
 *    pertama tanpa data sama sekali yang menunggu.
 *  - Judul & deskripsi diambil APA ADANYA dari sumber, hanya dibersihkan dari
 *    markup HTML/markdown supaya tampil sebagai teks polos.
 */

/**
 * Channel ID resmi @mikrotik. Diverifikasi dari halaman https://www.youtube.com/@mikrotik:
 * `<link rel="canonical">` menunjuk /channel/UCwFW0ZgZNcmZgAYN_zVxQ-Q, `externalId`
 * sama, dan `vanityChannelUrl` = @mikrotik. Feed RSS-nya berjudul "MikroTik".
 */
export const MIKROTIK_YOUTUBE_CHANNEL_ID = "UCwFW0ZgZNcmZgAYN_zVxQ-Q";
export const TIKTUBE_CHANNEL = "mikrotik_news";

const PROD_YOUTUBE_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${MIKROTIK_YOUTUBE_CHANNEL_ID}`;
const PROD_TIKTUBE_API_URL = `https://tiktube.com/api/v1/video-channels/${TIKTUBE_CHANNEL}/videos?sort=-publishedAt&count=15`;

const IS_PROD = process.env.NODE_ENV === "production";

/**
 * Override URL sumber HANYA untuk uji kegagalan di mesin developer. Diabaikan
 * total di production, jadi tidak ada konfigurasi baru di server.
 */
const YOUTUBE_FEED_URL = (!IS_PROD && process.env.MIKROTIK_VIDEOS_TEST_YOUTUBE_URL) || PROD_YOUTUBE_FEED_URL;
const TIKTUBE_API_URL = (!IS_PROD && process.env.MIKROTIK_VIDEOS_TEST_TIKTUBE_URL) || PROD_TIKTUBE_API_URL;

const TTL_MS = 7 * 24 * 60 * 60 * 1000;
const RETRY_MS = 10 * 60 * 1000;
const SOURCE_TIMEOUT_MS = 8000;
const SHORTS_CHECK_TIMEOUT_MS = 5000;
const MAX_ITEMS = 10;
const MAX_DESCRIPTION_CHARS = 1000;
const SHORTS_CACHE_MAX = 500;

/**
 * Feed RSS YouTube sedang sering membalas 404/500 sesaat untuk channel yang
 * sah (teramati saat pengembangan: ±1 dari 10 request yang berhasil). Karena
 * itu dicoba beberapa kali di dalam satu jendela timeout yang sama.
 */
const YOUTUBE_MAX_ATTEMPTS = 6;
/** Jeda bertambah: 300, 600, 900, … ms — total ±4,5 dtk, masih di dalam jendela 8 dtk. */
const YOUTUBE_RETRY_DELAY_MS = 300;

const USER_AGENT = "Mozilla/5.0 (compatible; dcsindo-video-feed/1.0; +https://dcsindo.com)";

export type MikrotikVideoSource = "youtube" | "tiktube";

export type MikrotikVideo = {
  id: string;
  source: MikrotikVideoSource;
  title: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
  watchUrl: string;
  publishedAt: string;
};

// ─── TEKS POLOS ───────────────────────────────────────────────

function decodeEntities(s: string): string {
  return s.replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (m, e: string) => {
    const k = e.toLowerCase();
    if (k === "amp") return "&";
    if (k === "lt") return "<";
    if (k === "gt") return ">";
    if (k === "quot") return '"';
    if (k === "apos") return "'";
    if (k === "nbsp") return " ";
    const code = k.startsWith("#x") ? parseInt(k.slice(2), 16) : parseInt(k.slice(1), 10);
    return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : m;
  });
}

/**
 * Buang markup, bukan isi: tag HTML, gambar/tautan markdown (teksnya
 * dipertahankan), penanda tebal/miring berpasangan, kode, heading, kutipan.
 * `*` / `_` tunggal sengaja tidak disentuh — terlalu sering jadi isi teks
 * (mis. nama kanal mikrotik_news).
 */
export function toPlainText(input: string): string {
  let s = decodeEntities(input.replace(/<[^>]*>/g, " "));
  s = s
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__|~~)(.+?)\1/g, "$2")
    .replace(/`{1,3}([^`]*)`{1,3}/g, "$1")
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/^\s{0,3}>\s?/gm, "");
  return s.replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}

// Lewat konstruktor: tsconfig tidak menyetel `target`, jadi literal ber-flag `u` ditolak tsc.
const NON_WORD_RE = new RegExp("[^\\p{L}\\p{N}\\s]", "gu");

/** Kunci de-duplikasi lintas platform. */
export function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(NON_WORD_RE, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isValidDate(s: string): boolean {
  return s !== "" && Number.isFinite(Date.parse(s));
}

// ─── YOUTUBE ──────────────────────────────────────────────────

type YoutubeEntry = { videoId: string; title: string; description: string; publishedAt: string; linkIsShort: boolean };

function firstTag(block: string, tag: string): string | null {
  const m = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`));
  if (!m) return null;
  const raw = m[1].replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1");
  return decodeEntities(raw);
}

/** Parser Atom minimal — hanya <entry> dan elemen yang dipakai. */
export function parseYoutubeFeed(xml: string): YoutubeEntry[] {
  const out: YoutubeEntry[] = [];
  const entryRe = /<entry>([\s\S]*?)<\/entry>/g;
  let m: RegExpExecArray | null;
  while ((m = entryRe.exec(xml)) !== null) {
    const block = m[1];
    const videoId = (firstTag(block, "yt:videoId") ?? "").trim();
    if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) continue;
    const title = toPlainText(firstTag(block, "title") ?? "");
    const publishedAt = (firstTag(block, "published") ?? "").trim();
    if (!title || !isValidDate(publishedAt)) continue;
    const link = block.match(/<link\s+rel="alternate"\s+href="([^"]*)"/)?.[1] ?? "";
    out.push({
      videoId,
      title,
      description: toPlainText(firstTag(block, "media:description") ?? ""),
      publishedAt,
      linkIsShort: link.includes("/shorts/"),
    });
  }
  return out;
}

/** videoId -> true (Short) / false (video biasa). Hanya hasil pasti yang disimpan. */
const shortsCache = new Map<string, boolean>();

function rememberShort(id: string, isShort: boolean): void {
  if (shortsCache.size >= SHORTS_CACHE_MAX) shortsCache.clear();
  shortsCache.set(id, isShort);
}

/**
 * Short = /shorts/<id> membalas 200; video biasa = 3xx ke /watch. Hasil lain
 * (timeout, halaman consent, error) = tidak pasti -> null, video dikecualikan
 * pada putaran ini dan dicek ulang pada refresh berikutnya.
 */
async function checkIsShort(videoId: string): Promise<boolean | null> {
  const cached = shortsCache.get(videoId);
  if (cached !== undefined) return cached;
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      redirect: "manual",
      headers: { "User-Agent": USER_AGENT },
      signal: AbortSignal.timeout(SHORTS_CHECK_TIMEOUT_MS),
    });
    await res.body?.cancel();
    let result: boolean | null = null;
    if (res.status === 200) result = true;
    else if (res.status >= 300 && res.status < 400 && /\/watch\?v=/.test(res.headers.get("location") ?? "")) result = false;
    if (result !== null) rememberShort(videoId, result);
    return result;
  } catch {
    return null;
  }
}

async function fetchYoutubeVideos(): Promise<MikrotikVideo[]> {
  const signal = AbortSignal.timeout(SOURCE_TIMEOUT_MS);
  let xml: string | null = null;
  let lastError = "tanpa percobaan";
  for (let attempt = 0; attempt < YOUTUBE_MAX_ATTEMPTS && xml === null && !signal.aborted; attempt++) {
    // Jeda singkat antar percobaan: 404 dari RSS datang berentetan, jadi 6
    // percobaan beruntun tanpa jeda bisa habis di satu rentetan yang sama.
    if (attempt > 0) await new Promise((r) => setTimeout(r, YOUTUBE_RETRY_DELAY_MS * attempt));
    try {
      const res = await fetch(YOUTUBE_FEED_URL, { headers: { "User-Agent": USER_AGENT }, signal });
      if (res.ok) xml = await res.text();
      else {
        lastError = `HTTP ${res.status}`;
        await res.body?.cancel();
      }
    } catch (e) {
      lastError = (e as Error).message;
    }
  }
  if (xml === null) throw new Error(`YouTube RSS gagal: ${lastError}`);

  const entries = parseYoutubeFeed(xml);
  if (entries.length === 0) throw new Error("YouTube RSS tanpa entry yang valid");

  for (const e of entries) if (e.linkIsShort) rememberShort(e.videoId, true);
  const flags = await Promise.all(entries.map((e) => checkIsShort(e.videoId)));

  return entries
    .filter((_, i) => flags[i] === false)
    .map((e) => ({
      id: `yt:${e.videoId}`,
      source: "youtube" as const,
      title: e.title,
      description: e.description.slice(0, MAX_DESCRIPTION_CHARS),
      thumbnailUrl: `https://i.ytimg.com/vi/${e.videoId}/hqdefault.jpg`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${e.videoId}`,
      watchUrl: `https://www.youtube.com/watch?v=${e.videoId}`,
      publishedAt: new Date(e.publishedAt).toISOString(),
    }));
}

// ─── TIKTUBE (PeerTube) ───────────────────────────────────────

type TiktubeVideo = {
  uuid?: unknown;
  name?: unknown;
  description?: unknown;
  truncatedDescription?: unknown;
  publishedAt?: unknown;
  aspectRatio?: unknown;
  previewPath?: unknown;
  thumbnailPath?: unknown;
};

const TIKTUBE_ORIGIN = "https://tiktube.com";

function tiktubeAsset(path: unknown): string | null {
  return typeof path === "string" && /^\/[A-Za-z0-9/_.-]+$/.test(path) ? TIKTUBE_ORIGIN + path : null;
}

export function mapTiktubeVideos(body: unknown): MikrotikVideo[] {
  const data = (body as { data?: unknown })?.data;
  if (!Array.isArray(data)) throw new Error("Respons TikTube tanpa array data");
  const out: MikrotikVideo[] = [];
  for (const v of data as TiktubeVideo[]) {
    const uuid = typeof v.uuid === "string" ? v.uuid : "";
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(uuid)) continue;
    // Video vertikal dikecualikan; aspectRatio null (belum diketahui) dibiarkan lewat.
    if (typeof v.aspectRatio === "number" && v.aspectRatio < 1) continue;
    const title = typeof v.name === "string" ? toPlainText(v.name) : "";
    const publishedAt = typeof v.publishedAt === "string" ? v.publishedAt : "";
    const thumbnailUrl = tiktubeAsset(v.previewPath) ?? tiktubeAsset(v.thumbnailPath);
    if (!title || !isValidDate(publishedAt) || !thumbnailUrl) continue;
    const rawDesc =
      typeof v.description === "string" ? v.description : typeof v.truncatedDescription === "string" ? v.truncatedDescription : "";
    out.push({
      id: `tt:${uuid}`,
      source: "tiktube",
      title,
      description: toPlainText(rawDesc).slice(0, MAX_DESCRIPTION_CHARS),
      thumbnailUrl,
      embedUrl: `${TIKTUBE_ORIGIN}/videos/embed/${uuid}`,
      watchUrl: `${TIKTUBE_ORIGIN}/videos/watch/${uuid}`,
      publishedAt: new Date(publishedAt).toISOString(),
    });
  }
  return out;
}

async function fetchTiktubeVideos(): Promise<MikrotikVideo[]> {
  const res = await fetch(TIKTUBE_API_URL, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    signal: AbortSignal.timeout(SOURCE_TIMEOUT_MS),
  });
  if (!res.ok) {
    await res.body?.cancel();
    throw new Error(`TikTube API HTTP ${res.status}`);
  }
  return mapTiktubeVideos(await res.json());
}

// ─── GABUNG ───────────────────────────────────────────────────

/**
 * YouTube diproses lebih dulu, jadi bila judul ternormalisasi sama, versi
 * YouTube yang bertahan. Lalu urut terbaru dulu dan ambil 10.
 */
export function mergeVideos(youtube: MikrotikVideo[], tiktube: MikrotikVideo[]): MikrotikVideo[] {
  const seen = new Set<string>();
  const merged: MikrotikVideo[] = [];
  for (const v of [...youtube, ...tiktube]) {
    const key = normalizeTitle(v.title);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    merged.push(v);
  }
  return merged
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, MAX_ITEMS);
}

// ─── CACHE ────────────────────────────────────────────────────

type SourceFetcher = () => Promise<MikrotikVideo[]>;

export function createMikrotikVideoFeed(opts: {
  fetchYoutube: SourceFetcher;
  fetchTiktube: SourceFetcher;
  now?: () => number;
}) {
  const now = opts.now ?? Date.now;
  let youtube: MikrotikVideo[] | null = null;
  let tiktube: MikrotikVideo[] | null = null;
  let items: MikrotikVideo[] | null = null;
  let nextRefreshAt = 0;
  let inflight: Promise<void> | null = null;

  async function refresh(): Promise<void> {
    const [yt, tt] = await Promise.allSettled([opts.fetchYoutube(), opts.fetchTiktube()]);
    if (yt.status === "fulfilled") youtube = yt.value;
    else console.warn(`[mikrotik-videos] YouTube gagal, memakai data terakhir: ${(yt.reason as Error)?.message}`);
    if (tt.status === "fulfilled") tiktube = tt.value;
    else console.warn(`[mikrotik-videos] TikTube gagal, memakai data terakhir: ${(tt.reason as Error)?.message}`);

    if (youtube !== null || tiktube !== null) items = mergeVideos(youtube ?? [], tiktube ?? []);
    const allOk = yt.status === "fulfilled" && tt.status === "fulfilled";
    nextRefreshAt = now() + (allOk ? TTL_MS : RETRY_MS);
  }

  function startRefresh(): Promise<void> {
    if (!inflight) {
      inflight = refresh()
        .catch((e) => console.warn(`[mikrotik-videos] Refresh gagal: ${(e as Error).message}`))
        .finally(() => {
          inflight = null;
        });
    }
    return inflight;
  }

  return {
    async getVideos(): Promise<MikrotikVideo[]> {
      if (now() >= nextRefreshAt) {
        const p = startRefresh();
        // Belum pernah ada data: tunggu refresh pertama. Sudah ada: layani yang lama.
        if (items === null) await p;
      }
      return items ?? [];
    },
  };
}

const feed = createMikrotikVideoFeed({ fetchYoutube: fetchYoutubeVideos, fetchTiktube: fetchTiktubeVideos });

export function getMikrotikVideos(): Promise<MikrotikVideo[]> {
  return feed.getVideos();
}
