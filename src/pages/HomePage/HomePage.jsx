import React, { useEffect } from 'react';
import './HomePage.scss';

import axios from '../../axios/axios';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCartProducts } from '../../store/actions/actions';

const HomePage = () => {
    const collections = useSelector(state => state.collections.products);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://ecommerce-5aa23-default-rtdb.firebaseio.com/products.json')
        .then(response => {
            if(response.data) {
                dispatch(getProducts(Object.values(response.data)));
            }
        })
        .catch(error => console.log(error));

        axios.get('https://ecommerce-5aa23-default-rtdb.firebaseio.com/cart.json')
        .then(response => {
            if(response.data) {
                dispatch(getCartProducts(Object.values(response.data)));
            }
        })
        .catch(error => console.log(error));
    }, [dispatch]);

    return (
        <div className="homepage">
            { collections ? <CollectionPreview items={collections} button={true} /> : null }
        </div>
    );
}

export default HomePage;