import * as actionTypes from '../actions/actionTypes';

const initialState = {
    totalPrice: 0
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
    
        default:
            return state;
    }
};

export default counterReducer;