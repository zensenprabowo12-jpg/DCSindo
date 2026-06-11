import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Mail, BookOpen, Users, Wrench, ChevronDown } from "lucide-react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";

const MIKROTIK_ORANGE = "#FF6B35";

const faq = [
  {
    q: "Where can I find official MikroTik documentation?",
    a: "All official MikroTik documentation is available at wiki.mikrotik.com. It covers RouterOS configuration, hardware specifications, CLI references, and step-by-step guides for all product families.",
  },
  {
    q: "How do I reset a MikroTik device to factory defaults?",
    a: "Hold the reset button on the device for 5–10 seconds while it powers on (exact method varies by model). For RouterBoard devices, you can also use the 'System > Reset Configuration' menu in Winbox. Always back up your configuration first.",
  },
  {
    q: "What is the recommended RouterOS version to use?",
    a: "MikroTik releases Stable, Long-term, and Testing tracks. For production use, we recommend the latest Stable release. You can download it from mikrotik.com/download. Our team can advise based on your specific hardware.",
  },
  {
    q: "How do I access my MikroTik device for the first time?",
    a: "Connect via Winbox (download from mikrotik.com/download) using the device's MAC address or default IP 192.168.88.1. Default username is 'admin' with no password. Change your credentials immediately after first login.",
  },
  {
    q: "Do you offer MikroTik training?",
    a: "Yes! DCS Training Center offers hands-on MikroTik workshops covering RouterOS fundamentals, advanced routing, and network management. Check our Training page for the latest schedule.",
  },
  {
    q: "How do I process a warranty claim (RMA) for a MikroTik product?",
    a: "Contact our support team with your purchase invoice, serial number, and a description of the issue. Our team will verify the warranty and guide you through the RMA process. MikroTik standard warranty is 1 year from purchase date.",
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

export default function MikrotikSupport() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] text-white py-28 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, ${MIKROTIK_ORANGE} 0%, transparent 60%)`,
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
              style={{ color: MIKROTIK_ORANGE }}
            >
              Support Center
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              MikroTik Support
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Documentation, troubleshooting guides, and direct support for all MikroTik products.
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
                icon: BookOpen,
                title: "MikroTik Wiki",
                desc: "Official documentation, CLI reference, and configuration guides.",
                href: "https://wiki.mikrotik.com",
              },
              {
                icon: Users,
                title: "MikroTik Forum",
                desc: "Community forum with answers from engineers and power users worldwide.",
                href: "https://forum.mikrotik.com",
              },
              {
                icon: Wrench,
                title: "Winbox Download",
                desc: "Download Winbox GUI for Windows, Mac, and Linux.",
                href: "https://mikrotik.com/download",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-6 rounded-2xl border border-border hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <item.icon className="w-6 h-6" style={{ color: MIKROTIK_ORANGE }} />
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
          <h2 className="text-3xl font-black tracking-tight mb-4">
            Still need help?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Our technical team is ready to assist with configuration, troubleshooting, and RMA inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/628153058666"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="rounded-full px-8 h-12 font-bold gap-2"
                style={{ background: MIKROTIK_ORANGE }}
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
