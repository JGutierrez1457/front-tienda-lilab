import { BUY_ITEM, GET_ALL_ITEMS } from '../Constants/actionsTypes'

const items = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_ITEMS:
            return action.payload;
        case BUY_ITEM:
            return state.map(item => (item.id === action.payload.id) ? action.payload : item)//Similar a un EDIT_ITEM ya que el api retorna el item actualizado
        default: return state
    }
}
export default items;