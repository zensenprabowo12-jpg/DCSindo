import type { Product } from "./cloudGateways";
import { accessoriesProducts } from "./accessories";
import { advancedHostingProducts } from "./advancedHosting";
import { cameraSecurityProducts } from "./cameraSecurity";
import { cloudGatewaysProducts } from "./cloudGateways";
import { doorAccessProducts } from "./doorAccess";
import { integrationsProducts } from "./integrations";
import { switchingProducts } from "./switching";
import { wifiProducts } from "./wifi";

const CORE_BUCKETS: readonly Product[][] = [
  cloudGatewaysProducts,
  switchingProducts,
  wifiProducts,
  cameraSecurityProducts,
  doorAccessProducts,
  integrationsProducts,
  advancedHostingProducts,
];

const CORE_FLAT: Product[] = CORE_BUCKETS.flat();

export type UbiquitiCatalogFlags = {
  disableUbiquitiAccessories: boolean;
  showAddons: boolean;
};

function stripAddons(list: Product[]): Product[] {
  return list.map((p) => ({ ...p, addons: [] as Product["addons"] }));
}

/** Susun catalog Ubiquiti sesuai `public/truefalse.json` (runtime). */
export function getUbiquitiProducts(flags: UbiquitiCatalogFlags): Product[] {
  const core = flags.showAddons ? [...CORE_FLAT] : stripAddons(CORE_FLAT);
  if (flags.disableUbiquitiAccessories) {
    return core;
  }
  const acc = flags.showAddons
    ? [...accessoriesProducts]
    : stripAddons(accessoriesProducts);
  return [...core, ...acc];
}

const BASE_UBIQUITI_CATEGORY_LABELS = [
  "Cloud Gateways",
  "Switching",
  "WiFi",
  "Camera Security",
  "Door Access",
  "Integrations",
  "Advanced Hosting",
] as const;

export function getUbiquitiCategoryLabels(flags: {
  disableUbiquitiAccessories: boolean;
}): readonly string[] {
  if (flags.disableUbiquitiAccessories) {
    return BASE_UBIQUITI_CATEGORY_LABELS;
  }
  return [...BASE_UBIQUITI_CATEGORY_LABELS, "Accessories"];
}
