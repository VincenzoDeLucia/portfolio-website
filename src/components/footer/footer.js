import * as React from "react"
import { useContext } from "react"
import "./footer.css"
import { ThemeContext } from "../../context/theme-context"

const Footer = () => {
  const { themeToPass } = useContext(ThemeContext)

  return (
    <div
      className="footer"
      style={{ backgroundColor: themeToPass.navbarColor }}
    >
      <ul className="footer-items">
        <a
          href="https://www.linkedin.com/in/vincenzo-de-lucia/"
          style={{ color: themeToPass.textColor }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/VincenzoDeLucia"
          style={{ color: themeToPass.textColor }}
        >
          Github
        </a>
        <a href="#" style={{ color: themeToPass.textColor }}>
          Resumé
        </a>
      </ul>
    </div>
  )
}

export default Footer
