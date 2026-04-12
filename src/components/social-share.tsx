"use client";

import { Share2, MessageCircle, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/content/site";
import type { Product } from "@/content/products";
import { sizeLabel } from "@/content/products";

interface SocialShareProps {
  product: Product;
}

export function SocialShare({ product }: SocialShareProps) {
  const shareUrl = `${SITE.url}/menu#${product.id}`;
  const shareText = `Check out ${product.name} (${sizeLabel(product.sizeMl)}) - ${product.taste} by KOHIHOP!`;
  
  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      color: "bg-green-500"
    },
    {
      name: "Copy Link",
      icon: Link2,
      url: shareUrl,
      color: "bg-latte"
    }
  ];

  const handleShare = async (url: string, isCopyLink = false) => {
    if (isCopyLink) {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mt-3 flex gap-2">
      {shareLinks.map((link, idx) => (
        <motion.button
          key={link.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          onClick={() => handleShare(link.url, link.name === "Copy Link")}
          className={`inline-flex items-center justify-center gap-1.5 rounded-xl ${link.color} px-3 py-2 text-xs font-medium text-black transition hover:brightness-90`}
          title={link.name}
        >
          <link.icon className="h-3.5 w-3.5" />
          <span>{link.name}</span>
        </motion.button>
      ))}
    </div>
  );
}
