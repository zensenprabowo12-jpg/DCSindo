import { useEffect } from "react";

/**
 * Wouter menangkap /mikrotik di SPA; halaman katalog sebenarnya di-render Express (EJS).
 * Paksa full reload agar request mengenai server, bukan router React.
 */
export default function MikrotikServerReload() {
  useEffect(() => {
    window.location.reload();
  }, []);
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-2 text-muted-foreground">
      <p>Memuat katalog MikroTik…</p>
      <p className="text-xs">Jika layar ini tidak berubah, buka ulang tab atau klik tautan dari beranda (bukan navigasi SPA).</p>
    </div>
  );
}
