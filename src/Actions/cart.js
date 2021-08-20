import { ADD_ITEM_CART, CLEAR_CART, EDIT_ITEM_CART, DELETE_ITEM_CART } from "../Constants/actionsTypes";

export const addItem = (item)=>async(dispatch)=>{
    dispatch({
        type : ADD_ITEM_CART,
        payload : item
    })
}