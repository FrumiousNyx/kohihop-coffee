"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useCart } from "@/cart/cart-context";

const nav = [
  { label: "Menu", href: "/menu" },
  { label: "Tentang", href: "/about" },
  { label: "Penyimpanan", href: "/storage" },
  { label: "Kontak", href: "/contact" }
];

export function MobileMenu() {
  const cart = useCart();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10 sm:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open ? (
          <div className="fixed inset-0 z-[70] sm:hidden">
            <motion.button
              type="button"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60"
              aria-label="Close menu overlay"
            />

            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
              className="absolute inset-x-4 top-4 overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between px-5 py-4">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center"
                >
                  <div className="relative h-14 w-14 rounded-xl bg-white p-2">
                    <Image
                      src="/logo.png"
                      alt="KOHIHOP"
                      fill
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-5 pb-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold tracking-wide text-latte/80">
                    NAVIGASI
                  </div>
                  <div className="mt-4 space-y-1">
                    {nav.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setOpen(false)}
                        className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-base font-semibold text-white/90 transition hover:bg-white/5"
                      >
                        <span>{it.label}</span>
                        <ArrowUpRight className="h-5 w-5 text-latte/90" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      cart.open();
                    }}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-latte px-5 py-3 text-sm font-semibold text-black transition hover:brightness-95"
                  >
                    Buka Cart
                  </button>
                  <Link
                    href="/menu"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    Lihat Produk
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

