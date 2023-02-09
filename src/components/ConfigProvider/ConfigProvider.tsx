import React, { useState } from "react";
import useAppearance from "../../hooks/themes";
import "./ConfigProvider.css";

export interface ConfigProviderProps {
  children?: React.ReactNode;
  appearance?: "light" | "dark";
}

const ConfigProvider = (props: ConfigProviderProps) => {
  const [appearance, setAppearance] = useState(
    useAppearance() || props.appearance
    );
  return (
    <div
      className={`configProvider ${appearance}`}
    >
      {props.children}
    </div>
  );
};

export default ConfigProvider;
