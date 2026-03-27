"use client";

import { LazyImage } from "@/components/ui/lazy-image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "@/content/products";
import { sizeLabel } from "@/content/products";
import { formatIdr } from "@/lib/money";
import { useCart } from "@/cart/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const cart = useCart();

  return (
    <motion.div
      id={product.id}
      data-product-name={product.name}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="group relative scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-white/5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-latte/10 blur-2xl" />
        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-white/90">
              {product.name}
            </div>
            <div className="mt-1 text-xs text-white/60">
              {sizeLabel(product.sizeMl)} • {product.taste}
            </div>
          </div>
          <div className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-latte/90">
            {formatIdr(product.priceIdr)}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[92px_1fr] gap-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <LazyImage
              src={product.imageSrc}
              alt={`${product.name} ${sizeLabel(product.sizeMl)}`}
              priority={false}
            />
          </div>
          <div className="flex flex-col">
            <div>
              <div className="text-xs font-semibold text-white/80">Notes</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.notes.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-white/70"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => cart.add(product.id)}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-latte px-4 py-3 text-sm font-semibold text-black transition hover:brightness-95"
          suppressHydrationWarning
        >
          <Plus className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </motion.div>
  );
}

