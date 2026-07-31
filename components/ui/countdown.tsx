"use client";

import { useCountdown } from "@/hooks/use-interactions";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown({ hours = 48 }: { hours?: number }) {
  const { hours: h, minutes: m, seconds: s } = useCountdown(hours);

  const cells = [
    { value: pad(h), label: "horas" },
    { value: pad(m), label: "min" },
    { value: pad(s), label: "seg" },
  ];

  return (
    <div
      className="flex items-center gap-2"
      role="timer"
      aria-label="Oferta de lançamento termina em"
    >
      {cells.map((cell, i) => (
        <div key={cell.label} className="flex items-center gap-2">
          <div className="flex min-w-14 flex-col items-center rounded-lg glass px-2 py-1.5">
            <span className="glow-number font-display text-lg font-bold tabular-nums leading-none text-pink">
              {cell.value}
            </span>
            <span className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-dim">
              {cell.label}
            </span>
          </div>
          {i < cells.length - 1 && (
            <span className="font-display text-lg text-pink/60">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
