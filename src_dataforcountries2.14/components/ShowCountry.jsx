import React from "react";
import CountryOverview from "./CountryOverview.jsx";

const ShowCountry = ({ countries, newSearch, handleShowButton }) => {
  let countriesToShow =
    newSearch === ""
      ? ``
      : countries.filter((c) =>
          c.name.toLowerCase().includes(newSearch.toLowerCase())
        );

  if (countriesToShow.length === 0) {
    return <p>enter a country!</p>;
  } else if (countriesToShow.length > 10) {
    return (
      <div>
        <p>Too many countries to show!</p>
      </div>
    );
  } else if (countriesToShow.length > 1) {
    return (
      <div>
        <ul>
          {countriesToShow.map((e) => (
            <li key={e.name}>
              {e.name}{" "}
              <button value={e.name} onClick={handleShowButton}>
                show
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (countriesToShow.length === 1) {
    return (
      <div>
        <CountryOverview country={countriesToShow[0]} />
      </div>
    );
  }
};

export default ShowCountry;
