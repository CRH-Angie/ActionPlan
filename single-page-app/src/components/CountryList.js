import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export default function CountryList() {
  const [countryList, setCountryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeLink, setActiveLink] = useState('Afghanistan');


  const [currentPage, setCurrentPage] = useState(2);
  const [postsPerPage] = useState(20);

  function fetchCountryList() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const result = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCountryList(result);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchCountryList();
  }, []);

  const url = window.location.href.split('/');
  useEffect(() => {
    if (url[4]) {
        setActiveLink(url[4])
      }
  }, [url]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = countryList.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(countryList.length / postsPerPage);

  if (isLoading) {
    return (
      <div className="country--list">
        <h2>Countries List</h2>
      </div>
    );
  } else {
    return (
      <div className="country--list">
        <h2>Countries List</h2>
        <ul>
          {currentPosts.map((item, index) => (
            <li
              key={index}
              className={`${decodeURI(activeLink) === item.name.common ? "active" : ""}`}
            >
              <Link
                to={`/country/${item.name.common}`}
                onClick={() => setActiveLink(item.name.common)}
              >
                {item.name.common}
              </Link>
            </li>
          ))}
        </ul>
        <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
      </div>
    );
  }
}
