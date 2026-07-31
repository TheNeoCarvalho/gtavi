import { cn } from "@/lib/utils";

const palette = [
  "from-pink to-purple",
  "from-blue to-purple",
  "from-purple to-pink",
  "from-amber to-pink",
  "from-blue to-pink",
  "from-purple to-blue",
];

export function Avatar({
  name,
  index = 0,
  size = "md",
  className,
}: {
  name: string;
  index?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const sizes = {
    sm: "size-8 text-xs",
    md: "size-11 text-sm",
    lg: "size-14 text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex shrink-0 select-none items-center justify-center rounded-full bg-gradient-to-br font-display font-bold text-white",
        palette[index % palette.length],
        sizes[size],
        className,
      )}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
