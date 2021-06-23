import React, { useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import axios from '../../axios/axios';

import './CartIcon.scss';

const CartIcon = (props) => {
    const numberOfCartItems = useSelector(state => state.collections.numberOfCartItems);
    // const [numberOfCartProducts, setnumberOfCartProducts] = useState(numberOfCartItems);

    // useEffect(() => {
    //     axios.get('https://ecommerce-5aa23-default-rtdb.firebaseio.com/cart.json')
    //     .then(response => {
    //         if(response.data) {
    //             console.log('[CartIcon]', response.data)
    //             setnumberOfCartProducts(Object.values(response.data).length);
    //         }
    //     })
    //     .catch(error => console.log(error));
    // });

    return (
    <div className='cart-icon'>
        <BsBag className='shopping-icon'/>
        <span className='item-count'>{ numberOfCartItems }</span>
    </div>);
};

export default CartIcon;