import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function Cart() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-5xl font-black italic uppercase mb-4">Coming Soon</h1>
        <p className="text-xl text-muted-foreground max-w-md mb-12">
          We're currently perfecting our checkout experience. Stay tuned for a seamless shopping journey.
        </p>
        <Link href="/collections/all">
          <Button size="lg" className="rounded-full px-10 h-16 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to Store
          </Button>
        </Link>
      </div>
    </Layout>
  );
}