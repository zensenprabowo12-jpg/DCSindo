import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { products, CATEGORIES } from "@/lib/products/productUbiquiti";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function getYouTubeVideoId(input: string) {
  const raw = input.trim();
  if (!raw) return "";

  // common user mistake: "v=<id>" pasted instead of full URL
  if (raw.startsWith("v=")) return raw.slice(2);

  // already an ID
  if (!raw.includes("/") && !raw.includes(" ") && raw.length >= 8) return raw;

  try {
    const url = new URL(raw);

    // youtu.be/<id>
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] ?? "";
    }

    // youtube.com/watch?v=<id>
    const v = url.searchParams.get("v");
    if (v) return v;

    // youtube.com/embed/<id> or /shorts/<id>
    const parts = url.pathname.split("/").filter(Boolean);
    const embedIdx = parts.indexOf("embed");
    if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1];
    const shortsIdx = parts.indexOf("shorts");
    if (shortsIdx >= 0 && parts[shortsIdx + 1]) return parts[shortsIdx + 1];

    return "";
  } catch {
    return "";
  }
}

export default function Home() {
  // Paste a full YouTube URL (watch/shorts/youtu.be) or just the ID here.
  const heroProductVideoInput = "https://youtu.be/hZb-lrs8Bv8?si=B4zu58Q-dUDKUggM";
  const heroProductVideoId = getYouTubeVideoId(heroProductVideoInput);

  return (
    <Layout>
      <div className="typography-lato min-w-0 antialiased">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] min-w-[177.77vh] min-h-[56.25vw]">
            <iframe
              src="https://www.youtube.com/embed/69g3O3Ltygw?autoplay=1&mute=1&loop=1&playlist=69g3O3Ltygw&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
              className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-80"
              allow="autoplay; encrypted-media"
              title="DCS Hero Video"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">


          {/* Slogan */}
          <p className="mb-6 text-sm md:text-[15px] font-bold tracking-[0.35em] uppercase text-gray-300 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Building The Future of IT
          </p>

          {/* Logo UniFi */}
          <img
            src="/images/1.logo/UniFiLight.png"
            alt="UniFi-Light"
            className="w-48 md:w-64 lg:w-100 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000"
          />

          {/* Deskripsi */}
          <p className="max-w-2xl text-base mb-5 md:text-[20px] text-gray-200 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Best-in-class IT products unified through an intuitive software interface, powered by scalable, license-free cloud management.
          </p>
          <Link href="/collections/cloud-gateways">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-12 h-16 text-lg font-bold transition-all">
              Explore Products!
            </Button>
          </Link>


        </div>
      </section>
      {/* 🔹 Reimagined Ecosystem Section - Aesthetic Masonry Layout */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[16px] md:text-[60px] font-bold tracking-tight mb-2">Industry Leading Hardware</h2>
            <p className="text-muted-foreground text-lg md:text-[20px] max-w-2xl mx-auto">
              Didesain secara presisi untuk performa tinggi dan keandalan jangka panjang.
            </p>
            <p className="text-muted-foreground text-lg md:text-[20px] max-w-2xl mx-auto">
              Didukung EdgeAI yang berkembang pesat di bidang networking dan keamanan fisik.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* WiFi Systems - Large Main Card */}
            <Link href="/collections/wifi" className="md:col-span-8 md:row-span-2">
              <motion.a
                whileHover={{ scale: 0.99 }}
                className="group relative h-full min-h-[400px] overflow-hidden bg-black shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)]"
              >
                <div className="absolute inset-0 p-10 z-20 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <h3 className="text-3xl font-bold text-white mb-2">WiFi Systems</h3>
                  <p className="text-white/80 max-w-sm">Blazing fast wireless coverage for any space with WiFi 7 technology.</p>
                </div>
                <img
                  src="/images/2.homepage/homecategorywifi.png"
                  alt="Home-WiFi"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.a>
            </Link>

            {/* Security - Side Card */}
            <Link href="/collections/camera-security" className="md:col-span-4 md:row-span-1">
              <motion.a
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)]"
              >
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Security</h3>
                  <p className="text-white/70 text-sm">Protect what matters with AI-driven surveillance.</p>
                </div>
                <img
                  src="/images/2.homepage/homecategorycamerasecurity.png"
                  alt="Home-Camera-Security"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.a>
            </Link>



            {/* Door Access - Side Card */}
            <Link href="/collections/door-access" className="md:col-span-4 md:row-span-1">
              <motion.a
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)]"
              >
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-bold text-white">Door Access</h3>
                  <p className="text-white/70 text-sm">Secure Every Entry, Seamlessly.</p>

                </div>
                <img
                  src="/images/2.homepage/homecategorydooraccess.png"
                  alt="Home-Door-Access"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.a>
            </Link>

            {/* Cloud Gateways - Bottom Grid */}
            <Link href="/collections/ubiquiti" className="md:col-span-4 md:row-span-1">
              <motion.a
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)]"
              >
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-bold text-white">Cloud Gateways</h3>
                  <p className="text-white/70 text-sm">The backbone of your network infrastructure.</p>
                </div>
                <img
                  src="/images/2.homepage/homecategorycloudgateway.png"
                  alt="Home-Cloud-Gateways"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.a>
            </Link>

            {/* Switching - Bottom Grid */}
            <Link href="/collections/switching" className="md:col-span-4 md:row-span-1">
              <motion.a
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)]"
              >
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-black/20 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Switching</h3>
                  <p className="text-white/70 text-sm">Powering Seamless Connectivity.</p>
                </div>
                <img
                  src="/images/2.homepage/homecategoryswitching.png"
                  alt="Home-Switching"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.a>
            </Link>

            {/* Others - Bottom Grid */}
            <Link href="/collections/cloudGateways" className="md:col-span-4 md:row-span-1">
              <motion.a
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)] flex flex-col items-center justify-center p-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors uppercase italic">Explore UniFi</h3>
                <ArrowRight className="w-12 h-12 text-primary group-hover:translate-x-4 transition-transform duration-500" />
              </motion.a>
            </Link>
          </div>
        </div>
      </section>
      {/* Reimagined Infrastructure Showcase */}
      <section className="bg-black text-white py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Rethinking IT</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl mb-0">
            Software kelas profesional dipadukan dengan hardware kelas enterprise.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl mb-12">
            Tanpa biaya berlangganan—hanya kinerja maksimal.
          </p>
          <Link href="/support">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-12 h-16 text-lg font-bold transition-all">
              Talk to an Expert
            </Button>
          </Link>


        </div>

        <div className="container mx-auto px-4 space-y-48">

          {/* === ITEM 1 === */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

            {/* VIDEO */}
            <div className="flex-1 flex justify-center order-2 lg:order-1">
              <div className="relative group w-full max-w-[480px] aspect-square">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-[70px] scale-[1.1] opacity-70 group-hover:opacity-100 transition-all duration-700" />

                {/* Border */}
                <div className="absolute inset-0 rounded-full z-20 pointer-events-none">
                  <div className="w-full h-full rounded-full border-[clamp(3px,0.8vw,8px)] border-primary shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-transform duration-700 group-hover:scale-[1.05]" />
                </div>

                {/* Video */}
                <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-black">
                  <iframe 
                    src="https://www.youtube.com/embed/DZLTGnqaIso?si=tlwamaL1SwdshRG5&autoplay=1&mute=1&loop=1&playlist=DZLTGnqaIso&controls=0"
                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 scale-[1.6] md:scale-[1.8] lg:scale-[2]"
                    allow="autoplay; encrypted-media"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

              </div>
            </div>

            {/* TEXT */}
            <div className="flex-1 space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-bold italic uppercase">UniFi Protect</h3>
              <p className="text-gray-400 text-2xl md:text-2xl leading-relaxed">
                Platform keamanan enterprise tanpa lisensi dengan dukungan AI untuk deteksi cerdas.
              </p>
              <Link href="/collections/camera-security">
                <Button className="border-white text-white hover:bg-white hover:text-black rounded-full px-12 h-16 text-lg font-bold">
                  Explore Protect
                </Button>
              </Link>
            </div>

          </div>


          {/* === ITEM 2 === */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

            {/* TEXT */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-bold italic uppercase">UniFi Network</h3>
              <p className="text-gray-400 text-2xl md:text-2xl leading-relaxed">
                Infrastruktur IT terpadu dengan kontrol penuh tanpa subscription.
              </p>
              <Button className="border-white text-white hover:bg-white hover:text-black rounded-full px-12 h-16 text-lg font-bold">
                Explore Network
              </Button>
            </div>

            {/* VIDEO */}
            <div className="flex-1 flex justify-center">
              <div className="relative group w-full max-w-[480px] aspect-square">

                <div className="absolute inset-0 rounded-full bg-primary/20 blur-[70px] scale-[1.1] opacity-70 group-hover:opacity-100 transition-all duration-700" />

                <div className="absolute inset-0 rounded-full z-20 pointer-events-none">
                  <div className="w-full h-full rounded-full border-[clamp(3px,0.8vw,8px)] border-primary shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-transform duration-700 group-hover:scale-[1.05]" />
                </div>

                <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/zZpzDb-MHOY?autoplay=1&mute=1&loop=1&playlist=zZpzDb-MHOY&controls=0"
                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 scale-[1.6] md:scale-[1.8] lg:scale-[2]"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

              </div>
            </div>

          </div>


          {/* === ITEM 3 === */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

            {/* VIDEO */}
            <div className="flex-1 flex justify-center order-2 lg:order-1">
              <div className="relative group w-full max-w-[480px] aspect-square">

                <div className="absolute inset-0 rounded-full bg-primary/20 blur-[70px] scale-[1.1] opacity-70 group-hover:opacity-100 transition-all duration-700" />

                <div className="absolute inset-0 rounded-full z-20 pointer-events-none">
                  <div className="w-full h-full rounded-full border-[clamp(3px,0.8vw,8px)] border-primary shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-transform duration-700 group-hover:scale-[1.05]" />
                </div>

                <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/GqNZLj8cYmw?autoplay=1&mute=1&loop=1&playlist=GqNZLj8cYmw&controls=0"
                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 scale-[1.5] md:scale-[1.7] lg:scale-[1.9]"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

              </div>
            </div>

            {/* TEXT */}
            <div className="flex-1 space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-bold italic uppercase">UniFi Access</h3>
              <p className="text-gray-400 text-2xl md:text-2xl leading-relaxed">
                Sistem kontrol akses cerdas dengan manajemen terpusat dan keamanan tinggi.
              </p>
              <Button className="border-white text-white hover:bg-white hover:text-black rounded-full px-12 h-16 text-lg font-bold">
                Explore Access
              </Button>
            </div>

          </div>

        </div>
      </section>
      {/* New Release - Aesthetic Dark Minimalist */}
      <section className="py-40 bg-white dark:bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 px-4 md:px-12">
            <div className="flex-1 space-y-10">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                State of the Art
              </div>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none uppercase italic">
                U7 Pro XG<br /><span className="text-primary">WiFi 7</span>
              </h2>
              <p className="text-2xl text-muted-foreground max-w-lg leading-snug font-medium">
                Access point WiFi 7 dengan desain ceiling-mounted, didukung teknologi 6-stream serta konektivitas high-speed hingga 10/5/2.5/1 GbE.
              </p>


              <div className="flex gap-12 border-l-4 border-primary pl-8">
                <div>
                  <div className="text-5xl font-bold mb-1">5-9</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Gbps Throughput</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-1">6GHz</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Spectrum Band</div>
                </div>
              </div>

              <Link href="/collections/wifi">
                <Button size="lg" className="rounded-full px-12 h-20 text-xl font-bold uppercase shadow-2xl shadow-primary/40 hover:scale-110 transition-transform bg-primary hover:bg-primary/90">
                  Explore U7 Pro XG
                </Button>
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 w-full max-w-2xl mx-auto aspect-video overflow-hidden rounded-3xl bg-black drop-shadow-[0_50px_50px_rgba(0,0,0,0.2)] group hover:-translate-y-8 transition-transform duration-1000">
                {heroProductVideoId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${heroProductVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroProductVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
                    className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    title="Ubiquiti showcase video"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/80 text-sm font-semibold tracking-wide">
                    Video link tidak valid
                  </div>
                )}
                <div className="absolute inset-0 bg-black/10" />
                <a
                  href={
                    heroProductVideoId
                      ? `https://www.youtube.com/watch?v=${heroProductVideoId}`
                      : "https://www.youtube.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open video on YouTube"
                  className="absolute inset-0 z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}