import { buildWhatsAppUrl, getWhatsAppNumber } from "@/lib/whatsapp";
import { SITE } from "@/content/site";

export default function ContactPage() {
  const waUrl = buildWhatsAppUrl({
    number: getWhatsAppNumber(),
    message: SITE.whatsapp.defaultMessage
  });

  return (
    <main className="pb-20 pt-28 sm:pt-32">
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10">
          <div className="text-xs font-semibold tracking-wide text-latte/80">
            CONTACT
          </div>
          <h1 className="mt-2 text-2xl font-semibold text-white/90 sm:text-3xl">
            Reach out to us!
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Fastest way via WhatsApp, send a message, select your menu, and we&apos;ll take care of the rest.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-latte px-5 py-3 text-sm font-semibold text-black transition hover:brightness-95"
            >
              Chat WhatsApp
            </a>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-sm text-white/70">
              Whatsapp: 0851-1141-0014
            </div>
          </div>

          <div className="mt-8">
            <div className="text-center text-sm text-white/70">
              Lagi buru-buru? Ambil 200ml untuk personal, atau 1L untuk stok di kulkas.
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-white/70 sm:max-w-md lg:max-w-5xl lg:gap-4 lg:text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 lg:p-5">
              <div className="text-white/90 lg:text-base">200ml</div>
              <div className="mt-1">Personal</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 lg:p-5">
              <div className="text-white/90 lg:text-base">1L</div>
              <div className="mt-1">Stock</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
