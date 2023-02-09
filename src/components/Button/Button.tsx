import React from "react";
import "./Button.css";

export interface ButtonProps {
  children?: string;
  mode?: "primary" | "secondary" | "tertiary" | "neutral";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const appearance = useAppearance();
  return (
    <button
      onClick={props.onClick}
      className={`${props.mode || "neutral"} ${appearance}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
