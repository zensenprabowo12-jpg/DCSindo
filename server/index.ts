import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import session from "express-session";
import createMemoryStore from "memorystore";
import expressMySQLSession from "express-mysql-session";
import { verifyMysqlOnStartup } from "./config/db";
import { getMysqlConnectionOptions } from "./config/mysqlPool";
import { ensureUsersTable } from "./models/userModel";
import { ensureVisitorLogTable } from "./models/visitorLogModel";
import { startVisitorLogPruneJob } from "./jobs/visitorLogPrune";
import { visitorTracker, preloadGeoip } from "./middleware/visitorTracker";
import { correlationId, errorSanitizer } from "./middleware/errorSanitizer";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

/**
 * Apache reverse-proxy berjalan di loopback, di depan Node.
 * 'loopback' = hanya percaya X-Forwarded-For yang datang dari 127.0.0.1/::1.
 * JANGAN pakai `true` — itu mempercayai semua hop, sehingga siapa pun bisa
 * memalsukan IP-nya lewat header X-Forwarded-For.
 *
 * Efek samping: req.protocol/req.secure ikut menghormati X-Forwarded-Proto.
 */
app.set("trust proxy", "loopback");

/**
 * Header keamanan dasar untuk SELURUH response (H-06 Tahap 1).
 *
 * Dipasang paling awal supaya header ikut menempel pada response yang
 * dihasilkan express.static maupun res.sendFile di serveStatic — jadi aset SPA
 * (bundle JS, CSS, index.html) ikut terlindungi, bukan hanya /uploads yang sudah
 * mendapat nosniff di Step 0.
 *
 * CSP (Tahap 2) dan HSTS (di layer Apache) sengaja BELUM ada di sini.
 */
app.disable("x-powered-by");

app.use((_req, res, next) => {
  // Browser tidak boleh menebak tipe konten. Inti pertahanan untuk file
  // upload berekstensi menyesatkan; sekarang berlaku site-wide.
  res.setHeader("X-Content-Type-Options", "nosniff");

  // DENY, bukan SAMEORIGIN: tidak ada satu pun halaman kita yang di-iframe oleh
  // halaman kita sendiri (12 iframe di client semuanya menunjuk YouTube atau
  // gpt.distributor.ui-apps.com), jadi DENY menutup clickjacking panel admin
  // tanpa mematikan apa pun. Digantikan frame-ancestors saat CSP masuk.
  res.setHeader("X-Frame-Options", "DENY");

  // Kirim origin saja saat lintas situs, supaya path seperti /admin/vsol/12/edit
  // tidak bocor ke YouTube maupun Google Fonts lewat header Referer.
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  // Hanya API perangkat yang aplikasi ini tidak pernah pakai. SENGAJA tidak
  // membatasi fullscreen, autoplay, encrypted-media, picture-in-picture,
  // accelerometer, gyroscope, dan clipboard: ketujuhnya diminta eksplisit lewat
  // atribut allow / allowFullScreen pada iframe YouTube dan UniFi GPT, dan
  // Permissions-Policy adalah plafon — iframe tidak bisa meminta balik.
  res.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), midi=(), display-capture=()",
  );

  next();
});

/**
 * Session store persisten di MySQL (express-mysql-session).
 * Tabel `sessions` dibuat otomatis (createDatabaseTable: true).
 * Sesi tidak hilang saat pm2 restart.
 * Fallback ke MemoryStore (RAM) hanya bila konfigurasi DB belum lengkap.
 */
function buildSessionStore(): session.Store {
  const opts = getMysqlConnectionOptions();
  if (opts) {
    const MySQLStore = expressMySQLSession(session);
    // Catatan: JANGAN teruskan namedPlaceholders ke store ini (library pakai `?`).
    return new MySQLStore({
      host: opts.host as string | undefined,
      port: opts.port as number | undefined,
      user: opts.user as string | undefined,
      password: opts.password as string | undefined,
      database: opts.database as string | undefined,
      socketPath: opts.socketPath as string | undefined,
      createDatabaseTable: true,
      // bersihkan sesi kedaluwarsa tiap 15 menit
      checkExpirationInterval: 15 * 60 * 1000,
      // selaras dengan cookie.maxAge (7 hari, dalam ms)
      expiration: 7 * 24 * 60 * 60 * 1000,
    });
  }
  console.warn("[session] Konfigurasi MySQL belum lengkap — fallback ke MemoryStore (sesi hilang saat restart).");
  const MemoryStore = createMemoryStore(session);
  return new MemoryStore({ checkPeriod: 86_400_000 });
}

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

/** Session cookie untuk admin MikroTik DCS (login sederhana) */
app.use(
  session({
    name: "mikrotikdcs.sid",
    secret: process.env.SESSION_SECRET ?? "dcs-mikrotik-dcs-dev-change-in-prod",
    resave: false,
    saveUninitialized: false,
    store: buildSessionStore(),
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "lax",
    },
  }),
);

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

// Pencatat pengunjung — sesudah body parser & session, sebelum registerRoutes
// dan serveStatic/setupVite, supaya melihat setiap request halaman yang masuk.
app.use(visitorTracker);

// H-04: sanitasi body response 5xx sebelum sampai ke browser. Dipasang sebelum
// registerRoutes supaya berlaku untuk SELURUH route dan error handler di bawah.
app.use(errorSanitizer);

(async () => {
  await registerRoutes(httpServer, app);
  await verifyMysqlOnStartup();
  // Pastikan tabel users ada + seed admin awal dari .env (sekali, idempotent).
  try {
    await ensureUsersTable();
  } catch (e) {
    console.error("[users] ensureUsersTable gagal saat startup:", (e as Error).message);
  }
  // Tabel visitor_log + job retensi 3 bulan (idempotent). Dibuat di startup agar
  // tabelnya sudah ada sebelum pengunjung pertama datang, bukan saat request.
  try {
    await ensureVisitorLogTable();
    startVisitorLogPruneJob();
    preloadGeoip();
  } catch (e) {
    console.error("[visitorLog] setup saat startup gagal:", (e as Error).message);
  }

  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // Sertakan correlation ID: user hanya melihat `ref`, admin mencocokkannya di log PM2.
    console.error(
      `Internal Server Error [ref ${correlationId(res)}] ${_req.method} ${_req.originalUrl}:`,
      err,
    );

    if (res.headersSent) {
      return next(err);
    }

    return res.status(status).json({ message });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "8080", 10);
  httpServer.on("error", (err: NodeJS.ErrnoException) => {
    console.error("[server] Gagal bind port:", err.message);
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${port} sudah dipakai. Hentikan proses lain atau set PORT lain di .env`);
    }
    process.exit(1);
  });
  // Upload firmware besar (~500 MB) bisa >5 menit di koneksi lambat.
  // Default Node 20: requestTimeout 300_000 ms → socket diputus di tengah upload.
  httpServer.requestTimeout = 30 * 60 * 1000; // 30 menit
  httpServer.headersTimeout = 65 * 1000;
  // reusePort tidak didukung dengan baik di Windows → listen bisa gagal → ERR_CONNECTION_REFUSED
  httpServer.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();
