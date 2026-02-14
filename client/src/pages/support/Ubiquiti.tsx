import { useState } from "react";
import { Search, ArrowRight, FileText, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function UbiquitiSupport() {
  const [searchQuery, setSearchQuery] = useState("");

  const trendingArticles = [
    { title: "UniFi - How to set up a Dream Machine", category: "Getting Started", views: "24k" },
    { title: "Troubleshooting UniFi Access Point adoption", category: "Troubleshooting", views: "18k" },
    { title: "Configuring VLANs on UniFi Switches", category: "Advanced", views: "15k" },
    { title: "UniFi Protect - Camera placement guide", category: "Best Practices", views: "12k" },
    { title: "Updating firmware via SSH", category: "Advanced", views: "10k" },
    { title: "Restoring a backup to a new Console", category: "Maintenance", views: "8k" }
  ];

  const categories = [
    { name: "UniFi", icon: "/unifi-logo.png", description: "Network, Protect, Access, Talk" },
    { name: "EdgeMax", icon: "/edgemax-logo.png", description: "EdgeRouter, EdgeSwitch" },
    { name: "AirMax", icon: "/airmax-logo.png", description: "ISP PtP, PtMP Links" },
    { name: "UISP", icon: "/uisp-logo.png", description: "ISP Management Platform" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      
      {/* HERO SECTION */}
      <section className="relative bg-black text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black z-0" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Ubiquiti Support Center
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for answers..." 
                className="w-full h-14 pl-12 pr-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRENDING ARTICLES */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Trending Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingArticles.map((article, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {article.views} views
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES BY CATEGORY */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Browse by Product Line</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-2xl border border-border text-center hover:border-primary/50 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-4 shadow-inner">
                  {/* Using generic icons for mockup if images fail */}
                  <Shield className="w-8 h-8 text-foreground/70" />
                </div>
                <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RMA SECTION */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5 z-0" />
        <div className="container mx-auto relative z-10 text-center max-w-2xl">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">RMA & Device Replacement</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Need to return a defective device? Our automated RMA process makes it simple and fast.
            Most requests are approved within 24 hours.
          </p>
          <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg hover:shadow-primary/25">
            Start RMA Request <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

    </div>
  );
}
