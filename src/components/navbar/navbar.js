import * as React from "react"
import { useContext } from "react"
import { Link } from "gatsby"
import "./navbar.css"
import { ThemeContext } from "../../context/theme-context"

const Navbar = ({ setShowMenu }) => {
  const { themeToPass } = useContext(ThemeContext)
  const handleMenuButton = () => {
    setShowMenu(true)
  }

  return (
    <div
      className="navbar"
      style={{ backgroundColor: themeToPass.navbarColor }}
    >
      <Link
        to="/"
        style={{ color: themeToPass.textColor }}
        className="navbar-item"
      >
        VDL
      </Link>
      <button
        onClick={handleMenuButton}
        className="menu-button navbar-item"
        style={{ color: themeToPass.textColor }}
      >
        Menu
      </button>
    </div>
  )
}

export default Navbar
