import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, MapPin, Clock, Users, FlaskConical,
  Award, BookOpen, User, ArrowLeft, CheckCircle2,
  ExternalLink, QrCode, X, ChevronLeft, ChevronRight,
  UserPlus, Loader2, Images,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DCS_WHATSAPP_PRIMARY, DCS_EMAIL } from "@/lib/contact";
import {
  apiFetchTrainingSession,
  apiRegisterTraining,
  apiTrainingAvailability,
  BRAND_BG,
  BRAND_COLOR,
  formatDatetime,
  STATUS_BG,
  type TrainingAvailability,
  type TrainingBrand,
  type TrainingGalleryItem,
  type TrainingSessionDetail,
  type TrainingStatus,
} from "./types";

function RegisterCard({ trainingId, accent }: { trainingId: number; accent: string }) {
  const [avail, setAvail] = useState<TrainingAvailability | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function loadAvail() {
    const a = await apiTrainingAvailability(trainingId);
    setAvail(a);
  }

  useEffect(() => {
    void loadAvail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trainingId]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErr("Nama, email, dan nomor HP wajib diisi.");
      return;
    }
    setSubmitting(true);
    const r = await apiRegisterTraining(trainingId, {
      full_name: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim() || undefined,
    });
    setSubmitting(false);
    if (r.ok) {
      setDone(true);
    } else {
      setErr(r.message ?? "Pendaftaran gagal.");
      void loadAvail(); // refresh kuota (mis. jika baru penuh)
    }
  }

  const closed = avail != null && !avail.open;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-1">
        <UserPlus className="w-5 h-5" style={{ color: accent }} />
        <h3 className="font-black text-base">Daftar Training</h3>
      </div>

      {/* Info kuota */}
      {avail && avail.capacity != null && (
        <p className="text-xs text-zinc-400 mb-4">
          {avail.remaining != null && avail.remaining > 0
            ? <>Sisa <span className="font-bold text-white">{avail.remaining}</span> dari {avail.capacity} kursi</>
            : <span className="text-red-400 font-semibold">Kuota penuh</span>}
        </p>
      )}
      {avail && avail.capacity == null && !closed && (
        <p className="text-xs text-zinc-500 mb-4">Isi data di bawah untuk mendaftar.</p>
      )}

      {done ? (
        <div className="flex flex-col items-center text-center gap-2 py-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          <p className="text-white font-semibold">Pendaftaran berhasil!</p>
          <p className="text-zinc-400 text-sm">Tim kami akan menghubungi Anda untuk konfirmasi.</p>
        </div>
      ) : closed ? (
        <div className="rounded-xl bg-zinc-800/60 border border-zinc-700 px-4 py-3 text-sm text-zinc-400">
          {avail?.status === "Completed"
            ? "Pendaftaran ditutup — training sudah selesai."
            : "Kuota penuh. Pendaftaran ditutup."}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
          {err && (
            <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              {err}
            </div>
          )}
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nama lengkap *"
            className="w-full h-10 rounded-lg bg-zinc-800 border border-zinc-700 text-sm px-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email *"
            className="w-full h-10 rounded-lg bg-zinc-800 border border-zinc-700 text-sm px-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputMode="tel"
            placeholder="No. HP / WhatsApp *"
            className="w-full h-10 rounded-lg bg-zinc-800 border border-zinc-700 text-sm px-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Perusahaan / Instansi (opsional)"
            className="w-full h-10 rounded-lg bg-zinc-800 border border-zinc-700 text-sm px-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <Button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full font-bold gap-2"
            style={{ backgroundColor: accent, color: "#000" }}
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
            {submitting ? "Mengirim…" : "Daftar Sekarang"}
          </Button>
        </form>
      )}
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: TrainingGalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2"
        >
          <X className="w-6 h-6" />
        </button>
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-2 bg-black/40 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-2 bg-black/40 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl max-h-[85vh] mx-16"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={img.image_path}
            alt={img.caption ?? ""}
            className="max-w-full max-h-[80vh] rounded-xl object-contain"
          />
          {img.caption && (
            <p className="text-center text-zinc-400 text-sm mt-3">{img.caption}</p>
          )}
          <p className="text-center text-zinc-600 text-xs mt-1">{index + 1} / {images.length}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-4 h-4" aria-hidden fill="currentColor">
      <path d="M19.11 17.27c-.28-.14-1.64-.8-1.9-.9s-.44-.14-.62.14-.72.9-.88 1.08-.32.21-.6.07a7.83 7.83 0 0 1-2.3-1.41 8.59 8.59 0 0 1-1.6-1.99c-.17-.28 0-.43.13-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46s.05-.35-.02-.5c-.07-.14-.62-1.5-.85-2.06-.22-.53-.44-.46-.62-.47h-.53c-.18 0-.46.07-.7.35s-.92.9-.92 2.19.95 2.54 1.08 2.72c.14.18 1.86 2.84 4.52 3.98.63.27 1.13.44 1.52.56.64.2 1.22.17 1.68.1.51-.08 1.64-.66 1.87-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.2-.53-.35zM16.02 3C8.84 3 3 8.8 3 15.94c0 2.28.61 4.5 1.77 6.44L3 29l6.83-1.78a13.08 13.08 0 0 0 6.19 1.56C23.2 28.78 29 22.99 29 15.94 29 8.8 23.2 3 16.02 3zm0 23.52c-2.02 0-3.99-.55-5.7-1.6l-.4-.24-4.05 1.06 1.08-3.95-.26-.4a10.55 10.55 0 0 1-1.64-5.45c0-5.86 4.8-10.63 10.97-10.63 6.06 0 10.98 4.77 10.98 10.63 0 5.86-4.92 10.58-10.98 10.58z" />
    </svg>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-zinc-800 last:border-0">
      <span className="mt-0.5 text-zinc-500 shrink-0">{icon}</span>
      <div>
        <p className="text-xs text-zinc-500 mb-0.5">{label}</p>
        <div className="text-sm font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}

export default function TrainingDetail() {
  const [match, params] = useRoute("/training/:id");
  const id = match ? parseInt(String(params?.id ?? ""), 10) : NaN;

  const [d, setD] = useState<TrainingSessionDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!match || !Number.isFinite(id)) { setLoading(false); return; }
    void (async () => {
      setLoading(true);
      const data = await apiFetchTrainingSession(id);
      if (data) setD(data);
      else setErr("Training session not found.");
      setLoading(false);
    })();
  }, [id, match]);

  if (!match) return null;

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-zinc-600 border-t-white animate-spin" />
        </div>
      </Layout>
    );
  }

  if (err || !d) {
    return (
      <Layout>
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-4 text-zinc-400">
          <p>{err ?? "Not found."}</p>
          <Link href="/training">
            <a className="text-sm underline">← Kembali ke Training</a>
          </Link>
        </div>
      </Layout>
    );
  }

  const brandColor = BRAND_COLOR[d.brand as TrainingBrand];

  // Build WhatsApp message
  const waMsg = encodeURIComponent(`Halo DCS, saya ingin mengetahui lebih lanjut tentang training "${d.title}". Mohon informasinya.`);
  const waUrl = `${DCS_WHATSAPP_PRIMARY}?text=${waMsg}`;

  const gallery = d.gallery ?? [];

  return (
    <Layout>
      <div className="min-h-screen bg-zinc-950 text-white">

        {lightboxIdx !== null && gallery.length > 0 && (
          <Lightbox
            images={gallery}
            index={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
            onPrev={() => setLightboxIdx((i) => (i! - 1 + gallery.length) % gallery.length)}
            onNext={() => setLightboxIdx((i) => (i! + 1) % gallery.length)}
          />
        )}

        {/* Hero */}
        <div className="relative">
          {/* Background accent */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 0%, ${brandColor} 0%, transparent 70%)` }}
          />

          {/* Thumbnail as visible background */}
          {d.thumbnail && (
            <div className="absolute inset-0 overflow-hidden">
              <img src={d.thumbnail} alt="" className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/70 to-zinc-950" />
            </div>
          )}

          <div className="relative container mx-auto px-4 max-w-5xl pt-10 pb-12">
            {/* Back button */}
            <Link href="/training">
              <a className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm mb-8">
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Training
              </a>
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${BRAND_BG[d.brand as TrainingBrand]}`}>
                {d.brand}
              </span>
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${STATUS_BG[d.status as TrainingStatus]}`}>
                {d.status}
              </span>
              <span className="text-xs font-semibold text-zinc-400 border border-zinc-700 px-3 py-1 rounded-full">
                {d.format}
              </span>
              {d.has_hands_on_lab && (
                <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <FlaskConical className="w-3 h-3" />
                  Hands-On Lab
                </span>
              )}
              {d.has_certificate && (
                <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                  <Award className="w-3 h-3" />
                  Bersertifikat
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight">
              {d.title}
            </h1>

            {d.description && (
              <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl">
                {d.description}
              </p>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="container mx-auto px-4 max-w-5xl pb-24">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Left: Syllabus */}
            <div className="lg:col-span-2 space-y-8">

              {d.syllabus.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <BookOpen className="w-5 h-5" style={{ color: brandColor }} />
                    <h2 className="text-lg font-black">Materi Training</h2>
                  </div>
                  <ul className="space-y-3">
                    {d.syllabus.map((s, i) => (
                      <li key={s.id} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: brandColor }}
                        />
                        <span className="text-zinc-300 text-sm leading-relaxed">{s.item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Instructor */}
              {d.instructor_name && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5" style={{ color: brandColor }} />
                    <h2 className="text-lg font-black">Instruktur</h2>
                  </div>
                  <p className="text-white font-semibold text-base">{d.instructor_name}</p>
                  {d.instructor_contact && (
                    <p className="text-zinc-400 text-sm mt-1">{d.instructor_contact}</p>
                  )}
                </motion.div>
              )}

              {/* Dokumentasi / Galeri Foto */}
              {(gallery.length > 0 || d.status === "Completed") && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                >
                  <h2 className="text-lg font-black mb-4">
                    {d.status === "Completed" ? "Dokumentasi" : "Galeri Foto"}
                  </h2>
                  {gallery.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {gallery.map((img, idx) => (
                        <button
                          key={img.id}
                          type="button"
                          onClick={() => setLightboxIdx(idx)}
                          className="relative aspect-square rounded-xl overflow-hidden border border-zinc-700 hover:border-zinc-500 transition-colors group"
                        >
                          <img
                            src={img.image_path}
                            alt={img.caption ?? `Foto ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center gap-2 py-10 text-zinc-500">
                      <Images className="w-8 h-8 opacity-30" />
                      <p className="text-sm">Dokumentasi segera hadir.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Right: Info card + CTA */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sticky top-24"
              >
                <h3 className="font-black text-base mb-1">Detail Training</h3>
                <div className="mb-4">
                  {d.is_free ? (
                    <span className="text-2xl font-black text-emerald-400">Gratis</span>
                  ) : d.price ? (
                    <span className="text-2xl font-black text-white">
                      Rp {Number(d.price).toLocaleString("id-ID")}
                    </span>
                  ) : (
                    <span className="text-zinc-400 text-sm">Contact us for pricing</span>
                  )}
                </div>

                <div className="divide-y divide-zinc-800/60">
                  <InfoRow
                    icon={<Calendar className="w-4 h-4" />}
                    label="Mulai"
                    value={formatDatetime(d.start_datetime)}
                  />
                  <InfoRow
                    icon={<Calendar className="w-4 h-4" />}
                    label="Selesai"
                    value={formatDatetime(d.end_datetime)}
                  />
                  {d.duration_hours && (
                    <InfoRow
                      icon={<Clock className="w-4 h-4" />}
                      label="Durasi"
                      value={`${d.duration_hours} jam`}
                    />
                  )}
                  {d.location && (
                    <InfoRow
                      icon={<MapPin className="w-4 h-4" />}
                      label="Lokasi"
                      value={d.location}
                    />
                  )}
                  {d.capacity && (
                    <InfoRow
                      icon={<Users className="w-4 h-4" />}
                      label="Kapasitas"
                      value={`${d.capacity} peserta`}
                    />
                  )}
                </div>

                {/* CTA buttons */}
                <div className="mt-6 space-y-3">
                  <a href={waUrl} target="_blank" rel="noreferrer" className="block">
                    <Button
                      className="w-full rounded-full font-bold gap-2"
                      style={{ backgroundColor: brandColor, color: "#000" }}
                    >
                      <WhatsAppIcon />
                      Hubungi via WhatsApp
                    </Button>
                  </a>
                  <a href={DCS_EMAIL} className="block">
                    <Button variant="outline" className="w-full rounded-full font-bold border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500">
                      Kirim Email
                    </Button>
                  </a>

                  {/* Custom link */}
                  {d.custom_link_url && (
                    <a
                      href={d.custom_link_url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-zinc-600 text-zinc-300 hover:text-white hover:border-zinc-400 text-sm font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                      {d.custom_link_label || "Info Lebih Lanjut"}
                    </a>
                  )}
                </div>

                {/* QR Code */}
                {d.qr_image && (
                  <div className="mt-5 pt-5 border-t border-zinc-800 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-1">
                      <QrCode className="w-3.5 h-3.5" />
                      <span>Scan for more info</span>
                    </div>
                    <img
                      src={d.qr_image}
                      alt="QR Code"
                      className="w-32 h-32 rounded-xl border border-zinc-700 bg-white object-contain p-1"
                    />
                  </div>
                )}
              </motion.div>

              {/* Form pendaftaran — hanya untuk training yang belum selesai */}
              {d.status !== "Completed" && (
                <RegisterCard trainingId={d.id} accent={brandColor} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
