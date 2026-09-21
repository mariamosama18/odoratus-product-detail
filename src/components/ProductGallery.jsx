import { useState } from "react";

const THUMBS = [
  { id: 0, label: "Bottle", art: "placeholder-art" },
  { id: 1, label: "Details", art: "placeholder-art-deep" },
  { id: 2, label: "Packaging", art: "placeholder-art" },
];

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const shown = THUMBS[active];

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div
        className={`relative flex aspect-[656/600] w-full items-center justify-center overflow-hidden ${shown.art}`}
        role="img"
        aria-label={`Santal Parchment — ${shown.label}`}
      >
        <span className="select-none px-6 text-center font-display text-3xl italic leading-tight text-ink/25">
          Santal Parchment
        </span>
        <span className="absolute bottom-4 left-4 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted backdrop-blur-sm">
          {shown.label}
        </span>
      </div>

      {/* Thumbnails */}
      <div className="grid w-full grid-cols-3 gap-4">
        {THUMBS.map((thumb) => {
          const selected = thumb.id === active;
          return (
            <button
              key={thumb.id}
              type="button"
              onClick={() => setActive(thumb.id)}
              aria-label={`View ${thumb.label}`}
              aria-pressed={selected}
              className={`relative aspect-[211/120] overflow-hidden transition ${
                selected
                  ? "ring-2 ring-ink ring-offset-2 ring-offset-cream"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <span className={`block h-full w-full ${thumb.art}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
}