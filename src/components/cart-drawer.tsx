"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { products, sizeLabel } from "@/content/products";
import { useCart } from "@/cart/cart-context";
import { buildLineItems, calcTotalIdr, countItems } from "@/cart/cart-selectors";
import { formatIdr } from "@/lib/money";
import {
  buildCheckoutMessage,
  buildWhatsAppUrl,
  getWhatsAppNumber
} from "@/lib/whatsapp";

export function CartDrawer() {
  const cart = useCart();
  const [address, setAddress] = React.useState("");

  const lineItems = React.useMemo(
    () => buildLineItems({ items: cart.items, products }),
    [cart.items]
  );

  const totalIdr = React.useMemo(() => calcTotalIdr(lineItems), [lineItems]);
  const itemCount = countItems(cart.items);

  React.useEffect(() => {
    if (!cart.isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [cart.isOpen]);

  const checkout = React.useCallback(() => {
    if (lineItems.length === 0) return;
    const message = buildCheckoutMessage({ items: lineItems, totalIdr, address });
    const url = buildWhatsAppUrl({ number: getWhatsAppNumber(), message });
    window.location.href = url;
  }, [address, lineItems, totalIdr]);

  return (
    <AnimatePresence>
      {cart.isOpen ? (
        <div className="fixed inset-0 z-[60]">
          <motion.button
            type="button"
            onClick={cart.close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-default bg-black/60"
            aria-label="Close cart overlay"
          />

          <motion.aside
            initial={{ x: 420, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 420, opacity: 0 }}
            transition={{ type: "spring", stiffness: 360, damping: 30 }}
            className="absolute right-0 top-0 h-full w-full max-w-[440px] border-l border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <div className="text-sm font-semibold text-white/90">
                    Cart
                  </div>
                  <div className="mt-1 text-xs text-white/60">
                    {itemCount} item
                  </div>
                </div>
                <button
                  type="button"
                  onClick={cart.close}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
                  aria-label="Close cart"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-auto px-5 py-5">
                {lineItems.length === 0 ? (
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                    Cart masih kosong. Pilih produk dulu di bawah.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {lineItems.map(({ product, qty }) => (
                      <div
                        key={product.id}
                        className="rounded-3xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                            <Image
                              src={product.imageSrc}
                              alt={product.name}
                              fill
                              sizes="56px"
                              className="object-cover object-center"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <div className="truncate text-sm font-semibold text-white/90">
                                  {product.name}
                                </div>
                                <div className="mt-1 text-xs text-white/60">
                                  {sizeLabel(product.sizeMl)}
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => cart.remove(product.id)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10"
                                aria-label="Remove item"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                              <div className="text-sm font-semibold text-white/90">
                                {formatIdr(product.priceIdr * qty)}
                              </div>
                              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-2 py-2">
                                <button
                                  type="button"
                                  onClick={() => cart.decrement(product.id)}
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <input
                                  inputMode="numeric"
                                  value={qty}
                                  onChange={(e) =>
                                    cart.setQty(product.id, Number(e.target.value))
                                  }
                                  className="w-10 bg-transparent text-center text-sm font-semibold text-white/90 outline-none"
                                  aria-label="Quantity"
                                />
                                <button
                                  type="button"
                                  onClick={() => cart.add(product.id)}
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 px-5 py-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>Total</span>
                    <span className="text-base font-semibold text-white/90">
                      {formatIdr(totalIdr)}
                    </span>
                  </div>

                  <label className="mt-4 block text-xs font-semibold text-white/80">
                    Alamat pengantaran
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Tulis alamat lengkap..."
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none focus:border-latte/40"
                    />
                  </label>

                  <button
                    type="button"
                    onClick={checkout}
                    disabled={lineItems.length === 0}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-latte px-5 py-3 text-sm font-semibold text-black transition enabled:hover:brightness-95 disabled:opacity-50"
                  >
                    Checkout via WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={cart.clear}
                    disabled={lineItems.length === 0}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition enabled:hover:bg-white/10 disabled:opacity-50"
                  >
                    Clear cart
                  </button>
                </div>

                <div className="mt-3 text-xs leading-relaxed text-white/50">
                  Checkout akan membuka WhatsApp dengan pesan otomatis.
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

