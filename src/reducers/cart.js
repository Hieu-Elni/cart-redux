import * as types from './../contants/ActionTypes'

//var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product: {
            id : 1,
            name : 'Iphone 7 Plus',
            image : 'https://images-na.ssl-images-amazon.com/images/I/51wcd%2Bz24TL._SX425_.jpg',
            description : 'Sản phẩm do apple sản phẩm',
            price : 500,
            inventory : 10,
            rating : 4
        },
        quantity : 5
    },
    {
        product: {
            id : 3,
            name : 'Oppo F1s',
            image : 'http://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg',
            description : 'Sản phẩm do china sản phẩm',
            price : 450,
            inventory : 5,
            rating : 5
        },
        quantity: 2
    }
];
//const initialState = data ? data : [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case  types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: return [...state];
            
    }
}



export default cart;