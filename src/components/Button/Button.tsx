import React from "react";
import "./Button.css";

export interface ButtonProps {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default Button;