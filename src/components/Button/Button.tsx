import React from "react";
import { useAppearance } from "../../hooks/themes";
import classes from "./Button.module.scss";
import Ripple from "../Ripple";
import { buildClassName } from "/@/core/util";

export interface ButtonProps extends Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "variant"
> {
  variant?: "elevated" | "filled" | "filled-tonal" | "outlined" | "text";
  icon?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { appearance } = useAppearance();
  const styleClassNames = {
    elevated: classes.elevated,
    filled: classes.filled,
    "filled-tonal": classes.filledTonal,
    outlined: classes.outlined,
    text: classes.text,
    container: classes.container,
    "label-text": classes.labelText
  }

  const {
    variant,
    icon,
    style: userDefinedStyle,
    className: userDefinedClassName,
    children,
    ...cleanedProps
  } = props;
  return (
    <button
      onClick={props.onClick}
      style={userDefinedStyle}
      className={buildClassName(styleClassNames[variant || "filled"], appearance, icon && classes.icon, userDefinedClassName)}
      {...cleanedProps}
    >
      <div className={classes.container}>
        { icon }
        <div className={classes.labelText}>
          { children }
        </div>
      </div>
      <Ripple />
    </button>
  );
};

export default Button;
