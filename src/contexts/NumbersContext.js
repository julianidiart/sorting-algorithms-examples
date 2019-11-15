import React, { createContext, useState, useEffect } from "react";
import selectionSort from "../sortingAlgorithms/selectionSort";
import insertionSort from "../sortingAlgorithms/insertionSort";

const Context = createContext([]);
export const NumbersStore = props => {
  const [numbers, setNumbers] = useState([]);
  const [showBars, setShowBars] = useState(false);
  const [quantity, setQuantity] = useState(10);
  const [rangeFrom, setRangeFrom] = useState(0);
  const [rangeTo, setRangeTo] = useState(99);
  const [speed, setSpeed] = useState(1);
  const [sorting, setSorting] = useState(false);
  useEffect(() => {
    generateRandomNumbers();
    // eslint-disable-next-line
  }, [quantity, rangeFrom, rangeTo]);
  const generateRandomNumbers = () => {
    const numbersArray = [];
    for (let i = 0; i < quantity; i++) {
      numbersArray.push({
        id: uniqueID(),
        value: getRandomNumber(rangeFrom, rangeTo),
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
    const selectionSortAnimations = selectionSort(numbers);
    performAnimations(selectionSortAnimations);
  };
  const handleInsertionSort = () => {
    const insertionSortAnimations = insertionSort(numbers);
    performAnimations(insertionSortAnimations);
  };
  const performAnimations = animations => {
    setSorting(true);
    animations.forEach((animation, index) => {
      setTimeout(() => {
        let movingNumbers = [...numbers];
        movingNumbers[animation.index].classes = animation.classes;
        if (animation.toIndex !== undefined) {
          const aux = movingNumbers[animation.toIndex].value;
          movingNumbers[animation.toIndex].value =
            movingNumbers[animation.index].value;
          movingNumbers[animation.index].value = aux;
        }
        setNumbers(movingNumbers);
      }, index * (500 / speed));
    });
    setTimeout(() => {
      setSorting(false);
      console.log(sorting);
    }, animations.length * (500 / speed));
  };
  const onChangeQuantity = ({ target }) => {
    if (+target.value < 2 || target.value === "") setQuantity(2);
    else if (+target.value > 99) setQuantity(99);
    else setQuantity(target.value);
  };
  const onChangeRangeFrom = ({ target }) => {
    if (+target.value < 0 || target.value === "") setRangeFrom(0);
    else setRangeFrom(target.value);
  };
  const onChangeRangeTo = ({ target }) => {
    setRangeTo(target.value);
  };
  const onChangeSpeed = ({ target }) => {
    setSpeed(target.value);
  };
  return (
    <Context.Provider
      value={{
        generateRandomNumbers,
        handleSelectionSort,
        handleInsertionSort,
        numbers,
        onChangeQuantity,
        onChangeRangeFrom,
        onChangeRangeTo,
        onChangeSpeed,
        quantity,
        rangeFrom,
        rangeTo,
        setNumbers,
        setShowBars,
        showBars,
        speed,
        sorting
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
