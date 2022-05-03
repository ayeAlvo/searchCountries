import React from "react";

const Language = (props) => {
  return (
    <>
    {/* {props.country.map(country => <div key={country.code}>
      <hr />
        {country.languages.map(len => <p key={len.name}>{len.name}</p>)}
        {country.name} <br />
        {country.emoji} <br />
        {country.continent.name}
      <hr />  
    </div> )} */}

    <div> 
  {props.country.map(country => <div key={country.code}>    
    <div className="card mb-3" style={{width: "18rem"}}>
    <div className="card-header">    
    <h3>{country.languages.map(len => <p key={len.name}>{len.name}</p>)}</h3>
    </div>
      <div className="card-body">
        <h5 className="card-title">{country.emoji} {country.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{country.native}</h6>
        <p className="card-text">Continent: {country.continent.name}</p>
        <p className="card-text">Capital: {country.capital}</p>
      </div> 
    </div>
  </div> )}
 </div> 

    </>
  )
}

export default Language;