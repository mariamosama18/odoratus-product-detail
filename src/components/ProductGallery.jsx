import { useState } from "react";
import mainImage from "../assets/products/santal-main.png";
import thumb0 from "../assets/products/thumb-0.png";
import thumb1 from "../assets/products/thumb-1.png";
import thumb2 from "../assets/products/thumb-2.png";

const THUMBS = [
  { id: 0, label: "Bottle", src: thumb0 },
  { id: 1, label: "Details", src: thumb1 },
  { id: 2, label: "Packaging", src: thumb2 },
];

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const shown = THUMBS[active];
  const shownImage = active === 0 ? mainImage : shown.src;

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-[656/600] w-full overflow-hidden bg-sandlight">
        <img
          src={shownImage}
          alt={`Santal Parchment — ${shown.label}`}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted backdrop-blur-sm">
          {THUMBS[active].label}
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
              className={`relative aspect-[211/120] overflow-hidden bg-sandlight transition ${
                selected
                  ? "ring-2 ring-ink ring-offset-2 ring-offset-cream"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={thumb.src}
                alt={`Santal Parchment — ${thumb.label}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}