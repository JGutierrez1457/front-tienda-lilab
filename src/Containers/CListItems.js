import { connect } from 'react-redux'
import ListItems from '../Components/ListItems/ListItems';
const getItemFiltered = (state)=>{
    switch(state.filter){
        case 'SHOW_ALL':
            return state.items
        case 'verduras':
            return state.items.filter( item => item.category === 'verduras')
        case 'frutas':
            return state.items.filter( item => item.category === 'frutas')
        default : return state.items
    }
}
const mapStateToProps = (state)=>{
    return {
        items : getItemFiltered(state)//Pasamos los items desde el store redux según el filtro seleccionado
    }
}

const CListItems = connect(mapStateToProps, null )(ListItems);//Conectamos la función al componente de presentación
export default CListItems;