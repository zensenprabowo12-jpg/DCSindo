import { useEffect, useState, useCallback } from "react";
import { Link, useSearch, useLocation } from "wouter";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, FlaskConical, Award } from "lucide-react";
import {
  apiFetchTrainingSessions,
  BRAND_BG,
  BRAND_COLOR,
  formatDate,
  STATUS_BG,
  type TrainingBrand,
  type TrainingFormat,
  type TrainingSession,
  type TrainingStatus,
} from "./types";

const BRANDS: { label: string; value: string }[] = [
  { label: "All", value: "" },
  { label: "MikroTik", value: "MikroTik" },
  { label: "Ubiquiti", value: "Ubiquiti" },
  { label: "V-SOL", value: "V-SOL" },
  { label: "General", value: "General" },
];

const STATUSES: { label: string; value: string }[] = [
  { label: "All Status", value: "" },
  { label: "Upcoming", value: "Upcoming" },
  { label: "Ongoing", value: "Ongoing" },
  { label: "Completed", value: "Completed" },
];

const FORMATS: { label: string; value: string }[] = [
  { label: "All Format", value: "" },
  { label: "Online", value: "Online" },
  { label: "Offline", value: "Offline" },
  { label: "Hybrid", value: "Hybrid" },
];

function Pill({
  active,
  color,
  onClick,
  children,
}: {
  active: boolean;
  color?: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={active && color ? { backgroundColor: color + "22", borderColor: color + "66", color } : undefined}
      className={[
        "px-4 py-1.5 rounded-full text-sm font-semibold border transition-all",
        active && !color
          ? "bg-white/10 border-white/30 text-white"
          : !active
          ? "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
          : "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function TrainingCard({ t }: { t: TrainingSession }) {
  const brandColor = BRAND_COLOR[t.brand as TrainingBrand];
  return (
    <Link href={`/training/${t.id}`}>
      <motion.a
        whileHover={{ y: -4 }}
        className="group block bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 hover:shadow-2xl transition-all duration-300 cursor-pointer"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video bg-zinc-800 overflow-hidden">
          {t.thumbnail ? (
            <img
              src={t.thumbnail}
              alt={t.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${brandColor}22, ${brandColor}08)` }}
            >
              <span className="text-4xl font-black opacity-20" style={{ color: brandColor }}>
                {t.brand.charAt(0)}
              </span>
            </div>
          )}

          {/* Status badge top-right */}
          <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${STATUS_BG[t.status as TrainingStatus]}`}>
            {t.status}
          </span>

          {/* Hands-on badge top-left */}
          {t.has_hands_on_lab && (
            <span className="absolute top-3 left-3 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <FlaskConical className="w-3 h-3" />
              Hands-On
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Brand + format */}
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${BRAND_BG[t.brand as TrainingBrand]}`}>
              {t.brand}
            </span>
            <span className="text-[11px] font-semibold text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded-full">
              {t.format}
            </span>
            {t.has_certificate && (
              <span className="flex items-center gap-1 text-[11px] font-semibold text-yellow-500/80 border border-yellow-500/20 px-2 py-0.5 rounded-full bg-yellow-500/5">
                <Award className="w-3 h-3" />
                Cert
              </span>
            )}
          </div>

          <h2 className="font-black text-white text-base leading-snug mb-3 line-clamp-2 group-hover:text-zinc-200 transition-colors">
            {t.title}
          </h2>

          {/* Meta */}
          <div className="space-y-1.5 text-zinc-500 text-xs">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>{formatDate(t.start_datetime)}</span>
            </div>
            {t.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span className="line-clamp-1">{t.location}</span>
              </div>
            )}
            {t.duration_hours && (
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{t.duration_hours} jam</span>
              </div>
            )}
            {t.capacity && (
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span>{t.capacity} peserta</span>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
            {t.is_free ? (
              <span className="text-sm font-bold text-emerald-400">Free</span>
            ) : t.price ? (
              <span className="text-sm font-bold text-white">
                Rp {Number(t.price).toLocaleString("id-ID")}
              </span>
            ) : (
              <span className="text-sm text-zinc-600">Contact us</span>
            )}
            <span
              className="text-xs font-semibold transition-colors"
              style={{ color: brandColor }}
            >
              View Details →
            </span>
          </div>
        </div>
      </motion.a>
    </Link>
  );
}

export default function TrainingList() {
  const search = useSearch();
  const [, setLocation] = useLocation();
  const params = new URLSearchParams(search);
  const brandParam = params.get("brand") ?? "";
  const normalizedBrand = BRANDS.find(
    (b) => b.value.toLowerCase() === brandParam.toLowerCase()
  )?.value ?? "";

  const [brand, setBrand] = useState(normalizedBrand);
  const [status, setStatus] = useState("");
  const [format, setFormat] = useState<TrainingFormat | "">("");
  const [handsOn, setHandsOn] = useState(false);
  const [list, setList] = useState<TrainingSession[]>([]);
  const [loading, setLoading] = useState(true);

  const updateBrand = (v: string) => {
    setBrand(v);
    if (v) setLocation(`/training?brand=${encodeURIComponent(v)}`);
    else setLocation("/training");
  };

  const load = useCallback(async () => {
    setLoading(true);
    const data = await apiFetchTrainingSessions({
      brand: brand || undefined,
      status: status || undefined,
      format: format || undefined,
      hands_on: handsOn || undefined,
    });
    setList(data);
    setLoading(false);
  }, [brand, status, format, handsOn]);

  useEffect(() => { void load(); }, [load]);

  return (
    <Layout>
      <div className="min-h-screen bg-zinc-950 text-white pt-8 pb-24">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Header */}
          <div className="mb-10">
            <p className="text-xs font-black tracking-[0.35em] uppercase text-zinc-500 mb-2">
              DCS Training Center
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
              Training & Workshop
            </h1>
            <p className="text-zinc-400 max-w-2xl leading-relaxed">
              Level up your networking skills with hands-on training led by experienced instructors. Available for MikroTik, Ubiquiti, and more.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-3 mb-10">
            {/* Row 1: Brand */}
            <div className="flex flex-wrap gap-2">
              {BRANDS.map((b) => (
                <Pill
                  key={b.value}
                  active={brand === b.value}
                  color={b.value ? BRAND_COLOR[b.value as TrainingBrand] : undefined}
                  onClick={() => updateBrand(b.value)}
                >
                  {b.label}
                </Pill>
              ))}
            </div>
            {/* Row 2: Status + Format + Hands-on */}
            <div className="flex flex-wrap gap-2 items-center">
              {STATUSES.map((s) => (
                <Pill
                  key={s.value}
                  active={status === s.value}
                  onClick={() => setStatus(s.value)}
                >
                  {s.label}
                </Pill>
              ))}
              <span className="w-px h-5 bg-zinc-700 mx-1" />
              {FORMATS.map((f) => (
                <Pill
                  key={f.value}
                  active={format === f.value}
                  onClick={() => setFormat(f.value as TrainingFormat | "")}
                >
                  {f.label}
                </Pill>
              ))}
              <span className="w-px h-5 bg-zinc-700 mx-1" />
              <button
                onClick={() => setHandsOn((v) => !v)}
                className={[
                  "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all",
                  handsOn
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-400"
                    : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200",
                ].join(" ")}
              >
                <FlaskConical className="w-3.5 h-3.5" />
                Hands-On Lab
              </button>
            </div>
          </div>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden animate-pulse">
                  <div className="aspect-video bg-zinc-800" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 bg-zinc-800 rounded w-1/3" />
                    <div className="h-5 bg-zinc-800 rounded w-3/4" />
                    <div className="h-3 bg-zinc-800 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : list.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-zinc-500 text-lg">
                {brand || status || format || handsOn
                  ? "No training sessions match your filters."
                  : "No training sessions available yet. Check back soon!"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((t) => (
                <TrainingCard key={t.id} t={t} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
