import React, {useContext, useState} from "react";
const OpenMenu = React.createContext()
const OpenMenuUpdate = React.createContext()


export function UseOpenMenu(){
  return useContext(OpenMenu)
}
export function UseOpenMenuUpdate(){
  return useContext(OpenMenuUpdate)
}


export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsSetDarkTheme] = useState(false);

  function OnOpenMenu() {
    setIsSetDarkTheme((p) => !p);
  }
    return (
    
      <OpenMenu.Provider value={isDarkTheme}>
          <OpenMenuUpdate.Provider value={ OnOpenMenu}>
              {children}
          </OpenMenuUpdate.Provider>
          </OpenMenu.Provider>
    )
  }
