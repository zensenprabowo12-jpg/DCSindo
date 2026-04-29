export default function WhyChooseUs() {
  return (
    <div className="bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Why Choose Us?
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Kami memastikan pengalaman belanja yang aman dan nyaman. Dengan dukungan
            ekosistem MikroTik dan layanan DCS, kami membantu kamu membangun
            infrastruktur jaringan yang stabil, mudah dikelola, dan siap berkembang.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            (Dummy text — silakan ganti dengan visi, misi, dan value resmi DCS + MikroTik.)
          </p>

          <div className="mt-12 rounded-3xl border border-border bg-secondary/20 p-8 md:p-10 text-left">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-bold">Reliable</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Produk dan rekomendasi yang teruji untuk kebutuhan bisnis.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold">Support</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Dukungan teknis dan dokumentasi untuk implementasi yang cepat.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold">Scalable</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Solusi mudah dikembangkan untuk skala kecil sampai enterprise.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            Dinamika Cipta Solusi
          </p>
        </div>
      </div>
    </div>
  );
}

