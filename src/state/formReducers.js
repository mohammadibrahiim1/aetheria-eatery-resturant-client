import { actionTypes } from "./actionTypes";

export const initialState = {
  name: "",
  email: "",
  city: "",
  state: "",
  zip: "",
  number: 0,
  term: false,
};

export const reducer = (action, state) => {
  console.log(state,action);
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };

    default:
      return state;
  }
};
