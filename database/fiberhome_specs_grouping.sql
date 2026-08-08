-- Tambah kolom `group` di specs untuk collapsible section di detail page
ALTER TABLE fiberhome_technical_specs
  ADD COLUMN spec_group VARCHAR(50) DEFAULT 'Umum' AFTER value;

-- Populate group untuk GJYCH-1
SET @pid = (SELECT id FROM fiberhome_products WHERE sku = 'GJYCH-1');

UPDATE fiberhome_technical_specs SET spec_group = 'Optical'
  WHERE product_id = @pid AND label IN ('Fiber Standard', 'Physical Standard', 'Fiber Count', 'Atenuasi 1310nm', 'Atenuasi 1550nm');

UPDATE fiberhome_technical_specs SET spec_group = 'Mechanical'
  WHERE product_id = @pid AND label IN ('Jacket', 'Messenger Wire', 'Strength Member', 'Dimensi Kabel', 'Panjang per Roll', 'Tensile Strength', 'Breaking Strength', 'Bend Radius');

UPDATE fiberhome_technical_specs SET spec_group = 'Environmental'
  WHERE product_id = @pid AND label IN ('Suhu Operasi');
