import {actionTypes} from "../constants/actionTypes"
const iniState=
{
    price: 0
}
export const finalPriceReducer =(state=iniState,action)=>
{
 switch(action.type)
 {
    case actionTypes.CALCULATE_FINAL_PRICE:
         return {...state, data:action.payload.count * action.payload.price};

    default:
             return state;
 }
}