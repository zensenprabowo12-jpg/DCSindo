import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { products, CATEGORIES } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
          <iframe
            src="https://www.youtube.com/embed/69g3O3Ltygw?autoplay=1&mute=1&loop=1&playlist=69g3O3Ltygw&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
            className="w-[300%] h-[300%] -ml-[100%] -mt-[100%] object-cover opacity-80"
            allow="autoplay; encrypted-media"
            title="DCS Hero Video"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            THE FUTURE OF <br /> NETWORKING
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Enterprise-grade performance. Beautifully designed. <br /> Simply scalable.
          </p>
          <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link href="/collections/all">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-none font-bold">
                All Products
              </Button>
            </Link>
            <Link href="/collections/cloud-gateways">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-none font-bold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Categories Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => {
              // Find a representative image for the category
              const repProduct = products.find(p => p.category === category) || products[0];
              
              return (
                <Link key={category} href={`/collections/${category.toLowerCase().replace(/ /g, '-')}`}>
                  <a className="group relative h-[400px] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 block border border-border">
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{category}</h3>
                        <p className="text-gray-500 text-sm"></p>
                      </div>
                      <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pt-20">
                       <img 
                        src={repProduct.image} 
                        alt={category} 
                        className="w-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* DCS Infrastructure Section - Inspired by Reference */}
      <section className="bg-black text-white py-32">
        <div className="container mx-auto px-4 text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">UniFi Full-Stack Platform Ecosystem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Building the Future of IT. License Free.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8">
            Talk to an Expert
          </Button>
        </div>

        <div className="container mx-auto px-4 space-y-32">
          {/* DCS Protect */}
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
            <div className="flex-1 flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white/5 bg-gradient-to-br from-blue-900/20 to-black">
                <img src="/images/dcs-protect.png" alt="DCS Protect" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2 text-center md:text-left">
              <h3 className="text-3xl font-bold">UniFi Physical Security</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                A License-Free enterprise-grade security platform powered by an AI detection engine and built to support UL 294 compliance. It delivers intelligent monitoring, accurate event detection, and centralized management in a single unified system, providing reliable & scalable protection for modern businesses, campuses, and smart environments.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 group">
                Explore Here! <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* DCS Network */}
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h3 className="text-3xl font-bold">UniFi Network</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Powered by UniFi Cloud Gateways, UniFi Network enables centralized management of WiFi and switching with local processing at each site. Gain instant visibility into traffic, topology, and performance while maintaining high availability and operational simplicity.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 group">
                Explore Here! <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white/5 bg-gradient-to-br from-blue-900/20 to-black">
                <img src="/images/dcs-network.png" alt="DCS Network" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>
          </div>

          {/* DCS Access */}
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32 pb-16">
            <div className="flex-1 flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white/5 bg-gradient-to-br from-blue-900/20 to-black">
                <img src="/images/dcs-access.png" alt="DCS Access" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2 text-center md:text-left">
              <h3 className="text-3xl font-bold">UniFi Integrations</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Seamlessly connect UniFi with third-party systems and services through secure APIs and native integrations. This unified approach enables automation, centralized visibility, and streamlined workflows, helping organizations build smarter operations and maximize the value of their UniFi infrastructure.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 group">
                Explore Here! <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Product Banner */}
      <section className="py-32 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">New Release</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">UniFi U7 Pro</h2>
            <p className="text-xl text-gray-500 mb-8 max-w-lg leading-relaxed">
              The next generation of WiFi is here. Experience massive throughput and ultra-low latency with WiFi 7 technology.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium text-[13px]">6 GHz Support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium">5.7 Gbps Aggregate Throughput</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium">Ceiling Mount Form Factor</span>
              </li>
            </ul>
            <Link href="/collections/wifi">
              <Button size="lg" className="rounded-none px-8 py-6 text-lg">
                View Specifications
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="/images/wifi-ap.jpg" 
              alt="U7 Pro" 
              className="w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}