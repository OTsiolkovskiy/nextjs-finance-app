import { useState } from "react";
import { useCookies } from "react-cookie";

const useDarkMode = (defaultTheme = 'dark') => {
  const [theme, setTeme] = useState(defaultTheme);
  const [_, setCookie] = useCookies(['theme']);

  const setAndSaveTheme = (theme) => {
    setTeme(theme)
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    setCookie('theme', theme);
  };

  const toggleTheme = () => {
    setAndSaveTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return {theme, toggleTheme}
  
}

export default useDarkMode;