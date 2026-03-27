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
    id: "almond-kohi-250",
    name: "Almond Kohi",
    sizeMl: 250,
    priceIdr: 15000,
    taste: "Nutty, creamy, smooth finish",
    notes: ["Almond", "Milky", "Smooth"],
    imageSrc: "/menu/almond-kohi.png"
  },
  {
    id: "almond-kohi-500",
    name: "Almond Kohi",
    sizeMl: 500,
    priceIdr: 30000,
    taste: "Nutty, creamy, smooth finish",
    notes: ["Almond", "Milky", "Smooth"],
    imageSrc: "/menu/almond-kohi.png"
  },
  {
    id: "almond-kohi-1000",
    name: "Almond Kohi",
    sizeMl: 1000,
    priceIdr: 45000,
    taste: "Nutty, creamy, smooth finish",
    notes: ["Almond", "Milky", "Smooth"],
    imageSrc: "/menu/almond-kohi.png"
  },
  {
    id: "milk-kohi-250",
    name: "Milk Kohi",
    sizeMl: 250,
    priceIdr: 15000,
    taste: "Milky, balanced coffee, creamy",
    notes: ["Milky", "Balanced", "Creamy"],
    imageSrc: "/menu/milk-kohi.png"
  },
  {
    id: "milk-kohi-500",
    name: "Milk Kohi",
    sizeMl: 500,
    priceIdr: 30000,
    taste: "Milky, balanced coffee, creamy",
    notes: ["Milky", "Balanced", "Creamy"],
    imageSrc: "/menu/milk-kohi.png"
  },
  {
    id: "milk-kohi-1000",
    name: "Milk Kohi",
    sizeMl: 1000,
    priceIdr: 45000,
    taste: "Milky, balanced coffee, creamy",
    notes: ["Milky", "Balanced", "Creamy"],
    imageSrc: "/menu/milk-kohi.png"
  },
  {
    id: "butterscotch-kohi-250",
    name: "Butterscotch Kohi",
    sizeMl: 250,
    priceIdr: 15000,
    taste: "Buttery sweetness, coffee-forward",
    notes: ["Butterscotch", "Sweet", "Rich"],
    imageSrc: "/menu/butterscotch-kohi.png"
  },
  {
    id: "butterscotch-kohi-500",
    name: "Butterscotch Kohi",
    sizeMl: 500,
    priceIdr: 30000,
    taste: "Buttery sweetness, coffee-forward",
    notes: ["Butterscotch", "Sweet", "Rich"],
    imageSrc: "/menu/butterscotch-kohi.png"
  },
  {
    id: "butterscotch-kohi-1000",
    name: "Butterscotch Kohi",
    sizeMl: 1000,
    priceIdr: 45000,
    taste: "Buttery sweetness, coffee-forward",
    notes: ["Butterscotch", "Sweet", "Rich"],
    imageSrc: "/menu/butterscotch-kohi.png"
  }
];

export function sizeLabel(sizeMl: Product["sizeMl"]) {
  return sizeMl === 1000 ? "1L" : `${sizeMl}ml`;
}
