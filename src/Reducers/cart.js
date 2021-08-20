import { ADD_ITEM_CART, CLEAR_CART, DELETE_ITEM_CART, EDIT_ITEM_CART } from "../Constants/actionsTypes";

const cart = (state = [], action)=>{
    switch(action.type){
        case ADD_ITEM_CART:
            return [...state, action.payload]
        default : return state;
    }
}
export default cart;