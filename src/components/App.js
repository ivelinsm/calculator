import React, { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import { evaluate } from "mathjs";

const isValid = (key, input) => {
  if (key) {
    return true
  }
};

const App = () => {
  const [input, setInput] = useState("");
  const [previous, setPrevious] = useState("");
  const operations = ["x", "/", "-", "+", "=", "AC", "."];

  const calculate = (e) => {
    e.preventDefault();
    let pressedKey = e.target.value;
    if (!isValid(pressedKey, input)){
      return;
    }
      switch (pressedKey) {
        case "x":
          setInput(input + "*");
          break;
        case "=":
          setPrevious(input);
          setInput(evaluate(input));
          break;
        case "AC":
          setPrevious("");
          setInput("");
          break;
        default:
          setInput(input + pressedKey);
      }
  };

  return (
    <main>
      <Display input={input} result={previous} />
      <Buttons onBtnClick={calculate} />
    </main>
  );
};

export default App;
