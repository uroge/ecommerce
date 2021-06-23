import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import './CollectionItem.scss';
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from '../../store/actions/actions';
import axios from '../../axios/axios';

const CollectionItem = ({ item, button }) => {
    const {name, price, imageUrl} = item;
    const cartItems = useSelector(state => state.collections.cart);
    const dispatch = useDispatch();

    const addProductToCartHandler = async (product) => {
        const existingCartItem = cartItems.find(cartItem => cartItem.id === product.id);

        let newItemData = {};

        if(existingCartItem) {
            console.log('TRUE')
            cartItems.forEach(cartItem => {
                if(cartItem.id === product.id) {
                    newItemData = {...cartItem, cartItem: product.quantity + 1};

                    axios.patch(`/cart/${cartItem.id}.json`, newItemData)
                    .then(response => {
                        console.log(cartItem.id);
                        console.log(response.data);
                        dispatch(addProductToCart(newItemData));
                    })
                    .catch(error => console.log(error));
                }
            });

        } else {
            console.log('FALSE')
            newItemData = {...product, quantity: 1};

            axios.put(`/cart/${product.name}.json`, newItemData)
            .then(response => {
                dispatch(addProductToCart(newItemData));
            }).catch(error => console.log(error));
        }
    }

    return (
    <div className="collection-item">
        <div 
        className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}$</span>
        </div>
        {button ? <CustomButton onClick={() => addProductToCartHandler(item)} inverted>Add to cart</CustomButton> : null}
    </div>);
};

export default CollectionItem;