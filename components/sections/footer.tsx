import { MessageCircle, Mail, ShieldCheck, Lock } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { SITE, NAV_LINKS } from "@/constants/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-bg-elevated/60 pb-28 pt-12 lg:pb-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#inicio" className="flex items-center gap-2" aria-label="VIZION">
              <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink to-purple font-display text-sm font-bold text-white">
                V
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-text">
                VIZION<span className="text-pink">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Produto digital de conteúdo pronto para criadores que querem surfar
              o maior lançamento da década sem perder horas editando.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg glass transition-colors hover:border-pink/40"
                aria-label="Instagram da VIZION"
              >
                <InstagramIcon className="size-4.5" />
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg glass transition-colors hover:border-pink/40"
                aria-label="WhatsApp da VIZION"
              >
                <MessageCircle className="size-4.5" aria-hidden />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex size-10 items-center justify-center rounded-lg glass transition-colors hover:border-pink/40"
                aria-label={`E-mail ${SITE.email}`}
              >
                <Mail className="size-4.5" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label="Links do rodapé">
            <h3 className="font-display text-sm font-bold text-text">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold text-text">Segurança</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-success" aria-hidden />
                Garantia de 7 dias
              </li>
              <li className="flex items-center gap-2">
                <Lock className="size-4 text-blue" aria-hidden />
                Compra 100% segura
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center rounded bg-white/5 px-2 py-0.5 font-mono text-xs">
                  PIX
                </span>
                <span className="inline-flex items-center rounded bg-white/5 px-2 py-0.5 font-mono text-xs">
                  Cartão
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-6">
          <p className="text-xs leading-relaxed text-dim">
            Este produto não é afiliado, endossado ou associado à Rockstar Games,
            Take-Two Interactive ou qualquer de suas subsidiárias. GTA 6 e nomes
            relacionados são marcas registradas de seus respectivos proprietários.
            Todos os vídeos são distribuídos com licença de uso para criação de
            conteúdo. © {new Date().getFullYear()} VIZION. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
