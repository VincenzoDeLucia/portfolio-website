import * as React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = ({ setShowMenu }) => {
  const handleMenuButton = () => {
    setShowMenu(true)
  }

  return (
    <div className="navbar">
      <Link to="/">VDL</Link>
      <button onClick={handleMenuButton} className="menu-button">
        Menu
      </button>
    </div>
  )
}

export default Navbar
