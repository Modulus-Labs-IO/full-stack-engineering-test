import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_publishable_key_here');

const Checkout = ({ cartItems = [] }) => {
    const [customerDetails, setCustomerDetails] = useState({ name: '', email: '', address: '' });
    const total = cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.price, 0) : 0;

    const handleChange = (e) => {
        setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        const stripe = await stripePromise;
        try {
            const response = await fetch(window.location.origin + '/api/core/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cartItems, customerDetails })
            });
            
            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }
            
            const session = await response.json();
            const result = await stripe.redirectToCheckout({ sessionId: session.id });
            if (result.error) {
                console.error(result.error);
            }
        } catch (error) {
            console.error('Payment error:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <p>Total: ${total.toFixed(2)}</p>
                    <form className="mt-4" onSubmit={handlePayment}>
                        <input className="block border p-2 w-full mb-2" type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                        <input className="block border p-2 w-full mb-2" type="email" name="email" placeholder="Email" onChange={handleChange} required />
                        <input className="block border p-2 w-full mb-2" type="text" name="address" placeholder="Shipping Address" onChange={handleChange} required />
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full">
                            Pay Now
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Checkout;
