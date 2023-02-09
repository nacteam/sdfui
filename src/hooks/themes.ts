import React, { useEffect, useState } from "react";

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
const useAppearance = () => {
    let system_appearance = useThemeDetector() ? "dark" : "light"; // system theme
    let appearance = localStorage.getItem("sdfui__theme");
    appearance =
      appearance === "light" || appearance === "dark" ? appearance : null; // appearance will be null if it is unset or invalid
    appearance = appearance || system_appearance; // set theme is greater than system
    console.log("Detected appearance: " + appearance);
    return appearance;
  };
// const ThemeContext = React.createContext(useAppearance());
const ThemeContext = React.createContext("test");
export { useAppearance, ThemeContext };
