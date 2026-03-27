"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/cart/cart-context";
import { countItems } from "@/cart/cart-selectors";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const cart = useCart();
  const itemCount = countItems(cart.items);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl">
          <Link
            href="/"
            className="group inline-flex items-center"
          >
            <div className="relative h-16 w-16 sm:h-20 sm:w-20">
              <Image
                src="/logo.png"
                alt="KOHIHOP"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <Link href="/menu" className="transition hover:text-white/90">
              Menu
            </Link>
            <Link href="/about" className="transition hover:text-white/90">
              Tentang
            </Link>
            <Link href="/storage" className="transition hover:text-white/90">
              Penyimpanan
            </Link>
            <Link href="/contact" className="transition hover:text-white/90">
              Kontak
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <MobileMenu />
            <ThemeToggle />
            <button
              type="button"
              onClick={cart.open}
              className="relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4 text-latte/90" />
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 ? (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-latte px-1 text-xs font-semibold text-black">
                  {itemCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
