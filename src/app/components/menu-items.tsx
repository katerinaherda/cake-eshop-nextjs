"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MenuItems = () => {
  const pathname = usePathname()

  return (
    <ul className="m-auto flex flex-col lg:flex-row items-center py-4">
      <li>
        <Link
          href="/"
          className={`font-bold lg:mr-4 hover:border-b-2 border-orange-400 ${
            pathname === "/" ? "border-b-2 border-orange-400" : ""
          }`}
        >
          Store
        </Link>
      </li>
      <li>
        <Link
          href="/cart"
          className={`font-bold lg:mr-4 hover:border-b-2 border-orange-400 ${
            pathname === "/cart" ? "border-b-2 border-orange-400" : ""
          }`}
        >
          Cart
        </Link>
      </li>
    </ul>
  )
}

export default MenuItems
