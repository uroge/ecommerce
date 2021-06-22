import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import './CollectionItem.scss';
import { useDispatch } from "react-redux";
import { addProductToCart } from '../../store/actions/actions';

import { app } from '../../firebase/firebase.utils';

const CollectionItem = ({ item, button }) => {
    const {name, price, imageUrl} = item;
    const dispatch = useDispatch();

    const addProductToCartHandler = async (product) => {
        const oldRef = app.database().ref(`products/${product.name}`);
        const newRef = app.database().ref(`cart/${product.name}`);

        try {
          const snap = await oldRef.once('value');
          await newRef.set(snap.val());
          dispatch(addProductToCart(item));
        } catch(err) {
             console.log(err.message);
        }
    }

    return (
    <div className="collection-item">
        <div 
        className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}$</span>
        </div>
        {button ? <CustomButton onClick={() => addProductToCartHandler(item)} inverted>Add to cart</CustomButton> : null}
    </div>);
};

export default CollectionItem;