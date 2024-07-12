const MenuItems = () => (
  <ul className="m-auto flex flex-col lg:flex-row items-center py-4">
    <li>
      <a
        href="/"
        className="font-bold hover:border-b-2 border-orange-400 lg:mr-4"
      >
        Store
      </a>
    </li>
    <li>
      <a href="/cart" className="font-bold hover:border-b-2 border-orange-400">
        Cart
      </a>
    </li>
  </ul>
)

export default MenuItems
