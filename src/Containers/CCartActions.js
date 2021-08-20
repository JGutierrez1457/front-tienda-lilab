import { connect } from 'react-redux'
import CartActions from '../Components/CartActions/CartActions';
import { clearCart } from '../Actions/cart';
import { buyItem } from '../Actions/items'


const mapStateToProps = (state, ownProps)=>{
    return {
        items : state.cart,//Para editar los items cuando se accede a comprar
        handleCloseCart : ownProps.closeCart
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleBuyItem : (idItem, quantity)=>dispatch(buyItem(idItem, quantity)),
        handleClearCart : ()=>dispatch(clearCart())
    }
}

const CCartActions = connect(mapStateToProps, mapDispatchToProps )(CartActions);
export default CCartActions;