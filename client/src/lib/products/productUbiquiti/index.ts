// Auto-generated index file
// This file merges all category product files

// File ini berada di folder productUbiquiti/ — import relatif ke file sejajar (bukan ./productUbiquiti/…)
import { cloudGatewaysProducts } from "./cloudGateways";
import { switchingProducts } from "./switching";
import { wifiProducts } from "./wifi";
import { cameraSecurityProducts } from "./cameraSecurity";
import { doorAccessProducts } from "./doorAccess";
import { integrationsProducts } from "./integrations";
import { advancedHostingProducts } from "./advancedHosting";
import { accessoriesProducts } from "./accessories";

export type { Product, TechSpecSection, InTheBoxItem, ProductAddon, TechSpecItem, AddonDetailedSpec } from "./cloudGateways";
export * from "./cloudGateways";

// Export individual category products
export {
  cloudGatewaysProducts,
  switchingProducts,
  wifiProducts,
  cameraSecurityProducts,
  doorAccessProducts,
  integrationsProducts,
  advancedHostingProducts,
  accessoriesProducts,
};

// Merge all products
export const products = [
  ...cloudGatewaysProducts,
  ...switchingProducts,
  ...wifiProducts,
  ...cameraSecurityProducts,
  ...doorAccessProducts,
  ...integrationsProducts,
  ...advancedHostingProducts,
  ...accessoriesProducts,
];

// Export categories
export const CATEGORIES = [
  "Cloud Gateways",
  "Switching",
  "WiFi",
  "Camera Security",
  "Door Access",
  "Integrations",
  "Advanced Hosting",
  "Accessories",
] as const;
