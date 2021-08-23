import React from "react";
import { useContext } from "react";
import { useCount, CountProvider, CountContext } from "./CountContext";

function Text() {
  const context = useContext(CountContext);
  return (
    <div>
      <h1>{context.state.count}</h1>
      <input
        type="text"
        placeholder="Enter values"
        onChange={(e) => +e.target.value}
      />
    </div>
  );
}

export default Text;
