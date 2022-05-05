import React from 'react';
import {useCountries} from '../../countries/custom-hooks';
import SearchCountry from '../SearchCountry/index';
import Footer from '../Footer/index';
import './styles.css';

const ContentWrapper = () => {
  const {data, loading} = useCountries();    
  return (
    <div className="container shadow bg_color">
      <h2 className="text-start mt-md-5 mt-2 fs-1 text-primary animate__animated animate__headShake">Country Search</h2>
      <h4 className="text-start mb-md-5 mb-4 mt-md-3 mt-2 text-primary">for letters and words</h4>
      {loading ? <i className="fa-solid fa-spinner fa-spin-pulse fa-3x m-3 text-primary"></i>
      : <SearchCountry countries={data?.countries} />            
      }
      <Footer />
    </div>
  )
}

export default ContentWrapper;