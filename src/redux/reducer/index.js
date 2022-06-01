import {combineReducers} from'redux';
import { productReducer, selectProductsReducer,addQuantity } from './productReducer';
import { loadDataReducer } from './loadDataReducer';
import { finalPriceReducer } from './finalPriceReducer';

const reducers= combineReducers({
    allProducts: productReducer,
    product: selectProductsReducer,
    data: loadDataReducer,
    finalPrice: finalPriceReducer,
    countTotal: addQuantity

})

export default reducers;