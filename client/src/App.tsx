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
import AlgcomSupport from "@/pages/support/Algcom";
import VsolSupport from "@/pages/support/Vsol";
import Cart from "@/pages/cart";
import ComingSoon from "@/pages/coming-soon";

// 🔥 TAMBAHAN REACT ROUTER (KHUSUS MIKROTIK DETAIL)
import { BrowserRouter, Routes, Route as ReactRoute } from "react-router-dom";
import MikrotikPage from "../../mikrotik/mikrotik";
import DetailProduk from "../../mikrotik/detailproduct";

function RouterWouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home-ubiquiti" component={HomeUbiquiti} />
      <Route path="/home-Mikrotik" component={ComingSoon} />
      <Route path="/home-ALGcom" component={ComingSoon} />
      <Route path="/home-V-SOL" component={ComingSoon} />
      <Route path="/collections/:category" component={Collection} />
      <Route path="/products/:id" component={ProductDetail} />
      <Route path="/support" component={Support} />
      <Route path="/support/ubiquiti" component={UbiquitiSupport} />
      <Route path="/support/mikrotik" component={MikrotikSupport} />
      <Route path="/support/algcom" component={AlgcomSupport} />
      <Route path="/support/vsol" component={VsolSupport} />
      <Route path="/cart" component={Cart} />
      <Route path="/coming-soon" component={ComingSoon} />
      <Route component={NotFound} />
    </Switch>
  );
}

function MikrotikRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <ReactRoute path="/mikrotik" element={<MikrotikPage />} />
        <ReactRoute path="/mikrotik/:id" element={<DetailProduk />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        {/* Wouter routes (utama) */}
        <RouterWouter />

        {/* React Router khusus Mikrotik */}
        <MikrotikRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;