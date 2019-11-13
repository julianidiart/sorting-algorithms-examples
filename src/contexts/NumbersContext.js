import React, { createContext, useState, useEffect } from "react";

const Context = createContext([]);
export const NumbersStore = props => {
  const [numbers, setNumbers] = useState([]);
  const [showBars, setShowBars] = useState(false);
  useEffect(() => {
    generateRandomNumbers();
    // eslint-disable-next-line
  }, []);
  const generateRandomNumbers = () => {
    const numbersArray = [];
    for (let i = 0; i < 10; i++) {
      numbersArray.push({ id: uniqueID(), value: getRandomNumber(0, 99) });
    }
    setNumbers(numbersArray);
  };
  const uniqueID = () => {
    function chr4() {
      return Math.random()
        .toString(16)
        .slice(-4);
    }
    return (
      chr4() +
      chr4() +
      "-" +
      chr4() +
      "-" +
      chr4() +
      "-" +
      chr4() +
      "-" +
      chr4() +
      chr4() +
      chr4()
    );
  };
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <Context.Provider
      value={{
        numbers,
        setNumbers,
        generateRandomNumbers,
        showBars,
        setShowBars
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
