import {
  Network,
  Router,
  Wifi,
  Cpu,
  Server,
  Package,
  Gauge,
  Cable,
  Zap,
  Antenna,
} from "lucide-react";

/**
 * Ikon kategori firmware — dipakai bersama oleh header seksi (firmware-brand)
 * dan tombol nav kategori, supaya ikon untuk kategori yang sama tidak pernah
 * berbeda di dua tempat.
 *
 * Pemetaan berbasis keluarga perangkat, bukan per nama kategori: GPON dan EPON
 * sengaja memakai ikon yang sama karena keduanya keluarga PON — labelnya yang
 * membedakan. Ikon yang berbeda-beda tanpa makna hanya menambah noise.
 * Aturan yang lebih spesifik diletakkan lebih dulu.
 */
export default function CategoryIcon({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  const c = category.toLowerCase();
  if (c.includes("10g") || c.includes("xgs")) return <Gauge className={className} />;
  if (c.includes("sfp") || c.includes("transceiver") || c.includes("module"))
    return <Cable className={className} />;
  if (c.includes("poe") || c.includes("power") || c.includes("adapter") || c.includes("kit"))
    return <Zap className={className} />;
  if (c.includes("antenna") || c.includes("ptp") || c.includes("ptmp") || c.includes("dish"))
    return <Antenna className={className} />;
  if (c.includes("chas") || c.includes("olt") || c.includes("server"))
    return <Server className={className} />;
  if (c.includes("pon") || c.includes("onu") || c.includes("switch") || c.includes("network"))
    return <Network className={className} />;
  if (c.includes("routeros") || c.includes("router") || c.includes("board"))
    return <Router className={className} />;
  if (
    c.includes("wireless") ||
    c.includes("wifi") ||
    c.includes("air") ||
    c.includes("unifi") ||
    c.includes("wave")
  )
    return <Wifi className={className} />;
  if (c.includes("cpu") || c.includes("soc") || c.includes("chip"))
    return <Cpu className={className} />;
  return <Package className={className} />;
}
