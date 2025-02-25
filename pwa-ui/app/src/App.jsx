import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomerStore from './pages/CustomerStore';
import MerchantDashboard from './pages/MerchantDashboard';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
    const [cart, setCart] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<CustomerStore cart={cart} setCart={setCart} />} />
                <Route path="/dashboard" element={<MerchantDashboard />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout cartItems={cart} />} />
            </Routes>
        </Router>
    );
}

export default App;