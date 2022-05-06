import React from "react";
import "./index";

const CardCountry = (props) => {
  console.log(props);
    return (
    <>
  {props.country.length === 0 ? <h4 className="text-primary">try some text <i className="fa-solid fa-magnifying-glass-location text-primary p-2"></i></h4>
    :  <div className="mb-5 row">
  {props.country.map(country => <div className="col animate__animated animate__fadeIn" key={country.code}>    
  <div className="card mb-3 border-primary shadow" style={{width: "18rem"}}>
  <div className="card-header bg-transparent">
  {props.language && country.languages.length === 0 ? <h3 className="card-title"><span className="">Language not available</span></h3> : "" }
  {props.continent ? <h3 className="card-title">{country.continent.name}</h3>
    : <h3 className="card-title">{country.languages.map(len => <p key={len.name}>{len.name}</p>)}</h3>
    }
  </div>
    <div className="card-body text-primary">
      <h5 className="card-title">{country.emoji} - {country.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{country.native}</h6>
      {props.language && country.languages.length > 0 ? <ul className="card-title"><span className="">Languages:</span> {country.languages.map(len => <li className="text-muted" key={len.name}>{len.name}</li>)}</ul>
    : <p className="card-title">Continent: <span className="text-muted">{country.continent.name}</span></p>
    }
    {country.capital ? <p className="card-text">Capital: <span className="text-muted">{country.capital}</span></p> : ""}
    </div> 
  </div>
</div> )}
</div> 
    }
    </>
  )
}

export default CardCountry;