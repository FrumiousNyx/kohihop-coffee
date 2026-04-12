import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: `Menu - ${SITE.meta.title}`,
  description: `Explore our bottled coffee collection. From Original Kohi to specialty flavors like Almond Kohi and Berrycano. Ready-to-drink cold coffee delivered to your door.`,
  openGraph: {
    title: `Menu - ${SITE.meta.title}`,
    description: `Explore our bottled coffee collection. From Original Kohi to specialty flavors like Almond Kohi and Berrycano.`,
    url: `${SITE.url}/menu`,
    images: [
      {
        url: `${SITE.url}/realpic/product.png`,
        width: 1200,
        height: 630,
        alt: `KOHIHOP Coffee Menu - Bottled Coffee Collection`,
      }
    ],
  },
  twitter: {
    title: `Menu - ${SITE.meta.title}`,
    description: `Explore our bottled coffee collection. From Original Kohi to specialty flavors.`,
    images: [`${SITE.url}/realpic/product.png`],
  },
};
