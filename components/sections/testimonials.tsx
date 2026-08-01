"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/constants/site";
import { SectionHeading, SectionShell } from "@/components/ui/section-heading";
import { Avatar } from "@/components/ui/avatar";
import { Reveal } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <SectionShell id="depoimentos">
      <SectionHeading
        eyebrow="O que dizem"
        title={
          <>
            Quem já usa, <span className="text-gradient">recomenda</span>
          </>
        }
        subtitle="Feedbacks de criadores que usam o pack no dia a dia."
      />

      <Reveal>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={t.name}
                className="card-glow glass embla__slide w-full shrink-0 basis-full rounded-xl p-6 sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.66rem)]"
              >
                <div className="flex items-center gap-0.5" aria-label={`${t.rating} de 5 estrelas`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="size-4 fill-cta text-cta" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text md:text-base">
                  “{t.text}”
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <Avatar name={t.name} index={i} size="md" />
                  <div>
                    <p className="flex items-center gap-1.5 font-display text-sm font-bold text-text">
                      {t.name}
                      <BadgeCheck className="size-4 text-blue" aria-hidden />
                    </p>
                    <p className="font-mono text-xs text-dim">{t.handle}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            className="flex size-11 items-center justify-center rounded-full glass transition-colors hover:border-pink/40 disabled:opacity-30"
            aria-label="Ver depoimentos anteriores"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides de depoimentos">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={selected === i}
                aria-label={`Ir para depoimento ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  selected === i ? "w-6 bg-pink" : "w-1.5 bg-white/20 hover:bg-white/40",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            className="flex size-11 items-center justify-center rounded-full glass transition-colors hover:border-pink/40 disabled:opacity-30"
            aria-label="Ver próximos depoimentos"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </Reveal>
    </SectionShell>
  );
}
