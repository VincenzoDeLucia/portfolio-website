import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">VDL</Link>
      <Link to="/menu">Menu</Link>
    </div>
  )
}

export default Navbar
