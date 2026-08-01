"use client";

import { Flame } from "lucide-react";

export function Topbar() {
  return (
    <div className="relative z-50 flex items-center justify-center gap-3 border-b border-white/8 bg-gradient-to-r from-pink/10 via-purple/10 to-blue/10 px-4 py-2.5 backdrop-blur-md">
      <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-pink">
        <Flame className="size-3.5" aria-hidden />
        Conteúdo 100% pronto para postar
      </span>
    </div>
  );
}
