"use client"
import ProductItem from "./product-item"
import type { Product } from "./product-item"

type Props = {
  data: Product[]
}

export default function ProductItems({ data }: Props) {
  return (
    <>
      {data.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </>
  )
}
