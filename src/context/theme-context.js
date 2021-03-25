import * as React from "react"
import { createContext, useState, useEffect } from "react"
import { dark, light } from "../styles/themes"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true)
  const [themeToPass, setThemeToPass] = useState(dark)

  useEffect(() => {
    if (darkTheme) {
      setThemeToPass(dark)
    } else {
      setThemeToPass(light)
    }
  }, [darkTheme])

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme, themeToPass }}>
      {children}
    </ThemeContext.Provider>
  )
}
