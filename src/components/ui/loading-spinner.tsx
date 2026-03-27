"use client";

import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="h-8 w-8 rounded-full border-2 border-white/20 border-t-latte border-r-transparent border-b-transparent"
      >
        <div className="h-full w-full rounded-full border-2 border-white/20 border-t-latte border-r-transparent border-b-transparent" />
      </motion.div>
    </div>
  );
}
