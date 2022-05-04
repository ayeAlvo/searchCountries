import React, { useEffect, useState } from "react";
import Country from "../Country/index";
import "./styles.css";

const SearchCountry = ({countries}) => {

  const [countrySearch, setCountrySearch] = useState([]);
  const [countryInput, setCountryInput] = useState([]);
  const [continent, setContinent] = useState(null);
  const [language, setLanguage] = useState(null);
  // console.log(countries);

  useEffect(() => {
    if (continent === null) {
      setContinent(true);
    }
  }, []);
  
  const handleChange = e => {
    setCountryInput(e.target.value);
    filterCountry(e.target.value);
  }

  const filterCountry = searchInput => {
    let result = countries.filter(country => {
      if(country.name.toString().toLowerCase().includes(searchInput.toLowerCase())){
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
    <div className="">
    <form action="" onSubmit={handleSubmit} className="form-inline justify-content-center m-3">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search" value={countryInput} onChange={handleChange}/>
      </div>
    </form>
    
      <div className="d-md-flex justify-content-between container m-4">
        <h3 className="mx-5 mt-3 mb-3 2">Group By: </h3>
        <button className="mx-5 mt-3 mb-3 px-5 btn btn-outline-primary" type="button" onClick={renderContinent}>Continent</button>
        <button className="mx-5 mt-3 mb-3 px-5 btn btn-outline-primary" type="button" onClick={renderLanguage}>Language</button>
      </div>
      <Country country={countrySearch} continent={continent} language={language}/>
    </div>
    </>
  )
}

export default SearchCountry;