import React, { createContext, useState, useEffect } from "react";
import { uniqueID, getRandomNumber } from "../utils";
import bubbleSort from "../sortingAlgorithms/bubbleSort";
import insertionSort from "../sortingAlgorithms/insertionSort";
import mergeSort from "../sortingAlgorithms/mergeSort";
import quicksort from "../sortingAlgorithms/quicksort";
import selectionSort from "../sortingAlgorithms/selectionSort";

const Context = createContext([]);
export const NumbersStore = props => {
  const [numbers, setNumbers] = useState([]);
  const [quantity, setQuantity] = useState(10);
  const [rangeFrom, setRangeFrom] = useState(0);
  const [rangeTo, setRangeTo] = useState(99);
  const [showBars, setShowBars] = useState(false);
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
        classes: "",
        merging: false,
        mergignValue: null
      });
    }
    setNumbers(numbersArray);
  };
  const handleSort = type => {
    const numbersToSort = [...numbers];
    let animations = [];
    switch (type) {
      case "bubble":
        animations = bubbleSort(numbersToSort);
        break;
      case "insertion":
        animations = insertionSort(numbersToSort);
        break;
      case "merge":
        animations = mergeSort(numbersToSort);
        break;
      case "quick":
        animations = quicksort(numbersToSort);
        break;
      case "selection":
        animations = selectionSort(numbersToSort);
        break;
      default:
        break;
    }
    performAnimations(animations);
  };
  const performAnimations = animations => {
    setSorting(true);
    animations.forEach(
      (
        {
          classes,
          index,
          multiple,
          merging,
          mergingValue,
          toIndex,
          toIndexClasses
        },
        i
      ) => {
        setTimeout(() => {
          let movingNumbers = [...numbers];
          if (multiple) {
            for (let i = index; i <= toIndex; i++) {
              movingNumbers[i].merging = merging;
              if (merging === false)
                movingNumbers[i].value = movingNumbers[i].mergingValue;
              movingNumbers[i].mergingValue = mergingValue;
              movingNumbers[i].classes = classes;
            }
          } else {
            if (merging) movingNumbers[index].merging = merging;
            if (mergingValue) movingNumbers[index].mergingValue = mergingValue;
            if (classes !== undefined) movingNumbers[index].classes = classes;
            if (toIndex !== undefined) {
              const aux = movingNumbers[toIndex].value;
              movingNumbers[toIndex].value = movingNumbers[index].value;
              movingNumbers[index].value = aux;
              if (toIndexClasses !== undefined)
                movingNumbers[toIndex].classes = toIndexClasses;
            }
          }
          setNumbers(movingNumbers);
        }, i * (500 / speed));
      }
    );
    setTimeout(() => {
      setSorting(false);
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
        handleSort,
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
