import * as React from "react"
import "./menu.css"

const Menu = ({ setShowMenu, setComponentToRender }) => {
  const handleOnClick = component => {
    console.log(`You clicked on a button`)
    setComponentToRender(component)
    setShowMenu(false)
  }

  const themeToggle = () => {
    console.log("You wish to toggle the theme.")
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
          <button onClick={themeToggle}>Light/Dark Theme</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
