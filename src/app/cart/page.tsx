"use client"
import { useState, useEffect } from "react"
import { Product } from "../components/product-item"
import CartItem from "../components/cart-item"

type CartProduct = Product & {
  quantity: number
}

export default function Cart() {
  const [cartContent, setCartContent] = useState<CartProduct[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const getCartFromLS = localStorage.getItem("cart")
    if (getCartFromLS) {
      const parsedCart: CartProduct[] = JSON.parse(getCartFromLS)
      setCartContent(parsedCart)
    }
  }, [])

  useEffect(() => {
    const total = cartContent.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
    setTotalPrice(total)
  }, [cartContent])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!cartContent.length) return <p>Cart is empty</p>

  const removeItem = (product: CartProduct) => {
    const updatedCart = cartContent.filter((x) => x.id !== product.id)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    setCartContent(updatedCart)
  }

  const truncate = (input: string) =>
    isMobile && input?.length > 15 ? `${input.substring(0, 15)}...` : input

  return (
    <div className="flex flex-wrap justify-between lg:ml-[10%]">
      <div className="w-full md:w-2/3">
        {cartContent.map((item) => (
          <CartItem
            key={item.id}
            remove={() => removeItem(item)}
            title={truncate(item.title)}
            quantity={item.quantity}
            price={item.price}
            totalPrice={item.price * item.quantity}
          />
        ))}
      </div>
      <div className="flex flex-col w-full md:w-1/4 items-center">
        <div className="font-bold">Total</div>
        <div className="">{totalPrice} €</div>
      </div>
    </div>
  )
}
