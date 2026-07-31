import { OPPORTUNITY_STATS } from "@/constants/site";
import { SectionHeading, SectionShell } from "@/components/ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

export function Opportunity() {
  return (
    <SectionShell id="oportunidade" className="relative overflow-hidden">
      <div className="aurora-violet" aria-hidden />
      <SectionHeading
        eyebrow="A oportunidade da década"
        title={
          <>
            O GTA 6 vai quebrar a internet.{" "}
            <span className="text-gradient">Quem tá preparado vai lucrar alto.</span>
          </>
        }
      />

      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-muted md:text-lg">
            É o maior lançamento da história dos games. Todo dia, milhões de
            pessoas procuram cortes, trailers e novidades — e os canais que
            postam GTA 6 estão explodindo de views.{" "}
            <strong className="text-text">
              O problema? Editar vídeo dá trabalho, toma horas
            </strong>
            , e muita gente quer lucrar com isso, mas não sabe como — nem tem
            tempo.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            O VIZION PACK resolve isso: você recebe{" "}
            <strong className="text-gradient">+1.500 vídeos 100% prontos</strong>, no
            formato certo, sem marca d&apos;água, com narração e edição feitas. É
            só escolher, baixar e postar.
          </p>
        </div>
      </Reveal>

      <Stagger className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {OPPORTUNITY_STATS.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="card-glow glass rounded-xl p-5 text-center md:p-6">
              <p className="font-display text-3xl font-bold text-gradient md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-dim md:text-sm">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
