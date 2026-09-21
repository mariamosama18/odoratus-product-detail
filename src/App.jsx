import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import ProductDetail from "./components/ProductDetail";
import RelatedProducts from "./components/RelatedProducts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Breadcrumbs />
        <ProductDetail />
        <RelatedProducts />
      </main>
      <Footer />
    </div>
  );
}