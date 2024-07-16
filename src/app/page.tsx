import CartComponent from "./components/cart-component"
import ProductItems from "./components/product-items"

export async function getData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/Katerina8888/cake-fake-api/main/data.json",
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Store() {
  const data = await getData()

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductItems data={data} />
      </div>

      <CartComponent />
    </>
  )
}
