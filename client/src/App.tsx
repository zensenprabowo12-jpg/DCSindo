import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/homepage/home-utama";
import HomeUbiquiti from "@/pages/homepage/home-ubiquiti";
import Collection from "@/pages/collection";
import ProductDetail from "@/pages/product";
import Support from "@/pages/support";
import UbiquitiSupport from "@/pages/support/Ubiquiti";
import MikrotikSupport from "@/pages/support/Mikrotik";
import VsolSupport from "@/pages/support/Vsol";
import Cart from "@/pages/cart";
import ComingSoon from "@/pages/coming-soon";
import FirmwarePage from "@/pages/firmware"; // ✅ TAMBAHAN

function RouterWouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home-ubiquiti" component={HomeUbiquiti} />
      <Route path="/home-Mikrotik" component={ComingSoon} />
      <Route path="/home-V-SOL" component={ComingSoon} />

      <Route path="/collections/:category" component={Collection} />
      <Route path="/products/:id" component={ProductDetail} />

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