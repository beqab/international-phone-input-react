import * as React from "react";
import "./button.module.scss";
declare type ButtonStyle = {
    [property: string]: string;
};
interface IButton {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    children: React.ReactNode;
    loading?: boolean;
    type?: "submit" | "button" | "reset";
    style?: ButtonStyle;
}
export declare const Button: React.FC<IButton>;
export {};
