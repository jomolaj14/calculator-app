import React, { useState } from 'react';
import './Calculator.css'; // For styling

const Calculator = () => {
  const [input, setInput] = useState(''); // Holds the full input expression
  const [result, setResult] = useState(''); // Holds the result

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput(input + value); // Append the clicked button value to input
  };

  // Function to calculate the result
  const calculate = () => {
    try {
      const evaluatedResult = eval(input); // Evaluate the input expression
      setResult(evaluatedResult); // Store the result
      setInput(evaluatedResult.toString()); // Show result in input area
    } catch (error) {
      setResult('Error');
      setInput(''); // Clear input on error
    }
  };

  // Clear the input and result
  const clear = () => {
    setInput('');
    setResult('');
  };

  // Function to clear the last character (for the AC key)
  const clearLastEntry = () => {
    setInput(input.slice(0, -1)); // Remove the last character
  };

  // Split the input expression to display the current number separately
  const getCurrentNumber = () => {
    const operators = ['+', '-', '*', '/'];
    let lastOperatorIndex = -1;

    // Find the last operator in the input
    for (let i = 0; i < operators.length; i++) {
      const index = input.lastIndexOf(operators[i]);
      if (index > lastOperatorIndex) {
        lastOperatorIndex = index;
      }
    }

    // If no operator, return the full input as the current number
    if (lastOperatorIndex === -1) {
      return input;
    }

    // Return the part after the last operator
    return input.slice(lastOperatorIndex + 1);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{input || '0'}</div>
        <div className="currentNumber">{getCurrentNumber() || '0'}</div>
      </div>

      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={clearLastEntry}>AC</button> 
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button className="zero" onClick={() => handleClick('0')}>0</button>
        <button className="equals" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;