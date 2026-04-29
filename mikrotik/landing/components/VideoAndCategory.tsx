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
        // KEEP: ukuran & spacing card harus identik
        "rounded-2xl border border-border bg-secondary/20",
        "p-4 md:p-6 min-h-[120px]",
        "hover:bg-primary/10 transition-colors",
        "flex items-end",
        // hanya layering (tidak mengubah dimensi)
        "relative overflow-hidden group",
      )}
    >
      {/* Image layer (full background) */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />

      {/* Optional overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* Content (KEEP: posisi teks sama seperti versi lama) */}
      <div className="relative z-10">
        {/* Spacer: menggantikan oval lama agar teks tidak bergeser */}
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
  categories: { title: string; href: string; imageSrc: string }[];
}) {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT */}
          <div className="space-y-4 min-w-0">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Tonton Video Terbaru
            </h2>
            <div className="rounded-2xl overflow-hidden border border-border bg-secondary/20">
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                  title="MikroTik Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 min-w-0">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Product Category
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {categories.slice(0, 4).map((c) => (
                <HomepageCategoryCard
                  key={c.title}
                  title={c.title}
                  href={c.href}
                  imageSrc={c.imageSrc}
                />
              ))}
            </div>

            <div className="pt-2 flex justify-center">
              <Button asChild className="rounded-full px-8">
                <a href="/mikrotik/categories">View All Category</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

