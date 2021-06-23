import React, { useEffect } from 'react';

import './ShopPage.scss';
import axios from '../../axios/axios';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../../store/actions/actions';
import { buyProductsHandler } from '../../store/actions/actions';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import CustomButton from '../../components/CustomButton/CustomButton';

const ShopPage = () => {
    
    const cartProducts = useSelector(state => state.collections.cart);
    const totalPrice = useSelector(state => state.counter.totalPrice);
    const walletValue = useSelector(state => state.counter.walletValue);

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

    const checkoutHandler = () => {
        if(walletValue > totalPrice) {
            axios.delete(`https://ecommerce-5aa23-default-rtdb.firebaseio.com/cart.json`)
            .then(response => {
                console.log(response);
                const newWalletValue = walletValue - totalPrice;
                localStorage.setItem('walletValue', newWalletValue);
                dispatch(buyProductsHandler(newWalletValue));
            })
            .catch(error => console.log(error));
        } else {
            alert('You don\'t have enought money!');
        }
    }

    return (
        <div className="shoppage">
            <h1 className="shoppage__header">Your cart: </h1>
            { cartProducts.length ? <CollectionPreview items={cartProducts} button={false} /> : <p className="shoppage__header">There is nothing in your cart</p> }

            { cartProducts.length ? <p className="shoppage__price">Total price: <span className={walletValue > totalPrice ? 'green' : 'red'}>{totalPrice}$</span></p> : null}

            { cartProducts.length ? <CustomButton onClick={checkoutHandler} inverted>Checkout</CustomButton>
            : <Link to="/" style={{textDecoration: 'none'}}>
                <CustomButton inverted>Go back to home page</CustomButton>
            </Link>}
        </div>
    );
}

export default ShopPage;