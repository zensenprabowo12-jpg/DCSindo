export type MikrotikProductExtras = {
  videoUrl?: string;
  videoTitle?: string;
  videoDescription?: string;
  specifications?: { title: string; items: { label: string; value: string }[] };
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
      title: "SPECIFICATIONS",
      items: [
        { label: "CPU", value: "Dual-core (dummy)" },
        { label: "RAM", value: "256MB (dummy)" },
        { label: "Ports", value: "5x Gigabit (dummy)" },
        { label: "OS", value: "RouterOS (dummy)" },
      ],
    },
  },
};

