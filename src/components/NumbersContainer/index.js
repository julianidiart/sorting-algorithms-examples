import React, { useState, useEffect } from "react";
import NumberItem from "../NumberItem";

const NumbersContainer = () => {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    const numbersArray = [];
    for (let i = 0; i < 10; i++) {
      numbersArray.push(getRandomInt(-9, 99));
    }
    setNumbers(numbersArray);
  }, []);
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <div className="numbers-container">
      {numbers.map((number, i) => (
        <NumberItem key={i} value={number} />
      ))}
    </div>
  );
};

export default NumbersContainer;
