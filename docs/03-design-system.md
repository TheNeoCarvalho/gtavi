# 03 — Design System (VIZION PACK)

> Direção: **"Miami Vice Noir"** — escuro premium, neon synthwave, glass, glow. Inspirado na vibe estética de GTA VI (Vice City) sem usar nenhuma marca/asset protegido. Identidade própria, sem infringir copyright.

## Conceito / Assinatura visual

- **Signature element**: um **player vertical em glass com glow rosa-roxo** no hero — o "celular mostrando o short pronto" (metáfora do produto: é só dar play e postar). Tudo ao redor permanece calmo e disciplinado.
- Paleta é a "noite de Miami": quase-preto azulado, rosa neon, roxo, azul elétrico. CTA em **laranja-âmbar** (única cor de ação na página — Von Restorff).

## Paleta (tokens)

| Token | Hex | Uso |
|---|---|---|
| `bg` | `#07070F` | Fundo base (nunca preto puro) |
| `bg-elevated` | `#0D0D1A` | Cards/superfícies |
| `surface` | `#12121F` | Cards secundários |
| `border` | `rgba(255,255,255,0.08)` | Bordas glass |
| `text` | `#F4F4FB` | Texto principal |
| `text-muted` | `#9C9CB5` | Texto secundário |
| `text-dim` | `#6A6A85` | Texto terciário/captions |
| `accent-pink` | `#FF2D92` | Neon rosa (entretenimento) |
| `accent-purple` | `#8B5CF6` | Roxo (premium) |
| `accent-blue` | `#3B82F6` | Azul elétrico (confiança) |
| `cta` | `#FF8A3D` | Laranja-âmbar — ÚNICA cor de CTA |
| `cta-hover` | `#FF9D5C` | Hover do CTA |
| `success` | `#22C55E` | Checkmarks/sucesso |
| `danger` | `#EF4444` | Urgência/limite |

- Gradientes: `pink→purple` (primary accent), `blue→purple` (secundário), mesh aurora no fundo (radial-gradients, 2-3 blobs, `mix-blend-mode: screen`, blur 90px).

## Tipografia

- **Display**: `Space Grotesk` (700/500) — personalidade tech/gamer, forte, geométrica. Headlines, números, badges.
- **Body**: `Inter` (400/500/600) — leitura limpa.
- **Mono/utility**: `JetBrains Mono` (500) — captions, eyebrow, labels, contadores.
- Escala (fluid via `clamp`):
  - Display hero: `clamp(2.4rem, 6vw, 4.5rem)`, lh 1.02, -0.03em
  - H2: `clamp(1.75rem, 4vw, 3rem)`
  - H3: `1.25rem`
  - Body: `1rem` / `1.0625rem`
  - Caption: `0.8125rem`
  - Eyebrow: `0.75rem` uppercase, letter-spacing 0.12em, mono
- Números/estatísticas: `Space Grotesk` 700, tabular.

## Espaçamento / Grid

- Container: `max-w-[1200px]`, px 16 mobile / 24 desktop.
- Seções: `py-20 md:py-28`.
- Espaçamento tokens: 4/8/12/16/24/32/48/64/96.
- Grid: 12 colunas; seções hero 2 col (copy 7 / visual 5); bento 12-col com cards 3-6-3.
- Radius: `sm 10px` · `md 14px` · `lg 20px` · `xl 28px` · `pill 999px`.

## Componentes

- **Button CTA**: gradient laranja-âmbar, shadow glow `0 0 40px rgba(255,138,61,.4)`, hover brighten + translateY(-1px), `min-h 52px`, font semibold, radius pill, shimmer sweep. Ghost/secondary para "saiba mais".
- **Card glass**: `bg-white/5`, `backdrop-blur-xl`, border white/8, radius lg, hover: border pink/40 + glow. Icon em chip gradiente.
- **Badge**: pill, mono uppercase, border gradient, shimmer opcional (PRO 👑).
- **Eyebrow**: mono uppercase 12px, com linha/glow.
- **Stat**: número Space Grotesk 700 com gradiente de texto, label muted.
- **FAQ**: accordion custom, chevron rotate, borda animada, `aria-expanded`.
- **Timeline**: 3 passos horizontais (desktop) → vertical (mobile), conectados por linha gradiente + números.
- **Testimonial card**: avatar com borda gradiente, nome, canal, 5 estrelas, texto.
- **Pricing**: 2 cards, PRO destacado com glow roxo + badge 👑 + borda gradient. Checkmarks ✓ verde. Xs cinza.
- **Navbar**: sticky, glass `backdrop-blur`, logo VIZION + badge "POUCAS VAGAS" + CTA.
- **Footer**: logo, disclaimer Rockstar, links legais, selos de pagamento/segurança.

## Motion (sistema de tokens)

- Durations: `fast 150ms` · `base 300ms` · `slow 600ms`
- Easings: `ease-out cubic-bezier(0.22,1,0.36,1)`
- Reveal on scroll: fade-up 24px, stagger 80ms, `whileInView`, `viewport once`
- Hero load: orquestração em sequência (eyebrow → headline → sub → CTA → mockup)
- Countdown: precisão 1s, números tabulares
- Marquee: CSS animation infinita, pause no hover, `prefers-reduced-motion` respeitado
- Tilt no mockup: transform perspective sutil no mouse (desktop only)
- Acessibilidade: foco visível `ring-pink`, `prefers-reduced-motion` desliga animações

## Dark Mode

- Dark-first: o site É escuro. Tema é único (premium gaming). Não há toggle.

## Loading

- `next/font` com `display: swap`; skeleton mínimo no carrossel; imagens com `loading="lazy"` + `width/height` (zero CLS).

## Ícones

- Lucide: Play, Download, Check, X, Flame, Zap, Shield, Lock, Star, Users, Calendar, ChartLine, Sparkles, Crown, MessageCircle, ChevronDown, ArrowRight, BadgeCheck, Video, Layers, RefreshCw, Smartphone, Wallet, Clock.
