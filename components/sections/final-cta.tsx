import { Flame } from "lucide-react";
import { SITE } from "@/constants/site";
import { SectionShell } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/motion";
import { CtaButton } from "@/components/ui/cta-button";
import { Countdown } from "@/components/ui/countdown";

export function FinalCta() {
  return (
    <SectionShell id="garanta" className="relative overflow-hidden">
      <div className="aurora" aria-hidden />
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 flex items-center justify-center gap-2">
            <Flame className="size-4" aria-hidden />
            O hype não espera
          </p>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-bold leading-tight tracking-tight">
            Enquanto você pensa, outros criadores{" "}
            <span className="text-gradient">já estão postando e faturando.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Garanta seu pack com {SITE.spotsLeft} vagas restantes e entre na
            onda antes que a oferta de lançamento acabe.
          </p>
          <div className="mt-7 flex justify-center">
            <Countdown />
          </div>
          <CtaButton
            className="mt-8"
            sub={`Acesso imediato · ${SITE.spotsLeft} vagas restantes · Garantia de 7 dias`}
          />
        </div>
      </Reveal>
    </SectionShell>
  );
}
