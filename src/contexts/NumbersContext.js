import React, { createContext, useState, useEffect } from "react";
import { selectionSort } from "../sortingAlgorithms";

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
      numbersArray.push({
        id: uniqueID(),
        value: getRandomNumber(0, 99),
        classes: ""
      });
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
  const handleSelectionSort = () => {
    const selectionSortMovements = selectionSort(numbers);
    selectionSortMovements.forEach((movement, index) => {
      setTimeout(() => {
        let movingNumbers = [...numbers];
        movingNumbers[movement.index].classes = movement.classes;
        if (movement.toIndex !== undefined) {
          const aux = movingNumbers[movement.toIndex].value;
          movingNumbers[movement.toIndex].value =
            movingNumbers[movement.index].value;
          movingNumbers[movement.index].value = aux;
        }
        setNumbers(movingNumbers);
      }, index * 200);
    });
    // setNumbers(orderedNumbers);
  };
  return (
    <Context.Provider
      value={{
        numbers,
        setNumbers,
        generateRandomNumbers,
        showBars,
        setShowBars,
        handleSelectionSort
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
