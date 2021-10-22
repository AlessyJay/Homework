import React from "react";
import { useCount, CountProvider, CountContext } from "./CountContext";
import { useContext } from "react";

function Button() {
  const context = useContext(CountContext);
  return (
    <div>
      <button onClick={() => context.dispatch({ type: `INCREMENT` })}>+</button>
      <button onClick={() => context.dispatch({ type: `STEP`, payload: {} })}>
        Step
      </button>
      <button onClick={() => context.dispatch({ type: `DECREMENT` })}>-</button>
      <button onClick={() => context.dispatch({ type: `RESET` })}>Reset</button>
    </div>
  );
}

export default Button;
