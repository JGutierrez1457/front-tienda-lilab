import { connect } from 'react-redux'
import Item from '../Components/Item/Item';

const mapStateToProps = (state, ownProps)=>{
    return {
        item : ownProps.item,
    }
}


const CItem = connect(mapStateToProps, null )(Item);//Conectamos la función al componente de presentación
export default CItem;