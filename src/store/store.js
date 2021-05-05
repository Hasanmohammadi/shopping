import productsReducer from "~src/reducers/productsReducer";
import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
    products:productsReducer
})

const store = createStore(reducer);

export default store;
