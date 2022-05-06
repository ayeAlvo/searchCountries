import React from "react";
import "./styles.css";

const Footer = () => {
  return (
  <>
  <footer className="bg-footer">    
  <div className="w-100 bg-dark py-1">
    <div className="container">
        <div className="row pt-2">
            <div className="col-lg-6 col-12">
                <p className="text-lg-start text-center text-light light-300">
                    © Challenge 2022 for Kimche - Data of Public GraphQL API for information -
                </p>
            </div>
            <div className="col-lg-6 col-12">
                <p className="text-lg-end text-center text-light light-300">
                Designed by <a className="text-decoration-none text-light" 
                href="https://github.com/ayeAlvo/searchCountries" target="_blank"><strong>Aye Alvo </strong><i className="px-2 fa-brands fa-github"></i></a>
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