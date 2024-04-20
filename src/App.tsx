import React, { useState } from "react";
import { Button, Icon, Ripple } from "./components";
import TextField from "./components/TextField";
// import { Button, ConfigProvider } from ;
import { ThemeContext } from "./core/theme";
import { useAppearance } from "./hooks/themes";
import { useAdaptiveValue, useMediaScreenSize } from "./hooks/media";

function App() {
  const { appearance, setAppearance } = useAppearance();
  console.log(appearance);
  const toggleAppearance = () => {
    console.log(appearance);
    setAppearance(appearance === "light" ? "dark" : "light");
  };
  const [tfV, setTfV] = useState('');
  const testIcon = <Icon size={18}>
      <title>add_24</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="add_24">
          <rect id="Bounds" x="0" y="0" width="24" height="24" />
          <path d="M13.000006,11 L19.5,11 C20.0522847,11 20.5,11.4477153 20.5,12 C20.5,12.5522847 20.0522847,13 19.5,13 L13.000006,13 L13.000006,19.500084 C13.000006,20.0523464 12.5523089,20.5000435 12.0000465,20.5000435 C12.000032,20.5000435 12.0000175,20.5000435 12.000003,20.5000435 C11.4477096,20.5000195 11,20.0522904 11,19.499997 L11,13 L4.5,13 C3.94771525,13 3.5,12.5522847 3.5,12 C3.5,11.4477153 3.94771525,11 4.5,11 L11,11 L11,4.50000301 C11,3.9477166 11.4477166,3.5 12.000003,3.5 C12.5522894,3.5 13.000006,3.9477166 13.000006,4.50000301 L13.000006,11 Z" id="Mask" fill="currentColor" />
        </g>
      </g>
  </Icon>;

  let screenSize = useMediaScreenSize();
  const aValue = { sm: "sm", md: "md", lg:"lg" };
  // const aValue = "test";
  const value = useAdaptiveValue(aValue, "default");
  return (
    <div className={`app ${appearance}`}>
      <span>
        Is XS: {screenSize.isXs.toString()} <br />
        Is SM: {screenSize.isSm.toString()} <br />
        Is MD: {screenSize.isMd.toString()} <br />
        Is LG: {screenSize.isLg.toString()} <br />
        Is XL: {screenSize.isXl.toString()} <br />
        Adaptive value: {value}
      </span>
      <TextField
        mode="filled"
        labelText={"Test!"}
        onChange={(value: any) => { setTfV(value) }} />
      <Button
        variant={"filled"}
      >
        Change theme! (filled)
        <Ripple />
      </Button>
      <Button
        onClick={toggleAppearance}
        variant={"filled"}
        disabled={true}
      >
        Change theme! (filled, disabled)
      </Button>
      <Button
        onClick={toggleAppearance}
        variant={"filled-tonal"}
      >
        Change theme! (tonal)
      </Button>
      <Button
        onClick={() => alert(tfV)}
        variant={"outlined"}
        disabled={true}
      >
        Change theme! (outlined, disabled)
      </Button>
      <Button
        onClick={() => alert(tfV)}
        variant={"outlined"}
      >
        Change theme! (outlined)
      </Button>
      <br />
      <Button
        onClick={() => alert(tfV)}
        variant={"elevated"}
      >
        Change theme! (outlined)
      </Button>
      { testIcon }
    </div>
  );
}

export default App;
