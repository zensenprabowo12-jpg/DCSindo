// Jalankan: npx tsx --test client/src/mikrotik/public/product-detail/videoEmbed.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveEmbed } from "./videoEmbed";

// Salinan logika LAMA ProductVideo.tsx (sebelum dukungan TikTube), dipakai
// sebagai acuan: untuk setiap input YouTube, src baru harus identik.
function legacySrc(urlOrId: string): string | null {
  const raw = urlOrId.trim();
  let id = "";
  if (raw) {
    if (/^[\w-]{6,}$/.test(raw) && !raw.includes("http")) id = raw;
    else {
      try {
        const u = new URL(raw);
        if (u.hostname.includes("youtu.be")) id = u.pathname.replace("/", "");
        else if (u.hostname.includes("youtube.com")) id = u.searchParams.get("v") ?? "";
      } catch {
        /* ignore */
      }
    }
  }
  return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
}

const YT = "https://www.youtube.com/embed/9HaU8NjH7bI?rel=0";
const TT_SHORT = "https://tiktube.com/videos/embed/eUXfWTEWQjQGcWQb7tAsuS";
const TT_UUID = "https://tiktube.com/videos/embed/70ab884a-6643-4286-8dc7-e4fe7e1e8272";

const MATRIX: [string, string | null][] = [
  // YouTube
  ["https://www.youtube.com/watch?v=9HaU8NjH7bI", YT],
  ["https://youtu.be/9HaU8NjH7bI", YT],
  ["https://youtube.com/watch?v=9HaU8NjH7bI&t=30s", YT],
  ["  https://www.youtube.com/watch?v=9HaU8NjH7bI  ", YT],
  ["9HaU8NjH7bI", YT],
  // TikTube
  ["https://tiktube.com/w/eUXfWTEWQjQGcWQb7tAsuS", TT_SHORT],
  ["https://tiktube.com/videos/watch/70ab884a-6643-4286-8dc7-e4fe7e1e8272", TT_UUID],
  ["https://tiktube.com/videos/embed/eUXfWTEWQjQGcWQb7tAsuS", TT_SHORT],
  ["https://tiktube.com/videos/embed/70ab884a-6643-4286-8dc7-e4fe7e1e8272", TT_UUID],
  ["https://www.tiktube.com/w/eUXfWTEWQjQGcWQb7tAsuS", TT_SHORT],
  ["https://tiktube.com/w/eUXfWTEWQjQGcWQb7tAsuS?start=30", TT_SHORT],
  // Harus null
  ["eUXfWTEWQjQGcWQb7tAsuS", null], // shortUUID polos — dulu iframe YouTube rusak
  ["", null],
  ["   ", null],
  ["https://example.com/watch?v=abc", null],
  ["not a url at all", null],
  ["https://tiktube.com/", null],
  ["https://tiktube.com/c/mikrotik_news/videos", null],
  ["https://tiktube.com/w/short", null], // id < 8 char
  ["https://eviltiktube.com/w/eUXfWTEWQjQGcWQb7tAsuS", null],
  ["https://tiktube.com.evil.io/w/eUXfWTEWQjQGcWQb7tAsuS", null],
  ["javascript:alert(1)", null],
];

test("matriks input → src", () => {
  const rows: string[] = [];
  for (const [input, expected] of MATRIX) {
    const got = resolveEmbed(input)?.src ?? null;
    rows.push(`${JSON.stringify(input)} → ${got ?? "null"}`);
    assert.equal(got, expected, `input ${JSON.stringify(input)}`);
  }
  if (process.env.PRINT_MATRIX) console.log("\n" + rows.join("\n"));
});

test("YouTube: src identik dengan logika lama", () => {
  const ytInputs = [
    "https://www.youtube.com/watch?v=9HaU8NjH7bI",
    "https://youtu.be/9HaU8NjH7bI",
    "https://youtube.com/watch?v=9HaU8NjH7bI&t=30s",
    "https://m.youtube.com/watch?v=9HaU8NjH7bI",
    "https://www.youtube.com/watch?feature=share&v=dQw4w9WgXcQ",
    "https://youtu.be/dQw4w9WgXcQ?si=abc",
    "https://www.youtube.com/shorts/dQw4w9WgXcQ", // lama & baru sama-sama null
    "9HaU8NjH7bI",
    "dQw4w9WgXcQ",
  ];
  for (const input of ytInputs) {
    assert.equal(resolveEmbed(input)?.src ?? null, legacySrc(input), `input ${input}`);
  }
});
