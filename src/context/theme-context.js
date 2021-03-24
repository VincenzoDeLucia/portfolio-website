import { createContext } from "react"

const ThemeContext = createContext({
  dark: { backgroundColor: "black" },
  light: { backgroundColor: "white" },
  toggleTheme: () => {
    console.log("You wish to toggle the theme")
  },
})

export default ThemeContext
