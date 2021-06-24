import { createSelector } from 'reselect';

const selectCart = state => state.collections;

export const selectCartItems = createSelector(
    [selectCart],
    (collections) => collections.cart
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cart) => cart.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity, 0)
);