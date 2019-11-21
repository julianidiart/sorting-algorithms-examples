import React, { useContext } from "react";
import NumbersContext from "../../contexts/NumbersContext";

const Button = ({ text, onClick, notDisabledOnSort }) => {
  const { sorting } = useContext(NumbersContext);
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={notDisabledOnSort ? false : sorting}
    >
      {text}
    </button>
  );
};

export default Button;
