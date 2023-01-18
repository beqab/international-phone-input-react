import React from "react";
interface IInput {
    type?: string;
    hasError?: boolean;
    className?: string;
    name?: string;
    required?: boolean;
    placeholder?: string;
    useRef?: any;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    value?: string;
    id?: string;
}
export declare const Input: React.FC<IInput>;
export {};
