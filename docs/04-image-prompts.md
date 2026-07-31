# 04 — Image Prompts (VIZION PACK)

> Todas as imagens seguem a identidade: **Miami Vice Noir / synthwave premium — escuro, neon rosa/roxo/azul, glass, glow**. Sem logotipos/marcas reais. Assets principais gerados programaticamente como componentes (mockup de player em JSX/CSS) para performance e zero CLS; imagens raster apenas para fundos/texturas/avatares.

## Estratégia

- **Hero mockup = código (CSS/JSX)**: player vertical em glass com thumbnail gerada por CSS gradient + poster raster opcional. Melhor performance, sem falhas de IA em texto de UI.
- **Raster (gerar ou usar)**:
  - `hero-poster.webp` — cena de cidade noturna tropical estilo Miami com palmeiras, neon rosa/azul, reflexo na água, carro esportivo. (poster dentro do mockup)
  - `aurora-bg.webp` — mesh gradient abstrato (ou 100% CSS radial-gradients — preferível).
  - `texture-grain.webp` — noise sutil (gerado em CSS com SVG fevTurbulence).
  - Avatares de depoimentos — usar `pravatar`/`ui-avatars`? Melhor: avatares gerados com `ui-avatars.com/api?name=X&background=...` (sem dependência de storage) ou gradiente + inicial (100% CSS).
- **OG image**: gerar via `@vercel/og` (Vercel Edge) com JSX — título + gradiente neon + mockup.

## Prompts profissionais (para geração com IA, ex. Flux/Gemini/Ideogram)

### 1. Hero poster (16:9 → crop 9:16 para o mockup)
```
Cinematic wide shot of a fictional tropical night city inspired by 1980s Miami, oceanfront highway with palm trees in silhouette, vibrant neon pink and purple glow reflecting on wet asphalt and the bay, a sleek dark sports car cruising, dense skyline with neon signs (no readable brand text), volumetric haze, 80s synthwave retrofuturism mood, ultra-detailed, dramatic rim lighting, deep navy-black sky with faint stars, color palette: hot pink #FF2D92, violet #8B5CF6, electric blue #3B82F6 on near-black #07070F, photorealistic, 8k, sharp focus, high dynamic range
```
Aspect: 16:9 → usado como poster. Negative: `no text, no logos, no watermarks, no brands, no gore, no warping`.

### 2. Bento background / texture (for section "oportunidade")
```
Abstract dark synthwave gradient mesh wallpaper, flowing aurora of hot pink, violet and electric blue light on a deep near-black navy background, soft organic blur, subtle film grain, premium, minimal, no objects, no text, 8k
```
Aspect: 16:9. Negative: `no text, no logos, no noise artifacts`.

### 3. Avatar genérico (para cards) — usar gradiente + inicial via CSS (`ui-avatars` style)
Prompt (se quiser gerar): `minimal 3d avatar of a young content creator, dark studio, neon pink and blue rim lighting, subtle smile, modern, premium, 1:1`.

### 4. Mockup das "ferramentas do criador" (dashboard) — NÃO usar IA (IA alucina UI). Construir em JSX/CSS: dashboard dark com métricas, títulos prontos, tags. Screenshot do próprio componente.

### 5. Thumbnail YouTube de exemplo (dentro da página)
```
YouTube thumbnail concept, bold text-free cinematic frame from a fictional tropical action game world, flaming sports car mid-drift in neon-lit city street, explosion of pink and purple light, dramatic angle, high contrast, punchy saturated colors, space for text overlay, no text
```
Aspect: 16:9. Negative: `no text, no logos, no watermark`.

### 6. OG Image (programática via @vercel/og)
JSX: fundo gradient dark `#07070F→#1a0b2e`, blob neon, título "VIZION PACK", badge "+1.500 VÍDEOS GTA 6 PRONTOS", logo VIZION.

## Modelo/specs por asset

| Asset | Ratio | Resolução | Formato | Uso |
|---|---|---|---|---|
| hero-poster | 9:16 (crop de 16:9) | 1080x1920 | webp | poster do mockup hero |
| og-image | 1.91:1 | 1200x630 | png | compartilhamento social |
| avatars | 1:1 | 96x96 | svg/png | depoimentos |
| favicon/logo | 1:1 | 512x512 | svg | marca |

## Notas legais
- Não gerar arte com logos/marcas de GTA/Rockstar. Tema genérico "cidade tropical noturna synthwave". Footer com disclaimer de não-afiliação.
