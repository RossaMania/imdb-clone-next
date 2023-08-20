import React from "react"
import MenuItem from "./MenuItem"
import { AiFillHome } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <div>
      {/* Menu */}
      <MenuItem title="HOME" address="/" Icon={AiFillHome} />
      </div>
      <div>{/* Logo */}</div>
    </div>
  )
}

export default Header;
