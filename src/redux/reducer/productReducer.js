import { actionTypes } from "../constants/actionTypes";
const iniState = {
  products: [],
};
export const productReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
