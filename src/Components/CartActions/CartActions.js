import React from 'react'
import { Button} from '@material-ui/core'

function CartActions({ handleClearCart, handleCloseCart}) {

    const onClearCart = ()=>{
        handleClearCart();
    }
  
    return <>
            
            <Button onClick={onClearCart}>Vaciar</Button>
            <Button >Comprar</Button>
            <Button onClick={handleCloseCart}>Cerrar</Button>
    </>
}

export default CartActions
