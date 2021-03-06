import React from 'react';
import './CountriesList.css';

import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  const displayCountries = () =>
    countries.map((country) => (
      <li key={country.cca3}>
        {/* <img
          src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
          alt={country.cca2}
        /> */}
        <span>{country.flag}</span>
        <Link to={`/detail/${country.cca3}`}>{country.name.common}</Link>
      </li>
    ));
  return <ul className="list-container">{displayCountries()}</ul>;
}

export default CountriesList;
