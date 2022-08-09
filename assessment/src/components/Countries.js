import Country from './Country';
import Detail from './Detail';
import Pagination from './Pagination';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Countries() {
    const [countryData, setCountryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function countryList() {
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
            setCountryData(data)
            setIsLoading(false)
        })

    }
    
    useEffect(() => {
        countryList();
    })

    if(isLoading) {
        return (
            <>
            <div className="country--list">
                <h2>Country List</h2>
            </div>
            </>
        )
    }
    
    return (
        <>
            <div className="country--list">
                <h2>Country List</h2>
                <ul>
                    {countryData.map((country)=>{
                        return <li><Link to={`/country/${country.name.common}`}>{country.name.common}</Link></li>
                    })}
                </ul>
            {/* <Pagination /> */}
            </div>
            <Country />
            <Detail />
        </>
    )
}
export default Countries;