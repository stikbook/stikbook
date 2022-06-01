import {actionTypes} from "../constants/actionTypes"
const iniState=
{
    products:[],
    total:0
}
export const productReducer =(state=iniState,{type,payload})=>
{
 switch(type)
 {
    case actionTypes.SET_PRODUCTS:
         return {...state, products:payload};

    default:
             return state;
 }
}

 export const selectProductsReducer =(state={},{type,payload})=>
{
 switch(type)
 {
    case actionTypes.SELECTED_PRODUCT:
         return {...state, ...payload};
     case actionTypes.REMOVE_SELECTED_PRODUCT:
          return {};

    default:
             return state;
 }
}

export const addQuantity =(state=iniState,action)=>
{
 switch(action.type)
 {
    case actionTypes.ADD_QUANTITY:
     state.total=state.total + 1
         return {...state, total: state.total};

    default:
             return state;
 }
}



