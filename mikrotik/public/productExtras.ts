export type MikrotikProductExtras = {
  videoUrl?: string;
  videoTitle?: string;
  videoDescription?: string;
  specifications?: Record<string, string>;
};

// Dummy extras untuk testing UI.
// Nanti kalau backend sudah menyimpan video/specs di DB, komponen detail akan otomatis pakai data dari API.
export const MIKROTIK_PRODUCT_EXTRAS: Record<number, MikrotikProductExtras> = {
  1: {
    videoUrl: "https://www.youtube.com/watch?v=9HaU8NjH7bI",
    videoTitle: "Judul Video Product",
    videoDescription:
      "Deskripsi singkat video product (dummy). Kamu bisa ganti ini di `mikrotik/public/productExtras.ts`.",
    specifications: {
      "CPU": "Dual-core (dummy)",
      "RAM": "256MB (dummy)",
      "Ports": "5x Gigabit (dummy)",
      "OS": "RouterOS (dummy)",
    },
  },
};

