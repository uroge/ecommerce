import React, { useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import axios from '../../axios/axios';

import './CartIcon.scss';

const CartIcon = (props) => {
    const [numberOfCartProducts, setnumberOfCartProducts] = useState(0);

    useEffect(() => {
        axios.get('https://ecommerce-5aa23-default-rtdb.firebaseio.com/cart.json')
        .then(response => {
            if(response.data) {
                console.log(response.data)
                setnumberOfCartProducts(Object.values(response.data).length);
            }
        })
        .catch(error => console.log(error));
    }, [numberOfCartProducts]);

    return (
    <div className='cart-icon'>
        <BsBag className='shopping-icon'/>
        <span className='item-count'>{numberOfCartProducts ? numberOfCartProducts : 0}</span>
    </div>);
};

export default CartIcon;