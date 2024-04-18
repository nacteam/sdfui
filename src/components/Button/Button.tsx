import React from "react";
import { useAppearance } from "../../hooks/themes";
import classes from "./Button.module.scss";

export interface ButtonProps extends Omit<
  React.HTMLAttributes<HTMLButtonElement>,
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

  const { variant, icon, ...restProps } = props;

  return (
    <button
      onClick={props.onClick}
      className={`${styleClassNames[variant || "filled"]} ${appearance} ${icon ? classes.icon : ""}`}
      {...restProps}
    >
      <div className={classes.container}>
        { icon }
        <div className={classes.labelText}>
          { props.children }
        </div>
      </div>
    </button>
  );
};

export default Button;
