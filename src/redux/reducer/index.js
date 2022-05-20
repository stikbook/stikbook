import {combineReducers} from'redux';
import { productReducer, selectProductsReducer } from './productReducer';

const reducers= combineReducers({
    allProducts: productReducer,
    product: selectProductsReducer,
})

export default reducers;