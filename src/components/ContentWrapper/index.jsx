import React from 'react';
import {useCountries} from '../../countries/custom-hooks';
import SearchCountry from '../SearchCountry/index';
import Footer from '../Footer/index';

const ContentWrapper = () => {
  const {data, loading} = useCountries();    
  // console.log(data);

  return (
    <div className="container shadow bg-light">
      <h2 className="text-start m-5 fs-1">Country Search</h2>
      {loading ? <p>Loading...</p>
      : <SearchCountry countries={data?.countries} />            
      }
      <Footer />
    </div>
  )

}

export default ContentWrapper;