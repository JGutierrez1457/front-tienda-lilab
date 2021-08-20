import { connect } from 'react-redux'
import Filter from '../Components/Filter/Filter';
import { setFilter} from '../Actions/filter'

const mapStateToProps = (state)=>{
    return {
        filter : state.filter //Pasa como propiedad el valor del estado redux filter
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleSetFilter : (filter)=>dispatch(setFilter(filter)),//Pasa la función para accionar el cambio del estado redux filter
    }
}

const CFilter = connect(mapStateToProps, mapDispatchToProps )(Filter);//Conecta las funciones  al componente de presentación
export default CFilter;