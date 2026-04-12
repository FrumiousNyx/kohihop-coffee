import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Image from "next/image";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";
import { CartFab } from "@/components/cart-fab";
import { Footer } from "@/components/footer";
import { SITE } from "@/content/site";
import { Analytics } from "@vercel/analytics/react";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE.meta.title,
  description: SITE.meta.description,
  keywords: ["coffee", "bottled coffee", "cold brew", "kopi", "kohihop", "minuman kopi", "ready to drink"],
  authors: [{ name: SITE.brand }],
  creator: SITE.brand,
  publisher: SITE.brand,
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    title: SITE.meta.title,
    description: SITE.meta.description,
    siteName: SITE.brand,
    images: [
      {
        url: `${SITE.url}/realpic/homepage.png`,
        width: 1200,
        height: 630,
        alt: `${SITE.brand} - Bottled Coffee`,
      },
      {
        url: `${SITE.url}/realpic/product.png`,
        width: 1200,
        height: 630,
        alt: `KOHIHOP Coffee Products`,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.meta.title,
    description: SITE.meta.description,
    images: [`${SITE.url}/realpic/homepage.png`],
    creator: `@${SITE.socials.instagram.replace('https://instagram.com/', '')}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes for Google Search Console, etc. if needed
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen overflow-hidden bg-ink">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
            >
              <Image
                src="/bottle.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-[0.09] blur-[1px]"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
              <div className="absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-latte/10 blur-3xl" />
              <div className="absolute -right-28 bottom-10 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="relative">
              <Header />
              <CartDrawer />
              <CartFab />
              {children}
              <Footer />
            </div>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
