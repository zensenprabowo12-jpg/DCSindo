import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

/**
 * Saklar "Published" per produk — dipakai bersama oleh semua brand
 * (Stage 1: FiberHome; Stage 2: MikroTik, Ubiquiti, V-SOL). Lihat
 * PROJECT_SUMMARY.md § "Pola Published per produk".
 *
 * Visual 44×24 px, tapi area klik diperluas ke ≥ 44×44 px lewat pseudo-element
 * `before:` (bagian dari <button> Radix, jadi ikut menerima klik).
 */
export function PublishedSwitch({
  checked,
  onCheckedChange,
  disabled,
  label,
  className,
}: {
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
  disabled?: boolean;
  /** Teks untuk pembaca layar, mis. `Published: <nama produk>`. */
  label: string;
  className?: string;
}) {
  return (
    <Switch
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      aria-label={label}
      title={checked ? "Published — visible on the public site" : "Hidden from the public site"}
      className={cn(
        "relative h-6 w-11",
        "before:absolute before:-inset-y-[12px] before:-inset-x-1 before:content-['']",
        "data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-zinc-700",
        "focus-visible:ring-sky-500 focus-visible:ring-offset-zinc-900",
        "[&>span]:h-5 [&>span]:w-5 [&>span]:bg-white [&>span]:data-[state=checked]:translate-x-5",
        className,
      )}
    />
  );
}

/** Badge mencolok (amber, bukan abu-abu) untuk produk yang disembunyikan. */
export function HiddenBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/15",
        "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400",
        className,
      )}
    >
      Hidden
    </span>
  );
}
