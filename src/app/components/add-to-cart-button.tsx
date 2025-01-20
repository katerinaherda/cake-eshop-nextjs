"use client"
import React, { useState } from "react"
import type { Product } from "./product-item"
import QuantityInput from "./quantity-input"

type AddToCartButtonProps = {
  clickedProduct: Product
}

export default function AddToCartButton({
  clickedProduct,
}: AddToCartButtonProps) {
  const [isClicked, setIsClicked] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    if (typeof window === "undefined") return

    const cart = localStorage.getItem("cart")
    const cartContent = cart ? JSON.parse(cart) : []

    if (!Array.isArray(cartContent)) {
      console.error("Error. Resetting cart.")
      localStorage.setItem("cart", JSON.stringify([]))
      return
    }

    const existingProductIndex = cartContent.findIndex(
      (item: Product) => item.id === clickedProduct.id,
    )

    if (existingProductIndex !== -1) {
      cartContent[existingProductIndex].quantity += quantity
    } else {
      cartContent.push({ ...clickedProduct, quantity })
    }

    localStorage.setItem("cart", JSON.stringify(cartContent))
  }

  return (
    <div className="w-3/4 flex justify-end">
      {isClicked ? (
        <div className="flex items-center">
          <QuantityInput
            value={quantity}
            onChange={(value: number) => setQuantity(value)}
          />
          <button
            className="ml-2 uppercase"
            onClick={() => {
              addToCart()
              setIsClicked(false)
            }}
          >
            Add
          </button>
        </div>
      ) : (
        <button className="uppercase" onClick={() => setIsClicked(true)}>
          Buy
        </button>
      )}
    </div>
  )
}
