import React from 'react';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import './CartIcon.scss';

const CartIcon = (props) => {
    const numberOfCartItems = useSelector(state => state.collections.numberOfCartItems);

    return (
    <div className='cart-icon'>
        <BsBag className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>);
};

export default CartIcon;