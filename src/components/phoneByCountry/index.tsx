import React, { useEffect, useState } from "react";
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

type ICountries = typeof countries;

type P = keyof ICountries;

export const PhoneInput: React.FC<IProps> = ({
  phoneNumber,
  setPhoneNumber,
  error,
  placeholder = "Phone number",
  searchPlaceholder = "Search...",
  defaultCountry = "US",
  animatedPlaceholder = true,
  except,
  only,
}) => {
  const [openCountryOptions, setOpenCountryOptions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [countriesList, setCountriesList] = useState(countries);

  const [selectedCountry, setSelectedCountry] = useState<P>(defaultCountry);

  useEffect(() => {
    const hideCountryOptions = () => setOpenCountryOptions(false);
    window.addEventListener("click", hideCountryOptions);
    return () => window.removeEventListener("click", hideCountryOptions);
  }, []);

  const checkDefaultCountry = (obj: ICountries) => {
    if (obj[defaultCountry]) {
      return;
    } else {
      let firstKey = Object.keys(obj)[0] as P;
      setSelectedCountry(firstKey);
    }
  };

  useEffect(() => {
    if (except) {
      let newCountries = { ...countries };
      except.map((code) => {
        delete newCountries[code];
      });
      setCountriesList(newCountries);
      checkDefaultCountry(newCountries);
    }
  }, [except]);

  useEffect(() => {
    if (only) {
      let newCountries1 = {} as typeof countries;
      only.map((code) => {
        newCountries1[code] = countries[code];
      });
      setCountriesList(newCountries1);
      checkDefaultCountry(newCountries1);
    }
  }, [only]);

  const getCountryOptions = () => {
    let list: React.ReactNode[] = [];

    const obj = Object.keys(countries) as P[];

    obj.map((key: P): void => {
      if (
        countriesList[key]?.country?.toLowerCase().includes(searchValue) ||
        countriesList[key]?.dialCode?.toLowerCase().includes(searchValue)
      ) {
        list.push(
          <div
            key={key}
            onClick={(e) => {
              setSelectedCountry(key);
              setOpenCountryOptions(false);
            }}
            className="phoneInput_option"
          >
            <div
              className="phoneInput_flag"
              dangerouslySetInnerHTML={{ __html: countriesList[key].flag }}
            ></div>
            <span>
              {" "}
              {countriesList[key].country +
                " " +
                "(" +
                countriesList[key].dialCode +
                ")"}
            </span>
          </div>
        );
      }
    });

    return list;
  };

  return (
    <div
      className={`${
        error
          ? " phoneInput_container phoneInput_container-withError"
          : "phoneInput_container"
      } `}
    >
      <div className="phoneInput_select">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="phoneInput_select_container"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenCountryOptions(true);
            }}
            className="phoneInput_selected"
          >
            <span
              className="phoneInput_flag"
              dangerouslySetInnerHTML={{
                __html: countriesList[selectedCountry].flag,
              }}
            ></span>
            <span> {countriesList[selectedCountry]["dialCode"]}</span>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z"
                fill="#525F6A"
              />
            </svg>
          </div>
          <div
            className={`phoneInput_optionsContainer  ${
              openCountryOptions ? "phoneInput_optionsContainer-isOpen" : ""
            }`}
          >
            <div className="phoneInput_searchBar">
              <input
                placeholder={searchPlaceholder}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                value={searchValue}
              />
            </div>
            <div>
              <div className="phoneInput_options">{getCountryOptions()}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="phoneInput_inputContainer">
        <input
          type="number"
          id="phoneInput"
          required
          placeholder={animatedPlaceholder ? "" : placeholder}
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.currentTarget.value);
          }}
        />
        {animatedPlaceholder ? (
          <label
            htmlFor="phoneInput"
            className={`phoneInput_label ${
              phoneNumber ? "phoneInput_label-animated" : ""
            }`}
          >
            {placeholder}
          </label>
        ) : null}

        {error ? (
          <div className="phoneInput_invalidFeedback">{error}</div>
        ) : null}
      </div>
    </div>
  );
};
