import * as API from '../Api'
import { GET_ALL_ITEMS, BUY_ITEM } from '../Constants/actionsTypes';

export const getItems = ()=>async(dispatch)=>{
    try {
        const { data } = await API.getItems();
        dispatch({
            type : GET_ALL_ITEMS,
            payload : data
        })
    } catch (error) {
        console.log(error)
    }
}
export const buyItem = (idItem, quantity)=>async(dispatch)=>{
    try {
        const { data } = await API.buyItem(idItem, quantity);
        dispatch({
            type : BUY_ITEM,
            payload : data
        })
    } catch (error) {
        let err = new Error(error.response.data);
        err.status = error.response.status;
        throw err;
    }
}