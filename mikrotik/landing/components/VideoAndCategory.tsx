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
        "rounded-2xl border border-white/10 bg-white/[0.04]",
        "backdrop-blur-xl",
        "p-4 md:p-6 min-h-0 h-full",
        "hover:bg-white/[0.08] transition-all duration-300",
        "flex items-end",
        "relative overflow-hidden group",
      )}
    >
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10">
        <div className="h-14 w-14 rounded-xl opacity-0 mb-3" />
        <p className="font-bold text-white drop-shadow-sm text-lg">
          {title}
        </p>
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
    <div
      className="relative min-h-screen flex items-center overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, #015EA4 0%, #012D4E 35%, #582D7C 70%, #1F417A 100%)",
      }}
    >
      {/* BATIK CORNER ORNAMENT */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* TOP LEFT */}
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.22), transparent 70%)",
          }}
        />

        {/* BOTTOM RIGHT */}
        <div
          className="absolute -bottom-24 -right-24 w-[600px] h-[600px] opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle at bottom right, rgba(255,255,255,0.22), transparent 70%)",
          }}
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />

      {/* GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="absolute bottom-[-250px] right-[-150px] w-[700px] h-[700px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        
        {/* TITLE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Get To Know MikroTik
          </h2>

          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Product Category
          </h2>
        </div>

        {/* VIDEO + CATEGORY */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
          
          {/* VIDEO */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl aspect-video shadow-2xl">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/piLybn0gx0w?=1&mute=1&rel=0"
              title="MikroTik Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* CATEGORY GRID */}
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

        {/* DESCRIPTION + BUTTON */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">
              {title}
            </h3>

            <p className="text-white/75 leading-relaxed text-base">
              {description}
            </p>
          </div>

          <div className="flex justify-center lg:justify-center items-start pt-1">
            <Button
              asChild
              className={cn(
                "rounded-full px-8 h-12",
                "bg-white text-black",
                "hover:bg-white/90",
                "shadow-xl"
              )}
            >
              <a href="/mikrotik/categories">
                View All Category
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}