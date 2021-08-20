import React,{ useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { getItems } from './Actions/items'
import CListItems from './Containers/CListItems';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getItems())//Solicita todos los items al renderizar app
  })
  return (
    <div className="App">
      <CListItems />
    </div>
  );
}

export default App;
