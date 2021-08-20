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