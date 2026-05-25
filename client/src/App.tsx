import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import UbiquitiDcsDashboard from "@ubiquiti/admin/Dashboard";
import UbiquitiDcsProductForm from "@ubiquiti/admin/ProductForm";
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
import MikrotikDcsDashboard from "@mikrotik/admin/Dashboard";
import MikrotikDcsProductForm from "@mikrotik/admin/ProductForm";
import Support from "@/pages/support";
import UbiquitiSupport from "@/pages/support/Ubiquiti";
import MikrotikSupport from "@/pages/support/Mikrotik";
import AdminLogin from "@admin/Login";
import AdminDashboard from "@admin/Dashboard";
import TrainingAdminDashboard from "@admin/training/Dashboard";
import TrainingForm from "@admin/training/TrainingForm";

import VsolSupport from "@/pages/support/Vsol";
import HomeVsol from "@/pages/homepage/home-vsol";
import VsolDcsStoreCatalog from "@vsol/public/StoreCatalog";
import VsolDcsStoreProductDetail from "@vsol/public/StoreProductDetail";
import VsolDcsDashboard from "@vsol/admin/Dashboard";
import VsolProductForm from "@vsol/admin/ProductForm";
import ComingSoon from "@/pages/coming-soon";
import FirmwarePage from "@/pages/firmware";
import TrainingList from "@/pages/training/TrainingList";
import TrainingDetail from "@/pages/training/TrainingDetail";
import { useTrueFalse } from "@/hooks/useTrueFalse";
import CompanyProfile from "@/pages/company-profile";

function RouterWouter() {
  const [location] = useLocation();
  const { disableMikrotikRoutes } = useTrueFalse();
  const isMikrotikPath =
    location === "/mikrotik" ||
    location.startsWith("/mikrotik/") ||
    location === "/mikrotik-dcs" ||
    location.startsWith("/mikrotik-dcs/") ||
    location === "/support/mikrotik";

  if (disableMikrotikRoutes && isMikrotikPath) {
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

      <Route path="/training/:id" component={TrainingDetail} />
      <Route path="/training" component={TrainingList} />

      <Route path="/admin/login" component={AdminLogin} />
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

      <Route path="/support" component={Support} />
      <Route path="/support/ubiquiti" component={UbiquitiSupport} />
      <Route path="/support/mikrotik" component={MikrotikSupport} />
      <Route path="/vsol/shop/:id" component={VsolDcsStoreProductDetail} />
      <Route path="/vsol/shop" component={VsolDcsStoreCatalog} />

      <Route path="/support/vsol" component={VsolSupport} />

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
        <RouterWouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;