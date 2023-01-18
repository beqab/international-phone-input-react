import React from "react";
import { countries } from "./countries";
import "./style.modules.scss";
interface IProps {
    phoneNumber: string;
    setPhoneNumber: (e: any) => void;
    error?: string;
    placeholder?: string;
    searchPlaceholder?: string;
    defaultCountry?: P;
    animatedPlaceholder?: boolean;
    except?: P[];
    only?: P[];
}
declare type ICountries = typeof countries;
declare type P = keyof ICountries;
export declare const PhoneInput: React.FC<IProps>;
export {};
