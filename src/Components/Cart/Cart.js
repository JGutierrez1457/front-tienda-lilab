import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React from 'react'
import { useEffect, useState } from 'react';
import CQuantityItemCart from '../../Containers/CQuantityItemCart'

function Cart({items, handleDeleteItem }) {
    
    const getTotal = (items)=>{//Calcular el total del carro
        return items.map( item => item.price * item.quantity )
                    .reduce( (acc, prev)=>acc+prev,0);
    }
    const [ total, setTotal ] = useState(getTotal(items));
    const onDeleteItem = (idItem)=>{
        handleDeleteItem(idItem);
    }
    useEffect(()=>setTotal(getTotal(items)),[items])//Se recalcula cada vez que los items cambian
    return !!items.length?<TableContainer component={Paper}>
            <Table size='small' style={{ minWidth : 700}}>
                <TableHead>
                    <TableRow>
                        <TableCell>#id</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Cantidad</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Subtotal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item=>(
                        <TableRow key={item.name}>
                            <TableCell component='th' scope='row'>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell style={{ display : 'flex'}}>
                                <CQuantityItemCart idItem={item.id}/>
                                <IconButton onClick={()=>onDeleteItem(item.id)}>
                                    <Delete style={{ fill : 'red'}} />
                                </IconButton>
                            </TableCell>
                            <TableCell>s/{item.price}</TableCell>
                            <TableCell align='right'>s/{item.price * item.quantity}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell />
                        <TableCell />
                        <TableCell />
                        <TableCell style={{ fontWeight : 700}}>Total</TableCell>
                        <TableCell style={{ fontWeight : 700}} align='right'>s/{total}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>:<Typography>Carro vacío</Typography>
    
}

export default Cart
