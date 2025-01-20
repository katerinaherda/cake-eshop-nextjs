import CartItem from "../components/cart-item"

export default function Cart() {
  return (
    <div className="flex flex-wrap justify-between lg:ml-[10%]">
      <div className="w-full md:w-3/4">
        <div className="w-full md:w-3/4 my-auto flex">
          <CartItem />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/4 items-center">
        <div className="font-bold">Celkem</div>
        <div className="">cenacelkem</div>
      </div>
    </div>
  )
}
