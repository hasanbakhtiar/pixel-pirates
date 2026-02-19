const initialState = [];


export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      return [...state, action.product];


    case "DELETE_PRODUCT":
      return state.filter(p => p.id !== action.id);


    default:
      return state;
  }
}