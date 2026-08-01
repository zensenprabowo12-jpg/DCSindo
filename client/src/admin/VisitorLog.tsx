import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AdminNavBar from "./NavBar";
import RequireRole from "./RequireRole";

/* ─── Tipe (cermin dari server/models/visitorLogModel.ts) ─────────────── */

type VisitRow = {
  id: number;
  visitor_hash: string;
  visit_date: string;
  ip_address: string | null;
  user_agent: string | null;
  device: string | null;
  os: string | null;
  browser: string | null;
  country: string | null;
  city: string | null;
  first_path: string;
  referrer: string | null;
  is_bot: 0 | 1;
  visited_at: string;
};

type Stats = {
  range: { from: string | null; to: string | null };
  totalVisits: number;
  uniqueVisitors: number;
  perDay: { date: string; visits: number }[];
  topPages: { path: string; visits: number }[];
  topBrands: { brand: string; visits: number }[];
  topBrowsers: { browser: string; visits: number }[];
  topDevices: { device: string; visits: number }[];
  topCountries: { country: string; visits: number }[];
};

const PAGE_SIZE = 20;
const RANGES = [7, 30, 90] as const;

/* ─── Helper ──────────────────────────────────────────────────────────── */

/**
 * geoip-lite mengembalikan kode ISO-2, bukan nama negara. Peta kecil ini
 * mencakup asal trafik yang realistis; sisanya ditampilkan apa adanya
 * (lebih baik menampilkan "XX" daripada memuat 250 entri untuk satu kolom).
 */
const COUNTRY_NAMES: Record<string, string> = {
  ID: "Indonesia", SG: "Singapura", MY: "Malaysia", TH: "Thailand", VN: "Vietnam",
  PH: "Filipina", BN: "Brunei", KH: "Kamboja", LA: "Laos", MM: "Myanmar",
  US: "Amerika Serikat", CA: "Kanada", GB: "Inggris", DE: "Jerman", FR: "Prancis",
  NL: "Belanda", IT: "Italia", ES: "Spanyol", SE: "Swedia", RU: "Rusia",
  CN: "Tiongkok", HK: "Hong Kong", TW: "Taiwan", JP: "Jepang", KR: "Korea Selatan",
  IN: "India", PK: "Pakistan", BD: "Bangladesh", AU: "Australia", NZ: "Selandia Baru",
  AE: "Uni Emirat Arab", SA: "Arab Saudi", TR: "Turki", BR: "Brasil", ZA: "Afrika Selatan",
};

function countryLabel(code: string): string {
  return COUNTRY_NAMES[code.toUpperCase()] ?? code;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function localDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Rentang "N hari terakhir" termasuk hari ini. */
function rangeFor(days: number): { from: string; to: string } {
  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() - (days - 1));
  return { from: localDate(start), to: localDate(today) };
}

function parseLocal(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

/**
 * Lengkapi hari-hari kosong.
 *
 * getStats memakai GROUP BY visit_date, jadi hari tanpa kunjungan TIDAK muncul
 * di perDay. Menggambar array itu apa adanya akan menyebar 5 titik secara rata
 * di sumbu 30 hari — grafiknya jadi berbohong. Di sini deret tanggalnya
 * dipadatkan lebih dulu dengan nilai 0.
 */
function fillDays(
  perDay: { date: string; visits: number }[],
  from: string,
  to: string,
): { date: string; visits: number }[] {
  const map = new Map(perDay.map((p) => [p.date, p.visits]));
  const out: { date: string; visits: number }[] = [];
  const cur = parseLocal(from);
  const end = parseLocal(to);
  while (cur <= end) {
    const key = localDate(cur);
    out.push({ date: key, visits: map.get(key) ?? 0 });
    cur.setDate(cur.getDate() + 1);
  }
  return out;
}

function formatDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** "2026-07-31" → "31/07" untuk label sumbu. */
function shortDay(iso: string): string {
  const [, m, d] = iso.split("-");
  return `${d}/${m}`;
}

/**
 * Daftar nomor halaman yang ditampilkan, maksimal 7 slot.
 * Halaman pertama & terakhir selalu ada; sekitar halaman aktif diberi jendela
 * 3 angka, sisanya diringkas jadi "…". Jendelanya dilebarkan saat berada di
 * ujung supaya jumlah slotnya tidak menciut di halaman 1 atau terakhir.
 *
 * `current` dan hasilnya memakai nomor 1-based (yang dilihat pengguna).
 */
function pageNumbers(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  let start = Math.max(2, current - 1);
  let end = Math.min(total - 1, current + 1);
  if (current <= 3) {
    start = 2;
    end = 4;
  } else if (current >= total - 2) {
    start = total - 3;
    end = total - 1;
  }

  const out: (number | "…")[] = [1];
  if (start > 2) out.push("…");
  for (let p = start; p <= end; p++) out.push(p);
  if (end < total - 1) out.push("…");
  out.push(total);
  return out;
}

/* ─── Komponen kecil ──────────────────────────────────────────────────── */

function StatCard({
  label,
  value,
  hint,
  loading,
}: {
  label: string;
  value: number;
  hint?: string;
  loading: boolean;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4">
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</span>
        {hint && (
          <span
            title={hint}
            className="inline-flex h-4 w-4 shrink-0 cursor-help items-center justify-center rounded-full border border-zinc-700 text-[10px] font-bold text-zinc-500"
          >
            i
          </span>
        )}
      </div>
      {loading ? (
        <div className="mt-2 h-8 w-20 animate-pulse rounded bg-zinc-800" />
      ) : (
        <div className="mt-1 text-3xl font-bold tracking-tight text-white">
          {value.toLocaleString("id-ID")}
        </div>
      )}
    </div>
  );
}

function TopBox({
  title,
  subtitle,
  items,
  loading,
}: {
  title: string;
  subtitle?: string;
  items: { label: string; visits: number }[];
  loading: boolean;
}) {
  const max = items.reduce((m, i) => Math.max(m, i.visits), 0);
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      {subtitle && <p className="mt-0.5 text-[11px] text-zinc-500">{subtitle}</p>}

      {loading ? (
        <div className="mt-4 space-y-2.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 w-full animate-pulse rounded bg-zinc-800" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <p className="mt-4 text-xs text-zinc-600">Belum ada data.</p>
      ) : (
        <ul className="mt-4 space-y-2.5">
          {items.map((it) => (
            <li key={it.label}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="min-w-0 truncate text-xs text-zinc-300" title={it.label}>
                  {it.label}
                </span>
                <span className="shrink-0 font-mono text-xs text-zinc-400">{it.visits}</span>
              </div>
              {/* Bar proporsional — pembanding visual, bukan sumbu presisi. */}
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-indigo-500/70"
                  style={{ width: max > 0 ? `${(it.visits / max) * 100}%` : "0%" }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ─── Halaman ─────────────────────────────────────────────────────────── */

function AdminVisitorLogInner() {
  const [, setLocation] = useLocation();

  const [days, setDays] = useState<number>(30);
  const [hideBots, setHideBots] = useState(true);
  const [offset, setOffset] = useState(0);

  const [stats, setStats] = useState<Stats | null>(null);
  const [rows, setRows] = useState<VisitRow[] | null>(null);
  const [total, setTotal] = useState(0);
  const [err, setErr] = useState<string | null>(null);

  const { from, to } = rangeFor(days);
  const botParam = hideBots ? "" : "&includeBots=1";

  /** Ganti filter: selalu kembali ke halaman pertama (dibatch jadi satu render). */
  function changeRange(d: number) {
    setDays(d);
    setOffset(0);
  }
  function toggleBots() {
    setHideBots((v) => !v);
    setOffset(0);
  }

  useEffect(() => {
    let alive = true;
    setStats(null);
    void (async () => {
      try {
        const res = await fetch(
          `/api/admin/visitor-log/stats?from=${from}&to=${to}${botParam}`,
          { credentials: "include" },
        );
        const json = (await res.json()) as { ok: boolean; data?: Stats; message?: string };
        if (!alive) return;
        if (json.ok && json.data) {
          setStats(json.data);
        } else {
          setErr(json.message ?? "Gagal memuat statistik");
        }
      } catch {
        if (alive) setErr("Koneksi ke server gagal");
      }
    })();
    return () => {
      alive = false;
    };
  }, [from, to, botParam]);

  useEffect(() => {
    let alive = true;
    setRows(null);
    void (async () => {
      try {
        const res = await fetch(
          `/api/admin/visitor-log/list?from=${from}&to=${to}&limit=${PAGE_SIZE}&offset=${offset}${botParam}`,
          { credentials: "include" },
        );
        const json = (await res.json()) as {
          ok: boolean;
          data?: { rows: VisitRow[]; total: number };
          message?: string;
        };
        if (!alive) return;
        if (json.ok && json.data) {
          setRows(json.data.rows);
          setTotal(json.data.total);
        } else {
          setErr(json.message ?? "Gagal memuat daftar kunjungan");
          setRows([]);
        }
      } catch {
        if (!alive) return;
        setErr("Koneksi ke server gagal");
        setRows([]);
      }
    })();
    return () => {
      alive = false;
    };
  }, [from, to, botParam, offset]);

  const chartData = stats ? fillDays(stats.perDay, from, to) : [];
  const todayKey = localDate(new Date());
  const todayVisits = stats?.perDay.find((p) => p.date === todayKey)?.visits ?? 0;
  const avgPerDay = stats ? Math.round(stats.totalVisits / days) : 0;

  const pageStart = total === 0 ? 0 : offset + 1;
  const pageEnd = Math.min(offset + PAGE_SIZE, total);
  // Halaman diturunkan dari offset — offset tetap satu-satunya sumber kebenaran.
  const page = Math.floor(offset / PAGE_SIZE);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminNavBar />

      <div className="container mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => setLocation("/admin")}
            className="mb-3 inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Kembali ke Dashboard
          </button>
          <h1 className="text-2xl font-bold tracking-tight text-white">Statistik Pengunjung</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Kunjungan ke website publik — satu pengunjung dihitung sekali per hari
          </p>
        </div>

        {err && (
          <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-sm text-red-400">
            {err}
          </div>
        )}

        {/* a. KONTROL — target besar, di atas, dalam jangkauan (Fitts) */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3">
          <div className="inline-flex rounded-xl border border-zinc-800 bg-zinc-950 p-1">
            {RANGES.map((d) => (
              <button
                key={d}
                onClick={() => changeRange(d)}
                className={[
                  "h-10 rounded-lg px-5 text-sm font-semibold transition-colors",
                  days === d
                    ? "bg-indigo-600 text-white"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200",
                ].join(" ")}
              >
                {d} hari
              </button>
            ))}
          </div>

          <button
            onClick={toggleBots}
            aria-pressed={hideBots}
            className="inline-flex h-10 items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
          >
            <span
              className={[
                "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                hideBots ? "bg-indigo-600" : "bg-zinc-700",
              ].join(" ")}
            >
              <span
                className={[
                  "absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all",
                  hideBots ? "left-[18px]" : "left-0.5",
                ].join(" ")}
              />
            </span>
            Sembunyikan bot
          </button>
        </div>

        {/* b. KARTU RINGKASAN */}
        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard
            label="Total Kunjungan"
            value={stats?.totalVisits ?? 0}
            loading={stats == null}
            hint="Satu kunjungan = satu pengunjung pada satu hari, bukan jumlah halaman yang dibuka."
          />
          <StatCard
            label="Pengunjung Unik"
            value={stats?.uniqueVisitors ?? 0}
            loading={stats == null}
            hint="Pengunjung berbeda pada rentang ini; satu orang yang datang 3 hari dihitung 1."
          />
          <StatCard label="Kunjungan Hari Ini" value={todayVisits} loading={stats == null} />
          <StatCard
            label="Rata-rata / Hari"
            value={avgPerDay}
            loading={stats == null}
            hint={`Total kunjungan dibagi ${days} hari.`}
          />
        </div>

        {/* c. GRAFIK TREN */}
        <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <h2 className="text-sm font-semibold text-white">Tren Kunjungan</h2>
          <p className="mt-0.5 text-[11px] text-zinc-500">{days} hari terakhir</p>

          <div className="mt-4 h-64">
            {stats == null ? (
              <div className="h-full w-full animate-pulse rounded-xl bg-zinc-800/60" />
            ) : stats.totalVisits === 0 ? (
              <div className="flex h-full items-center justify-center text-sm text-zinc-600">
                Belum ada data kunjungan pada rentang ini.
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                {/* ≤30 hari: batang (jumlah harian diskrit lebih terbaca).
                    90 hari: garis, karena batangnya jadi terlalu tipis. */}
                {days <= 30 ? (
                  <BarChart data={chartData} margin={{ top: 4, right: 8, bottom: 0, left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickFormatter={shortDay}
                      tick={{ fill: "#71717a", fontSize: 11 }}
                      axisLine={{ stroke: "#27272a" }}
                      tickLine={false}
                    />
                    <YAxis
                      allowDecimals={false}
                      tick={{ fill: "#71717a", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      cursor={{ fill: "#ffffff08" }}
                      contentStyle={{
                        background: "#18181b",
                        border: "1px solid #3f3f46",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                      labelStyle={{ color: "#a1a1aa" }}
                      labelFormatter={(v) => `Tanggal ${shortDay(String(v))}`}
                      formatter={(v: number) => [v, "Kunjungan"]}
                    />
                    <Bar dataKey="visits" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                ) : (
                  <LineChart data={chartData} margin={{ top: 4, right: 8, bottom: 0, left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickFormatter={shortDay}
                      interval={Math.floor(chartData.length / 10)}
                      tick={{ fill: "#71717a", fontSize: 11 }}
                      axisLine={{ stroke: "#27272a" }}
                      tickLine={false}
                    />
                    <YAxis
                      allowDecimals={false}
                      tick={{ fill: "#71717a", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#18181b",
                        border: "1px solid #3f3f46",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                      labelStyle={{ color: "#a1a1aa" }}
                      labelFormatter={(v) => `Tanggal ${shortDay(String(v))}`}
                      formatter={(v: number) => [v, "Kunjungan"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="visits"
                      stroke="#6366f1"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* d. KOTAK TERPOPULER — memecah rincian kategori jadi potongan kecil (Miller) */}
        {/* 5 kotak: 1 kolom di ponsel, 2+2+1 di sm, 3+2 di lg, satu baris penuh di xl.
            Satu baris di xl menjaga kedekatan Halaman+Brand (apa yang dilihat)
            terpisah dari Browser/Device/Lokasi (siapa & dari mana). */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <TopBox
            title="Halaman Terpopuler"
            subtitle="Halaman awal kunjungan pertama"
            loading={stats == null}
            items={(stats?.topPages ?? []).map((p) => ({ label: p.path, visits: p.visits }))}
          />
          <TopBox
            title="Brand Terpopuler"
            subtitle="Brand dari halaman awal"
            loading={stats == null}
            items={(stats?.topBrands ?? []).map((b) => ({ label: b.brand, visits: b.visits }))}
          />
          <TopBox
            title="Browser Terpopuler"
            loading={stats == null}
            items={(stats?.topBrowsers ?? []).map((b) => ({ label: b.browser, visits: b.visits }))}
          />
          <TopBox
            title="Device Terpopuler"
            loading={stats == null}
            items={(stats?.topDevices ?? []).map((d) => ({ label: d.device, visits: d.visits }))}
          />
          <TopBox
            title="Lokasi Terpopuler"
            subtitle="Berdasarkan alamat IP"
            loading={stats == null}
            items={(stats?.topCountries ?? []).map((c) => ({
              label: countryLabel(c.country),
              visits: c.visits,
            }))}
          />
        </div>

        {/* e. TABEL DETAIL */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-zinc-800 px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold text-white">Detail Kunjungan</h2>
              <p className="mt-0.5 text-[11px] text-zinc-500">
                Satu baris = satu pengunjung pada satu hari (kunjungan pertamanya), bukan riwayat
                tiap request.
              </p>
            </div>
            {rows != null && total > 0 && (
              <span className="text-xs text-zinc-500">
                Menampilkan {pageStart}–{pageEnd} dari {total.toLocaleString("id-ID")}
              </span>
            )}
          </div>

          {rows == null ? (
            <div className="space-y-3 p-6">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 w-full animate-pulse rounded bg-zinc-800" />
              ))}
            </div>
          ) : rows.length === 0 ? (
            <div className="p-10 text-center text-sm text-zinc-500">
              Belum ada data kunjungan pada rentang ini.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 text-left text-xs uppercase tracking-wider text-zinc-500">
                    <th className="px-4 py-3 font-medium">Waktu</th>
                    <th className="px-4 py-3 font-medium">IP</th>
                    <th className="px-4 py-3 font-medium">Device</th>
                    <th className="px-4 py-3 font-medium">Browser</th>
                    <th className="px-4 py-3 font-medium">Lokasi</th>
                    <th className="px-4 py-3 font-medium">Halaman Awal</th>
                    <th className="px-4 py-3 font-medium">Referrer</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r.id}
                      className="border-b border-zinc-800/60 last:border-0 hover:bg-zinc-800/40"
                    >
                      <td className="whitespace-nowrap px-4 py-3 text-zinc-300">
                        {formatDateTime(r.visited_at)}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-zinc-400">
                        <span className="inline-flex items-center gap-1.5">
                          {r.ip_address ?? "—"}
                          {r.is_bot === 1 && (
                            <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[10px] font-bold uppercase text-amber-400">
                              bot
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-zinc-400">
                        {r.device ?? "—"}
                        {r.os && <span className="ml-1 text-zinc-600">· {r.os}</span>}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-zinc-400">
                        {r.browser ?? "—"}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-zinc-400">
                        {r.country ? (
                          <>
                            {countryLabel(r.country)}
                            {r.city && <span className="ml-1 text-zinc-600">· {r.city}</span>}
                          </>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td
                        className="max-w-[220px] truncate px-4 py-3 text-xs text-zinc-300"
                        title={r.first_path}
                      >
                        {r.first_path}
                      </td>
                      <td
                        className="max-w-[200px] truncate px-4 py-3 text-xs text-zinc-500"
                        title={r.referrer ?? ""}
                      >
                        {r.referrer ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Paginasi — target nyaman, sejajar di tepi bawah (Fitts) */}
          {rows != null && total > PAGE_SIZE && (
            <div className="flex items-center justify-between gap-3 border-t border-zinc-800 px-5 py-4">
              <button
                onClick={() => setOffset((o) => Math.max(0, o - PAGE_SIZE))}
                disabled={offset === 0}
                className="h-10 rounded-xl border border-zinc-800 bg-zinc-950 px-5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Sebelumnya
              </button>
              {/* Di bawah `sm` nomor halaman disembunyikan — 7 tombol + Prev/Next
                  melimpah di layar ~360px; teks ringkas ini yang menggantikannya. */}
              <span className="text-xs text-zinc-600 sm:hidden">
                Halaman {page + 1} dari {totalPages}
              </span>

              <div className="hidden items-center gap-1.5 sm:flex">
                {pageNumbers(page + 1, totalPages).map((p, i) =>
                  p === "…" ? (
                    <span key={`gap-${i}`} className="px-1 text-sm text-zinc-600">
                      …
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setOffset((p - 1) * PAGE_SIZE)}
                      aria-current={p === page + 1 ? "page" : undefined}
                      className={[
                        "h-10 min-w-[2.5rem] rounded-xl border px-3 text-sm font-medium transition-colors",
                        p === page + 1
                          ? "border-indigo-500 bg-indigo-600 text-white"
                          : "border-zinc-800 bg-zinc-950 text-zinc-300 hover:bg-zinc-800",
                      ].join(" ")}
                    >
                      {p}
                    </button>
                  ),
                )}
              </div>
              <button
                onClick={() => setOffset((o) => o + PAGE_SIZE)}
                disabled={offset + PAGE_SIZE >= total}
                className="h-10 rounded-xl border border-zinc-800 bg-zinc-950 px-5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Berikutnya →
              </button>
            </div>
          )}
        </div>

        <p className="mt-6 text-xs text-zinc-600">
          Data disimpan maksimal 3 bulan, lalu dihapus otomatis.
        </p>
      </div>
    </div>
  );
}

export default function AdminVisitorLog() {
  return (
    <RequireRole roles={["admin"]}>
      <AdminVisitorLogInner />
    </RequireRole>
  );
}
