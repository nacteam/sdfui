import React, { useState } from "react";
import { useAppearance } from "../../hooks/themes";
import "./TextField.css";

export interface TextFieldProps { // тут тайпинг для нашего класса. Пусть пока будет только один - placeholder.
  labelText?: string; // FIXME
  onChange?: Function;
  leadingIcon?: any, // FIXME - тип Icon
  trailingIcon?: any, // FIXME - аналогично
  supportingText?: string,
  color?: "primary" | "secondary" | "tertiary" | "neutral",
  mode?: "filled" | "outlined";
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TextField = (props: TextFieldProps) => {
  const { appearance, setAppearance } = useAppearance();
  const [value, setValue] = useState('');
  return (
    <div
      className={ "textFieldBox" }
    >
      {props.leadingIcon ? props.leadingIcon : null}
      <input
        className={`${props.color || "neutral"} ${appearance}`}
        placeholder={ props.labelText }
        type={ "text" }
        onChange={(event) => {setValue(event.target.value); props.onChange && props.onChange(event.target.value);}}
      />
    </div>

  );
};

export default TextField;
