import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pagination({ pages = 7, setCurrentPage }) {
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrentButtons, setArrOfCurrentButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrentButtons];
    let dotsInitial = "...";
    let dotsLeft = "...";
    let dotsRight = "...";
    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [
        1,
        2,
        3,
        4,
        dotsInitial,
        numberOfPages.length - 1,
        numberOfPages.length,
      ];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [
        ...sliced,
        dotsInitial,
        numberOfPages.length - 1,
        numberOfPages.length,
      ];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        2,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length - 1,
        numberOfPages.length,
      ];
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrentButtons[arrOfCurrentButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrentButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrentButtons[3] - 2);
    }

    setArrOfCurrentButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton]);

  return (
    <div className="pagination">
      <Link
        to={`/?page=${currentButton <= 1 ? currentButton : currentButton - 1}`}
        className={`${currentButton === 1 ? "disabled" : ""}`}
        onClick={() =>
          setCurrentButton((currentButton) => (currentButton <= 1 ? currentButton : currentButton - 1))
        }
      >{`<`}</Link>
      {arrOfCurrentButtons.map((item, index) => {
        return (
          <Link
            to={`/?page=${item}`}
            key={index}
            className={`${currentButton === item ? "active" : ""}`}
            onClick={() => setCurrentButton(item)}
          >
            {item}
          </Link>
        );
      })}
      <Link
        to={`/?page=${currentButton === numberOfPages.length ? currentButton : currentButton + 1}`}
        className={`${
          currentButton === numberOfPages.length ? "disabled" : ""
        }`}
        onClick={() =>
          setCurrentButton((currentButton) =>
            currentButton >= numberOfPages.length ? currentButton : currentButton + 1
          )
        }
      >{`>`}</Link>
    </div>
  );
}
