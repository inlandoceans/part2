import React from "react";
import Weather from "./Weather";

const CountryOverview = ({ country }) => {
  return (
    <div>
      <h3>{country.name}</h3>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <ul>
        {country.languages.map((e) => (
          <li key={e.name}>{e.name}</li>
        ))}
      </ul>
      <img style={{ maxWidth: 100 }} src={country.flag} alt='flag' />
      <Weather capital={country.capital} />
    </div>
  );
};

export default CountryOverview;
