import React, { useContext } from "react";
import NumbersContext from "../../contexts/NumbersContext";

const ButtonsContainer = () => {
  const {
    generateRandomNumbers,
    handleInsertionSort,
    handleMergeSort,
    handleSelectionSort,
    handleQuicksort,
    setShowBars,
    showBars,
    sorting
  } = useContext(NumbersContext);
  return (
    <>
      <div className="buttons-container">
        <button className="button" onClick={() => setShowBars(!showBars)}>
          {showBars ? "Hide" : "Show"} bars
        </button>
        <button
          className="button"
          onClick={generateRandomNumbers}
          disabled={sorting}
        >
          Generate random numbers
        </button>
      </div>
      <div className="buttons-container">
        <button
          className="button"
          onClick={handleSelectionSort}
          disabled={sorting}
        >
          Selection sort
        </button>
        <button
          className="button"
          onClick={handleInsertionSort}
          disabled={sorting}
        >
          Insertion sort
        </button>
        <button className="button" onClick={handleMergeSort} disabled={sorting}>
          Merge sort
        </button>
        <button className="button" onClick={handleQuicksort} disabled={sorting}>
          Quicksort
        </button>
      </div>
    </>
  );
};

export default ButtonsContainer;
