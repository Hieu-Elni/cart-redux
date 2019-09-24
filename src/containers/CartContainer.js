import React, {Component} from 'react';

import Cart from './../Components/Cart';
import CartItem from './../Components/CartItem';
import CartResult from './../Components/CartResult';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Message from './../contants/Message'

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
        var result = Message.MSG_CART_EMPTY;
        if(cart.length > 0){
            result = cart.map((item,index) => {
                return (
                    <CartItem  key = {index}
                            index = {index}
                            item = {item}
                    
                    ></CartItem>
                )
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = Message.MSG_CART_EMPTY;
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
export default connect(mapStateToProps)(CartContainer);

