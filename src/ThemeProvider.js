import { createContext } from "react";
import { useState } from "react";
export const themeContext = createContext()

export function ThemeProvider({children}){
    const [theme, setTheme] = useState('dart')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }  
    const value = {
        theme,
        toggleTheme
    }
    return(
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
}