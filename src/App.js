import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getItems } from './Actions/items';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import CCart from './Containers/CCart';
import CListItems from './Containers/CListItems';
import CCartActions from './Containers/CCartActions';
import CFilter from './Containers/CFilter';
import useStyles from './styles'

function App() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false)//Para mostrar o no el dialog de cart
  const classes = useStyles();

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
      <div className={classes.bar}>
      <CFilter />
      <IconButton onClick={openCart}>
        <ShoppingCart />
      </IconButton>
      </div>
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
