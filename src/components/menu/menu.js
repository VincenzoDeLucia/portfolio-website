import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"
import "./menu.css"

const Menu = ({ setShowMenu, setComponentToRender }) => {
  const { darkTheme, setDarkTheme, themeToPass } = useContext(ThemeContext)
  const handleOnClick = component => {
    console.log(`You clicked on a button`)
    setComponentToRender(component)
    setShowMenu(false)
  }

  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className="menu" style={{ backgroundColor: themeToPass.menuColor }}>
      <ul className="menu-list">
        <li>
          <button
            className="menu-button"
            onClick={() => {
              handleOnClick("about")
            }}
            style={{ color: themeToPass.textColor }}
          >
            About me
          </button>
        </li>
        <li>
          <button
            className="menu-button"
            onClick={() => {
              handleOnClick("work")
            }}
            style={{ color: themeToPass.textColor }}
          >
            My work
          </button>
        </li>
        <li>
          <button
            className="menu-button"
            onClick={() => {
              handleOnClick("contact")
            }}
            style={{ color: themeToPass.textColor }}
          >
            Contact me
          </button>
        </li>
        <li>
          <button
            className="menu-button"
            onClick={handleThemeToggle}
            style={{ color: themeToPass.textColor }}
          >
            Light/Dark Theme
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
