import React, { useContext } from "react";
import Button from "../Button";
import NumbersContext from "../../contexts/NumbersContext";

const SortingButtonsContainer = () => {
  const {
    handleInsertionSort,
    handleBubbleSort,
    handleHeapSort,
    handleMergeSort,
    handleSelectionSort,
    handleQuicksort
  } = useContext(NumbersContext);
  return (
    <>
      <div className="buttons-container">
        <Button onClick={handleSelectionSort} text="Selection sort" />
        <Button onClick={handleInsertionSort} text="Insertion sort" />
        <Button onClick={handleBubbleSort} text="Bubble sort" />
        <Button onClick={handleMergeSort} text="Merge sort" />
        <Button onClick={handleQuicksort} text="Quicksort" />
        <Button onClick={handleHeapSort} text="Heap sort" />
      </div>
    </>
  );
};

export default SortingButtonsContainer;
