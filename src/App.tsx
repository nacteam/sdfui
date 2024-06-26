import React, { useState } from "react";
import { Button, Ripple, Stack } from "./components";
import TextField from "./components/TextField";
import { useAppearance } from "./hooks/themes";
import { useAdaptiveValue, useMediaScreenSize } from "./hooks/media";

function App() {
  const { appearance, setAppearance } = useAppearance();
  // console.log(appearance);
  const toggleAppearance = () => {
    console.log(appearance);
    setAppearance(appearance === "light" ? "dark" : "light");
  };
  const [tfV, setTfV] = useState('');

  const screenSize = useMediaScreenSize();
  const aValue = { sm: "sm", md: "md", lg:"lg" };
  // const aValue = "test";
  const value = useAdaptiveValue(aValue, "default");
  return (
    <div className={`app ${appearance}`}>
      <Stack divider={
        <div style={{ height: 1, width: "100%", backgroundColor: "#000" }} />
      } direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, md: 4 }}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </Stack>
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
    </div>
  );
}

export default App;
