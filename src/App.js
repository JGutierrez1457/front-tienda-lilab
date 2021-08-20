import React,{ useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { getItems } from './Actions/items'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getItems())//Solicita todos los items al renderizar app
  })
  return (
    <div className="App">
      Home
    </div>
  );
}

export default App;
