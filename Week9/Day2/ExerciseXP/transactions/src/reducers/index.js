let initState = {
  accountNumber: "",
  FSC: "",
  name: "",
  amount: null,
  fullForm: "",
  list: [],
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "INSERT":
      return {
        ...state,
        list: action.payload,
      };
    case "UPDATE":
      return { ...state, list: action.payload };
    case "UPDATE-INDEX":
      return { ...state, currentIndex: action.payload };
    case "DELETE":
      return { ...state };
    default:
      return { ...state };
  }
};
