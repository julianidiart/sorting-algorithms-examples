import React, { useContext } from "react";
import NubersContext from "../../contexts/NumbersContext";

const ConfigurationContainer = () => {
  const context = useContext(NubersContext);
  return (
    <div className="buttons-container buttons-container--configuration">
      <div>Sorting</div>
      <input
        className="config-number"
        disabled={context.sorting}
        min="2"
        onChange={context.onChangeQuantity}
        step="1"
        style={{ width: `${("" + context.quantity).length * 17}px` }}
        type="number"
        value={context.quantity}
      />
      <div>numbers from</div>
      <input
        className="config-number"
        disabled={context.sorting}
        min="0"
        onChange={context.onChangeRangeFrom}
        step="1"
        style={{ width: `${("" + context.rangeFrom).length * 17}px` }}
        type="number"
        value={context.rangeFrom}
      />
      <div>to</div>
      <input
        className="config-number"
        disabled={context.sorting}
        min="0"
        onChange={context.onChangeRangeTo}
        step="1"
        style={{ width: `${("" + context.rangeTo).length * 17}px` }}
        type="number"
        value={context.rangeTo}
      />
      <div>at</div>
      <input
        className="config-number"
        disabled={context.sorting}
        min="1"
        onChange={context.onChangeSpeed}
        step="1"
        style={{ width: `${("" + context.speed).length * 17}px` }}
        type="number"
        value={context.speed}
      />
      <div>x speed.</div>
    </div>
  );
};

export default ConfigurationContainer;
