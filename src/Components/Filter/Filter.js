import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'

function Filter({filter, handleSetFilter}) {

    const onChangeFilter=(e)=>{
        handleSetFilter(e.target.value)
    }
    return (
        <FormControl component='fieldset'>
            <FormLabel component='legend'>Filtro</FormLabel>
            <RadioGroup row value={filter} onChange={onChangeFilter}>
                <FormControlLabel 
                    value="verduras"
                    control={<Radio />}
                    label="Verduras"
                    labelPlacement='end'
                />
                <FormControlLabel 
                    value="frutas"
                    control={<Radio />}
                    label="Frutas"
                    labelPlacement='end'
                />
                <FormControlLabel 
                    value="SHOW_ALL"
                    control={<Radio />}
                    label="Todos"
                    labelPlacement='end'
                />
            </RadioGroup>
        </FormControl>
    )
}

export default Filter
