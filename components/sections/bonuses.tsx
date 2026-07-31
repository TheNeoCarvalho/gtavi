import { Crown } from "lucide-react";
import { BONUSES, PRO_BONUSES, SITE } from "@/constants/site";
import { SectionHeading, SectionShell } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { CtaButton } from "@/components/ui/cta-button";

export function Bonuses() {
  return (
    <SectionShell id="bonus" className="bg-bg-elevated/40">
      <SectionHeading
        eyebrow="De brinde"
        title={
          <>
            Bônus <span className="text-gradient">inclusos</span> no pack
          </>
        }
        subtitle="Além dos vídeos, você leva materiais prontos pra acelerar seus resultados."
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        {BONUSES.map((bonus) => (
          <StaggerItem key={bonus.tag}>
            <div className="card-glow glass h-full rounded-xl p-6">
              <Badge tone="purple" className="mb-3">
                {bonus.tag}
              </Badge>
              <h3 className="font-display text-lg font-bold text-text">
                {bonus.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{bonus.desc}</p>
            </div>
          </StaggerItem>
        ))}
        <StaggerItem>
          <div className="gradient-border flex h-full flex-col rounded-xl p-6">
            <div className="mb-3 flex items-center gap-2">
              <Badge tone="amber" shimmer>
                <Crown className="size-3.5" aria-hidden /> PRO
              </Badge>
            </div>
            <h3 className="font-display text-lg font-bold text-text">
              Bônus exclusivos do plano PRO
            </h3>
            <div className="mt-3 space-y-3">
              {PRO_BONUSES.map((b) => (
                <div key={b.tag} className="rounded-lg bg-white/5 p-3">
                  <p className="font-display text-sm font-bold text-cta">{b.title}</p>
                  <p className="mt-1 text-xs text-muted">{b.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-wider text-dim">
              Disponível apenas no plano PRO
            </p>
          </div>
        </StaggerItem>
      </Stagger>

      <Reveal delay={0.2} className="mt-12">
        <CtaButton sub={`Compra única · Sem mensalidade · Garantia de 7 dias · R$ ${SITE.priceBasic.toFixed(2).replace(".", ",")}`} />
      </Reveal>
    </SectionShell>
  );
}
