import CartIcon from "../../../public/icons/cart"

const CartComponent = () => (
  <a
    className="fixed bottom-3 right-3 md:bottom-6 md:right-6 bg-orange-400 w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem] hover:scale-x-[-1] rounded-md hover:bg-orange-500"
    href="/cart"
  >
    <CartIcon />
  </a>
)

export default CartComponent
