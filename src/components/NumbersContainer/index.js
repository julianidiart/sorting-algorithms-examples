import React, { useState, useEffect } from "react";
import NumberItem from "../NumberItem";

const NumbersContainer = () => {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    generateRandomNumbers();
    // eslint-disable-next-line
  }, []);
  const generateRandomNumbers = () => {
    const numbersArray = [];
    for (let i = 0; i < 10; i++) {
      numbersArray.push(getRandomNumber(0, 99));
    }
    setNumbers(numbersArray);
  };
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <>
      <div className="numbers-container">
        {numbers.map((number, i) => (
          <NumberItem key={i} value={number} />
        ))}
      </div>
      <div className="numbers-container">
        <button className="button" onClick={generateRandomNumbers}>
          Generate random numbers
        </button>
      </div>
    </>
  );
};

export default NumbersContainer;
