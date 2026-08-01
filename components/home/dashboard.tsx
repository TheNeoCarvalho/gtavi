import { Search, TrendingUp, Download, Star } from "lucide-react";

const rows = [
  { title: "Corte de gameplay GTA 6 — primeiros minutos", views: "1,2M", tag: "novidade" },
  { title: "O corte mais insano de gameplay", views: "890K", tag: "corte" },
  { title: "GTA 6: o que ninguém te contou", views: "640K", tag: "curiosidade" },
  { title: "Momento mais tenso do gameplay", views: "510K", tag: "destaque" },
];

export function Dashboard({ className }: { className?: string }) {
  return (
    <div className={`glass-strong relative overflow-hidden rounded-2xl ${className ?? ""}`}>
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="size-2.5 rounded-full bg-danger/70" aria-hidden />
        <span className="size-2.5 rounded-full bg-cta/70" aria-hidden />
        <span className="size-2.5 rounded-full bg-success/70" aria-hidden />
        <div className="ml-3 flex flex-1 items-center gap-2 rounded-md bg-white/5 px-3 py-1.5">
          <Search className="size-3.5 text-dim" aria-hidden />
          <span className="font-mono text-xs text-dim">
            buscar vídeo de GTA 6…
          </span>
        </div>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-3">
        <div className="rounded-lg bg-white/5 p-3">
          <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-dim">
            <TrendingUp className="size-3.5 text-success" aria-hidden />
            Título pronto
          </div>
          <p className="mt-1 truncate font-display text-xs font-semibold text-text">
            GTA 6: 3 novidades em 1 minuto 🔥
          </p>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-dim">
            <Star className="size-3.5 text-cta" aria-hidden />
            Tags sugeridas
          </div>
          <p className="mt-1 font-mono text-xs text-muted">
            #gta6 #shorts #viral #novidade
          </p>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-dim">
            <Download className="size-3.5 text-pink" aria-hidden />
            Download
          </div>
          <p className="mt-1 font-mono text-xs text-muted">Vertical · 9:16 · sem marca</p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="overflow-hidden rounded-lg border border-white/8">
          {rows.map((row, i) => (
            <div
              key={row.title}
              className={`flex items-center gap-3 px-3 py-2.5 ${
                i !== rows.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <span className="size-8 shrink-0 rounded-md bg-gradient-to-br from-pink/40 to-blue/40" aria-hidden />
              <p className="flex-1 truncate text-xs text-text">{row.title}</p>
              <span className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[0.6rem] text-muted">
                {row.tag}
              </span>
              <span className="w-14 text-right font-mono text-[0.65rem] text-pink">
                {row.views}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
