import React, {Component} from 'react';

import Products from './../Components/Products';
import ProductItem from './../Components/ProductItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index';


class ProductsContainer extends Component {


    showProducts(products) {
        var result = null;
        var {onAddToCart, onChangeMessage} = this.props;
        if(products.length >0 ){
            result = products.map((value,key) =>{
                return <ProductItem key = {key} 
                product = {value}
                onAddToCart = {onAddToCart}
                onChangeMessage = {onChangeMessage}
                ></ProductItem>
            });
        }
        return result;
        
    }

render(){
    var {products} = this.props;
  return (
        <Products>
            {this.showProducts(products)}   {/* dang children */}         
        </Products>
    ); 
}

}
ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired
}    

const mapStateToProps = state => {
    return {
        products : state.products
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(actAddToCart(product,1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
