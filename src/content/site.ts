export const SITE = {
  brand: "KOHIHOP",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  meta: {
    title: "KOHIHOP — Bottled Coffee",
    description:
      "Your favorite portable kohi. Smooth, clean, dan siap jadi stok kulkas."
  },
  whatsapp: {
    number: "6285111410014",
    defaultMessage: "Halo KOHIHOP, saya mau tanya menu bottled coffee dan harga."
  },
  socials: {
    instagram: "https://instagram.com/kohihop",
    tiktok: "https://tiktok.com/@kohihop6"
  }
} as const;
