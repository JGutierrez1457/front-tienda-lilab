import { connect } from 'react-redux'
import Cart from '../Components/Cart/Cart';
import { deleteItem } from '../Actions/cart';

const mapStateToProps = (state)=>{
    return {
        items : state.cart//Se pasa como props el estado redux cart
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleDeleteItem : (idItem)=>dispatch(deleteItem(idItem)),//Para tener acceso a eliminar el item desde el carro
    }
}

const CCart = connect(mapStateToProps, mapDispatchToProps )(Cart);//Conectamos las funciones con el componente de presentación
export default CCart;