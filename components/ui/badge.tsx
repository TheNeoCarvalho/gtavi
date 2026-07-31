import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "pink" | "purple" | "blue" | "amber" | "danger" | "success";
  shimmer?: boolean;
  className?: string;
};

const tones = {
  pink: "border-pink/40 text-pink bg-pink/10",
  purple: "border-purple/40 text-purple bg-purple/10",
  blue: "border-blue/40 text-blue bg-blue/10",
  amber: "border-cta/50 text-cta bg-cta/10",
  danger: "border-danger/50 text-danger bg-danger/10",
  success: "border-success/40 text-success bg-success/10",
};

export function Badge({
  children,
  tone = "pink",
  shimmer = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5",
        "font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em]",
        tones[tone],
        shimmer && "badge-shimmer",
        className,
      )}
    >
      {children}
    </span>
  );
}
