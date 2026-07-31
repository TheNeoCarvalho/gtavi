# 05 — Arquitetura, Wireframe e Plano de Implementação

## Fluxo da página (funil) e intenção psicológica por bloco

| # | Bloco | Conteúdo | Intenção psicológica / gatilho |
|---|---|---|---|
| 0 | Topbar | "🔥 LANÇAMENTO · POUCAS VAGAS" + timer | Urgência + escassez desde o primeiro pixel |
| 1 | Navbar | Logo VIZION, badge vagas, CTA | Direção clara; CTA sempre visível |
| 2 | **Hero** | Eyebrow, headline, subheadline, CTA, microcopy (acesso imediato/garantia), stats (+1.500 vídeos, +40M views, 4.9★), mockup player glass vertical | Above-the-fold: proposta de valor + prova + CTA. AIDA atração. Antecipação |
| 3 | Marquee | Shorts · Reels · TikTok · monetização · vertical | Prova social de plataformas; contexto de uso |
| 4 | **Oportunidade** | Storytelling PAS: "maior lançamento da década… cada trailer gera milhões de buscas… o problema: editar toma horas… a solução: pack pronto". 4 stats | PAS + prova + medo de perder timing (FOMO) |
| 5 | **O que você recebe** | Bento grid 6-9 cards (vídeos +1min, cortes virais, sem marca d'água, narração, vertical, atualizações, ferramentas do criador, acesso imediato) | Value stack — reduz incerteza ("eu sei exatamente o que compro") |
| 6 | **Plano de dominação** | Timeline 3 passos: poste 3/dia → até o lançamento → depois do lançamento. Cálculo "3×/dia × 1.500 = meses de conteúdo" | Reciprocidade (eu já te dou o plano), autoridade, antecipação |
| 7 | **Como funciona** | 3 passos: acesse plataforma → baixe e poste → viralize e monetize | Clareza de processo = menos atrito |
| 8 | **Acesso/Plataforma** | Mockup dashboard JSX (busca, categorias, títulos prontos, tags) + bullets | Prova tangível; diferenciação vs "pasta no Drive" |
| 9 | **Bônus** | 5 bônus base + 2 PRO | Reciprocidade/over-delivery — aumenta valor percebido |
| 10 | **Depoimentos** | Carrossel Embla com 6-8 avatares, nomes, estrelas | Prova social (autoridade/espelho) |
| 11 | **Comunidade** | Comunidade Pré-Season WhatsApp: bullets | Comunidade/reciprocidade; sensação de turma |
| 12 | **Pricing** | 2 planos (Básico R$29,90 / PRO R$69,90), âncora R$97/R$197, escassez "18/150 vagas", timer, avatares de compras recentes, checklists | Escassez + urgência + ancoragem + comparação (PRO = melhor negócio) |
| 13 | **Segurança/Garantia** | Selo garantia 7 dias, pagamento seguro, "compra única", agência real | Quebra última objeção (risco) |
| 14 | **FAQ** | 8-10 perguntas (accordion) | Fecha objeções finais; autoridade |
| 15 | **CTA Final** | Repetição da oferta + CTA grande | "Custos de saída" — última chance antes do fim |
| 16 | **Footer** | Disclaimer Rockstar/Take-Two, termos, formas de pagamento | Segurança legal + credibilidade |
| — | Sticky mobile CTA | Barra fixa com preço + botão no mobile | Conversão em scroll longo mobile |
| — | Popup PRO (opcional) | Exit-intent/delay: oferta PRO com desconto único | Upsell, urgência |

## Componentes (estrutura)

```
app/
  layout.tsx            # fonts, metadata, viewport, Schema.org JSON-LD
  page.tsx              # monta seções (client-side wrappers onde precisar)
  sitemap.ts            # sitemap.xml
  robots.ts             # robots.txt
  og/route.tsx          # @vercel/og dinâmico
components/
  ui/                   # button, badge, card, container, section-heading, accordion, marquee, avatar, stat, countdown, glow...
  sections/
    topbar.tsx, navbar.tsx, hero.tsx, platforms.tsx, opportunity.tsx,
    deliverables.tsx, domination.tsx, howitworks.tsx, access.tsx,
    bonuses.tsx, testimonials.tsx, community.tsx, pricing.tsx,
    guarantee.tsx, faq.tsx, finalcta.tsx, footer.tsx, stickycta.tsx
  home/mockup-player.tsx, dashboard.tsx
constants/
  site.ts                # links, preços, números, nav, faq, depoimentos, bônus
hooks/
  use-countdown.ts, use-reduced-motion.ts
lib/
  utils.ts (cn), seo.ts
styles/
  globals.css            # tokens, keyframes, utilities
public/
  og, favicon.svg, icons
types/
  index.ts
```

## Tecnologia

Next.js 15 (App Router) · TypeScript · TailwindCSS v4 · shadcn/ui (manual, só componentes usados) · Framer Motion · Lucide · Embla Carousel · Sonner (toasts) · @vercel/og. React Hook Form + Zod **não são necessários** (LP sem formulário — apenas CTA para checkout externo; não adicionar dependência morta).

## SEO

- Title: `VIZION PACK — +1.500 Vídeos de GTA 6 Prontos para Postar e Monetizar`
- Meta description com keywords + CTA.
- OG/Twitter Cards + OG image (`/og`).
- JSON-LD: `Product` + `Offer` + `AggregateRating` + `FAQPage`.
- `robots.ts` + `sitemap.ts` + canonical (`metadataBase`).
- Keywords: pack de vídeos gta 6, vídeos prontos para shorts, monetizar shorts, cortes virais gta 6, conteúdo pronto youtube.

## Performance / Acessibilidade

- Imagens: `next/image` com `width/height` (sem CLS), lazy loading.
- Fontes: `next/font` `display:swap`.
- Framer Motion: `whileInView` com `once`, `reducedMotion`.
- WCAG AA: contraste, `aria-*`, teclado, foco visível, skip-link, marquee com `prefers-reduced-motion` pause, FAQ acessível.
- Target Lighthouse 100 (page leve: poucas imagens, gradients CSS, fonts otimizadas).

## Implementação (ordem)

1. Scaffold Next.js + deps.
2. `globals.css` tokens + keyframes.
3. `lib/utils` + `constants/site`.
4. UI primitives (button, badge, container, section-heading, glow-bg, marquee, countdown).
5. Hooks (countdown, scroll).
6. Seções (topbar→footer) + mockup/dashboard + sticky.
7. SEO (metadata, sitemap, robots, og route).
8. Build/lint/typecheck + ajustes.
