import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="flex justify-between border-b p-2">
                            <span>{item.title} - ${item.price}</span>
                            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;