import React from "react"
import MenuItem from "./MenuItem"
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div>
        {/* Menu */}
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div>{/* Logo */}</div>
    </div>
  );
}

export default Header;
