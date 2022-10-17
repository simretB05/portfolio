import React, {useContext, useState} from "react";
const ThemContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme(){
  return useContext(ThemContext)
}
export function useThemeUpdate(){
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsSetDarkTheme] = useState(false);

  function onThemeDark() {
    setIsSetDarkTheme((d) => !d);
  }
    return (
    
      <ThemContext.Provider value={isDarkTheme}>
          <ThemeUpdateContext.Provider value={ onThemeDark}>
              {children}
          </ThemeUpdateContext.Provider>
          </ThemContext.Provider>
    )
  }
