import { useState, useEffect } from "react"

type Product = {
  id: string
  title: string
  price: number
  quantity: number
}

export function useCartSync() {
  const [cartContent, setCartContent] = useState<Product[]>([])

  const loadCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart")
    setCartContent(cart ? JSON.parse(cart) : [])
  }

  useEffect(() => {
    loadCartFromLocalStorage()
    const handleStorageChange = () => {
      loadCartFromLocalStorage()
    }
    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return cartContent
}
