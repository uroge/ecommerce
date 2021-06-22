import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ items, button }) => (
    <div className="collection-preview">
        <div className="preview">
        {items
        .map((item) => (
            <CollectionItem key={item.id} item={item} button={button}/>
        ))}
        </div>
    </div>
);

export default CollectionPreview;