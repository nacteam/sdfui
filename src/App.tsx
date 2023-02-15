import React, { useState } from "react";
import { Button } from "./components";
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
  return (
    <div className={`app ${appearance}`}>
      <Button onClick={toggleAppearance} mode="primary" size="small">
        Hello world from SDF UI! Theme: {appearance}
      </Button>
      <Button onClick={toggleAppearance} mode="primary" size="medium">
        Hello world from SDF UI! Theme: {appearance}
      </Button>
      <Button onClick={toggleAppearance} mode="primary" size="large">
        Hello world from SDF UI! Theme: {appearance}
      </Button>
      <br />
      <Button onClick={toggleAppearance} mode="secondary" size="small">
        Hello world from SDF UI! Theme: {appearance}
      </Button>
      <Button onClick={toggleAppearance} mode="secondary" size="medium">
        Hello world from SDF UI! Theme: {appearance}
      </Button>
      <Button onClick={toggleAppearance} mode="secondary" size="large">
        Hello world from SDF UI! Theme: {appearance}
      </Button>
      <br />
      <Button onClick={toggleAppearance} mode="tertiary" size="small">
        Hello world from SDF UI! Theme: {appearance}
      </Button>
      <Button onClick={toggleAppearance} mode="tertiary" size="medium">
        Hello world from SDF UI! Theme: {appearance}
      </Button>
      <Button onClick={toggleAppearance} mode="tertiary" size="large">
        Hello world from SDF UI! Theme: {appearance}
      </Button>
    </div>
  );
}

export default App;
