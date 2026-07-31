import { ShieldCheck, RefreshCw, Lock, BadgeCheck } from "lucide-react";
import { SectionShell } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/motion";

const items = [
  {
    icon: ShieldCheck,
    title: "Garantia de 7 dias",
    desc: "Se não for o que você esperava, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações vitalícias",
    desc: "Compra única. Você acessa o acervo pra sempre, incluindo todo conteúdo novo que entrarmos.",
  },
  {
    icon: Lock,
    title: "Pagamento seguro",
    desc: "Compra processada em plataforma de pagamento reconhecida, com dados criptografados.",
  },
  {
    icon: BadgeCheck,
    title: "Agência real",
    desc: "Produto produzido pela VIZION — agência com reputação e suporte real, não um anúncio fantasma.",
  },
];

export function Guarantee() {
  return (
    <SectionShell id="garantia" className="bg-bg-elevated/40">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-2xl glass p-8 md:p-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex size-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-success/25 to-blue/25 ring-1 ring-success/30">
              <ShieldCheck className="size-12 text-success" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-text md:text-3xl">
                Risco zero. Ou seu dinheiro de volta.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                Você tem 7 dias de garantia incondicional. Entre, explore a
                plataforma, baixe os vídeos. Se por qualquer motivo não ficar
                satisfeito, basta uma mensagem e devolvemos 100% do valor. Você
                só ganha — a decisão é sua.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="rounded-xl bg-white/5 p-5">
                  <item.icon className="size-6 text-pink" aria-hidden />
                  <h3 className="mt-3 font-display text-sm font-bold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
