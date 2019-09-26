import * as types from './../contants/ActionTypes'

var data = JSON.parse(localStorage.getItem('CART'));
// var initialState = [
//     {
//         product: {
//             id : 1,
//             name : 'Iphone 7 Plus',
//             image : 'https://images-na.ssl-images-amazon.com/images/I/51wcd%2Bz24TL._SX425_.jpg',
//             description : 'Sản phẩm do apple sản phẩm',
//             price : 500,
//             inventory : 10,
//             rating : 4
//         },
//         quantity : 5
//     },
//     {
//         product: {
//             id : 3,
//             name : 'Oppo F1s',
//             image : 'http://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg',
//             description : 'Sản phẩm do china sản phẩm',
//             price : 450,
//             inventory : 5,
//             rating : 5
//         },
//         quantity: 2
//     }
// ];
var initialState = data ? data : [];
console.log(initialState);
const cart = (state = initialState, action) => {
    var {product , quantity} = action;
    var index = -1;
    switch (action.type) {  
        case  types.ADD_TO_CART:
            index = findProductInCart(state,action.product);
            if(index === -1) {
                state.push({product,quantity});
            }else{
                state[index].quantity += quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case  types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state,product);
            if(index !==-1){
                state.splice(index,1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
                index = findProductInCart(state, product);
                if(index !== -1){
                    state[index].quantity = quantity;
                }
                localStorage.setItem('CART', JSON.stringify(state));
                return [...state];
        default: return [...state];
            
    }
}

var findProductInCart = (cart,product) => {
    var index = -1;
    if(cart.length >0){
        for (let i=0; i< cart.length; i++){
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;