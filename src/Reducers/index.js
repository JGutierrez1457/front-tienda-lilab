import { combineReducers } from "redux";
import items from './items'
import filter from './filter'
import cart from './cart'
const reducersApp = combineReducers({ items, filter, cart});

export default reducersApp;