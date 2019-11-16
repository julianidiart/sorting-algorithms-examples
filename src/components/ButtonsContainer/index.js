import React, { useContext } from "react";
import NumbersContext from "../../contexts/NumbersContext";

const ButtonsContainer = () => {
  const context = useContext(NumbersContext);
  return (
    <>
      <div className="buttons-container">
        <button
          className="button"
          onClick={() => context.setShowBars(!context.showBars)}
        >
          {context.showBars ? "Hide" : "Show"} bars
        </button>
        <button
          className="button"
          onClick={context.generateRandomNumbers}
          disabled={context.sorting}
        >
          Generate random numbers
        </button>
      </div>
      <div className="buttons-container">
        <button
          className="button"
          onClick={context.handleSelectionSort}
          disabled={context.sorting}
        >
          Selection sort
        </button>
        <button
          className="button"
          onClick={context.handleInsertionSort}
          disabled={context.sorting}
        >
          Insertion sort
        </button>
        <button
          className="button"
          onClick={context.handleMergeSort}
          disabled={context.sorting}
        >
          Merge sort
        </button>
      </div>
    </>
  );
};

export default ButtonsContainer;
