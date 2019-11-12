import React from "react";

const NumberItem = ({ key, value }) => (
  <div className="number" key={key}>
    {value}
  </div>
);

export default NumberItem;
