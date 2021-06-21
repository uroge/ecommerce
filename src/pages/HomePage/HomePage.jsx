import React, { useState, useEffect } from 'react';
import './HomePage.scss';

import axios from '../../axios/axios';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const HomePage = () => {
    const [collections, setCollections] = useState(null);

    useEffect(() => {
        axios.get('https://ecommerce-5aa23-default-rtdb.firebaseio.com/products.json')
        .then(response => {
            if(response.data) {
                console.log(Object.values(response.data));
                setCollections(Object.values(response.data));
            }
        })
        .catch(error => console.log(error));
    }, [collections]);

    console.log(collections);
    return (
        <div className="homepage">
            { collections ? <CollectionPreview items={collections}/> : null }
        </div>
    );
}

export default HomePage;