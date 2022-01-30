let initState = {
  counter: 0,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { ...state, counter: (action.payload += 1) };
    case "DECREASE_COUNT":
      return { ...state, counter: (action.payload -= 1) };
    default:
      return { ...state };
  }
  // we export the reducer, and return a cloned state with new key / values that we can later use
};
