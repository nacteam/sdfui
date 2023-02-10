import React, { useContext, useState } from "react";
import { ThemeContext } from "../../core/theme";
import { useAppearance } from "../../hooks/themes";
import "./ConfigProvider.css";

export interface ConfigProviderProps {
  children?: React.ReactNode;
  appearance?: "light" | "dark";
}

const ConfigProvider = (props: ConfigProviderProps) => {
  const appearance_default = useAppearance();
  const appearance = props.appearance || appearance_default;
  const [theme, setTheme] = useState("light");
  const toggleAppearance = () => {
    setTheme(
      theme === "light" ? "dark" : "light"
    )
  }
  return (
    <ThemeContext.Provider
      value = { { theme, setTheme } }
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ConfigProvider;
