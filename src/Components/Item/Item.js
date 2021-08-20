import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import CQuantityItemCart from '../../Containers/CQuantityItemCart';

function Item({item, onCart, handleAddItemCart}) {
    const classes = useStyles();

    const onAddItemCart = ()=>{
        handleAddItemCart({//Agregamos estos campos del item al estado de redux cart
            id : item.id,
            name : item.name,
            quantity : 1,//Se agrega 1 elemento, otro componente se encarga de aumentar o disminur cantidad del item en el cart
            price : item.price,
            stock : item.stock
        })
    }
    return (
        <Card>
                    <CardMedia 
                        component='img'
                        alt={item.name}
                        height='200'
                        image={item.image}
                        title={item.name}
                    />
                    <CardContent>
                        <Typography variant='h5' align='center'>{item.name}</Typography>
                        <Typography variant='body2' color='textSecondary'>{item.description}</Typography>
                        <Typography>s/{item.price}</Typography>
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <Typography><b>Stock :</b> {item.stock}</Typography>
                        {(item.stock === 0 )?<Typography variant='body2' style={{ padding : 8}}>Sin stock</Typography>:
                            onCart?<CQuantityItemCart idItem={item.id} />:<IconButton onClick={onAddItemCart}  style={{ padding : 6}}>
                            <AddShoppingCart />
                        </IconButton>}
                    </CardActions>
                </Card>
    )
}

export default Item
