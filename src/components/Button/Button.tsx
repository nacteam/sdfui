import React from "react";
import { useAppearance } from "../../hooks/themes";
import "./Button.scss";

export interface ButtonProps {
  children?: any; // FIXME
  style?: "elevated" | "filled" | "filled-tonal" | "outlined" | "text";
  // TODO: resolve issue https://github.com/nacteam/sdfui/issues/2
  // color?: "primary" | "secondary" | "tertiary" | "neutral";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const { appearance, setAppearance } = useAppearance();
  return (
    <button
      onClick={props.onClick}
      className={`${props.style || "neutral"} ${appearance}`}
      disabled={props.disabled}
    >
      <div className={"container"}>
        {/* place for Icon # todo  */}
        <div className="label_text">
          {props.children}
        </div>
      </div>
    </button>
  );
};

export default Button;
