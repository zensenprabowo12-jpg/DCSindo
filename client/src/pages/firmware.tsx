import { useState } from "react";
import Layout from "@/components/layout";

type FirmwareItem = {
  name: string;
  version: string;
  link: string;
  downloadName: string;
};

type FirmwareData = {
  [key: string]: FirmwareItem[];
};

export default function FirmwarePage() {
  const [activeBrand, setActiveBrand] = useState<string>("Ubiquiti");

  const firmwareData: FirmwareData = {
    Ubiquiti: [
      {
        name: "airFiber 5XHD [AF-5XHD]",
        version: "v1.5.6",
        link: "/firmware/af5xhd.amesoc3.v1.5.6-lock.00005.260225.0902-squashfs.bin",
        downloadName: "AF-5XHD v.1.5.6 Indonesia Firmware.bin",
      },
    ],

    Mikrotik: [
      { name: "RouterBoard X", 
        version: "v7.1", 
        link: "#",
        downloadName: "routerboard-x.firmware.bin"
      },
      { name: "CCR Series", 
        version: "v7.5", 
        link: "#", 
        downloadName: "ccr-series.firmware.bin" },
    ],

    "V-Sol": [
      { name: "OLT V1600", version: "v1.0.0", link: "#", downloadName: "olt-v1600.firmware.bin" },
      { name: "ONU V2801", version: "v2.3.1", link: "#", downloadName: "onu-v2801.firmware.bin" },
    ],
  };

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">

          {/* BRAND */}
          <div className="flex gap-6 mb-10 text-lg font-bold">
            {["Mikrotik", "Ubiquiti", "V-Sol"].map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`${
                  activeBrand === brand
                    ? "text-black border-b-2 border-black"
                    : "text-gray-400"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* TEXT */}
          <h2 className="text-center text-xl font-semibold mb-4">
            Sesuai regulasi Indonesia, beberapa produk {activeBrand} memerlukan firmware khusus.
          </h2>

          <p className="text-center mb-10">
            Silakan download firmware resmi untuk produk {activeBrand} di bawah ini.
          </p>

          {/* PRODUCT */}
          <div className="max-w-2xl mx-auto space-y-4">
            {firmwareData[activeBrand]?.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>{item.name}</div>

                <div className="flex gap-3">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
                    {item.version}
                  </span>

                  <a
                    href={item.link}
                    download={item.downloadName}
                    className="bg-black text-white px-4 py-1 rounded-full text-sm"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}