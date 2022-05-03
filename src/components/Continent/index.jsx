import React from "react";

const Continent = (props) => {
  return (
    <>    
  <div> 
  {props.country.map(country => <div key={country.code}>    
    <div className="card mb-3" style={{width: "18rem"}}>
    <div className="card-header">    
    <h3>{country.continent.name}</h3>
    </div>
      <div className="card-body">
        <h5 className="card-title">{country.emoji} {country.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{country.native}</h6>
        <span className="card-text">Language: {country.languages.map(len => <p key={len.name}>{len.name}</p>)}</span>
      </div> 
    </div>
  </div> )}
 </div> 
    </>
  )

};

export default Continent;