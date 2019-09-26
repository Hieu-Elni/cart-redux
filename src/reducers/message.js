

import * as mess from './../contants/Message'

//var data = JSON.parse(localStorage.getItem('CART'));
var initialState =  mess.MSG_WELCOME;
const message = (state = initialState, action) => {
    switch (action.type) {
        case  mess.CHANGE_MESSAGE:
            
            return action.message;
        default: return state;
            
    }
}



export default message;