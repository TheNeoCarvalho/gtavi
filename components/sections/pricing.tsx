"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X, Crown, Zap, ShieldCheck, Lock } from "lucide-react";
import {
  SITE,
  PRICING_BASIC_FEATURES,
  PRICING_PRO_FEATURES,
  RECENT_BUYERS,
} from "@/constants/site";
import { SectionHeading, SectionShell } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Countdown } from "@/components/ui/countdown";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

function formatPrice(value: number) {
  return value.toFixed(2).replace(".", ",");
}

export function Pricing() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="pricing" className="relative overflow-hidden">
      <div className="aurora" aria-hidden />
      <SectionHeading
        eyebrow="Garanta sua vaga"
        title={
          <>
            Acesso ao <span className="text-gradient">pack completo</span>
          </>
        }
        subtitle="Cada criador recebe um pack diferente — os vídeos não se repetem entre os membros. Por isso as vagas são limitadas."
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 flex flex-col items-center gap-3"
      >
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <Badge tone="danger" shimmer className="animate-glow-pulse">
            <Zap className="size-3.5" aria-hidden />
            {SITE.spotsLeft} de {SITE.spotsTotal} vagas restantes
          </Badge>
          <span className="font-mono text-xs uppercase tracking-wider text-dim">
            Oferta de lançamento termina em
          </span>
          <Countdown />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center -space-x-2" aria-hidden>
            {RECENT_BUYERS.map((b, i) => (
              <Avatar key={b.name} name={b.name} index={i} size="sm" className="ring-2 ring-bg" />
            ))}
          </div>
          <p className="font-mono text-xs text-dim">
            <span className="text-success">{RECENT_BUYERS.length}</span> acessos nos últimos 40 min
          </p>
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
        {/* Basic */}
        <div className="card-glow glass flex flex-col rounded-2xl p-7">
          <Badge tone="blue" className="mb-4 w-fit">
            Plano Básico
          </Badge>
          <h3 className="font-display text-xl font-bold text-text">
            {SITE.videos.toLocaleString("pt-BR")} vídeos prontos
          </h3>
          <div className="mt-4 flex items-end gap-2">
            <span className="pb-1 font-display text-lg text-dim line-through">
              R$ {formatPrice(SITE.priceBasicAnchor)}
            </span>
            <span className="font-display text-5xl font-bold text-text">
              R$ {formatPrice(SITE.priceBasic)}
            </span>
          </div>
          <p className="mt-1 font-mono text-xs text-dim">
            no PIX à vista · acesso imediato · menos de 2 centavos por vídeo
          </p>

          <ul className="mt-6 space-y-3">
            {PRICING_BASIC_FEATURES.map((f) => (
              <li key={f.text} className="flex items-start gap-3">
                {f.included ? (
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 ring-1 ring-success/30">
                    <Check className="size-3 text-success" aria-hidden />
                  </span>
                ) : (
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                    <X className="size-3 text-dim" aria-hidden />
                  </span>
                )}
                <span className={cn("text-sm", f.included ? "text-text" : "text-dim line-through")}>
                  {f.text}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={SITE.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-full text-center text-sm"
          >
            QUERO O PLANO BÁSICO
          </a>
          <p className="mt-3 text-center font-mono text-xs text-dim">
            🔒 Compra 100% segura · Garantia de 7 dias
          </p>
        </div>

        {/* Pro */}
        <div className="gradient-border relative flex flex-col rounded-2xl p-7 shadow-[0_0_60px_-20px_rgba(255,45,146,0.5)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge tone="amber" shimmer className="bg-surface text-sm">
              <Crown className="size-4" aria-hidden />
              ESCOLHA DA MAIORIA
            </Badge>
          </div>
          <Badge tone="purple" className="mb-4 w-fit">
            <Crown className="size-3.5" aria-hidden />
            Plano PRO
          </Badge>
          <h3 className="font-display text-xl font-bold text-text">
            A biblioteca completa — tudo liberado
          </h3>
          <div className="mt-4 flex items-end gap-2">
            <span className="pb-1 font-display text-lg text-dim line-through">
              R$ {formatPrice(SITE.priceProAnchor)}
            </span>
            <span className="font-display text-5xl font-bold text-gradient">
              R$ {formatPrice(SITE.pricePro)}
            </span>
          </div>
          <p className="mt-1 font-mono text-xs text-dim">
            no PIX à vista · acesso imediato · monetize até em dólar
          </p>

          <ul className="mt-6 space-y-3">
            {PRICING_PRO_FEATURES.map((f) => (
              <li key={f.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 ring-1 ring-success/30">
                  <Check className="size-3 text-success" aria-hidden />
                </span>
                <span className="text-sm text-text">{f.text}</span>
              </li>
            ))}
          </ul>

          <a
            href={SITE.checkoutProUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-full text-center text-sm"
          >
            QUERO O PLANO PRO 👑
          </a>
          <p className="mt-3 text-center font-mono text-xs text-dim">
            🔒 Compra 100% segura · Garantia de 7 dias
          </p>
        </div>
      </div>

      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-10 flex items-center justify-center gap-2 text-center font-mono text-xs text-dim"
      >
        <ShieldCheck className="size-4 text-success" aria-hidden />
        Compra processada em plataforma de pagamento reconhecida
        <Lock className="ml-2 size-3.5" aria-hidden />
        Dados criptografados
      </motion.p>
    </SectionShell>
  );
}
