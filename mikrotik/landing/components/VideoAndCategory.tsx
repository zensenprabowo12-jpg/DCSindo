import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function HomepageCategoryCard({
  title,
  href,
  imageSrc,
}: {
  title: string;
  href: string;
  imageSrc: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "rounded-2xl border border-border bg-secondary/20",
        "p-4 md:p-6 min-h-0 h-full",
        "hover:bg-primary/10 transition-colors",
        "flex items-end",
        "relative overflow-hidden group",
      )}
    >
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div className="relative z-10">
        <div className="h-14 w-14 rounded-xl opacity-0 mb-3" />
        <p className="font-bold text-white drop-shadow-sm">{title}</p>
      </div>
    </a>
  );
}

export default function VideoAndCategory({
  title,
  description,
  videoId,
  categories,
}: {
  title: string;
  description: string;
  videoId: string;
  categories: { title: string; href: string; imageSrc?: string }[];
}) {
  const fallbackImg = "/images/placeholder-product.png";

  return (
    <div className="bg-white dark:bg-black min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Baris 1: judul kiri & kanan sejajar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight min-w-0">
            Tonton Video Terbaru
          </h2>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight min-w-0">
            Product Category
          </h2>
        </div>

        {/* Baris 2: video (ukuran tetap aspect-video) + grid 4 kartu tinggi sama dengan video (desktop) */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
          <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-border bg-black aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title="MikroTik Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="flex w-full min-h-[240px] lg:min-h-0 lg:h-full">
            <div className="grid h-full w-full min-h-0 grid-cols-2 grid-rows-2 gap-4">
              {categories.slice(0, 4).map((c) => (
                <HomepageCategoryCard
                  key={c.title}
                  title={c.title}
                  href={c.href}
                  imageSrc={c.imageSrc?.trim() ? c.imageSrc : fallbackImg}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Baris 3: teks di bawah video + tombol di bawah grid category */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-2 min-w-0">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <div className="flex justify-center lg:justify-center items-start pt-1">
            <Button asChild className="rounded-full px-8">
              <a href="/mikrotik/categories">View All Category</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
