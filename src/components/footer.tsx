import { buildWhatsAppUrl, getWhatsAppNumber } from "@/lib/whatsapp";
import { SITE } from "@/content/site";
import { Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const waUrl = buildWhatsAppUrl({
    number: getWhatsAppNumber(),
    message: SITE.whatsapp.defaultMessage
  });

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60 sm:px-6">
        {/* Instagram Feed Section */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-latte/90" />
                <span className="text-xs font-semibold tracking-wide text-latte/80">
                  INSTAGRAM
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white/90">
                Follow @kohihop for daily coffee inspiration
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Behind the scenes, new flavors, and customer moments.
              </p>
            </div>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" />
              Follow
            </a>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-black/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-latte/20 to-transparent" />
                <div className="absolute bottom-2 left-2 text-xs text-white/80">
                  #{i}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <span className="font-semibold text-white/80">{SITE.brand}</span> —
            Your Favorite Portable KOHI
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
