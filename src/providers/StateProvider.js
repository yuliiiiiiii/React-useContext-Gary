import { createContext, useState } from 'react';

export const stateContext = createContext();

export default function StateProvider(props) {

  // Here is our Shared State Object
  const [counter, setCounter] = useState(0);

  // Functions to change  the counter state item
  const increment = function() {
    setCounter(counter + 1);
  };
  const decrement = function() {
    setCounter(counter - 1);
  };
  const clear = function() {
    setCounter(0);
  };

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = { counter, increment, decrement, clear };

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  );
};

