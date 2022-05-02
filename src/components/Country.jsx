import React from "react";

const Country = (props) => {
  if(props.continent){
    return (
      <>
      {props.country.map(country => <div key={country.code}>
        <hr />
          {country.continent.name} <br />
          {country.name} <br />
          {country.emoji} <br />
          {country.languages.map(len => <p key={len.name}>{len.name}</p>)}
        <hr />  
      </div> )}
      </>
    )
  }

  if(props.language){
    return (
      <>
      {props.country.map(country => <div key={country.code}>
        <hr />
          {country.languages.map(len => <p key={len.name}>{len.name}</p>)}
          {country.name} <br />
          {country.emoji} <br />
          {country.continent.name}
        <hr />  
      </div> )}
      </>
    )
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