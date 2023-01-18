import React, { useState } from "react";

import { PhoneInput } from "../components/phoneByCountry";

export default {
  title: "PhoneInput",
  component: PhoneInput,
};

export const Primary = (args) => {
  const [phone, setPhone] = useState("");
  return (
    <div style={{ maxWidth: "500px" }}>
      <PhoneInput
        {...args}
        phoneNumber={phone}
        setPhoneNumber={(e) => setPhone(e)}
      />
    </div>
  );
};

export const OnlySpecificCountries = (args) => {
  const [phone, setPhone] = useState("");
  return (
    <div style={{ maxWidth: "500px" }}>
      <PhoneInput
        {...args}
        phoneNumber={phone}
        setPhoneNumber={(e) => setPhone(e)}
        only={["GE", "US", "AE", "AU"]}
      />
    </div>
  );
};

export const WithError = (args) => {
  const [phone, setPhone] = useState("");
  return (
    <div style={{ maxWidth: "500px" }}>
      <PhoneInput
        {...args}
        phoneNumber={phone}
        setPhoneNumber={(e) => setPhone(e)}
        error="Phone number is invalid"
      />
    </div>
  );
};
