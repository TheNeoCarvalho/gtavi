"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useHasScrolled } from "@/hooks/use-interactions";

export function StickyCta() {
  const scrolled = useHasScrolled(900);
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-bg-elevated/85 px-4 py-3 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-md items-center justify-between gap-3">
            <p className="font-display text-xs font-bold text-text">
              +1.500 vídeos de GTA 6
            </p>
            <a href="#pricing" className="btn-primary min-h-11 !px-5 !py-2 text-sm whitespace-nowrap">
              QUERO MEU PACK
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
