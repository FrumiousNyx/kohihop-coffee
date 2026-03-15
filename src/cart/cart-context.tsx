"use client";

import * as React from "react";

type CartState = {
  isOpen: boolean;
  items: Record<string, number>;
};

type CartAction =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "TOGGLE" }
  | { type: "ADD"; productId: string }
  | { type: "DECREMENT"; productId: string }
  | { type: "REMOVE"; productId: string }
  | { type: "SET_QTY"; productId: string; qty: number }
  | { type: "CLEAR" };

const CART_STORAGE_KEY = "kohihop-cart-v1";

function clampQty(qty: number) {
  if (!Number.isFinite(qty)) return 0;
  return Math.max(0, Math.min(99, Math.floor(qty)));
}

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    case "ADD": {
      const next = { ...state.items };
      next[action.productId] = (next[action.productId] ?? 0) + 1;
      return { ...state, items: next, isOpen: true };
    }
    case "DECREMENT": {
      const next = { ...state.items };
      const current = next[action.productId] ?? 0;
      const updated = current - 1;
      if (updated <= 0) delete next[action.productId];
      else next[action.productId] = updated;
      return { ...state, items: next };
    }
    case "REMOVE": {
      const next = { ...state.items };
      delete next[action.productId];
      return { ...state, items: next };
    }
    case "SET_QTY": {
      const next = { ...state.items };
      const qty = clampQty(action.qty);
      if (qty <= 0) delete next[action.productId];
      else next[action.productId] = qty;
      return { ...state, items: next };
    }
    case "CLEAR":
      return { ...state, items: {}, isOpen: false };
    default:
      return state;
  }
}

function init(): CartState {
  if (typeof window === "undefined") return { isOpen: false, items: {} };
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return { isOpen: false, items: {} };
    const parsed = JSON.parse(raw) as { items?: Record<string, number> };
    return { isOpen: false, items: parsed.items ?? {} };
  } catch {
    return { isOpen: false, items: {} };
  }
}

type CartContextValue = {
  isOpen: boolean;
  items: Record<string, number>;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (productId: string) => void;
  decrement: (productId: string) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
};

const CartContext = React.createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, undefined, init);

  React.useEffect(() => {
    try {
      window.localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify({ items: state.items })
      );
    } catch {}
  }, [state.items]);

  const value = React.useMemo<CartContextValue>(() => {
    return {
      isOpen: state.isOpen,
      items: state.items,
      open: () => dispatch({ type: "OPEN" }),
      close: () => dispatch({ type: "CLOSE" }),
      toggle: () => dispatch({ type: "TOGGLE" }),
      add: (productId) => dispatch({ type: "ADD", productId }),
      decrement: (productId) => dispatch({ type: "DECREMENT", productId }),
      remove: (productId) => dispatch({ type: "REMOVE", productId }),
      setQty: (productId, qty) => dispatch({ type: "SET_QTY", productId, qty }),
      clear: () => dispatch({ type: "CLEAR" })
    };
  }, [state.isOpen, state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

