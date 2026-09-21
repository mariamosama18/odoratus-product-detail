import ProductGallery from "./ProductGallery";
import ProductSpecs from "./ProductSpecs";

export default function ProductDetail() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-20 pt-2">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,656px)_minmax(0,1fr)] lg:gap-16">
        <ProductGallery />
        <ProductSpecs />
      </div>
    </section>
  );
}