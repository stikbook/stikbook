import React, { useState } from "react";
import CalculatorKey from "../deals/CalculatorKey";
import {CalculatorStyle, CalculatorInput, CalculatorKeypad, KeyFunction, KeyOperators, KeyNumbers} from "./Styles";

function Calculator() {
  const [prevValue, setPrevValue] = useState(0);
  const [nextValue, setNextValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [op, setOp] = useState(null);
  const CalculatorOperations = ["/", "*", "+", "-", "="];

  let displayString = `${prevValue === 0 ? "" : prevValue} ${
    op === null ? "" : op
  } ${nextValue}`;

  const handleNum = (number) => {
    setNextValue(
      nextValue === 0
        ? String(number)
        : (String(nextValue) + number).replace(/^0+/, "")
    );
  };

  const clearData = () => {
    setOp(null);
    setNextValue(0);
    setPrevValue(0);
  };

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      if (finalValue !== 0) {
        setFinalValue(0);
        setNextValue(String(value));
      } else {
        handleNum(parseInt(value, 10));
      }
    } else if (CalculatorOperations.includes(value)) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      else{
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        var temp = 0;
        if (op === "+") {
          temp = parseFloat(prevValue) + parseFloat(nextValue);
        } else if (op === "-") {
          temp = prevValue - nextValue;
        } else if (op === "*") {
          temp = prevValue * nextValue;
        } else if (op === "/") {
          temp = prevValue / nextValue;
        }
        setNextValue(temp);
        if (value === "=") {
          setFinalValue(nextValue);
          setOp(null);
          setPrevValue(0);
        } else {
          setPrevValue(temp);
          setOp(value);
          setNextValue("");
        }
      }
    } else if (value === "c") {
      clearData();
    }
  };
  return (
    <>
      <CalculatorStyle>
        <CalculatorInput>
          <div>{displayString}</div>
        </CalculatorInput>
        <CalculatorKeypad>
          <KeyOperators>
            {CalculatorOperations.map((i) => (
              <CalculatorKey keyValue={i} onClick={handleOperation} />
            ))}
          </KeyOperators>
          <KeyNumbers>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <CalculatorKey keyValue={i} onClick={handleOperation} />
            ))}
          </KeyNumbers>
          <KeyFunction>
            <CalculatorKey keyValue="c" onClick={handleOperation} />
          </KeyFunction>
        </CalculatorKeypad>
      </CalculatorStyle>
    </>
  );
}

export default Calculator;
