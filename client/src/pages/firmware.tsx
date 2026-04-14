import { useState } from "react";
import Layout from "@/components/layout";

type FirmwareItem = {
  name: string;
  version: string;
  link: string;
};

type FirmwareData = {
  [key: string]: FirmwareItem[];
};

export default function FirmwarePage() {
  const [activeBrand, setActiveBrand] = useState<string>("Ubiquiti");

  const firmwareData: FirmwareData = {
    Ubiquiti: [
      { name: "Product A", version: "v1.2.3", link: "#" },
      { name: "Product B", version: "v2.0.1", link: "#" },
      { name: "Product C", version: "v3.5.0", link: "#" },
    ],
    Mikrotik: [
      { name: "RouterBoard X", version: "v7.1", link: "#" },
      { name: "CCR Series", version: "v7.5", link: "#" },
    ],
    "V-Sol": [
      { name: "OLT V1600", version: "v1.0.0", link: "#" },
      { name: "ONU V2801", version: "v2.3.1", link: "#" },
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
            sesuai dengan uu no lalala tahun lalala produk {activeBrand} harus sesuai dengan regulasi indonesia
          </h2>

          <p className="text-center mb-10">
            Maka beberapa produk {activeBrand} harus menggunakan firmware yang sesuai dengan
          </p>

          {/* PRODUCT */}
          <div className="max-w-2xl mx-auto space-y-4">
            {firmwareData[activeBrand]?.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center"
              >
                <div>{item.name}</div>

                <div className="flex gap-3">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
                    {item.version}
                  </span>

                  <a
                    href={item.link}
                    target="_blank"
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