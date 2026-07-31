"use client";

import { useCallback } from "react";
import { toast } from "sonner";
import { ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";

export function CtaButton({
  href = SITE.checkoutUrl,
  children = "QUERO MEU PACK AGORA",
  sub = "Acesso imediato • Garantia de 7 dias",
  className,
  showLock = true,
}: {
  href?: string;
  children?: React.ReactNode;
  sub?: string | null;
  className?: string;
  showLock?: boolean;
}) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href === SITE.checkoutUrl && href.startsWith("#")) {
        return;
      }
      e.preventDefault();
      toast.success("Redirecionando para o checkout seguro…", {
        description: "Acesso imediato após a confirmação.",
      });
      window.open(href, "_blank", "noopener,noreferrer");
    },
    [href],
  );

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <a
        href={href}
        onClick={handleClick}
        className="btn-primary group w-full max-w-sm text-center"
      >
        <span className="inline-flex items-center gap-2">
          {children}
          <ArrowRight
            className="size-5 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </a>
      {sub && (
        <p className="flex items-center gap-1.5 font-mono text-xs text-dim">
          {showLock && <Lock className="size-3.5" aria-hidden />}
          {sub}
        </p>
      )}
    </div>
  );
}
