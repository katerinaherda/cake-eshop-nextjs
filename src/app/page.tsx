import CartComponent from "./components/cart-component"
import ProductItem from "./components/product-item"
import productsList from "./data/models/products-list"

export default function Store() {
  return (
    <div className="min-h-screen">
      <main className="max-w-[90%] lg:max-w-[85%] mb-[6rem] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductItem item={productsList} />
        </div>
      </main>

      <CartComponent />
    </div>
  )
}
