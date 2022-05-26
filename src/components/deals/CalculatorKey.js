import React from "react";
import "./CalculatorKey.css";

function CalculatorKey(props) {
  return (
    <button onClick={() => props.onClick(props.keyValue)}>
      {props.keyValue}
    </button>
  );
}

export default CalculatorKey;