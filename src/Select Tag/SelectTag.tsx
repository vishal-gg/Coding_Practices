import React, { useState, ChangeEvent } from "react";

interface Country {
  name: string;
  cities: string[];
}

const SelectTag: React.FC = () => {
  const countries: Country[] = [
    { name: "India", cities: ["Delhi", "Mumbai", "Arunachal Pradesh"] },
    { name: "America", cities: ["Chicago", "California", "Ohio", "Alaska"] },
  ];

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const handleCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedCity("");
  };

  const handleCity = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  return (
    <>
      <label htmlFor="country">Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountry}>
        <option value="">--select country--</option>
        {countries.map((country: Country, index: number) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <label htmlFor="city">City:</label>
      <select
        id="city"
        value={selectedCity}
        onChange={handleCity}
        disabled={!selectedCountry}
      >
        <option value="">--select city--</option>
        {selectedCountry &&
          countries
            .find((country: Country) => country.name === selectedCountry)
            ?.cities.map((city: string, index: number) => (
              <option value={city} key={index}>
                {city}
              </option>
            ))}
      </select>
    </>
  );
};

export default SelectTag;
