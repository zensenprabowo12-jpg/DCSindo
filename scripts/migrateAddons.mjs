/**
 * Script: migrateAddons.mjs
 * Extracts product→addon relationships from deleted hardcode TS files (recovered from git history)
 * and inserts them into ubiquiti_dcs_addons table.
 *
 * Usage: node scripts/migrateAddons.mjs
 * Files are expected at /tmp/*.ts (extracted from git with git show)
 */

import { readFileSync } from "fs";
import { createConnection } from "mysql2/promise";

const FILES = [
  "scripts/tmp_addons/cameraSecurity.ts",
  "scripts/tmp_addons/cloudGateways.ts",
  "scripts/tmp_addons/switching.ts",
  "scripts/tmp_addons/wifi.ts",
  "scripts/tmp_addons/doorAccess.ts",
  "scripts/tmp_addons/accessories.ts",
  "scripts/tmp_addons/advancedHosting.ts",
  "scripts/tmp_addons/integrations.ts",
];

// Parse a TS file and return array of { productName, addonNames[] }
function parseAddonRelationships(content) {
  const lines = content.split("\n");
  const results = []; // { productName, addonNames }

  let currentProduct = null;
  let inAddons = false;
  let bracketDepth = 0;

  for (const line of lines) {
    // Match top-level product name (4 spaces indent, not inside addons)
    const productNameMatch = line.match(/^    name: "(.+?)"/);
    if (productNameMatch && !inAddons) {
      currentProduct = { productName: productNameMatch[1], addonNames: [] };
      results.push(currentProduct);
      continue;
    }

    // Detect start of addons: [ block (any indent level, but after a product)
    if (!inAddons && line.match(/addons:\s*\[/)) {
      inAddons = true;
      bracketDepth = 1;
      // Count brackets on the same line after [
      const afterBracket = line.slice(line.indexOf("[") + 1);
      for (const ch of afterBracket) {
        if (ch === "[") bracketDepth++;
        else if (ch === "]") {
          bracketDepth--;
          if (bracketDepth === 0) { inAddons = false; break; }
        }
      }
      continue;
    }

    if (inAddons) {
      // Count bracket changes on this line
      for (const ch of line) {
        if (ch === "[") bracketDepth++;
        else if (ch === "]") {
          bracketDepth--;
          if (bracketDepth === 0) { inAddons = false; break; }
        }
      }

      if (inAddons) {
        // Match addon name (8 spaces indent inside addons block)
        const addonNameMatch = line.match(/^        name: "(.+?)"/);
        if (addonNameMatch && currentProduct) {
          currentProduct.addonNames.push(addonNameMatch[1]);
        }
      }
    }
  }

  // Filter out products with no addons
  return results.filter((r) => r.addonNames.length > 0);
}

// Manual overrides for names that don't match DB exactly
const MANUAL_MAPPINGS = {
  "Ethernet Surge Protection Outdoor-20kA": 335,
  "Ethernet Surge Protection Outdoor-10kA": 335,
  "UniFi Premium Patch Cable Outdoor-B/W": 236,
  "SFP+ to RJ45 10GbE": 255,
  "10G  Single-Mode Optical Module": 262,
  "10G  Multi-Mode Optical Module": 257,
  "U-Rack-6U-TL": 285,
  "Long-Range IR LED & Floodlight": 368,
  "7M USB-C Cable": 346,
};

// Find DB product ID by exact name, then by LIKE
async function findProductId(conn, name, nameCache) {
  // Check manual mapping first
  if (MANUAL_MAPPINGS[name]) {
    nameCache.set(name, MANUAL_MAPPINGS[name]);
    return MANUAL_MAPPINGS[name];
  }
  if (nameCache.has(name)) return nameCache.get(name);

  // Exact match first
  const [exactRows] = await conn.query(
    "SELECT id FROM ubiquiti_dcs_products WHERE nama_produk = ? LIMIT 1",
    [name]
  );
  if (exactRows.length > 0) {
    nameCache.set(name, exactRows[0].id);
    return exactRows[0].id;
  }

  // Try with LIKE (partial match)
  const [likeRows] = await conn.query(
    "SELECT id, nama_produk FROM ubiquiti_dcs_products WHERE nama_produk LIKE ? LIMIT 3",
    [`%${name}%`]
  );
  if (likeRows.length === 1) {
    console.log(`  [FUZZY] "${name}" → "${likeRows[0].nama_produk}" (id=${likeRows[0].id})`);
    nameCache.set(name, likeRows[0].id);
    return likeRows[0].id;
  }
  if (likeRows.length > 1) {
    // Pick first (prefer shorter/more exact match)
    console.log(`  [AMBIG] "${name}" → multiple matches, using "${likeRows[0].nama_produk}" (id=${likeRows[0].id})`);
    nameCache.set(name, likeRows[0].id);
    return likeRows[0].id;
  }

  console.log(`  [MISS]  "${name}" → no DB match`);
  nameCache.set(name, null);
  return null;
}

async function main() {
  const conn = await createConnection({
    host: "192.168.92.27",
    port: 3306,
    user: "phpmyadmin",
    password: "DBp4ssWD",
    database: "dcsindo",
  });

  console.log("Connected to DB.\n");

  // Build full relationship map: productName → addonNames[]
  const allRelationships = [];
  for (const file of FILES) {
    let content;
    try { content = readFileSync(file, "utf8"); }
    catch { console.log(`Skipping ${file} (not found)`); continue; }
    const parsed = parseAddonRelationships(content);
    allRelationships.push(...parsed);
    console.log(`Parsed ${file}: ${parsed.length} products with addons`);
  }
  console.log(`\nTotal products with addon data: ${allRelationships.length}\n`);

  // Name → DB ID cache
  const nameCache = new Map();

  // Build insert list (deduplicated by product_id + addon_product_id)
  const toInsert = []; // { productId, addonProductId, sortOrder }
  const seenPairs = new Set();
  const notFound = [];

  for (const rel of allRelationships) {
    const productId = await findProductId(conn, rel.productName, nameCache);
    if (!productId) {
      notFound.push({ type: "product", name: rel.productName });
      continue;
    }

    for (let i = 0; i < rel.addonNames.length; i++) {
      const addonId = await findProductId(conn, rel.addonNames[i], nameCache);
      if (!addonId) {
        notFound.push({ type: "addon", name: rel.addonNames[i], parentProduct: rel.productName });
        continue;
      }
      // Skip if product links to itself
      if (productId === addonId) {
        console.log(`  [SKIP] ${rel.productName} → self-link ignored`);
        continue;
      }
      // Deduplicate (same product → same addon)
      const pairKey = `${productId}:${addonId}`;
      if (seenPairs.has(pairKey)) continue;
      seenPairs.add(pairKey);
      toInsert.push({ productId, addonProductId: addonId, sortOrder: i + 1 });
    }
  }

  console.log(`\n--- SUMMARY ---`);
  console.log(`Ready to insert: ${toInsert.length} addon relationships`);
  console.log(`Not found:       ${notFound.length} items\n`);

  if (notFound.length > 0) {
    console.log("Items not found in DB:");
    notFound.forEach((n) =>
      console.log(`  [${n.type}] "${n.name}"${n.parentProduct ? ` (parent: ${n.parentProduct})` : ""}`)
    );
    console.log();
  }

  if (toInsert.length === 0) {
    console.log("Nothing to insert.");
    await conn.end();
    return;
  }

  // Delete existing addon rows first (re-migration)
  console.log("Clearing existing ubiquiti_dcs_addons rows...");
  await conn.query("DELETE FROM ubiquiti_dcs_addons");

  // Insert in batches
  let inserted = 0;
  for (const row of toInsert) {
    await conn.query(
      "INSERT INTO ubiquiti_dcs_addons (product_id, addon_product_id, sort_order) VALUES (?, ?, ?)",
      [row.productId, row.addonProductId, row.sortOrder]
    );
    inserted++;
  }

  console.log(`\nDone. Inserted ${inserted} addon relationships.`);
  await conn.end();
}

main().catch((err) => { console.error(err); process.exit(1); });
