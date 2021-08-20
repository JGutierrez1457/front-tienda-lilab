import { Button } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'


function QuantityItemCart({item, handleEditItemCart, handleDeleteItemCart}) {
    const classes = useStyles();
    const incrementItemCart = ()=>{//Incrementa cantidad en 1 de item en cart
        if( item.quantity < item.stock ){//Si la cantidad es menor en 1 al stock, sino no hace nada
            handleEditItemCart({...item, quantity : item.quantity + 1})
        }
    }
    const decrementItemCart = ()=>{//Disminuye en 1 la cantidad de item en cart
        if(item.quantity === 1 ){//Si es uno, realiza la acción de eliminar el item de cart
            handleDeleteItemCart(item.id)
        }else{
            handleEditItemCart({...item, quantity : item.quantity - 1})//Si no, solo disminuye en 1 la cantidad
        }
    }
    return (
        <div className={classes.root} >
            <Button onClick={decrementItemCart}>-</Button>
            {item.quantity}
            <Button onClick={incrementItemCart}>+</Button>
        </div>
    )
}

export default QuantityItemCart
