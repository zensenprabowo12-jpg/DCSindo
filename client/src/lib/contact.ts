/**
 * Sumber kebenaran tunggal untuk nomor WhatsApp sales DCS.
 * Semua nomor punya peran yang sama, jadi dipilih acak merata (masing-masing
 * 1/N). Menambah/mengganti nomor cukup di array ini.
 * Nomor internasional tanpa "+", dipakai apa adanya di URL wa.me.
 */
export const WHATSAPP_NUMBERS: readonly string[] = [
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

/** Pilih satu nomor secara acak merata. */
export function pickWhatsAppNumber(): string {
  return WHATSAPP_NUMBERS[Math.floor(Math.random() * WHATSAPP_NUMBERS.length)];
}

/**
 * Rakit URL wa.me dengan nomor acak dan pesan yang sudah di-encode.
 * Pesan selalu lewat encodeURIComponent, jangan pernah tulis %20 manual.
 */
export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${pickWhatsAppNumber()}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

type AnchorEvent = { currentTarget: { href: string } };
type AnchorKeyEvent = AnchorEvent & { key: string };

/**
 * Props event untuk <a> WhatsApp: nomor diundi ulang tepat sebelum browser
 * memakai tautan — klik kiri (termasuk Ctrl/Shift), klik tengah, klik kanan
 * (buka di tab baru / salin alamat tautan), dan Enter dari keyboard.
 * Hanya mengganti href; perilaku tautan normal tidak pernah dicegah.
 * href awal (dari buildWhatsAppUrl saat render) tetap jadi fallback tanpa JS.
 */
export function whatsAppRerollProps(message?: string) {
  const reroll = (e: AnchorEvent) => {
    e.currentTarget.href = buildWhatsAppUrl(message);
  };
  return {
    onMouseDown: reroll,
    onClick: reroll,
    onAuxClick: reroll,
    onContextMenu: reroll,
    onKeyDown: (e: AnchorKeyEvent) => {
      if (e.key === "Enter") reroll(e);
    },
  };
}

export const DCS_EMAIL = "mailto:info@dcsindo.com";
export const DCS_EMAIL_RAW = "info@dcsindo.com";
