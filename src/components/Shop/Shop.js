import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product 
                        product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>This is for order <summary></summary></h4>
            </div>
        </div>
    );
};

export default Shop;