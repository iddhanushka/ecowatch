import { Link } from "react-router-dom"

import logo from "../img/logo.png"

function Header() {
  return (
    <header className="bg-black/80">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="w-full max-w-[100px]" />
        </Link>
        <div className="menu flex items-center">
          <ul className="text-white flex gap-9 mr-28 font-bold">
            <li>
              <Link to="/how-it-works">How it works</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Link to="/login" className="bg-white rounded py-[7px] px-[25px] text-black font-bold float-right">
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
