import React from "react";
import { useState, useEffect } from "react";

function Counter() {
  const [second, setSecond] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSecond((curr) => curr + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <h1>{second}</h1>
    </div>
  );
}

export default Counter;
