const initialState = [];


export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return [...state, ...action.product];
    default:
      return state;
  }
}