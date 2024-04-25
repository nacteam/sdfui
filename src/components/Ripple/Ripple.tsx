import React, { useState } from "react";
import classes from "./Ripple.module.scss";

// const useDebouncedRippleCleanUp = (
//   rippleCount: number,
//   duration: number, cleanUpFunction: () => void) => {
//   useLayoutEffect(() => {
//     cleanUpFunction();
//     let bounce: any = null;
//     if (rippleCount > 0) {
//       clearTimeout(bounce);

//       bounce = setTimeout(() => {
//         cleanUpFunction();
//         clearTimeout(bounce);
//       }, duration * 4);
//     }

//     return () => clearTimeout(bounce);
//   }, [rippleCount, duration, cleanUpFunction]);
// };

type RippleType = {
  x: number,
  y: number,
  size: number
};

const Ripple = () => {
  const [rippleArray, setRippleArray] = useState([] as RippleType[]);

  const [timeoutId, setTimeoutId] = useState(null as any);
  const rescheduleCleanup = () => {
    // function to reschedule removing old span tags
    // we should cancel active timeout and set a new one
    // to clear tags only once
    setRippleArray([]);
    if (rippleArray.length > 0) {
      clearTimeout(timeoutId);

      setTimeoutId(setTimeout(() => {
        setRippleArray([]);
        clearTimeout(timeoutId);
      }, 600 * 2));
    }
  };

  const addRipple = (event: React.MouseEvent<HTMLElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size
    };
    rescheduleCleanup();
    setRippleArray([...rippleArray, newRipple]);
  };
  return (
    <div onMouseDown={addRipple} className={classes.rippleContainer}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"ripple" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size
              }}
            />
          );
        })}
    </div>
  );
};

export default Ripple;
