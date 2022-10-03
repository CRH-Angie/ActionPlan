import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CountryDescription() {
  const [countryDescription, setCountryDescription] = useState([]);
  const [countrySummary, setCountrySummary] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  let { cntry } = useParams();

  if(!cntry ) cntry = 'Afghanistan';

  useEffect(() => {
    function fetchCountryDescription() {
      fetch(`https://restcountries.com/v3.1/name/${cntry}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryDescription(data);
        setIsLoading(false);
      });
    }

    fetchCountryDescription();
  }, [cntry]);

  useEffect(() => {
    function fetchCountrySummary() {
      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${cntry}`)
      .then(res => res.json())
      .then(data => {
        setCountrySummary(data.extract);
      })
    }
    fetchCountrySummary();
  }, [cntry]);
  
  if (isLoading) {
    return (
      <>
        <div className="country--description">
          <h2>Country</h2>
        </div>
      </>
    );
  } 
  return (
    <>
      <div className="country--description">
        <h2>Country</h2>
        {countryDescription.slice(0,1).map((item, index) => (
          <div key={index}>
          <figure>
            <img src={item.flags.svg ? item.flags.svg : item.flags.png} alt=""/>
            <figcaption></figcaption>
          </figure>
          <h3>{item.name.common}</h3>
          <div className="country--summary">
            <div className="summary">
              {countrySummary}
            </div>
            <a href={`https://en.wikipedia.org/api/rest_v1/page/html/${cntry}`} target="_blank" className="readmore" rel="noreferrer">Read More &gt;&gt;</a>
          </div>
          </div>
        ))}
      </div>
    </>
  );
}