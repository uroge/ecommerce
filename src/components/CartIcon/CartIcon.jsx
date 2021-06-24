import React from 'react';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../store/reducers/cart.selector';

import './CartIcon.scss';

const CartIcon = (props) => {
    const itemCount = useSelector(state => selectCartItemsCount(state));
    
    return (
    <div className='cart-icon'>
        <BsBag className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>);
};

export default CartIcon;