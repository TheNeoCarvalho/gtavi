import { Flame } from "lucide-react";
import { SectionShell } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/motion";
import { CtaButton } from "@/components/ui/cta-button";

export function FinalCta() {
  return (
    <SectionShell id="garanta" className="relative overflow-hidden">
      <div className="aurora" aria-hidden />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/gta6/ultimate-edition.jpg)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-bg)_0%,transparent_35%,transparent_65%,var(--color-bg)_100%)]"
        aria-hidden
      />
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 flex items-center justify-center gap-2">
            <Flame className="size-4" aria-hidden />
            O hype não espera
          </p>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-bold leading-tight tracking-tight">
            Enquanto você pensa, outros criadores{" "}
            <span className="text-gradient">já estão postando.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Garanta seu pack e entre na onda do maior lançamento da década,
            antes que o hype passe.
          </p>
          <CtaButton
            className="mt-8"
            sub="Acesso imediato · Garantia de 7 dias"
          />
        </div>
      </Reveal>
    </SectionShell>
  );
}
