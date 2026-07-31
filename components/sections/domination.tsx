import { DOMINATION_STEPS, SITE } from "@/constants/site";
import { SectionHeading, SectionShell } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/motion";

export function Domination() {
  return (
    <SectionShell id="plano">
      <SectionHeading
        eyebrow="Seu plano de dominação"
        title={
          <>
            Poste 3 vídeos por dia e{" "}
            <span className="text-gradient">ative o modo turbo 🚀</span>
          </>
        }
        subtitle="Com +1.500 vídeos prontos, você tem munição de sobra: posta todo dia até o GTA 6 lançar — e ainda sobra conteúdo pra depois."
      />

      <Reveal>
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          <div
            className="timeline-line absolute left-[1.6rem] top-0 h-full w-px opacity-30 md:left-0 md:top-[1.6rem] md:h-px md:w-full"
            aria-hidden
          />
          {DOMINATION_STEPS.map((step) => (
            <li key={step.step} className="relative pl-14 md:pl-0 md:pt-16">
              <span className="absolute left-0 top-0 flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-pink to-purple font-display text-sm font-bold text-white shadow-[0_0_30px_rgba(255,45,146,0.5)] md:left-1/2 md:-translate-x-1/2">
                {step.step}
              </span>
              <h3 className="font-display text-xl font-bold text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-12 text-center font-display text-lg font-semibold text-text md:text-xl">
          🔥 3 vídeos/dia × {SITE.videos.toLocaleString("pt-BR")} vídeos ={" "}
          <span className="text-gradient">meses de conteúdo garantido</span>
        </p>
      </Reveal>
    </SectionShell>
  );
}
