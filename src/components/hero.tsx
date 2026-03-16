"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import { getWhatsAppNumber, buildWhatsAppUrl } from "@/lib/whatsapp";
import { SITE } from "@/content/site";

export function Hero() {
  const waUrl = buildWhatsAppUrl({
    number: getWhatsAppNumber(),
    message: SITE.whatsapp.defaultMessage
  });

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-latte/10 blur-3xl" />
        <div className="absolute bottom-[-25%] left-[15%] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative">
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden border-y border-white/10 bg-white/5">
            <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[520px]">
              <Image
                src="/realpic/homepage.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-ink" />
            </div>
          </div>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg lg:max-w-4xl">
            Cold-brewed untuk rasa yang clean dan smooth. Tinggal buka, shake,
            minum—langsung lanjut jalan.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-latte px-5 py-3 text-sm font-semibold text-black transition hover:brightness-95"
            >
              Lihat Produk <ArrowDownRight className="h-4 w-4" />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Chat WhatsApp <MessageCircle className="h-4 w-4 text-latte/90" />
            </a>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-3 text-xs text-white/70 sm:max-w-md lg:max-w-5xl lg:gap-4 lg:text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 lg:p-5">
              <div className="text-white/90 lg:text-base">Cold only</div>
              <div className="mt-1">Tanpa menu panas.</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 lg:p-5">
              <div className="text-white/90 lg:text-base">3 ukuran</div>
              <div className="mt-1">250ml • 500ml • 1L</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 lg:p-5">
              <div className="text-white/90 lg:text-base">Order cepat</div>
              <div className="mt-1">Checkout via WhatsApp.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
