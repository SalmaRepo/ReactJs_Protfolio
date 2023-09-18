import { ThemeContext } from "./contextTheme";
import { useState } from "react";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mount, setMount] = useState("false");
  
  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    
    <ThemeContext.Provider
      value={{ theme, setTheme, mount, setMount, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
