import { ADD_ITEM_CART, CLEAR_CART, EDIT_ITEM_CART, DELETE_ITEM_CART } from "../Constants/actionsTypes";

export const addItem = (item)=>async(dispatch)=>{
    dispatch({
        type : ADD_ITEM_CART,
        payload : item
    })
}
export const editItem = (item)=>async(dispatch)=>{
    dispatch({
        type : EDIT_ITEM_CART,
        payload : item
    })
}
export const deleteItem = (idItem)=>async(dispatch)=>{
    dispatch({
        type : DELETE_ITEM_CART,
        payload : idItem
    })
}
export const clearCart = ()=>async(dispatch)=>{
    dispatch({
        type : CLEAR_CART
    })
}