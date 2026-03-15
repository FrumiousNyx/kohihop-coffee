"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/cart/cart-context";
import { countItems } from "@/cart/cart-selectors";

export function CartFab() {
  const cart = useCart();
  const itemCount = countItems(cart.items);

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <motion.button
        type="button"
        onClick={cart.open}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.98 }}
        className="relative inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm font-semibold text-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl transition hover:bg-black/55"
        aria-label="Open cart"
      >
        <ShoppingBag className="h-4 w-4 text-latte/90" />
        <span>Cart</span>
        {itemCount > 0 ? (
          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-latte px-2 text-xs font-semibold text-black">
            {itemCount}
          </span>
        ) : (
          <span className="text-xs text-white/55">0</span>
        )}
      </motion.button>
    </div>
  );
}

