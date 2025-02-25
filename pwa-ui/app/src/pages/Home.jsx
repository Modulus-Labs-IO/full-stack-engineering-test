import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="p-4 text-center">
            <h1 className="text-3xl font-bold">Welcome to the Web Store</h1>
            <p className="mt-2">Choose an option below:</p>
            <div className="mt-4">
                <Link to="/store" className="bg-blue-500 text-white px-4 py-2 rounded mx-2">Customer Store</Link>
                <Link to="/dashboard" className="bg-green-500 text-white px-4 py-2 rounded mx-2">Merchant Dashboard</Link>
            </div>
        </div>
    );
};

export default Home;