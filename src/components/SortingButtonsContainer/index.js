import React, { useContext } from "react";
import Button from "../Button";
import NumbersContext from "../../contexts/NumbersContext";

const SortingButtonsContainer = () => {
  const { handleSort } = useContext(NumbersContext);
  return (
    <>
      <div className="buttons-container">
        <Button onClick={() => handleSort("bubble")} text="Bubble sort" />
        <Button onClick={() => handleSort("insertion")} text="Insertion sort" />
        <Button onClick={() => handleSort("merge")} text="Merge sort" />
        <Button onClick={() => handleSort("quick")} text="Quicksort" />
        <Button onClick={() => handleSort("selection")} text="Selection sort" />
      </div>
    </>
  );
};

export default SortingButtonsContainer;
