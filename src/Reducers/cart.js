import { ADD_ITEM_CART, CLEAR_CART, DELETE_ITEM_CART, EDIT_ITEM_CART } from "../Constants/actionsTypes";

const cart = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM_CART:
            return [...state, action.payload]
        case EDIT_ITEM_CART:
            return state.map(item => (item.id === action.payload.id) ? action.payload : item)
        case DELETE_ITEM_CART:
            return state.filter(item => item.id !== action.payload)
        case CLEAR_CART:
            return []
        default: return state;
    }
}
export default cart;