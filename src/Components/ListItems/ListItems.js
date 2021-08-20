import React from 'react'
import { Grid } from '@material-ui/core'
import CItem from '../../Containers/CItem'

function ListItems({ items }) {
    return (
        <Grid container spacing={3}>
            {items.map(item =><Grid item xs={6} sm={4} md={3} key={item.name}>
                <CItem item={item}/>
            </Grid>)}
        </Grid>
    )
}

export default ListItems
