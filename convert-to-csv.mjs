/**
 * Script untuk mengkonversi data.ts ke multiple CSV files
 * untuk import ke phpMyAdmin dengan struktur relational database
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fungsi untuk escape CSV values
function escapeCSV(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  // Escape double quotes dan wrap dengan quotes jika ada comma, newline, atau quotes
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// Fungsi untuk convert array ke CSV string
function arrayToCSV(headers, rows) {
  const headerRow = headers.map(escapeCSV).join(',');
  const dataRows = rows.map(row => 
    headers.map(header => escapeCSV(row[header])).join(',')
  );
  return [headerRow, ...dataRows].join('\n');
}

// Baca dan parse file data.ts
console.log('📖 Membaca file data.ts...');
const dataPath = path.join(__dirname, 'client', 'src', 'lib', 'data.ts');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// Import langsung dari file products yang sudah terpisah
console.log('📖 Mencoba import dari file products...');
let products = [];

try {
  // Coba import dari file products/index.ts
  const productsIndexPath = path.join(__dirname, 'client', 'src', 'lib', 'products', 'index.ts');
  const productsIndexContent = fs.readFileSync(productsIndexPath, 'utf8');
  
  // Extract semua import statements
  const imports = productsIndexContent.match(/import \{ .+ \} from ['"]\.\/\w+['"]/g) || [];
  
  // Baca semua file products
  const productFiles = [
    'accessories.ts',
    'advancedHosting.ts',
    'cameraSecurity.ts',
    'cloudGateways.ts',
    'doorAccess.ts',
    'integrations.ts',
    'switching.ts',
    'wifi.ts'
  ];
  
  for (const file of productFiles) {
    const filePath = path.join(__dirname, 'client', 'src', 'lib', 'products', file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract products array dari setiap file
    const match = fileContent.match(/export const \w+: Product\[\] = (\[[\s\S]*?\n\]);/);
    if (match) {
      let productsJSON = match[1];
      
      // Hapus comments
      productsJSON = productsJSON.replace(/\/\*[\s\S]*?\*\//g, '');
      productsJSON = productsJSON.replace(/\/\/.*/g, '');
      
      // Parse menggunakan eval (karena ini TypeScript object literal, bukan pure JSON)
      try {
        const fileProducts = eval('(' + productsJSON + ')');
        products = products.concat(fileProducts);
        console.log(`   ✅ Loaded ${fileProducts.length} products from ${file}`);
      } catch (e) {
        console.log(`   ⚠️  Skipping ${file}: ${e.message}`);
      }
    }
  }
  
  console.log(`✅ Total berhasil parse ${products.length} produk`);
} catch (error) {
  console.error('❌ Error loading products:', error.message);
  process.exit(1);
}

if (products.length === 0) {
  console.error('❌ Tidak ada produk yang berhasil di-parse!');
  process.exit(1);
}

// Buat folder output
const outputDir = 'csv-output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

console.log('\n🔄 Memulai konversi ke CSV...\n');

// 1. PRODUCTS.CSV - Tabel utama produk
console.log('1️⃣  Generating products.csv...');
const productsData = products.map(p => ({
  id: p.id,
  name: p.name,
  category: p.category,
  subfilter: p.subfilter,
  image: p.image,
  short_description: p.shortDescription,
  is_new: p.isNew ? 1 : 0,
  sku: p.sku || ''
}));
fs.writeFileSync(
  path.join(outputDir, 'products.csv'),
  arrayToCSV(['id', 'name', 'category', 'subfilter', 'image', 'short_description', 'is_new', 'sku'], productsData)
);
console.log(`   ✅ products.csv (${productsData.length} rows)`);

// 2. PRODUCT_SPECS.CSV - Spesifikasi produk (dari field specs)
console.log('2️⃣  Generating product_specs.csv...');
const specsData = [];
products.forEach(p => {
  if (p.specs && Array.isArray(p.specs)) {
    p.specs.forEach((spec, index) => {
      specsData.push({
        product_id: p.id,
        label: spec.label,
        value: spec.value,
        sort_order: index
      });
    });
  }
});
fs.writeFileSync(
  path.join(outputDir, 'product_specs.csv'),
  arrayToCSV(['product_id', 'label', 'value', 'sort_order'], specsData)
);
console.log(`   ✅ product_specs.csv (${specsData.length} rows)`);

// 3. PRODUCT_IMAGES.CSV - Gambar produk (dari field images)
console.log('3️⃣  Generating product_images.csv...');
const imagesData = [];
products.forEach(p => {
  if (p.images && Array.isArray(p.images)) {
    p.images.forEach((image, index) => {
      imagesData.push({
        product_id: p.id,
        image_url: image,
        sort_order: index,
        is_primary: index === 0 ? 1 : 0
      });
    });
  }
});
fs.writeFileSync(
  path.join(outputDir, 'product_images.csv'),
  arrayToCSV(['product_id', 'image_url', 'sort_order', 'is_primary'], imagesData)
);
console.log(`   ✅ product_images.csv (${imagesData.length} rows)`);

// 4. PRODUCT_OVERVIEW_IMAGES.CSV - Gambar overview
console.log('4️⃣  Generating product_overview_images.csv...');
const overviewImagesData = [];
products.forEach(p => {
  if (p.overviewImages && Array.isArray(p.overviewImages)) {
    p.overviewImages.forEach((image, index) => {
      overviewImagesData.push({
        product_id: p.id,
        image_url: image,
        sort_order: index
      });
    });
  }
});
fs.writeFileSync(
  path.join(outputDir, 'product_overview_images.csv'),
  arrayToCSV(['product_id', 'image_url', 'sort_order'], overviewImagesData)
);
console.log(`   ✅ product_overview_images.csv (${overviewImagesData.length} rows)`);

// 5. PRODUCT_BULLET_POINTS.CSV - Bullet points
console.log('5️⃣  Generating product_bullet_points.csv...');
const bulletPointsData = [];
products.forEach(p => {
  if (p.bulletPoints && Array.isArray(p.bulletPoints)) {
    p.bulletPoints.forEach((point, index) => {
      bulletPointsData.push({
        product_id: p.id,
        bullet_point: point,
        sort_order: index
      });
    });
  }
});
fs.writeFileSync(
  path.join(outputDir, 'product_bullet_points.csv'),
  arrayToCSV(['product_id', 'bullet_point', 'sort_order'], bulletPointsData)
);
console.log(`   ✅ product_bullet_points.csv (${bulletPointsData.length} rows)`);

// 6. PRODUCT_TECH_SPECS.CSV - Technical specifications (nested structure)
console.log('6️⃣  Generating product_tech_specs.csv...');
const techSpecsData = [];
let techSpecItemId = 1;
products.forEach(p => {
  if (p.technicalSpecs && Array.isArray(p.technicalSpecs)) {
    p.technicalSpecs.forEach((section, sectionIndex) => {
      if (section.items && Array.isArray(section.items)) {
        section.items.forEach((item, itemIndex) => {
          techSpecsData.push({
            id: techSpecItemId++,
            product_id: p.id,
            section_title: section.title,
            section_order: sectionIndex,
            label: item.label,
            value: item.value,
            is_check: item.isCheck ? 1 : 0,
            is_list: item.isList ? 1 : 0,
            item_order: itemIndex
          });
        });
      }
    });
  }
});
fs.writeFileSync(
  path.join(outputDir, 'product_tech_specs.csv'),
  arrayToCSV(['id', 'product_id', 'section_title', 'section_order', 'label', 'value', 'is_check', 'is_list', 'item_order'], techSpecsData)
);
console.log(`   ✅ product_tech_specs.csv (${techSpecsData.length} rows)`);

// 7. PRODUCT_IN_THE_BOX.CSV - Items in the box
console.log('7️⃣  Generating product_in_the_box.csv...');
const inTheBoxData = [];
products.forEach(p => {
  if (p.inTheBox && Array.isArray(p.inTheBox)) {
    p.inTheBox.forEach((item, index) => {
      inTheBoxData.push({
        product_id: p.id,
        item_name: item.name,
        item_image: item.image,
        sort_order: index
      });
    });
  }
});
fs.writeFileSync(
  path.join(outputDir, 'product_in_the_box.csv'),
  arrayToCSV(['product_id', 'item_name', 'item_image', 'sort_order'], inTheBoxData)
);
console.log(`   ✅ product_in_the_box.csv (${inTheBoxData.length} rows)`);

// 8. PRODUCT_ADDONS.CSV - Product addons/accessories
console.log('8️⃣  Generating product_addons.csv...');
const addonsData = [];
products.forEach(p => {
  if (p.addons && Array.isArray(p.addons)) {
    p.addons.forEach(addon => {
      addonsData.push({
        id: addon.id,
        product_id: p.id,
        name: addon.name,
        image: addon.image,
        price: addon.price || '',
        description: addon.description || '',
        product_link: addon.productLink || ''
      });
    });
  }
});
fs.writeFileSync(
  path.join(outputDir, 'product_addons.csv'),
  arrayToCSV(['id', 'product_id', 'name', 'image', 'price', 'description', 'product_link'], addonsData)
);
console.log(`   ✅ product_addons.csv (${addonsData.length} rows)`);

// 9. ADDON_SPECS.CSV - Addon specifications (short specs array)
console.log('9️⃣  Generating addon_specs.csv...');
const addonSpecsData = [];
products.forEach(p => {
  if (p.addons && Array.isArray(p.addons)) {
    p.addons.forEach(addon => {
      if (addon.specs && Array.isArray(addon.specs)) {
        addon.specs.forEach((spec, index) => {
          addonSpecsData.push({
            addon_id: addon.id,
            spec_text: spec,
            sort_order: index
          });
        });
      }
    });
  }
});
fs.writeFileSync(
  path.join(outputDir, 'addon_specs.csv'),
  arrayToCSV(['addon_id', 'spec_text', 'sort_order'], addonSpecsData)
);
console.log(`   ✅ addon_specs.csv (${addonSpecsData.length} rows)`);

// 10. ADDON_DETAILED_SPECS.CSV - Addon detailed specifications
console.log('🔟 Generating addon_detailed_specs.csv...');
const addonDetailedSpecsData = [];
products.forEach(p => {
  if (p.addons && Array.isArray(p.addons)) {
    p.addons.forEach(addon => {
      if (addon.detailedSpecs && Array.isArray(addon.detailedSpecs)) {
        addon.detailedSpecs.forEach((spec, index) => {
          addonDetailedSpecsData.push({
            addon_id: addon.id,
            label: spec.label,
            value: spec.value,
            sort_order: index
          });
        });
      }
    });
  }
});
fs.writeFileSync(
  path.join(outputDir, 'addon_detailed_specs.csv'),
  arrayToCSV(['addon_id', 'label', 'value', 'sort_order'], addonDetailedSpecsData)
);
console.log(`   ✅ addon_detailed_specs.csv (${addonDetailedSpecsData.length} rows)`);

console.log('\n✨ SELESAI! Semua CSV berhasil dibuat di folder: ' + outputDir);
console.log('\n📊 Summary:');
console.log(`   - products.csv: ${productsData.length} rows`);
console.log(`   - product_specs.csv: ${specsData.length} rows`);
console.log(`   - product_images.csv: ${imagesData.length} rows`);
console.log(`   - product_overview_images.csv: ${overviewImagesData.length} rows`);
console.log(`   - product_bullet_points.csv: ${bulletPointsData.length} rows`);
console.log(`   - product_tech_specs.csv: ${techSpecsData.length} rows`);
console.log(`   - product_in_the_box.csv: ${inTheBoxData.length} rows`);
console.log(`   - product_addons.csv: ${addonsData.length} rows`);
console.log(`   - addon_specs.csv: ${addonSpecsData.length} rows`);
console.log(`   - addon_detailed_specs.csv: ${addonDetailedSpecsData.length} rows`);
console.log('\n📝 Langkah selanjutnya:');
console.log('   1. Buat database dan tabel di phpMyAdmin menggunakan database-structure.sql');
console.log('   2. Import CSV files sesuai urutan (products dulu, baru yang lain)');
console.log('   3. Pastikan encoding UTF-8 saat import');
