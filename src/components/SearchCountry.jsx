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
      <div className="border">
        <i className="fa-solid fa-magnifying-glass" >
        <input type="text" placeholder="Search" className="input border-0" value={countryInput} onChange={handleChange} /></i>
      </div>
  
      </form>

      <div className="d-flex justify-content-center">
        <h3 className="mx-5">Group By: </h3>
        <button className="mx-5 px-5" type="button" onClick={renderContinent}>Continent</button>
        <button className="mx-5 px-5" type="button" onClick={renderLanguage}>Language</button>
      </div>

      <Country country={countrySearch} continent={continent} language={language}/>
   
    </>
  )
}

export default SearchCountry;