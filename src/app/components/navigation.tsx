"use client"
import { useState } from "react"
import Image from "next/image"
import HamburgerMenu from "../../../public/icons/hamburger-menu"
import CloseIcon from "../../../public/icons/close-icon"
import MenuItems from "./menu-items"
import Link from "next/link"

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <nav className="mx-2 lg:mx-8 my-4 flex justify-between">
      <Link href="/">
        <Image src="/logo.png" alt="" width="60" height="60" loading="lazy" />
      </Link>

      <div className="relative lg:hidden">
        <button
          className="w-[3rem] h-[3rem]"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? <CloseIcon /> : <HamburgerMenu />}
        </button>

        {isNavOpen === true && (
          <div className="absolute bg-white z-10 top-[3rem] right-0 w-[12rem] h-auto border-2">
            <MenuItems />
          </div>
        )}
      </div>

      <div className="hidden lg:flex justify-end">
        <MenuItems />
      </div>
    </nav>
  )
}
