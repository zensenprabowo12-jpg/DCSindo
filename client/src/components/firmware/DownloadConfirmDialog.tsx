import { useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Download, ExternalLink, AlertTriangle } from "lucide-react";
import type { PublicFirmware, FirmwareBrandMeta } from "@/lib/firmwarePublic";

/* ------------------------------------------------------------------ */
/* Teks konfirmasi — sama untuk semua firmware, sengaja hardcode.       */
/* Sengaja pendek: disclaimer panjang sudah ada di popup detail.        */
/* ------------------------------------------------------------------ */

const CONFIRM_TITLE = "Yakin ingin mengunduh firmware ini?";
const CONFIRM_MESSAGE =
  "Pastikan firmware sesuai dengan model perangkat Anda. Firmware yang salah dapat merusak perangkat (brick).";

/* ------------------------------------------------------------------ */
/* Sumber tunggal aksi download — dipakai tombol pemicu (kartu & popup  */
/* detail) sekaligus tombol "Ya, Unduh" di dialog ini. URL, atribut     */
/* download/target/rel, label, dan ikon hanya didefinisikan di sini.    */
/* ------------------------------------------------------------------ */

export type DownloadAction = {
  state: "unavailable" | "external" | "upload";
  label: string;
  Icon: typeof Download | null;
  /** Atribut anchor persis seperti tombol lama. Null saat "unavailable". */
  anchorProps: {
    href: string;
    download?: boolean;
    target?: string;
    rel?: string;
  } | null;
};

export function resolveDownloadAction(item: PublicFirmware): DownloadAction {
  const href = item.source_type === "upload" ? item.file_path : item.external_url;
  if (!href) {
    return { state: "unavailable", label: "Tidak tersedia", Icon: null, anchorProps: null };
  }
  if (item.source_type === "external") {
    return {
      state: "external",
      label: "Kunjungi",
      Icon: ExternalLink,
      anchorProps: { href, target: "_blank", rel: "noopener noreferrer" },
    };
  }
  return {
    state: "upload",
    label: "Download",
    Icon: Download,
    anchorProps: { href, download: true },
  };
}

/** Bentuk dasar tombol aksi — identik untuk kartu maupun popup detail. */
export const ACTION_CLASS =
  "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors duration-150";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: PublicFirmware;
  meta: FirmwareBrandMeta;
};

export default function DownloadConfirmDialog({ open, onOpenChange, item, meta }: Props) {
  const confirmRef = useRef<HTMLAnchorElement>(null);
  const action = resolveDownloadAction(item);

  // Tanpa target unduhan tidak ada yang perlu dikonfirmasi.
  if (!action.anchorProps) return null;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        {/* Lebih terang dari overlay popup detail (bg-black/80) supaya saat
            ditumpuk di atasnya layar tidak menjadi hitam pekat. */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          // Fokus awal langsung ke aksi utama → Enter = konfirmasi.
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            confirmRef.current?.focus();
          }}
          className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-sm translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg motion-safe:duration-200 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95"
        >
          <DialogHeader className="flex-row items-start gap-3 space-y-0 text-left">
            <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </span>
            <div className="min-w-0 space-y-1.5">
              <DialogTitle className="text-base font-black leading-snug tracking-tight">
                {CONFIRM_TITLE}
              </DialogTitle>
              <DialogDescription className="leading-relaxed">{CONFIRM_MESSAGE}</DialogDescription>
            </div>
          </DialogHeader>

          <DialogFooter className="gap-2 sm:gap-0">
            <DialogPrimitive.Close
              className={`${ACTION_CLASS} border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-secondary`}
            >
              Batal
            </DialogPrimitive.Close>
            {/* Aksi asli: anchor dengan href/atribut yang sama persis dengan
                tombol lama — bukan klik sintetis, jadi target="_blank" tidak
                diblokir popup blocker. */}
            <a
              ref={confirmRef}
              {...action.anchorProps}
              onClick={() => onOpenChange(false)}
              className={`${ACTION_CLASS} px-5 py-2.5 text-white ${meta.btn}`}
            >
              <Download className="w-4 h-4" />
              Ya, Unduh
            </a>
          </DialogFooter>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
