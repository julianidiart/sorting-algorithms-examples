import React, { useContext } from "react";
import NumbersContext from "../../contexts/NumbersContext";

const SortingButtonsContainer = () => {
  const {
    handleInsertionSort,
    handleBubbleSort,
    handleMergeSort,
    handleSelectionSort,
    handleQuicksort,
    sorting
  } = useContext(NumbersContext);
  return (
    <>
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
        <button
          className="button"
          onClick={handleBubbleSort}
          disabled={sorting}
        >
          Bubble sort
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

export default SortingButtonsContainer;
