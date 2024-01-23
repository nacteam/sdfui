import React, { useContext, useState } from "react";
import { ThemeContext } from "../../core/theme";
import { getSystemTheme } from "../../core/theme/ThemeContext";
import "./ConfigProvider.scss";

export interface ConfigProviderProps {
  children?: React.ReactNode;
  appearance?: "light" | "dark";
}

const ConfigProvider = (props: ConfigProviderProps) => {
  const appearance_default = getSystemTheme();
  // const appearance = props.appearance || appearance_default;
  const [appearance, setAppearance] = useState(props.appearance || appearance_default);
  const toggleAppearance = () => {
    setAppearance(
      appearance === "light" ? "dark" : "light"
    )
  }
  return (
    <ThemeContext.Provider
      value = { { appearance: appearance, setAppearance: toggleAppearance } }
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ConfigProvider;
