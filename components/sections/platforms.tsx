import { PLATFORMS } from "@/constants/site";
import { Marquee } from "@/components/ui/marquee";

export function Platforms() {
  return (
    <section className="border-y border-white/8 bg-bg-elevated/60 py-6">
      <p className="mb-4 text-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-dim">
        Conteúdo pronto pra todas as plataformas
      </p>
      <Marquee items={PLATFORMS} />
    </section>
  );
}
