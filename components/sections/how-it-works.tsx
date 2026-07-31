import { HOW_IT_WORKS } from "@/constants/site";
import { SectionHeading, SectionShell } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion";

export function HowItWorks() {
  return (
    <SectionShell id="como-funciona" className="bg-bg-elevated/40">
      <SectionHeading
        eyebrow="Simples assim"
        title={
          <>
            Como <span className="text-gradient">funciona</span>
          </>
        }
      />

      <Stagger className="grid gap-4 md:grid-cols-3 md:gap-6">
        {HOW_IT_WORKS.map((item) => (
          <StaggerItem key={item.step}>
            <div className="card-glow glass rounded-xl p-6 text-center md:p-8">
              <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-blue/25 to-purple/25 font-display text-xl font-bold text-blue ring-1 ring-blue/30">
                {item.step}
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
