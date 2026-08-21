import { lazy, Suspense } from "react";
import ChunkErrorBoundary from "@/components/ChunkErrorBoundary";
import AdminChunkFallback from "@/components/AdminChunkFallback";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/homepage/home-utama";
import HomeUbiquiti from "@/pages/homepage/home-ubiquiti";
import UbiquitiDcsStoreCatalog from "@ubiquiti/public/StoreCatalog";
import UbiquitiDcsStoreProductDetail from "@ubiquiti/public/StoreProductDetail";
import MikrotikLandingPage from "@mikrotik/Landing";
import MikrotikDcsStoreCatalog from "@mikrotik/public/StoreCatalog";
import MikrotikDcsStoreProductDetail from "@mikrotik/public/StoreProductDetail";
import MikrotikCategoryProductPage from "@mikrotik/public/CategoryProductPage";
import MikrotikCategoryCatalogPage from "@mikrotik/public/CategoryCatalogPage";
import Support from "@/pages/support";
import UbiquitiSupport from "@/pages/support/Ubiquiti";
import MikrotikSupport from "@/pages/support/Mikrotik";

import VsolSupport from "@/pages/support/Vsol";
import HomeVsol from "@/pages/homepage/home-vsol";
import VsolDcsStoreCatalog from "@vsol/public/StoreCatalog";
import VsolDcsStoreProductDetail from "@vsol/public/StoreProductDetail";
import FiberHomePage from "@/pages/fiberhome/FiberHomePage";
import FiberHomeProductDetail from "@/pages/fiberhome/FiberHomeProductDetail";
import ComingSoon from "@/pages/coming-soon";
import FirmwarePage from "@/pages/firmware";
import FirmwareBrandPage from "@/pages/firmware-brand";
import TrainingList from "@/pages/training/TrainingList";
import TrainingDetail from "@/pages/training/TrainingDetail";
import { useTrueFalse } from "@/hooks/useTrueFalse";
import CompanyProfile from "@/pages/company-profile";

// ── M-06 Tahap 2: seluruh panel admin dipisah dari bundel publik ─────────
//
// Pengunjung situs tidak pernah mengunduh kode admin. Yang paling mahal di
// antaranya adalah recharts (~243 kB minified, ~114 kB gzip) yang hanya
// dipakai VisitorLog — itu saja sudah tiga perempat dari total penghematan.
//
// Spesifier import HARUS literal statis. Rollup menganalisisnya saat build
// untuk menentukan batas chunk; template string membuat chunk gagal
// terbentuk dan diam-diam mengembalikan semuanya ke bundel utama.
//
// Sengaja TANPA manualChunks: karena hanya VisitorLog yang mengimpor
// recharts, pemecahan default Rollup menaruh pustaka itu di chunk
// VisitorLog sendiri. Menggabungkan semua admin jadi satu chunk justru
// memaksa setiap admin yang login mengunduh recharts tanpa pernah membuka
// halaman grafiknya.
const UbiquitiDcsDashboard   = lazy(() => import("@ubiquiti/admin/Dashboard"));
const UbiquitiDcsProductForm = lazy(() => import("@ubiquiti/admin/ProductForm"));
const MikrotikDcsDashboard   = lazy(() => import("@mikrotik/admin/Dashboard"));
const MikrotikDcsProductForm = lazy(() => import("@mikrotik/admin/ProductForm"));
const AdminLogin             = lazy(() => import("@admin/Login"));
const AdminDashboard         = lazy(() => import("@admin/Dashboard"));
const AdminActivityLog       = lazy(() => import("@admin/ActivityLog"));
const AdminVisitorLog        = lazy(() => import("@admin/VisitorLog"));
const AdminPeserta           = lazy(() => import("@admin/Peserta"));
const AdminUsers             = lazy(() => import("@admin/Users"));
const TrainingAdminDashboard = lazy(() => import("@admin/training/Dashboard"));
const TrainingForm           = lazy(() => import("@admin/training/TrainingForm"));
const FirmwareDashboard      = lazy(() => import("@admin/firmware/Dashboard"));
const FirmwareBrandList      = lazy(() => import("@admin/firmware/List"));
const FirmwareForm           = lazy(() => import("@admin/firmware/FirmwareForm"));
const FirmwarePopupSettings  = lazy(() => import("@admin/firmware/PopupSettings"));
const VsolDcsDashboard       = lazy(() => import("@vsol/admin/Dashboard"));
const VsolProductForm        = lazy(() => import("@vsol/admin/ProductForm"));
const FiberHomeAdmin         = lazy(() => import("@admin/fiberhome/FiberHomeAdmin"));
const FiberHomeProductForm   = lazy(() => import("@admin/fiberhome/FiberHomeProductForm"));

function RouterWouter() {
  const [location] = useLocation();
  const { disableMikrotikRoutes, disableFiberHomeRoutes } = useTrueFalse();
  const isMikrotikPath =
    location === "/mikrotik" ||
    location.startsWith("/mikrotik/") ||
    location === "/mikrotik-dcs" ||
    location.startsWith("/mikrotik-dcs/") ||
    location === "/support/mikrotik";

  if (disableMikrotikRoutes && isMikrotikPath) {
    return <ComingSoon />;
  }

  const isFiberHomePath =
    location === "/fiberhome" || location.startsWith("/fiberhome/");

  if (disableFiberHomeRoutes && isFiberHomePath) {
    return <ComingSoon />;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ubiquiti" component={HomeUbiquiti} />
      <Route path="/home-ubiquiti" component={HomeUbiquiti} />
      <Route path="/home-Mikrotik" component={ComingSoon} />
      <Route path="/home-V-SOL" component={HomeVsol} />
      <Route path="/home-vsol" component={HomeVsol} />
      <Route path="/vsol" component={HomeVsol} />

      <Route path="/ubiquiti/shop/:id" component={UbiquitiDcsStoreProductDetail} />
      <Route path="/ubiquiti/shop" component={UbiquitiDcsStoreCatalog} />

      <Route path="/mikrotik/shop/:id" component={MikrotikDcsStoreProductDetail} />
      <Route path="/mikrotik/shop" component={MikrotikDcsStoreCatalog} />
      <Route path="/mikrotik/categories/:category" component={MikrotikCategoryCatalogPage} />
      <Route path="/mikrotik/categories" component={MikrotikCategoryProductPage} />
      <Route path="/mikrotik" component={MikrotikLandingPage} />

      <Route path="/fiberhome/:sku" component={FiberHomeProductDetail} />
      <Route path="/fiberhome" component={FiberHomePage} />

      <Route path="/training/:id" component={TrainingDetail} />
      <Route path="/training" component={TrainingList} />

      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/activity-log" component={AdminActivityLog} />
      <Route path="/admin/visitor-log" component={AdminVisitorLog} />
      <Route path="/admin/peserta" component={AdminPeserta} />
      <Route path="/admin/users" component={AdminUsers} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/training/new" component={TrainingForm} />
      <Route path="/admin/training/:id/edit" component={TrainingForm} />
      <Route path="/admin/training" component={TrainingAdminDashboard} />
      <Route path="/admin/mikrotik/new" component={MikrotikDcsProductForm} />
      <Route path="/admin/mikrotik/:id/edit" component={MikrotikDcsProductForm} />
      <Route path="/admin/mikrotik" component={MikrotikDcsDashboard} />
      <Route path="/admin/ubiquiti/new" component={UbiquitiDcsProductForm} />
      <Route path="/admin/ubiquiti/:id/edit" component={UbiquitiDcsProductForm} />
      <Route path="/admin/ubiquiti" component={UbiquitiDcsDashboard} />
      <Route path="/admin/vsol/new" component={VsolProductForm} />
      <Route path="/admin/vsol/:id/edit" component={VsolProductForm} />
      <Route path="/admin/vsol" component={VsolDcsDashboard} />
      <Route path="/admin/fiberhome/new" component={FiberHomeProductForm} />
      <Route path="/admin/fiberhome/:id/edit" component={FiberHomeProductForm} />
      <Route path="/admin/fiberhome" component={FiberHomeAdmin} />
      {/* Harus di atas `/admin/firmware/:brand` agar tidak tertangkap sebagai brand. */}
      <Route path="/admin/firmware/settings" component={FirmwarePopupSettings} />
      <Route path="/admin/firmware/:brand/new" component={FirmwareForm} />
      <Route path="/admin/firmware/:brand/:id/edit" component={FirmwareForm} />
      <Route path="/admin/firmware/:brand" component={FirmwareBrandList} />
      <Route path="/admin/firmware" component={FirmwareDashboard} />

      <Route path="/support" component={Support} />
      <Route path="/support/ubiquiti" component={UbiquitiSupport} />
      <Route path="/support/mikrotik" component={MikrotikSupport} />
      <Route path="/vsol/shop/:id" component={VsolDcsStoreProductDetail} />
      <Route path="/vsol/shop" component={VsolDcsStoreCatalog} />

      <Route path="/support/vsol" component={VsolSupport} />

      <Route path="/firmware/:brand" component={FirmwareBrandPage} />
      <Route path="/firmware" component={FirmwarePage} /> {/* ✅ WAJIB */}

      <Route path="/company-profile" component={CompanyProfile} />
      <Route path="/coming-soon" component={ComingSoon} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/*
          ChunkErrorBoundary + Suspense sengaja dipasang DI SINI, bukan di
          dalam RouterWouter yang membungkus <Switch>. RouterWouter punya dua
          early return <ComingSoon /> untuk feature flag mikrotik/fiberhome;
          kalau boundary-nya di dalam, listener vite:preloadError-nya ikut
          hilang persis pada path-path itu. Di posisi ini boundary terpasang
          selama aplikasi hidup.

          Membungkus SELURUH router aman: semua route publik masih import
          statis sehingga tidak pernah suspend — fallback bertema gelap di
          bawah ini hanya bisa muncul untuk route admin.

          Toaster berada di LUAR boundary supaya notifikasi tetap tampil
          seandainya boundary sedang menampilkan layar "aplikasi diperbarui".
        */}
        <ChunkErrorBoundary>
          <Suspense fallback={<AdminChunkFallback />}>
            <RouterWouter />
          </Suspense>
        </ChunkErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;