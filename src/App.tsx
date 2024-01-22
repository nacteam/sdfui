import React, { useState } from "react";
import { Button } from "./components";
import TextField from "./components/TextField";
// import { Button, ConfigProvider } from ;
import { ThemeContext } from "./core/theme";
import { useAppearance } from "./hooks/themes";

function App() {
  const { appearance, setAppearance } = useAppearance();
  console.log(appearance);
  const toggleAppearance = () => {
    console.log(appearance);
    setAppearance(appearance === "light" ? "dark" : "light");
  };
  const [tfV, setTfV] = useState('');
  return (
    <div className={`app ${appearance}`}>
      <TextField
      mode="filled"
      labelText={"Test!"}
      onChange={ (value: any) => {setTfV(value)} }/>
      <Button
        onClick={toggleAppearance}
        style={"filled"}
      >
        Change theme! (filled)
      </Button>
      <Button
        onClick={toggleAppearance}
        style={"filled"}
        disabled={true}
      >
        Change theme! (filled, disabled)
      </Button>
      <Button
        onClick={toggleAppearance}
        style={"filled-tonal"}
      >
        Change theme! (tonal)
      </Button>
      <Button
        onClick={() => alert(tfV)}
        style={"outlined"}
        disabled={true}
      >
        Change theme! (outlined, disabled)
      </Button>
      <Button
        onClick={() => alert(tfV)}
        style={"outlined"}
      >
        Change theme! (outlined)
      </Button>
    </div>
  );
}

export default App;
