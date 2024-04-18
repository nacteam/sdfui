import React, { Children } from "react";
// import classes from "./Button.module.scss";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size: number;
    title?: string;
}

const Icon = (props: IconProps) => {
    return (
        <svg
            aria-hidden="true"
            display="block"
            {...props}
            viewBox={`0 0 ${props.size} ${props.size}`}
            width={props.size}
            height={props.size}
        >
            {props.title && <title>{props.title}</title>}
            {props.children}
        </svg>
    );
};

export default Icon;
