import { createContext } from "react"

const ThemeContext = createContext({
  dark: {
    backgroundColor: "black",
    color: "white",
    menuColor: "lightblue",
    navbarColor: "coral",
  },
  light: {
    backgroundColor: "white",
    color: "black",
    menuColor: "coral",
    navbarColor: "lightblue",
  },
  toggleTheme: () => {
    console.log(`You want to switch theme`)
  },
})

export default ThemeContext
