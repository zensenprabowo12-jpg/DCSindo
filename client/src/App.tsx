import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/homepage/home-utama";
import HomeUbiquiti from "@/pages/homepage/home-ubiquiti";
import Collection from "@/pages/collection";
import ProductDetail from "@/pages/product";
import MikrotikLandingPage from "@mikrotik/Landing";
import MikrotikDcsStoreCatalog from "@mikrotik/public/StoreCatalog";
import MikrotikDcsStoreProductDetail from "@mikrotik/public/StoreProductDetail";
import MikrotikCategoryProductPage from "@mikrotik/public/CategoryProductPage";
import MikrotikCategoryCatalogPage from "@mikrotik/public/CategoryCatalogPage";
import MikrotikDcsAdminLogin from "@mikrotik/admin/Login";
import MikrotikDcsDashboard from "@mikrotik/admin/Dashboard";
import MikrotikDcsProductForm from "@mikrotik/admin/ProductForm";
import Support from "@/pages/support";
import UbiquitiSupport from "@/pages/support/Ubiquiti";
import MikrotikSupport from "@/pages/support/Mikrotik";
import VsolSupport from "@/pages/support/Vsol";
import Cart from "@/pages/cart";
import ComingSoon from "@/pages/coming-soon";
import FirmwarePage from "@/pages/firmware"; // ✅ TAMBAHAN
import { FEATURE_FLAGS } from "@/config/featureFlags";

function RouterWouter() {
  const [location] = useLocation();
  const isMikrotikPath =
    location === "/mikrotik" ||
    location.startsWith("/mikrotik/") ||
    location === "/mikrotik-dcs" ||
    location.startsWith("/mikrotik-dcs/") ||
    location === "/support/mikrotik";

  if (FEATURE_FLAGS.disableMikrotikRoutes && isMikrotikPath) {
    return <ComingSoon />;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home-ubiquiti" component={HomeUbiquiti} />
      <Route path="/home-Mikrotik" component={ComingSoon} />
      <Route path="/home-V-SOL" component={ComingSoon} />

      <Route path="/collections/:category" component={Collection} />
      <Route path="/products/:id" component={ProductDetail} />

      <Route path="/mikrotik/shop/:id" component={MikrotikDcsStoreProductDetail} />
      <Route path="/mikrotik/shop" component={MikrotikDcsStoreCatalog} />
      <Route path="/mikrotik/categories/:category" component={MikrotikCategoryCatalogPage} />
      <Route path="/mikrotik/categories" component={MikrotikCategoryProductPage} />
      <Route path="/mikrotik" component={MikrotikLandingPage} />

      <Route path="/mikrotik-dcs/admin/new" component={MikrotikDcsProductForm} />
      <Route path="/mikrotik-dcs/admin/:id/edit" component={MikrotikDcsProductForm} />
      <Route path="/mikrotik-dcs/admin/login" component={MikrotikDcsAdminLogin} />
      <Route path="/mikrotik-dcs/admin" component={MikrotikDcsDashboard} />

      <Route path="/support" component={Support} />
      <Route path="/support/ubiquiti" component={UbiquitiSupport} />
      <Route path="/support/mikrotik" component={MikrotikSupport} />
      <Route path="/support/vsol" component={VsolSupport} />

      <Route path="/firmware" component={FirmwarePage} /> {/* ✅ WAJIB */}

      <Route path="/cart" component={Cart} />
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