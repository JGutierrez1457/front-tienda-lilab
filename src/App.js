import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getItems } from './Actions/items';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import CCart from './Containers/CCart';
import CListItems from './Containers/CListItems';
import CCartActions from './Containers/CCartActions';

function App() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false)//Para mostrar o no el dialog de cart
  const openCart = () => {
    setShowCart(true)
  }
  const closeCart = () => {
    setShowCart(false)
  }

  useEffect(() => {
    dispatch(getItems())//Solicita todos los items al renderizar app
  })
  return (
    <div className="App">
      <IconButton onClick={openCart}>
        <ShoppingCart />
      </IconButton>
      <Dialog
        open={showCart}
        keepMounted
        onClose={closeCart}
        maxWidth='md'
      >
        <DialogTitle>Carro de compra</DialogTitle>
        <DialogContent>
          <CCart />
        </DialogContent>
        <DialogActions>
          <CCartActions closeCart={closeCart} />
        </DialogActions>
      </Dialog>
      <CListItems />
    </div>
  );
}

export default App;
