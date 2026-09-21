# Odoratus — Product Detail Page

A pixel-faithful implementation of the **ODORATUS** fragrance store product detail page, built from the Figma design file (_Digitera — Frontend Engineering Bootcamp_).

## Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (CSS-first config)
- Google Fonts: **Instrument Serif** (headings) + **Manrope** (body)

## Getting started

```bash
npm install
npm run dev        # dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Design tokens

Extracted programmatically from the Figma API:

| Token       | Value      | Usage                        |
| ----------- | ---------- | ---------------------------- |
| `cream`     | `#faf8f5`  | Page background              |
| `ink`       | `#1a1a1a`  | Text / dark surfaces / CTA   |
| `muted`     | `#605a54`  | Secondary text               |
| `gold`      | `#c5a880`  | Accent, badges, active switch|
| `leaf`      | `#10b981`  | In-stock indicator           |
| `sand`      | `#f4f0eb`  | Section backgrounds          |
| `sandlight` | `#f2ede4`  | Light badge background       |
| `line`      | `#ebe6de`  | Hairline dividers            |

Defined in `src/index.css` via Tailwind's `@theme`.

## Structure

```
src/
├── App.jsx                   # page assembly
├── index.css                 # design tokens + placeholder art
└── components/
    ├── Header.jsx            # announcement bar + nav + search/cart
    ├── Breadcrumbs.jsx
    ├── ProductDetail.jsx
    ├── ProductGallery.jsx    # main image + thumbnail switcher
    ├── ProductSpecs.jsx      # volume picker · qty · gift wrap · scent anatomy
    ├── RelatedProducts.jsx   # "Olfactory Companions" cards
    ├── Footer.jsx
    └── icons.jsx             # inline SVG icons
```

## Replacing placeholder imagery

Product photos are elegant gradient placeholders (`.placeholder-art` / `.placeholder-art-deep`)
because the Figma design uses empty rectangles. Swap any placeholder `<div className="placeholder-art">`
for an `<img>`/`<picture>` — aspect ratios match the Figma frames (e.g. gallery main image 656×600).