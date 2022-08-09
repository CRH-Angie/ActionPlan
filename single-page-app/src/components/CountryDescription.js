import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CountryDescription() {
    const [countryDescription, setCountryDescription] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {cntry} = useParams()

    function fetchCountryDescription() {
        fetch(`https://restcountries.com/v2/name/kuwait`)
        .then((res) => res.json())
        .then((data) => {
            setCountryDescription(data)
            setIsLoading(false)
        })
        console.log('cntry',cntry)

    }
    useEffect(()=>{
        fetchCountryDescription()
    }, [cntry])
    if(isLoading){
        return (
            <>
            <div className='country--description'>
                <h2>Country</h2>
            </div>
            </>
        )
    } else { 
        return (
            <>
            <div className='country--description'>
                <h2>Country</h2>
                <h3>{cntry}</h3>
                {countryDescription.map((item,index) => {
                    return (
                        // <figure>
                        //     {/* <img src={item.flags.svg} alt={item.name} /> */}
                        //     <figcaption>{item.name}</figcaption>
                        // </figure>
                        <h3 key={index}>{item.name}</h3>
                    )
                })}
            </div>
            </>
        )
    }
}