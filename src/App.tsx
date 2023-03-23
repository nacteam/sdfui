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
      placeholder={"Test!"}
      onChange={ (value: any) => {setTfV(value)} }/>
      <Button
        onClick={() => alert(tfV)}
        mode={"primary"}
      >
        Change theme!
      </Button>
    </div>
  );
}

export default App;
