"use client"
import CloseIcon from "../../../public/icons/close-icon"

type CartItemProps = {
  remove: () => void
  title: string
  quantity: number
  totalPrice: number
  price: number
}

export default function CartItem({
  remove,
  title,
  quantity,
  totalPrice,
  price,
}: CartItemProps) {
  return (
    <div className="px-4 pb-1 pt-3 flex justify-between border-b-2">
      <div className="w-1/6 my-auto">
        <button
          className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
          onClick={remove}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="w-5/6 flex justify-between text-base lg:text-xl xl:text-2xl">
        <span className="my-auto whitespace-nowrap w-2/3">{title}</span>
        <span className="my-auto whitespace-nowrap">
          {quantity}x{price}€
        </span>
        <span className="my-auto whitespace-nowrap font-bold">
          {totalPrice} €
        </span>
      </div>
    </div>
  )
}
