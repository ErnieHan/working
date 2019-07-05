import { combineReducers } from "redux";
import example from "./example";
import saveFetchedProduct from "./saveFetchedProduct";

const product = combineReducers({
  example,
  saveFetchedProduct
});

export default product;
