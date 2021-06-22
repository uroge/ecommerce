import React, { useEffect } from 'react';

import './ShopPage.scss';
import axios from '../../axios/axios';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../../store/actions/actions';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import CustomButton from '../../components/CustomButton/CustomButton';

const ShopPage = () => {
    
    const cartProducts = useSelector(state => state.collections.cart);
    const totalPrice = useSelector(state => state.counter.totalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://ecommerce-5aa23-default-rtdb.firebaseio.com/cart.json')
        .then(response => {
            if(response.data) {
                dispatch(getCartProducts(Object.values(response.data)));
            }
        })
        .catch(error => console.log(error));
    }, [dispatch]);

    return (
        <div className="shoppage">
            <h1 className="shoppage__header">Your cart: </h1>
            { cartProducts.length ? <CollectionPreview items={cartProducts} button={false} /> : <p className="shoppage__header">There is nothing in your cart</p> }

            { cartProducts.length ? <p className="shoppage__price">Total price: <span>{totalPrice}</span></p> : null}

            { cartProducts.length ? <CustomButton onClick={() => console.log('Checkout')} inverted>Checkout</CustomButton>
            : <Link to="/" style={{textDecoration: 'none'}}>
                <CustomButton onClick={() => console.log('Checkout')} inverted>Go back to home page</CustomButton>
            </Link>}
        </div>
    );
}

export default ShopPage;