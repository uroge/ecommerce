import * as actionTypes from './actionTypes';

export const addProductToCart = product => {
    return  {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
};

export const getProducts = products => {
    return {
        type: actionTypes.GET_PRODUCTS,
        payload: products
    }
}

export const getCartProducts = products => {
    return {
        type: actionTypes.GET_CART_PRODUCTS,
        payload: products
    }
}

export const buyProductsHandler = newWalletValue => {
    return {
        type: actionTypes.CHECKOUT,
        payload: newWalletValue
    }
}

export const deleteProductFromCart = productToDelete => {
    return {
        type: actionTypes.DELETE_FROM_CART,
        payload: productToDelete
    }
}