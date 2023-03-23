import React, { useState } from "react";
import { useAppearance } from "../../hooks/themes";
import "./TextField.css";

export interface TextFieldProps { // тут тайпинг для нашего класса. Пусть пока будет только один - placeholder.
  placeholder?: string; // FIXME
  onChange?: Function;
  mode?: "primary" | "secondary" | "tertiary" | "neutral";
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TextField = (props: TextFieldProps) => {
  const { appearance, setAppearance } = useAppearance();
  const [value, setValue] = useState('');
  return (
    <input
      className={`${props.mode || "neutral"} ${appearance}`}
      placeholder={ props.placeholder }
      type={ "text" }
      onChange={(event) => {setValue(event.target.value); props.onChange && props.onChange(event.target.value);}}
    />

  );
};

export default TextField;
