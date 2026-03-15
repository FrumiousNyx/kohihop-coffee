export type Product = {
  id: string;
  name: string;
  sizeMl: 250 | 500 | 1000;
  priceIdr: number;
  taste: string;
  notes: string[];
  imageSrc: string;
};

export const products: Product[] = [
  {
    id: "coldbrew-original-250",
    name: "Cold Brew Original",
    sizeMl: 250,
    priceIdr: 28000,
    taste: "Clean, bold, low acidity",
    notes: ["Chocolatey", "Roasty", "Smooth finish"],
    imageSrc: "/products/coldbrew.svg"
  },
  {
    id: "coldbrew-original-500",
    name: "Cold Brew Original",
    sizeMl: 500,
    priceIdr: 52000,
    taste: "Clean, bold, low acidity",
    notes: ["Chocolatey", "Roasty", "Smooth finish"],
    imageSrc: "/products/coldbrew.svg"
  },
  {
    id: "coldbrew-original-1000",
    name: "Cold Brew Original",
    sizeMl: 1000,
    priceIdr: 94000,
    taste: "Clean, bold, low acidity",
    notes: ["Chocolatey", "Roasty", "Smooth finish"],
    imageSrc: "/products/coldbrew.svg"
  },
  {
    id: "oat-latte-250",
    name: "Oat Latte",
    sizeMl: 250,
    priceIdr: 32000,
    taste: "Creamy, caramel-like sweetness",
    notes: ["Creamy", "Caramel", "Silky mouthfeel"],
    imageSrc: "/products/oatlatte.svg"
  },
  {
    id: "oat-latte-500",
    name: "Oat Latte",
    sizeMl: 500,
    priceIdr: 60000,
    taste: "Creamy, caramel-like sweetness",
    notes: ["Creamy", "Caramel", "Silky mouthfeel"],
    imageSrc: "/products/oatlatte.svg"
  },
  {
    id: "oat-latte-1000",
    name: "Oat Latte",
    sizeMl: 1000,
    priceIdr: 108000,
    taste: "Creamy, caramel-like sweetness",
    notes: ["Creamy", "Caramel", "Silky mouthfeel"],
    imageSrc: "/products/oatlatte.svg"
  },
  {
    id: "mocha-250",
    name: "Iced Mocha",
    sizeMl: 250,
    priceIdr: 34000,
    taste: "Dark cocoa and espresso",
    notes: ["Cocoa", "Velvety", "Dessert-like"],
    imageSrc: "/products/mocha.svg"
  },
  {
    id: "mocha-500",
    name: "Iced Mocha",
    sizeMl: 500,
    priceIdr: 64000,
    taste: "Dark cocoa and espresso",
    notes: ["Cocoa", "Velvety", "Dessert-like"],
    imageSrc: "/products/mocha.svg"
  },
  {
    id: "mocha-1000",
    name: "Iced Mocha",
    sizeMl: 1000,
    priceIdr: 116000,
    taste: "Dark cocoa and espresso",
    notes: ["Cocoa", "Velvety", "Dessert-like"],
    imageSrc: "/products/mocha.svg"
  }
];

export function sizeLabel(sizeMl: Product["sizeMl"]) {
  return sizeMl === 1000 ? "1L" : `${sizeMl}ml`;
}

