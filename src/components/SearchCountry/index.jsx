import React, { useEffect, useState } from "react";
import CardCountry from "../CardCountry/index";
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
      if(country.name.toString().toLowerCase().startsWith(searchInput.toLowerCase()) 
        && country.name.toString().toLowerCase().includes(searchInput.toLowerCase())){
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
        <input type="text" className="form-control" placeholder="Search" value={countryInput} onChange={handleChange} autoFocus/>
      </div>
    </form>

    {countryInput.length > 0 && countrySearch.length === 0 ? <h4 className="text-primary">search without result, please try with a different text <i className="fa-solid fa-magnifying-glass-plus text-primary p-2"></i></h4>: ""}
      <div className="d-md-flex justify-content-between container m-4">
        <h3 className="mx-5 mt-3 mb-3 2">Group By: </h3>
        <button className="mx-5 mt-md-3 mb-3 px-5 btn btn-outline-primary border-3 fa-solid fa-earth-americas" type="button" onClick={renderContinent}><span className="me-3 fs-5"> Continent</span></button>
        <button className="mx-5 mt-md-3 mb-3 px-5 btn btn-outline-primary border-3 fa-solid fa-language" type="button" onClick={renderLanguage}><span className="me-3 fs-5"> Language</span></button>
      </div>
      <div className="container">
        {countrySearch.length > 0 ? <CardCountry country={countrySearch} continent={continent} language={language}/>
        : <h4 className="text-primary fs-3">try some text <i className="fa-solid fa-magnifying-glass-location text-primary p-2"></i></h4>
        }
      </div>
    </div>
    </>
  )
}

export default SearchCountry;