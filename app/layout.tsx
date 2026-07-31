import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { SITE } from "@/constants/site";
import { JsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.product} — +1.500 Vídeos de GTA 6 Prontos para Postar e Monetizar`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Pack com +1.500 vídeos de GTA 6 100% prontos: cortes virais, trailers e vazamentos. Sem marca d'água, narração e edição feitas. Monetize no Shorts, Reels e TikTok. Garantia de 7 dias.",
  keywords: [
    "pack de vídeos gta 6",
    "vídeos prontos para shorts",
    "monetizar shorts youtube",
    "cortes virais gta 6",
    "conteúdo pronto youtube",
    "pack gta 6",
    "vídeos gta 6 para reels",
    "viralizar com gta 6",
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  category: "Produto digital",
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.product} — +1.500 Vídeos de GTA 6 Prontos para Postar e Monetizar`,
    description:
      "Cortes virais, trailers e vazamentos prontos pra postar. Sem marca d'água, com narração e edição feitas. Acesso imediato + garantia de 7 dias.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.product} — +1.500 Vídeos de GTA 6 Prontos`,
    description:
      "Vídeos 100% prontos pra postar e monetizar no Shorts, Reels e TikTok. Garantia de 7 dias.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07070f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen">
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <JsonLd />
        {children}
        <Toaster
          position="bottom-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "#0d0d1a",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#f4f4fb",
            },
          }}
        />
      </body>
    </html>
  );
}
