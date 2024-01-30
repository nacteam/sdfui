import React from "react";
import { useAppearance } from "../../hooks/themes";
import classes from "./Button.module.scss";

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
  const styleClassNames = {
    elevated: classes.elevated,
    filled: classes.filled,
    "filled-tonal": classes.filledTonal,
    outlined: classes.outlined,
    text: classes.text,
    container: classes.container,
    "label-text": classes.labelText,
  }
  console.log("Redering button", props.style, styleClassNames);
  return (
    <button
      onClick={props.onClick}
      className={`${styleClassNames[props.style || "filled"]} ${appearance}`}
      disabled={props.disabled}
    >
      <div className={classes.container}>
        {/* place for Icon # todo  */}
        <div className={classes.labelText}>
          {props.children}
        </div>
      </div>
    </button>
  );
};

export default Button;
