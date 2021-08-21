import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getItems } from './Actions/items';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, AppBar, Toolbar, Typography, Container } from '@material-ui/core';
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
  },[dispatch])//Evita la ejecución de getItems en cada actualización de App
  return (
    <div className="App">
      <AppBar>
        <Toolbar variant='dense' className={classes.bar}>
          <Typography>Tienda Lima Lab</Typography>
          <IconButton onClick={openCart}>
            <ShoppingCart style={{fill:'white' }}/>
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
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
      <CFilter />
      <CListItems />
      </Container>
    </div>
  );
}

export default App;
