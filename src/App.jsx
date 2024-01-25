import React from "react";
import "./index.css";
import { useState } from "react";
const App = () => {
  const [name, setName] = useState("M Abeer");
  console.log(useState);
  return (
    <>
      <div className="main">
        <h1>{name}</h1>
        <button
          onClick={() => {
            setName("I am a software engineer.");
            if (name === "I am a software engineer.") {
              setName("M Abeer");
            }
          }}
        >
          Click Me!
        </button>
      </div>
    </>
  );
};

export default App;
