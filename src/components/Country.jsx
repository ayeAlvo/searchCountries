import React from "react";
import Continent from "./Continent";
import Language from "./Language";

const Country = (props) => {
  if(props.continent){
    return <Continent country={props.country}/>       
  }

  if(props.language){
    return <Language country={props.country} />      
  }

  return (
    <>
    {props.country.map(country => <div key={country.code}>
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