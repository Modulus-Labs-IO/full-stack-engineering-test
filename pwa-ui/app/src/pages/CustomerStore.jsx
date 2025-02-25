import React, { useState, useEffect } from 'react';
import ProductList from '../components/Customer/ProductList';
import CartIcon from '../components/Customer/CartIcon';

const CustomerStore = ({ cart, setCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Customer Web Store</h1>
                <CartIcon cartCount={cart.length} />
            </div>
            <ProductList products={products} addToCart={addToCart} />
        </div>
    );
};

export default CustomerStore;