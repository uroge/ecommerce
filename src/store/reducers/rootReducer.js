import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import counterReducer from './counterReducer';

const rootReducer =  combineReducers({
    collections: productsReducer,
    counter: counterReducer
});

export default rootReducer;
