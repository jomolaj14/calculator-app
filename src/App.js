import React from 'react';
import './App.css';
import Calculator from './Calculator'; // Import the Calculator component

function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Calculator /> {/* Use the Calculator component */}
    </div>
  );
}

export default App;