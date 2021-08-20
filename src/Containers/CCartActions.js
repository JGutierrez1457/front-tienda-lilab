import { connect } from 'react-redux'
import CartActions from '../Components/CartActions/CartActions';
import { clearCart } from '../Actions/cart';

const mapStateToProps = (state, ownProps)=>{
    return {
        handleCloseCart : ownProps.closeCart
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleClearCart : ()=>dispatch(clearCart())
    }
}

const CCartActions = connect(mapStateToProps, mapDispatchToProps )(CartActions);
export default CCartActions;