import { combineReducers } from "redux";
import { productReducer, selectProductsReducer } from "./productReducer";
import { loadDataReducer } from "./loadDataReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectProductsReducer,
  data: loadDataReducer,
});

export default reducers;
