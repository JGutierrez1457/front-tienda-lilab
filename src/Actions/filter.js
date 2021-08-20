import { SET_FILTER } from "../Constants/actionsTypes"

export const setFilter = (filter)=>async(dispatch)=>{
    dispatch({
        type : SET_FILTER,
        payload : filter
    })
}