"use client"
import { useState, useEffect } from "react"
import CloseIcon from "../../../public/icons/close-icon"

export default function Cart() {
  const [cartContent, setCartContent] = useState<any[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const getCartFromLS = localStorage.getItem("cart")
    if (getCartFromLS) {
      setCartContent(JSON.parse(getCartFromLS))
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 500)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!cartContent.length) return <p>Košík je prázdný</p>

  const truncate = (input: string) =>
    isMobile && input?.length > 15 ? `${input.substring(0, 15)}...` : input

  return (
    <div className="w-full">
      {cartContent.map((item) => (
        <div
          key={item.id}
          className="px-4 pb-1 pt-3 flex justify-between border-b-2"
        >
          <div className="w-1/6 my-auto">
            <button className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]">
              <CloseIcon />
            </button>
          </div>
          <div className="w-5/6 flex justify-between text-base lg:text-xl xl:text-2xl">
            <span className="my-auto whitespace-nowrap w-2/3">
              {truncate(item.title)}
            </span>
            <span className="my-auto whitespace-nowrap">{item.quantity}x</span>
            <span className="my-auto whitespace-nowrap">
              {item.price * item.quantity} €
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
