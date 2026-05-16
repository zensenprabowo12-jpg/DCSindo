import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroSection() {
  const logoUrl = "/uploads/mikrotik-dcs/mikrotik_logo.png";

  // SIMPAN GAMBAR KE:
  // public/images/batik/batik-mikrotik1.png
  const backgroundUrl =
    "/images/batik/batik-mikrotik1.png";

  return (
    <div
      className="relative h-screen min-h-[760px] w-full overflow-hidden text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* Soft Glow */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-pink-400/10 blur-[140px]" />

        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[600px] h-[600px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

        <div className="absolute -bottom-40 right-0 w-[800px] h-[800px] rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Logo */}
          <div className="flex justify-center">
            <div
              className={cn(
                "w-44 h-44 md:w-56 md:h-56 rounded-3xl",
                "flex items-center justify-center"
              )}
            >
              <img
                src={logoUrl}
                alt="MikroTik"
                className={cn(
                  "w-32 h-32 md:w-40 md:h-40 object-contain",
                  "drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
                )}
                draggable={false}
              />
            </div>
          </div>

          {/* Routing The World */}
          <p className="mt-8 text-sm md:text-base font-semibold tracking-[0.38em] uppercase text-white/85">
            ROUTING THE WORLD
          </p>

          {/* JARAK BESAR */}
          <div className="mt-14 md:mt-18" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              className={cn(
                "rounded-full px-8 min-w-[190px] h-12",
                "bg-white/5 backdrop-blur-md border-white/20 text-white",
                "hover:bg-white hover:text-black hover:border-white",
                "transition-all duration-300 shadow-lg"
              )}
              onClick={() => scrollToId("mikrotik-home-a")}
            >
              Product Highlight
            </Button>

            <Button
              variant="outline"
              className={cn(
                "rounded-full px-8 min-w-[190px] h-12",
                "bg-white/5 backdrop-blur-md border-white/20 text-white",
                "hover:bg-white hover:text-black hover:border-white",
                "transition-all duration-300 shadow-lg"
              )}
              onClick={() => scrollToId("mikrotik-home-b")}
            >
              Product Category
            </Button>

            <Button
              variant="outline"
              className={cn(
                "rounded-full px-8 min-w-[190px] h-12",
                "bg-white/5 backdrop-blur-md border-white/20 text-white",
                "hover:bg-white hover:text-black hover:border-white",
                "transition-all duration-300 shadow-lg"
              )}
              onClick={() => scrollToId("mikrotik-home-c")}
            >
              Why Choose Us
            </Button>
          </div>

          {/* Bottom Text */}
          <p className="mt-5  text-xs tracking-wide text-white/70">
            Scroll untuk melihat section berikutnya.
          </p>
        </div>
      </div>
    </div>
  );
}