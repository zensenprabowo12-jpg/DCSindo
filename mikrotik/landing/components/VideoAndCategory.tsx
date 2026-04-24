import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function VideoAndCategory({
  title,
  description,
  videoId,
  categories,
}: {
  title: string;
  description: string;
  videoId: string;
  categories: { title: string; href: string }[];
}) {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-20 w-full">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="space-y-4">
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
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Product Category
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {categories.slice(0, 4).map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  className={cn(
                    "rounded-2xl border border-border bg-secondary/20",
                    "p-4 md:p-6 min-h-[120px]",
                    "hover:bg-primary/10 transition-colors",
                    "flex items-end",
                  )}
                >
                  <div>
                    <div className="h-14 w-14 rounded-xl bg-muted/40 border border-border mb-3" />
                    <p className="font-bold">{c.title}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-2">
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

