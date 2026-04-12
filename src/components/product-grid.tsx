import { products } from "@/content/products";
import { ProductCard } from "@/components/product-card";

export function ProductGrid() {

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
          Ukuran: <span className="text-white/90">200ml • 1L</span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-xs font-semibold tracking-wide text-latte/80">
            QUICK PICKS
          </div>
          <div className="mt-2 text-sm leading-relaxed text-white/70">
            Lagi buru-buru? Ambil 200ml untuk personal, atau 1L untuk stok di kulkas.
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              { label: "200ml", desc: "Personal" },
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
