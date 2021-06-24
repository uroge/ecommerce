import * as actionTypes from '../actions/actionTypes';
import { addItemToCart } from './products.utils';

const initialState = {
    products: [],
    cart: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return {
                ...state,
                products: [...action.payload]
            }

        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: addItemToCart(state.cart, action.payload)
            }
    
        case actionTypes.GET_CART_PRODUCTS:
            return {
                ...state,
                cart: [...action.payload]
            }

        case actionTypes.CHECKOUT:
            return {
                ...state,
                cart: [],
                numberOfCartItems: 0
            }
        
        default:
            return state;
    }
};

export default productsReducer;