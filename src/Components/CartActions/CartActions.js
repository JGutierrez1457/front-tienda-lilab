import React from 'react'
import { Button} from '@material-ui/core'

function CartActions({ items, handleBuyItem, handleClearCart, handleCloseCart}) {

    const onClearCart = ()=>{
        handleClearCart();
    }
    const onBuyCart = async ()=>{
        for(let item of items){
            await handleBuyItem(item.id, { quantity : item.quantity});//Edita cada item del carro por solicitud al api
        }
        handleClearCart();
    }
    return <>
            
            <Button onClick={onClearCart}>Vaciar</Button>
            <Button onClick={onBuyCart}>Comprar</Button>
            <Button onClick={handleCloseCart}>Cerrar</Button>
    </>
}

export default CartActions
