import React, { useCallback } from "react";
import classes from "./Container.module.scss";
import { AdaptiveValue } from "/@/core/types/AdaptiveDesign";
import { useAdaptiveValue } from "/@/hooks/media";
import { buildClassName } from "/@/core/util";

type EmphasisVariants = (
  "surface-container-lowest" |
  "surface-container-low" |
  "surface-container" |
  "surface-container-high" |
  "surface-container-highest"
);
type ContainerVariants = "primary" | "secondary" | "tertiary" | EmphasisVariants;
type ShapeStyles = (
  "none" |
  "extra-small" |
  "small" |
  "medium" |
  "large" |
  "extra-large" |
  "full"
);
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode,
  margin?: AdaptiveValue<number>,
  padding?: AdaptiveValue<number>,
  variant?: ContainerVariants,
  outline?: boolean,
  outlineStyle?: "outline" | "outline-variant" | "auto",
  shapeStyle?: ShapeStyles
}

const Container = ({
  margin = 0,
  padding = 2,
  variant = "surface-container",
  outline = false,
  outlineStyle = "auto",
  shapeStyle = "medium",
  style: userDefinedStyle,
  className: userDefinedClassName,
  children,
  ...cleanedProps
}: ContainerProps) => {
  const marginValue = useAdaptiveValue(margin, 0);
  const paddingValue = useAdaptiveValue(padding, 2);

  const getOutline = useCallback((): string => {
    if (!outline) return classes.outlineNone;
    if (!variant.startsWith("surface-container")) {
      console.warn(
        "[design] Please do not use outline with primary, secondary, or tertiary variants. Use surface container variants instead."
      )
    }
    if (outlineStyle === "outline") return classes.outline;
    if (outlineStyle === "outline-variant") return classes.outlineVariant;

    // auto outline color detection
    return (
      React.Children.count(children) > 1 ?
        classes.outlineVariant :
        classes.outline
    );
  }, []);

  const variants = {
    primary: classes.primary,
    secondary: classes.secondary,
    tertiary: classes.tertiary,
    "surface-container-lowest": classes.surfaceContainerLowest,
    "surface-container-low": classes.surfaceContainerLow,
    "surface-container": classes.surfaceContainer,
    "surface-container-high": classes.surfaceContainerHigh,
    "surface-container-highest": classes.surfaceContainerHighest
  }

  const shapeStyles = {
    none: classes.shapeNone,
    "extra-small": classes.shapeExtraSmall,
    small: classes.shapeSmall,
    medium: classes.shapeMedium,
    large: classes.shapeLarge,
    "extra-large": classes.shapeExtraLarge,
    full: classes.shapeFull
  }

  const styles = {
    margin: marginValue * 4,
    padding: paddingValue * 4
  };

  return (
    <div
      style={{...styles, ...userDefinedStyle}}
      className={
        buildClassName(
          classes.container,
          variants[variant],
          shapeStyles[shapeStyle],
          getOutline(),
          userDefinedClassName
        )
      }
      {...cleanedProps}
    >
      {children}
    </div>
  );
};

export default Container;
