"use client"
import AddToCartButton from "./add-to-cart-button"

export type Product = {
  id: number
  title: string
  price: number
  image: string
}

export type ProductItem = {
  product: Product
}

export default function ProductItem({ product }: ProductItem) {
  const truncate = (input: string) =>
    input?.length > 20 ? `${input.substring(0, 20)}...` : input

  return (
    <div
      key={product.id}
      className="flex flex-col items-center pt-6 lg:pt-20 max-w-[300px] mx-auto"
    >
      <h2 className="text-sm md:text-2xl font-bold pb-6">
        {truncate(product.title)}
      </h2>

      <img
        className="w-[300px]"
        src={product.image}
        width="800"
        height="1200"
        alt=""
      />
      <div className="flex w-full justify-between mt-4">
        <span className="font-bold">{product.price} €</span>
        <AddToCartButton clickedProduct={product} />
      </div>
    </div>
  )
}
