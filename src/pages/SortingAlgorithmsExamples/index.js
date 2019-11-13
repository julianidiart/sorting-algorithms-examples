import React from "react";
import NumbersContainer from "../../components/NumbersContainer";
import ButtonsContainer from "../../components/ButtonsContainer";
import { NumbersStore } from "../../contexts/NumbersContext";

const SortingAlgorithmsExample = () => {
  return (
    <NumbersStore>
      <div className="page-container">
        <h1>Sorting Algorithms Examples</h1>
        <NumbersContainer />
        <ButtonsContainer />
      </div>
    </NumbersStore>
  );
};

export default SortingAlgorithmsExample;
