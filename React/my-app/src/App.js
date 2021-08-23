import React from "react";
import { useReducer, useState } from "react";
import "./style/style.css";
import Button from "./components/Button";
import Text from "./components/Text";
import { CountProvider, useCount } from "./components/CountContext";

// dispatch({ type: "INCREMENT" });
const INITIAL_STATE = { count: 0, error: `` };

// Using reducer
// const counterReducer = (state, action) => {
//   if (action.type === `INCREMENT`) {
//     return { ...state, count: state.count + 1 };
//   } else if (action.type === `DECREMENT`) {
//     if (state.count > 0) {
//       // 1st solution
//       const cloneState = { ...state };
//       cloneState.count = state.count - 1;
//       return cloneState;

//       // 2nd solution
//       // return { ...state, count: state.count - 1 };
//     }
//     return state;
//   } else if (action.type === `RESET`) {
//     return { ...state, count: (state.count = 0) };
//   } else {
//     return state;
//   }
// };

// using switch case
// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case `INCREMENT`:
//       return { ...state, count: state.count + 1 };
//       break;
//     case `DECREMENT`:
//       if (state.count > 0) {
//         return { ...state, count: state.count - 1 };
//       } else {
//         return state;
//       }
//       break;
//     case `RESET`:
//       return { ...state, count: (state.count = 0) };
//       break;
//     case `STEP`:
//       return { ...state, count: state.count + action.payload.step };
//   }
// };
const App = () => {
  // const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  // const [step, setStep] = useState(0);
  return (
    <div className="container">
      {/* 1st solution */}
      {/* <h1>{state.count}</h1>
      <input placeholder="Enter values" type="text"></input>
      <button onClick={() => dispatch({ type: `INCREMENT` })}>+</button>
      <button onClick={() => dispatch({ type: `STEP`, payload: { step } })}>
        Step
      </button>
      <button onClick={() => dispatch({ type: `DECREMENT` })}>-</button>
      <button onClick={() => dispatch({ type: `RESET` })}>Reset</button> */}

      <CountProvider>
        <Text />
        <Button />
      </CountProvider>
    </div>
  );
};

export default App;
