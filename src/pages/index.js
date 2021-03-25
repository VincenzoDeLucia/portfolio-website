import * as React from "react"
import { useState } from "react"
import { ThemeProvider } from "../context/theme-context"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Layout from "../components/layout/layout"
import Menu from "../components/menu/menu"

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const [componentToRender, setComponentToRender] = useState("about")

  return (
    <ThemeProvider>
      <div className="main-page">
        {showMenu ? (
          <Menu
            setShowMenu={setShowMenu}
            setComponentToRender={setComponentToRender}
          />
        ) : null}
        <Navbar setShowMenu={setShowMenu} />
        <Layout componentToRender={componentToRender} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
