
import {actionTypes} from "../constants/actionTypes"


export const calculateFinalPrice=(productInfo)=>
{
    return{
        type:actionTypes.CALCULATE_FINAL_PRICE,
        payload: productInfo,
    };
} 
