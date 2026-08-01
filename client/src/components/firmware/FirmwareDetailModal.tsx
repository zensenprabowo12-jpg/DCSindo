import { useMemo } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FirmwareDownloadButton from "./FirmwareDownloadButton";
import {
  formatBytes,
  fileExtLabel,
  type PublicFirmware,
  type FirmwareBrandMeta,
} from "@/lib/firmwarePublic";
import {
  AlertTriangle,
  ListOrdered,
  Info,
  FileText,
  Cpu,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Teks cadangan (fallback). DUMMY_INSTALL_STEPS & DUMMY_DISCLAIMER     */
/* dipakai HANYA bila konten dari admin kosong/belum termuat/gagal      */
/* diambil — lihat prop `installGuide` & `disclaimer`.                  */
/* DUMMY_NOTES masih murni placeholder (belum ada sumber datanya).      */
/* ------------------------------------------------------------------ */

const DUMMY_NOTES =
  "Belum ada catatan rilis untuk firmware ini. Catatan resmi akan ditampilkan di sini setelah tersedia.";

const DUMMY_INSTALL_STEPS = [
  "Backup konfigurasi perangkat Anda terlebih dahulu sebelum melakukan proses flashing.",
  "Unduh file firmware di halaman ini, lalu verifikasi checksum-nya agar file tidak korup.",
  "Masuk ke antarmuka manajemen perangkat (web UI / Winbox / console) dan unggah file firmware.",
  "Jalankan proses upgrade, tunggu hingga selesai, lalu reboot dan pastikan versi firmware sudah berubah.",
];

const DUMMY_DISCLAIMER =
  "Proses flashing firmware berisiko. Jangan mematikan atau mencabut daya perangkat selama proses berlangsung — hal ini dapat menyebabkan perangkat tidak dapat digunakan (brick). Downgrade ke versi lama tidak selalu didukung dan dapat menghapus konfigurasi. Pastikan firmware yang dipilih sesuai dengan model perangkat Anda. Kerusakan akibat kesalahan proses upgrade berada di luar tanggung jawab kami.";

/* ------------------------- akhir blok dummy ------------------------ */

type Props = {
  item: PublicFirmware;
  meta: FirmwareBrandMeta;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Posisi tombol "Detail" saat diklik — dipakai sebagai titik asal animasi. */
  originRect?: DOMRect | null;
  /** Konten global dari admin (GET /api/firmware-popup/public). Kosong → pakai teks cadangan. */
  installGuide?: string;
  disclaimer?: string;
};

/** Skala awal/akhir modal saat tumbuh dari tombol. */
const COLLAPSED_SCALE = 0.4;

const ENTER_TRANSITION = { type: "spring", visualDuration: 0.2, bounce: 0.15 } as const;
const EXIT_TRANSITION = { duration: 0.15, ease: "easeIn" } as const;
const OVERLAY_TRANSITION = { duration: 0.2, ease: "easeOut" } as const;
const OVERLAY_EXIT_TRANSITION = { duration: 0.15, ease: "easeIn" } as const;
const REDUCED_TRANSITION = { duration: 0.12, ease: "linear" } as const;

function InfoRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
      <span className="shrink-0 sm:w-28 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
        {label}
      </span>
      <span className={`min-w-0 text-sm break-all ${mono ? "font-mono" : ""}`}>{value}</span>
    </div>
  );
}

function SectionTitle({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-wide">
      <span className="text-muted-foreground">{icon}</span>
      {children}
    </h4>
  );
}

export default function FirmwareDetailModal({
  item,
  meta,
  open,
  onOpenChange,
  originRect,
  installGuide = "",
  disclaimer = "",
}: Props) {
  const isExternal = item.source_type === "external";
  const ext = fileExtLabel(item);

  const reduceMotion = useReducedMotion();

  // Satu langkah per baris; baris kosong dibuang agar tidak jadi nomor kosong.
  // Nol langkah (belum termuat / gagal / dikosongkan admin) → teks cadangan.
  const steps = useMemo(() => {
    const parsed = installGuide
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    return parsed.length ? parsed : DUMMY_INSTALL_STEPS;
  }, [installGuide]);

  // Paragraf dipisah baris kosong.
  const disclaimerParagraphs = useMemo(() => {
    const parsed = disclaimer
      .split(/\r?\n\s*\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    return parsed.length ? parsed : [DUMMY_DISCLAIMER];
  }, [disclaimer]);

  // Modal selalu berada di tengah viewport, jadi titik "50% 50%" miliknya sama
  // dengan titik tengah layar. Dengan menggeser origin sebesar selisih antara
  // pusat tombol dan pusat layar, transform-origin jatuh tepat di tombol —
  // tanpa perlu tahu lebar/tinggi modal sama sekali.
  const transformOrigin = useMemo(() => {
    if (!open || !originRect || reduceMotion || typeof window === "undefined") return undefined;
    const dx = originRect.left + originRect.width / 2 - window.innerWidth / 2;
    const dy = originRect.top + originRect.height / 2 - window.innerHeight / 2;
    return `calc(50% + ${Math.round(dx)}px) calc(50% + ${Math.round(dy)}px)`;
  }, [open, originRect, reduceMotion]);

  // Tanpa origin tombol (atau saat reduced motion) modal cukup fade di tengah.
  const collapsed = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, scale: originRect ? COLLAPSED_SCALE : 0.95 };
  const expanded = reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 };

  const chip =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary/70 text-muted-foreground";

  return (
    // Root tetap terpasang; AnimatePresence + forceMount yang menahan unmount
    // sampai animasi keluar selesai. Esc, klik overlay, focus trap, dan
    // pengembalian fokus tetap ditangani Radix seperti sebelumnya.
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-black/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: reduceMotion ? REDUCED_TRANSITION : OVERLAY_EXIT_TRANSITION,
                }}
                transition={reduceMotion ? REDUCED_TRANSITION : OVERLAY_TRANSITION}
              />
            </DialogPrimitive.Overlay>

            {/* Wrapper hanya untuk menengahkan — pointer-events-none agar klik
                tetap sampai ke overlay di bawahnya. */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <DialogPrimitive.Content asChild forceMount>
                <motion.div
                  style={{ transformOrigin }}
                  initial={collapsed}
                  animate={expanded}
                  exit={{
                    ...collapsed,
                    transition: reduceMotion ? REDUCED_TRANSITION : EXIT_TRANSITION,
                  }}
                  transition={reduceMotion ? REDUCED_TRANSITION : ENTER_TRANSITION}
                  className="pointer-events-auto relative grid w-full max-w-xl max-h-[85vh] gap-4 overflow-y-auto rounded-lg border bg-background p-6 shadow-lg"
                >
                  <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Tutup</span>
                  </DialogPrimitive.Close>

                  <DialogHeader className="pr-6">
                    <DialogTitle className="text-xl font-black leading-snug tracking-tight">
                      {item.product_name}
                    </DialogTitle>
                    {item.model_sku && (
                      <p className="flex items-center gap-1.5 text-sm font-mono text-muted-foreground">
                        <Cpu className="w-3.5 h-3.5 shrink-0" />
                        {item.model_sku}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className={`${chip} ${meta.text}`}>{meta.name}</span>
                      <span className={chip}>{item.category}</span>
                      {ext && <span className={chip}>{ext.toUpperCase()}</span>}
                    </div>
                  </DialogHeader>

                  <div className="space-y-6">
                    {/* --- Informasi Firmware: sebagian data asli, sebagian dummy --- */}
                    <section className="space-y-2.5">
                      <SectionTitle icon={<Info className="w-4 h-4" />}>
                        Informasi Firmware
                      </SectionTitle>
                      <div className="rounded-xl border border-border bg-secondary/30 p-4">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                          {/* kolom kiri */}
                          <div className="min-w-0 space-y-2">
                            <InfoRow label="Versi" value={item.version || "—"} />
                            <InfoRow label="Tanggal rilis" value={item.release_date || "—"} />
                            <InfoRow label="Ukuran file" value={formatBytes(item.file_size)} />
                          </div>
                          {/* kolom kanan */}
                          <div className="min-w-0 space-y-2">
                            <InfoRow label="Tipe file" value={ext ? ext.toUpperCase() : "—"} />
                            <InfoRow label="Sumber" value={isExternal ? "Link eksternal" : "Upload"} />
                            {item.checksum && (
                              <InfoRow label="Checksum" value={item.checksum} mono />
                            )}
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* --- Catatan: seksi tersendiri, teks bebas yang bisa panjang --- */}
                    <section className="space-y-2.5">
                      <SectionTitle icon={<FileText className="w-4 h-4" />}>
                        Catatan
                      </SectionTitle>
                      {/* TODO(dummy-content): fallback catatan bila item.notes kosong */}
                      {/* Sengaja tanpa max-height: modal sudah scrollable, jadi catatan
                          panjang cukup mengalir tanpa scrollbar bersarang. */}
                      <div className="rounded-xl border border-border bg-secondary/30 p-4">
                        <p className="min-w-0 text-sm leading-relaxed text-muted-foreground whitespace-pre-line break-words">
                          {item.notes || DUMMY_NOTES}
                        </p>
                      </div>
                    </section>

                    {/* --- Panduan Instalasi: konten global admin, fallback ke teks cadangan --- */}
                    <section className="space-y-2.5">
                      <SectionTitle icon={<ListOrdered className="w-4 h-4" />}>
                        Panduan Instalasi
                      </SectionTitle>
                      <ol className="space-y-2.5 rounded-xl border border-border bg-secondary/30 p-4">
                        {steps.map((step, i) => (
                          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                            <span
                              className={`shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold text-white ${meta.dot}`}
                            >
                              {i + 1}
                            </span>
                            <span className="min-w-0">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </section>

                    {/* --- Disclaimer: konten global admin, fallback ke teks cadangan --- */}
                    <section className="space-y-2.5">
                      <SectionTitle icon={<AlertTriangle className="w-4 h-4" />}>
                        Peringatan &amp; Disclaimer
                      </SectionTitle>
                      <div className="space-y-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
                        {disclaimerParagraphs.map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-sm leading-relaxed text-amber-700 dark:text-amber-300"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  </div>

                  {/* --- Aksi: tombol download sama persis dengan tombol di kartu --- */}
                  <div className="flex flex-col-reverse sm:flex-row sm:justify-end items-stretch sm:items-center gap-2 pt-2 border-t border-border">
                    <button
                      type="button"
                      onClick={() => onOpenChange(false)}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-bold border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150"
                    >
                      Tutup
                    </button>
                    <FirmwareDownloadButton item={item} meta={meta} />
                  </div>
                </motion.div>
              </DialogPrimitive.Content>
            </div>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
