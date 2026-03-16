"use client";

import { Clock3, Shuffle, ThermometerSnowflake } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Keep at 4°C",
    desc: "Simpan di kulkas ±4°C agar rasa tetap clean.",
    Icon: ThermometerSnowflake
  },
  {
    title: "Shake before drink",
    desc: "Kocok perlahan untuk nyatuin coffee dan aroma.",
    Icon: Shuffle
  },
  {
    title: "Consume within 3 days",
    desc: "Untuk kualitas terbaik, habiskan dalam 3 hari.",
    Icon: Clock3
  }
];

export function StorageGuide() {
  return (
    <section id="storage" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs font-semibold tracking-wide text-latte/80">
            STORAGE GUIDE
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-white/90 sm:text-3xl">
            Simpan benar, rasanya maksimal.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Bottled coffee ini dibuat untuk dinikmati dingin. Ikuti panduan
            singkat di bawah untuk rasa yang konsisten di setiap tegukan.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
              <it.Icon className="h-5 w-5 text-latte/90" />
            </div>
            <div className="mt-4 text-base font-semibold text-white/90">
              {it.title}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-white/70">
              {it.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
