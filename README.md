# VIZION PACK — Landing Page

Landing page de alta conversão para venda do **VIZION PACK** (+1.500 vídeos prontos de GTA 6 para postar e monetizar). Dark-first, neon synthwave, construída com Next.js 15.

## Stack

- Next.js 15 (App Router) · TypeScript · TailwindCSS v4
- Framer Motion · Lucide · Embla Carousel · Sonner · @vercel/og
- shadcn/ui patterns (componentes próprios em `components/ui`)

## Estrutura

```
app/            rotas, layout, metadata, SEO (sitemap, robots, opengraph-image)
components/
  ui/           primitivas (button, badge, accordion, countdown, marquee, motion)
  sections/     seções do funil (topbar → footer)
  home/         mockup-player, dashboard (elementos-assinatura em CSS/JSX)
constants/      toda a copy e dados centralizados
hooks/          countdown, scroll
lib/            cn(), Schema.org JSON-LD
docs/           pesquisa, brainstorming, design system, plano, imagens, social
```

## Desenvolvimento

```bash
npm run dev      # servidor de dev
npm run build    # build de produção
npm run start    # serve build (precisa build antes)
npm run lint     # eslint
```

## Configurar antes de publicar

- `constants/site.ts`: trocar `url`, `checkoutUrl`, `whatsapp`, `instagram`, `email` e preços.
- Meta description/OG já centralizados em `app/layout.tsx`.
- Ajustar contagem de vagas e timer em `constants/site.ts`.

## Disclaimer

Produto independente, sem afiliação com Rockstar Games ou Take-Two Interactive. As artes seguem identidade própria (synthwave/neon) sem assets oficiais.
