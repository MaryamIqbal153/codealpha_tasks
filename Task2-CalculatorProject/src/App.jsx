// src/App.jsx

import React, { useState, useEffect } from "react";
import Display from "./Components/Display";
import ButtonGrid from "./Components/ButtonGrid";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        // ⚠️ eval is just for quick demo (not safe in production)
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch (error) {
        setResult("Math Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression((prev) => prev + value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if ("0123456789+-*/.".includes(key)) {
        handleButtonClick(key);
      } else if (key === "Enter") {
        handleButtonClick("=");
      } else if (key === "Backspace") {
        setExpression((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      } else if (key.toLowerCase() === "c") {
        handleButtonClick("C");
      }
      
      event.target.blur();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expression]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-80">
      <h2 className="text-2xl font-bold mb-4 text-center">My Calculator</h2>
      
      {/* Screen */}
      <Display value={expression || result || "0"} />
      <Display value={result || "Result"} />

      {/* Buttons */}
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
