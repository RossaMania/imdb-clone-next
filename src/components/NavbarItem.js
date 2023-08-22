import Link from "next/link"
import React from "react"

const NavbarItem = ({ title, param }) => {
  return (
    <div>
      <Link href={`/?genre=${param}`}>
      {title}
      </Link>
    </div>
  )

}

export default NavbarItem