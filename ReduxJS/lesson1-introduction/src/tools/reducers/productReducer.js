const initialState = [];


export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.product];

    default:
      return state;
  }
}