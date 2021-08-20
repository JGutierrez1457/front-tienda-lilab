import React from 'react'
import { Button } from '@material-ui/core'

function CartActions({ items, handleBuyItem, handleClearCart, handleCloseCart }) {

    const onClearCart = () => {
        handleClearCart();
    }
    const onBuyCart = async () => {
        for (let item of items) {
            await handleBuyItem(item.id, { quantity: item.quantity });//Edita cada item del carro por solicitud al api
        }
        handleClearCart();
    }
    return <>
        {!!items.length && <>
            <Button variant='contained' color='secondary' onClick={onClearCart}>Vaciar</Button>
            <Button variant='contained' color='primary' onClick={onBuyCart}>Comprar</Button>
        </>}
        <Button variant='contained' onClick={handleCloseCart}>Cerrar</Button>
    </>
}

export default CartActions
