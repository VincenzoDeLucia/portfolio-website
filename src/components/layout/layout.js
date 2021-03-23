import * as React from "react"
import "./layout.css"
import About from "../about/about"
import Work from "../work/work"
import Contact from "../contact/contact"

const Layout = ({ componentToRender }) => {
  const pageSwitch = page => {
    switch (page) {
      case "about":
        return <About />
      case "work":
        return <Work />
      case "contact":
        return <Contact />
    }
  }

  return <div className="content">{pageSwitch(componentToRender)}</div>
}

export default Layout
