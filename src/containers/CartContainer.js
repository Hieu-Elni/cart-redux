import React, {Component} from 'react';

import Cart from './../Components/Cart';
import CartItem from './../Components/CartItem';
import CartResult from './../Components/CartResult';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Message from './../contants/Message'
import { actDeleteProductInCart, actChangeMessage,actUpdateProductInCart } from './../actions/index';
class CartContainer extends Component {
  render(){
      var {cart} = this.props;
   
  return (
    <div>
        <Cart>
            {this.showCartItem(cart)}
            {this.showTotalAmount(cart)}
        </Cart>
    </div>
    );
}

    showCartItem = (cart) =>{
        var {
            onDeleteProductInCart, onUpdateProductInCart,
            onChangeMessage
        } = this.props;
        var result = (<tr>
                        <td>{Message.MSG_CART_EMPTY}</td>
                    </tr>);
        if(cart.length > 0){
            result = cart.map((item,index) => {
                return (
                    <CartItem  key = {index}
                            index = {index}
                            item = {item}
                            onDeleteProductInCart = {onDeleteProductInCart}
                            onUpdateProductInCart = {onUpdateProductInCart}
                            onChangeMessage = {onChangeMessage}
                    ></CartItem>
                )
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result =( <tr><td colSpan="2"></td><td>0</td></tr>);
        if(cart.length > 0){
            result = <CartResult cart = {cart}></CartResult>
        }
        return result;
    }
}

   

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                image : PropTypes.string.isRequired,
                description : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                inventory : PropTypes.number.isRequired,
                rating : PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
    })
    )
}
const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);

