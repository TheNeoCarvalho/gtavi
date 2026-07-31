import { DELIVERABLES } from "@/constants/site";
import { SectionHeading, SectionShell } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Stagger, StaggerItem } from "@/components/ui/motion";

export function Deliverables() {
  return (
    <SectionShell id="conteudo" className="bg-bg-elevated/40">
      <SectionHeading
        eyebrow="Tudo 100% pronto"
        title={
          <>
            O que você recebe no <span className="text-gradient">pack</span>
          </>
        }
        subtitle="Chega de passar horas editando. Aqui é só escolher, baixar e postar."
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5" gap={0.06}>
        {DELIVERABLES.map((item) => (
          <StaggerItem key={item.title}>
            <div className="card-glow glass h-full rounded-xl p-6">
              <span className="mb-4 flex size-11 items-center justify-center rounded-lg bg-gradient-to-br from-pink/25 to-purple/25 text-pink ring-1 ring-pink/25">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
