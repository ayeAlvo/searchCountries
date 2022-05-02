import React from 'react';
import {useCountries} from './countries/custom-hooks';
import Country from './Country';


const Search = () => {

  const {data, error, loading} = useCountries();
    
  // console.log(data);

  // data?.countries.forEach(data => console.log(data?.name))

  return (
    <div className="App">
      <h2>Country Search</h2>
      {loading ? <p>Loading...</p>
      : <Country countries={data?.countries} />            
      }
    </div>
  )

}

export default Search;