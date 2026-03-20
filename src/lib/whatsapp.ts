import type { Product } from "@/content/products";
import { SITE } from "@/content/site";
import { formatIdr } from "@/lib/money";

export function getWhatsAppNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? SITE.whatsapp.number;
}

export function buildCheckoutMessage(args: {
  items: Array<{ product: Product; qty: number }>;
  totalIdr: number;
  address: string;
}) {
  const lines: string[] = [];
  lines.push("Halo saya mau pesan:");
  for (const { product, qty } of args.items) {
    lines.push(`- ${qty}x ${product.name} (${product.sizeMl === 1000 ? "1L" : `${product.sizeMl}ml`})`);
  }
  lines.push(`Total: ${formatIdr(args.totalIdr)}`);
  lines.push(`alamat: ${args.address || "-"}`);
  return lines.join("\n");
}

export function buildWhatsAppUrl(args: {
  number: string;
  message: string;
}) {
  const clean = args.number.replace(/[^\d]/g, "");
  const text = encodeURIComponent(args.message);
  return `https://wa.me/${clean}?text=${text}`;
}
