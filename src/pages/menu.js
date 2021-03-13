import React from "react"
import "../styles/menu.css"

const Menu = () => {
  const handleOnClick = buttonClicked => {
    console.log(`You clicked on ${buttonClicked}`)
  }

  return (
    <div className="menu">
      <ul className="menu-list">
        <li>
          <button onClick={handleOnClick}>About me</button>
        </li>
        <li>
          <button onClick={handleOnClick}>My work</button>
        </li>
        <li>
          <button onClick={handleOnClick}>Contact me</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
