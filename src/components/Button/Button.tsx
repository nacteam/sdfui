import React from "react";
import { useAppearance } from "../../hooks/themes";
import classes from "./Button.module.scss";
import uiClasses from "/@/core/styles/ui.module.scss";
import Ripple from "../Ripple";
import { buildClassName } from "/@/core/util";

type ButtonReact = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;


export type ButtonProps = {
  variant?: "elevated" | "filled" | "filled-tonal" | "outlined" | "text";
  icon?: React.ReactNode;
} & Pick<ButtonReact, "style" | "className" | "children" | "onClick"> & Record<string, unknown>;


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
      className={buildClassName(styleClassNames[variant || "filled"], appearance, icon && classes.icon, uiClasses.translucentSurface, userDefinedClassName)}
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
