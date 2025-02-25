import { Router } from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.get('/', (req, res) => {
    res.send('Hello from Express with TypeScript!');
});

router.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

router.post('/create-checkout-session', async (req, res) => {
    try {
        const { cartItems, customerDetails } = req.body;
        
        const line_items = cartItems.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.title,
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: 1,
        }));
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            customer_email: customerDetails.email,
            line_items,
            success_url: '/api/core/create-checkout-session/success',
            cancel_url: '/api/core/create-checkout-session/cancel',
        });
        
        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


export default router;