import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import './CollectionItem.scss';

const CollectionItem = ({ item }) => {
    const {name, price, imageUrl} = item;
    
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
        <CustomButton onClick={() => console.log('Clicked')} inverted>Add to cart</CustomButton>
    </div>);
};

export default CollectionItem;