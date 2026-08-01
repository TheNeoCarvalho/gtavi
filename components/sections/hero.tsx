"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { HERO_STATS } from "@/constants/site";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CtaButton } from "@/components/ui/cta-button";
import { MockupPlayer } from "@/components/home/mockup-player";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-10 md:pt-16">
      <div className="aurora" aria-hidden />
      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show">
              <Badge tone="pink" shimmer className="mb-5">
                ⚡ Lançamento · conteúdo 100% pronto
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="font-display text-[clamp(2.3rem,5.6vw,4.2rem)] font-bold leading-[1.04] tracking-tight"
            >
              <span className="text-gradient">+1.500 vídeos de GTA 6</span>{" "}
              prontos pra postar. Enquanto o hype explode.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg lg:mx-0"
            >
              Cortes virais de gameplay — sem marca d&apos;água, com
              narração e edição feitas. Formato vertical de +1 minuto, ideal pra
              monetizar no YouTube Shorts, Reels e TikTok.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
              className="mt-8"
            >
              <CtaButton sub="Acesso imediato · Garantia de 7 dias" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="show"
              className="mt-8 flex items-center justify-center gap-2 lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                <ShieldCheck className="size-4 text-success" aria-hidden />
                Compra segura · Garantia de 7 dias
              </span>
            </motion.div>

            <motion.dl
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate="show"
              className="mt-10 grid grid-cols-3 gap-4 border-t border-white/8 pt-6"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-gradient md:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs text-dim">{stat.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <MockupPlayer />
          </div>
        </div>
      </Container>
    </section>
  );
}
