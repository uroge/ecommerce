import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    cart: [],
    numberOfCartItems: 0
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
                cart: [...state.cart, action.payload],
                numberOfCartItems: state.numberOfCartItems + 1
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