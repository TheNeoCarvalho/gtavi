"use client";

import { motion } from "framer-motion";
import { Play, Eye, ThumbsUp, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.35 },
  },
};

export function MockupPlayer({ className }: { className?: string }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cn("relative", className)}
    >
      <div
        className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-pink/30 via-purple/25 to-blue/25 blur-3xl"
        aria-hidden
      />
      <div className="glass-strong relative w-full max-w-[300px] rounded-[1.75rem] p-3 shadow-2xl">
        <div className="flex items-center gap-3 px-1 pb-3">
          <div className="size-9 rounded-full bg-gradient-to-br from-pink to-purple" aria-hidden />
          <div className="flex-1">
            <p className="font-display text-xs font-bold text-text">VIZION Clips</p>
            <p className="font-mono text-[0.6rem] text-dim">@vizionclips · 412k</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-danger/15 px-2 py-0.5 font-mono text-[0.6rem] font-semibold uppercase text-danger">
            <Flame className="size-3" aria-hidden /> viral
          </span>
        </div>

        <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-surface">
          <div
            className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#1a0b2e_0%,#0b0b18_55%,#07070f_100%)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "linear-gradient(200deg, transparent 30%, rgba(255,45,146,0.35) 60%, rgba(59,130,246,0.4) 100%)",
            }}
            aria-hidden
          />
          <div
            className="absolute -left-10 bottom-[-15%] size-48 rounded-full bg-pink/40 blur-3xl animate-[float-slow_14s_ease-in-out_infinite]"
            aria-hidden
          />
          <div
            className="absolute right-[-10%] top-[20%] size-40 rounded-full bg-blue/40 blur-3xl animate-[float-slower_20s_ease-in-out_infinite]"
            aria-hidden
          />
          <div
            className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/15 bg-gradient-to-br from-pink/50 via-purple/50 to-blue/50 opacity-70"
            aria-hidden
          />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25">
              <Play className="ml-0.5 size-6 fill-white text-white" aria-hidden />
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/70 to-transparent" aria-hidden />
          <div className="absolute inset-x-3 bottom-3">
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-pink to-purple" />
            </div>
          </div>
          <p className="absolute right-3 top-3 font-mono text-[0.6rem] text-white/80">
            0:58 / 1:12
          </p>
        </div>

        <div className="px-1 pt-3">
          <p className="font-display text-sm font-bold leading-snug text-text">
            Vazamento exclusivo GTA 6 que ninguém viu 🚨
          </p>
          <div className="mt-2 flex items-center gap-3 font-mono text-[0.65rem] text-dim">
            <span className="inline-flex items-center gap-1">
              <Eye className="size-3.5" aria-hidden /> 2,4 mi
            </span>
            <span className="inline-flex items-center gap-1">
              <ThumbsUp className="size-3.5" aria-hidden /> 189k
            </span>
            <span className="ml-auto rounded-full bg-pink/15 px-2 py-0.5 text-pink">
              pronto pra postar
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
