import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroSection() {
  // Pastikan file ini memang ada di folder `public/uploads/mikrotik-dcs/`
  // contoh: `public/uploads/mikrotik-dcs/hero-bg.png` → URL: `/uploads/mikrotik-dcs/hero-bg.png`
  const backgroundUrl = "/uploads/mikrotik-dcs/hero-bg.png";
  const logoUrl = "/uploads/mikrotik-dcs/mikrotik_logo.png";

  return (
    <div
      className="relative h-screen min-h-[600px] w-full overflow-hidden text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/20 blur-[90px]" />
        <div className="absolute -bottom-40 right-0 w-[700px] h-[700px] rounded-full bg-primary/20 blur-[90px]" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mx-auto flex items-center justify-center">
              <div
                className={cn(
                  "w-44 h-44 md:w-56 md:h-56 rounded-3xl",
                  "flex items-center justify-center",
                )}
              >
                <img
                  src={logoUrl}
                  alt="MikroTik"
                  className={cn(
                    "w-32 h-32 md:w-40 md:h-40 object-contain",
                    "drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)]",
                  )}
                  draggable={false}
                />
              </div>
            </div>

            <p className="mt-10 text-sm md:text-base font-semibold tracking-[0.38em] uppercase text-white/80 leading-relaxed max-w-2xl mx-auto">
              ROUTING THE WORLD
            </p>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="outline"
                className={cn(
                  "rounded-full px-8 min-w-[180px]",
                  "bg-transparent border-white/30 text-white",
                  "hover:bg-primary hover:text-primary-foreground hover:border-primary",
                  "transition-colors duration-200",
                )}
                onClick={() => scrollToId("mikrotik-home-a")}
              >
                Homepage A
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "rounded-full px-8 min-w-[180px]",
                  "bg-transparent border-white/30 text-white",
                  "hover:bg-primary hover:text-primary-foreground hover:border-primary",
                  "transition-colors",
                )}
                onClick={() => scrollToId("mikrotik-home-b")}
              >
                Homepage B
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "rounded-full px-8 min-w-[180px]",
                  "bg-transparent border-white/30 text-white",
                  "hover:bg-primary hover:text-primary-foreground hover:border-primary",
                  "transition-colors",
                )}
                onClick={() => scrollToId("mikrotik-home-c")}
              >
                Homepage C
              </Button>
            </div>
          </div>

          <p className="mt-8 text-xs text-white/70">
            Scroll untuk melihat section berikutnya.
          </p>
        </div>
      </div>
    </div>
  );
}

