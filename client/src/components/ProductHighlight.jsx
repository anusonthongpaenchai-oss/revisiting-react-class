import ProductCard from "./ProductCard";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function ProductHighlight() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Product Card 1 */}
          <ProductCard
            src="https://picsum.photos/id/231/200/200"
            alt="The Lorem Ipsum for photos."
            title="The Lorem Ipsum for photos."
            price={99.99}
          />

          {/* Product Card 2 */}
          <ProductCard
            src="https://picsum.photos/id/232/200/200"
            alt="Wireless Bluetooth Earbuds"
            title="Wireless Bluetooth Earbuds"
            price={79.99}
          />

          {/* Product Card 3 */}
          <ProductCard
            src="https://picsum.photos/200/200"
            alt="Product 4"
            title="Product 4"
            price={79.99}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
