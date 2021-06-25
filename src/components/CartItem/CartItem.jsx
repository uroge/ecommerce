import React from 'react';
import { useDispatch } from 'react-redux';
import './CartItem.scss';

import { BsTrash } from 'react-icons/bs';
import axios from '../../axios/axios';

import { deleteProductFromCart } from '../../store/actions/actions';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    /**
     * Function that deletes specific item from cart, and from database
     * @param {Object} item - item from cart that should be deleted
    */
    const deleteHandler = (item) => {
        axios.delete(`https://ecommerce-5aa23-default-rtdb.firebaseio.com/cart/${item.name}.json`)
            .then(response => {
                console.log(response);
                dispatch(deleteProductFromCart(item));
            })
            .catch(error => console.log(error));
    }

    return (
    <div className="cart-item">
        <img src={item.imageUrl} alt="item"/>
        <div className="cart-item__details">
            <span className="cart-item__name">{item.name}</span>
            <span className="cart-item__price">{item.quantity} x {item.price}</span>
            <BsTrash className="cart-item__delete" onClick={() => deleteHandler(item)}/>
        </div>
    </div>
)};

export default CartItem;