-- FiberHome Product Store
-- Slimmer than V-SOL: no bullet_points, no in_the_box, no ordering_info.
-- Adds datasheet_path (PDF per produk).

CREATE TABLE IF NOT EXISTS fiberhome_products (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  sku            VARCHAR(100) NOT NULL UNIQUE,
  name           VARCHAR(255) NOT NULL,
  category       VARCHAR(100),
  description    TEXT,
  image_path     VARCHAR(500),
  datasheet_path VARCHAR(500),
  sort_order     INT DEFAULT 0,
  created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_category (category),
  INDEX idx_sort (sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS fiberhome_gallery (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  image_path VARCHAR(500) NOT NULL,
  sort_order INT DEFAULT 0,
  INDEX idx_product (product_id),
  CONSTRAINT fk_fiberhome_gallery_product
    FOREIGN KEY (product_id) REFERENCES fiberhome_products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS fiberhome_technical_specs (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  label      VARCHAR(255) NOT NULL,
  value      VARCHAR(255) NOT NULL,
  sort_order INT DEFAULT 0,
  INDEX idx_product (product_id),
  CONSTRAINT fk_fiberhome_specs_product
    FOREIGN KEY (product_id) REFERENCES fiberhome_products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ---------------------------------------------------------------
-- Seed: produk pertama (GJYCH-1). image_path & datasheet_path
-- diisi belakangan lewat admin upload.
-- ---------------------------------------------------------------

INSERT INTO fiberhome_products (sku, name, category, description, sort_order)
VALUES (
  'GJYCH-1',
  'Drop Fiber G.657A1, 1 Core',
  'Drop Cable',
  'Kabel fiber optik FTTH single mode, konstruksi self-supporting dengan messenger wire baja, jacket LSZH hitam. Cocok untuk instalasi last-mile ke pelanggan.',
  0
) ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID(id);

SET @pid = LAST_INSERT_ID();

DELETE FROM fiberhome_technical_specs WHERE product_id = @pid;

INSERT INTO fiberhome_technical_specs (product_id, label, value, sort_order) VALUES
  (@pid, 'Fiber Standard',     'ITU-T G.657A2',            1),
  (@pid, 'Physical Standard',  'ITU-T G.657A1',            2),
  (@pid, 'Fiber Count',        '1 Core, Single Mode',      3),
  (@pid, 'Jacket',             'LSZH, Hitam',              4),
  (@pid, 'Messenger Wire',     'Steel 1.0mm',              5),
  (@pid, 'Strength Member',    'Steel 2×0.4mm',            6),
  (@pid, 'Dimensi Kabel',      '5.0–5.5mm × 2.0–2.5mm',    7),
  (@pid, 'Panjang per Roll',   '1000 m',                   8),
  (@pid, 'Tensile Strength',   '≥300N',                    9),
  (@pid, 'Breaking Strength',  '≥600N',                   10),
  (@pid, 'Atenuasi 1310nm',    '≤0.34 dB/km',             11),
  (@pid, 'Atenuasi 1550nm',    '≤0.21 dB/km',             12),
  (@pid, 'Bend Radius',        '15× Outer Diameter',      13),
  (@pid, 'Suhu Operasi',       '-10°C s/d +70°C',         14);
