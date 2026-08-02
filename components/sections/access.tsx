import { Play } from "lucide-react";
import { Check } from "lucide-react";
import { ACCESS_BULLETS } from "@/constants/site";
import { SectionHeading, SectionShell } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/motion";
import { Dashboard } from "@/components/home/dashboard";
import { GameplayGallery } from "@/components/home/gameplay-gallery";

export function Access() {
  return (
    <SectionShell id="acesso" className="relative overflow-hidden">
      <div className="aurora-violet" aria-hidden />
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Seu acesso"
            title={
              <>
                Você recebe uma <span className="text-gradient">plataforma completa</span>
              </>
            }
            subtitle="Nada de pasta bagunçada. Você entra numa plataforma organizada — no computador ou no celular — e é só escolher, dar play e baixar."
          />
          <ul className="space-y-3">
            {ACCESS_BULLETS.map((bullet, i) => (
              <Reveal key={bullet} delay={i * 0.06}>
                <li className="flex items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15 ring-1 ring-success/30">
                    <Check className="size-3.5 text-success" aria-hidden />
                  </span>
                  <span className="text-sm text-muted md:text-base">{bullet}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={0.15}>
          <Dashboard />
        </Reveal>
      </div>

      <Reveal className="mt-20 md:mt-24">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <p className="eyebrow flex items-center gap-2">
            <Play className="size-3.5" aria-hidden />
            Sneak peek
          </p>
          <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-tight tracking-tight">
            Um gostinho do que <span className="text-gradient">tem dentro</span>
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
            Cortes de gameplay selecionados, já no formato certo pra postar e monetizar no Shorts, Reels e TikTok.
          </p>
        </div>
        <GameplayGallery />
      </Reveal>
    </SectionShell>
  );
}
