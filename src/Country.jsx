import React, { useState } from "react";

const Country = ({countries}) => {

  const [countrySearch, setCountrySearch] = useState([]);
  const [countryInput, setCountryInput] = useState([]);
  console.log(countries);
  // countries.map(country => console.log(country.languages[0].name));

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
    console.log(countrySearch);
  }

  
  const handleSubmit = e => {
    e.preventDefault();
  }  
  

  return (
    <>
    <form action="" onSubmit={handleSubmit} className="form-inline justify-content-center m-3 d-flex">
        <input type="text" placeholder="Search" className="input" value={countryInput} onChange={handleChange} />
        {/* <button type="submit" className="btn btn-outline-light mx-2 btn-search">Filter</button> */}
      </form>

      {countrySearch.map(country => <div key={country.code}>
        <hr /> 
          {country.name} <br />
          {country.emoji} <br />
          {country.languages.map(len => <p key={len.name}>{len.name}</p>)}
          {country.continent.name}
        <hr />  
      </div> )}
    </>
  )
}

export default Country;