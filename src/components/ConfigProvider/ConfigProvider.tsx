import React from "react";
import useAppearance from "../../hooks/themes";
import "./ConfigProvider.css";

export interface ConfigProviderProps {
  children?: React.ReactNode;
  appearance?: "light" | "dark";
}

const ConfigProvider = (props: ConfigProviderProps) => {
  const appearance = props.appearance || useAppearance();
  return (
    <div
      className={`configProvider ${appearance}`}
    >
      {props.children}
    </div>
  );
};

export default ConfigProvider;
