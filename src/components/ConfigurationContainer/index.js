import React, { useContext } from "react";
import Button from "../Button";
import NubersContext from "../../contexts/NumbersContext";

const ConfigurationContainer = () => {
  const {
    generateRandomNumbers,
    onChangeRangeFrom,
    onChangeRangeTo,
    onChangeQuantity,
    onChangeSpeed,
    quantity,
    rangeFrom,
    rangeTo,
    setShowBars,
    showBars,
    sorting,
    speed
  } = useContext(NubersContext);
  return (
    <>
      <div className="buttons-container buttons-container--configuration">
        <div>Sorting</div>
        <input
          className="config-number"
          disabled={sorting}
          max="99"
          min="2"
          onChange={onChangeQuantity}
          step="1"
          style={{ width: `${("" + quantity).length * 17}px` }}
          type="number"
          value={quantity}
        />
        <div>numbers from</div>
        <input
          className="config-number"
          disabled={sorting}
          min="0"
          onChange={onChangeRangeFrom}
          step="1"
          style={{ width: `${("" + rangeFrom).length * 17}px` }}
          type="number"
          value={rangeFrom}
        />
        <div>to</div>
        <input
          className="config-number"
          disabled={sorting}
          min="0"
          onChange={onChangeRangeTo}
          step="1"
          style={{ width: `${("" + rangeTo).length * 17}px` }}
          type="number"
          value={rangeTo}
        />
        <div>at</div>
        <input
          className="config-number"
          disabled={sorting}
          min="1"
          onChange={onChangeSpeed}
          step="1"
          style={{ width: `${("" + speed).length * 17}px` }}
          type="number"
          value={speed}
        />
        <div>x speed.</div>
      </div>
      <div className="buttons-container">
        <Button
          onClick={() => setShowBars(!showBars)}
          text={(showBars ? "Hide" : "Show") + " bars"}
          notDisabledOnSort
        />
        <Button
          onClick={generateRandomNumbers}
          text="Generate random numbers"
        />
      </div>
    </>
  );
};

export default ConfigurationContainer;
