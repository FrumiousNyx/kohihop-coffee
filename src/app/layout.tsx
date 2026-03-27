import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";
import { CartFab } from "@/components/cart-fab";
import { Footer } from "@/components/footer";
import { SITE } from "@/content/site";
import { ThemeProvider } from "@/hooks/use-theme";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE.meta.title,
  description: SITE.meta.description,
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider>
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
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
