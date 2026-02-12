

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  payload: 10
})
store.dispatch({
  type: "INCREMENT",
  payload: 20
})
store.dispatch({
  type: "DECREMENT"
})