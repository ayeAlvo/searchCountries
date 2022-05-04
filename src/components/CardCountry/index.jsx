import React from "react";

const CardCountry = (props) => {
  return (
    <>
    {props.country.length === 0 ? <p>escribe un texto</p>
    :  <div className="mb-5">
{props.country.map(country => <div key={country.code}>    
  <div className="card mb-3" style={{width: "18rem"}}>
  <div className="card-header">
  {props.continent === true ? <h3 className="card-title">{country.continent.name}</h3>
    : 
    <h3 className="card-title">{country.languages.map(len => <p key={len.name}>{len.name}</p>)}</h3>
    }
  </div>
    <div className="card-body">
      <h5 className="card-title">{country.emoji}  {country.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{country.native}</h6>
      {props.continent === true ? <ul className="card-title"><span className="">Languages:</span> {country.languages.map(len => <li className="text-muted" key={len.name}>{len.name}</li>)}</ul>
    : 
    <p className="card-title">Continent: <span className="text-muted"></span></p>
    }
    <p className="card-text">Capital: <span className="text-muted">{country.capital}</span></p>
    </div> 
  </div>
</div> )}
</div> 
    }
    </>
  )
}

export default CardCountry;