"use client"
import { useEffect, useState } from "react"
import CartComponent from "./components/cart-component"
import ProductItems from "./components/product-items"
import { useCartSync } from "./hooks/use-cart-sync"

type Product = {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

async function fetchData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/katerinaherda/cake-fake-api/main/data.json",
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default function Store() {
  const [data, setData] = useState<Product[]>([])
  const cartContent = useCartSync()
  const [itemsInCart, setitemsInCart] = useState(0)

  useEffect(() => {
    fetchData()
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => console.error("Error fetching data:", err))
  }, [])

  useEffect(() => {
    setitemsInCart(
      cartContent.reduce((total, item) => total + item.quantity, 0),
    )
  }, [cartContent])

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductItems data={data} />
      </div>
      <CartComponent numberOfItems={itemsInCart} />
    </>
  )
}
