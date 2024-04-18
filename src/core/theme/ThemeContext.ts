import { createContext, useEffect, useState } from "react";
const useThemeDetector = () => {
    const getCurrentTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };
  
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
  };
const getSystemTheme = () => useThemeDetector() ? "dark" : "light";
const ThemeContext = createContext({} as any);
export {
    getSystemTheme, 
    ThemeContext,
    useThemeDetector
}