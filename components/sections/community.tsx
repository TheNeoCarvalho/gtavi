import { MessageCircle } from "lucide-react";
import { COMMUNITY_BULLETS, SITE } from "@/constants/site";
import { Check } from "lucide-react";
import { SectionHeading, SectionShell } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/motion";

export function Community() {
  return (
    <SectionShell id="comunidade" className="bg-bg-elevated/40">
      <div className="gradient-border mx-auto max-w-4xl rounded-2xl p-8 md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <div className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-success/25 to-blue/25 text-success ring-1 ring-success/30 md:size-24">
            <MessageCircle className="size-10 md:size-12" aria-hidden />
          </div>
          <div className="text-center md:text-left">
            <Badge tone="success" className="mb-3">
              💬 Comunidade Pré-Season
            </Badge>
            <SectionHeading
              align="left"
              eyebrow="Comunidade exclusiva"
              title="Você não entra sozinho"
              subtitle="Ao garantir seu pack, você entra no nosso grupo exclusivo no WhatsApp — onde a gente avisa cada novidade do GTA 6 em primeira mão, solta conteúdo novo e troca ideia sobre o que está viralizando."
              className="mb-0"
            />
          </div>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {COMMUNITY_BULLETS.map((bullet, i) => (
            <Reveal key={bullet} delay={i * 0.06}>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 ring-1 ring-success/30">
                  <Check className="size-3 text-success" aria-hidden />
                </span>
                <span className="text-sm text-muted">{bullet}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-center font-mono text-xs text-dim md:text-left">
          Suporte via WhatsApp: {SITE.whatsapp.replace("https://wa.me/", "")}
        </p>
      </div>
    </SectionShell>
  );
}
