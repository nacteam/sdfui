import React from "react";
import { useAppearance } from "../../hooks/themes";
import "./Button.css";

export interface ButtonProps {
  children?: any; // FIXME
  size?: "small" | "medium" | "large";
  mode?: "primary" | "secondary" | "tertiary" | "neutral";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const { appearance, setAppearance } = useAppearance();
  return (
    <button
      onClick={props.onClick}
      className={`${props.mode || "neutral"} ${props.size || "medium"} ${appearance}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
