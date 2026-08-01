import { useState } from "react";
import DownloadConfirmDialog, {
  resolveDownloadAction,
  ACTION_CLASS,
} from "./DownloadConfirmDialog";
import type { PublicFirmware, FirmwareBrandMeta } from "@/lib/firmwarePublic";

type Props = {
  item: PublicFirmware;
  meta: FirmwareBrandMeta;
};

/**
 * Tombol download firmware — dipakai di kartu maupun di popup detail.
 * Tiga keadaannya (upload / external / tidak tersedia) berasal dari
 * resolveDownloadAction, jadi tidak ada logika yang digandakan.
 * Klik tidak langsung mengunduh: dialog konfirmasi disisipkan lebih dulu.
 */
export default function FirmwareDownloadButton({ item, meta }: Props) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const action = resolveDownloadAction(item);

  // Tanpa file/URL: tetap mati total, tidak memunculkan konfirmasi apa pun.
  if (!action.anchorProps) {
    return (
      <span className={`${ACTION_CLASS} bg-secondary text-muted-foreground cursor-not-allowed`}>
        {action.label}
      </span>
    );
  }

  const { Icon } = action;

  return (
    <>
      {/* Tetap anchor (bukan button) agar URL tetap terlihat saat hover dan
          "salin alamat tautan" tetap berfungsi; klik kiri dicegat konfirmasi. */}
      <a
        {...action.anchorProps}
        onClick={(e) => {
          e.preventDefault();
          setConfirmOpen(true);
        }}
        className={`${ACTION_CLASS} text-white ${meta.btn}`}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {action.label}
      </a>

      <DownloadConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        item={item}
        meta={meta}
      />
    </>
  );
}
