import { ProductGrid } from "@/components/product-grid";
import { metadata } from "./metadata";

export { metadata };

export default function MenuPage() {
  return (
    <main className="pb-20 pt-28 sm:pt-32">
      <ProductGrid />
    </main>
  );
}

