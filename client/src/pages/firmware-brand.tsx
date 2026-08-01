import { useEffect, useState } from "react";
import { useRoute, useLocation, Link } from "wouter";
import Layout from "@/components/layout";
import FirmwareDetailModal from "@/components/firmware/FirmwareDetailModal";
import FirmwareDownloadButton from "@/components/firmware/FirmwareDownloadButton";
import CategoryNav, {
  categorySectionId,
  SECTION_SCROLL_MARGIN,
} from "@/components/firmware/CategoryNav";
import CategoryIcon from "@/components/firmware/CategoryIcon";
import {
  apiFirmwarePopupPublic,
  type FirmwarePopupSettings,
} from "@admin/firmware/popupSettingsApi";
import {
  fetchPublicFirmware,
  groupByCategory,
  formatBytes,
  fileExtLabel,
  isFirmwareBrand,
  FIRMWARE_BRAND_META,
  type PublicFirmware,
  type FirmwareBrandMeta,
} from "@/lib/firmwarePublic";
import {
  Info,
  ExternalLink,
  ArrowLeft,
  Upload,
  PackageOpen,
  FileArchive,
  Cpu,
  Tag,
  Calendar,
  HardDrive,
  Hash,
} from "lucide-react";

type BrandMeta = FirmwareBrandMeta;

function FirmwareCard({
  item,
  meta,
  popup,
}: {
  item: PublicFirmware;
  meta: BrandMeta;
  /** Konten popup global — diambil sekali di level halaman, bukan per kartu. */
  popup: FirmwarePopupSettings;
}) {
  const [detailOpen, setDetailOpen] = useState(false);
  // Posisi tombol "Detail" saat diklik — dipakai modal sebagai titik asal animasi.
  const [detailOrigin, setDetailOrigin] = useState<DOMRect | null>(null);
  const isExternal = item.source_type === "external";
  const ext = fileExtLabel(item);

  const chip =
    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-secondary/60";

  return (
    <div
      className={`group flex flex-col rounded-2xl border border-border bg-background p-5 shadow-sm transition-[box-shadow,border-color] duration-[180ms] ease-out hover:shadow-lg ${meta.border}`}
    >
      {/* Baris atas: nama produk (kiri) + badge ekstensi (kanan) */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0 font-bold text-lg leading-snug tracking-tight">
          {item.product_name}
        </h3>
        {ext && (
          <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold uppercase bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <FileArchive className="w-3 h-3" />
            {ext}
          </span>
        )}
      </div>

      {/* Badge tipe: kategori + sumber */}
      <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary/70 text-muted-foreground">
          {item.category}
        </span>
        {isExternal ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            <ExternalLink className="w-3 h-3" />
            Link eksternal
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Upload className="w-3 h-3" />
            Upload
          </span>
        )}
      </div>

      {/* Baris META horizontal (chip ber-ikon): Model · Versi · Rilis · Ukuran */}
      <div className="flex flex-wrap items-center gap-1.5 mt-3">
        {item.model_sku && (
          <span className={`${chip} text-muted-foreground`}>
            <Cpu className="w-3.5 h-3.5" />
            <span className="font-mono">{item.model_sku}</span>
          </span>
        )}
        {item.version && (
          <span className={`${chip} font-semibold ${meta.text}`}>
            <Tag className="w-3.5 h-3.5" />
            {item.version}
          </span>
        )}
        {item.release_date && (
          <span className={`${chip} text-muted-foreground`}>
            <Calendar className="w-3.5 h-3.5" />
            {item.release_date}
          </span>
        )}
        <span className={`${chip} text-muted-foreground`}>
          <HardDrive className="w-3.5 h-3.5" />
          {formatBytes(item.file_size)}
        </span>
      </div>

      {/* Checksum (monospace + ikon hash) */}
      {item.checksum && (
        <div className="mt-3 flex items-start gap-1.5 text-[11px] text-muted-foreground/70">
          <Hash className="w-3.5 h-3.5 shrink-0 mt-px" />
          <span className="font-mono break-all">{item.checksum}</span>
        </div>
      )}

      {/* Pemisah + tombol (kanan bawah, aksen brand) */}
      <div className="mt-auto pt-5 border-t border-border flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={(e) => {
            setDetailOrigin(e.currentTarget.getBoundingClientRect());
            setDetailOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150"
        >
          <Info className="w-4 h-4" />
          Detail
        </button>
        <FirmwareDownloadButton item={item} meta={meta} />
      </div>

      <FirmwareDetailModal
        item={item}
        meta={meta}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        originRect={detailOrigin}
        installGuide={popup.install_guide}
        disclaimer={popup.disclaimer}
      />
    </div>
  );
}

export default function FirmwareBrandPage() {
  const [, params] = useRoute("/firmware/:brand");
  const [, setLocation] = useLocation();
  const brand = params?.brand ?? "";

  const [list, setList] = useState<PublicFirmware[]>([]);
  const [loading, setLoading] = useState(true);
  // Konten popup bersifat global (semua brand) → cukup satu request per halaman.
  // Nilai awal "" = modal memakai teks cadangannya sendiri.
  const [popup, setPopup] = useState<FirmwarePopupSettings>({
    install_guide: "",
    disclaimer: "",
  });

  useEffect(() => {
    if (!isFirmwareBrand(brand)) {
      setLocation("/firmware");
    }
  }, [brand, setLocation]);

  // Tanpa dependency `brand` — kontennya sama untuk semua brand.
  // Bila gagal, state dibiarkan kosong dan modal tetap tampil dengan teks cadangan.
  useEffect(() => {
    let alive = true;
    void apiFirmwarePopupPublic().then((r) => {
      if (alive && r.ok) setPopup(r.data);
    });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!isFirmwareBrand(brand)) return;
    let alive = true;
    setLoading(true);
    void fetchPublicFirmware(brand).then((data) => {
      if (!alive) return;
      setList(data);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [brand]);

  if (!isFirmwareBrand(brand)) return null;

  const meta = FIRMWARE_BRAND_META[brand];
  const groups = groupByCategory(list);
  // Sumber daftar nav — urutan mengikuti pengelompokan yang sudah ada.
  const categories = groups.map((g) => g.category);
  const totalCount = list.length;
  const categoryCount = groups.length;

  return (
    <Layout>
      <section className="py-14 px-4 min-h-screen">
        <div className="container mx-auto max-w-5xl">
          {/* Back */}
          <Link href="/firmware">
            <a className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Semua brand
            </a>
          </Link>

          {/* HERO */}
          <div className="relative overflow-hidden rounded-3xl border border-border mb-12">
            {/* Base gradient brand */}
            <div className={`absolute inset-0 bg-gradient-to-br ${meta.grad} pointer-events-none`} />
            {/* Dekor kanan: lingkaran gradient blur + ikon besar semi-transparan */}
            <div
              className={`pointer-events-none absolute -right-12 -top-16 w-56 h-56 rounded-full ${meta.dot} opacity-20 blur-3xl`}
            />
            <Cpu
              className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52 text-foreground opacity-[0.05] hidden sm:block"
              strokeWidth={1}
            />

            <div className="relative flex items-center gap-5 p-7 md:p-9">
              {/* Logo dalam frame konsisten (tidak gepeng) */}
              <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-border bg-background shadow-sm">
                <img
                  src={meta.logo}
                  alt={meta.name}
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${meta.dot}`} />
                  <span className={`text-xs font-black tracking-[0.3em] uppercase ${meta.text}`}>
                    {meta.name}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                  Firmware {meta.name}
                </h1>
                <p className="text-muted-foreground mt-1">Firmware resmi &amp; terbaru</p>
                {!loading && totalCount > 0 && (
                  <p className="mt-2 text-xs font-semibold text-muted-foreground/80">
                    {totalCount} firmware · {categoryCount} kategori
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Konten */}
          {loading ? (
            <div className="py-20 text-center text-muted-foreground text-sm">Memuat firmware…</div>
          ) : groups.length === 0 ? (
            <div className="py-20 flex flex-col items-center justify-center text-center rounded-2xl border border-dashed border-border">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-muted-foreground mb-4">
                <PackageOpen className="w-7 h-7" />
              </span>
              <p className="font-semibold text-foreground">Belum ada firmware untuk brand ini</p>
              <p className="text-sm text-muted-foreground mt-1">
                Firmware akan muncul di sini setelah ditambahkan.
              </p>
            </div>
          ) : (
            <>
              {/* Nav lompat kategori — selalu tampil selama ada kategori; blok ini
                  hanya dirender ketika groups tidak kosong. */}
              <CategoryNav categories={categories} meta={meta} />
              <div className="space-y-14">
                {groups.map((group, groupIndex) => (
                  <section
                    key={group.category}
                    id={categorySectionId(group.category, groupIndex)}
                    data-category={group.category}
                    // Sisakan ruang untuk header + nav sticky saat di-scroll ke sini.
                    style={{ scrollMarginTop: SECTION_SCROLL_MARGIN }}
                  >
                    {/* Header seksi kategori: ikon relevan + nama + jumlah */}
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary ring-1 ring-border ${meta.text}`}
                      >
                        <CategoryIcon category={group.category} className="w-5 h-5" />
                      </span>
                      <div className="leading-tight">
                        <h2 className="text-lg font-black tracking-tight">{group.category}</h2>
                        <span className="text-xs text-muted-foreground/70">
                          {group.items.length} firmware
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-border ml-2" />
                    </div>

                    {/* Grid kartu: 2 kolom desktop / 1 kolom mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
                      {group.items.map((item) => (
                        <FirmwareCard key={item.id} item={item} meta={meta} popup={popup} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </>
          )}

          <p className="mt-14 text-xs text-center text-muted-foreground">
            Butuh versi lain atau panduan teknis?{" "}
            <a href="/support" className="underline hover:text-foreground transition-colors">
              hubungi tim support kami
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
