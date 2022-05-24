import {actionTypes} from "../constants/actionTypes"

export const setData=(data)=>
{
    return{
        type: actionTypes.SET_DATA,
        payload: data
    }
} 
