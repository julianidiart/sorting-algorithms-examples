import React from "react";
import NumbersContainer from "../../components/NumbersContainer";
import SortingButtonsContainer from "../../components/SortingButtonsContainer";
import ConfigurationContainer from "../../components/ConfigurationContainer";
import { NumbersStore } from "../../contexts/NumbersContext";

const SortingAlgorithmsExample = () => {
  return (
    <NumbersStore>
      <div className="page-container">
        <h1>Sorting Algorithms Examples</h1>
        <ConfigurationContainer />
        <NumbersContainer />
        <SortingButtonsContainer />
      </div>
    </NumbersStore>
  );
};

export default SortingAlgorithmsExample;
