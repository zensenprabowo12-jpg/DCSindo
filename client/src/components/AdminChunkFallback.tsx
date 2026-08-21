/**
 * M-06 Tahap 2 — layar tunggu saat chunk route admin sedang diunduh.
 *
 * Markup di bawah SENGAJA identik dengan layar tunggu di
 * `client/src/admin/RequireRole.tsx` (yang tampil selagi cek /api/auth/me
 * berjalan). Setiap halaman admin dibungkus RequireRole, jadi urutan
 * pemuatannya adalah:
 *
 *   Suspense (unduh chunk) → RequireRole (cek sesi) → halaman
 *
 * Dua fase pertama kini terlihat sama persis, sehingga pengguna melihat satu
 * layar tunggu yang menyatu. Spinner atau skeleton justru akan MENAMBAH
 * sambungan visual yang hari ini tidak ada — dan skeleton per halaman akan
 * langsung tertimpa teks "Memuat…" milik RequireRole beberapa milidetik
 * kemudian. Latar zinc-950 juga mencegah kedip putih, karena seluruh panel
 * admin bertema gelap sementara halaman publik terang.
 */
export default function AdminChunkFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100">
      <p className="text-zinc-500 text-sm">Memuat…</p>
    </div>
  );
}
