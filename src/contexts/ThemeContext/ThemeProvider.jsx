import { ThemeContext } from "./contextTheme";
import { useState } from "react";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('Theme')?localStorage.getItem('Theme'):'light');
  const [mount, setMount] = useState("false");
  
  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme==="light"?localStorage.setItem('Theme','dark'):localStorage.setItem('Theme','light')
  }
  return (
    
    <ThemeContext.Provider
      value={{ theme, setTheme, mount, setMount, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
