import { useState } from "react";
import Layout from "@/components/layout";

type FirmwareItem = {
  name: string;
  version: string;
  link: string;
  downloadName: string;
  notes?: string;
};

type FirmwareData = {
  [key: string]: FirmwareItem[];
};

const firmwareData: FirmwareData = {
  Ubiquiti: [
    {
      name: "airFiber 5XHD [AF-5XHD]",
      version: "v1.5.6",
      link: "/firmware/af5xhd.amesoc3.v1.5.6-lock.00005.260225.0902-squashfs.bin",
      downloadName: "AF-5XHD v.1.5.6 Indonesia Firmware",
      notes: "Indonesia-compliant localized firmware",
    },
  ],
  MikroTik: [
    {
      name: "RouterBoard X",
      version: "v7.1",
      link: "#",
      downloadName: "routerboard-x.firmware.bin",
      notes: "Stable release for RouterBoard X series",
    },
    {
      name: "CCR Series",
      version: "v7.5",
      link: "#",
      downloadName: "ccr-series.firmware.bin",
      notes: "Recommended for CCR1009 and CCR2004",
    },
  ],
  "V-SOL": [
    {
      name: "10G-PON",
      version: "V3600G1-C",
      link: "https://drive.google.com/uc?export=download&id=1HDdcEwV0V7qFL0qxHzIE88uSNgMZ-zzG",
      downloadName: "10G-PON V3600G1-C Indonesia Firmware",
      notes: "Indonesia-compliant firmware for 10G-PON OLT",
    },
    {
      name: "Chassis OLT",
      version: "V5600X2-C",
      link: "https://drive.google.com/uc?export=download&id=1fGGioLNzKXeBuK-tPgVQoyIntB-rc0AD",
      downloadName: "Chassis OLT V5600X2 Indonesia Firmware",
      notes: "Indonesia-compliant firmware for V5600 Chassis OLT",
    },
  ],
};

export default function FirmwarePage() {
  const [activeBrand, setActiveBrand] = useState<string>("Ubiquiti");

  return (
    <Layout>
      <section className="py-16 px-4 min-h-screen">
        <div className="container mx-auto max-w-3xl">

          <div className="mb-12 text-center">
            <p className="text-xs font-black tracking-[0.35em] uppercase text-muted-foreground mb-3">
              Firmware Downloads
            </p>
            <h1 className="text-4xl font-black tracking-tight mb-3">
              Official Firmware
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              In accordance with Indonesian regulations, certain products require localized firmware.
              Download the official firmware for your device below.
            </p>
          </div>

          {/* Brand tabs */}
          <div className="flex gap-2 mb-10 border-b border-border">
            {["Ubiquiti", "MikroTik", "V-SOL"].map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-5 py-3 text-sm font-bold transition-all border-b-2 -mb-px ${
                  activeBrand === brand
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Firmware list */}
          <div className="space-y-4">
            {(firmwareData[activeBrand] ?? []).map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-border bg-background hover:bg-secondary/30 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-bold text-base">{item.name}</p>
                  {item.notes && (
                    <p className="text-sm text-muted-foreground mt-0.5">{item.notes}</p>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-black uppercase tracking-widest bg-secondary px-3 py-1.5 rounded-full">
                    {item.version}
                  </span>
                  <a
                    href={item.link}
                    download={item.downloadName}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                      item.link === "#"
                        ? "bg-secondary text-muted-foreground cursor-not-allowed pointer-events-none"
                        : "bg-foreground text-background hover:opacity-80"
                    }`}
                  >
                    {item.link === "#" ? "Coming Soon" : "Download"}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-center text-muted-foreground">
            For more firmware versions or technical guidance, please{" "}
            <a href="/support" className="underline hover:text-foreground transition-colors">
              contact our support team
            </a>.
          </p>

        </div>
      </section>
    </Layout>
  );
}
