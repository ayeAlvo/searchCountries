import React, { useState } from "react";
import Country from "./Country";

const SearchCountry = ({countries}) => {

  const [countrySearch, setCountrySearch] = useState([]);
  const [countryInput, setCountryInput] = useState([]);
  const [continent, setContinent] = useState(null);
  const [language, setLanguage] = useState(null);
  // console.log(countries);


  const handleChange = e => {
    setCountryInput(e.target.value);
    console.log(countryInput);
    filterCountry(e.target.value);
  }

  const filterCountry = searchInput => {
    let result = countries.filter(country => {
      if(country.name.toString().toLowerCase().includes(searchInput.toLowerCase())){
        console.log(country);
        return country;
      }
    });
    setCountrySearch(result);
  }
  
  const handleSubmit = e => {
    e.preventDefault();
  }
  
  const renderContinent = () => {
    setContinent(true);
    setLanguage(null);
  }

  const renderLanguage = () => {
    setLanguage(true);
    setContinent(null);
  }
  
  return (
    <>
    <form action="" onSubmit={handleSubmit} className="form-inline justify-content-center m-3 d-flex">
        <input type="text" placeholder="Search" className="input" value={countryInput} onChange={handleChange} />
        {/* <button type="submit" className="btn btn-outline-light mx-2 btn-search">Filter</button> */}        
      </form>

      <h3>Group By: </h3>
      <button type="button" onClick={renderContinent}>Continent</button>
      <button type="button" onClick={renderLanguage}>Language</button>

      <Country country={countrySearch} continent={continent} language={language}/>
   
    </>
  )
}

export default SearchCountry;