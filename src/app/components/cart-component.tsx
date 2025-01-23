import CartIcon from "../../../public/icons/cart"
import Link from "next/link"

type CartComponentProps = {
  numberOfItems?: number
}

const CartComponent = ({ numberOfItems }: CartComponentProps) => (
  <Link
    className="fixed bottom-3 right-3 md:bottom-6 md:right-6 bg-orange-400 w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem] rounded-md [&>div]:hover:rounded-md [&>div]:hover:bg-orange-500 [&>div]:hover:scale-x-[-1]"
    href="/cart"
  >
    <div>
      <CartIcon />
    </div>
    {numberOfItems !== 0 && (
      <span className="rounded-full w-[2rem] font-bold h-[2rem] bg-orange-600 text-white absolute top-[-10px] right-[-10px] text-center">
        {numberOfItems}
      </span>
    )}
  </Link>
)

export default CartComponent
