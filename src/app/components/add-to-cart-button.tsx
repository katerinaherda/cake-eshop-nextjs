import React, { useState } from "react"
import type { Product } from "./product-item"

type AddToCartButtonProps = {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isClicked, setIsClicked] = useState(false)

  // const getCartFromLS = localStorage.getItem("cart")
  // const cartContent = getCartFromLS ? JSON.parse(getCartFromLS) : []
  // const cartItemToString = localStorage.setItem("cart", JSON.stringify(product))

  const addToCart = () => {
    localStorage.setItem("cart", JSON.stringify(product))
  }

  return (
    <button
      onClick={() => {
        setIsClicked((prev) => !prev)
        addToCart()
      }}
      className="uppercase"
    >
      {isClicked === true ? <span>✓</span> : <span>buy</span>}
    </button>
  )
}
