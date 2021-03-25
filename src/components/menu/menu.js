import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"
import "./menu.css"

const Menu = ({ setShowMenu, setComponentToRender }) => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)
  const handleOnClick = component => {
    console.log(`You clicked on a button`)
    setComponentToRender(component)
    setShowMenu(false)
  }

  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme)
    console.log("You want dark theme: ", darkTheme)
  }

  return (
    <div className="menu">
      <ul className="menu-list">
        <li>
          <button
            onClick={() => {
              handleOnClick("about")
            }}
          >
            About me
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleOnClick("work")
            }}
          >
            My work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleOnClick("contact")
            }}
          >
            Contact me
          </button>
        </li>
        <li>
          <button onClick={handleThemeToggle}>Light/Dark Theme</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
