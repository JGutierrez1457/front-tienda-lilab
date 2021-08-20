import { connect } from 'react-redux'
import QuantityItemCart from '../Components/QuantityItemCart/QuantityItemCart';
import { editItem, deleteItem } from '../Actions/cart';

const mapStateToProps = (state, ownProps)=>{
    return {
        item : state.cart.find( item => item.id === ownProps.idItem)
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleEditItemCart : (item)=>dispatch(editItem(item)),
        handleDeleteItemCart : (idItem)=>dispatch(deleteItem(idItem))
    }
}

const CQuantityItemCart = connect(mapStateToProps, mapDispatchToProps )(QuantityItemCart);
export default CQuantityItemCart;