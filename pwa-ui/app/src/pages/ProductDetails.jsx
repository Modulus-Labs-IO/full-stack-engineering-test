import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
            <p className="mt-2 text-gray-500">{product.description}</p>
            <p className="mt-2 font-bold">${product.price}</p>
        </div>
    );
};

export default ProductDetails;