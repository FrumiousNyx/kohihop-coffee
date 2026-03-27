export type Product = {
  id: string;
  name: string;
  sizeMl: 200 | 1000;
  priceIdr: number;
  taste: string;
  notes: string[];
  imageSrc: string;
};

export const products: Product[] = [
  {
    id: "almond-kohi-200",
    name: "Almond Kohi",
    sizeMl: 200,
    priceIdr: 15000,
    taste: "Nutty, Chocolaty, Smoky",
    notes: ["Almond", "Milky", "Smooth"],
    imageSrc: "/menu/almond-kohi.png"
  },
  {
    id: "almond-kohi-1000",
    name: "Almond Kohi",
    sizeMl: 1000,
    priceIdr: 70000,
    taste: "Nutty, Chocolaty, Smoky",
    notes: ["Almond", "Milky", "Smooth"],
    imageSrc: "/menu/almond-kohi.png"
  },
  {
    id: "milk-kohi-200",
    name: "Kohi Milk",
    sizeMl: 200,
    priceIdr: 15000,
    taste: "Creamy, Sweet, Bold",
    notes: ["Milky", "Balanced", "Creamy"],
    imageSrc: "/menu/milk-kohi.png"
  },
  {
    id: "milk-kohi-1000",
    name: "Kohi Milk",
    sizeMl: 1000,
    priceIdr: 70000,
    taste: "Creamy, Sweet, Bold",
    notes: ["Milky", "Balanced", "Creamy"],
    imageSrc: "/menu/milk-kohi.png"
  },
  {
    id: "butterscotch-kohi-200",
    name: "Butterscotch Kohi",
    sizeMl: 200,
    priceIdr: 15000,
    taste: "Buttery, Sweet Caramel, Smooth",
    notes: ["Butterscotch", "Sweet", "Rich"],
    imageSrc: "/menu/butterscotch-kohi.png"
  },
  {
    id: "butterscotch-kohi-1000",
    name: "Butterscotch Kohi",
    sizeMl: 1000,
    priceIdr: 70000,
    taste: "Buttery, Sweet Caramel, Smooth",
    notes: ["Butterscotch", "Sweet", "Rich"],
    imageSrc: "/menu/butterscotch-kohi.png"
  },
  {
    id: "original-kohi-200",
    name: "Original Kohi",
    sizeMl: 200,
    priceIdr: 13000,
    taste: "Clean, Bold, Smooth",
    notes: ["Original", "Bold", "Smooth"],
    imageSrc: "/menu/original-kohi.png"
  },
  {
    id: "original-kohi-1000",
    name: "Original Kohi",
    sizeMl: 1000,
    priceIdr: 60000,
    taste: "Clean, Bold, Smooth",
    notes: ["Original", "Bold", "Smooth"],
    imageSrc: "/menu/original-kohi.png"
  },
  {
    id: "palm-sugar-kohi-200",
    name: "Palm Sugar",
    sizeMl: 200,
    priceIdr: 13000,
    taste: "Touch of Caramel, Smoky, Bold",
    notes: ["Palm Sugar", "Caramel", "Bold"],
    imageSrc: "/menu/palm-sugar.png"
  },
  {
    id: "palm-sugar-kohi-1000",
    name: "Palm Sugar",
    sizeMl: 1000,
    priceIdr: 60000,
    taste: "Touch of Caramel, Smoky, Bold",
    notes: ["Palm Sugar", "Caramel", "Bold"],
    imageSrc: "/menu/palm-sugar.png"
  },
  {
    id: "berrycano-kohi-200",
    name: "Berrycano",
    sizeMl: 200,
    priceIdr: 13000,
    taste: "Fruity, Refreshing, Bold",
    notes: ["Berry", "Fruity", "Bold"],
    imageSrc: "/menu/berrycano.png"
  },
  {
    id: "berrycano-kohi-1000",
    name: "Berrycano",
    sizeMl: 1000,
    priceIdr: 60000,
    taste: "Fruity, Refreshing, Bold",
    notes: ["Berry", "Fruity", "Bold"],
    imageSrc: "/menu/berrycano.png"
  }
];

export function sizeLabel(sizeMl: Product["sizeMl"]) {
  return sizeMl === 1000 ? "1L" : `${sizeMl}ml`;
}
