import { useMemo } from "react";
import { cn } from "@/lib/utils";

export type GalleryImage = { id: string | number; src: string };

export function ProductGallery({
  title,
  mainSrc,
  gallery,
  activeSrc,
  onSelect,
}: {
  title: string;
  mainSrc: string;
  gallery: GalleryImage[];
  activeSrc: string;
  onSelect: (src: string) => void;
}) {
  const thumbnails = useMemo(() => {
    const seen = new Set<string>();
    const all = [{ id: "main", src: mainSrc }, ...gallery];
    return all.filter((x) => {
      if (!x.src) return false;
      if (seen.has(x.src)) return false;
      seen.add(x.src);
      return true;
    });
  }, [gallery, mainSrc]);

  return (
    <div>
      <div className="rounded-2xl border border-border bg-secondary/20 p-6 md:p-8">
        <div className="aspect-square md:aspect-[4/3] w-full rounded-xl bg-background/50 border border-border flex items-center justify-center overflow-hidden">
          <img
            src={activeSrc}
            alt={title}
            className="w-full h-full object-contain p-6"
            draggable={false}
          />
        </div>
      </div>

      {thumbnails.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {thumbnails.map((t) => (
            <button
              key={String(t.id)}
              type="button"
              onClick={() => onSelect(t.src)}
              className={cn(
                "h-16 w-16 rounded-lg border overflow-hidden bg-secondary/20 shrink-0",
                t.src === activeSrc ? "border-primary" : "border-border hover:border-primary/60",
              )}
              aria-label="Pilih gambar"
            >
              <img src={t.src} alt="" className="h-full w-full object-cover" draggable={false} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

