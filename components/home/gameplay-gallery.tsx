import Image from "next/image";

const shots = [
  {
    src: "/sneak-peek/gta6-1.jpg",
    alt: "Screenshot de gameplay de GTA 6 no formato vertical",
    className: "order-1 aspect-[3/4] lg:col-span-3 lg:row-span-2",
    sizes: "(max-width: 1024px) 100vw, 30vw",
  },
  {
    src: "/sneak-peek/gta6-2.jpg",
    alt: "Screenshot panorâmico de gameplay de GTA 6",
    className: "order-2 aspect-[16/9] lg:col-span-6",
    sizes: "(max-width: 1024px) 100vw, 50vw",
  },
  {
    src: "/sneak-peek/gta6-3.jpg",
    alt: "Screenshot de gameplay de GTA 6 no formato vertical",
    className: "order-3 aspect-[3/4] lg:col-span-3 lg:row-span-2",
    sizes: "(max-width: 1024px) 100vw, 30vw",
  },
  {
    src: "/sneak-peek/gta6-4.jpg",
    alt: "Screenshot panorâmico de gameplay de GTA 6",
    className: "order-4 aspect-[16/9] lg:col-span-6",
    sizes: "(max-width: 1024px) 100vw, 50vw",
  },
  {
    src: "/sneak-peek/gta6-5.jpg",
    alt: "Screenshot panorâmico amplo de gameplay de GTA 6",
    className: "order-5 aspect-[7/2] lg:col-span-12",
    sizes: "100vw",
  },
];

export function GameplayGallery({ className }: { className?: string }) {
  return (
    <div className={`grid gap-4 lg:grid-cols-12 ${className ?? ""}`}>
      {shots.map((shot) => (
        <figure
          key={shot.src}
          className={`group relative overflow-hidden rounded-xl border border-white/10 bg-bg-elevated ${shot.className}`}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes={shot.sizes}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
        </figure>
      ))}
    </div>
  );
}
