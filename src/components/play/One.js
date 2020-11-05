import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return {
        count: state.count + action.payload,
      };
    case "dec":
      return {
        count: state.count - action.payload,
      };
    default:
      return (state = {
        count: 0,
      });
  }
}

function One() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const add = () => {
    dispatch({
      type: "inc",
      payload: 1,
    });
  };

  const sub = () => {
    dispatch({
      type: "dec",
      payload: 1,
    });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={add}>Add 1</button>
      <button onClick={sub}>Sub 1</button>
    </div>
  );
}

export default One;
