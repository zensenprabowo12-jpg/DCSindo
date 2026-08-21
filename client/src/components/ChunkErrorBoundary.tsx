import { Component, type ReactNode } from "react";

/**
 * M-06 Tahap 2 — penanganan chunk kedaluwarsa.
 *
 * Sejak route admin dipecah dengan React.lazy, bundel tidak lagi tunggal.
 * Konsekuensinya ada mode kegagalan BARU yang sebelumnya mustahil terjadi:
 * tab yang dibiarkan terbuka melintasi deploy masih memegang hash chunk dari
 * build lama, sementara `script/build.ts` menghapus `dist` seluruhnya
 * (dan `emptyOutDir: true` di vite.config) sehingga file lamanya benar-benar
 * lenyap — tidak ada masa tenggang.
 *
 * Saat pengguna menekan menu admin di tab basi itu, browser meminta
 * /assets/Dashboard-HASHLAMA.js dan menerima 404. Yang membuat kegagalannya
 * bersih (bukan HTML berstatus 200 yang gagal diparse sebagai modul) adalah
 * `isStaticAssetPath` di server: ekstensi "js" ada di daftar putihnya, jadi
 * aset hilang dijawab 404 teks. Perilaku itu prasyarat berkas ini bekerja.
 */

/**
 * Pesan galat pemuatan chunk berbeda-beda antar browser; keempat pola ini
 * mencakup Chrome/Edge, Firefox, dan Safari.
 *
 * Sengaja SEMPIT. Boundary ini hanya boleh menangkap galat jaringan modul —
 * bug render asli di halaman admin harus tetap meledak seperti biasa, bukan
 * menyamar jadi "silakan refresh" yang menyesatkan saat debugging.
 */
const CHUNK_ERROR_PATTERN =
  /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed|Unable to preload CSS/i;

/**
 * Penanda satu-kali per tab. Tanpa ini, chunk yang hilang karena sebab yang
 * bertahan melewati reload (deploy gagal, propagasi CDN belum selesai) akan
 * memicu reload → gagal → reload tanpa henti. Loop reload jauh lebih buruk
 * daripada galat aslinya, jadi penjagaan ini wajib.
 */
const RELOAD_FLAG = "reloaded_for_chunk_error";

export function isChunkLoadError(error: unknown): boolean {
  if (!error) return false;
  const message = error instanceof Error ? error.message : String(error);
  return CHUNK_ERROR_PATTERN.test(message);
}

/**
 * Reload otomatis, maksimal sekali per sesi tab.
 *
 * @returns true bila reload dijalankan (pemanggil tidak perlu merender apa pun
 *          lagi), false bila jatah sudah terpakai atau sessionStorage diblokir
 *          — pada kedua kasus itu pengguna dapat tombol refresh manual.
 */
function tryAutoReloadOnce(): boolean {
  try {
    if (sessionStorage.getItem(RELOAD_FLAG) === "1") return false;
    sessionStorage.setItem(RELOAD_FLAG, "1");
  } catch {
    // Mode privat/storage dipartisi: lebih baik tidak pernah auto-reload
    // daripada auto-reload tanpa penjagaan yang bisa berputar.
    return false;
  }
  window.location.reload();
  return true;
}

/**
 * Layar pemberitahuan. Nadanya sengaja informatif, bukan seperti pesan error:
 * dari sudut pandang pengguna memang tidak ada yang rusak — aplikasinya baru
 * saja diperbarui.
 */
function ChunkExpiredNotice() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="max-w-sm w-full text-center">
        <h1 className="text-zinc-100 text-lg font-semibold mb-2">
          Aplikasi telah diperbarui
        </h1>
        <p className="text-zinc-400 text-sm mb-6">
          Aplikasi telah diperbarui, silakan refresh halaman untuk memuat versi
          terbaru.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="w-full h-10 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          Refresh Sekarang
        </button>
      </div>
    </div>
  );
}

type Props = { children: ReactNode };
type State = { error: unknown };

export default class ChunkErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: unknown): State {
    return { error };
  }

  componentDidMount() {
    window.addEventListener("vite:preloadError", this.handlePreloadError);
  }

  componentWillUnmount() {
    window.removeEventListener("vite:preloadError", this.handlePreloadError);
  }

  /**
   * Lapis pertama. Vite membungkus setiap import() dengan helper `__vitePreload`
   * yang, bila prefetch dependensinya gagal, mengirim event `vite:preloadError`
   * lalu MELEMPAR ulang galatnya kalau event tidak di-preventDefault — muncul
   * sebagai unhandled error di konsol di luar jangkauan boundary React.
   *
   * preventDefault() meredam lemparan itu. import() aslinya tetap berjalan dan
   * tetap gagal, jadi Promise-nya tetap ditolak dan React.lazy tetap
   * mengirimkannya ke componentDidCatch di bawah — dua lapis, satu pesan.
   */
  private handlePreloadError = (event: Event) => {
    event.preventDefault();
    tryAutoReloadOnce();
  };

  /**
   * Reload dijalankan DI SINI, bukan di render(). render() harus bebas efek
   * samping; componentDidCatch adalah lifecycle yang memang disediakan untuk
   * reaksi terhadap galat. Kalau jatah reload sudah terpakai, tidak terjadi
   * apa-apa dan render() di bawah menampilkan tombol refresh manual.
   */
  componentDidCatch(error: unknown) {
    if (isChunkLoadError(error)) tryAutoReloadOnce();
  }

  render() {
    const { error } = this.state;
    if (error) {
      // Lemparkan ulang galat yang BUKAN soal chunk. Melempar di dalam render
      // milik boundary sendiri membuat galatnya naik ke atas alih-alih
      // tertelan di sini, sehingga bug render admin tetap terlihat apa adanya.
      if (!isChunkLoadError(error)) throw error;
      return <ChunkExpiredNotice />;
    }
    return this.props.children;
  }
}
