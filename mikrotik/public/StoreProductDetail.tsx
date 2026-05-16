import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { apiPublicProduct } from "../api";
import type { MikrotikDcsProductDetail } from "../types";
import { ProductGallery } from "./product-detail/ProductGallery";
import { ProductInfo } from "./product-detail/ProductInfo";
import { ProductVideo } from "./product-detail/ProductVideo";
import { ProductSpecification } from "./product-detail/ProductSpecification";
import { ProductTechnicalAccordion } from "./product-detail/ProductTechnicalAccordion";
import { MIKROTIK_PRODUCT_EXTRAS } from "./productExtras";
import { CATEGORY_BACKGROUNDS } from "./CategoryBackground";

export default function MikrotikDcsStoreProductDetail() {
  const [match, params] = useRoute("/mikrotik/shop/:id");

  const id = match
    ? Number.parseInt(String(params.id ?? ""), 10)
    : Number.NaN;

  const [d, setD] = useState<MikrotikDcsProductDetail | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>("");

  const extras = useMemo(() => {
    return Number.isFinite(id)
      ? MIKROTIK_PRODUCT_EXTRAS[id]
      : undefined;
  }, [id]);

  const specId = "mikrotik-product-spec";

  useEffect(() => {
    if (!match) {
      setLoading(false);
      setErr(null);
      return;
    }

    if (Number.isNaN(id) || id < 1) {
      setErr("Produk tidak valid");
      setLoading(false);
      return;
    }

    let c = true;

    void (async () => {
      setLoading(true);
      setErr(null);

      const r = await apiPublicProduct(id);

      if (!c) return;

      if (r.ok) {
        setD(r.data);
        setErr(null);
      } else {
        setErr(r.message);
        setD(null);
      }

      setLoading(false);
    })();

    return () => {
      c = false;
    };
  }, [id, match]);

  /*
  |--------------------------------------------------------------------------
  | CATEGORY BACKGROUND
  |--------------------------------------------------------------------------
  */

 const categoryName = (
  (d as any)?.nama_kategori ||
  (d as any)?.category ||
  ""
)
  .toString()
  .toLowerCase();

  const backgroundImage =
    CATEGORY_BACKGROUNDS[categoryName] ||
    "/images/category-bg/default.jpg";

  const gallery = useMemo(() => {
    if (!d) return [];

    return (d.gallery ?? [])
      .slice()
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
      .map((g) => ({
        id: g.id,
        src: g.image_path,
      }));
  }, [d]);

  const bulletPoints = useMemo(
    () =>
      d
        ? (d.bullet_points ?? [])
            .map(String)
            .filter(Boolean)
        : [],
    [d],
  );

  const videoUrlOrId = useMemo(() => {
    if (!d) return "";

    return (d.video_url ?? "") || extras?.videoUrl || "";
  }, [d, extras?.videoUrl]);

  const videoTitle = useMemo(
    () =>
      d
        ? (d.video_title ?? undefined) ||
          extras?.videoTitle
        : undefined,
    [d, extras?.videoTitle],
  );

  const videoDescription = useMemo(
    () =>
      d
        ? (d.video_description ?? undefined) ||
          extras?.videoDescription
        : undefined,
    [d, extras?.videoDescription],
  );

  const specifications = useMemo(() => {
    if (!d)
      return [] as {
        title: string;
        items: {
          label: string;
          value: string;
        }[];
      }[];

    if (d.specifications && d.specifications.length)
      return d.specifications;

    if (extras?.specifications)
      return [extras.specifications];

    return [];
  }, [d, extras?.specifications]);

  useEffect(() => {
    if (!d) {
      setActiveImage("");
      return;
    }

    setActiveImage(
      d.main_image ||
        gallery[0]?.src ||
        "",
    );
  }, [d, gallery]);

  const scrollToSpecs = useCallback(() => {
    const el = document.getElementById(specId);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [specId]);

  if (!match) {
    return (
      <Layout>
        <div className="container py-20 text-center text-destructive">
          URL tidak valid
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="container py-20 text-center text-muted-foreground">
          Memuat…
        </div>
      </Layout>
    );
  }

  if (err || !d) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-destructive mb-4">
            {err ?? "Tidak ditemukan"}
          </p>

          <Button asChild variant="outline">
            <Link href="/mikrotik/shop">
              Kembali
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* FULL PAGE FIXED BACKGROUND */}
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            {/* BACK BUTTON */}
            <div className="mb-6">
              <Button
                variant="secondary"
                asChild
                className="bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20"
              >
                <Link href="/mikrotik/shop">
                  ← Kembali ke katalog
                </Link>
              </Button>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* TOP SECTION */}
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <ProductGallery
                  title={d.nama_produk}
                  mainSrc={d.main_image}
                  gallery={gallery}
                  activeSrc={
                    activeImage ||
                    d.main_image
                  }
                  onSelect={setActiveImage}
                />

                <ProductInfo
                  name={d.nama_produk}
                  sku={d.sku}
                  description={d.deskripsi}
                  bullets={bulletPoints}
                  onScrollToSpecs={
                    scrollToSpecs
                  }
                />
              </div>

              {/* VIDEO */}
              <ProductVideo
                videoUrlOrId={videoUrlOrId}
                title={
                  videoTitle ||
                  "Judul Video Product"
                }
                description={
                  videoDescription || ""
                }
              />

              {/* TECHNICAL */}
              <ProductTechnicalAccordion
                items={
                  d.technical_items ?? []
                }
              />

              {/* SPECIFICATION */}
              <ProductSpecification
                id={specId}
                title="Specification"
                specifications={
                  specifications
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}