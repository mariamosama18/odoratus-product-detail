import fleurDeLune from "../assets/products/fleur-de-lune.png";
import noirCocoon from "../assets/products/noir-cocoon.png";
import solDOr from "../assets/products/sol-dor.png";
import roseAbsolute from "../assets/products/rose-absolute.png";

const PRODUCTS = [
  {
    name: "Fleur de Lune",
    family: "Floral / Jasmine & White Musk",
    price: 195,
    image: fleurDeLune,
  },
  {
    name: "Noir Cocoon",
    family: "Oriental / Tobacco & Amber",
    price: 240,
    image: noirCocoon,
  },
  {
    name: "Sol d'Or",
    family: "Fresh / Bergamot & Sea Salt",
    price: 185,
    image: solDOr,
  },
  {
    name: "Rose Absolute",
    family: "Floral / Damask Rose & Cedar",
    price: 205,
    image: roseAbsolute,
  },
];

export default function RelatedProducts() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1280px] px-6 py-20">
        {/* Section header */}
        <header className="mb-12 text-center">
          <h2 className="font-display text-5xl leading-tight text-ink">Olfactory Companions</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-muted">
            Fragrances of synonymous sophistication
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <article key={product.name} className="bg-white p-4">
              <div className="aspect-[270/320] w-full overflow-hidden bg-sandlight">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-[22px] leading-tight text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-gold">
                    {product.family}
                  </p>
                </div>
                <span className="pt-1 text-[15px] font-semibold text-ink">${product.price}</span>
              </div>
              <button
                type="button"
                className="mt-4 h-[39px] w-full rounded border border-ink text-[11px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-white"
              >
                Add to Cart +
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}