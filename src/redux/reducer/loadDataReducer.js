import {actionTypes} from "../constants/actionTypes"
const iniState=
{
    data:[]
}
export const loadDataReducer =(state=iniState,action)=>
{
 switch(action.type)
 {
    case actionTypes.SET_DATA:
         return {...state, data:action.payload};

    default:
             return state;
 }
}