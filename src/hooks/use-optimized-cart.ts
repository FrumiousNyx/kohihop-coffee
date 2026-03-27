"use client";

import { useCallback, useMemo } from "react";
import { useCart } from "@/cart/cart-context";

export function useOptimizedCart() {
  const cart = useCart();

  const optimizedActions = useMemo(() => ({
    add: useCallback((productId: string) => {
      // Optimized add with immediate feedback
      cart.add(productId);
      
      // Preload cart drawer for faster opening
      setTimeout(() => cart.open(), 100);
    }, [cart]),

    remove: useCallback((productId: string) => {
      cart.remove(productId);
    }, [cart]),

    clear: useCallback(() => {
      cart.clear();
    }, [cart]),

    toggle: useCallback(() => {
      cart.toggle();
    }, [cart]),

    open: useCallback(() => {
      cart.open();
    }, [cart]),

    close: useCallback(() => {
      cart.close();
    }, [cart])
  }), [cart]);

  return {
    ...cart,
    ...optimizedActions
  };
}
