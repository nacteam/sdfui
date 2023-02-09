import React, { useContext } from "react";
import {ThemeContext, useAppearance} from "../../hooks/themes";
import "./ConfigProvider.css";

export interface ConfigProviderProps {
  children?: React.ReactNode;
  appearance?: "light" | "dark";
}

const ConfigProvider = (props: ConfigProviderProps) => {
  const appearance_default = useAppearance();
  const appearance = props.appearance || appearance_default;
  const [theme, setTheme] = useContext(ThemeContext);
  alert(setTheme);
  // setTheme(appearance);
  return (
    <div
      className={`configProvider ${appearance}`}
    >
      {props.children}
    </div>
  );
};

export default ConfigProvider;
