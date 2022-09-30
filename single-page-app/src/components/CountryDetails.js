import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails() {
    const [countryDetails, setCountryDetails] = useState([]);
    const url = window.location.href.split('/');
    let cntry = url[4];
    
    
    if(!cntry ) cntry = 'Afghanistan';
    
    function fetchCountryDetails() {
        fetch(`https://restcountries.com/v3.1/name/${cntry}`)
        .then((res) => res.json())
        .then((data) => {
        setCountryDetails(data);
        });
    }
    
    useEffect(() => {
        fetchCountryDetails();
    }, [cntry]);

  useEffect(() => {
    if (cntry) {
        // console.log('url:',cntry);
        cntry = url[4];
      }
  }, []);

    console.log('countryDetails',countryDetails);
    
    return (
        <div className='country--details'>
            <h2>Countries Details</h2>
        </div>
    )
}