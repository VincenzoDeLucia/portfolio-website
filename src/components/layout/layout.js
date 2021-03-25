import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"
import "./layout.css"
import About from "../about/about"
import Work from "../work/work"
import Contact from "../contact/contact"

const Layout = ({ componentToRender }) => {
  const { themeToPass } = useContext(ThemeContext)

  const pageSwitch = page => {
    switch (page) {
      case "work":
        return <Work />
      case "contact":
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <div
      className="content"
      style={{
        backgroundColor: themeToPass.backgroundColor,
        color: themeToPass.textColor,
      }}
    >
      {pageSwitch(componentToRender)}
    </div>
  )
}

export default Layout
