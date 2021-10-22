import { createContext, useReducer, useState } from "react";

const INITIAL_COUNT = { count: 0 };
const CountContext = createContext();
const countReducer = (state, action) => {
  switch (action.type) {
    case `INCREMENT`:
      return { ...state, count: state.count + 1 };
      break;
    case `DECREMENT`:
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      } else {
        return state;
      }
      break;
    case `RESET`:
      return { ...state, count: (state.count = 0) };
      break;
    case `STEP`:
      return { ...state, count: state.count + action.payload.step };
      break;
    default:
      return state;
  }
};

const CountProvider = (props) => {
  const [state, dispatch] = useReducer(countReducer, INITIAL_COUNT);
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CountContext.Provider>
  );
};
// const useCount = () => {
//   const contexts = createContext(CountContext);
//   if (CountContext === undefined) {
//     throw new Error(`useCount must be in CountProvider!`);
//   }
//   return contexts;
// };

export { CountProvider, CountContext };
