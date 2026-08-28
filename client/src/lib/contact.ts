export type WhatsAppNumber = {
  /** Nomor internasional tanpa "+", dipakai apa adanya di URL wa.me. */
  raw: string;
  /** Format tampil untuk UI. */
  display: string;
};

/**
 * Sumber kebenaran tunggal untuk nomor WhatsApp DCS.
 * Kedua nomor punya peran yang sama, jadi boleh dipilih acak 50:50.
 * Menambah/mengganti nomor cukup di array ini.
 */
export const WHATSAPP_NUMBERS: readonly WhatsAppNumber[] = [
  { raw: "628153058666", display: "+62 815-3058-666" },
  { raw: "6281287801925", display: "+62 812-8780-1925" },
];

/** Pilih satu nomor secara acak merata. */
export function pickWhatsAppNumber(): WhatsAppNumber {
  return WHATSAPP_NUMBERS[Math.floor(Math.random() * WHATSAPP_NUMBERS.length)];
}

/**
 * Rakit URL wa.me dengan nomor acak dan pesan yang sudah di-encode.
 * Pesan selalu lewat encodeURIComponent, jangan pernah tulis %20 manual.
 */
export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${pickWhatsAppNumber().raw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Dipertahankan untuk pemakai lama (FiberHomePage, FiberHomeProductDetail,
// TrainingDetail). Selalu menunjuk nomor pertama, tanpa pengacakan.
export const DCS_WHATSAPP_PRIMARY = `https://wa.me/${WHATSAPP_NUMBERS[0].raw}`;
export const DCS_WHATSAPP_SECONDARY = `https://wa.me/${WHATSAPP_NUMBERS[1].raw}`;

export const DCS_EMAIL = "mailto:info@dcsindo.com";
export const DCS_EMAIL_RAW = "info@dcsindo.com";
