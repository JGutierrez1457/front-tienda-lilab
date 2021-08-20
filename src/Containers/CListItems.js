import { connect } from 'react-redux'
import ListItems from '../Components/ListItems/ListItems';

const mapStateToProps = (state)=>{
    return {
        items : state.items//Pasamos los items desde el store redux
    }
}

const CListItems = connect(mapStateToProps, null )(ListItems);//Conectamos la función al componente de presentación
export default CListItems;