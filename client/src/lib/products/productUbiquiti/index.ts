// Auto-generated index file
// This file merges all category product files

import { cloudGatewaysProducts } from './productUbiquiti/cloudGateways';
import { switchingProducts } from './productUbiquiti/switching';
import { wifiProducts } from './productUbiquiti/wifi';
import { cameraSecurityProducts } from './productUbiquiti/cameraSecurity';
import { doorAccessProducts } from './productUbiquiti/doorAccess';
import { integrationsProducts } from './productUbiquiti/integrations';
import { advancedHostingProducts } from './productUbiquiti/advancedHosting';
import { accessoriesProducts } from './productUbiquiti/accessories';

// Export all types from cloudGateways
export type { Product, TechSpecSection, InTheBoxItem, ProductAddon, TechSpecItem, AddonDetailedSpec } from './productUbiquiti/cloudGateways';
export * from './productUbiquiti/cloudGateways';

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
