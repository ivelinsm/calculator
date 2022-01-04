import React, { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import { evaluate } from "mathjs";
import { isClickableInput } from "@testing-library/user-event/dist/utils";

const isNumber = (val) => {
  return !isNaN(val) ? true : false
}

const multipleOperatorCheck = (val, equ) => {

}

const App = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [equation, setEquation] = useState("");
  let prevEquation = '';
  let prevValue = '';
  const operations = ["x", "/", "-", "+", "=", "AC", "."];

  const isThereZeroBefore = (num) => {
    return num==='0' ? true : false
  }

  const calculate = (e) => {
    e.preventDefault();

    let clickedButton = e.target.value;

    if(isNumber(clickedButton)){
      if(isThereZeroBefore(currentValue)){
        setCurrentValue(clickedButton);
        setEquation(clickedButton);
      }
      else{
        setCurrentValue(currentValue + clickedButton);
        setEquation(equation + clickedButton);
      }
    }
    else{
      setEquation(equation + clickedButton);

      switch (clickedButton) {
        case "x":
          setCurrentValue("*");
          setEquation(equation + '*');
          break;
        case "=":
          setEquation(currentValue + "=" + (evaluate(currentValue)));
          setCurrentValue(evaluate(currentValue));
          break;
        case "AC":
          setEquation("");
          setCurrentValue("0");
          break;
        default:
          setCurrentValue(clickedButton);
      }
    }
  };

  return (
    <main>
      <Display currentValue={currentValue} result={equation} />
      <Buttons onBtnClick={calculate} />
    </main>
  );
};

export default App;