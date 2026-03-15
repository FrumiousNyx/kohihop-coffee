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
            Hubungi KOHIHOP
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Paling cepat lewat WhatsApp. Kirim pesan, pilih menu, dan kami bantu
            bikin pesananmu melompat ke proses packing.
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
              Jam respon: 10.00–22.00 WIB
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { t: "Pengiriman", d: "Tulis alamat lengkap saat checkout." },
              { t: "Pembayaran", d: "Konfirmasi via chat setelah order." },
              { t: "Custom", d: "Butuh banyak botol? Bisa request." }
            ].map((it) => (
              <div
                key={it.t}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="text-sm font-semibold text-white/90">{it.t}</div>
                <div className="mt-1 text-xs leading-relaxed text-white/65">
                  {it.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
