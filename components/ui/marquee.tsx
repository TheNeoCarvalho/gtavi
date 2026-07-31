import { cn } from "@/lib/utils";

export function Marquee({
  items,
  reverse = false,
  className,
}: {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "marquee-mask relative overflow-hidden py-1",
        className,
      )}
      aria-hidden="true"
    >
      <div className={cn("marquee-track items-center gap-3", reverse && "marquee-reverse")}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
