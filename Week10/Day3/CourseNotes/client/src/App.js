import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("David");
  const [lastName, setLastName] = useState("Smith");

  const handleClick = () => {
    setName("Fima");
    setLastName("Treiger");
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          {name} {lastName}
        </h1>
        <button onClick={handleClick}>Change Name</button>
      </div>
    </div>
  );
};

export default App;
