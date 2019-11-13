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
          Show bars
        </button>
        <button className="button" onClick={context.generateRandomNumbers}>
          Generate random numbers
        </button>
      </div>
      <div className="buttons-container">
        <button className="button" onClick={context.handleSelectionSort}>
          Selection sort
        </button>
      </div>
    </>
  );
};

export default ButtonsContainer;
