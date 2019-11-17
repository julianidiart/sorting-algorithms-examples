import React, { createContext, useState, useEffect } from "react";
import { uniqueID, getRandomNumber } from "../utils";
import selectionSort from "../sortingAlgorithms/selectionSort";
import insertionSort from "../sortingAlgorithms/insertionSort";
import mergeSort from "../sortingAlgorithms/mergeSort";
import quicksort from "../sortingAlgorithms/quicksort";

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
  const handleSelectionSort = () => {
    const numbersToSort = [...numbers];
    const selectionSortAnimations = selectionSort(numbersToSort);
    performAnimations(selectionSortAnimations);
  };
  const handleInsertionSort = () => {
    const numbersToSort = [...numbers];
    const insertionSortAnimations = insertionSort(numbersToSort);
    performAnimations(insertionSortAnimations);
  };
  const handleMergeSort = () => {
    const numbersToSort = [...numbers];
    const mergeSortAnimations = mergeSort(numbersToSort);
    performAnimations(mergeSortAnimations);
  };
  const handleQuicksort = () => {
    const numbersToSort = [...numbers];
    const quicksortAnimations = quicksort(numbersToSort);
    performAnimations(quicksortAnimations);
  };
  const performAnimations = animations => {
    setSorting(true);
    animations.forEach(
      ({ classes, index, toIndex, multiple, merging, mergingValue }, i) => {
        setTimeout(() => {
          let movingNumbers = [...numbers];
          if (multiple) {
            for (let i = index; i < toIndex; i++) {
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
        handleInsertionSort,
        handleMergeSort,
        handleSelectionSort,
        handleQuicksort,
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
