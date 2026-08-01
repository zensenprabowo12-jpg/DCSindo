import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import CategoryIcon from "./CategoryIcon";
import type { FirmwareBrandMeta } from "@/lib/firmwarePublic";

/* ------------------------------------------------------------------ */
/* Offset vertikal.                                                     */
/* Header global di layout.tsx: fixed, tinggi h-16 (64px).              */
/* Baris nav ini: py-2.5 + pil 44px + border ≈ 65px.                    */
/* ------------------------------------------------------------------ */

const HEADER_HEIGHT = 64;
/** py-2.5 (20) + tombol min-h-[52px] + border bawah. */
const NAV_HEIGHT = 73;

/** Dipakai sebagai scroll-margin-top tiap seksi kategori supaya judulnya
 *  tidak tertutup header + nav saat di-scroll ke sana. */
export const SECTION_SCROLL_MARGIN = HEADER_HEIGHT + NAV_HEIGHT + 15;

/** Id anchor seksi kategori — satu sumber untuk nav dan seksinya. */
export function categorySectionId(category: string, index = 0): string {
  const slug = category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `kategori-${slug || index}`;
}

type Props = {
  /** Urutan sama persis dengan hasil groupByCategory. */
  categories: string[];
  meta: FirmwareBrandMeta;
};

export default function CategoryNav({ categories, meta }: Props) {
  const [active, setActive] = useState<string>(categories[0] ?? "");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Seksi yang sedang berpotongan dengan pita aktif. Disimpan di ref karena
  // observer hanya melaporkan perubahan, bukan keadaan lengkap.
  const visibleRef = useRef<Set<string>>(new Set());

  // Kunci string: `categories` adalah array baru tiap render (groupByCategory
  // dipanggil saat render), jadi observer akan dibangun ulang terus bila
  // array-nya sendiri dijadikan dependency.
  const key = categories.join("|");

  useEffect(() => {
    const list = key ? key.split("|") : [];
    const sections = list
      .map((cat, i) => document.getElementById(categorySectionId(cat, i)))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const visible = visibleRef.current;
    visible.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const cat = entry.target.getAttribute("data-category");
          if (!cat) continue;
          if (entry.isIntersecting) visible.add(cat);
          else visible.delete(cat);
        }
        // Ambil yang paling atas menurut urutan kategori, bukan urutan entries.
        const topmost = list.find((cat) => visible.has(cat));
        // Tidak ada yang berpotongan (mis. seksi terakhir yang pendek di dasar
        // halaman) → pertahankan sorotan terakhir, jangan dikosongkan.
        if (topmost) setActive(topmost);
      },
      {
        // Pita aktif: mulai tepat di bawah nav sticky, berakhir ~45% layar.
        rootMargin: `-${HEADER_HEIGHT + NAV_HEIGHT}px 0px -55% 0px`,
      },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  const handleClick = (category: string, index: number) => {
    const el = document.getElementById(categorySectionId(category, index));
    if (!el) return;
    // Sorot langsung tanpa menunggu observer supaya terasa responsif.
    setActive(category);
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  // Jaga pil aktif tetap terlihat di dalam scroller-nya sendiri. Memakai
  // scrollLeft (bukan scrollIntoView) agar halaman tidak ikut bergeser.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const pill = scroller.querySelector<HTMLElement>(`[data-nav-category="${CSS.escape(active)}"]`);
    if (!pill) return;
    const target = pill.offsetLeft - (scroller.clientWidth - pill.offsetWidth) / 2;
    scroller.scrollTo({
      left: Math.max(0, target),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [active, reduceMotion]);

  // Sampai 5 kategori dibagi rata memenuhi lebar (target jadi lebar). Lebih dari
  // itu justru menyempit, jadi kembali ke baris yang digulir. Di bawah `sm`
  // pembagian rata selalu dimatikan: 5 kolom di layar ~360px membuat tombol
  // terlalu sempit untuk labelnya.
  // Satu kategori juga dikecualikan: dibagi rata berarti satu pil melar selebar
  // kontainer (~1024px) dan terbaca sebagai banner, bukan kontrol nav.
  const distribute = categories.length > 1 && categories.length <= 5;

  return (
    // z-30: di bawah header (z-50) dan di bawah overlay popup detail /
    // konfirmasi download (z-50) supaya tidak mengambang di atas dialog.
    <nav
      aria-label="Kategori firmware"
      className="sticky top-16 z-30 -mx-4 mb-8 border-b border-border bg-background/80 px-4 py-2.5 shadow-sm backdrop-blur-xl"
    >
      <div
        ref={scrollerRef}
        // Satu baris, digulir horizontal — tidak pernah membungkus jadi
        // beberapa baris agar tinggi bar sticky tetap konstan.
        className={`flex items-stretch gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          distribute ? "sm:overflow-x-visible" : ""
        }`}
      >
        {categories.map((category, i) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              data-nav-category={category}
              aria-current={isActive ? "true" : undefined}
              onClick={() => handleClick(category, i)}
              title={category}
              className={`relative inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                distribute ? "sm:min-w-0 sm:flex-1 sm:basis-0 sm:shrink" : ""
              } ${
                isActive
                  ? `bg-gradient-to-b ring-1 ring-border shadow-sm ${meta.grad} ${meta.text}`
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              }`}
            >
              <CategoryIcon
                category={category}
                className={`w-4 h-4 shrink-0 ${isActive ? "" : "opacity-70"}`}
              />
              <span className="truncate">{category}</span>
              {/* Aksen bawah — cue ketiga (selain warna teks & latar) agar posisi
                  aktif tetap terbaca tanpa mengandalkan warna saja. */}
              {isActive && (
                <span
                  aria-hidden
                  className={`absolute inset-x-3 bottom-0 h-[3px] rounded-full ${meta.dot}`}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
