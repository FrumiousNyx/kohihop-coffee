import { buildWhatsAppUrl, getWhatsAppNumber } from "@/lib/whatsapp";
import { SITE } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const waUrl = buildWhatsAppUrl({
    number: getWhatsAppNumber(),
    message: SITE.whatsapp.defaultMessage
  });

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60 sm:px-6">
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <span className="font-semibold text-white/80">{SITE.brand}</span> —
            kopi
            dingin botolan, siap kapan aja.
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/60 sm:justify-end">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white/90"
            >
              WhatsApp
            </a>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white/90"
            >
              Instagram
            </a>
            <a
              href={SITE.socials.tiktok}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white/90"
            >
              TikTok
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-white/45 sm:text-left">
          © {year} {SITE.brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
