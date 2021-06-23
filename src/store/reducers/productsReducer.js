import * as actionTypes from '../actions/actionTypes';
import { addItemToCart } from './products.utils';

const initialState = {
    products: [],
    cart: [],
    numberOfCartItems: localStorage.getItem('numberOfCartItems') ? localStorage.getItem('numberOfCartItems') : 0
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return {
                ...state,
                products: [...action.payload]
            }

        case actionTypes.ADD_TO_CART:
            localStorage.setItem('numberOfCartItems', state.numberOfCartItems + 1);
            console.log(state.cart)
            return {
                ...state,
                // cart: [...state.cart, action.payload],
                cart: addItemToCart(state.cart, action.payload),
                numberOfCartItems: state.numberOfCartItems + 1
            }
    
        case actionTypes.GET_CART_PRODUCTS:
            return {
                ...state,
                cart: [...action.payload]
            }

        case actionTypes.CHECKOUT:
            localStorage.setItem('numberOfCartItems', 0);
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