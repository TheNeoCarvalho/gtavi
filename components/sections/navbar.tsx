"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/constants/site";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled ? "glass-strong shadow-lg shadow-black/30" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3.5 md:px-6"
      >
        <a href="#inicio" className="flex items-center gap-2" aria-label="VIZION — início">
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink to-purple font-display text-sm font-bold text-white">
            V
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-text">
            VIZION
            <span className="text-pink">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Badge tone="danger">🔥 {SITE.spotsLeft} vagas</Badge>
          <a href="#pricing" className="btn-primary min-h-11 !px-5 !py-2.5 text-sm">
            QUERO MEU PACK
          </a>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg glass lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/8 bg-bg-elevated/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-2 w-full text-center text-sm"
            >
              QUERO MEU PACK — {SITE.spotsLeft} vagas
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
