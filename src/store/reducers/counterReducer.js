import * as actionTypes from '../actions/actionTypes';

const initialState = {
    totalPrice: 0,
    walletValue: localStorage.getItem('walletValue') ? localStorage.getItem('walletValue') : 1000
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CART_PRODUCTS:
            let price = 0;

            action.payload.forEach(product => {
                price += product.price;
            });
            
            return {
                ...state,
                totalPrice: price
            }

        case actionTypes.CHECKOUT:
            return {
                ...state,
                walletValue: action.payload,
                totalPrice: 0
            }
            
        default:
            return state;
    }
};

export default counterReducer;