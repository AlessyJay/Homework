import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [msg, setMesg] = useState(``);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(`Blank Array dependency`);
  }, []);

  useEffect(() => {
    console.log(msg);
  }, [msg]);

  function changeMessage(str) {
    setMesg(str);
  }

  return (
    <div className="container">
      <div className="App">
        <h1>Message: {msg}</h1>
        <input
          type="text"
          value={msg}
          onChange={(e) => setMesg(e.target.value)}
          readOnly={toggle}
        />
        <button
          type="button"
          onClick={() => {
            changeMessage(`one`);
          }}
        >
          1
        </button>
        <button
          type="button"
          onClick={() => {
            changeMessage(`two`);
          }}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => {
            changeMessage(`three`);
          }}
        >
          3
        </button>
        <button
          type="button"
          onClick={() => {
            setToggle((prv) => !prv);
          }}
        >
          Toggle
        </button>
      </div>
    </div>
  );
}

export default App;
