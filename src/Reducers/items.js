import {  BUY_ITEM, GET_ALL_ITEMS } from '../Constants/actionsTypes'

const items = ( state = [], action)=>{
    switch(action.type){
        case GET_ALL_ITEMS:
            return action.payload;
        default : return state
    }
}
export default items;