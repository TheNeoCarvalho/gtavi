import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const alt =
  "VIZION PACK — +1.500 Vídeos de GTA 6 Prontos para Postar e Monetizar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 80px",
          background: "linear-gradient(120deg, #07070F 0%, #1a0b2e 55%, #0d0d1a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(255,45,146,0.55), transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -100,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(59,130,246,0.5), transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #FF2D92, #8B5CF6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 26,
              fontWeight: 800,
              fontFamily: "Space Grotesk",
            }}
          >
            V
          </div>
          <div
            style={{
              display: "flex",
              color: "#F4F4FB",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            VIZION<span style={{ color: "#FF2D92" }}>.</span>
          </div>
          <div
            style={{
              marginLeft: "auto",
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(239,68,68,0.15)",
              border: "1px solid rgba(239,68,68,0.5)",
              color: "#EF4444",
              fontSize: 16,
              fontWeight: 600,
              fontFamily: "Space Grotesk",
            }}
          >
            🔥 POUCAS VAGAS
          </div>
        </div>
        <h1
          style={{
            fontSize: 64,
            lineHeight: 1.05,
            fontWeight: 800,
            color: "#F4F4FB",
            fontFamily: "Space Grotesk",
            margin: "8px 0 0 0",
          }}
        >
          +1.500 vídeos de GTA 6
        </h1>
        <p
          style={{
            fontSize: 42,
            lineHeight: 1.1,
            fontWeight: 700,
            margin: "8px 0 0 0",
            background: "linear-gradient(100deg, #FF2D92, #8B5CF6, #3B82F6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontFamily: "Space Grotesk",
          }}
        >
          prontos pra postar e monetizar
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 36 }}>
          <div
            style={{ color: "#9C9CB5", fontSize: 22, fontFamily: "Space Grotesk" }}
          >
            Sem marca d&apos;água · Narração pronta · Vertical +1min
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
