import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Mail, BookOpen, Server, Globe, ChevronDown } from "lucide-react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";

const VSOL_GREEN = "#16a34a";

const faq = [
  {
    q: "What is V-SOL and what products do they offer?",
    a: "V-SOL is a leading manufacturer specializing in Fiber-to-the-x (FTTx) access network solutions. Their main product lines include OLT (Optical Line Terminal), ONU/ONT (Optical Network Unit/Terminal), and associated FTTx equipment for large-scale broadband deployment. DCS is the authorized distributor of V-SOL in Indonesia.",
  },
  {
    q: "What is the difference between OLT and ONU/ONT?",
    a: "OLT (Optical Line Terminal) is the central office equipment that manages the PON network. ONU/ONT (Optical Network Unit/Terminal) is the customer-side device that provides internet access to end users via fiber. OLT is placed at the ISP/operator side; ONU/ONT is installed at subscriber premises.",
  },
  {
    q: "How do I access the V-SOL OLT management interface?",
    a: "Connect to the OLT management port via Ethernet and access the web interface at the configured management IP (default is usually 192.168.1.1). CLI access is also available via SSH or Telnet. Default credentials are typically admin/admin — change these immediately after first login. Refer to your specific model's quick start guide for exact steps.",
  },
  {
    q: "What PON standards does V-SOL support?",
    a: "V-SOL supports multiple PON standards including EPON (IEEE 802.3ah), GPON (ITU-T G.984), 10G-EPON (IEEE 802.3av), XGS-PON (ITU-T G.9807.1), and 10G-PON. The supported standard depends on the product model — consult the product datasheet for compatibility details.",
  },
  {
    q: "Do you offer technical support and configuration assistance for V-SOL products?",
    a: "Yes, DCS provides full technical support for all V-SOL products we distribute. Our team can assist with initial setup, VLAN configuration, ONU registration, and troubleshooting. For large-scale deployments we also offer on-site installation support. Contact us via WhatsApp or email to arrange assistance.",
  },
  {
    q: "How do I process a warranty claim for a V-SOL product?",
    a: "Contact our support team with your purchase invoice, serial number, and a description of the issue. Our team will verify the warranty status and guide you through the RMA process. Standard V-SOL product warranty is 1 year from purchase date unless otherwise stated on the product documentation.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold hover:bg-secondary/30 transition-colors gap-4"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function VsolSupport() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-[#052e16] text-white py-28 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, ${VSOL_GREEN} 0%, transparent 60%)`,
          }}
        />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs font-black tracking-[0.35em] uppercase mb-4"
              style={{ color: VSOL_GREEN }}
            >
              Support Center
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              V-SOL Support
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Technical resources, documentation, and direct support for V-SOL OLT and ONU/ONT products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-xl font-black uppercase tracking-widest text-muted-foreground text-center mb-10">
            Official Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Globe,
                title: "V-SOL Official Website",
                desc: "Product catalog, datasheets, and company information from V-SOL headquarters.",
                href: "https://en.vsolcn.com/",
                external: true,
              },
              {
                icon: BookOpen,
                title: "Product Documentation",
                desc: "Quick start guides, user manuals, and configuration references for V-SOL devices.",
                href: "https://en.vsolcn.com/Support",
                external: true,
              },
              {
                icon: Server,
                title: "Firmware Downloads",
                desc: "Indonesia-compliant firmware files for V-SOL OLT and ONU devices.",
                href: "/firmware",
                external: false,
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-3 p-6 rounded-2xl border border-border hover:border-green-600/50 hover:bg-green-600/5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <item.icon className="w-6 h-6" style={{ color: VSOL_GREEN }} />
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-bold mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-black tracking-tight text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Our technical team is ready to assist with V-SOL OLT/ONU configuration, troubleshooting, and RMA inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6281530586666"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="rounded-full px-8 h-12 font-bold gap-2"
                style={{ background: VSOL_GREEN }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Support
              </Button>
            </a>
            <Link href="/support">
              <Button variant="outline" className="rounded-full px-8 h-12 font-bold gap-2">
                <Mail className="w-4 h-4" />
                Submit a Ticket
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
