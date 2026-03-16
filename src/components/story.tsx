"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Story({ imageFirstOnMobile = false }: { imageFirstOnMobile?: boolean }) {
  return (
    <section id="story" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div
          className={[
            "rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10",
            imageFirstOnMobile ? "order-2 lg:order-1" : ""
          ].join(" ")}
        >
          <div className="text-xs font-semibold tracking-wide text-latte/80">
            ABOUT KOHIHOP
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-white/90 sm:text-3xl">
            Kopi yang bikin mood naik satu hop.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            kohihop lahir dari kebiasaan yang sama: pengin kopi enak yang selalu
            siap, tanpa alat, tanpa ribet. Kami seduh dingin untuk rasa yang
            lebih clean dan low acidity, lalu botolkan biar bisa kamu bawa
            kemana-mana. Rasanya bold tapi tetap smooth—pas buat nemenin kerja,
            jalan, atau sekadar &ldquo;ngopi bentar&rdquo; yang jadi lama.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Small-batch brew",
                desc: "Diseduh berkala untuk rasa yang stabil."
              },
              { title: "Cold only", desc: "Tidak ada menu panas. Titik." },
              {
                title: "Flavor-first",
                desc: "Profil rasa seimbang: bold tapi tetap halus."
              },
              { title: "Fast checkout", desc: "Cart lokal, langsung WhatsApp." }
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="text-sm font-semibold text-white/90">
                  {f.title}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-white/70">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={[
            "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10",
            imageFirstOnMobile ? "order-1 lg:order-2" : ""
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-latte/10 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
          </div>
          <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-3xl bg-black/20 sm:max-w-[420px] lg:max-w-[440px]">
            <div className="relative w-full aspect-[224/300]">
              <Image
                src="/realpic/product.png"
                alt="KOHIHOP bottled coffee product"
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative mt-6 text-center text-sm text-white/70">
            &ldquo;Buka botol, satu teguk, mood langsung hop.&rdquo;
          </div>
        </motion.div>
      </div>
    </section>
  );
}

