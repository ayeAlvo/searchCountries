import React from "react";

const Footer = () => {
  return (
  <>
  <footer className="bg-footer fixed-bottom">    
  <div className="w-100 bg-dark py-3">
    <div className="container">
        <div className="row pt-2">
            <div className="col-lg-6 col-12">
                <p className="text-lg-start text-center text-light light-300">
                    © Proyect 2022 - Data of Public GraphQL API for information -
                </p>
            </div>
            <div className="col-lg-6 col-12">
                <p className="text-lg-end text-center text-light light-300">
                    Diseñado por <a className="text-decoration-none text-light" 
                href="https://github.com/ayeAlvo/searchCountries" target="_blank"><strong>Aye Alvo </strong></a>
                </p>
            </div>
        </div>
    </div>
  </div>    
</footer>
</>
)    
}

export default Footer;