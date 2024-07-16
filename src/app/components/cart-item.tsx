"use client"
import CloseIcon from "../../../public/icons/close-icon"

export default function CartItem() {
  const getCartFromLS = localStorage.getItem("cart")
  const cartContent = getCartFromLS ? JSON.parse(getCartFromLS) : []

  return (
    <div className="w-full ">
      <div className="px-4 pb-1 pt-3 flex justify-between border-b-2">
        <div className="w-1/6 my-auto">
          <button className="w-[3rem] h-[3rem]">
            <CloseIcon />
          </button>
        </div>

        <div className="w-5/6 flex justify-between">
          <span className="my-auto">{cartContent.title}</span>
          <span className="my-auto">1x</span>
          <span className="my-auto">{cartContent.price} €</span>
        </div>
      </div>
    </div>
  )
}
