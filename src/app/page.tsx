import { Hero } from "@/components/hero";
import { StorageGuide } from "@/components/storage-guide";
import { Story } from "@/components/story";
import Link from "next/link";

export default function Page() {
  return (
    <main className="pb-20">
      <Hero />
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="text-xs font-semibold tracking-wide text-latte/80">
                MENU
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-white/90 sm:text-3xl">
                Menu kohihop, satu tap.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                Buka halaman menu untuk lihat produk, pilih ukuran, lalu checkout
                cepat via WhatsApp.
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-2xl bg-latte px-5 py-3 text-sm font-semibold text-black transition hover:brightness-95"
            >
              Buka Menu
            </Link>
          </div>
        </div>
      </section>

      <StorageGuide />
      <Story />
    </main>
  );
}

