import React from 'react';
import {useCountries} from '../countries/custom-hooks';
import SearchCountry from './SearchCountry';


const ContentWrapper = () => {
  const {data, loading} = useCountries();    
  // console.log(data);

  return (
    <div className="App">
      <h2>Country Search</h2>
      {loading ? <p>Loading...</p>
      : <SearchCountry countries={data?.countries} />            
      }
    </div>
  )

}

export default ContentWrapper;