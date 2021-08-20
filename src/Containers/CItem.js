import { connect } from 'react-redux'
import Item from '../Components/Item/Item';
import { addItem } from '../Actions/cart';


const mapStateToProps = (state, ownProps)=>{
    return {
        item : ownProps.item,
        onCart : state.cart.some( item => item.id === ownProps.item.id )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleAddItemCart : (item)=>dispatch(addItem(item))
    }
}

const CItem = connect(mapStateToProps, mapDispatchToProps )(Item);//Conectamos las funciones al componente de presentación
export default CItem;