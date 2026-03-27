import type { Product } from "@/content/products";

export function countItems(items: Record<string, number>) {
  return Object.values(items).reduce((sum, q) => sum + q, 0);
}

export function buildLineItems(args: {
  items: Record<string, number>;
  products: Product[];
}) {
  const byId = new Map(args.products.map((p) => [p.id, p] as const));
  const lineItems: Array<{ product: Product; qty: number }> = [];
  for (const [productId, qty] of Object.entries(args.items)) {
    const product = byId.get(productId);
    if (!product) continue;
    if (qty <= 0) continue;
    lineItems.push({ product, qty });
  }
  lineItems.sort((a, b) => a.product.name.localeCompare(b.product.name));
  return lineItems;
}

export function calcTotalIdr(lineItems: Array<{ product: Product; qty: number }>) {
  return lineItems.reduce((sum, li) => sum + li.product.priceIdr * li.qty, 0);
}

