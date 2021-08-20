import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

function Item({item}) {
    const classes = useStyles();


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
                        <IconButton  style={{ padding : 6}}>
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
    )
}

export default Item
