-- FiberHome improvements: fix spec, tambah key features & applications.

-- 1. Fix spec inconsistency: Fiber Standard harus G.657A1 (match product name)
UPDATE fiberhome_technical_specs
SET value = 'ITU-T G.657A1'
WHERE product_id = (SELECT id FROM fiberhome_products WHERE sku = 'GJYCH-1')
  AND label = 'Fiber Standard';

-- 2. Tabel Key Features
CREATE TABLE IF NOT EXISTS fiberhome_key_features (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  feature    TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  INDEX idx_product (product_id),
  CONSTRAINT fk_fiberhome_features_product
    FOREIGN KEY (product_id) REFERENCES fiberhome_products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Tabel Applications / Use Cases
CREATE TABLE IF NOT EXISTS fiberhome_applications (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  product_id  INT NOT NULL,
  title       VARCHAR(255) NOT NULL,
  description TEXT,
  sort_order  INT DEFAULT 0,
  INDEX idx_product (product_id),
  CONSTRAINT fk_fiberhome_applications_product
    FOREIGN KEY (product_id) REFERENCES fiberhome_products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Seed features & applications untuk GJYCH-1
SET @pid = (SELECT id FROM fiberhome_products WHERE sku = 'GJYCH-1');

DELETE FROM fiberhome_key_features WHERE product_id = @pid;
DELETE FROM fiberhome_applications WHERE product_id = @pid;

INSERT INTO fiberhome_key_features (product_id, feature, sort_order) VALUES
  (@pid, 'Desain self-supporting dengan messenger wire baja untuk instalasi aerial', 1),
  (@pid, 'Jacket LSZH (Low Smoke Zero Halogen) — aman untuk instalasi indoor', 2),
  (@pid, 'Bend radius kecil (15× OD) — fleksibel di sudut sempit', 3),
  (@pid, '1000m per roll — efisien untuk instalasi FTTH', 4),
  (@pid, 'Tensile strength ≥300N — tahan tarik untuk kondisi outdoor', 5);

INSERT INTO fiberhome_applications (product_id, title, description, sort_order) VALUES
  (@pid, 'FTTH (Fiber to the Home)', 'Koneksi terakhir ke rumah pelanggan', 1),
  (@pid, 'Aerial Installation', 'Dipasang antar tiang atau bangunan', 2),
  (@pid, 'Building Drop', 'Dari junction box ke unit pelanggan', 3);
