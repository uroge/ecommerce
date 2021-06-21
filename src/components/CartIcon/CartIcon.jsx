import React from 'react';

import { BsBag } from 'react-icons/bs';

import './CartIcon.scss';

const CartIcon = (props) => (
    <div className='cart-icon'>
        <BsBag className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

export default CartIcon;