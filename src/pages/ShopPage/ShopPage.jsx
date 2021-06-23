import React, { useEffect, useState } from 'react';

import './ShopPage.scss';
import axios from '../../axios/axios';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../../store/actions/actions';
import { buyProductsHandler } from '../../store/actions/actions';

// import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import CartItem from '../../components/CartItem/CartItem';
import CustomButton from '../../components/CustomButton/CustomButton';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

const ShopPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cartProducts = useSelector(state => state.collections.cart);
    const totalPrice = useSelector(state => state.counter.totalPrice);
    const walletValue = useSelector(state => state.counter.walletValue);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://ecommerce-5aa23-default-rtdb.firebaseio.com/cart.json')
        .then(response => {
            if(response.data) {
                const productsFromCart = [];

                for (let key in response.data) {
                    productsFromCart.push({ ...response.data[key], id: key });
                }

                dispatch(getCartProducts(productsFromCart));
            }
        })
        .catch(error => console.log(error));
    }, [dispatch]);

    const checkoutHandler = () => {
        if(walletValue > totalPrice) {
            setIsLoading(true);
            axios.delete(`https://ecommerce-5aa23-default-rtdb.firebaseio.com/cart.json`)
            .then(response => {
                console.log(response);
                const newWalletValue = walletValue - totalPrice;
                localStorage.setItem('walletValue', newWalletValue);
                dispatch(buyProductsHandler(newWalletValue));
                setIsLoading(false);
                setIsModalOpen(true);
            })
            .catch(error => console.log(error));
        } else {
            alert('You don\'t have enought money!');
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }


    const cartItems = cartProducts.map(product => {
        return <CartItem key={product.id} item={product}/>
    }); 

    return (
        <div className="shoppage">
            <h1 className="shoppage__header">Your cart: </h1>

            { isLoading ?  <Loader /> : null}

            <div className="shoppage__cart-items">
                { cartProducts.length ? cartItems : <p className="shoppage__header">There is nothing in your cart</p> }
            </div>

            { isModalOpen ? <Modal modalClosed={closeModal} /> : null }

            { cartProducts.length ? <p className="shoppage__price">Total price: <span className={walletValue > totalPrice ? 'green' : 'red'}>{totalPrice}$</span></p> : null}

            { cartProducts.length ? <CustomButton onClick={checkoutHandler} inverted>Checkout</CustomButton>
            : <Link to="/" style={{textDecoration: 'none'}}>
                <CustomButton inverted>Go back to home page</CustomButton>
            </Link>}
        </div>
    );
}

export default ShopPage;