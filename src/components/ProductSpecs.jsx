import { useState } from "react";
import { MinusIcon, PlusIcon } from "./icons";

const VOLUMES = [
  { ml: 30, price: 140 },
  { ml: 50, price: 180 },
  { ml: 100, price: 220 },
];

const NOTES = [
  { label: "Top Notes", value: "Sicilian Bergamot, Pink Pepper" },
  { label: "Heart Notes", value: "Egyptian Jasmine Sambac, Papyrus" },
  { label: "Base Notes", value: "West Indian Sandalwood, Cardamom, Amber" },
];

export default function ProductSpecs() {
  const [volume, setVolume] = useState(100);
  const [qty, setQty] = useState(1);
  const [wrapping, setWrapping] = useState(true);

  const price = VOLUMES.find((v) => v.ml === volume).price;
  const total = price * qty;

  return (
    <div className="flex flex-col">
      {/* Tags */}
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-sandlight px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink">
          Scent Family: Woody
        </span>
        <span className="rounded-full bg-sand px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
          Occasion: Evening
        </span>
      </div>

      {/* Title / price / status */}
      <h1 className="mt-4 font-display text-5xl leading-[1.15] text-ink">Santal Parchment</h1>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <span className="text-2xl font-semibold text-ink">${price}</span>
        <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-leaf">
          <span className="h-2 w-2 rounded-full bg-leaf" aria-hidden="true" />
          Available in Atelier
        </span>
      </div>

      <hr className="my-6 border-line" />

      {/* Volume selector */}
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink">Select Volume</p>
      <div className="mt-3 grid grid-cols-3 gap-4">
        {VOLUMES.map((v) => {
          const selected = v.ml === volume;
          return (
            <button
              key={v.ml}
              type="button"
              onClick={() => setVolume(v.ml)}
              aria-pressed={selected}
              className={`flex h-[62px] flex-col items-center justify-center rounded-lg border transition ${
                selected
                  ? "border-ink bg-white"
                  : "border-line bg-transparent hover:border-muted"
              }`}
            >
              <span className={`text-sm ${selected ? "font-bold text-ink" : "font-medium text-ink"}`}>
                {v.ml} ml
              </span>
              <span className="mt-0.5 text-[11px] text-muted">${v.price}</span>
            </button>
          );
        })}
      </div>

      {/* Gift wrapping */}
      <div className="mt-6 flex items-center justify-between gap-6 rounded-lg bg-sand px-5 py-4">
        <div>
          <p className="text-[13px] font-semibold text-ink">Complimentary Signature Gift Wrapping</p>
          <p className="mt-1 text-xs text-muted">
            Encased in linen paper box with custom wax seal stamp.
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={wrapping}
          onClick={() => setWrapping((w) => !w)}
          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
            wrapping ? "bg-gold" : "bg-line"
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
              wrapping ? "left-[22px]" : "left-0.5"
            }`}
          />
        </button>
      </div>

      {/* Quantity + add to cart */}
      <div className="mt-6 flex items-stretch gap-3">
        <div className="flex h-[50px] w-[95px] items-center justify-between rounded-lg border border-line px-3">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="text-muted transition-colors hover:text-ink"
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="text-sm font-semibold text-ink">{qty}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
            className="text-muted transition-colors hover:text-ink"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          className="flex h-[50px] flex-1 items-center justify-center rounded-lg bg-ink text-[13px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-ink/85"
        >
          Add to Cart / ${total}
        </button>
      </div>

      <hr className="my-6 border-line" />

      {/* Scent anatomy */}
      <h2 className="font-display text-[32px] leading-tight text-ink">Scent Anatomy</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top
        notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom
        and amber.
      </p>

      <dl className="mt-6">
        {NOTES.map((note, i) => (
          <div
            key={note.label}
            className={`flex items-baseline gap-6 py-3 ${i > 0 ? "border-t border-line" : ""}`}
          >
            <dt className="w-[110px] shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-ink">
              {note.label}
            </dt>
            <dd className="text-[13px] text-muted">{note.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}