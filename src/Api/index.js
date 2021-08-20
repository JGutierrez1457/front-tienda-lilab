import axios from 'axios';
let API_URL='http://localhost:3001';
const API = axios.create({ baseURL : API_URL});

export const getItems = ()=>API.get('/api/items');//Función axios con endpoint para recuperar todos los items

export const buyItem = (idItem, quantity)=>API.patch(`/api/items/${idItem}`, quantity);//Función axios con endpoint para edit un item por su id