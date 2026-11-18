// Jalankan: npx tsx --test client/src/lib/contact.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  WHATSAPP_NUMBERS,
  pickWhatsAppNumber,
  buildWhatsAppUrl,
  whatsAppRerollProps,
} from "./contact";

// Daftar final 10 nomor sales (keputusan 2026-11-18), urutan sama dengan contact.ts.
const SPEC = [
  "628153058666", // William Tio
  "6281287801925", // Wisconsin Tio
  "628139997795", // Bima
  "6281290554652", // Clara Regina
  "6281250391962", // Monica Setyo
  "628129652188", // Renault Sim
  "6281931311818", // Saputri
  "6287870630888", // Vera
  "6281349324931", // Wiwi
  "6281219231588", // Toto
];

const numberOf = (url: string) => new URL(url).pathname.slice(1);

test("tepat 10 nomor, sesuai spesifikasi, tanpa duplikat, format 62…", () => {
  assert.equal(WHATSAPP_NUMBERS.length, 10);
  assert.deepEqual([...WHATSAPP_NUMBERS], SPEC);
  assert.equal(new Set(WHATSAPP_NUMBERS).size, 10);
  for (const n of WHATSAPP_NUMBERS) assert.match(n, /^62\d{8,13}$/);
});

test("pickWhatsAppNumber merata (100k undian, tiap nomor 10% ± 1%)", () => {
  const N = 100_000;
  const counts = new Map<string, number>();
  for (let i = 0; i < N; i++) {
    const n = pickWhatsAppNumber();
    counts.set(n, (counts.get(n) ?? 0) + 1);
  }
  assert.equal(counts.size, 10);
  counts.forEach((c, n) => {
    const share = c / N;
    assert.ok(share > 0.09 && share < 0.11, `${n}: ${(share * 100).toFixed(2)}%`);
  });
});

test("buildWhatsAppUrl: wa.me + pesan di-encode", () => {
  const msg = `Hello DCS, I am interested in the V-SOL "V1600D" (SKU: A&B #1)?`;
  const url = buildWhatsAppUrl(msg);
  assert.match(url, /^https:\/\/wa\.me\/62\d{8,13}\?text=/);
  assert.ok(url.endsWith(`?text=${encodeURIComponent(msg)}`));
  assert.equal(new URL(url).searchParams.get("text"), msg);
  assert.ok(WHATSAPP_NUMBERS.includes(numberOf(url)));
  // Tanpa pesan: tidak ada ?text=
  assert.match(buildWhatsAppUrl(), /^https:\/\/wa\.me\/62\d{8,13}$/);
});

test("whatsAppRerollProps mengundi ulang href di tiap event", () => {
  const msg = "Hello DCS, I would like to ask about your products.";
  const props = whatsAppRerollProps(msg);
  const el = { href: "https://wa.me/stale" };
  const handlers = [
    ["mousedown", () => props.onMouseDown({ currentTarget: el })],
    ["click", () => props.onClick({ currentTarget: el })],
    ["auxclick", () => props.onAuxClick({ currentTarget: el })],
    ["contextmenu", () => props.onContextMenu({ currentTarget: el })],
    ["keydown Enter", () => props.onKeyDown({ currentTarget: el, key: "Enter" })],
  ] as const;

  for (const [name, fire] of handlers) {
    const seen = new Set<string>();
    for (let i = 0; i < 200; i++) {
      el.href = "https://wa.me/stale";
      fire();
      assert.notEqual(el.href, "https://wa.me/stale", name);
      assert.equal(new URL(el.href).searchParams.get("text"), msg, name);
      seen.add(numberOf(el.href));
    }
    assert.equal(seen.size, 10, `${name}: semua 10 nomor muncul`);
  }

  // Tombol selain Enter tidak menyentuh href.
  el.href = "https://wa.me/stale";
  props.onKeyDown({ currentTarget: el, key: "Tab" });
  assert.equal(el.href, "https://wa.me/stale");
});
