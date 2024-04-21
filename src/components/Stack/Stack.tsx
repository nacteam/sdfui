import React from "react";
import classes from "./Stack.module.scss";
import { AdaptiveValue } from "/@/core/types/AdaptiveDesign";
import { useAdaptiveValue } from "/@/hooks/media";

type DirectionType = "row" | "column";
export interface StackProps {
  children: React.ReactNode,
  spacing?: AdaptiveValue<number>,
  direction?: AdaptiveValue<DirectionType>
  divider?: React.ReactNode
}

const Stack = (props: StackProps) => {
  const { direction, spacing } = props;

  const directionValue = direction ? (
    useAdaptiveValue(direction, "column")
  ) : "column";
  const spacingValue = spacing ? (
    useAdaptiveValue(spacing, 0)
  ) : 0;
  const styles = {
    flexDirection: directionValue,
    gap: spacingValue * 4
  };
  return (
    <div style={styles} className={classes.stack}>
      {React.Children.map(props.children, (child, index) => (
        <React.Fragment key={index}>
          {child}
          {
            index !== React.Children.count(props.children) - 1 &&
            props.divider
          }
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stack;
