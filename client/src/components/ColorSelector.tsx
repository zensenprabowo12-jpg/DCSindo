import { useState } from "react";
import { ProductColor } from "@/lib/productColors";
import { cn } from "@/lib/utils";

interface ColorSelectorProps {
  colors: ProductColor[];
  defaultColor: string;
  onColorChange: (color: ProductColor) => void;
  className?: string;
}

/**
 * ColorSelector Component
 * 
 * Komponen untuk memilih warna produk dengan tampilan bulatan warna.
 * Ketika user klik bulatan warna, akan trigger callback onColorChange
 * yang bisa digunakan untuk mengubah gambar produk.
 */
export function ColorSelector({ 
  colors, 
  defaultColor, 
  onColorChange,
  className 
}: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);

  const handleColorClick = (color: ProductColor) => {
    setSelectedColor(color.name);
    onColorChange(color);
  };

  // Jika hanya ada 1 warna atau tidak ada warna, tidak perlu tampilkan selector
  if (!colors || colors.length <= 1) {
    return null;
  }

  return (
    <div className={cn("space-y-3", className)}>
      {/* Label Color */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Color:
        </span>
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          {selectedColor}
        </span>
      </div>

      {/* Color Circles */}
      <div className="flex items-center gap-3">
        {colors.map((color) => {
          const isSelected = selectedColor === color.name;
          
          return (
            <button
              key={color.name}
              onClick={() => handleColorClick(color)}
              className={cn(
                "relative w-10 h-10 rounded-full transition-all duration-200",
                "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                isSelected && "ring-2 ring-primary ring-offset-2 scale-110"
              )}
              title={color.name}
              aria-label={`Select ${color.name} color`}
            >
              {/* Color Circle */}
              <div
                className={cn(
                  "w-full h-full rounded-full border-2 transition-all",
                  isSelected 
                    ? "border-primary shadow-lg" 
                    : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                )}
                style={{ backgroundColor: color.hex }}
              />
              
              {/* Checkmark for selected color */}
              {isSelected && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white drop-shadow-lg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Optional: Color names list for accessibility */}
      <div className="sr-only">
        Available colors: {colors.map(c => c.name).join(", ")}
      </div>
    </div>
  );
}
