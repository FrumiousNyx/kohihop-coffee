"use client";

import { products } from "@/content/products";
import { ProductCard } from "@/components/product-card";
import { formatIdr } from "@/lib/money";
import { ArrowDownRight, Plus } from "lucide-react";
import { useCart } from "@/cart/cart-context";

export function ProductGrid() {
  const cart = useCart();
  const menu = products
    .filter((p) => p.sizeMl === 250)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="products" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="text-xs font-semibold tracking-wide text-latte/80">
            SHOP
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-white/90 sm:text-3xl">
            Pilih rasa. Pilih ukuran.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Semua produk ready-to-drink dan cold only. Harga sudah termasuk
            kemasan botol premium.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
          Ukuran: <span className="text-white/90">250ml • 500ml • 1L</span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold tracking-wide text-latte/80">
              MENU
            </div>
            <a
              href="#grid"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 transition hover:text-white/90"
            >
              Lihat semua <ArrowDownRight className="h-4 w-4 text-latte/90" />
            </a>
          </div>

          <div className="mt-4 space-y-2">
            {menu.map((p) => (
              <div
                key={p.id}
                className="rounded-3xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-base font-semibold text-white/90">
                      {p.name}
                    </div>
                    <div className="mt-1 text-sm text-white/65">{p.taste}</div>
                    <div className="mt-2 text-xs text-white/55">
                      Mulai dari{" "}
                      <span className="font-semibold text-latte/90">
                        {formatIdr(p.priceIdr)}
                      </span>{" "}
                      (250ml)
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => cart.add(p.id)}
                    className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-latte text-black transition hover:brightness-95"
                    aria-label={`Add ${p.name} 250ml to cart`}
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById(p.id);
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    Lihat ukuran
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      cart.add(p.id);
                      cart.open();
                    }}
                    className="inline-flex flex-1 items-center justify-center rounded-2xl bg-latte px-4 py-3 text-sm font-semibold text-black transition hover:brightness-95"
                  >
                    Beli sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-xs font-semibold tracking-wide text-latte/80">
            QUICK PICKS
          </div>
          <div className="mt-2 text-sm leading-relaxed text-white/70">
            Lagi buru-buru? Ambil 250ml untuk personal, 500ml untuk share, atau
            1L untuk stok di kulkas.
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {[
              { label: "250ml", desc: "Personal" },
              { label: "500ml", desc: "Share" },
              { label: "1L", desc: "Stock" }
            ].map((s) => (
              <a
                key={s.label}
                href="#grid"
                className="rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:bg-black/30"
              >
                <div className="text-sm font-semibold text-white/90">
                  {s.label}
                </div>
                <div className="mt-1 text-xs text-white/60">{s.desc}</div>
              </a>
            ))}
          </div>
          <div className="mt-5 text-xs text-white/55">
            Tip: ukuran 1L paling enak kalau selalu disimpan di 4°C.
          </div>
        </div>
      </div>

      <div id="grid" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </section>
  );
}

