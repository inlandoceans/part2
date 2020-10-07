import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowCountry from "./components/ShowCountry";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newSearch, setSearch] = useState("");

  const handleSearch = (event) => setSearch(event.target.value);
  const handleShowButton = (event) => setSearch(event.target.value);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <p>
        find countries <input value={newSearch} onChange={handleSearch} />
      </p>
      <ShowCountry
        countries={countries}
        newSearch={newSearch}
        handleShowButton={handleShowButton}
      />
    </div>
  );
};

export default App;
