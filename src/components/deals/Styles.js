import styled from "styled-components";

export const CalculatorStyle = styled.div`
  width: 20rem;
  height: 30rem;
  background-color: lightcyan;
  display: grid;
  padding: 1%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: ridge;
`;

export const Button = styled.button`
  width: 4.2rem;
  height: 4.2rem;
  margin: 0.4rem;
  text-align: center;
  font-size: 150%;
  border-radius: 0.8rem;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem grey;
`;

export const KeyNumbers = styled.div`
  grid-area: keys-numbers;
`;
export const KeyOperators = styled.div`
  grid-area: keys-operators;
`;
export const KeyFunction = styled.div`
  grid-area: keys-function;
`;
export const CalculatorKeypad = styled.div`
  padding-top: 0.3rem;
  background-color: lightblue;
  display: grid;
  grid-template-columns: repeat(4, 5rem);
  grid-template-rows: repeat(5, 5rem);
  grid-template-areas: "keys-function keys-function keys-function keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators";
`;

export const CalculatorInput = styled.div`
  border-color: black;
  border: ridge;
  text-align: right;
  padding-right: 10%;
  font-weight: bold;
  font-size: xx-large;
`;
