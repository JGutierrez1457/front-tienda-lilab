import { SET_FILTER } from "../Constants/actionsTypes";

const filter = ( state = 'SHOW_ALL', action)=>{
    switch(action.type){
        case SET_FILTER:
            return action.payload
        default : return state;
    }
}
export default filter;