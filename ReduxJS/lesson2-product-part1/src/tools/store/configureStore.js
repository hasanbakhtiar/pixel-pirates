import { combineReducers, createStore } from "redux";
import { productReducer } from "../reducers/productReducer";
import { categoryReducer } from "../reducers/categoryReducer";

const configureStore = () => {
    const store = createStore(combineReducers({
        product: productReducer,
        category: categoryReducer
    }));

    //   const store = createStore(productReducer);

    return store
};
export default configureStore;